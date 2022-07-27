import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuList from './MenuList';

test('renders learn react link', () => {
  render(<MenuList />);
  const menutext = screen.getByText(/menu1/i);
  expect(menutext).toBeInTheDocument();
});