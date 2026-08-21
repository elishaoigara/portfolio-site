import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar accessibility', () => {
  test('opens the mobile menu, focuses its first link, and closes with Escape', () => {
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    userEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    const drawer = screen.getByRole('dialog', { name: /navigation menu/i });
    expect(drawer).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toHaveFocus();

    userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog', { name: /navigation menu/i })).not.toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});

Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
window.scrollTo = jest.fn();
