import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1,1fr);
  }
`

export default Wrapper
