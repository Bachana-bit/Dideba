const tl=$('#tl'),ch=$('#chips');let cur='';
ch.innerHTML=[['','All periods']].concat(D.periods.map((p,i)=>[p.id,`${i+1}. ${p.n}`])).map(x=>`<button class="chip${x[0]?'':' on'}" type="button" data-p="${x[0]}" aria-pressed="${!x[0]}">${x[1]}</button>`).join('');
function upd(){const r=tl.getBoundingClientRect();tl.style.setProperty('--tp',Math.min(1,Math.max(0,(innerHeight*.6-r.top)/(r.height||1))).toFixed(3))}
function draw(){tl.innerHTML=D.periods.filter(p=>!cur||p.id===cur).map(p=>`<article class="tp rv" id="${p.id}"><span class="dot"></span><p class="eyebrow">${p.r}</p><h2>${p.n}</h2><p class="ka">${p.ka}</p><p>${p.t}</p><details><summary>Key events (${p.ev.length})</summary><ul>${p.ev.map(e=>`<li><b>${e[0]}</b> — ${e[1]}</li>`).join('')}</ul></details><p class="rel"><b>People:</b> ${people(p.ppl)}</p>${p.bt.length?`<p class="rel"><b>Related:</b> ${p.bt.map(id=>`<a href="battle.html?id=${id}">${B[id].n}</a>`).join(' · ')}</p>`:''}</article>`).join('');reveal(tl);upd()}
ch.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cur=b.dataset.p;$$('.chip',ch).forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});draw()});
addEventListener('scroll',upd,{passive:true});
draw();
if(location.hash){const t=document.getElementById(location.hash.slice(1));if(t){t.scrollIntoView();const d=$('details',t);if(d)d.open=true}}
