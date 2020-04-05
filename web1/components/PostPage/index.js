import React from 'react'
import Link from 'next/link'
import config from 'config'
import Wrapper from './Wrapper'
import ReactMarkdown from 'react-markdown'
import PostsCarousel from 'components/PostsCarousel'
import AuthorCard from 'components/AuthorCard'
import { get, formatDate } from 'utils'

const PostPage = ({ post }) => (
  <Wrapper>
    <div className="cover-image">
        <img src={`${config.assetsUrl}${get(post, "cover.url", "default-img")}`} alt="sample image" />
    </div>
    <div className="article-section">
      <h1>
        {post.title}
      </h1>
      <div className="article-meta">
        <div className="author">Por {get(post, "author.name", "Sin Autor")} | {formatDate(post.created_at)}</div>
      </div>
      <div className="article-body">
        <ReactMarkdown source={post.body} />
      </div>
      <AuthorCard author={ get(post, "author", {}) }/>
    </div>
    <PostsCarousel posts={ get(post, "articles_related") } />
  </Wrapper>
)

export default PostPage
