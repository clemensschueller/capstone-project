import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Header({ children }) {
  return (
    <PageHead>
      <h1>{children}</h1>
    </PageHead>
  )
}

const PageHead = styled.header`
  position: fixed;
  height: 48px;
  place-items: center;
  top: 0;
  display: grid;
  text-align: center;
  width: 100%;
  color: var(--color-header-font);
  background: var(--color-header);
  text-shadow: 2px 2px black;
  opacity: 70%;

  h1 {
    font-size: 25px;
    margin: 0;
  }
`
