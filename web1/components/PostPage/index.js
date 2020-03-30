import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'
import ReactMarkdown from 'react-markdown'

const PostPage = ({ post }) => (
  <Wrapper>
    <div className="cover-image">
        <img src={`${process.env.PUBLIC_API}${post.cover.url}`} alt="sample image" />
    </div>
    <div className="article-section">
      <h1>
        {post && post.title}
      </h1>
      <div className="article-meta">
        <div className="author">Por {post.author && post.author.name} | {post.created_at}</div>
      </div>
      <div className="article-body">
        <ReactMarkdown source={post && post.body} />
      </div>
    </div>
  </Wrapper>
)

export default PostPage
