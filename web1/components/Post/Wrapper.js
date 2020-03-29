import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.article`
  flex: 1;
  margin: 10px;
  max-width: 300px;
  border: 1px solid grey;
  display:flex;
  justify-content: center;

  a {
    text-decoration: none;

    &:hover {
      background: #F5F5F5;

      h3 { color: #387EF5 }
    }
  }

  .article-img imge{
    width:100%
  }

  .article-body {
    text-align: center;
    padding: 15px;

    h3 {
      color: #222;
      font-weight: bold;
      font-size: 1.75rem;
      line-height: 35px;
      font-family: "PT Sans", sans-serif;
      text-transform: capitalize;
      margin: 0;
    }
    p {
      font-size: 1.2rem;
      line-height: 35px;
      color: #444;
      font-family: "PT Serif", sans-serif;
      margin: 0;
    }
  }
`

export default Wrapper
