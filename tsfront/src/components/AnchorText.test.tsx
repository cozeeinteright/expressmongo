import React from 'react';
import { render, screen } from '@testing-library/react';
import AnchorText from './AnchorText';

test('renders learn react link', () => {
  render(<AnchorText />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
