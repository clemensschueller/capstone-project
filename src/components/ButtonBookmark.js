import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as PlusIcon } from '../assets/Font_plus.svg'
import { ReactComponent as Anchor } from '../assets/anchor.svg'

ButtonBookmark.propTypes = {
  isBookmarked: PropTypes.bool,
  onClick: PropTypes.func,
}

export default function ButtonBookmark({ onClick, isBookmarked }) {
  return (
    <ToggleButton onClick={onClick} isBookmarked={isBookmarked}>
      {isBookmarked ? (
        <>
          <Anchor />
          <span>Gespeichert</span>
        </>
      ) : (
        <>
          <PlusIcon />
          <span>Favoriten</span>
        </>
      )}
    </ToggleButton>
  )
}

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px;
  margin-top: 5px;
  color: ${props => (props.isBookmarked ? 'darkcyan' : 'darkred')};
  font-family: inherit;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    height: 15px;
    width: 15px;
    margin-right 5px;
  }
`
