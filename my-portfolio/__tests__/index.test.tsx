import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a first test', () => {
    render(<Home />)
    const firsttest = screen.getByTestId("firsttesthome")
    expect(firsttest).toBeInTheDocument()
  })
})