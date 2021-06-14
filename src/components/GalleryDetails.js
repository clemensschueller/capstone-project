import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

GalleryDetails.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
  style: PropTypes.string,
  address: PropTypes.string,
  opening: PropTypes.string,
  description: PropTypes.string,
}

export default function GalleryDetails({
  image,
  name,
  style,
  address,
  opening,
  description,
}) {
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
    </Wrapper>
  )
}

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
