import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import listIcon from '../assets/framedList.png'
import anchorIcon from '../assets/anchorBookmarkIcon.png'

export default function Navigation() {
  return (
    <NavBar>
      <StyledNavLink exact to="/" activeClassName="selected">
        <img src={listIcon} alt="" />
      </StyledNavLink>
      <StyledNavLink exact to="/bookmarks" activeClassName="selected">
        <img src={anchorIcon} alt="" />
      </StyledNavLink>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  justify-items: center;
  height: 2rem;
  width: 100vw;
  background-color: #ebf1f4;
  gap: 20px;

  img {
    width: 25px;
    height: auto;
  }
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: none;
  width: 100%;

  &:hover {
    //background-color: bisque;
    //border: 1px solid grey;
  }

  &.selected {
    background-color: lightgrey;
  }
`
