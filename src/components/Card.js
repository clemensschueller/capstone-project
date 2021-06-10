import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  galleries: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      name: PropTypes.string,
      style: PropTypes.string,
      opening: PropTypes.string,
    })
  ),
}

export default function Card({ image, name, style, opening }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <h3>{style}</h3>
        <p>{opening}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  gap: 8px;
  background: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 15px;
  }

  img {
    width: 100px;
    border: 1px solid grey;
  }
`
