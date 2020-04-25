import React from 'react'
import Wrapper from './Wrapper'

import Post from 'components/Post'

const PostsGrid = ({ posts }) => (
  <Wrapper>
    { posts && posts.map((post) => <Post key={post.id} post={post} />) }
  </Wrapper>
)

export default PostsGrid