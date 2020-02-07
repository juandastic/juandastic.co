import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  
  .banner {
    flex: 1;
    text-align: center;
  }

`

const LogoBanner = () => (
  <Wrapper>
    <div className="logo">
      <img src="https://via.placeholder.com/200x70.png?text=Logo" alt="logo" />
    </div>
    <div className="banner">
      <img src="https://via.placeholder.com/450x90.png?text=banner" alt="logo" />
    </div>
  </Wrapper>
)

export default LogoBanner
