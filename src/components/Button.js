import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
}
function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  border-radius: 0.8em;
  text-align: center;
  margin: 0 0.3em 0.3em 0;
  background-color: ${props => (props.isActive ? '#ccc' : 'white')};
`

export default Button
