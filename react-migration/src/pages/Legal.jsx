import Layout from '../components/Layout.jsx';

export default function Legal({ lang = 'fr', type = 'mentions' }) {
  return (
    <Layout lang={lang}>
      <section className="nx-dark nx-hero py-5">
        <div className="container py-lg-5">
          <h1>{type === 'mentions' ? 'Mentions légales' : 'Confidentialité'}</h1>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="col-lg-8">
            <div className="nx-card p-4 p-lg-5">
            {type === 'mentions' ? (
              <>
                <h2 className="h3">Mentions légales</h2>
                <h2 className="h4 mt-4" id="editeur">Éditeur</h2>
                <p>NexaWeb Mali, M. BAH Aboubacrine, Bamako, Mali.</p>
                <h2 className="h4 mt-4" id="hebergeur">Hébergeur</h2>
                <p>GitHub Pages</p>
                <h2 className="h4 mt-4" id="lien">Lien du site web</h2>
                <p><a className="link-primary" href="https://www.nexawebmali.com">www.nexawebmali.com</a></p>
                <h2 className="h4 mt-4" id="propriete">Propriété intellectuelle</h2>
                <p>Les textes, visuels, logos et le code de ce site sont la propriété de NexaWeb Mali, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite. Les projets présentés dans la page Réalisations appartiennent à leurs propriétaires respectifs et sont montrés avec leur accord.</p>
                <h2 className="h4 mt-4" id="responsabilite">Responsabilité</h2>
                <p>NexaWeb Mali s’efforce de fournir des informations exactes et à jour, sans garantie d’exhaustivité. Les liens vers des sites tiers sont fournis à titre d’information.</p>
                <h2 className="h4 mt-4" id="credits">Crédits</h2>
                <p>Conception et développement : NexaWeb Mali.<br />Polices et icônes : FontAwesome et Bootstrap.</p>
              </>
            ) : (
              <>
                <h2 className="h3">Confidentialité</h2>
                <h2 className="h4 mt-4">Données collectées</h2>
                <p>Le formulaire de devis collecte votre nom, e-mail, téléphone/WhatsApp, type de projet, délai, budget et description. Ces données sont utilisées uniquement pour répondre à votre demande.</p>
                <h2 className="h4 mt-4">Usage et conservation</h2>
                <p>Les données sont conservées le temps nécessaire au traitement de votre demande et à la relation commerciale. Elles ne sont pas vendues ni partagées avec des tiers.</p>
                <h2 className="h4 mt-4">Vos droits</h2>
                <p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à aboubacrinebah@nexawebmali.com.</p>
                <h2 className="h4 mt-4">Cookies</h2>
                <p>Ce site n'utilise pas de cookies de suivi. Seuls des cookies techniques nécessaires au fonctionnement peuvent être déposés.</p>
              </>
            )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}