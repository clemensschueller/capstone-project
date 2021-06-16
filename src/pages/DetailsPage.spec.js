import { render, screen } from '@testing-library/react'
import DetailsPage from './DetailsPage'
import userEvent from '@testing-library/user-event'

describe('DetailsPage', () => {
  it('renders a heading and calls onNavigate correctly', () => {
    const handleClickBack = jest.fn()
    render(
      <DetailsPage
        onNavigate={handleClickBack}
        gallery={{ name: 'Affenfaust Galerie' }}
      />
    )

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    //logRoles(container)
    // const galleryName = screen.getAllByRole('heading')
    // expect(galleryName).toBeInTheDocument('Affenfaust Galerie')
    // //expect(galleryName).toHaveLength(2)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(handleClickBack).toHaveBeenCalled()
  })
})
