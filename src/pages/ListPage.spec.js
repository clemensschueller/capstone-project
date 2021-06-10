import { render, screen } from '@testing-library/react'
import ListPage from './ListPage'

describe('ListPage', () => {
  it('renders', () => {
    render(<ListPage />)
    expect(screen.getByText('ListPage')).toBeInTheDocument()
  })
})
