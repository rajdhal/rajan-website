import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders portfolio header', () => {
    render(<App />);
    const nameElements = screen.getAllByText(/Rajan Dhaliwal/i);
    expect(nameElements.length).toBeGreaterThan(0);
  });
});
