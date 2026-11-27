import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../i18n.js';
import Realisations from '../pages/Realisations.jsx';

test('Realisations se rend et filtre', () => {
  render(<MemoryRouter><Realisations lang="fr" /></MemoryRouter>);
  expect(screen.getByText(/Nos réalisations/i)).toBeInTheDocument();
  const btn = screen.getByRole('button', { name: /ecommerce/i });
  fireEvent.click(btn);
  expect(screen.getByText(/Boutique d’artisanat/i)).toBeInTheDocument();
});