export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center small">
        © {new Date().getFullYear()} NexaWeb Mali — Tous droits réservés.
      </div>
    </footer>
  );
}