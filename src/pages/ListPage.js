import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import galleries from '../data.json'

ListPage.propTypes = {
  galleries: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      name: PropTypes.string,
      style: PropTypes.string,
      opening: PropTypes.string,
      id: PropTypes.node,
    })
  ),
}

export default function ListPage() {
  return (
    <>
      <GalleryList>
        {galleries.map(gallery => (
          <Card
            key={gallery.id}
            image={gallery.image}
            name={gallery.name}
            style={gallery.style}
            opening={gallery.opening}
            onClick={() => onNavigate(gallery.id)}
          />
        ))}
      </GalleryList>
    </>
  )
}

const GalleryList = styled.ul`
  display: grid;
  justify-content: center;
  padding: 10px;
  gap: 12px;
`
