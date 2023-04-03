import { render, screen } from '@testing-library/react';
import Roles from './Roles';

test('affiche le titre', () => {
  render(<Roles />);
  const element = screen.getByText('Liste des rôles');
  expect(element).toBeInTheDocument();
});

test('liste "Utilisateur"', () => {
  render(<Roles />);
  expect(screen.getByText('Utilisateur')).toBeInTheDocument();
});
