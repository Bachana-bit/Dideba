const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],param=k=>new URLSearchParams(location.search).get(k);
const by=a=>Object.fromEntries(a.map(x=>[x.id,x])),R=by(D.rulers),B=by(D.battles),SITE=by(D.sites),P=by(D.periods);
const kingCard=r=>`<article class="card rv"><div class="portrait" role="img" aria-label="Designed placeholder; no portrait of ${r.n} is shown"><span>${r.ka[0]}</span></div><div><p class="eyebrow">${r.r}</p><h3><a href="king.html?id=${r.id}">${r.n}</a></h3><p class="ka">${r.ka}</p><p>${r.i}</p></div></article>`;
const refs=()=>`<section class="src"><h2>Sources and further reading</h2><p>General reference works. Page-level citations are not yet attached to individual claims, so verify specifics here:</p><ul>${D.refs.map(x=>`<li>${x}</li>`).join('')}</ul></section>`;
const people=a=>a.map(i=>R[i]?`<a href="king.html?id=${i}">${R[i].n}</a>`:i).join(' · ');
const pg=document.body.dataset.page;
if(pg==='index'){
$('#gold').innerHTML=['david-builder','queen-tamar'].map(id=>{const r=R[id];return `<article class="feat rv"><p class="eyebrow">${r.r}</p><h3>${r.n}</h3><p class="ka">${r.ka}</p><p>${r.i}</p><ul>${r.a.slice(0,3).map(a=>`<li><b>${a[0]}</b> — ${a[1]}</li>`).join('')}</ul><a class="btn" href="king.html?id=${id}">Read the profile</a></article>`}).join('');
$('#mom').innerHTML=D.moments.map(m=>`<a class="card rv" href="${m[3]}"><p class="eyebrow">${m[0]}</p><h3>${m[1]}</h3><p>${m[2]}</p></a>`).join('');
$('#kg').innerHTML=['vakhtang-gorgasali','bagrat-iii','david-builder','queen-tamar','george-brilliant','erekle-ii'].map(id=>kingCard(R[id])).join('');
$('#her').innerHTML=['svetitskhoveli','gelati','vardzia','narikala'].map(id=>{const s=SITE[id];return `<a class="card rv" href="map.html?site=${id}"><p class="eyebrow">${s.cat}</p><h3>${s.n}</h3><p class="ka">${s.ka}</p><p>${s.t}</p></a>`}).join('');
$('#mpl').innerHTML=D.sites.slice(0,6).map(s=>`<li><a href="map.html?site=${s.id}">${s.n}</a></li>`).join('');
$('#st').innerHTML=[['Rulers',D.rulers.length],['Periods',D.periods.length],['Events',D.battles.length],['Places',D.sites.length]].map(s=>`<div><b data-count="${s[1]}">0</b>${s[0]}</div>`).join('');
}
if(pg==='heritage'){
$('#hl').innerHTML=D.her.map((h,i)=>`<article class="her rv${i%2?' alt':''}"><div class="ph hp" aria-hidden="true">${h[1]}</div><div><p class="eyebrow">${h[2]}</p><h2>${h[0]}</h2><p>${h[3]}</p></div></article>`).join('');
$('#hs').innerHTML=D.sites.map(s=>`<a class="card rv" href="map.html?site=${s.id}"><p class="eyebrow">${s.cat}</p><h3>${s.n}</h3><p class="ka">${s.ka}</p><p>${s.t}</p></a>`).join('');
}
if(pg==='about'){
$('#refs').innerHTML=refs();
$$('form[data-v]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
$$('[required]',f).forEach(i=>{const v=i.value.trim(),bad=!v||(i.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v))||(i.minLength>0&&v.length<i.minLength);i.parentElement.querySelector('.err').textContent=bad?(i.dataset.msg||'This field is required.'):'';i.setAttribute('aria-invalid',bad);if(bad)ok=false});
$('.ok',f).textContent=ok?'Thank you. This demo has no server, so nothing was sent; please email your note to the site maintainer.':'';
if(!ok)$('[aria-invalid=true]',f).focus()}));
}
addEventListener('DOMContentLoaded',()=>{reveal();counters()});
