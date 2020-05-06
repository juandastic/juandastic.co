import styled from 'styled-components'
import theme from '/styles/theme'

const Wrapper = styled.div`
  display: flex;

  .author-avatar {
    background-position: 50%;
    background-size: cover;
    box-sizing: content-box;
    width: 100PX;
    height: 100PX;
    margin-right: 20px;
    border-radius: 50%;
  }

  .author-info {
    flex: 1;
  }
`
Wrapper.defaultProps = {
  theme: theme
}

export default Wrapper
