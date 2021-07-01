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
    <Wrapper>
      <Header>{title}</Header>
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
        'Du hast noch keine gespeicherten Bookmarks.'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* display: grid;
  justify-content: center; */
  margin-top: 60px;
  //gap: 12px;
  overflow-y: auto;
`

const ListWrapper = styled.ul`
  margin-top: 60px;
  display: grid;
  padding: 10px;
  font-size: 10px;
  justify-self: center;
  gap: 12px;
`
// const InfoWrapper = styled.div`
//   color: grey;
//   text-align: center;
// `
