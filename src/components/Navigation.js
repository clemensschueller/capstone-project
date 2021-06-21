import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavBar>
      <StyledNavLink exact to="/">
        Alle
      </StyledNavLink>
    </NavBar>
  )
}
