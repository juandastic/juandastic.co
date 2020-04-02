import React from 'react'
import styled from 'styled-components'
import Layout from 'layouts/Main'
import { getPost } from 'api/posts'
import PostPage from 'components/PostPage'


const DynamicPage = ({ post }) =>
  <Layout>
      <PostPage post={post} />
  </Layout>

DynamicPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.param[1])
  const json = await res.json()
  return { post: json }
}

export default DynamicPage
