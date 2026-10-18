/* Classic P6 questions shared by the quiz (index.html) and the parent tracker.
   B15’s line graph is drawn here so both pages use the same picture. */
const G='<svg viewBox="0 0 340 250" font-size="11" font-family="sans-serif"><text x="170" y="14" text-anchor="middle" font-weight="bold">Number of Books Borrowed</text>'+
(()=>{let s='';for(let v=0;v<=100;v+=10){let y=220-v*1.9;s+=`<line x1="40" x2="330" y1="${y}" y2="${y}" stroke="#ddd"/><text x="34" y="${y+4}" text-anchor="end">${v}</text>`}
const d=[35,50,45,70,60],n=['Mon','Tue','Wed','Thu','Fri'];let p=d.map((v,i)=>`${70+i*60},${220-v*1.9}`).join(' ');
s+=`<polyline points="${p}" fill="none" stroke="#d6336c" stroke-width="2.5"/>`;d.forEach((v,i)=>{s+=`<circle cx="${70+i*60}" cy="${220-v*1.9}" r="4" fill="#d6336c"/><text x="${70+i*60}" y="236" text-anchor="middle">${n[i]}</text>`});
return s+'<line x1="40" x2="40" y1="20" y2="220" stroke="#333"/><line x1="40" x2="330" y1="220" y2="220" stroke="#333"/><text x="185" y="249" text-anchor="middle">Day</text><text x="10" y="120" transform="rotate(-90 10 120)" text-anchor="middle">No. of books</text>'})()+'</svg>';
const M=(id,cat,q,o,a,w,tips)=>({id,cat,t:'m',q,o,a,w,tips});
const S=(id,cat,q,a,w,h,tips)=>({id,cat,t:'s',q,a,w,h,tips});
const CLASSIC_Q=[
M('A1','T2','The population of a town is 2,560,000 (correct to the nearest ten thousand). Which can be the actual population?',['2,554,980','2,565,210','2,556,413','2,549,999'],2,'Range is 2,555,000 ≤ n &lt; 2,565,000. Only 2,556,413 is in the range.',['“Nearest ten thousand” means a range.','Step half of 10,000 down, and up to the next cut-off.','Keep the choice that sits inside the range.']),
M('A2','T1','In 863,584, what is the difference between the values of the two ‘8’s?',['799,920','799,992','720,000','800,080'],0,'800,000 − 80 = 799,920.',['Find both 8s.','Write each 8 as its place value.','Subtract the smaller value from the bigger one.']),
M('A3','T6','‘★’ is a missing digit of the 3-digit number 52★. The number is divisible by both 3 and 4. What is ★?',['0','4','6','8'],3,'Divisible by 4: 520, 524, 528. Digit sum divisible by 3: 5+2+8 = 15 ✓. So ★ = 8.',['For ÷ 4, check the last two digits.','Keep only the choices that pass.','Then keep the one whose digits add up for ÷ 3.']),
M('A4','T5','A bottle holds 2.35 L of water, poured into cups of 0.3 L each. At most how many cups can be filled, and how much is left?',['7 … 0.25 L','7 … 0.025 L','8 … 0.05 L','7 … 2.5 L'],0,'7 × 0.3 = 2.1; 2.35 − 2.1 = 0.25 L.',['Divide the water by one cup.','“At most” means whole cups only.','Leftover = start − cups × 0.3.']),
M('A5','T4','When calculating 4.86 ÷ 0.6, Leo mistakenly worked out 486 ÷ 6. How many times the correct answer was Leo’s answer?',['0.1','10','100','1000'],1,'Correct: 8.1. Leo: 81. 81 ÷ 8.1 = 10.',['Work out the real division.','Work out Leo’s division too.','His answer ÷ the real answer = how many times.']),
M('A6','T4','Which expression has the smallest value?',['2.4 ÷ 0.4','0.24 ÷ 4','24 ÷ 0.4','0.24 ÷ 0.04'],1,'Values: 6, 0.06, 60, 6. Smallest is 0.06.',['Work out all four divisions.','Write the four results in a line.','Circle the smallest.']),
M('A7','T4','5.3 ÷ 0.7 = ?',['7.5 (1 d.p.)','7.56 (2 d.p.)','7.58 (2 d.p.)','7.6 (1 d.p.)'],3,'53 ÷ 7 = 7.5714… → 7.6 (1 d.p.) or 7.57 (2 d.p.).',['Shift the dots: 53 ÷ 7.','Keep dividing past the decimal point.','Round the way each choice asks.']),
M('A8','T9','Which group of numbers has an average of 15?',['12, 14, 16, 20','13, 14, 16, 17','10, 15, 20, 25','11, 13, 15, 19'],1,'Sums ÷ 4: 62÷4=15.5; 60÷4=15 ✓; 70÷4=17.5; 58÷4=14.5.',['Add the four numbers.','Divide that total by 4.','Find the group whose average is 15.']),
M('A9','T9','A choir has 8 members with average age 11.5. Two new members aged 12 and 16 join. What is the new average age?',['11.75','12.5','12','14'],2,'8 × 11.5 = 92. 92 + 12 + 16 = 120. 120 ÷ 10 = 12.',['Old total = people × old average.','Add the two new ages.','New average = new total ÷ new number of people.']),
M('A10','T9','A number is removed from 14, 20, 26, 32 and the average increases by 3. Which number is removed?',['14','20','26','32'],0,'Average 92 ÷ 4 = 23. New average 26 × 3 = 78. Removed 92 − 78 = 14.',['Find the old average, then add 3.','Totals = average × how many numbers.','Removed = old total − new total.']),
M('A11','T8','There were 84 students. 3/7 of them joined the art club, and 1/4 of the art club members were boys. How many girls were in the art club?',['9','27','36','48'],1,'Art club 84 × 3/7 = 36. Boys 36 × 1/4 = 9. Girls 36 − 9 = 27.',['Art club = everyone × 3/7.','Boys = art club × 1/4.','Girls = art club − boys.']),
M('A12','T8','There were 120 cards. 2/5 were red, and 3/4 of the red cards were torn. Which expression gives the number of torn red cards?',['120 × (2/5 + 3/4)','120 × 2/5 × (1 − 3/4)','120 × (1 − 2/5) × 3/4','120 × 2/5 × 3/4'],3,'Red = 120 × 2/5; torn red = 120 × 2/5 × 3/4 = 36.',['First take the fraction that are red.','Then take the fraction of those that are torn.','Match that story to one expression.']),
M('A13','T7','Which of the following is correct?',['2/3 &lt; 5/8','3/4 &gt; 7/9','5/6 = 15/18','4/5 &lt; 7/9'],2,'5/6 = 15/18 ✓. (2/3 = 16/24 &gt; 15/24; 3/4 = 27/36 &lt; 28/36; 4/5 = 36/45 &gt; 35/45.)',['Test one statement at a time.','Make fractions with the same denominator.','Keep the statement that is true.']),
M('A14','T13','Which solid has the same number of edges as a hexagonal pyramid?',['Pentagonal prism','Hexagonal prism','Rectangular prism','Heptagonal pyramid'],2,'Hexagonal pyramid: 2 × 6 = 12 edges. Rectangular prism also has 12 (others: 15, 18, 14).',['A pyramid’s edges = 2 × the base sides.','Count the edges of each choice.','Find the solid with the same count.']),
M('A15','T13','Alice uses exactly 12 sticks and 8 plasticine balls to make a 3-D model. What could it be?',['Triangular prism','Pentagonal pyramid','Hexagonal pyramid','Cube'],3,'Sticks = edges, balls = vertices. Cube: 12 edges, 8 vertices.',['Sticks are edges. Balls are vertices.','Count edges and vertices for each solid.','Match both counts to the sticks and balls.']),
M('A16','T13','A triangular prism is cut by a plane parallel to its triangular base. What is the shape of the cross-section?',['Rectangle','Triangle','Trapezium','Square'],1,'A cut parallel to the base gives the same shape as the base: a triangle.',['The cut is parallel to the base.','A parallel cut copies the base’s shape.','Name that same shape.']),
M('A17','T12','A rectangular tank has a base of 20 cm × 15 cm with water 8 cm deep. A stone sinks completely and the level rises to 10 cm. Volume of the stone?',['600 cm³','2,400 cm³','3,000 cm³','6,000 cm³'],0,'Rise 2 cm. 20 × 15 × 2 = 600 cm³.',['See how many cm the water rose.','That rise equals the stone’s volume.','Volume = length × width × rise.']),
M('A18','T10','3.06 L = ?',['306 mL','3,006 cm³','3,060 cm³','30.6 mL'],2,'1 L = 1000 cm³, so 3.06 L = 3,060 cm³.',['1 L = 1,000 cm³.','1 L is also 1,000 mL.','Multiply by 1,000, then match the unit.']),
M('A19','T14','A trapezium has upper base 6 cm, lower base 14 cm and height 5 cm. What is its area?',['50 cm²','70 cm²','100 cm²','420 cm²'],0,'(6 + 14) × 5 ÷ 2 = 50 cm².',['Add the top base and the bottom base.','Multiply by the height.','Then divide by 2.']),
M('A20','T15','A pen costs $x. A book costs $5 more than 3 times the price of the pen. How much do 1 pen and 1 book cost altogether?',['$(3x + 5)','$(4x − 5)','$(4x + 5)','$(3x + 6)'],2,'Book = 3x + 5. Total = x + 3x + 5 = 4x + 5.',['Write the book as 3 times the pen, plus 5.','The pen is x.','Add pen + book, then join the x terms.']),
S('B1','T6','What is the least number to be added to 2,345 so that it is divisible by 9?',4,'Digit sum 14; next multiple of 9 is 18 → add 4.','',['Add the digits of 2,345.','÷ 9 needs a digit sum of 9, 18, 27…','Jump to the next one. The gap is what you add.']),
S('B2','T6','List all the common factors of 48 and 60.',{set:[1,2,3,4,6,12]},'48: 1,2,3,4,6,8,12,16,24,48. 60: 1,2,3,4,5,6,10,12,15,20,30,60. Common: 1, 2, 3, 4, 6, 12.','Separate with commas',['List every factor of 48.','List every factor of 60.','Write only the numbers in both lists.']),
S('B3','T2','Round off 3,684,520 g to the nearest 10 kg. (answer in kg)',3680,'3,684,520 g = 3,684.52 kg → 3,680 kg.','Answer in kg',['Change grams into kilograms first.','You need the nearest 10 kg.','Look at the ones digit, then round.']),
S('B4','T9','The average of P, Q, R and S is 60. The average of R and S is 75. P is 12 more than Q. Find P.',51,'P+Q+R+S = 240; R+S = 150; P+Q = 90; Q = (90 − 12) ÷ 2 = 39; P = 51.','',['Four-number total = average × 4.','R + S = their average × 2. P + Q is what’s left.','P is 12 more than Q. Split that pair.']),
S('B5','T9','Mandy’s average mark in 4 tests is 82. She wants an average of 84 or above after the 5th test. At least how many marks must she get in the 5th test?',92,'84 × 5 = 420. 82 × 4 = 328. 420 − 328 = 92.','',['Target total = wanted average × 5.','Marks so far = her average × 4.','5th test = target − marks so far.']),
S('B6a','T5','15.4 L of soup is poured into bowls of 0.45 L each. At most how many bowls can be filled?',34,'15.4 ÷ 0.45 = 34 r 0.1 (34 × 0.45 = 15.3).','',['Divide the soup by one bowl.','“At most” keeps whole bowls only.','Bowls × 0.45 must not go past 15.4.']),
S('B6b','T5','15.4 L of soup is poured into bowls of 0.45 L each, filling as many bowls as possible. How much soup is left (in L)?',0.1,'34 × 0.45 = 15.3; 15.4 − 15.3 = 0.1 L.','Answer in L',['First find how many full bowls fit.','Soup used = bowls × 0.45.','Left = soup you started with − soup used.']),
S('B7','T5','9.5 kg of rice is packed into bags. Each bag holds 1.2 kg. How many bags are needed to pack all the rice?',8,'9.5 ÷ 1.2 = 7 r 1.1 → 7 full bags + 1 more = 8 bags (round UP!).','',['Divide the rice by one bag.','A leftover still needs its own bag.','Round up. Do not drop the remainder.']),
S('B8','T7','2 3/4 − 1 5/6 + 3 1/3 = ?',{frac:[51,12]},'= 33/12 − 22/12 + 40/12 = 51/12 = 4 1/4.','e.g. 4 1/4 or 17/4',['Turn each mixed number into a fraction.','Use twelfths for all three.','Do the minus, then the plus. Simplify.']),
S('B9','T8','A shop had 360 eggs. 5/12 were sold in the morning and 3/7 of the remaining eggs were sold in the afternoon. How many eggs were left?',120,'Morning 150; remaining 210. Afternoon 210 × 3/7 = 90. Left 120.','',['Morning sold = all eggs × 5/12.','Subtract to get the remaining eggs.','Afternoon = remaining × 3/7. Then subtract again.']),
S('B10','T12','An open wooden box (no cover) measures 22 cm × 17 cm × 9 cm outside. The wood is 1 cm thick. What is the capacity of the box in mL?',2400,'Inner: (22−2) × (17−2) × (9−1) = 20 × 15 × 8 = 2,400 cm³ = 2,400 mL.','Answer in mL',['There is no lid, and the wood is 1 cm thick.','Length and width lose 1 cm on each side.','Height loses 1 cm on the bottom only. Then multiply.']),
S('B11','T12','A rectangular tank is 30 cm long and 20 cm wide, with water 12 cm deep. After 6 identical iron balls are put in (fully under water), the level rises to 15 cm. Volume of each ball (cm³)?',300,'Rise 3 cm. 30 × 20 × 3 = 1,800 cm³. 1,800 ÷ 6 = 300 cm³.','',['Find how many cm the water rose.','Base × rise = the volume of all the balls.','Divide by how many balls.']),
S('B12','T12','A cuboid container has a base of 16 cm × 10 cm. Jason pours in 1.2 L of water and then 2 cups of 400 mL. What is the height of the water (cm)?',12.5,'1,200 + 800 = 2,000 cm³. 2,000 ÷ 160 = 12.5 cm.','',['Turn litres and mL into cm³.','Add the water and the two cups.','Height = volume ÷ (length × width).']),
S('B13','T11','A cuboid is 12 cm × 8 cm × 10 cm. A smaller cuboid 4 cm × 8 cm × 5 cm is cut away from one top corner. Volume of the remaining solid (cm³)?',800,'960 − 160 = 800 cm³.','',['Find the volume of the big cuboid.','Find the volume of the piece cut off.','Remaining = big − small.']),
S('B14','T16','Taxi fare: first 2 km (or part) $27; every subsequent 200 m or part thereof $1.90. Mrs Lee travels 5.3 km. How much is the fare ($)?',59.3,'Extra 3.3 km = 3,300 m; 3,300 ÷ 200 = 16.5 → 17 parts. 27 + 17 × 1.90 = $59.30.','',['The first 2 km has its own fare.','Change the extra distance into metres, in steps of 200 m.','A leftover piece still counts as one step. Then add the fare.']),
S('B15a','T17',G+'(a) Between which two consecutive days was the change in books borrowed the greatest?',{days:['wed','thu']},'Mon 35, Tue 50, Wed 45, Thu 70, Fri 60. Changes: +15, −5, +25, −10 → Wednesday to Thursday.','e.g. Mon and Tue',['Read the number of books for each day.','Find the change from one day to the next.','Pick the biggest change, up or down.']),
S('B15b','T17',G+'(b) What was the average number of books borrowed per day?',52,'35+50+45+70+60 = 260. 260 ÷ 5 = 52.','',['Add the books from every day.','Count how many days there are.','Average = total ÷ number of days.']),
S('B15c','T17',G+'(c) What fraction of the total number of books was borrowed on Thursday?',{frac:[7,26]},'70 / 260 = 7/26.','Fraction, e.g. 1/2',['Read Thursday’s number of books.','Add all the days to get the total.','Fraction = Thursday ÷ total. Then simplify.']),
];

