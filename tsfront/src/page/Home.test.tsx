import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Home from './Home'
 
test('render home', () => {
  render(<Home />,{wrapper: BrowserRouter})
  expect(screen.getByText(/About/i)).toBeInTheDocument()
})