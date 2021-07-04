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
  height: 60px;
  place-items: center;
  top: 0;
  display: grid;
  text-align: center;
  width: 100%;
  color: black;
  background: var(--color-header);
  text-shadow: 2px 2px white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 25px;
    font-weight: 200;
    margin: 0;
  }
`
