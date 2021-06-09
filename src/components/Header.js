import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Header({ title }) {
  return <HeaderStyled>{title}</HeaderStyled>
}

const HeaderStyled = styled.h1`
  display: grid;
  place-items: center;
  padding: 8px;
  margin: 0;
  font-size: 1.2em;
  font-weight: 500;
  color: beige;
`
