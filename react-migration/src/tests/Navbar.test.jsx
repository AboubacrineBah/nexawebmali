import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../i18n.js';
import Navbar from '../components/Navbar.jsx';

test('Navbar se rend avec les liens', () => {
  render(<MemoryRouter><Navbar lang="fr" /></MemoryRouter>);
  expect(screen.getByText(/Services/i)).toBeInTheDocument();
  expect(screen.getByText(/Réalisations/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});