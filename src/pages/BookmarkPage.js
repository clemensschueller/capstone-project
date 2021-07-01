import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../components/Card'
import Header from '../components/Header'

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

export default function BookmarkPage({ galleries, onNavigate, title }) {
  const bookmarkedGalleries = galleries.filter(
    gallery => gallery.isBookmarked === true
  )

  return (
    <>
      <Header>{title}</Header>
      <div>
        {bookmarkedGalleries.length > 0 ? (
          <ListWrapper>
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
          </ListWrapper>
        ) : (
          <InfoWrapper>'Du hast noch keine Bookmarks gespeichert!'</InfoWrapper>
        )}
      </div>
    </>
  )
}

// const Wrapper = styled.ul`
//   //display: grid;
//   //justify-content: center;
//   padding: 10px;
//   gap: 12px;
//   overflow-y: auto;
// `

const ListWrapper = styled.ul`
  margin-top: 60px;
  display: grid;
  padding: 0;
  font-size: 10px;
  justify-self: center;
  gap: 12px;
`
const InfoWrapper = styled.div`
  color: grey;
  text-align: center;
`
