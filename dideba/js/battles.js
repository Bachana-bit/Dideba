const res=$('#res'),cnt=$('#cnt'),f={q:'',c:'',e:'',s:1},cent=y=>Math.ceil(y/100);
$('#fe').insertAdjacentHTML('beforeend',[...new Set(D.battles.map(b=>cent(b.y)))].sort((a,b)=>a-b).map(c=>`<option value="${c}">${c}th century</option>`).join(''));
$('#fc').insertAdjacentHTML('beforeend',[...new Set(D.battles.map(b=>b.cat))].map(c=>`<option>${c}</option>`).join(''));
function draw(){const q=f.q.trim().toLowerCase(),a=D.battles.filter(b=>(!f.c||b.cat===f.c)&&(!f.e||cent(b.y)==f.e)&&(!q||`${b.n} ${b.ka} ${b.place} ${b.ctx}`.toLowerCase().includes(q))).sort((x,y)=>(x.y-y.y)*f.s);
res.innerHTML=a.map(b=>`<article class="card rv"><p class="eyebrow">${b.date}</p><h3><a href="battle.html?id=${b.id}">${b.n}</a></h3><p class="ka">${b.ka}</p><p>${b.out}</p><p class="tag">${b.cat} · ${b.place}</p></article>`).join('')||'<p>No events match these filters.</p>';cnt.textContent=`${a.length} of ${D.battles.length} events`;reveal(res)}
$('#q').addEventListener('input',e=>{f.q=e.target.value;draw()});
$('#fc').addEventListener('change',e=>{f.c=e.target.value;draw()});$('#fe').addEventListener('change',e=>{f.e=e.target.value;draw()});$('#fs').addEventListener('change',e=>{f.s=+e.target.value;draw()});
draw();
