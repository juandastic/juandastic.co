import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.article`
  padding-bottom: 40px;

  .cover-image {
    position: relative;
    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(transparent, black);
      opacity: 0.8;
    }

    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  }
  .article-section {
    max-width: 680px;
    margin: 0 auto;
    margin-top: -140px;
    padding: 40px 80px;
    box-shadow: 0 20px 40px rgba(91,107,174,.15);
    border-radius: 5px;
    background: white;

    @media only screen and (max-width: 600px) {
      padding: 40px 24px;
    }

    h1 {
      text-align: center;
      font-size: 2em;
    }

    .article-meta {
      div {
        display:inline-block;
        font-size: .8em;
        color: #999999;
      }
    }

    .article-body {
      padding-top: 10px;
      font-size: 21px;
      line-height: 1.58;
      letter-spacing: -0.004em;
    }
  }
`

export default Wrapper
