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

const year = document.getElementById('an');
if (year) year.textContent = new Date().getFullYear();
const fb = document.querySelectorAll('[data-filter]');
fb.forEach(b => b.addEventListener('click', () => { fb.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false') }); b.classList.add('active'); b.setAttribute('aria-pressed', 'true'); document.querySelectorAll('[data-cat]').forEach(c => { c.hidden = b.dataset.filter !== 'all' && c.dataset.cat !== b.dataset.filter }) }));
const fm = document.getElementById('devis-form');
if (fm) {
  const steps = Array.from(fm.querySelectorAll('[data-form-step]'));
  const stepNames = ['Votre projet', 'Votre besoin', 'Vos coordonnées'];
  const stepLabel = document.getElementById('form-step-label');
  const progress = fm.querySelector('[role="progressbar"]');
  const progressBar = document.getElementById('form-progress');
  const confirmation = document.getElementById('form-confirmation');
  const summary = document.getElementById('request-summary');
  const whatsappLink = document.getElementById('send-whatsapp');
  let activeStep = 0;

  const showStep = index => {
    activeStep = index;
    steps.forEach((step, i) => { step.hidden = i !== index });
    stepLabel.textContent = `Étape ${index + 1} sur ${steps.length} : ${stepNames[index]}`;
    progress.setAttribute('aria-valuenow', String(index + 1));
    progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
  };

  fm.querySelectorAll('[data-form-next]').forEach(button => button.addEventListener('click', () => {
    const invalidField = steps[activeStep].querySelector('input:invalid, select:invalid, textarea:invalid');
    fm.classList.add('was-validated');
    if (invalidField) {
      invalidField.focus();
      return;
    }
    showStep(activeStep + 1);
    steps[activeStep].querySelector('input, select, textarea')?.focus();
  }));

  fm.querySelectorAll('[data-form-back]').forEach(button => button.addEventListener('click', () => {
    showStep(activeStep - 1);
    steps[activeStep].querySelector('input, select, textarea')?.focus();
  }));

  fm.addEventListener('submit', event => {
    event.preventDefault();
    fm.classList.add('was-validated');
    const invalidField = Array.from(fm.querySelectorAll('input, select, textarea'))
      .find(field => field.willValidate && !field.checkValidity());
    if (invalidField) {
      const fieldStep = steps.findIndex(step => step.contains(invalidField));
      if (fieldStep !== -1) showStep(fieldStep);
      invalidField.focus();
      return;
    }
    if (fm.elements.namedItem('website').value) return;

    const value = id => document.getElementById(id).value.trim();
    const selected = id => document.getElementById(id).selectedOptions[0].textContent.trim();
    const details = [
      ['Type de projet', selected('type')],
      ['Délai souhaité', selected('delai')],
      ['Budget indicatif', value('budget') || 'À discuter'],
      ['Description', value('message')],
      ['Nom', value('nom')],
      ['E-mail', value('email')],
      ['Téléphone / WhatsApp', value('tel')]
    ];
    if (value('entreprise')) details.push(['Entreprise / organisation', value('entreprise')]);

    summary.replaceChildren();
    details.forEach(([label, text]) => {
      const term = document.createElement('dt');
      term.className = 'col-sm-4';
      term.textContent = label;
      const description = document.createElement('dd');
      description.className = 'col-sm-8';
      description.textContent = text;
      summary.append(term, description);
    });

    const message = [
      'Bonjour NexaWeb Mali, je souhaite demander un devis.',
      ...details.map(([label, text]) => `${label} : ${text}`)
    ].join('\n');
    whatsappLink.href = `https://wa.me/22382890992?text=${encodeURIComponent(message)}`;
    fm.hidden = true;
    confirmation.hidden = false;
    confirmation.querySelector('h2').focus();
  });

  document.getElementById('edit-request').addEventListener('click', () => {
    confirmation.hidden = true;
    fm.hidden = false;
    showStep(2);
    steps[activeStep].querySelector('input')?.focus();
  });
}
const t = document.getElementById('top');
if (t) {
  addEventListener('scroll', () => { t.hidden = scrollY < 600 });
  t.addEventListener('click', () => scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' }));
}

const languageSwitcher = document.querySelector('[data-language-switcher]');

if (languageSwitcher) {
  const supportedLanguages = ['fr', 'en', 'bm', 'zh', 'ru'];
  const scriptUrl = document.currentScript?.src;

  if (!scriptUrl) {
    throw new Error('Impossible de déterminer le chemin du site.');
  }

  const siteBasePath = new URL('../../', scriptUrl).pathname;

  if (!window.location.pathname.startsWith(siteBasePath)) {
    throw new Error('La page actuelle est en dehors du chemin attendu du site.');
  }

  const currentPage = window.location.pathname.slice(siteBasePath.length);
  const pageParts = currentPage.split('/').filter(Boolean);

  let currentLanguage = 'fr';
  if (supportedLanguages.includes(pageParts[0])) {
    currentLanguage = pageParts.shift();
  }

  languageSwitcher.value = currentLanguage;
  languageSwitcher.hidden = false;

  languageSwitcher.addEventListener('change', event => {
    const selectedLanguage = event.currentTarget.value;

    if (!supportedLanguages.includes(selectedLanguage)) {
      throw new Error(`Langue non prise en charge : ${selectedLanguage}`);
    }

    const pagePath = pageParts.join('/');
    const languagePath = selectedLanguage === 'fr'
      ? ''
      : `${selectedLanguage}/`;
    const destination = new URL(
      `${siteBasePath}${languagePath}${pagePath}`,
      window.location.origin
    );

    window.location.assign(destination.href);
  });
}