(()=>{
const NAV=[['index','Home'],['timeline','Timeline'],['kings','Rulers'],['battles','Battles'],['map','Map'],['heritage','Heritage'],['gallery','Gallery'],['about','About']],
cur=document.body.dataset.page,
on=p=>p===cur||(cur==='king'&&p==='kings')||(cur==='battle'&&p==='battles')?' aria-current="page"':'';
document.getElementById('hdr').innerHTML=`<header><nav aria-label="Main"><a class="logo" href="index.html">DIDEBA<small>დიდება</small></a><button class="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span></button><ul class="links" id="menu">${NAV.map(n=>`<li><a href="${n[0]}.html"${on(n[0])}>${n[1]}</a></li>`).join('')}</ul></nav></header>`;
document.getElementById('ftr').innerHTML=`<footer><div class="wrap"><p class="orn" aria-hidden="true">❖ ❖ ❖</p><p><b>DIDEBA — The Living History of Georgia</b> · დიდება — საქართველოს ცოცხალი ისტორია</p><p>An educational project. Facts, traditions and later interpretations are labelled where known; dates marked “c.” are approximate. See <a href="about.html">About and sources</a>.</p></div></footer>`;
const b=document.querySelector('.burger'),m=document.getElementById('menu'),set=o=>{m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')};
b.addEventListener('click',()=>set(!m.classList.contains('open')));
m.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
})();
