import styled from 'styled-components'

import Nav from 'components/Nav'
import LogoBanner from 'components/LogoBanner'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
`

const Header = () => (
  <Wrapper>
    <LogoBanner />
    <Nav />
  </Wrapper>
)

export default Header