import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import galleries from '../data.json'

Card.propTypes = {
  galleries: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      style: PropTypes.string,
      opening: PropTypes.string,
    })
  ),
}

export default function Card({ image, name, style, opening }) {
  return (
    <Wrapper galleries={galleries}>
      {galleries.map(({ image, name, style, opening }) => (
        <div>
          <img src={image} alt="" />
          <h2>{name}</h2>
          <p>{style}</p>
          <p>{opening}</p>
        </div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  display: grid;
  gap: 8px;

  img {
    width: 200px;
  }
`
