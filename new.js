const M=[
  {n:'Abattoir Meat Market',t:'SPECIALTY',l:'Oko Oba, Agege',i:'A sprawling meat market where dealers converge daily to slaughter and sell cows, sheep, and cattle. Raw beef and live animals at prices often half of other markets. Ponmo, livestock, and agricultural products at wholesale — a haven for food vendors and bulk shoppers.'},
  {n:'Agbalata Market',t:'MAJOR HUB',l:'Badagry',i:'One of the major markets in Lagos. From the town\'s revered mat and succulent coconut to affordable foodstuffs — Agbalata has played a leading role in the economic development of Badagry and its environs for generations.'},
  {n:'Agboju Market',t:'COMMUNITY',l:'Amuwo Odofin',i:'A one-stop destination for diverse goods and fresh produce. Vegetables, grains, poultry, fish, groceries, building materials, clothing, cosmetics, and telecom gadgets at both retail and wholesale prices.'},
  {n:'Agege Market',t:'MAJOR HUB',l:'48 Oniwaya Street, Agege',i:'The bustling Agege main market carries food items, herbs, quality shea butter, fabrics, and beverages. Competitive retail and wholesale pricing. The Abattoir meat market lies within the same vicinity.'},
  {n:'Ajah Market',t:'COMMUNITY',l:'Ajah',i:'Known for its vast array of affordable household products. Shoppers can also explore Adeyemi Shopping Complex, Blenco Supermarket, Eleganza Mall, and Novare Mall in the same area.'},
  {n:'Ajina Market',t:'COMMUNITY',l:'Alagbe Street, Ikorodu',i:'A vast open-air marketplace renowned for affordable household goods — foodstuffs, fruits, and vegetables. Home to the ORO shrine and celebrated for economical, high-quality agricultural produce.'},
  {n:'Akodo Market',t:'COMMUNITY',l:'Lekki Free Trade Zone Road',i:'Located near the Dangote Refinery. A quaint marketplace offering ingredients for traditional local meals. Its rural setting means some international ingredients may not be stocked.'},
  {n:'Alaba International Market',t:'MAJOR HUB',l:'Alaba, Ojo',i:'A renowned electronics hub drawing customers from across West Africa. Over 5,000 shops operating daily. The dominant destination for electronics, household items, and imports from China, Japan, and India.'},
  {n:'Alade Market',t:'MAJOR HUB',l:'Somolu',i:'A true one-stop destination — household items, groceries, electronics, and fresh produce. Ideal for weekly shopping when Mile 12 is not feasible. Chess enthusiasts can even find a game running beside Bright Cosmetics.'},
  {n:'Alade Market (New)',t:'SPECIALTY',l:'Obafemi Awolowo Way, Ikeja',i:'The modernized successor to the former Alade Market on Allen Avenue. Diverse vendors including provision dealers, drink sellers, food vendors, and fashion retailers. Prices lean higher — bargain-hunting is advised.'},
  {n:'Amu Market',t:'SPECIALTY',l:'Olorunsogo Bus Stop, Mushin',i:'A comprehensive destination for wood, MDF/HDF, imported and domestic doors, tiles, glass, PVC ceiling, POP materials, and roofing planks — all competitively priced for woodworking and interior decor needs.'},
  {n:'Apongbon Market',t:'MAJOR HUB',l:'55 Apongbon Street, Lagos Island',i:'A large, organized market under the bridge. Affordable groceries, household items, clothing, accessories, and imported jewelry. Competitive wine prices. Well-structured, though evening traffic can be challenging.'},
  {n:'Aratumi Market',t:'COMMUNITY',l:'Iba New Site, Ojo',i:'A compact but active marketplace. A convenient alternative for sourcing foodstuffs without the journey to Iyana-Iba.'},
  {n:'Arena Market',t:'MAJOR HUB',l:'Bolade Bus Stop, Agege Motor Road',i:'Renowned for extensive fashion boutiques, household essentials, and electronics at remarkable discounts. The prime destination for curtains, bedding, foodstuffs, fruits, and electronics repair services.'},
  {n:'Aswani Market',t:'SPECIALTY',l:'Osolo Way, Isolo',i:'Reputed for fairly used items at low prices. Clothing known as okrika or bend-down-select from 200 naira. Also carries new clothing per yard, bags, shoes, and foodstuffs. Mondays are dedicated to shoes and bags.'},
  {n:'Bali Market',t:'SPECIALTY',l:'Broad Street, Lagos Island',i:'The premier destination for second-hand clothing in Lagos. High-quality professional attire at budget-friendly prices — including designer items significantly below original retail value.'},
  {n:'Balogun Market',t:'MAJOR HUB',l:'Lagos Island',i:'The commercial heart of Lagos Island. Predominantly run by astute, fashion-forward women with political influence. Clothing, groceries, accessories, bridal items, Asoebi, and thrift sections — all under one sprawling roof.'},
  {n:'Bar Beach Market',t:'SPECIALTY',l:'Elegushi Modern Plaza, Lekki',i:'Fresh fish and a selection of handicrafts appealing to art enthusiasts and visitors. Near several hotels. Wood carvings, masks, paintings, bangles, and food items. A cultural experience that captures the essence of Lagos.'},
  {n:'Bariga Market',t:'COMMUNITY',l:'Adebayo Street, Bariga, Shomolu',i:'A bustling market with diverse products from clothing to food. Freshly butchered meats of various animals alongside general household goods.'},
  {n:'Cele Market',t:'SPECIALTY',l:'Cele Bus Stop, Oshodi/Apapa Expressway',i:'Known as Cele Night Market. Transforms in the evening into a hub for second-hand goods — bend-down-select, okrika, clothing, accessories, electronics, and household items. Growth has led to pedestrian congestion on both sides of the road.'},
  {n:'Computer Village',t:'MAJOR HUB',l:'Ikeja',i:'Nigeria\'s top computer market — arguably Africa\'s. Phones, PCs, electronics, accessories, software, and repair services. Draws people from across Nigeria. Open daily except Sundays and public holidays.'},
  {n:'Daleko Market',t:'SPECIALTY',l:'Daleko Road, Isolo',i:'The chain distribution hub for local and foreign grains in Lagos State. Rice, beans, groundnut oil, palm oil, and sugar at very reasonable prices.'},
  {n:'Dosunmu Market',t:'SPECIALTY',l:'Lagos Island',i:'The ideal destination for baby essentials and mothercare products at wholesale prices, even in smaller quantities. Also carries textiles, cosmetics, shoes, and bags.'},
  {n:'Ebute Ero Market',t:'MAJOR HUB',l:'Ebute Ero',i:'Historically the main port connecting Lagos Island to the mainland. Today one of Lagos\'s most bustling markets, specializing in wines, ports, champagne, and non-alcoholic beverages.'},
  {n:'Epe Fish Market',t:'SPECIALTY',l:'Epe',i:'One of the most colourful places to purchase crustaceans and freshwater fish. Exotic animals including snails, alligators, and tortoise also on sale. Fish found alive in woven baskets. A favourite source for chefs who specialise in seafood.'},
  {n:'Idi Oro Market',t:'SPECIALTY',l:'Oloosa, Idi Oro, Mushin',i:'Popularly known as the Plantain Market. Your go-to for the finest plantains at affordable prices — wholesale and retail. Large or small, dwarf or giant, green or ripe.'},
  {n:'Iddo Market',t:'COMMUNITY',l:'Ebute-Metta',i:'Renowned for wholesale staples: rice, beans, and groundnut oil. Despite its modest size, serves as an affordable hub for bulk food commodity purchases.'},
  {n:'Idumota Market',t:'MAJOR HUB',l:'Bankole Street, Lagos Island',i:'One of Nigeria\'s largest markets, in the heart of Eko. Textiles, interior decor, jewelry, shoes, bags, and more. Nollywood fans will find the latest films here too.'},
  {n:'Ijesha Market',t:'COMMUNITY',l:'26 Iseyin Street, Lawanson',i:'A community market with food items, home appliances, clothing, and services including labor, transportation, and welding. Open 7AM to 8PM daily.'},
  {n:'Ijora Olapa Fish Market',t:'SPECIALTY',l:'Ijora',i:'Renowned for its diverse selection of fish, often in large sizes. Fresh fish in cartons and live fish locally called Onmi are widely available.'},
  {n:'Ile Epo Market',t:'COMMUNITY',l:'Abeokuta Expressway',i:'A central hub for fresh tomatoes, peppers, and bulk fruits and vegetables at affordable prices. The top destination for quality peppers for residents of Iyana Ipaja and Dopemu.'},
  {n:'Isale Eko Market',t:'MAJOR HUB',l:'Ebute Ero Street, Lagos Island',i:'A bustling wholesale and retail marketplace for virtually everything — wedding gowns, clothing, shoes, bags. Within Isale-Eko lies Iga-Iduganran Street, home to the Oba of Lagos\'s palace.'},
  {n:'Ita Faji Market',t:'COMMUNITY',l:'Lagos Island',i:'Famous for affordable meats courtesy of local butchers. Also a go-to for baskets, plastic goods, enamel pans, and a wide assortment of food products.'},
  {n:'Itunmoja Market',t:'SPECIALTY',l:'Ikorodu, Ita Elewa',i:'One of the oldest markets in Ikorodu Town, operating daily. Predominantly traditional goods — herbs, ritual materials, beads, and artifacts. Traditional practitioners are active in the surrounding area.'},
  {n:'Iyana-Iba Market',t:'COMMUNITY',l:'Iyana Iba',i:'Famous for affordable egusi, crayfish, groundnut oil, palm oil, beans, rice, and flour. Renowned for incredibly low-priced fresh fruits. The go-to market for budget shoppers along the Badagry Expressway.'},
  {n:'Ikotun Market',t:'COMMUNITY',l:'Ikotun, Alimosho',i:'An expansive open-air marketplace. Renowned for value-driven pricing — discounted household essentials, foodstuffs, fresh fruits, and vegetables.'},
  {n:'Jankarra Market',t:'SPECIALTY',l:'Idumagbo Road, Lagos Island',i:'A prominent hub for locally crafted and handmade goods. Tie-dyed fabrics, trade beads, jewelry, pottery, and a diverse array of clothing articles.'},
  {n:'Kajola Plank Market',t:'SPECIALTY',l:'Iganmu, Amukoko',i:'Widely recognized for discounted building planks — Afara, Apepe, Araba, Mahogany, Millainah, Sindarella, and various other timber types and building materials.'},
  {n:'Katangua Market',t:'SPECIALTY',l:'Abule Egba',i:'Frequently called the bend-down-select market. Diverse clothes and shoes in varying conditions. Fresh consignments arrive Mondays, Wednesdays, and Fridays.'},
  {n:'Lekki Arts & Crafts Market',t:'SPECIALTY',l:'Oba Elegushi Street, Lekki Peninsula',i:'Also known as Jakande Art Market. Well-organized, with leather goods, paintings, sculptures, textiles, and raffia crafts — mostly by Nigerian artists. Craftsmen walk visitors through the art-making process.'},
  {n:'Ladipo Market',t:'MAJOR HUB',l:'Ladipo Street, Mushin',i:'The primary spare parts market in Nigeria. It is said: if you do not find it in Ladipo, it is not in Nigeria. Mechanics, car owners, and spare-part seekers converge here. New and fairly used parts available.'},
  {n:'Ladipo Paper Market',t:'SPECIALTY',l:'5 Balogun Street, Mushin',i:'A comprehensive marketplace for printing and printing materials. Direct Image, Large Format, graphic design, and impressions at budget-friendly rates. Independently owned shops of varying sizes.'},
  {n:'Leather Market',t:'SPECIALTY',l:'4 Adegbite Lane, Mushin',i:'One of Nigeria\'s prominent hubs for leather goods, within Mushin Market. Animal skin leather, faceless leather, suede leather, and more. High probability of finding quality locally crafted luxury items.'},
  {n:'Liverpool Under-Bridge Market',t:'SPECIALTY',l:'Apapa',i:'Also known as Liverpool Crayfish Market. Near Tincan Island. Specializes in fresh and dried fish. Due to proximity to seaports, it is a relatively large market with varied foodstuffs for sale.'},
  {n:'Makoko Asejire Market',t:'SPECIALTY',l:'A Lagoon in Lagos',i:'A community on water and land, 4 metres above sea level. White Catfish, Tilapia, Sniper fish, Red Snapper, Prawns, Crab, Barracuda, and more — live and smoked.'},
  {n:'Mile 12 Market',t:'MAJOR HUB',l:'Ikorodu Road, Ketu',i:'For about 30 years, the largest perishable food market in Nigeria and one of the biggest in West Africa. Massive daily volumes of foodstuffs, serving as a key distribution hub for Lagos and the entire region.'},
  {n:'Mile 2 Market',t:'COMMUNITY',l:'Amuwo Odofin, Festac',i:'An open-air market with a wide selection of discounted household items — foodstuffs, fruits, vegetables, yam, groundnut oil, and palm oil, all available retail.'},
  {n:'Mushin Market',t:'MAJOR HUB',l:'4 Adegbite Lane, Mushin',i:'A prominent and highly frequented marketplace with warehouses, stalls, and open spaces. Household products, food items, frozen foods, processed goods, and diverse clothing materials.'},
  {n:'Odunade Market',t:'SPECIALTY',l:'2 Balogun Street, Amukoko',i:'Offering a wide selection of building materials at competitive wholesale and retail prices. Renowned for high probability of top-quality materials at affordable rates.'},
  {n:'Ogba Sunday Market',t:'COMMUNITY',l:'Wemco Road, Ojodu',i:'Originally operated on weekends for the working class. Now welcomes customers daily. Primarily focused on a wide range of food products.'},
  {n:'Ojah Market',t:'SPECIALTY',l:'19 Fibre Road, Badagry',i:'Near the Benin Republic border. Fashion accessories, cosmetics, and a bustling seafood section — shrimps, lobsters, prawns. Renowned for smoked fish. French influence from proximity to Benin Republic adds a vibrant mixed character.'},
  {n:'Ojodu Market',t:'COMMUNITY',l:'Ojodu Berger',i:'Renowned for discounted household items — fresh vegetables, food essentials, stylish shoes, fashionable bags, and electronics. Budget-friendly and comprehensive.'},
  {n:'Ojuwoye Market',t:'MAJOR HUB',l:'3 Abolade Street, Mushin',i:'A renowned and affordable hub for bulk products. One of Lagos State\'s leading wholesale markets. Strategically located with essential facilities nearby — caution advised during rainy season for road conditions.'},
  {n:'Oke Odo Market',t:'COMMUNITY',l:'Agbado Oke Odo',i:'Established in 1983. A collective of traders from neighboring towns and farms. Diverse foodstuffs — yams, garri, beans, palm oil, pepper, tomatoes, and grains including millet, wheat, rice, sorghum, maize, and groundnuts.'},
  {n:'Oniru New Market',t:'MAJOR HUB',l:'Oniru, Victoria Island',i:'A prominent urban marketplace offering groceries, apparel, building materials, and electrical appliances. Not the most budget-friendly, but exceptional accessibility for Victoria Island shoppers.'},
  {n:'Onipanu Rod Market',t:'SPECIALTY',l:'Labinjo Street, Somolu',i:'A well-organized and secure hub for mild and galvanized steel products, operating 8AM to 6PM. Follows a unique three-location system. Livestock and food items available only on weekends.'},
  {n:'Oshodi Market',t:'MAJOR HUB',l:'Oshodi',i:'Relocated to Isopakodowo after demolition of the old Owonifari location. Over 600 shops and hundreds of kee clamps, accommodating Asoebi marketers, foodstuff sellers, and fruit sellers.'},
  {n:'Owode Onirin Market',t:'SPECIALTY',l:'Ikorodu Road, Erunkan',i:'Exclusively offers Nigerian used products. Specializes in refurbishing damaged metals, with a section for damaged vehicles and fairly used cars. One of Nigeria\'s oldest auto spare parts markets, established in the 1980s.'},
  {n:'Oyingbo Market',t:'MAJOR HUB',l:'Ebute-Metta',i:'One of Lagos State\'s oldest and largest markets. Fresh produce, affordable meat, textiles, electronics, household items, and second-hand clothing. Food vendors and eateries offering local delicacies are found within.'},
  {n:'Pelewura Market',t:'COMMUNITY',l:'Lagos Island',i:'Textiles, interior decor, jewelry, shoes, bags, and more at very affordable prices.'},
  {n:'Rauf Aregbesola Market',t:'COMMUNITY',l:'Iyana Ipaja',i:'An expansive open-air marketplace offering discounted household items — fruits, vegetables, food essentials, secondhand clothing, snacks, provisions, and beverages.'},
  {n:'Sandgrouse Market',t:'MAJOR HUB',l:'Sura Road, Simpson Street',i:'Transformed into a modern, mixed-use facility resembling a mall. A diverse selection of imported goods within a well-organized structure.'},
  {n:'Sangotedo Market',t:'COMMUNITY',l:'Sangotedo',i:'Not the most budget-friendly but a unique experience for bargain lovers. A community market perfect for meat, vegetables, condiments, building materials, and local ingredients. Skillful haggling leads to significant discounts.'},
  {n:'Tejuosho Market',t:'MAJOR HUB',l:'Ojuelegba-Itire Road, Yaba',i:'A contemporary, state-of-the-art marketplace. Once a traditional middle-class market known for competitive pricing. Now carries clothing, jewelry, and varied food products for domestic, personal, and business needs.'},
  {n:'Vespa Market',t:'SPECIALTY',l:'Ijanikin, Ojo',i:'Renowned for affordable foreign shoes and bags. A prime destination for resellers and personal shoppers alike. Check shipment arrival days to make the most of your visit.'},
  {n:'White Sands Market',t:'MAJOR HUB',l:'Isale Eko, Lagos Mainland',i:'A major hub for food-related products. Farmers from across Nigeria supply in large quantities. Yams, garri, vegetables, fruits, crayfish, smoked fish, and periwinkles at remarkably low prices. Smaller Lagos markets come here for wholesale.'},
  {n:'Yaba Market',t:'COMMUNITY',l:'Ojuelegba Road, Yaba',i:'A hub for fashion items — clothing, accessories, and secondhand apparel. Budget-friendly, competing with Tejuosho in variety and affordability. Attracts a youthful clientele from the densely populated student area.'}
];

