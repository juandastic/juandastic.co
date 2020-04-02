import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
  }
  .articles {
    display: flex;
    flex-wrap: wrap;
  }
`

export default Wrapper
