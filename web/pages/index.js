import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'
import { getProjectInfo } from 'api/project'
import { get, absoluteUrl } from 'utils'

import PostsGrid from 'components/PostsGrid'

import styled from 'styled-components'
import theme from '/styles/theme'

const HeroSiteTitle = styled.div`
  text-align: center;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.black};

  h1 {
    margin-bottom: 25px;
  }
  .title_body {
    max-width: 550px;
    line-height: 1.3em;
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
const IndexPage = ({ project, posts, pageUrl }) => {
  const heroComponent = project.page_sections && project.page_sections.find((component) => {
    return component.content_id === "home-title"
  })

  const articlesComponent = project.page_sections && project.page_sections.find((component) => {
    return component.content_id === "articles-section"
  })

  return (
    <Layout project={project} pageUrl={pageUrl}>
      <HeroSiteTitle>
        <h1>{get(heroComponent, "title", "home-title.title")}</h1>
        <div className="title_body">
          <ReactMarkdown source={get(heroComponent, "body", "home-title.body")} />
        </div>
      </HeroSiteTitle>
      <ArticleSection>
        <h2>{get(articlesComponent, "title", "articles-section.title")}</h2>
        <PostsGrid posts={posts} />
      </ArticleSection>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const pageUrl = absoluteUrl(context.req) + context.req.url

  const [ projectResponse, postsResponse ] = await Promise.all([getProjectInfo(), getPosts()])

  let errorResponse = null

  if (projectResponse.status !== 200) {
    errorResponse = projectResponse
  } else if (postsResponse.status !== 200) {
    errorResponse = postsResponse
  }

  if (errorResponse) {
    console.log('API error on ' + errorResponse.url)
    context.res.statusCode = errorResponse.status
    return {
      props: { project: {}, posts: [], pageUrl: pageUrl }
    }
  }

  const [ projectData, postsData ] = await Promise.all([projectResponse.json(), postsResponse.json()])

  return {
    props: {
      project: projectData,
      posts: postsData,
      pageUrl: pageUrl
    }
  }
}

export default IndexPage
