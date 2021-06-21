import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as PlusIcon } from '../assets/Font_plus.svg'
import { ReactComponent as Anchor } from '../assets/anchor.svg'

ButtonBookmark.PropTypes = {
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
  background: ${props =>
    props.isBookmarked ? 'rgba(100, 100, 40, 0.1)' : 'none'};
  font-family: inherit;
  font-size: 0.75rem;
  text-transform: uppercase;

  svg {
    height: 20px;
    width: 20px;
  }
`