/* ── tier config ─────────────────────────────────────────── */
const C={
  'MAJOR HUB': {r:4.6,tMin:.6,tMax:.95,gR:32,gP:'3.4s',sk:18,skO:.52,driftAmp:2.2},
  'SPECIALTY': {r:2.9,tMin:.38,tMax:.75,gR:20,gP:'4.6s',sk:11,skO:.36,driftAmp:2.8},
  'COMMUNITY': {r:1.6,tMin:.18,tMax:.46,gR:12,gP:'5.9s',sk:6, skO:.2, driftAmp:3.4}
};

const sky=document.getElementById('sky');
const panel=document.getElementById('panel');

/* ── physics drag — one shared RAF loop ─────────────────── */
let dg={on:false,el:null,mk:null,tx:0,ty:0,cx:0,cy:0,vx:0,vy:0,mv:false,sx:0,sy:0,ox:0,oy:0};
let rafId=null;

function dragLoop(){
  if(!dg.on){rafId=null;return;}
  const ease=0.18;
  dg.vx=(dg.tx-dg.cx)*ease;
  dg.vy=(dg.ty-dg.cy)*ease;
  dg.cx+=dg.vx;
  dg.cy+=dg.vy;
  if(Math.abs(dg.vx)>.3||Math.abs(dg.vy)>.3) dg.mv=true;
  dg.el.style.left=dg.cx+'px';
  dg.el.style.top =dg.cy+'px';
  rafId=requestAnimationFrame(dragLoop);
}

