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
  justify-content: space-around;
  height: 2rem;
  width: 100vw;
  background-color: #ebf1f4;
  gap: 20px;
`

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &.selected {
    color: darkred;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: darkred;
  }
`
