import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a>
        <div className="article-img">
          <img src="https://via.placeholder.com/300x200.png" alt="sample image" />
        </div>
        <div className="article-body">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
