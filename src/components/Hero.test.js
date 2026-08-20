import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    p: ({ children, className }) => <p className={className}>{children}</p>,
    h1: ({ children, className }) => <h1 className={className}>{children}</h1>,
    div: ({ children, className }) => <div className={className}>{children}</div>,
  },
}));

describe('Hero Component', () => {
  test('renders the updated resume request CTA pointing to #contact', () => {
    render(<Hero />);
    
    // The updated CTA requests the résumé through the contact section.
    const resumeLink = screen.getByRole('link', { name: /request my résumé/i });
    
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', '#contact');
  });

  test('does not render the old download CTA', () => {
    render(<Hero />);
    
    const brokenLink = screen.queryByRole('link', { name: /download résumé/i });
    expect(brokenLink).not.toBeInTheDocument();
  });
});
