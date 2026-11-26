import Layout from '../components/Layout.jsx';

export default function Legal({ lang = 'fr', type = 'mentions' }) {
  return (
    <Layout lang={lang}>
      <section className="py-5">
        <div className="container">
          <div className="col-lg-8">
            {type === 'mentions' ? (
              <>
                <h1>Mentions légales</h1>
                <h2 className="h4 mt-4" id="editeur">Éditeur</h2>
                <p>NexaWeb Mali, M. BAH Aboubacrine, Bamako, Mali.</p>
                <h2 className="h4 mt-4" id="hebergeur">Hébergeur</h2>
                <p>GitHub Pages</p>
                <h2 className="h4 mt-4" id="lien">Lien du site web</h2>
                <p><a className="link-primary" href="https://aboubacrinebah.github.io/nexawebmali/">aboubacrinebah.github.io/nexawebmali/</a></p>
                <h2 className="h4 mt-4" id="propriete">Propriété intellectuelle</h2>
                <p>Les textes, visuels, logos et le code de ce site sont la propriété de NexaWeb Mali, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite. Les projets présentés dans la page Réalisations appartiennent à leurs propriétaires respectifs et sont montrés avec leur accord.</p>
                <h2 className="h4 mt-4" id="responsabilite">Responsabilité</h2>
                <p>NexaWeb Mali s’efforce de fournir des informations exactes et à jour, sans garantie d’exhaustivité. Les liens vers des sites tiers sont fournis à titre d’information.</p>
                <h2 className="h4 mt-4" id="credits">Crédits</h2>
                <p>Conception et développement : NexaWeb Mali.<br />Polices et icônes : FontAwesome et Bootstrap.</p>
              </>
            ) : (
              <>
                <h1>Confidentialité</h1>
                <p>Politique de confidentialité à compléter (données collectées via le formulaire de devis, usage, conservation, droits).</p>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}