import React from 'react'
import Layout from 'layouts/Main'
import Error from 'next/error'

import PostPage from 'components/PostPage'
import postPage from 'pageFactories/postPage'

const DynamicPage = (props) => {

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />
  }

  const postPageComponent = (
    <Layout project={props.project} pageUrl={props.pageUrl}>
      <PostPage post={props.post} pageUrl={props.pageUrl} />
    </Layout>
  )

  return postPageComponent
}


export async function getServerSideProps(context) {
  // Dynamic Pages
  // article -> category-slug/article-slug
  // category -> category-slug
  let pageData = { props: { errorCode: 404 } }

  if (context.query.param.length == 2) {
    const postPageData = await postPage(context)
    pageData = postPageData
  }

  if (pageData.props.errorCode) {
    context.res.statusCode = pageData.props.errorCode
  }

  return {
    props: pageData.props
  }
}

export default DynamicPage
