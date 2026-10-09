const res=$('#res'),cnt=$('#cnt'),f={q:'',p:'',d:'',k:'',s:1};
const opt=(id,a)=>$(id).insertAdjacentHTML('beforeend',a.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join(''));
opt('#fp',D.periods.map(p=>[p.id,p.n]));opt('#fd',[...new Set(D.rulers.map(r=>r.d))].map(x=>[x,x]));opt('#fk',[...new Set(D.rulers.map(r=>r.k))].map(x=>[x,x]));
function draw(){const q=f.q.trim().toLowerCase(),a=D.rulers.filter(r=>(!f.p||r.per===f.p)&&(!f.d||r.d===f.d)&&(!f.k||r.k===f.k)&&(!q||`${r.n} ${r.ka}`.toLowerCase().includes(q))).sort((x,y)=>(x.y-y.y)*f.s);
res.innerHTML=a.map(kingCard).join('')||'<p>No rulers match these filters.</p>';cnt.textContent=`${a.length} of ${D.rulers.length} rulers`;reveal(res)}
$('#q').addEventListener('input',e=>{f.q=e.target.value;draw()});
[['fp','p'],['fd','d'],['fk','k']].forEach(([id,k])=>$('#'+id).addEventListener('change',e=>{f[k]=e.target.value;draw()}));
$('#fs').addEventListener('change',e=>{f.s=+e.target.value;draw()});
$$('.vbtn').forEach(b=>b.addEventListener('click',()=>{$$('.vbtn').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});res.classList.toggle('list',b.dataset.v==='list')}));
draw();
