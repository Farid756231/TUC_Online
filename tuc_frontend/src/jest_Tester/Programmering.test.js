import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Programmering from '../pages/produkter/programmering';
import '@testing-library/jest-dom';

describe('Programmering Component', () => {
  test('renders Navbar', () => {
    render(
      <Router>
        <Programmering />
      </Router>
    );
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  test('renders main image', () => {
    render(
      <Router>
        <Programmering />
      </Router>
    );
    const mainImage = screen.getByAltText('programmering');
    expect(mainImage).toBeInTheDocument();
  });

  test('renders course description text', () => {
    render(
      <Router>
        <Programmering />
      </Router>
    );
    const courseDescription = screen.getByText(/Ta steget in i framtiden\? Bli en Programmerare Idag!/i);
    expect(courseDescription).toBeInTheDocument();
  });

  test('renders "Köp" button', () => {
    render(
      <Router>
        <Programmering />
      </Router>
    );
    const buyButton = screen.getByRole('button', { name: /Köp/i });
    expect(buyButton).toBeInTheDocument();
  });

  test('renders recommended courses section', () => {
    render(
      <Router>
        <Programmering />
      </Router>
    );

  
    const recommendedCoursesHeading = screen.getByText(/Rekomenderade Kurser/i);
    expect(recommendedCoursesHeading).toBeInTheDocument();

  
    const elkonstruktörCourse = screen.getByText(/Elkonstruktör/i);
    expect(elkonstruktörCourse).toBeInTheDocument();

   
    const barnomsorgCourse = screen.getByRole('heading', { name: /Barnomsorg/i });
    expect(barnomsorgCourse).toBeInTheDocument();

  });
});
