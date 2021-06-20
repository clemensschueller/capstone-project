import { render, screen } from '@testing-library/react'
import ButtonBookmark from './ButtonBookmark'

describe('ButtonBookmark', () => {
  it('renders', () => {
    render(<ButtonBookmark />)
    expect(screen.getByText('ButtonBookmark')).toBeInTheDocument()
  })
})
