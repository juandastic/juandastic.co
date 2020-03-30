import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.article`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display:flex;
  justify-content: center;
  transition: all .3s ease-out;

  &:hover {
    box-shadow: 0 9px 25px rgba(0,0,0,.2);
  }

  a {
    text-decoration: none;
    display:flex;
    flex-direction: column;
    height: 100%;
  }

  .article-img img{
    width:100%
  }

  .article-body {
    padding: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      color: #222;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 35px;
      margin: 0;
    }
    p {
      font-size: 1rem;
      line-height: 25px;
      color: #444;
      margin: 10px 0;
      flex: 1;
    }

    .article-meta {
      display: flex;
      border-top: 1px solid grey;
      justify-content: space-between;

      p {
        font-size: .8em;
        color: #999999;
      }
      .author{
        text-align: right;
      }
    }
  }
`

export default Wrapper
