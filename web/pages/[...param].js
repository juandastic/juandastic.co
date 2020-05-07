import React from 'react'
import Layout from 'layouts/Main'
import { getPost } from 'api/posts'
import { getProjectInfo } from 'api/project'
import PostPage from 'components/PostPage'
import { absoluteUrl } from 'utils'


const DynamicPage = ({ project, post, pageUrl }) =>
  <Layout project={project} pageUrl={pageUrl}>
    <PostPage post={post} pageUrl={pageUrl} />
  </Layout>


export async function getServerSideProps(context) {
  const [ projectResponse, postResponse ] = await Promise.all([getProjectInfo(), getPost(context.query.param[1])])
  const [ projectData, postData ] = await Promise.all([projectResponse.json(), postResponse.json()])
  const pageUrl = absoluteUrl(context.req) + context.req.url

  return {
    props: {
      project: projectData,
      post: postData,
      pageUrl: pageUrl
    }
  }
}

export default DynamicPage
