import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Skills from './Skills';

describe('Skills component', () => {
  test('exposes an accessible tablist with the active panel', () => {
    render(<Skills />);

    const tablist = screen.getByRole('tablist', { name: /skills categories/i });
    const activeTab = screen.getByRole('tab', { name: 'AI & Tools' });
    const panel = screen.getByRole('tabpanel');

    expect(tablist).toBeInTheDocument();
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
    expect(activeTab).toHaveAttribute('aria-controls', panel.id);
    expect(panel).toHaveAttribute('aria-labelledby', activeTab.id);
  });

  test('updates selected tab and panel when a category is clicked', () => {
    render(<Skills />);

    const frontendTab = screen.getByRole('tab', { name: 'Frontend' });
    userEvent.click(frontendTab);

    expect(frontendTab).toHaveAttribute('aria-selected', 'true');
    expect(frontendTab).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', frontendTab.id);
    expect(screen.getByText('React.js')).toBeInTheDocument();
  });

  test('supports arrow-key navigation between tabs', async () => {
    render(<Skills />);

    const activeTab = screen.getByRole('tab', { name: 'AI & Tools' });
    userEvent.type(activeTab, '{ArrowRight}');
    await new Promise(resolve => window.requestAnimationFrame(resolve));

    const frontendTab = screen.getByRole('tab', { name: 'Frontend' });
    expect(frontendTab).toHaveAttribute('aria-selected', 'true');
    expect(frontendTab).toHaveFocus();
  });
});

jest.mock('aos', () => ({
  init: jest.fn(),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  },
}));
