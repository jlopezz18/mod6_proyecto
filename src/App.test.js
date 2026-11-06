import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el mensaje de exito del proyecto', () => {
  render(<App />);
  const textoElemento = screen.getByText(/Mi proyecto de vercel/i);
  expect(textoElemento).toBeInTheDocument();
});