function startDrag(el,mk,cx,cy){
  dg.on=true; dg.el=el; dg.mk=mk;
  dg.sx=cx; dg.sy=cy; dg.mv=false;
  dg.cx=parseFloat(el.style.left);
  dg.cy=parseFloat(el.style.top);
  dg.tx=dg.cx; dg.ty=dg.cy;
  dg.ox=dg.cx; dg.oy=dg.cy;
  el.classList.add('dragging');
  if(!rafId) rafId=requestAnimationFrame(dragLoop);
}

document.addEventListener('mousemove',e=>{
  if(!dg.on)return;
  const dx=e.clientX-dg.sx, dy=e.clientY-dg.sy;
  dg.tx=dg.ox+dx; dg.ty=dg.oy+dy;
});
document.addEventListener('touchmove',e=>{
  if(!dg.on)return;
  e.preventDefault();
  const dx=e.touches[0].clientX-dg.sx, dy=e.touches[0].clientY-dg.sy;
  dg.tx=dg.ox+dx; dg.ty=dg.oy+dy;
},{passive:false});

function endDrag(){
  if(!dg.on)return;
  dg.on=false;
  dg.el.classList.remove('dragging');
  if(!dg.mv) open(dg.mk);
  // coast: let momentum carry for a beat
  let coast=8;
  function glide(){
    if(--coast<=0||!dg.el)return;
    dg.cx+=dg.vx*0.82; dg.cy+=dg.vy*0.82;
    dg.vx*=0.82; dg.vy*=0.82;
    dg.el.style.left=dg.cx+'px'; dg.el.style.top=dg.cy+'px';
    requestAnimationFrame(glide);
  }
  requestAnimationFrame(glide);
}
document.addEventListener('mouseup',endDrag);
document.addEventListener('touchend',endDrag);

