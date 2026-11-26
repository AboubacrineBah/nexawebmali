import Layout from '../components/Layout.jsx';
import { SERVICES } from '../data/services.js';
import { PROJECTS } from '../data/projects.js';
import { SITE } from '../data/site.js';

const BASE = import.meta.env.BASE_URL;

export default function Home({ lang = 'fr' }) {
  return (
    <Layout lang={lang}>
      <section className="nx-dark nx-hero py-5">
        <div className="container py-lg-5">
          <div className="col-lg-7">
            <h3>Développeur web · Bamako, Mali</h3>
            <h1>Le digital malien, pensé pour le monde.</h1>
            <p className="lead nx-muted my-4">
              Sites WordPress, boutiques en ligne et applications React : des solutions web robustes,
              esthétiques et évolutives pour les entreprises, entrepreneurs et organisations.
            </p>
            <div className="d-grid d-sm-flex gap-2">
              <a className="btn btn-nx btn-lg" href="#/contact">Demander un devis</a>
              <a className="btn btn-outline-light btn-lg" href="#/realisations">Voir les réalisations</a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white border-bottom py-3">
        <div className="container d-flex flex-wrap gap-2 justify-content-center">
          {['WordPress','React','PHP','HTML5','CSS3','Bootstrap','Laravel'].map((t) => (
            <span key={t} className="badge text-bg-light border me-1">{t}</span>
          ))}
        </div>
      </div>
      <section className="py-5 nx-alt">
        <div className="container">
          <h2>Entre l’agence premium et le low-cost qui déçoit, il y a NexaWeb Mali.</h2>
          <p className="nx-muted mb-4">
            L’offre locale se partage souvent entre des agences aux tarifs très élevés et des
            prestations peu fiables à bas prix. NexaWeb Mali propose une autre voie : un studio de
            développement agile, des coûts annoncés clairement et une double maîtrise de WordPress et de
            React/PHP pour livrer des plateformes solides, lisibles et performantes.
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Trois pôles, une même exigence de qualité</h2>
          <p className="nx-muted mb-4">De la création à la maintenance.</p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="nx-card h-100 p-4">
                <div className="nx-ico mb-3" aria-hidden="true">/</div>
                <h3>Pôle BUILD</h3>
                <p>Sites vitrines et boutiques en ligne WordPress, rapides, clairs et faciles à gérer.</p>
                <a href="#/services">Voir le pôle</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="nx-card h-100 p-4">
                <div className="nx-ico mb-3" aria-hidden="true">{'{ }'}</div>
                <h3>Pôle ADVANCED</h3>
                <p>Applications métiers et interfaces dynamiques sur mesure, avec React et PHP.</p>
                <a href="#/services">Voir le pôle</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="nx-card h-100 p-4">
                <div className="nx-ico mb-3" aria-hidden="true">↻</div>
                <h3>Pôle RUN</h3>
                <p>Sécurité, performances, sauvegardes et dépannage pour que votre site reste en forme.</p>
                <a href="#/services">Voir le pôle</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 nx-alt">
        <div className="container">
          <h2>Nos réalisations</h2>
          <p className="nx-muted mb-4">Un aperçu de notre travail.</p>
          <div className="row g-4">
            {PROJECTS.slice(0, 3).map((p) => (
              <div className="col-md-6 col-lg-4" key={p.slug}>
                <article className="nx-card h-100 overflow-hidden">
                  <div className="p-4">
                    <span className="badge text-bg-primary mb-2">Projet de démonstration</span>
                    <h3 className="h5">{p.title}</h3>
                    <p>{p.desc}</p>
                    <p>{p.tags.map((t) => <span key={t} className="badge text-bg-light border me-1">{t}</span>)}</p>
                    <a href={`#/realisations/${p.slug}`} className="btn btn-sm btn-outline-nx">Lire l’étude de cas</a>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a className="btn btn-nx" href="#/realisations">Voir toutes les réalisations</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Contact</h2>
          <p className="nx-muted mb-4">Parlons de votre projet.</p>
          <div className="row g-4">
            <div className="col-md-6">
              <p>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
                <a href={`tel:${SITE.phone}`}>{SITE.phone}</a><br />
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>
              <p>{SITE.address}</p>
            </div>
            <div className="col-md-6">
              <a className="btn btn-nx btn-lg" href="#/contact">Demander un devis</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}