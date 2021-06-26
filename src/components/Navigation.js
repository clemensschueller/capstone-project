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
  display: flex;
  justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  margin: 8px 16px;
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
