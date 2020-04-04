import React from 'react'

import Wrapper from './Wrapper'

const AuthorCard = ({ author }) => {
  return (
    <Wrapper>
      <div className="author-avatar" style={ {backgroundImage : `url(${process.env.PUBLIC_API}${author.avatar.url})`} }>
      </div>
      <div className="author-info">
        <h4>{author.name}</h4>
        <p>{author.profile}</p>
      </div>
    </Wrapper>
  )
}

export default AuthorCard
