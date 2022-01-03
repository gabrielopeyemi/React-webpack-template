import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: teal;
  color: #fff;
`

export const NavLinks = styled.ul`
  color: #fff;
`
export const Logo = styled.div`
  font-size: 32px;
`
export const Menu = styled.div`
  display: flex;
  gap: 1em;
  font-size: 18px;
  color: inherit;
`

export const LiStyles = styled.li`
  padding: 5px 14px;
  color: #fff;
  &:hover {
    background-color: #4c9e9e;
    border-radius: 5px;
    transition: 0.3s ease;
  }
`

export const LinkStyle = styled(Link)`
  color: #fff;
`

export const Services = styled.div`
  position: relative;
`
