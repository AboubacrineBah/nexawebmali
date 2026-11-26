import { useState } from 'react';
import Layout from '../components/Layout.jsx';
import { SITE, whatsappLink } from '../data/site.js';

const STEPS = ['Votre projet', 'Votre besoin', 'Vos coordonnées'];

export default function Contact({ lang = 'fr' }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ nom: '', email: '', tel: '', type: '', delai: '', budget: '', message: '', entreprise: '', website: '' });
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState('#');
  const [validated, setValidated] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const next = () => {
    setValidated(true);
    const stepFields = step === 0 ? ['type'] : step === 1 ? ['message'] : ['nom', 'email'];
    const invalid = stepFields.some((f) => !form[f]);
    if (invalid) return;
    setValidated(false);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    if (!form.nom || !form.email || !form.message) return;
    const details = [
      ['Type de projet', form.type],
      ['Délai souhaité', form.delai],
      ['Budget indicatif', form.budget || 'À discuter'],
      ['Description', form.message],
      ['Nom', form.nom],
      ['E-mail', form.email],
      ['Téléphone / WhatsApp', form.tel],
    ];
    if (form.entreprise) details.push(['Entreprise / organisation', form.entreprise]);
    const message = ['Bonjour NexaWeb Mali, je souhaite demander un devis.', ...details.map(([l, t]) => `${l} : ${t}`)].join('\n');
    setWaUrl(whatsappLink(message));
    setSent(true);
  };

  return (
    <Layout lang={lang}>
      <section className="nx-dark nx-hero py-5">
        <div className="container py-lg-5">
          <h1>Contact & devis</h1>
          <p className="lead nx-muted">Parlons de votre projet.</p>
        </div>
      </section>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-7">
        {!sent ? (
          <form onSubmit={onSubmit} className="mt-4" noValidate>
            <input type="text" name="website" value={form.website} onChange={onChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <p className="text-muted">Étape {step + 1} sur {STEPS.length} : {STEPS[step]}</p>
            <div hidden={step !== 0}>
              <div className="mb-3">
                <label className="form-label" htmlFor="type">Type de projet</label>
                <select id="type" name="type" className="form-select" required value={form.type} onChange={onChange}>
                  <option value="">Choisir…</option>
                  <option value="site">Site vitrine</option>
                  <option value="app">Application web</option>
                </select>
                {validated && !form.type && <div className="text-danger small">Requis</div>}
              </div>
            </div>
            <div hidden={step !== 1}>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">Description</label>
                <textarea id="message" name="message" className="form-control" required value={form.message} onChange={onChange}></textarea>
                {validated && !form.message && <div className="text-danger small">Requis</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="delai">Délai souhaité</label>
                <input id="delai" name="delai" className="form-control" value={form.delai} onChange={onChange} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="budget">Budget indicatif</label>
                <input id="budget" name="budget" className="form-control" value={form.budget} onChange={onChange} placeholder="À discuter" />
              </div>
            </div>
            <div hidden={step !== 2}>
              <div className="mb-3">
                <label className="form-label" htmlFor="nom">Nom</label>
                <input id="nom" name="nom" className="form-control" required value={form.nom} onChange={onChange} />
                {validated && !form.nom && <div className="text-danger small">Requis</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" className="form-control" required value={form.email} onChange={onChange} />
                {validated && !form.email && <div className="text-danger small">Requis</div>}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="tel">Téléphone / WhatsApp</label>
                <input id="tel" name="tel" className="form-control" value={form.tel} onChange={onChange} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="entreprise">Entreprise / organisation</label>
                <input id="entreprise" name="entreprise" className="form-control" value={form.entreprise} onChange={onChange} />
              </div>
            </div>
            <div className="d-flex gap-2">
              {step > 0 && <button type="button" className="btn btn-secondary" onClick={back}>Retour</button>}
              {step < STEPS.length - 1 && <button type="button" className="btn btn-nx" onClick={next}>Suivant</button>}
              {step === STEPS.length - 1 && <button type="submit" className="btn btn-nx">Envoyer la demande</button>}
            </div>
          </form>
        ) : (
          <div className="mt-4">
            <p>Votre demande est prête. Envoyez-la via WhatsApp :</p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success">
              <i className="bi bi-whatsapp me-2"></i>Écrire sur WhatsApp
            </a>
          </div>
        )}
          </div>
          <div className="col-lg-5">
            <div className="nx-card p-4">
              <h2>Coordonnées</h2>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><i className="bi bi-envelope me-2"></i><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li className="mb-2"><i className="bi bi-telephone me-2"></i><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
                <li className="mb-2"><i className="bi bi-whatsapp me-2"></i><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li className="mb-2"><i className="bi bi-geo-alt me-2"></i>{SITE.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}