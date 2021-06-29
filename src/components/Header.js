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
  //position: fixed;
  height: 2rem;
  //top: 0;
  //z-index: 1;
  display: grid;
  place-items: center;
  text-align: center;
  width: 100%;
  font-size: 25px;
  //padding: 8px;
  margin: 20px 0 0 20px;
  background: #ebf1f4;
  //rgba(100, 100, 50, 0.1);

  h1 {
    font-size: 18px;
  }
`
