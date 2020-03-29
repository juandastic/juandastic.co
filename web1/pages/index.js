import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'

import PostsGrid from 'components/PostsGrid'
import Contact from 'components/Contact'

import styled from 'styled-components'
import theme from '/styles/theme'

const HeroSiteTitle = styled.div`
  text-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.black};

  h1 {
    margin-bottom: 25px;
  }
  p {
    max-width: 550px;
  }
`
HeroSiteTitle.defaultProps = {
  theme: theme
}

const ArticleSection = styled.div`
  padding: 25px;

  h2 {
    padding: 25px;
    text-align:center;
  }
`
const IndexPage = ({ posts }) =>
  <Layout>
    <HeroSiteTitle>
     <h1>Titulo de la pagina</h1>
     <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id enim libero. Suspendisse ante mauris, congue eu dolor et, placerat sodales libero.
        congue eu dolor et, placerat sodales libero.
     </p>
    </HeroSiteTitle>
    <ArticleSection>
      <h2>Ultimas articulos</h2>
      <PostsGrid posts={posts} />
    </ArticleSection>
    <Contact/>
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
	 const res = await getPosts()
   const json = await res.json()
   return { posts: json }
}

export default IndexPage
