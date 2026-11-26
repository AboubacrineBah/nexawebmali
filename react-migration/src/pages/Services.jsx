import Layout from '../components/Layout.jsx';

export default function Services({ lang = 'fr' }) {
  return (
    <Layout lang={lang}>
      <section className="py-5">
        <div className="container">
          <div className="row g-4 mb-5" id="build">
            <div className="col-lg-5">
              <div className="nx-ico mb-3" aria-hidden="true">/</div>
              <h2>Pôle BUILD — Créer des sites qui convertissent</h2>
              <p>Sites vitrines et boutiques en ligne WordPress, rapides, clairs et faciles à gérer.</p>
            </div>
            <div className="col-lg-7">
              <ul className="list-group">
                <li className="list-group-item"><b>Sites WordPress professionnels :</b> Une vitrine soignée pour présenter votre activité, vos produits et vos coordonnées.</li>
                <li className="list-group-item"><b>E-commerce :</b> Une boutique en ligne pour vendre au-delà de Bamako, avec un catalogue simple à gérer.</li>
                <li className="list-group-item"><b>Interfaces responsive :</b> Des pages qui s’adaptent à tous les écrans, du téléphone au grand écran.</li>
                <li className="list-group-item"><b>Idéal pour :</b> Commerçants, artisans, entreprises de services, associations.</li>
                <li className="list-group-item"><b>Technologies :</b> WordPress · WooCommerce · HTML5 · CSS3 · Bootstrap · Laravel.</li>
                <li className="list-group-item"><b>Tarifs :</b> sur cahier des charges.</li>
              </ul>
              <a className="btn btn-nx mt-2" href="#/contact">Demander un devis</a>
            </div>
          </div>
          <hr />
          <div className="row g-4 mb-5" id="advanced">
            <div className="col-lg-7">
              <ul className="list-group">
                <li className="list-group-item"><b>Applications web React :</b> Des applications monopages rapides et interactives.</li>
                <li className="list-group-item"><b>Développement front-end :</b> Des interfaces claires, accessibles et fidèles à votre identité.</li>
                <li className="list-group-item"><b>Développement back-end PHP :</b> Bases de données, logique métier et extensions sur mesure.</li>
                <li className="list-group-item"><b>API et intégrations :</b> Relier votre site ou votre application à vos autres outils.</li>
                <li className="list-group-item"><b>Solutions web sur mesure :</b> Un besoin spécifique ? Nous étudions et chiffrons une solution dédiée.</li>
                <li className="list-group-item"><b>Idéal pour :</b> Startups, porteurs de projets, agences et entreprises ayant un besoin spécifique.</li>
                <li className="list-group-item"><b>Technologies :</b> React · JavaScript · PHP · MySQL · Laravel.</li>
                <li className="list-group-item"><b>Tarifs :</b> Au taux journalier ou sur cahier des charges.</li>
              </ul>
              <a className="btn btn-nx mt-2" href="#/contact">Demander un devis</a>
            </div>
            <div className="col-lg-5">
              <div className="nx-ico mb-3" aria-hidden="true">{'{ }'}</div>
              <h2>Pôle ADVANCED — Concevoir des applications sur mesure</h2>
              <p>Quand un modèle ne suffit plus : applications métiers, interfaces interactives et intégrations pensées pour votre organisation. Nous construisons l’interface avec React et la partie serveur avec PHP.</p>
            </div>
          </div>
          <hr />
          <div className="row g-4 mb-5" id="run">
            <div className="col-lg-5">
              <div className="nx-ico mb-3" aria-hidden="true">↻</div>
              <h2>Pôle RUN — Garder votre site rapide et sûr</h2>
              <p>Un site en ligne demande un suivi : mises à jour, sauvegardes, sécurité, vitesse. Avec un abonnement mensuel, vous avez un interlocuteur en cas de problème et l’esprit libre.</p>
            </div>
            <div className="col-lg-7">
              <ul className="list-group">
                <li className="list-group-item"><b>Maintenance et sécurité WordPress :</b> Mises à jour, sauvegardes, sécurité et dépannage.</li>
                <li className="list-group-item"><b>Optimisation des performances :</b> Audit de vitesse et réglages pour des pages qui se chargent plus vite.</li>
                <li className="list-group-item"><b>Idéal pour :</b> Entreprises qui ont déjà un site web, veulent le fiabiliser et le sécuriser.</li>
                <li className="list-group-item"><b>Technologies :</b> WordPress · PHP · MySQL.</li>
                <li className="list-group-item"><b>Tarifs :</b> Abonnement mensuel : au taux journalier. Dépannage ponctuel et audits : facturés au taux journalier ou à l’heure.</li>
              </ul>
              <a className="btn btn-nx mt-2" href="#/contact">Demander un devis</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}