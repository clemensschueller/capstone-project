import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
//import GalleryDetails from '../components/GalleryDetails'
//import galleries from '../data.json'

DetailsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  gallery: PropTypes.shape({
    image: PropTypes.node,
    name: PropTypes.string,
    style: PropTypes.string,
    opening: PropTypes.string,
    id: PropTypes.node,
  }),
}

export default function DetailsPage({ onNavigate, gallery }) {
  const { image, name, style, address, opening, description } = gallery
  return (
    <Wrapper>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <h3>{style}</h3>
        <p>{address}</p>
        <p>{opening}</p>
        <p>{description}</p>
      </div>
      <BackButton onClick={onNavigate}>Close Details</BackButton>
    </Wrapper>
  )
}

const BackButton = styled(Button)`
  background-color: lightgoldenrodyellow;
  padding: 5px;
`
const Wrapper = styled.section`
  padding: 10px;
  background: whitesmoke;

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 15px;
    color: darksalmon;
  }

  img {
    width: 100px;
    border: 1px solid grey;
    border-radius: 5px;
  }
`
