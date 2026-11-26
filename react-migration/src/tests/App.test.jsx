import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

test('App se rend sans erreur', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});