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
  color: ${props => props.theme.colors.white};
  font-family: 'Source Code Pro', monospace;
  font-size: 24px;
`
BrandName.defaultProps = {
  theme: theme
}

const Header = () => (
  <Wrapper>
    <BrandName>
      Juandastic
    </BrandName>
    <Nav />
  </Wrapper>
)

export default Header