/* ── panel open/close ────────────────────────────────────── */
function open(mk){
  document.getElementById('pe').textContent=mk.t;
  document.getElementById('pn').textContent=mk.n;
  document.getElementById('pl').textContent=mk.l.toUpperCase();
  document.getElementById('pf').textContent=mk.i;
  panel.classList.add('open');
}
function close(){panel.classList.remove('open');}
document.getElementById('pc').addEventListener('click',close);
document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});

/* ── ambient bg stars ────────────────────────────────────── */
function spawnBg(){
  const W=window.innerWidth,H=window.innerHeight;
  const f=document.createDocumentFragment();
  for(let i=0;i<300;i++){
    const d=document.createElement('div');
    d.className='bg-star';
    const sz=Math.random()<.58?.7:Math.random()<.65?1.1:1.6;
    const base=.07+Math.random()*.22;
    const amp=1.5+Math.random()*3.5;
    const ang=Math.random()*Math.PI*2;
    const fd=(14+Math.random()*22).toFixed(1)+'s';
    const fdl=(Math.random()*12).toFixed(1)+'s';
    d.style.cssText=[
      `width:${sz}px`,`height:${sz}px`,
      `left:${Math.random()*W}px`,`top:${Math.random()*H}px`,
      `--a:${base.toFixed(3)}`,`--b:${Math.min(base*2,.6).toFixed(3)}`,
      `--d:${(2+Math.random()*6).toFixed(1)}s`,`--dl:${(Math.random()*9).toFixed(1)}s`,
      `--fd:${fd}`,`--fdl:${fdl}`,
      `--dx:${(Math.cos(ang)*amp).toFixed(1)}px`,`--dy:${(Math.sin(ang)*amp).toFixed(1)}px`
    ].join(';');
    f.appendChild(d);
  }
  sky.appendChild(f);
}

