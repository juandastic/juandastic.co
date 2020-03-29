import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.article`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display:flex;
  justify-content: center;

  a {
    text-decoration: none;
  }

  .article-img img{
    width:100%
  }

  .article-body {
    padding: 15px;

    h3 {
      color: #222;
      font-weight: bold;
      font-size: 1.75rem;
      line-height: 35px;
      margin: 0;
    }
    p {
      font-size: 1.2rem;
      line-height: 35px;
      color: #444;
      margin: 0;
    }

    .article-meta {
      display: flex;
      border-top: 1px solid grey;
      justify-content: space-between;

      p {
        font-size: .8em;
        color: #999999;
      }
    }
  }
`

export default Wrapper
