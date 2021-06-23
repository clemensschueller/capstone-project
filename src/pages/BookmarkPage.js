import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../components/Card'

BookmarkPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  gallery: PropTypes.shape({
    image: PropTypes.node,
    name: PropTypes.string,
    style: PropTypes.string,
    address: PropTypes.string,
    opening: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default function BookmarkPage({ galleries, onNavigate }) {
  return (
    <Wrapper>
      bookmarkedGalleries={}
      <Card
        key={gallery.id}
        image={gallery.image}
        name={gallery.name}
        style={gallery.style}
        opening={gallery.opening}
        onClick={() => onNavigate(gallery.id)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  justify-content: center;
  padding: 10px;
  gap: 12px;
`
