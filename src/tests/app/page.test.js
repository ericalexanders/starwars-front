import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';

import Home from '../../app/page';

jest.mock('swr', () => jest.fn());
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/');
    useSWR.mockReturnValue({ data: null, error: null, isLoading: true });
  });

  it('shows loading spinner when data is loading', () => {
    render(<Home />);
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('renders CardItem components after data loads', async () => {
    const mockData = { results: [{ name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/' }] };
    useSWR.mockReturnValue({ data: mockData, error: null, isLoading: false });

    render(<Home />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});