import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import About from './About'
 
test('render about', () => {
  render(<About />,{wrapper: BrowserRouter})
  expect(screen.getByText(/Home/i)).toBeInTheDocument()
})