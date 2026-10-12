/* p6-learn-v1
   In-page lessons for the six walkthrough topics.
   Numbers match the Manim scenes: missing mark 90; tank overflow 30 cm and 2000 mL;
   $60 left; taxi $59.30; prism/pyramid counts and a folding cube; 2.51 ÷ 0.06 = 41 r 0.05.
*/
(function(){
 var css = ''
 + '.learn{position:fixed;inset:0;z-index:80;display:flex;flex-direction:column;background:#f6f1ea;color:#1c1c1c}'
 + '.learn[hidden]{display:none}'
 + '.learn-top{display:flex;align-items:center;gap:10px;padding:10px 12px;background:#fffaf7;border-bottom:1px solid #f1e6dc}'
 + '.learn-x{width:auto;margin:0;padding:8px 12px;border:0;border-radius:999px;background:#eee;color:#333;font:800 .95rem/1 system-ui,sans-serif;cursor:pointer}'
 + '.learn-id{flex:1;min-width:0}'
 + '.learn-id h2{margin:0;font:800 1.05rem/1.2 system-ui,sans-serif;color:#5f3dc4}'
 + '.learn-id p{margin:2px 0 0;font:600 .78rem/1.2 system-ui,sans-serif;color:#868e96;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
 + '.learn-count{font:800 .85rem/1 system-ui,sans-serif;color:#d6336c;white-space:nowrap}'
 + '.learn-meter{height:4px;background:#ffe3ec;flex:0 0 auto}'
 + '.learn-meter i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#f783ac,#9775fa);transform:scaleX(.1);transform-origin:left center}'
 + '.learn-stage{flex:0 0 auto;height:clamp(200px,36vh,280px);background:#fff;border-bottom:1px solid #f1e6dc;position:relative}'
 + '.learn-scroll{flex:1;overflow:auto;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:relative}'
 + '.learn-step{min-height:100%;box-sizing:border-box;padding:22px 22px 18px;border-left:4px solid transparent}'
 + '.learn-step.on{border-left-color:#f06595;background:linear-gradient(90deg,#fff,transparent 70%)}'
 + '.learn-step .kicker{margin:0 0 8px;font:800 .72rem/1 system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#d6336c}'
 + '.learn-step h3{margin:0 0 .4em;font-family:Georgia,"Iowan Old Style",Palatino,"Times New Roman",serif;font-weight:500;font-size:1.5rem;line-height:1.25;color:#1c1c1c}'
 + '.learn-step p{margin:0;font-family:Georgia,"Iowan Old Style",Palatino,"Times New Roman",serif;font-size:1.12rem;line-height:1.5;color:#2b2b2b}'
 + '.learn-step .watchout{margin-top:.85em;padding:.75em .85em;background:#fff5f5;border-radius:12px;color:#9b1c1c}'
 + '.learn-foot{display:flex;gap:8px;padding:8px 12px calc(8px + env(safe-area-inset-bottom));background:#fffaf7;border-top:1px solid #f1e6dc}'
 + '.learn-foot .navbtn{margin:0;flex:1}'
 + '.learn .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}'
 + '.board{height:100%;width:min(100%,520px);margin:0 auto;display:flex;flex-direction:column;padding:6px 12px 8px;min-width:0}'
 + '.eq b{display:block;font-family:Georgia,"Iowan Old Style",Palatino,"Times New Roman",serif;font-size:1.55rem;font-weight:500;color:#d6336c;line-height:1.05}'
 + '.eq span{display:block;font:700 .75rem/1.25 system-ui,sans-serif;color:#868e96}'
 + '.plot{position:relative;flex:1;min-height:0;display:flex;gap:8px;align-items:stretch;margin-top:4px}'
 + '.acol{flex:1;position:relative;min-width:0}'
 + '.abar{position:absolute;left:12%;right:12%;bottom:0;height:100%;border-radius:8px 8px 2px 2px;transform:scaleY(.04);transform-origin:center bottom}'
 + '.aline{position:absolute;left:0;right:0;bottom:85%;border-top:2px dashed #f08c00;opacity:0;z-index:2}'
 + '.alabs,.anames{display:flex;gap:8px}'
 + '.alabs b,.anames span{flex:1;text-align:center;font:800 .85rem/1 system-ui,sans-serif;color:#343a40}'
 + '.anames span{font-size:.72rem;color:#868e96;font-weight:700}'
 + '.wtankwrap{flex:1;min-height:0;display:flex;align-items:center;justify-content:center}'
 + '.wtank{position:relative;height:92%;width:min(42vw,150px);border:3px solid #495057;border-top:none;border-radius:0 0 12px 12px;background:#f8f9fa}'
 + '.wwater{position:absolute;left:0;right:0;bottom:0;height:100%;background:rgba(77,171,247,.75);transform:scaleY(.722);transform-origin:center bottom;border-radius:0 0 8px 8px}'
 + '.wrim{position:absolute;left:-3px;right:-3px;bottom:83.333%;height:0;border-top:3px solid #495057}'
 + '.wghost{position:absolute;left:0;right:0;bottom:88.889%;height:0;border-top:2px dashed #e03131;opacity:0}'
 + '.wstone{position:absolute;width:36%;aspect-ratio:1;left:32%;bottom:16%;background:#868e96;border-radius:7px;opacity:0;transform:translateY(-130px)}'
 + '.wspill{position:absolute;left:100%;bottom:70%;margin-left:8px;background:#fa5252;color:#fff;font:800 .72rem/1 system-ui,sans-serif;padding:6px 8px;border-radius:999px;white-space:nowrap;opacity:0;transform:translate(0,0)}'
 + '.wticks{position:absolute;inset:0 0 0 auto;width:0}'
 + '.wticks span{position:absolute;left:8px;font:800 .68rem/1 system-ui,sans-serif;color:#495057;transform:translateY(50%);white-space:nowrap}'
 + '.t0{bottom:0}.t26{bottom:72.222%}.t30{bottom:83.333%}.t32{bottom:88.889%;color:#e03131;opacity:0}'
 + '.wcap{text-align:center;font:700 .72rem/1.2 system-ui,sans-serif;color:#868e96;margin-top:2px}'
 + '.fbar{display:flex;height:52px;margin:14px 4px 8px;border:3px solid #343a40;border-radius:12px;overflow:hidden;background:#fff}'
 + '.fcell{flex:1;position:relative}'
 + '.fcell i{position:absolute;inset:0;opacity:.2;background:#ffe3ec}'
 + '.fbar:not(.split) .fcell:nth-child(2),.fbar:not(.split) .fcell:nth-child(4),.fbar.split .fcell:not(:last-child){box-shadow:inset -3px 0 #343a40}'
 + '.fcap{text-align:center;font-family:Georgia,Palatino,"Times New Roman",serif;font-size:1.05rem;color:#343a40}'
 + '.road{position:relative;height:26px;margin:16px 8px 6px;border-radius:8px;background:#dee2e6;overflow:hidden}'
 + '.first{position:absolute;left:0;top:0;bottom:0;width:37.7358%;background:#ffd43b;transform:scaleX(0);transform-origin:left center}'
 + '.blocks{position:absolute;left:37.7358%;right:0;top:0;bottom:0;display:flex;gap:1px}'
 + '.blk{flex:2;min-width:0;background:#69db7c;transform:scaleX(0);transform-origin:left center;opacity:0}'
 + '.blk.last{flex:1;background:#ff8787}'
 + '.rdlabs{display:flex;justify-content:space-between;font:700 .72rem/1 system-ui,sans-serif;color:#868e96;margin:0 8px}'
 + '.stagein{position:relative;flex:1;min-height:0}'
 + '.layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:4px}'
 + '.formula{width:100%;max-width:340px}'
 + '.formula p{margin:.35em 0;font-family:Georgia,Palatino,"Times New Roman",serif;font-size:1.02rem;line-height:1.35}'
 + '.formula b{display:block;font-family:system-ui,sans-serif;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:#d6336c}'
 + '.formula span{display:inline-block;margin-right:.65em}'
 + '.solids{display:flex;gap:8px;width:100%;height:100%;align-items:center;justify-content:center}'
 + '.solids figure{margin:0;flex:1;max-width:180px;text-align:center}'
 + '.solids svg{width:100%;height:auto;max-height:130px}'
 + '.solids figcaption{font:800 .72rem/1.2 system-ui,sans-serif;color:#343a40}'
 + '.netscene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;perspective:900px}'
 + '.rig{width:calc(var(--s) * 3);height:calc(var(--s) * 4);position:relative;transform-style:preserve-3d;--s:46px}'
 + '.hinge{position:absolute;width:var(--s);height:var(--s);transform-style:preserve-3d}'
 + '.hinge.base{left:var(--s);top:calc(var(--s) * 2)}'
 + '.hinge.L{left:calc(var(--s) * -1);top:0;transform-origin:100% 50%}'
 + '.hinge.R{left:100%;top:0;transform-origin:0 50%}'
 + '.hinge.U{left:0;top:calc(var(--s) * -1);transform-origin:50% 100%}'
 + '.hinge.D{left:0;top:100%;transform-origin:50% 0}'
 + '.hinge.T{left:0;top:calc(var(--s) * -1);transform-origin:50% 100%}'
 + '.sq{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font:800 .68rem/1 system-ui,sans-serif;color:#1a1a1a;border:2px solid #fff;border-radius:5px;box-sizing:border-box}'
 + '.sq.base{background:#ffe066}.sq.L{background:#a5d8ff}.sq.R{background:#b2f2bb}.sq.U{background:#ffc9c9}.sq.D{background:#d0bfff}.sq.T{background:#ffd8a8}'
 + '.dpanel{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0}'
 + '.ld{font:700 1.15rem/1.35 ui-monospace,Menlo,Consolas,monospace;color:#222;text-align:right;min-width:8.5ch}'
 + '.ld .quot{color:#2b8a3e;padding-right:.15ch}'
 + '.ld .dvd{display:flex;justify-content:flex-end}'
 + '.ld .dv{border-right:3px solid #222;border-top:3px solid #222;padding:0 .35ch 0 0;margin-right:.25ch}'
 + '.ld .n{border-top:3px solid #222;padding:0 .15ch}'
 + '.ld .sub{padding-right:.15ch}'
 + '.ld .line{height:3px;background:#222;margin:.1em 0 .1em 1.6ch}'
 + '.rnote{margin:.6em 0 0;font-family:Georgia,Palatino,serif;font-size:1.15rem;color:#c92a2a;position:relative;display:inline-block}'
 + '.rnote i{position:absolute;left:0;right:0;top:54%;height:3px;background:#c92a2a;transform:scaleX(0);transform-origin:left center}'
 + '.jtrack{width:min(100%,300px);height:34px;border-radius:999px;background:#ffd43b;position:relative;overflow:hidden}'
 + '.jfill{position:absolute;left:0;top:0;bottom:0;width:100%;background:#4dabf7;transform:scaleX(.06);transform-origin:left center}'
 + '.jcap{margin:.55em 0 0;font-family:Georgia,Palatino,serif;font-size:1.05rem;text-align:center;color:#343a40}'
 + '@media (prefers-reduced-motion:reduce){.learn-scroll{scroll-behavior:auto}.learn-step{transition:none}}'
 + '@media (max-width:340px){.learn-step{padding:18px 14px}.learn-step h3{font-size:1.3rem}.eq b{font-size:1.3rem}.rig{--s:40px}}';
 var st = document.createElement('style');
 st.textContent = css;
 document.head.appendChild(st);

 var root = document.getElementById('learn');
 if(!root){
  root = document.createElement('div');
  root.id = 'learn';
  document.body.appendChild(root);
 }
 root.className = 'learn';
 root.setAttribute('role','dialog');
 root.setAttribute('aria-modal','true');
 root.setAttribute('aria-labelledby','learnTitle');
 root.hidden = true;
 root.innerHTML = '<p class="sr">Each lesson keeps the picture at the top. Scroll the steps, or tap Prev and Next. The words under the picture say the same thing as the drawing.</p>'
  + '<div class="learn-top"><button type="button" class="learn-x" id="learnClose">Close</button><div class="learn-id"><h2 id="learnTitle"></h2><p id="learnNote"></p></div><div class="learn-count" id="learnCount"></div></div>'
  + '<div class="learn-meter" aria-hidden="true"><i id="learnMeter"></i></div>'
  + '<div class="learn-stage" id="learnStage" aria-hidden="true"></div>'
  + '<div class="learn-scroll" id="learnScroll" tabindex="0"></div>'
  + '<div class="learn-foot"><button type="button" class="btn alt navbtn" id="learnPrev">Prev</button><button type="button" class="btn navbtn" id="learnNext">Next</button></div>';

 var LESSONS = [
  {cat:'T9', title:'Average', note:'Four tests, one missing mark', steps:[
   {k:'The problem', h:'A missing test mark', p:'Four tests have an average of 85. The marks we know are 80, 92 and 78. One mark is missing.'},
   {k:'Total', h:'Start with the total', p:'An average of 85 means the four marks add up to 85 × 4 = 340.'},
   {k:'Known marks', h:'Add the marks you know', p:'80 + 92 + 78 = 250.'},
   {k:'Subtract', h:'Subtract to find the gap', p:'The missing mark is 340 − 250 = 90.'},
   {k:'Level out', h:'The bars level out', p:'An average is the height the bars would share if you evened them out. All four would sit on 85.'},
   {k:'Answer', h:'Missing mark = 90', p:'Use the total of all four tests. Averaging only 80, 92 and 78 leaves the missing mark out.', w:'Watch out: use the total, not the average of the other three.'}
  ]},
  {cat:'T12', title:'Water level', note:'Rise, overflow, spill', steps:[
   {k:'The problem', h:'A stone goes into the tank', p:'The base is 40 cm by 25 cm, and the tank is 30 cm tall. The water is already 26 cm deep. A stone of 6,000 cm³ is dropped in.'},
   {k:'Base', h:'Area of the base', p:'40 × 25 = 1,000 cm². Every extra centimetre of water holds 1,000 cm³.'},
   {k:'Rise', h:'How far the water rises', p:'Rise = 6,000 ÷ 1,000 = 6 cm.'},
   {k:'Too tall', h:'That goes past the top', p:'26 + 6 = 32 cm. The tank is only 30 cm tall, so 32 cm does not fit.'},
   {k:'Spill', h:'The extra water spills', p:'32 − 30 = 2 cm above the rim. Spill = 2 × 1,000 = 2,000 cm³, which is 2,000 mL. The water left in the tank is 30 cm deep.'},
   {k:'Answer', h:'30 cm, and 2,000 mL spills', p:'The stone still takes the place of 6,000 cm³. What cannot fit pours out.', w:'Watch out: water can’t sit higher than the tank. Always check for overflow.'}
  ]},
  {cat:'T8', title:'Fraction of the rest', note:'$360, then a bag', steps:[
   {k:'The problem', h:'$360, spent in two goes', p:'Mary has $360. She spends 1/3 of it on books, then 3/4 of what is left on a bag.'},
   {k:'Books', h:'Books take 1/3', p:'1/3 × 360 = $120.'},
   {k:'Rest', h:'The rest is not the whole amount', p:'Rest = 360 − 120 = $240.'},
   {k:'Bag', h:'The bag is 3/4 of the rest', p:'3/4 × 240 = $180. That is not 3/4 of $360.'},
   {k:'Answer', h:'$60 is left', p:'240 − 180 = $60.', w:'Watch out: 3/4 is of the rest ($240), not of $360.'}
  ]},
  {cat:'T16', title:'Taxi fare', note:'Every 200 m, or part', steps:[
   {k:'The problem', h:'A fare with a “part thereof”', p:'The first 2 km cost $27. After that, every 200 m — or part of 200 m — costs $1.90. The trip is 5.3 km.'},
   {k:'Flag fall', h:'The first 2 km', p:'Those 2 km cost $27. The extra blocks have not started yet.'},
   {k:'Extra', h:'Distance still to charge', p:'5.3 − 2 = 3.3 km. 3.3 km = 3,300 m.'},
   {k:'Blocks', h:'Round the blocks up', p:'3,300 ÷ 200 = 16.5. A part of a block still pays, so that is 17 blocks. The last 100 m counts as a whole block. 17 × $1.90 = $32.30.'},
   {k:'Answer', h:'Fare = $59.30', p:'$27 + $32.30 = $59.30.', w:'Watch out: 16.5 blocks round up to 17. Part of 200 m still pays.'}
  ]},
  {cat:'T13', title:'3-D shapes', note:'Prisms, pyramids, a cube net', steps:[
   {k:'Formulas', h:'Faces, edges, vertices', p:'A prism with an n-sided base has faces n + 2, edges 3n and vertices 2n. A pyramid has faces n + 1, edges 2n and vertices n + 1.'},
   {k:'Prism', h:'Triangular prism', p:'The base has n = 3 sides. Faces 3 + 2 = 5, edges 3 × 3 = 9, vertices 2 × 3 = 6.'},
   {k:'Pyramid', h:'Triangular pyramid', p:'Faces 3 + 1 = 4, edges 2 × 3 = 6, vertices 3 + 1 = 4. A pyramid has one base, so the faces are n + 1, not n + 2.'},
   {k:'Net', h:'A cube net, still flat', p:'Six squares: Base in the middle, Left, Right, Up and Down around it, and Top attached above Up.'},
   {k:'Fold', h:'Fold the sides', p:'Left, Right, Up and Down fold up around Base. Top is still stuck on the end of Up.'},
   {k:'Answer', h:'Close the cube', p:'Top folds over the open side. A cube has 6 faces, 12 edges and 8 vertices.', w:'Watch out: a pyramid has one base, so F = n + 1, not n + 2.'}
  ]},
  {cat:'T5', title:'Decimal remainder', note:'2.51 ÷ 0.06', steps:[
   {k:'The problem', h:'Juice into small cups', p:'There is 2.51 L of juice. Each cup holds 0.06 L. How many full cups, and how much is left?'},
   {k:'Whole numbers', h:'Divide the whole numbers', p:'Multiply both numbers by 100 and the question becomes 251 ÷ 6 = 41 remainder 5. “Remainder 5” is not yet the amount left in litres.'},
   {k:'Scale back', h:'Put the decimal back', p:'6 × 41 = 246, and 251 − 246 = 5. We had multiplied by 100, so that 5 means 0.05, not 5.'},
   {k:'Check', h:'What 41 cups use', p:'41 × 0.06 = 2.46 L.'},
   {k:'Left', h:'Subtract from the juice', p:'2.51 − 2.46 = 0.05 L left over.'},
   {k:'Answer', h:'41 r 0.05', p:'2.51 ÷ 0.06 = 41 remainder 0.05.', w:'Watch out: the remainder keeps the original decimal places. It is not remainder 5.'}
  ]}
 ];

 function reduceMotion(){ return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
 function play(el, dest, opt){
  if(!el || !dest) return;
  opt = opt || {};
  var reduce = reduceMotion();
  var from = {}, to = {}, k;
  for(k in dest){
   if(!Object.prototype.hasOwnProperty.call(dest, k)) continue;
   from[k] = getComputedStyle(el)[k];
   to[k] = dest[k];
   el.style[k] = from[k];
  }
  el.getAnimations().forEach(function(a){ a.cancel(); });
  el.animate([from, to], {
   duration: reduce ? 0 : (opt.duration != null ? opt.duration : 680),
   delay: reduce ? 0 : (opt.delay || 0),
   easing: opt.easing || 'cubic-bezier(.22,.75,.2,1)',
   fill: 'forwards'
  });
 }
 function snap(el, dest){
  if(!el) return;
  el.getAnimations().forEach(function(a){ a.cancel(); });
  for(var k in dest) if(Object.prototype.hasOwnProperty.call(dest, k)) el.style[k] = dest[k];
 }
 var timers = [];
 function later(fn, ms){ var id = setTimeout(fn, ms); timers.push(id); return id; }
 function clearTimers(){ timers.forEach(clearTimeout); timers = []; }
 function money(n){ return '$' + (Math.round(n * 100) / 100).toFixed(2); }

 function eqNodes(stage){
  return {b: stage.querySelector('.eq b'), s: stage.querySelector('.eq span')};
 }
 function setEq(stage, big, small){
  var e = eqNodes(stage);
  if(e.b) e.b.textContent = big;
  if(e.s) e.s.textContent = small;
  stage.dataset.eq = big;
 }

 function drawAverage(stage){
  var colors = ['#4c6ef5','#37b24d','#ae3ec9','#f76707'];
  var marks = [0.80, 0.92, 0.78, 0.90];
  stage.innerHTML = '<div class="board avg"><div class="eq"><b>85</b><span>average of 4</span></div>'
   + '<div class="alabs"><b>80</b><b>92</b><b>78</b><b>?</b></div>'
   + '<div class="plot"><i class="aline"></i>'
   + colors.map(function(c){ return '<div class="acol"><i class="abar" style="background:'+c+'"></i></div>'; }).join('')
   + '</div><div class="anames"><span>1</span><span>2</span><span>3</span><span>4</span></div></div>';
  var bars = [].slice.call(stage.querySelectorAll('.abar'));
  var labs = [].slice.call(stage.querySelectorAll('.alabs b'));
  var line = stage.querySelector('.aline');
  function heights(arr){ bars.forEach(function(b, i){ play(b, {transform:'scaleY('+arr[i]+')'}); }); }
  function labels(txt){ labs.forEach(function(el, i){ el.textContent = txt[i]; }); }
  return function(i){
   if(i <= 2){ labels(['80','92','78','?']); heights([0.80,0.92,0.78,0.04]); play(line,{opacity:'0'}); }
   else if(i === 3){ labels(['80','92','78','90']); heights(marks); play(line,{opacity:'0'}); }
   else if(i === 4){ labels(['85','85','85','85']); heights([0.85,0.85,0.85,0.85]); play(line,{opacity:'1'}); }
   else { labels(['80','92','78','90']); heights(marks); play(line,{opacity:'1'}); }
   var big = ['85','340','250','90','85','90'][i];
   var small = ['average of 4','85 × 4','80 + 92 + 78','340 − 250','levelled out','missing mark'][i];
   setEq(stage, big, small);
  };
 }

 function drawWater(stage){
  stage.innerHTML = '<div class="board water"><div class="eq"><b>26 cm</b><span>water now</span></div>'
   + '<div class="wtankwrap"><div class="wtank"><div class="wwater"></div><i class="wrim"></i><i class="wghost"></i>'
   + '<div class="wstone"></div><div class="wspill">2,000 mL</div>'
   + '<div class="wticks"><span class="t32">32 cm</span><span class="t30">30</span><span class="t26">26</span><span class="t0">0</span></div>'
   + '</div></div><p class="wcap">base 40 cm × 25 cm</p></div>';
  var water = stage.querySelector('.wwater');
  var stone = stage.querySelector('.wstone');
  var ghost = stage.querySelector('.wghost');
  var spill = stage.querySelector('.wspill');
  var t32 = stage.querySelector('.t32');
  function level(cm){ play(water, {transform:'scaleY('+(cm/36)+')'}, {duration:900}); }
  return function(i){
   if(i === 0){ level(26); snap(stone,{opacity:'0', transform:'translateY(-130px)'}); }
   else if(i === 1){ level(26); snap(stone,{opacity:'0', transform:'translateY(-130px)'}); }
   else if(i === 2){ level(32); play(stone,{opacity:'1', transform:'translateY(0px)'}, {duration:900}); }
   else if(i === 3){ level(32); play(stone,{opacity:'1', transform:'translateY(0px)'}, {duration:400}); }
   else { level(30); play(stone,{opacity:'1', transform:'translateY(0px)'}, {duration:400}); }
   play(ghost, {opacity: i>=3 ? '1' : '0'});
   play(t32, {opacity: i>=3 ? '1' : '0'});
   if(i >= 4) play(spill, {opacity:'1', transform:'translate(36px, 28px)'}, {duration:800});
   else snap(spill, {opacity:'0', transform:'translate(0px, 0px)'});
   var big = ['26 cm','1,000 cm²','6 cm','32 cm','2,000 mL','30 cm'][i];
   var small = ['water now','40 × 25','6,000 ÷ 1,000','taller than the tank','spills out','water stops here'][i];
   setEq(stage, big, small);
  };
 }

 function drawFraction(stage){
  stage.innerHTML = '<div class="board frac"><div class="eq"><b>$360</b><span>Mary starts with</span></div>'
   + '<div class="fbar">' + [0,1,2,3,4,5].map(function(){return '<div class="fcell"><i></i></div>';}).join('') + '</div>'
   + '<p class="fcap">$360 altogether</p></div>';
  var bar = stage.querySelector('.fbar');
  var fills = [].slice.call(stage.querySelectorAll('.fcell i'));
  var cap = stage.querySelector('.fcap');
  return function(i){
   var colors = ['#ffe3ec','#ffe3ec','#ffe3ec','#ffe3ec','#ffe3ec','#ffe3ec'];
   var ops = [0.45,0.45,0.45,0.45,0.45,0.45];
   if(i>=1){ colors[0]=colors[1]='#74c0fc'; ops[0]=ops[1]=1; }
   if(i>=2){ colors[2]=colors[3]=colors[4]=colors[5]='#ffd43b'; ops[2]=ops[3]=ops[4]=ops[5]=0.95; }
   if(i>=3){ colors[2]=colors[3]=colors[4]='#b197fc'; ops[2]=ops[3]=ops[4]=1; colors[5]='#fff4e6'; ops[5]=0.35; }
   if(i>=4){ colors[5]='#8ce99a'; ops[5]=1; }
   fills.forEach(function(f, idx){
    f.style.background = colors[idx];
    play(f, {opacity:String(ops[idx])}, {duration:420});
   });
   bar.classList.toggle('split', i>=3);
   cap.textContent = ['$360 altogether','books $120','rest $240','bag $180 · 3/4 of the rest','$60 left'][i];
   var big = ['$360','$120','$240','$180','$60'][i];
   var small = ['Mary starts with','books, 1/3 of 360','the rest','3/4 of $240','left'][i];
   setEq(stage, big, small);
  };
 }

 function drawTaxi(stage){
  var blocks = '';
  for(var n=0;n<17;n++) blocks += '<i class="blk'+(n===16?' last':'')+'"></i>';
  stage.innerHTML = '<div class="board taxi"><div class="eq"><b>5.3 km</b><span>the trip</span></div>'
   + '<div class="road"><div class="first"></div><div class="blocks">'+blocks+'</div></div>'
   + '<div class="rdlabs"><span>0</span><span>2 km · $27</span><span>5.3 km</span></div></div>';
  var first = stage.querySelector('.first');
  var blks = [].slice.call(stage.querySelectorAll('.blk'));
  var run = 0;
  return function(i){
   clearTimers();
   run++;
   var my = run;
   play(first, {transform: i>=1 ? 'scaleX(1)' : 'scaleX(0)'}, {duration:500});
   if(i < 3){
    blks.forEach(function(b){ snap(b, {transform:'scaleX(0)', opacity:'0'}); });
   } else if(i === 3 && !reduceMotion()){
    blks.forEach(function(b){ snap(b, {transform:'scaleX(0)', opacity:'0'}); });
    var k = 0;
    (function step(){
     if(my !== run) return;
     play(blks[k], {transform:'scaleX(1)', opacity:'1'}, {duration:140});
     k++;
     setEq(stage, money(k * 1.9), 'block ' + k + ' of 17');
     if(k < 17) later(step, 48);
     else setEq(stage, '$32.30', '17 × $1.90');
    })();
    return;
   } else {
    blks.forEach(function(b){ play(b, {transform:'scaleX(1)', opacity:'1'}, {duration:180}); });
   }
   var big = ['5.3 km','$27','3,300 m','$32.30','$59.30'][i];
   var small = ['the trip','first 2 km','extra distance','17 × $1.90','$27 + $32.30'][i];
   setEq(stage, big, small);
  };
 }

 function drawShapes(stage){
  var prism = '<svg viewBox="0 0 160 110" aria-hidden="true"><polygon points="16,78 70,78 43,36" fill="#d0ebff" stroke="#1c7ed6" stroke-width="3"/>'
   + '<polygon points="70,78 108,64 78,26 43,36" fill="#a5d8ff" stroke="#1c7ed6" stroke-width="3"/>'
   + '<polygon points="16,78 70,78 108,64 54,64" fill="#74c0fc" stroke="#1c7ed6" stroke-width="3"/></svg>';
  var pyr = '<svg viewBox="0 0 160 110" aria-hidden="true"><polygon points="28,84 92,84 124,66" fill="#d3f9d8" stroke="#2b8a3e" stroke-width="3"/>'
   + '<polygon points="28,84 60,34 92,84" fill="#b2f2bb" stroke="#2b8a3e" stroke-width="3"/>'
   + '<polygon points="92,84 60,34 124,66" fill="#8ce99a" stroke="#2b8a3e" stroke-width="3"/></svg>';
  stage.innerHTML = '<div class="board shapes"><div class="eq"><b>n</b><span>count the base</span></div><div class="stagein">'
   + '<div class="layer" id="lyF"><div class="formula"><p><b>Prism</b><span>F = n + 2</span><span>E = 3n</span><span>V = 2n</span></p>'
   + '<p><b>Pyramid</b><span>F = n + 1</span><span>E = 2n</span><span>V = n + 1</span></p></div></div>'
   + '<div class="layer" id="lyP"><div class="solids"><figure>'+prism+'<figcaption>5 · 9 · 6</figcaption></figure></div></div>'
   + '<div class="layer" id="lyY"><div class="solids"><figure>'+pyr+'<figcaption>4 · 6 · 4</figcaption></figure></div></div>'
   + '<div class="netscene" id="lyN"><div class="rig" id="rig"><div class="hinge base"><div class="sq base">Base</div>'
   + '<div class="hinge L"><div class="sq L">Left</div></div>'
   + '<div class="hinge R"><div class="sq R">Right</div></div>'
   + '<div class="hinge U"><div class="sq U">Up</div><div class="hinge T"><div class="sq T">Top</div></div></div>'
   + '<div class="hinge D"><div class="sq D">Down</div></div>'
   + '</div></div></div></div></div>';
  var lyF = stage.querySelector('#lyF');
  var lyP = stage.querySelector('#lyP');
  var lyY = stage.querySelector('#lyY');
  var lyN = stage.querySelector('#lyN');
  var rig = stage.querySelector('#rig');
  var hL = stage.querySelector('.hinge.L');
  var hR = stage.querySelector('.hinge.R');
  var hU = stage.querySelector('.hinge.U');
  var hD = stage.querySelector('.hinge.D');
  var hT = stage.querySelector('.hinge.T');
  function show(which){
   lyF.style.visibility = which==='f' ? 'visible' : 'hidden';
   lyP.style.visibility = which==='p' ? 'visible' : 'hidden';
   lyY.style.visibility = which==='y' ? 'visible' : 'hidden';
   lyN.style.visibility = which==='n' ? 'visible' : 'hidden';
  }
  return function(i){
   if(i===0) show('f');
   else if(i===1) show('p');
   else if(i===2) show('y');
   else show('n');
   var side = i>=4, lid = i>=5;
   play(rig, {transform: side ? 'rotateX(58deg) rotateY(-36deg)' : 'rotateX(14deg) rotateY(-16deg)'}, {duration:800});
   play(hL, {transform: side ? 'rotateY(90deg)' : 'rotateY(0deg)'}, {duration:900});
   play(hR, {transform: side ? 'rotateY(-90deg)' : 'rotateY(0deg)'}, {duration:900});
   play(hD, {transform: side ? 'rotateX(90deg)' : 'rotateX(0deg)'}, {duration:900});
   play(hU, {transform: side ? 'rotateX(-90deg)' : 'rotateX(0deg)'}, {duration:900});
   play(hT, {transform: lid ? 'rotateX(-90deg)' : 'rotateX(0deg)'}, {duration:900, delay: lid && !reduceMotion() ? 180 : 0});
   var big = ['n','5 · 9 · 6','4 · 6 · 4','6 squares','fold','6 · 12 · 8'][i];
   var small = ['count the base','triangular prism','triangular pyramid','the net, flat','sides up','the cube'][i];
   setEq(stage, big, small);
  };
 }

 function drawDecimal(stage){
  stage.innerHTML = '<div class="board dec"><div class="eq"><b>2.51 L</b><span>juice</span></div><div class="stagein">'
   + '<div class="dpanel" data-p="0"><p class="fcap">2.51 ÷ 0.06</p></div>'
   + '<div class="dpanel" data-p="1"><div class="ld"><div class="quot">41</div><div class="dvd"><span class="dv">6</span><span class="n">251</span></div>'
   + '<div class="sub">24</div><div class="line"></div><div class="sub">11</div><div class="sub">6</div><div class="line"></div><div class="sub">5</div></div></div>'
   + '<div class="dpanel" data-p="2"><p class="rnote">r 5<i></i></p><p class="fcap">the 5 is really 0.05</p></div>'
   + '<div class="dpanel" data-p="3"><div class="jtrack"><i class="jfill"></i></div><p class="jcap"></p></div>'
   + '</div></div>';
  var panels = [].slice.call(stage.querySelectorAll('.dpanel'));
  var strike = stage.querySelector('.rnote i');
  var fill = stage.querySelector('.jfill');
  var cap = stage.querySelector('.jcap');
  return function(i){
   var p = i<=0 ? 0 : i===1 ? 1 : i===2 ? 2 : 3;
   panels.forEach(function(el, idx){ play(el, {opacity: idx===p ? '1' : '0'}, {duration:320}); });
   play(strike, {transform: i>=2 ? 'scaleX(1)' : 'scaleX(0)'}, {duration:420});
   var scale = i>=3 ? 2.46/2.51 : 0.06;
   play(fill, {transform:'scaleX('+scale+')'}, {duration:800});
   if(cap) cap.textContent = i>=5 ? '41 r 0.05' : i===4 ? '0.05 L left' : i===3 ? '41 cups use 2.46 L' : '';
   var big = ['2.51 L','41 r 5','0.05','2.46 L','0.05 L','41 r 0.05'][i];
   var small = ['juice','251 ÷ 6','not remainder 5','41 × 0.06','left in the bottle','the answer'][i];
   setEq(stage, big, small);
  };
 }

 var DRAW = {T9:drawAverage, T12:drawWater, T8:drawFraction, T16:drawTaxi, T13:drawShapes, T5:drawDecimal};
 var byCat = {};
 LESSONS.forEach(function(L){ byCat[L.cat] = L; });

 var scroller, stage, cur = -1, lesson = null, go = null, io = null, lock = false, pushed = false, opener = null, token = 0;
 document.getElementById('learnScroll').addEventListener('pointerdown', function(){ lock = false; token++; });
 document.getElementById('learnScroll').addEventListener('wheel', function(){ lock = false; token++; }, {passive:true});
 document.getElementById('learnScroll').addEventListener('scrollend', function(){
  lock = false;
  if(!root.hidden && lesson) apply(stepAtLine());
 });

 function steps(){ return [].slice.call(scroller.querySelectorAll('.learn-step')); }
 function sizeSteps(){
  var h = scroller.clientHeight || Math.round(window.innerHeight * 0.42);
  var full = Math.max(220, h);
  var list = steps();
  list.forEach(function(el, idx){
   el.style.minHeight = (idx === list.length - 1 ? full : Math.round(full * 0.92)) + 'px';
  });
 }
 function apply(i){
  if(!lesson) return;
  i = Math.max(0, Math.min(lesson.steps.length-1, i));
  if(i === cur) return;
  cur = i;
  steps().forEach(function(el, idx){ el.classList.toggle('on', idx===i); });
  document.getElementById('learnCount').textContent = (i+1) + ' / ' + lesson.steps.length;
  play(document.getElementById('learnMeter'), {transform:'scaleX('+((i+1)/lesson.steps.length)+')'}, {duration:420});
  document.getElementById('learnPrev').disabled = i===0;
  document.getElementById('learnNext').disabled = i===lesson.steps.length-1;
  stage.dataset.step = String(i);
  if(go) go(i);
 }
 function stepAtLine(){
  var r = scroller.getBoundingClientRect();
  var y = r.top + Math.min(56, r.height * 0.28);
  var list = steps(), best = 0;
  for(var i=0;i<list.length;i++){
   var b = list[i].getBoundingClientRect();
   if(b.top <= y + 1 && b.bottom > y) best = i;
  }
  return best;
 }
 function scrollToStep(i){
  var list = steps();
  var el = list[i];
  if(!el) return;
  lock = true;
  var top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
  scroller.scrollTo({top: top, behavior: reduceMotion() ? 'auto' : 'smooth'});
  var my = ++token;
  setTimeout(function(){ if(my===token) lock = false; }, reduceMotion() ? 40 : 750);
 }
 function goto(i, scroll){
  if(!lesson) return;
  i = Math.max(0, Math.min(lesson.steps.length-1, i));
  apply(i);
  if(scroll) scrollToStep(i);
 }

 function render(L){
  lesson = L;
  cur = -1;
  lock = false;
  token++;
  clearTimers();
  if(io){ io.disconnect(); io = null; }
  document.getElementById('learnTitle').textContent = L.title;
  document.getElementById('learnNote').textContent = L.note;
  stage = document.getElementById('learnStage');
  scroller = document.getElementById('learnScroll');
  stage.innerHTML = '';
  scroller.innerHTML = L.steps.map(function(s, i){
   return '<article class="learn-step" data-step="'+i+'"><p class="kicker">Step '+(i+1)+' · '+s.k+'</p><h3>'+s.h+'</h3><p>'+s.p+'</p>'
    + (s.w ? '<p class="watchout">'+s.w+'</p>' : '') + '</article>';
  }).join('');
  scroller.scrollTop = 0;
  sizeSteps();
  go = DRAW[L.cat](stage);
  io = new IntersectionObserver(function(){
   if(lock || root.hidden) return;
   apply(stepAtLine());
  }, {root: scroller, threshold:[0, 0.25, 0.5, 0.75, 1]});
  steps().forEach(function(el){ io.observe(el); });
 }

 function openLearn(cat){
  var L = byCat[cat];
  if(!L) return;
  opener = document.activeElement;
  if(root.hidden){
   root.hidden = false;
   document.body.classList.add('noscroll');
   if(!pushed){
    try{ history.pushState({p6learn:cat}, ''); pushed = true; }catch(e){}
   }
  }
  render(L);
  goto(0, false);
  var c = document.getElementById('learnClose');
  if(c) c.focus();
 }
 function closeLearn(fromPop){
  if(root.hidden) return;
  root.hidden = true;
  document.body.classList.remove('noscroll');
  clearTimers();
  if(io){ io.disconnect(); io = null; }
  cur = -1;
  lock = false;
  token++;
  lesson = null;
  go = null;
  if(pushed && !fromPop){
   pushed = false;
   try{ history.back(); }catch(e){}
  } else pushed = false;
  if(opener && opener.focus){ try{ opener.focus(); }catch(e){} }
  opener = null;
 }

 document.getElementById('learnClose').onclick = function(){ closeLearn(false); };
 document.getElementById('learnPrev').onclick = function(){ goto(cur-1, true); };
 document.getElementById('learnNext').onclick = function(){ goto(cur+1, true); };
 document.addEventListener('keydown', function(e){
  if(root.hidden) return;
  if(e.key==='Escape'){ e.preventDefault(); closeLearn(false); }
  else if(e.key==='ArrowRight'){ e.preventDefault(); goto(cur+1, true); }
  else if(e.key==='ArrowLeft'){ e.preventDefault(); goto(cur-1, true); }
 });
 window.addEventListener('resize', function(){ if(!root.hidden && scroller) sizeSteps(); });
 window.addEventListener('popstate', function(){
  if(!pushed) return;
  pushed = false;
  closeLearn(true);
 });

 window.openLearn = openLearn;
 window.closeLearn = closeLearn;
 window.LEARN_LIST = LESSONS.map(function(L){ return {cat:L.cat, title:L.title, note:L.note}; });
})();
