import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 //import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// Mock the Navbar component
jest.mock('../components/navbar', () => () => <nav>Mocked Navbar</nav>);

describe('Home Component Tests', () => {
  test('renders hero image correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText('tucbildhome');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/images/tucbildhome.jpeg');

    const heroHeading = screen.getByText('Välkommen till TUC Swe Online Shop');
    expect(heroHeading).toBeInTheDocument();
  });

  test('search field filters products based on input', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Sök efter Kurs...');
    expect(searchInput).toBeInTheDocument();

    // Test input value changes
    fireEvent.change(searchInput, { target: { value: 'Product 1' } });
    expect(searchInput.value).toBe('Product 1');

    // Test filtered result
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });

  test('renders product links correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const productLinks = screen.getAllByRole('link');
    expect(productLinks).toHaveLength(6); // Assuming 6 products
    expect(productLinks[0]).toHaveAttribute('href', '/product/1');
    expect(productLinks[1]).toHaveAttribute('href', '/product/2');
  });
});
