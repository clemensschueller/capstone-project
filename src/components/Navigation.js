import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import listIcon from '../assets/framedList.png'
import anchorIcon from '../assets/icons8-anchor-26.png'
import homeIcon from '../assets/homeIcon.png'

export default function Navigation() {
  return (
    <NavBar>
      <StyledNavLink exact to="/" activeClassName="selected">
        <img src={homeIcon} alt="" />
      </StyledNavLink>
      <StyledNavLink exact to="/list" activeClassName="selected">
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
  background-color: var(--color-navigation);
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
  padding: 0em 0em 0.8em 0em;
  border: none;
  width: 100%;

  &.selected {
    background-color: var(--color-active);
    background-size: auto;
  }
`
