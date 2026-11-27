import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../i18n.js';
import Services from '../pages/Services.jsx';

test('Services se rend avec les 3 poles', () => {
  render(<MemoryRouter><Services lang="fr" /></MemoryRouter>);
  expect(screen.getByText(/Pôle BUILD/i)).toBeInTheDocument();
  expect(screen.getByText(/Pôle ADVANCED/i)).toBeInTheDocument();
  expect(screen.getByText(/Pôle RUN/i)).toBeInTheDocument();
});