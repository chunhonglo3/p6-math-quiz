/**
 * 家長讀取 Ansbie 嘅練習紀錄（加喺現有專案，唔好改 doPost）
 * Parent reader for Ansbie's practice rows. Paste beside the existing doPost; do not rewrite doPost.
 *
 * 點貼同重新部署 / How to paste and redeploy
 * 1. 打開而家負責收答題嘅 Apps Script 專案（已經有 doPost 嗰個）。
 *    Open the Apps Script project that already has doPost.
 * 2. 左側檔案旁邊按 ＋，加一個指令碼檔，將呢份 doGet.gs 全文貼上。
 *    Add a script file (+ beside Files) and paste this whole file.
 * 3. 把下面 READ_KEY 由 CHANGE-ME 改成你自己嘅密碼，再儲存。
 *    Change READ_KEY below from CHANGE-ME to your own secret, then save.
 * 4. Deploy → Manage deployments → 鉛筆 Edit → Version 選 New version → Deploy。
 *    Deploy → Manage deployments → pencil Edit → Version: New version → Deploy.
 *    用 New version 先會更新到網上嘅程式，而 /exec 網址維持不變。
 *    New version is what updates the live code, and the /exec URL stays the same.
 * 5. Execute as 保持 Me。Who has access 要係 Anyone，家長頁先讀到（試算表本身仍然私人）。
 *    Keep Execute as: Me. Set Who has access to Anyone so the parent page can read.
 *    The spreadsheet itself stays private.
 *
 * 讀取：GET /exec?rk=你的密碼
 *       GET /exec?rk=你的密碼&since=2026-10-18T00:00:00%2B08:00
 *       GET /exec?rk=你的密碼&callback=p6cb     ← JSONP，避開 CORS 重新導向
 * Read:  GET /exec?rk=YOUR_KEY
 *        optional since=ISO timestamp (rows at or after that time)
 *        optional callback=name for JSONP, if a CORS redirect gets in the way.
 */
var READ_KEY = 'CHANGE-ME';

// 如果個 Script 綁住「P6 Quiz Progress」個試算表，getActive() 就夠。
// 綁唔到先會用呢個 ID。可以改，唔好留空兩個都失效。
// getActive() is used when this project is bound to the spreadsheet.
// The ID below is only a fallback (the private P6 Quiz Progress file).
var P6_SPREADSHEET_ID = '1rPEUBgEl_HBGfm6HF8q-c1roSp1ZE_taSVogXNmWkr4';
var P6_SHEET_NAME = 'P6 Quiz Progress';

var P6_COLUMNS = ['timestamp', 'session_id', 'mode', 'question_id', 'category', 'difficulty', 'correct', 'hint_used', 'time_sec', 'answer_given', 'user'];

function doGet(e) {
  e = e || {};
  var params = e.parameter || {};
  var callback = params.callback;
  var given = String(params.rk == null ? '' : params.rk);
  if (!READ_KEY || given !== String(READ_KEY)) {
    return p6ReadRespond_({ok: false, error: 'unauthorized'}, callback);
  }
  try {
    var pack = p6ReadRows_(params.since);
    pack.ok = true;
    pack.user = 'ansbie';
    if (String(READ_KEY) === 'CHANGE-ME') pack.warning = 'READ_KEY is still CHANGE-ME';
    return p6ReadRespond_(pack, callback);
  } catch (err) {
    return p6ReadRespond_({
      ok: false,
      error: 'sheet',
      detail: String(err && err.message ? err.message : err).slice(0, 180)
    }, callback);
  }
}

