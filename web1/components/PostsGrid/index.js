import React from 'react'
import Wrapper from './Wrapper'

import Post from 'components/Post'

const PostsGrid = ({ posts }) => (
  <Wrapper>
    { posts.map((post) => <Post post={post} />) }
  </Wrapper>
)

export default PostsGrid