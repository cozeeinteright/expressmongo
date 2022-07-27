import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titlename = screen.getByText(/Satoyama/i);
  expect(titlename).toBeInTheDocument();
});