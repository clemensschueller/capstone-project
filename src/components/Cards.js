import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Title.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default function Title({ pageName }) {
  return <PageName>{pageName}</PageName>
}

const PageName = styled.h1`
  display: grid;
  justify-content: center;
  color: var(--black);
`