function p6ReadRespond_(obj, callback) {
  var json = JSON.stringify(obj);
  var cb = String(callback || '');
  if (cb && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(cb)) {
    return ContentService.createTextOutput(cb + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function p6ReadSheet_() {
  var ss = null;
  try { ss = SpreadsheetApp.getActive(); } catch (ignore) { ss = null; }
  var sh = ss ? ss.getSheetByName(P6_SHEET_NAME) : null;
  if (!sh && P6_SPREADSHEET_ID) {
    ss = SpreadsheetApp.openById(P6_SPREADSHEET_ID);
    sh = ss.getSheetByName(P6_SHEET_NAME);
  }
  if (!sh) throw new Error('找不到分頁 ' + P6_SHEET_NAME);
  return sh;
}

function p6ReadRows_(sinceRaw) {
  var values = p6ReadSheet_().getDataRange().getValues();
  if (!values || !values.length) return {count: 0, since: '', rows: []};
  var header = values[0].map(function (cell) {
    return String(cell == null ? '' : cell).trim().toLowerCase().replace(/\s+/g, '_');
  });
  var col = {};
  var i;
  for (i = 0; i < P6_COLUMNS.length; i++) {
    var name = P6_COLUMNS[i];
    var at = header.indexOf(name);
    col[name] = at >= 0 ? at : i;
  }
  var start = header.indexOf('timestamp') >= 0 || header.indexOf('user') >= 0 ? 1 : 0;
  var sinceMs = NaN;
  var sinceOut = '';
  if (sinceRaw) {
    sinceOut = String(sinceRaw);
    sinceMs = Date.parse(sinceOut);
    if (isNaN(sinceMs)) { sinceMs = NaN; sinceOut = ''; }
  }
  var rows = [];
  var seen = {};
  for (i = start; i < values.length; i++) {
    var line = values[i];
    if (!line || !line.join) continue;
    var user = String(p6ReadCell_(line, col.user) == null ? '' : p6ReadCell_(line, col.user)).trim().toLowerCase();
    // 只要 Ansbie。test 同空白（早期列）唔回傳。
    // Only Ansbie. Drop test rows and early rows with a blank user.
    if (user !== 'ansbie') continue;
    var stamp = p6ReadStamp_(p6ReadCell_(line, col.timestamp));
    var ms = Date.parse(stamp);
    if (!isNaN(sinceMs) && !isNaN(ms) && ms < sinceMs) continue;
    var row = {
      timestamp: stamp,
      session_id: p6ReadText_(p6ReadCell_(line, col.session_id), 80),
      mode: p6ReadText_(p6ReadCell_(line, col.mode), 40),
      question_id: p6ReadText_(p6ReadCell_(line, col.question_id), 80),
      category: p6ReadText_(p6ReadCell_(line, col.category), 80),
      difficulty: p6ReadText_(p6ReadCell_(line, col.difficulty), 40),
      correct: p6ReadBool_(p6ReadCell_(line, col.correct)),
      hint_used: p6ReadBool_(p6ReadCell_(line, col.hint_used)),
      time_sec: p6ReadNum_(p6ReadCell_(line, col.time_sec)),
      answer_given: p6ReadText_(p6ReadCell_(line, col.answer_given), 500),
      user: 'ansbie'
    };
    var key = [row.timestamp, row.session_id, row.question_id, row.answer_given, row.correct ? '1' : '0', row.hint_used ? '1' : '0'].join('|');
    if (seen[key]) continue;
    seen[key] = 1;
    row._ms = isNaN(ms) ? null : ms;
    rows.push(row);
  }
  rows.sort(function (a, b) {
    if (a._ms == null && b._ms == null) return 0;
    if (a._ms == null) return 1;
    if (b._ms == null) return -1;
    return a._ms - b._ms;
  });
  for (i = 0; i < rows.length; i++) delete rows[i]._ms;
  return {count: rows.length, since: sinceOut, rows: rows};
}

function p6ReadCell_(line, index) {
  if (index == null || index < 0 || index >= line.length) return '';
  return line[index];
}

function p6ReadStamp_(v) {
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v.getTime())) {
    return Utilities.formatDate(v, 'Asia/Hong_Kong', "yyyy-MM-dd'T'HH:mm:ss") + '+08:00';
  }
  return String(v == null ? '' : v).trim();
}

function p6ReadText_(v, max) {
  if (v == null) return '';
  var s = String(v).trim();
  if (s.length > max) s = s.slice(0, max);
  return s;
}

function p6ReadBool_(v) {
  if (v === true || v === 1) return true;
  if (v === false || v === 0 || v == null || v === '') return false;
  var s = String(v).trim().toLowerCase();
  return s === 'true' || s === '1' || s === 'yes' || s === 'y';
}

function p6ReadNum_(v) {
  if (typeof v === 'number') return isFinite(v) && v > 0 ? v : 0;
  var n = parseFloat(String(v == null ? '' : v).replace(/,/g, ''));
  return isFinite(n) && n > 0 ? n : 0;
}
