import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'

const PostItem = ({ post, condensed }) => (
  <Wrapper>
    <Link href="/[...param]" as={`/${post.category.slug}/${post.slug}`}>
      <a>
        <div className="article-img">
          <img src={`${process.env.PUBLIC_API}${post.cover.url}`} alt="sample image" />
        </div>
        <div className={`article-body ${condensed ? "condensed" : ""}`}>
          <h3>{post.title}</h3>
          { !condensed && <p>{post.excerpt}</p> }
          <div className="article-meta">
            <p className="date">{post.created_at}</p>
            <p className="author">Por {post.author && post.author.name}</p>
          </div>
        </div>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
