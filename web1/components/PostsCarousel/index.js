import React from 'react'
import Wrapper from './Wrapper'

import Post from 'components/Post'

const PostsCarousel = ({ posts }) => (
  <Wrapper>
    <h2> Artículos Relacionados </h2>
    <div className="articles">
     { posts.map((post) => <Post key={post.id} post={post} condensed="true" />) }
    </div>
  </Wrapper>
)

export default PostsCarousel