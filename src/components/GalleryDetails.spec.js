import { render, screen } from '@testing-library/react'
import GalleryDetails from './GalleryDetails'

describe('GalleryDetails', () => {
  it('renders', () => {
    render(<GalleryDetails />)
    expect(screen.getByText('GalleryDetails')).toBeInTheDocument()
  })
})
