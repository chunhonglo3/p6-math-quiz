/* Self-test for short-answer marking. Run: node answer-check-selftest.js */
const assert = require('assert');
const bank = require('./question_bank.json');
const { answersMatch, check, runAnswerSelfTest, CLASSIC_Q } = require('./classic.js');

let failed = 0;
function expect(cond, msg) {
  if (cond) return;
  failed++;
  console.error('FAIL', msg);
}

if (!runAnswerSelfTest()) failed++;

const T703 = ['12;3', '9/12=3/4', '18/24=9/12=3/4', '18/24 = 9/12 = 3/4', 'c = 12 ; d = 3', 'c = 12 , d = 3'];
const t703 = bank.questions.find(q => q.id === 'T7-03');
const ctx703 = { question: t703.question, unit: t703.unit || '' };
T703.forEach(g => expect(answersMatch([t703.answer], g, ctx703), 'T7-03 primary accepts ' + JSON.stringify(g)));

function ctxOf(q) {
  return { question: q.question, unit: q.unit || '' };
}
function acceptedOf(q) {
  const list = (q.accepted_answers || []).slice();
  if (!list.some(a => String(a) === String(q.answer))) list.unshift(q.answer);
  return list;
}

const sepForms = [',', ';', '；', '、', '，', ' and ', '和'];
bank.questions.filter(q => q.format === 'short').forEach(q => {
  const ctx = ctxOf(q);
  const accepted = acceptedOf(q);
  accepted.forEach(a => {
    expect(answersMatch(accepted, a, ctx), q.id + ' accepts its own ' + JSON.stringify(a));
    expect(answersMatch(accepted, '  ' + String(a).toUpperCase() + '  ', ctx), q.id + ' accepts case/space ' + JSON.stringify(a));
  });
  const primary = String(q.answer);
  if (/[,;；、，]|\band\b|和/.test(primary)) {
    sepForms.forEach(sep => {
      const variant = primary.replace(/\s*(?:,|;|；|、|，|\band\b|和)\s*/g, sep);
      expect(answersMatch(accepted, variant, ctx), q.id + ' separator ' + JSON.stringify(variant));
    });
  }
  expect(!answersMatch(accepted, 'not-the-answer', ctx), q.id + ' rejects junk');
});

function numCtx(id) {
  const q = bank.questions.find(x => x.id === id);
  return { q, ctx: ctxOf(q), accepted: acceptedOf(q) };
}

// Multi-part and formatted answers across the bank.
const cases = [
  ['T7-03', ['12;3', '12 and 3', '12、3', 'c=12, d=3', 'C = 12；D = 3', '9/12=3/4', '18/24=9/12=3/4', '18/24 = 9/12 = 3/4'], ['3;12', '12', '9/13=3/4', '18/24=9/12', 'c=13, d=3']],
  ['T7-08', ['9;40', 'b=9; c=40', '45/9=5=40/8', '45/9 = 40/8', '9 and 40', '９；４０'], ['40, 9', '9', '40', '45/8=5=40/9']],
  ['T13-35', ['10;15', '10 and 15', '10 balls；15 sticks', '10、15', '10balls and 15sticks'], ['15, 10', '10', '1015']],
  ['T13-36', ['7;12', '7 and 12', '7 balls, 12 sticks'], ['12, 7', '7']],
  ['T13-04', ['3;6', '3 and 6', '3 more balls and 6 more sticks'], ['6, 3']],
  ['T13-37', ['3;4', '3 balls and 4 sticks'], ['4;3']],
  ['T13-39', ['4;6', '4 and 6'], ['6 and 4']],
  ['T13-40', ['7;15', '7 faces and 15 edges'], ['15, 7']],
  ['T13-41', ['9;16', '9 faces, 16 edges'], ['16;9']],
  ['T13-09', ['9 and 16', '9 faces；16 edges'], ['16 and 9']],
  ['T13-38', ['9;16', '9 balls and 16 sticks'], ['16, 9']],
  ['T13-42', ['6;12', '6 faces and 12 edges'], ['12, 6']],
  ['T13-43', ['6 and 12'], ['12;6']],
  ['T13-10', ['triangular prism; 9', 'triangular prism, 9 edges', 'Triangular prism and 9'], ['9', 'triangular prism', 'cube, 9']],
  ['T5-04', ['15;1', '15 and 1', '15 times and 1 L left', '15 times；1L left'], ['15', '1', '1;15']],
  ['T5-12', ['14;20', '14 and 20', '14 flowers, 20 cm'], ['20;14', '14']],
  ['T6-03', ['1;2;3;6;9;18', '1 and 2 and 3 and 6 and 9 and 18', '1、2、3、6、9、18'], ['18, 9, 6, 3, 2, 1', '1, 2, 3, 6, 9']],
  ['T6-05', ['61;67;71;73;79', '61 and 67 and 71 and 73 and 79'], ['79, 73, 71, 67, 61', '61']],
  ['T14-21', ['1; trapezium', '1 pair, trapezium', '1 and trapezium', 'trapezium, 1 pair'], ['1', 'trapezium', '2, trapezium', 'parallelogram']],
  ['T3-04', ['thousandths; 0.007', 'thousandths place, 0.007', '0.007', '7/1000'], ['thousandths', '0.07', '7']],
  ['T15-08', ['7', 'Y = 7', 'y is 7', '7.0'], ['8', 'y=6', '70']],
  ['T15-03', ['3k+3', '3 k + 3', '3×k+3', '3*k+3', '3(k+1)', '3(k + 1)'], ['6', '3, 3', '3k', '3k+1']],
  ['T15-04', ['810+20n', '20n+810', '810 + 20 × n', '20*n + 810'], ['830', '20, 810', '810']],
  ['T5-11', ['1/2', '0.50', '.5', '1/2 m', '0.5m'], ['0.6', '2/1', '5']],
  ['T9-09', ['61/25', '2 11/25', '2.440 kg', '2.44kg'], ['2.45', '2']],
  ['T7-01', ['97/24', '4.041666666666667', '4 1/24'], ['4', '4 1/12']],
  ['T7-04', ['3/2', '1.5', '1 1/2'], ['1', '2/3']],
  ['T12-02', ['1200', '1,200', '1 200', '1200 cm3', '1,200cm³'], ['12', '12000', '1,20']],
  ['T16-02', ['56.3', '56.30', '$56.30', '56.3 dollars'], ['56', '563']],
  ['T12-09', ['2', '2L', '2 L', '2 litres'], ['20', '0.2']],
  ['T17-02', ['friday, saturday', 'Friday；Saturday', 'FRIDAY AND SATURDAY', 'Fri and Sat'], ['Saturday and Friday', 'Friday', 'Saturday']],
  ['T17-04', ['march', 'MARCH', 'Mar'], ['April', 'May']],
  ['T19-04', ['north east', 'NORTH-EAST', 'northeast', 'NE', 'N.E.'], ['north', 'south-east', 'east']],
  ['T19-01', ['east', 'EAST', 'E'], ['west', 'north']]
];

