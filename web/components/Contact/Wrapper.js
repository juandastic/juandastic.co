import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    padding: 10px;
  }

  p {
    font-size: 20px;
    max-width: 700px;
    margin: 0 auto;

    padding: 10px;
  }

  .info {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;

    @media only screen and (max-width: 600px) {
      flex-wrap: wrap;
    }

    .info-link {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      margin: 35px;

      .icon {
        width: 100%;
        height: 115px;
        margin-bottom: 10px;
      }
    }
  }
`
Wrapper.defaultProps = {
  theme: theme
}

export default Wrapper
