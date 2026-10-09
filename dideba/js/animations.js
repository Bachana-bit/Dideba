const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,HIO='IntersectionObserver'in window;
document.documentElement.classList.add('js');
function reveal(root=document){const els=[...root.querySelectorAll('.rv:not(.in)')];if(RM||!HIO){els.forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});els.forEach(e=>io.observe(e))}
function counters(){document.querySelectorAll('[data-count]').forEach(el=>{const to=+el.dataset.count;if(RM||!HIO){el.textContent=to;return}
const io=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;io.disconnect();let t0;const f=t=>{t0=t0||t;const p=Math.min((t-t0)/1200,1);el.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(el)})}
(()=>{
const bar=document.getElementById('prog'),sv=document.querySelector('.hero svg');let tk=false;
const upd=()=>{const h=document.documentElement;bar.style.transform=`scaleX(${h.scrollTop/((h.scrollHeight-h.clientHeight)||1)})`;if(sv&&!RM)sv.style.transform=`translateY(${Math.min(h.scrollTop*.12,120)}px)`;tk=false};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});
if(matchMedia('(pointer:fine)').matches&&!RM){const c=document.createElement('div');c.id='cur';c.setAttribute('aria-hidden','true');document.body.append(c);
addEventListener('pointermove',e=>{c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')},{passive:true});
document.addEventListener('pointerover',e=>c.classList.toggle('big',!!e.target.closest('a,button')))}
const cv=document.getElementById('dust');
if(cv&&!RM&&HIO){const x=cv.getContext('2d'),P=[];let W,H,on=true;const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight};rs();addEventListener('resize',rs);
for(let i=0;i<45;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.4,v:Math.random()*.25+.05});
new IntersectionObserver(e=>{on=e[0].isIntersecting}).observe(cv);
(function f(){if(on&&!document.hidden){x.clearRect(0,0,W,H);x.fillStyle='rgba(198,161,91,.55)';for(const p of P){p.y-=p.v;if(p.y<0){p.y=H;p.x=Math.random()*W}x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fill()}}requestAnimationFrame(f)})()}
addEventListener('load',()=>setTimeout(()=>{const l=document.getElementById('load');if(l)l.remove()},RM?0:450));
addEventListener('pageshow',()=>document.body.classList.remove('out'));
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||RM||a.target||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented||a.origin!==location.origin||(a.hash&&a.pathname===location.pathname))return;e.preventDefault();document.body.classList.add('out');setTimeout(()=>{location.href=a.href},280)});
upd();
})();
