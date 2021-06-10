import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Header({ children }) {
  return <PageHead>{children}</PageHead>
}

const PageHead = styled.h1`
  padding: 8px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: rgba(100, 100, 50, 0.1);
  height: 50px;
  border-radius: 5px;
`
