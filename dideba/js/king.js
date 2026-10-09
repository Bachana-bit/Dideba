const r=R[param('id')],m=$('#king');
if(!r){document.title='Ruler not found — DIDEBA';m.innerHTML='<section class="pg"><div class="wrap"><h1>Ruler not found</h1><p class="lead">No ruler matches this link. <a href="kings.html">Return to the royal archive</a>.</p></div></section>'}
else{
const s=D.rulers.slice().sort((a,b)=>a.y-b.y),ix=s.findIndex(x=>x.id===r.id),bt=D.battles.filter(b=>b.rulers.includes(r.id)),
rel=[...new Set([s[ix-1],s[ix+1],...bt.flatMap(b=>b.rulers.map(x=>R[x]))].filter(x=>x&&x.id!==r.id))];
document.title=`${r.n} — DIDEBA`;
m.innerHTML=`<section class="pg"><div class="wrap kh"><div class="portrait" role="img" aria-label="Designed placeholder; no portrait of ${r.n} is shown"><span>${r.ka[0]}</span></div><div><p class="eyebrow">${r.d} · ${r.k}</p><h1>${r.n}</h1><p class="ka">${r.ka}</p><p class="lead">${r.i}</p></div></div></section>
<div class="wrap body"><section class="facts"><div><b>Reign</b>${r.r}</div><div><b>Dynasty</b>${r.d}</div><div><b>Realm</b>${r.k}</div><div><b>Period</b><a href="timeline.html#${r.per}">${P[r.per].n}</a></div></section>
<section><h2>Achievements and events</h2><ol class="mini">${r.a.map(a=>`<li><b>${a[0]}</b> — ${a[1]}</li>`).join('')}</ol></section>
${r.u?`<section><h2>Reliability of the record</h2><p class="note">${r.u}</p></section>`:''}
<section><h2>Related battles and events</h2>${bt.length?`<ul class="chips">${bt.map(b=>`<li><a class="chip" href="battle.html?id=${b.id}">${b.n}</a></li>`).join('')}</ul>`:'<p>No battle entry in this archive yet.</p>'}</section>
<section><h2>Related figures</h2><ul class="chips">${rel.map(x=>`<li><a class="chip" href="king.html?id=${x.id}">${x.n}</a></li>`).join('')}</ul></section>${refs()}</div>`;reveal(m)}
