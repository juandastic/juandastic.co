import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a>
        <div className="article-img">
          <img src="https://via.placeholder.com/1000x500.png" alt="sample image" />
        </div>
        <div className="article-body">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className="article-meta">
            <p>28/03/2010</p>
            <p>Por Juan David</p>
          </div>
        </div>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
