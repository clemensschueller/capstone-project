import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import gallery from '../data.json'

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
  const bookmarkedGalleries = galleries.filter(
    gallery => gallery.isBookmarked === true
  )

  return (
    <Wrapper>
      {bookmarkedGalleries.map(({ id, image, name, style, opening }) => (
        <Card
          key={id}
          image={image}
          name={name}
          style={style}
          opening={opening}
          onClick={() => onNavigate(id)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  justify-content: center;
  padding: 10px;
  gap: 12px;
`
