const CAT={Cathedral:'Architecture',Monastery:'Architecture',Fortress:'Fortresses',Archaeological:'Archaeology'};
const G=[...D.sites.filter(s=>CAT[s.cat]).map(s=>({t:s.n,c:CAT[s.cat],cap:s.t})),...D.gal.map(g=>({t:g[0],c:g[1],cap:g[2]}))];
const gl=$('#gl'),lb=$('#lb'),ch=$('#chips');let cur='All',vis=[],idx=0,x0=0;
ch.innerHTML=['All',...new Set(G.map(g=>g.c))].map(c=>`<button class="chip${c==='All'?' on':''}" type="button" aria-pressed="${c==='All'}">${c}</button>`).join('');
const ph=g=>g.img?`<img src="${g.img}" alt="${g.t}" loading="lazy">`:`<span class="ph">${g.t}<br><small>image pending</small></span>`;
function draw(){vis=G.filter(g=>cur==='All'||g.c===cur);gl.innerHTML=vis.map((g,i)=>`<button class="tile rv" type="button" data-i="${i}" aria-label="Open ${g.t}">${ph(g)}<span>${g.t}</span></button>`).join('');reveal(gl)}
function show(i){idx=(i+vis.length)%vis.length;const g=vis[idx];$('#lbf').innerHTML=`${ph(g)}<figcaption><b>${g.t}</b> — ${g.cap}<br><small>Attribution: none yet. This is a designed placeholder, not a photograph or authentic artefact. Add a licensed image and its credit in data to replace it.</small></figcaption>`;if(!lb.open)lb.showModal()}
ch.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cur=b.textContent;$$('.chip',ch).forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});draw()});
gl.addEventListener('click',e=>{const t=e.target.closest('.tile');if(t)show(+t.dataset.i)});
$('#pv').addEventListener('click',()=>show(idx-1));$('#nx').addEventListener('click',()=>show(idx+1));$('#cl').addEventListener('click',()=>lb.close());
lb.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(idx+1);if(e.key==='ArrowLeft')show(idx-1)});
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
lb.addEventListener('touchstart',e=>{x0=e.changedTouches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)show(idx+(d<0?1:-1))},{passive:true});
draw();
