import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export default Wrapper
