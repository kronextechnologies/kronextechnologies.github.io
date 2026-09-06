const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const els=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1});els.forEach(e=>io.observe(e))}else{els.forEach(e=>e.classList.add('show'))}
