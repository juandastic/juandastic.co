import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'

import Post from 'components/Post'

const IndexPage = ({ posts }) =>
  <Layout>
     <h1>Titulo de la pagina</h1>
     <div className="main-articles">
        <div>
          <p>Card 1</p>
        </div>
        <div>
          <p>Card 2</p>
        </div>
        <div>
          <p>Card 3</p>
        </div>
     </div>
     <h2>Subtitulo</h2>
     <div className="articles-grid">
        <div>
          <p>category 1</p>
          <p>category 2</p>
          <p>category 3</p>
        </div>
        <div>
          <p>Card 1</p>
        </div>
        <div>
          <p>Card 2</p>
        </div>
        <div>
          <p>Card 3</p>
        </div>
     </div>
  </Layout>

/** IndexPage.getInitialProps = async ({ req }) => {
	 const res = await getPosts()
   const json = await res.json() 
   return { posts: json }
} **/

export default IndexPage
