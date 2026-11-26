import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

test('App se rend sans erreur', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
});