/* ── build market star ───────────────────────────────────── */
function buildStar(mk,x,y){
  const c=C[mk.t];
  const el=document.createElement('div');
  el.className='mstar';
  el.style.cssText=`left:${x}px;top:${y}px;`;

  const w=document.createElement('div');
  w.className='mstar__wrap';

  const g=document.createElement('div');
  g.className='mstar__glow';
  g.style.cssText=`width:${c.gR*2}px;height:${c.gR*2}px;--gp:${c.gP};--gpd:${(Math.random()*3).toFixed(2)}s;`;
  w.appendChild(g);

  [0,45,90,135].forEach(a=>{
    const s=document.createElement('div');
    s.className='mstar__spike';
    s.style.cssText=`height:${c.sk}px;margin-top:-${c.sk/2}px;margin-left:-.5px;background:linear-gradient(to top,transparent,rgba(255,255,255,${c.skO}) 50%,transparent);transform:rotate(${a}deg);`;
    w.appendChild(s);
  });

  const dot=document.createElement('div');
  dot.className='mstar__dot';
  const td=(2.5+Math.random()*5).toFixed(2)+'s';
  const tdl=(Math.random()*9).toFixed(2)+'s';
  const fd=(12+Math.random()*18).toFixed(1)+'s';
  const fdl=(Math.random()*10).toFixed(1)+'s';
  const amp=c.driftAmp;
  const ang=Math.random()*Math.PI*2;
  dot.style.cssText=[
    `width:${c.r*2}px`,`height:${c.r*2}px`,
    `--a:${c.tMin}`,`--b:${c.tMax}`,
    `--d:${td}`,`--dl:${tdl}`,
    `--fd:${fd}`,`--fdl:${fdl}`,
    `--dx:${(Math.cos(ang)*amp).toFixed(1)}px`,`--dy:${(Math.sin(ang)*amp).toFixed(1)}px`,
    `box-shadow:0 0 ${(c.r*1.4).toFixed(1)}px rgba(255,255,255,.42)`
  ].join(';');
  w.appendChild(dot);

  const lbl=document.createElement('div');
  lbl.className='mstar__name';
  lbl.textContent=mk.n;
  w.appendChild(lbl);

  el.appendChild(w);
  sky.appendChild(el);

  el.addEventListener('mousedown',e=>{e.stopPropagation();startDrag(el,mk,e.clientX,e.clientY);});
  el.addEventListener('touchstart',e=>{e.stopPropagation();startDrag(el,mk,e.touches[0].clientX,e.touches[0].clientY);},{passive:true});
}

