import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import ButtonBookmark from '../components/ButtonBookmark'

DetailsPage.propTypes = {
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

export default function DetailsPage({ onNavigate, gallery, handleBookmark }) {
  const {
    id,
    image,
    name,
    style,
    address,
    opening,
    description,
    isBookmarked,
  } = gallery
  return (
    <Wrapper>
      <img src={image} alt="" />
      <ButtonBookmark
        onClick={() => handleBookmark(id)}
        isBookmarked={isBookmarked}
      />
      <h2>{name}</h2>
      <div>Kunststil: {style}</div>
      <Infos>
        <span>{address}</span>
        <span>{opening}</span>
        <p>{description}</p>
      </Infos>
      <BackButton onClick={onNavigate}>Close Details</BackButton>
    </Wrapper>
  )
}

const BackButton = styled(Button)`
  position: fixed;
  background-color: #ebf1f4;
  padding: 8px;
  bottom: 0;
`
const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  padding: 10px;
  background: whitesmoke;

  h2 {
    font-size: 25px;
    color: #372d70;
  }

  div {
    font-size: 18px;
    color: #1c62d4;
    margin-bottom: 20px;
  }

  img {
    width: 80%;
    height: 50wh;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 20px;
  }
`

const Infos = styled.section`
  display: grid;

  span {
    font-size: 80%;
    color: grey;
  }
`
// background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
