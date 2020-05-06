import React from 'react'

import config from 'config'
import Wrapper from './Wrapper'
import { get } from 'utils'

const AuthorCard = ({ author }) => {
  return (
    <Wrapper>
      <div className="author-avatar" style={ {backgroundImage : `url(${config.assetsUrl}${get(author, "avatar.url", "defualt-avatar")})`} }>
      </div>
      <div className="author-info">
        <h4>{author.name}</h4>
        <p>{author.profile}</p>
      </div>
    </Wrapper>
  )
}

export default AuthorCard
