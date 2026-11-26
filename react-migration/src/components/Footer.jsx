import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SITE } from '../data/site.js';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="nx-footer pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-4">
            <span className="nx-word">NexaWeb<small>MALI</small></span>
            <p className="mt-3">Le digital malien, pensé pour le monde.</p>
            <p className="mt-3">Développement web depuis Bamako : sites WordPress, applications React et maintenance.</p>
          </div>
          <div className="col-6 col-lg-2">
            <h2>Navigation</h2>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h2>Services</h2>
            <ul className="list-unstyled">
              <li><a href="#/services#build">BUILD</a></li>
              <li><a href="#/services#advanced">ADVANCED</a></li>
              <li><a href="#/services#run">RUN</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2>Contact</h2>
            <address className="mb-0">
              {SITE.address}<br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
              <a href={`tel:${SITE.phone}`}>{SITE.phone}</a><br />
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </address>
          </div>
        </div>
        <hr className="my-4" />
        <p className="small mb-0">© {year} NexaWeb Mali. <Link to="/mentions-legales">Mentions légales</Link> et <Link to="/confidentialite">confidentialité</Link>.</p>
      </div>
    </footer>
  );
}