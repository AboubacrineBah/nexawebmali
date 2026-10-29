const maintenanceScript = document.currentScript;
if (maintenanceScript) {
  const maintenanceConfigUrl = new URL('../../maintenance.json', maintenanceScript.src);
  maintenanceConfigUrl.searchParams.set('v', Date.now().toString());

  fetch(maintenanceConfigUrl, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Impossible de vérifier le mode maintenance (${response.status}).`);
      }
      return response.json();
    })
    .then(config => {
      if (config.enabled === true) {
        window.location.replace(new URL('../../maintenance.html', maintenanceScript.src));
      }
    })
    .catch(error => console.error('Vérification du mode maintenance échouée :', error));
}

const year=document.getElementById('an');
if(year)year.textContent=new Date().getFullYear();
const fb=document.querySelectorAll('[data-filter]');
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});b.classList.add('active');b.setAttribute('aria-pressed','true');document.querySelectorAll('[data-cat]').forEach(c=>{c.hidden=b.dataset.filter!=='all'&&c.dataset.cat!==b.dataset.filter})}));
const fm=document.querySelector('.needs-validation');
if(fm){
  fm.addEventListener('submit',e=>{
    e.preventDefault();
    fm.classList.add('was-validated');
    const honeypot=typeof fm.website !== 'undefined' ? fm.website.value : '';
    if(fm.checkValidity()&&!honeypot){
      const toastEl=document.getElementById('ok');
      if(toastEl && bootstrap?.Toast){
        bootstrap.Toast.getOrCreateInstance(toastEl).show();
      }
      fm.reset();
      fm.classList.remove('was-validated');
    }
  });
}
const t=document.getElementById('top');
if(t){
  addEventListener('scroll',()=>{t.hidden=scrollY<600});
  t.addEventListener('click',()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'}));
}
