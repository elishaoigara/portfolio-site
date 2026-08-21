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
  test('renders a safe résumé request CTA while the PDF asset is unavailable', () => {
    render(<Hero />);
    
    const resumeLink = screen.getByRole('link', { name: /request my résumé/i });
    
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', '#contact');
  });
});
