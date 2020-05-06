import Link from 'next/link'
import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.nav`
  padding: 15px;
  display: flex;
  box-shadow: 0 1px 3px 0 hsla(0,0%,67.8%,.15);

  a {
    padding: 0 15px;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`
Wrapper.defaultProps = {
  theme: theme
}

const Nav = () => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link> |
    <Link href='/about'><a>About</a></Link> |
    <Link href='/contact'><a>Contact</a></Link>
  </Wrapper>
)

export default Nav
