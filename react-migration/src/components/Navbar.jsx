import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGS = ['fr', 'en', 'bm', 'zh', 'ru'];

export default function Navbar({ lang = 'fr' }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg fixed-top nx-navbar" data-bs-theme="dark" aria-label="Navigation principale">
      <div className="container">
        <Link className="nx-brand" to={`/${lang === 'fr' ? '' : lang + '/'}`} aria-label="NexaWeb Mali, accueil">
          <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 40 40' aria-hidden='true'>
            <rect x='.5' y='.5' width='39' height='39' rx='9' fill='#16213C' stroke='#fff' stroke-opacity='.3' />
            <path d='M11 30V10l18 20V10' fill='none' stroke='#fff' stroke-width='3.5' stroke-linejoin='round' stroke-linecap='round' />
            <circle cx='11' cy='10' r='3' fill='#C99A2E' />
            <circle cx='29' cy='10' r='3' fill='#C99A2E' />
            <circle cx='11' cy='30' r='3' fill='#3E8E63' />
            <circle cx='29' cy='30' r='3' fill='#3E8E63' />
            <circle cx='20' cy='20' r='3' fill='#3E8E63' />
          </svg>
          <span className="nx-word">NexaWeb<small>MALI</small></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Ouvrir le menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}a-propos`}>À propos</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}services`}>{t('nav.services')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}realisations`}>{t('nav.realisations')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/${lang === 'fr' ? '' : lang + '/'}contact`}>{t('nav.contact')}</Link></li>
          </ul>
          <select id="language-switcher" name="language" className="form-select form-select-sm ms-3" style={{ width: 'auto' }} defaultValue={lang} aria-label="Choisir la langue" onChange={(e) => {
            const target = e.target.value;
            const path = location.pathname.replace(/^\/(fr|en|bm|zh|ru)\//, '/').replace(/^\/(fr|en|bm|zh|ru)$/, '/');
            const prefix = target === 'fr' ? '' : `/${target}`;
            window.location.hash = `#${prefix}${path === '/' ? '' : path}`;
            i18n.changeLanguage(target);
          }}>
            {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
    </nav>
  );
}