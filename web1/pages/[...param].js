import React from 'react'
import styled from 'styled-components'
import Layout from 'layouts/Main'
import { getPost } from 'api/posts'
import { getProjectInfo } from 'api/project'
import PostPage from 'components/PostPage'


const DynamicPage = ({ project, post }) =>
  <Layout project={project}>
      <PostPage post={post} />
  </Layout>

// DynamicPage.getInitialProps = async ({ query }) => {
//   const res = await getPost(query.param[1])
//   const json = await res.json()
//   return { post: json }
// }

export async function getServerSideProps({query}) {
  const [ projectResponse, postResponse ] = await Promise.all([getProjectInfo(), getPost(query.param[1])])
  const [ projectData, postData ] = await Promise.all([projectResponse.json(), postResponse.json()])

  return {
    props: {
      project: projectData,
      post: postData
    }
  }
}

export default DynamicPage
