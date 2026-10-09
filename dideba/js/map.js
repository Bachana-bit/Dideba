const S=D.sites,mk={},list=$('#sl'),det=$('#det');let q='',c='',p='',map,sel=null;
$('#mc').insertAdjacentHTML('beforeend',[...new Set(S.map(s=>s.cat))].map(x=>`<option>${x}</option>`).join(''));
$('#mp').insertAdjacentHTML('beforeend',D.periods.map(x=>`<option value="${x.id}">${x.n}</option>`).join(''));
if(window.L){map=L.map('lf',{scrollWheelZoom:false}).setView([42.2,43.6],7);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
S.forEach(s=>{mk[s.id]=(s.ap?L.circle([s.lat,s.lng],{radius:12000,color:'#C6A15B',weight:2,fillOpacity:.15}):L.marker([s.lat,s.lng],{title:s.n,alt:s.n})).on('click',()=>show(s.id))})}
else $('#lf').innerHTML='<p class="pad">The map library could not load. The list below still lists every place.</p>';
function show(id){sel=id;const s=SITE[id],bt=D.battles.filter(b=>b.sites.includes(id));
det.innerHTML=`<p class="eyebrow">${s.cat} · ${P[s.per].n}</p><h3>${s.n}</h3><p class="ka">${s.ka}</p><p>${s.t}</p>${s.ap?'<p class="note">Approximate area only, not a precise battle site.</p>':''}${bt.map(b=>`<p><a href="battle.html?id=${b.id}">${b.n}</a></p>`).join('')}`;
if(map)map.flyTo([s.lat,s.lng],s.ap?9:13);draw()}
function draw(){const a=S.filter(s=>(!c||s.cat===c)&&(!p||s.per===p)&&(!q||`${s.n} ${s.ka} ${s.t}`.toLowerCase().includes(q)));
list.innerHTML=a.map(s=>`<li><button type="button" data-id="${s.id}" aria-pressed="${s.id===sel}">${s.n}</button></li>`).join('')||'<li>No places match.</li>';
if(map)S.forEach(s=>a.includes(s)?mk[s.id].addTo(map):mk[s.id].remove())}
list.addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(b.dataset.id)});
$('#ms').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();draw()});
$('#mc').addEventListener('change',e=>{c=e.target.value;draw()});$('#mp').addEventListener('change',e=>{p=e.target.value;draw()});
if(SITE[param('site')])show(param('site'));else draw();
