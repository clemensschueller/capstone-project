import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Header({ children }) {
  return <PageHead>{children}</PageHead>
}

const PageHead = styled.h1`
  position: fixed;
  top: 0;
  z-index: 1;
  //width: 100vw;
  font-size: 25px;
  padding: 8px;
  margin: 20px 0 0 20px;
  display: flex;
  justify-content: left;
  text-align: center;
  background: #ebf1f4;
  //rgba(100, 100, 50, 0.1);
  height: 50px;
  border-radius: 5px;
`
