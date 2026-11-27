import Layout from '../components/Layout.jsx';
const BASE = import.meta.env.BASE_URL;

export default function APropos({ lang = 'fr' }) {
  return (
    <Layout lang={lang}>
      <section className="nx-dark py-5">
        <div className="container py-lg-4">
          <div className="col-lg-8">
            <h1>Un studio web né à Bamako, pensé pour le monde</h1>
            <p className="lead nx-muted mt-3 mb-0">
              NexaWeb Mali conçoit des sites, des applications et des solutions digitales modernes pour les entreprises, entrepreneurs et organisations.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 nx-alt">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2>Notre histoire</h2>
              <p>NexaWeb Mali est né d’une conviction simple : les entreprises maliennes méritent des outils numériques de niveau international. L’activité démarre à Bamako, avec un développeur web indépendant. L’ambition : bâtir une réputation solide auprès des PME et des entrepreneurs, puis devenir une agence digitale capable de servir des clients africains et internationaux.</p>
            </div>
            <div className="col-lg-6">
              <h2>Un nom qui porte le projet</h2>
              <p><b>Nexa |</b> Connexion, nouvelle génération, innovation et ouverture internationale.</p>
              <hr />
              <p><b>Web |</b> Notre métier : le développement web.</p>
              <hr />
              <p><b>Mali |</b> Notre ancrage local, notre identité africaine et notre point de départ.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Vision et mission</h2>
          <p>Devenir une référence de l’ingénierie web en Afrique de l’Ouest et démontrer la compétitivité mondiale des talents maliens.<br />Démocratiser l’accès aux technologies de pointe pour les PME et les startups locales.</p>
        </div>
      </section>
      <section className="py-5 nx-alt">
        <div className="container">
          <h2>Nos valeurs</h2>
          <div className="row g-4">
            {[
              ['Excellence technique', 'Nous appliquons les meilleures pratiques de programmation : un code propre, des sites rapides, la sécurité et l’accessibilité pensées dès la conception.'],
              ['Transparence', 'Vous connaissez les coûts et les délais avant le début du projet, et vous êtes tenu informé à chaque étape.'],
              ['Agilité', 'Nous nous adaptons rapidement aux évolutions technologiques et aux évolutions de votre besoin en cours de route.'],
              ['Impact', 'Chaque interface est pensée pour servir vos objectifs : plus de visibilité, plus de contacts, plus de ventes.'],
            ].map(([t, d]) => (
              <div className="col-md-6 col-lg-3" key={t}>
                <div className="nx-card h-100 p-4">
                  <h3 className="h5">{t}</h3>
                  <p className="mb-0">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-4 text-center">
              <img className="img-fluid rounded shadow" src={`${BASE}assets/images/AboubacrineBah1-1.webp`} alt="M. BAH Aboubacrine — Fondateur et développeur web full-stack" loading="lazy" />
              <div className="d-grid d-sm-flex gap-2 justify-content-center mt-3">
                <a className="btn btn-outline-nx nx-portfolio-btn" href="https://portfolio.nexawebmali.com" target="_blank" rel="noopener noreferrer">
                  Découvrir mon portfolio <span className="ms-2" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <h2>M. BAH Aboubacrine — Fondateur et développeur web full-stack</h2>
              <p>M. BAH Aboubacrine associe une vision business à une ingénierie technique avancée. Il conçoit et développe vos projets de la maquette à la mise en ligne.</p>
              <p>
                {['WordPress','React','PHP','HTML5','CSS3','Bootstrap','Laravel'].map((t) => (
                  <span key={t} className="badge text-bg-light border me-1">{t}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}