cases.forEach(([id, good, bad]) => {
  const { ctx, accepted } = numCtx(id);
  good.forEach(g => expect(answersMatch(accepted, g, ctx), id + ' accepts ' + JSON.stringify(g)));
  bad.forEach(g => expect(!answersMatch(accepted, g, ctx), id + ' rejects ' + JSON.stringify(g)));
});

// A chain from one question must not satisfy another.
expect(!answersMatch(acceptedOf(bank.questions.find(q => q.id === 'T7-08')), '9/12=3/4', ctxOf(bank.questions.find(q => q.id === 'T7-08'))), 'T7-08 rejects T7-03 chain');
expect(!answersMatch(acceptedOf(t703), '45/9=5=40/8', ctx703), 'T7-03 rejects T7-08 chain');

// Classic questions: equivalent numbers, units, sets, days.
const byId = Object.fromEntries(CLASSIC_Q.map(q => [q.id, q]));
expect(check(byId.B3, '3680'), 'B3 3680');
expect(check(byId.B3, '3,680'), 'B3 thousands');
expect(check(byId.B3, '3 680 kg'), 'B3 grouped kg');
expect(check(byId.B3, '3680kg'), 'B3 unit glued');
expect(!check(byId.B3, '3681'), 'B3 wrong');
expect(check(byId.B8, '4 1/4'), 'B8 mixed');
expect(check(byId.B8, '17/4'), 'B8 17/4');
expect(check(byId.B8, '51/12'), 'B8 51/12');
expect(check(byId.B8, '4.25'), 'B8 decimal');
expect(!check(byId.B8, '4'), 'B8 whole only');
expect(check(byId.B2, '12, 1, 6, 4, 3, 2'), 'B2 any order');
expect(check(byId.B2, '1;2;3;4;6;12'), 'B2 semicolons');
expect(check(byId.B2, '1 and 2 and 3 and 4 and 6 and 12'), 'B2 and');
expect(!check(byId.B2, '1,2,3,4,6'), 'B2 missing');
expect(check(byId.B6b, '0.1'), 'B6b');
expect(check(byId.B6b, '1/10'), 'B6b fraction');
expect(check(byId.B6b, '0.1 L'), 'B6b unit');
expect(check(byId.B10, '2,400'), 'B10 comma');
expect(check(byId.B10, '2400 mL'), 'B10 unit');
expect(check(byId.B14, '59.30'), 'B14 money');
expect(check(byId.B14, '$59.30'), 'B14 dollar');
expect(check(byId.B15a, 'Wednesday and Thursday'), 'B15a days');
expect(check(byId.B15a, 'Wed; Thu'), 'B15a short');
expect(!check(byId.B15a, 'Thursday'), 'B15a one day');
expect(check(byId.B15c, '7/26'), 'B15c');
expect(check(byId.B15c, '0.2692307692307692'), 'B15c decimal');

// Single-number answers: off-by-one must fail, and a unit on the question may be present.
bank.questions.filter(q => q.format === 'short').forEach(q => {
  const { ctx, accepted } = { ctx: ctxOf(q), accepted: acceptedOf(q) };
  const primary = String(q.answer).trim();
  if (/^-?\d+(?:\.\d+)?$/.test(primary.replace(/,/g, '')) && !/[a-z]/i.test(primary)) {
    const n = Number(primary.replace(/,/g, ''));
    if (Number.isFinite(n)) {
      expect(!answersMatch(accepted, String(n + 1), ctx), q.id + ' rejects off-by-one');
      if (q.unit && q.unit !== '$') {
        expect(answersMatch(accepted, primary + ' ' + q.unit, ctx), q.id + ' accepts unit ' + q.unit);
        expect(answersMatch(accepted, primary.replace(/,/g, '') + String(q.unit).replace(/\s+/g, ''), ctx), q.id + ' accepts glued unit');
      }
    }
  }
});

if (failed) {
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('all short-answer checks passed');
