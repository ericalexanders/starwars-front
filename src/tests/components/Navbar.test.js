import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderNav from '../../components/Navbar';;

// const { usePathname } = require('next/navigation');

describe('HeaderNav', () => {
  it('renders NavbarItem components', () => {
    render(<HeaderNav />);

    expect(screen.getByText('Personajes')).toBeInTheDocument();
    expect(screen.getByText('Peliculas')).toBeInTheDocument();
    expect(screen.getByText('Naves')).toBeInTheDocument();
    expect(screen.getByText('Planetas')).toBeInTheDocument();
  });

  it('renders Link components', () => {
    render(<HeaderNav />);

    expect(screen.getByRole('link', { name: 'Personajes' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Peliculas' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Naves' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Planetas' })).toBeInTheDocument();
  });

  it('Link components have correct href attributes', () => {
    render(<HeaderNav />);

    expect(screen.getByRole('link', { name: 'Personajes' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Peliculas' })).toHaveAttribute('href', '/films');
    expect(screen.getByRole('link', { name: 'Naves' })).toHaveAttribute('href', '/starships');
    expect(screen.getByRole('link', { name: 'Planetas' })).toHaveAttribute('href', '/planets');
  });
});