/* ── shuffle ─────────────────────────────────────────────── */
document.getElementById('shuf').addEventListener('click',()=>{
  const W=window.innerWidth,H=window.innerHeight,p=55;
  document.querySelectorAll('.mstar').forEach(el=>{
    const x=p+Math.random()*(W-p*2),y=p+Math.random()*(H-p*2);
    el.style.transition='left .75s cubic-bezier(.34,1.12,.64,1),top .75s cubic-bezier(.34,1.12,.64,1)';
    el.style.left=x+'px';el.style.top=y+'px';
    setTimeout(()=>el.style.transition='',900);
  });
});

/* ── typewriter intro ────────────────────────────────────── */
function typewriter(el,lines,speed,onDone){
  let li=0,ci=0;
  el.innerHTML='';
  function tick(){
    if(li>=lines.length){if(onDone)onDone();return;}
    const line=lines[li];
    if(ci<line.length){
      el.innerHTML=lines.slice(0,li).map(l=>`<span>${l}</span>`).join('<br>')+
        (li>0?'<br>':'')+'<span>'+line.slice(0,ci+1)+'</span><span class="cursor"></span>';
      ci++;setTimeout(tick,speed);
    } else {
      li++;ci=0;setTimeout(tick,speed*2);
    }
  }
  tick();
}

const poemLines=[
  'Markets play a pivotal role in our lives;',
  'acting as community heroes,' ,
  'underlining their importance',
  'in the fabric of an economy.',
  '',
  'Click a star.',
  'Move a star.',
  'Either way, they have something to say.'
];

const hintEl=document.getElementById('intro-hint');
const poemEl=document.getElementById('intro-poem');
const btn=document.getElementById('ib');

typewriter(poemEl,poemLines,28,()=>{
  hintEl.textContent='67 markets · each one a star · hover to name';
  setTimeout(()=>{btn.classList.add('show');},400);
});

btn.addEventListener('click',()=>{
  const intro=document.getElementById('intro');
  intro.classList.add('fade');
  setTimeout(()=>intro.remove(),400);
});

/* ── init ────────────────────────────────────────────────── */
spawnBg();
const W=window.innerWidth,H=window.innerHeight,pad=55;
M.forEach(mk=>buildStar(mk,pad+Math.random()*(W-pad*2),pad+Math.random()*(H-pad*2)));
