import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavBar>
      <StyledNavLink exact to="/" activeClassName="selected">
        Alle
      </StyledNavLink>
      <StyledNavLink exact to="/bookmarks" activeClassName="selected">
        Gespeichert
      </StyledNavLink>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: grid;
  justify-content: center;
  position: fixed;
  //margin: 8px 8px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 5rem;
  width: 100vw;
  background-color: #ebf1f4;
`

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  &.selected {
    color: darkred;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: darkred;
  }
`
