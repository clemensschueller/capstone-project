import { render, screen } from '@testing-library/react'
import BookmarkPage from './BookmarkPage'

describe('BookmarkPage', () => {
  it('renders', () => {
    render(<BookmarkPage />)
    expect(screen.getByText('BookmarkPage')).toBeInTheDocument()
  })
})
