import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavBar>
      <StyledNavLink exact to="/" activeStyle={{Color: 'red'}} activeClassName="selected">
        Alle
      </StyledNavLink>
      <StyledNavLink exact to="/bookmarks" activeStyle={{Color: 'red'}} activeClassName="selected">
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
`