/* Short-answer marking shared by the quiz.
   Tolerant of case, spacing, full-width characters, list separators,
   variable labels, equivalent number forms, optional units, and
   equation chains that fill in the blanks from the question. */
const ANSWER_IGNORABLE = [
  'ball','balls','stick','sticks','face','faces','edge','edges',
  'time','times','left','flower','flowers','more','pair','pairs','place',
  'of','the','a','an','to','is','are','equals','equal',
  'cm3','cm2','m3','m2','cm','mm','km','ml','kg','mg','g','l','m',
  'sec','secs','second','seconds','minute','minutes','min','mins',
  'mark','marks','dollar','dollars','cent','cents',
  'litre','litres','liter','liters','millilitre','millilitres','milliliter','milliliters',
  'metre','metres','meter','meters','gram','grams','kilogram','kilograms',
  'cubic','square','bag','bags','bowl','bowls','egg','eggs','book','books','cup','cups'
];
function escapeRe(s){return String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function baseNorm(s){
  return String(s==null?'':s)
    .normalize('NFKC')
    .replace(/\u3001/g,',')
    .replace(/[−–—]/g,'-')
    .replace(/[×·∙*]/g,'x')
    .replace(/[³]/g,'3')
    .replace(/[²]/g,'2')
    .replace(/[$£¥]/g,'')
    .toLowerCase()
    .replace(/\s+/g,' ')
    .trim();
}
function closeNums(a,b){
  if(typeof a!=='number'||typeof b!=='number')return false;
  if(!Number.isFinite(a)||!Number.isFinite(b))return false;
  return Math.abs(a-b)<=1e-6;
}
function protectThousands(s){
  let prev;
  do{
    prev=s;
    s=s.replace(/(\d),(\d{3})(?!\d)/g,'$1$2');
  }while(s!==prev);
  return s;
}
function stripAssign(s){
  return s.replace(/(^|[^a-z])([a-z])\s*(?:=|is)\s*/g,'$1');
}
function unifySeps(s){
  return s.replace(/\s*(?:,|;|&|\band\b|和)\s*/g,',');
}
function canon(s){
  let t=unifySeps(baseNorm(s));
  t=protectThousands(t);
  t=stripAssign(t);
  t=t.replace(/([a-z])\.(?=[a-z])/g,'$1');
  t=t.replace(/\s+/g,'');
  t=t.replace(/([a-z])-(?=[a-z])/g,'$1');
  t=t.replace(/(\d)x(?=[a-z(])/g,'$1');
  t=t.replace(/([a-z)])x(?=\d)/g,'$1');
  t=t.replace(/,+/g,',').replace(/^,|,$/g,'');
  t=t.replace(/[.!?]+$/g,'');
  return t;
}
function extraUnits(unit){
  const set=new Set();
  const u=baseNorm(unit||'').replace(/\s+/g,'');
  if(!u||u==='$')return set;
  set.add(u);
  if(u.endsWith('s')&&u.length>2)set.add(u.slice(0,-1));
  else if(!u.endsWith('s'))set.add(u+'s');
  return set;
}
function ignorableWordRe(unit){
  const words=ANSWER_IGNORABLE.concat([...extraUnits(unit)]);
  words.sort((a,b)=>b.length-a.length);
  return new RegExp('\\b(?:'+words.map(escapeRe).join('|')+')\\b','g');
}
function stripGluedUnits(s,unit){
  let t=s;
  const longs=['millilitres','milliliters','kilograms','millilitre','milliliter','kilogram','seconds','second','minutes','litres','liters','metres','meters','grams','cm3','cm2','m3','m2','cm','mm','km','ml','kg','mg'];
  longs.sort((a,b)=>b.length-a.length);
  t=t.replace(new RegExp('(\\d)\\s*(?:'+longs.join('|')+')\\b','g'),'$1 ');
  t=t.replace(/(\d)\s*(?:l|g|m)\b/g,'$1 ');
  extraUnits(unit).forEach(u=>{
    if(u)t=t.replace(new RegExp('(\\d)\\s*'+escapeRe(u)+'\\b','g'),'$1 ');
  });
  return t;
}
function parseNumberToken(tok){
  const t=String(tok).trim();
  let m;
  if((m=t.match(/^(-?)(\d+)\s+(\d+)\/(\d+)$/))){
    const den=+m[4];
    if(!den)return null;
    const mag=+m[2]+(+m[3])/den;
    return m[1]==='-'?-mag:mag;
  }
  if((m=t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/))){
    const den=+m[2];
    if(!den)return null;
    return +m[1]/den;
  }
  if((m=t.match(/^(-?(?:\d+(?:\.\d+)?|\.\d+))$/)))return +m[1];
  return null;
}
function parseNumberList(s){
  const t=String(s).replace(/\s*\/\s*/g,'/').trim();
  if(!t)return null;
  if(/^(-?\d+\s+\d+\/\d+|-?\d+(?:\.\d+)?\/-?\d+(?:\.\d+)?|-?(?:\d+(?:\.\d+)?|\.\d+))$/.test(t)){
    const n=parseNumberToken(t);
    return n==null||Number.isNaN(n)?null:[n];
  }
  if(!/\s/.test(t))return null;
  const bits=t.split(/\s+/), nums=[];
  for(const b of bits){
    if(!/^(-?\d+(?:\.\d+)?\/-?\d+(?:\.\d+)?|-?(?:\d+(?:\.\d+)?|\.\d+))$/.test(b))return null;
    const n=parseNumberToken(b);
    if(n==null||Number.isNaN(n))return null;
    nums.push(n);
  }
  return nums.length?nums:null;
}
function mixedExtract(p){
  const numbers=[];
  const rest=p.replace(/-?\d+\s+\d+\/\d+|-?\d+(?:\.\d+)?\/-?\d+(?:\.\d+)?|-?\d+(?:\.\d+)?/g,m=>{
    const n=parseNumberToken(m);
    if(n==null||Number.isNaN(n))return m;
    numbers.push(n);
    return ' ';
  });
  const words=rest.split(/[^a-z]+/).filter(Boolean).map(w=>w.replace(/-/g,''));
  return {numbers,words};
}
function parsePart(part,unit){
  let p=String(part).trim().replace(/[.!?]+$/g,'');
  if(!p)return {numbers:[],words:[]};
  p=p.replace(ignorableWordRe(unit),' ');
  p=stripGluedUnits(p,unit);
  p=p.replace(/\s*\/\s*/g,'/').replace(/\s+/g,' ').trim();
  if(!p)return {numbers:[],words:[]};
  const compact=p.replace(/\s+/g,'');
  if(/[a-z]/.test(compact)&&/\d/.test(compact)&&/[a-z]\d|\d[a-z]/.test(compact)){
    let expr=compact.replace(/(\d)x(?=[a-z(])/g,'$1').replace(/([a-z)])x(?=\d)/g,'$1');
    expr=expr.replace(/([a-z])-(?=[a-z])/g,'$1');
    return {numbers:[],words:[expr]};
  }
  if(!/[a-z]/.test(p)){
    const nums=parseNumberList(p);
    if(!nums)return null;
    return {numbers:nums,words:[]};
  }
  if(/^[a-z][a-z-]*(\s+[a-z][a-z-]*)*$/.test(p)){
    return {numbers:[],words:p.split(/\s+/).map(w=>w.replace(/-/g,''))};
  }
  const mixed=mixedExtract(p);
  if(!mixed.numbers.length&&!mixed.words.length)return null;
  return mixed;
}
function signature(raw,unit){
  let s=unifySeps(baseNorm(raw));
  s=protectThousands(s);
  s=stripAssign(s);
  const parts=s.split(',').map(x=>x.trim()).filter(Boolean);
  const numbers=[], words=[];
  for(const part of parts){
    const bit=parsePart(part,unit);
    if(!bit)return null;
    numbers.push(...bit.numbers);
    words.push(...bit.words);
  }
  if(!numbers.length&&!words.length)return null;
  return {numbers,words};
}
function maybeGrouped(nums){
  if(!nums||nums.length<2)return null;
  if(!nums.every(n=>Number.isInteger(n)&&n>=0&&n<=1e15))return null;
  const parts=nums.map(n=>String(n));
  if(parts[0].length>3)return null;
  if(!parts.slice(1).every(p=>p.length===3))return null;
  const v=Number(parts.join(''));
  return Number.isSafeInteger(v)?v:null;
}
function sigEqual(exp,got){
  if(!exp||!got)return false;
  if(exp.numbers.length===got.numbers.length&&exp.words.length===got.words.length
    &&exp.numbers.every((n,i)=>closeNums(n,got.numbers[i]))
    &&exp.words.every((w,i)=>w===got.words[i])
    &&(exp.numbers.length||exp.words.length))return true;
  if(!exp.words.length&&!got.words.length&&exp.numbers.length===1&&got.numbers.length>1){
    const g=maybeGrouped(got.numbers);
    if(g!=null&&closeNums(g,exp.numbers[0]))return true;
  }
  return false;
}
function parseQAtom(tok){
  const t=String(tok).replace(/\s+/g,'');
  let m;
  if((m=t.match(/^(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/)))return {num:{v:+m[1]},den:{v:+m[2]},bare:false};
  if((m=t.match(/^(\d+(?:\.\d+)?)\/([a-z])$/)))return {num:{v:+m[1]},den:{x:m[2]},bare:false};
  if((m=t.match(/^([a-z])\/(\d+(?:\.\d+)?)$/)))return {num:{x:m[1]},den:{v:+m[2]},bare:false};
  if((m=t.match(/^([a-z])\/([a-z])$/)))return {num:{x:m[1]},den:{x:m[2]},bare:false};
  if((m=t.match(/^(\d+(?:\.\d+)?)$/)))return {num:{v:+m[1]},den:{v:1},bare:true};
  if((m=t.match(/^([a-z])$/)))return {num:{x:m[1]},den:{v:1},bare:true};
  return null;
}
function chainVars(parts){
  const names=[];
  parts.forEach(p=>{
    if(p.num.x&&names.indexOf(p.num.x)<0)names.push(p.num.x);
    if(p.den.x&&names.indexOf(p.den.x)<0)names.push(p.den.x);
  });
  return names;
}
function findQuestionChain(text){
  const src=baseNorm(text).replace(/<[^>]+>/g,' ');
  const atom='(?:\\d+(?:\\.\\d+)?\\s*\\/\\s*(?:\\d+(?:\\.\\d+)?|[a-z])|[a-z]\\s*\\/\\s*(?:\\d+(?:\\.\\d+)?|[a-z])|\\d+(?:\\.\\d+)?|[a-z])';
  const re=new RegExp(atom+'(?:\\s*=\\s*'+atom+')+','gi');
  let m,best=null;
  while((m=re.exec(src))){
    const bits=m[0].split('=').map(x=>x.trim());
    if(bits.length<2||bits.length>6)continue;
    const parts=bits.map(parseQAtom);
    if(parts.some(p=>!p))continue;
    const vars=chainVars(parts);
    const frac=parts.some(p=>!p.bare);
    if(!vars.length||!frac)continue;
    if(!best||vars.length>best.vars.length)best={parts,vars};
  }
  return best;
}
function parseAssignments(answer){
  const s=baseNorm(answer);
  const out={};
  const re=/([a-z])\s*=\s*(-?\d+(?:\.\d+)?|\d+\s*\/\s*\d+)/g;
  let m;
  while((m=re.exec(s))){
    out[m[1]]=m[2].indexOf('/')>=0?parseNumberToken(m[2].replace(/\s+/g,'')):+m[2];
  }
  return out;
}
function parseNumericChain(given){
  let s=baseNorm(given).replace(/[.!?]+$/g,'').trim();
  if(s.indexOf('=')<0)return null;
  const bits=s.split('=').map(x=>x.trim()).filter(Boolean);
  if(bits.length<2||bits.length>6)return null;
  const atoms=[];
  for(const bit of bits){
    const t=bit.replace(/\s+/g,'');
    let m, atom=null;
    if((m=t.match(/^(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/)))atom={num:+m[1],den:+m[2],bare:false};
    else if((m=t.match(/^(\d+(?:\.\d+)?)$/)))atom={num:+m[1],den:1,bare:true};
    if(!atom||!atom.den)return null;
    atoms.push(atom);
  }
  return atoms;
}
function expectedVarMap(qChain,acceptedList){
  const map={};
  acceptedList.forEach(a=>{
    const asg=parseAssignments(a);
    Object.keys(asg).forEach(k=>{map[k]=asg[k]});
  });
  if(qChain.vars.every(n=>map[n]!=null&&Number.isFinite(map[n])))return map;
  if(qChain.vars.length<2)return null;
  for(const a of acceptedList){
    const sig=signature(a,'');
    if(sig&&!sig.words.length&&sig.numbers.length===qChain.vars.length){
      const z={};
      qChain.vars.forEach((n,i)=>{z[n]=sig.numbers[i]});
      return z;
    }
  }
  return null;
}
function slotsMatch(qAtom,sAtom,assigns){
  const sval=sAtom.num/sAtom.den;
  if(qAtom.bare){
    if(qAtom.num.x){
      if(assigns[qAtom.num.x]!=null&&!closeNums(assigns[qAtom.num.x],sval))return false;
      assigns[qAtom.num.x]=sval;
      return true;
    }
    return closeNums(qAtom.num.v,sval);
  }
  if(sAtom.bare)return false;
  function slot(slot,value){
    if(slot.x){
      if(assigns[slot.x]!=null&&!closeNums(assigns[slot.x],value))return false;
      assigns[slot.x]=value;
      return true;
    }
    return closeNums(slot.v,value);
  }
  return slot(qAtom.num,sAtom.num)&&slot(qAtom.den,sAtom.den);
}
function chainMatches(question,acceptedList,given){
  const q=findQuestionChain(question);
  if(!q)return false;
  const student=parseNumericChain(given);
  if(!student)return false;
  const expected=expectedVarMap(q,acceptedList);
  if(!expected)return false;
  function rec(i,j,assigns){
    if(j===student.length)return q.vars.every(n=>assigns[n]!=null&&closeNums(assigns[n],expected[n]));
    for(let k=i;k<q.parts.length;k++){
      const next=Object.assign({},assigns);
      if(slotsMatch(q.parts[k],student[j],next)&&rec(k+1,j+1,next))return true;
    }
    return false;
  }
  return rec(0,0,{});
}
function answersMatch(accepted,given,ctx){
  ctx=ctx||{};
  const g=String(given==null?'':given).trim();
  if(!g)return false;
  const list=(accepted||[]).filter(a=>a!=null&&String(a).trim()!=='');
  for(const a of list){
    if(canon(g)===canon(a))return true;
    if(sigEqual(signature(g,ctx.unit),signature(a,ctx.unit)))return true;
  }
  if(ctx.question&&chainMatches(ctx.question,list,g))return true;
  return false;
}
function check(q,v){
  const a=q&&q.a;
  const s=baseNorm(v);
  if(typeof a==='number'){
    const sig=signature(v,'');
    if(!sig||sig.words.length)return false;
    if(sig.numbers.length===1)return closeNums(sig.numbers[0],a);
    const grouped=maybeGrouped(sig.numbers);
    return grouped!=null&&closeNums(grouped,a);
  }
  if(a&&a.frac){
    const sig=signature(v,'');
    return !!(sig&&!sig.words.length&&sig.numbers.length===1&&closeNums(sig.numbers[0],a.frac[0]/a.frac[1]));
  }
  if(a&&a.set){
    const sig=signature(v,'');
    let nums=sig?sig.numbers.slice():null;
    if(!nums)nums=(s.match(/\d+(?:\.\d+)?/g)||[]).map(Number);
    if(nums.length!==a.set.length)return false;
    const got=nums.slice().sort((x,y)=>x-y);
    const exp=a.set.slice().sort((x,y)=>x-y);
    return exp.every((n,i)=>closeNums(n,got[i]));
  }
  if(a&&a.days){
    const all=['mon','tue','wed','thu','fri'];
    const f=all.filter(d=>s.indexOf(d)>=0);
    return f.length===2&&a.days.every(d=>f.indexOf(d)>=0);
  }
  return false;
}
function bankOk(q,v){
  const accepted=(q&&q.accepted?q.accepted:[]).slice();
  if(q&&q.answerText!=null&&String(q.answerText).trim()!==''&&!accepted.some(a=>String(a)===String(q.answerText)))accepted.unshift(q.answerText);
  return answersMatch(accepted,v,{unit:(q&&q.unit)||'',question:(q&&(q.rawQ||q.q))||''});
}
function runAnswerSelfTest(){
  const accepted=['c = 12, d = 3'];
  const ctx={question:'18/24 = 9/c = d/4. Find c and d.',unit:''};
  const ok=['12;3','9/12=3/4','18/24=9/12=3/4','18/24 = 9/12 = 3/4','c = 12 ; d = 3','c = 12 , d = 3','c=12, d=3','12, 3','１２；３','c＝１２，d＝３','9／12＝3／4','12 and 3','12、3','c = 12和d = 3'];
  const bad=['3;12','9/13=3/4','12','c=12','d=3','18/24=9/11=3/4','9/12','3/4','18/24=9/12'];
  const fails=[];
  ok.forEach(g=>{if(!answersMatch(accepted,g,ctx))fails.push('expected accept: '+g)});
  bad.forEach(g=>{if(answersMatch(accepted,g,ctx))fails.push('expected reject: '+g)});
  if(fails.length){
    console.error('answer self-test failed');
    fails.forEach(f=>console.error(f));
    return false;
  }
  console.log('answer self-test passed ('+ok.length+' accepted T7-03 forms)');
  return true;
}
if(typeof module!=='undefined'&&module.exports){
  module.exports={answersMatch,check,bankOk,runAnswerSelfTest,CLASSIC_Q};
}
