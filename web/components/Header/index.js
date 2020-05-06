import Link from 'next/link'
import styled from 'styled-components'
import Nav from 'components/Nav'
import theme from '/styles/theme'

const Wrapper = styled.header`
  display: flex;
  background: ${props => props.theme.colors.green};
`
Wrapper.defaultProps = {
  theme: theme
}

const BrandName = styled.div`
  flex: 1;
  padding: 15px;
  a {
    color: ${props => props.theme.colors.white};
    font-family: 'Source Code Pro', monospace;
    font-size: 24px;
    text-decoration: none;
  }
`
BrandName.defaultProps = {
  theme: theme
}

const Header = ({ siteName }) => (
  <Wrapper>
    <BrandName>
      <Link href='/'><a>{siteName}</a></Link>
    </BrandName>
    {/* <Nav /> */}
  </Wrapper>
)

export default Header