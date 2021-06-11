import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import GalleryDetails from '../components/GalleryDetails'

DetailsPage.propTypes = {
  id: PropTypes.string,
  image: PropTypes.node,
  name: PropTypes.string,
  style: PropTypes.string,
  address: PropTypes.string,
  opening: PropTypes.string,
  description: PropTypes.string,
  onNavigate: PropTypes.func.isRequired,
}

export default function DetailsPage({
  onNavigate,
  image,
  name,
  style,
  address,
  opening,
  description,
}) {
  return (
    <>
      <div>
        <GalleryDetails
          image={gallery.image}
          name={gallery.name}
          style={gallery.style}
          address={gallery.address}
          opening={gallery.opening}
          description={gallery.description}
        />
        <BackButton onClick={onNavigate}>Close Details</BackButton>
      </div>
    </>
  )
}

const Infos = styled(Button)`
  position: fixed;
  padding: 5px;
  z-index: 1;
`
