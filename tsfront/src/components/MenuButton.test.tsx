import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuButton from './MenuButton';

test('renders learn react link', () => {
  render(<MenuButton />);
  const Openbutton = screen.getByText(/Open/i);
  expect(Openbutton).toBeInTheDocument();
});
