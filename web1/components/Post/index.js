import React from 'react'
import Link from 'next/link'
import config from 'config'
import Wrapper from './Wrapper'
import { get, formatDate } from 'utils'

const PostItem = ({ post, condensed }) => (
  <Wrapper>
    <Link href="/[...param]" as={`/${get(post, "category.slug", "sin-categoria")}/${post.slug}`}>
      <a>
        <div className="article-img">
          <img src={`${config.assetsUrl}${get(post, "cover.url", "default-img")}`} alt="sample image" />
        </div>
        <div className={`article-body ${condensed ? "condensed" : ""}`}>
          <h3>{post.title}</h3>
          { !condensed && <p>{post.excerpt}</p> }
          <div className="article-meta">
            <p className="date">{formatDate(post.created_at)}</p>
            <p className="author">Por {get(post, "author.name", "Sin Autor")}</p>
          </div>
        </div>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
