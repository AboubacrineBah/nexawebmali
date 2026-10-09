document.getElementById('an').textContent=new Date().getFullYear();
const fb=document.querySelectorAll('[data-filter]');
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');document.querySelectorAll('[data-cat]').forEach(c=>{c.hidden=b.dataset.filter!=='all'&&c.dataset.cat!==b.dataset.filter})}));
const fm=document.querySelector('.needs-validation');
if(fm)fm.addEventListener('submit',e=>{e.preventDefault();fm.classList.add('was-validated');if(fm.checkValidity()&&!fm.website.value){bootstrap.Toast.getOrCreateInstance(document.getElementById('ok')).show();fm.reset();fm.classList.remove('was-validated')}});
const t=document.getElementById('top');
addEventListener('scroll',()=>{t.hidden=scrollY<600});
t.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'}));
