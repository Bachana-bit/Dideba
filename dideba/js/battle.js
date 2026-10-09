const b=B[param('id')],m=$('#battle');
if(!b){document.title='Event not found — DIDEBA';m.innerHTML='<section class="pg"><div class="wrap"><h1>Event not found</h1><p class="lead">No event matches this link. <a href="battles.html">Return to the archive</a>.</p></div></section>'}
else{
const rl=b.rulers.map(id=>R[id]).filter(Boolean),st=b.sites.map(id=>SITE[id]).filter(Boolean);
document.title=`${b.n} — DIDEBA`;
m.innerHTML=`<header class="bh"><div class="wrap"><p class="eyebrow">${b.cat} · ${b.date}</p><h1>${b.n}</h1><p class="ka">${b.ka}</p><p class="lead">${b.place}</p></div></header>
<div class="wrap body"><section><h2>Historical background</h2><p>${b.ctx}</p></section><section><h2>Participants</h2><p>${b.who}</p></section>
<section><h2>Sequence of events</h2><ol class="mini">${b.seq.map(s=>`<li><b>${s[0]}</b> — ${s[1]}</li>`).join('')}</ol></section>
<section class="facts"><div><b>Outcome</b>${b.out}</div><div><b>Long-term significance</b>${b.sig}</div></section>
<section><h2>Related rulers and places</h2><ul class="chips">${rl.map(x=>`<li><a class="chip" href="king.html?id=${x.id}">${x.n}</a></li>`).join('')}${st.map(x=>`<li><a class="chip" href="map.html?site=${x.id}">${x.n}</a></li>`).join('')}</ul>${rl.length||st.length?'':'<p>No ruler or mapped place is linked to this event yet.</p>'}</section>
<p class="note">This archive gives no troop counts or casualty figures, and no reconstruction map is shown, because sources do not support precise ones.</p>${refs()}</div>`;reveal(m)}
