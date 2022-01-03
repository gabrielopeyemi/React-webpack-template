import React from 'react'
import { LinkStyle, LiStyles, Menu, NavbarStyle, NavLinks } from './styles'

export default function Navbar() {
  return (
    <div>
      <NavbarStyle>
        <div className="logo">React</div>
        <NavLinks>
          <Menu>
            <LiStyles>
              <LinkStyle to="/">Login</LinkStyle>
            </LiStyles>
            <LiStyles>
              <LinkStyle to="/">Register</LinkStyle>
            </LiStyles>
          </Menu>
        </NavLinks>
      </NavbarStyle>
    </div>
  )
}
