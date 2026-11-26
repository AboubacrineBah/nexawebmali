import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact.jsx';

const wrap = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

test('Contact: rend le formulaire', () => {
  wrap(<Contact />);
  expect(screen.getByText(/Étape 1 sur 3/i)).toBeInTheDocument();
});

test('Contact: génère une URL WhatsApp encodée après soumission', () => {
  wrap(<Contact />);
  // step 0
  fireEvent.change(screen.getByLabelText(/Type de projet/i), { target: { value: 'site' } });
  fireEvent.click(screen.getByText(/Suivant/i));
  // step 1
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Mon projet' } });
  fireEvent.click(screen.getByText(/Suivant/i));
  // step 2
  fireEvent.change(screen.getByLabelText(/^Nom$/i), { target: { value: 'Jean' } });
  fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'jean@test.com' } });
  fireEvent.click(screen.getByText(/Envoyer la demande/i));
  const link = screen.getByText(/Écrire sur WhatsApp/i).closest('a');
  expect(link.getAttribute('href')).toContain('wa.me');
  expect(link.getAttribute('href')).toContain(encodeURIComponent('Jean'));
  expect(link.getAttribute('rel')).toBe('noopener noreferrer');
});

test('Contact: honeypot bloque la soumission', () => {
  wrap(<Contact />);
  fireEvent.change(screen.getByLabelText(/Type de projet/i), { target: { value: 'site' } });
  fireEvent.click(screen.getByText(/Suivant/i));
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'x' } });
  fireEvent.click(screen.getByText(/Suivant/i));
  fireEvent.change(screen.getByLabelText(/^Nom$/i), { target: { value: 'Bot' } });
  fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'b@b.com' } });
  const hp = document.querySelector('input[name="website"]');
  fireEvent.change(hp, { target: { value: 'spam' } });
  fireEvent.click(screen.getByText(/Envoyer la demande/i));
  expect(screen.queryByText(/Écrire sur WhatsApp/i)).not.toBeInTheDocument();
});