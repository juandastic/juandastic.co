import config from 'config'
import Wrapper from './Wrapper'
import ReactMarkdown from 'react-markdown'
import { NextSeo, ArticleJsonLd } from 'next-seo';
import PostsCarousel from 'components/PostsCarousel'
import AuthorCard from 'components/AuthorCard'
import CodeBlock from 'components/CodeBlock'
import { get, formatDate } from 'utils'

const PostPage = ({ post, pageUrl }) => (
  <Wrapper>
    <NextSeo
      title={post.title}
      description={post.excerpt}
    />
    <ArticleJsonLd
      url={pageUrl}
      title={post.title}
      images={[
        `${config.assetsUrl}${get(post, "cover.url", "default-img")}`
      ]}
      datePublished={post.created_at}
      dateModified={post.updated_at}
      authorName={get(post, "author.name", "Sin Autor")}
      description={post.excerpt}
    />
    <div className="cover-image">
        <img src={`${config.assetsUrl}${get(post, "cover.url", "default-img")}`} alt="sample image" />
    </div>
    <div className="article-section">
      <h1>
        {post.title}
      </h1>
      <div className="article-meta">
        <div className="author">Por {get(post, "author.name", "Sin Autor")} | {formatDate(post.created_at)}</div>
      </div>
      <div className="article-body">
        <ReactMarkdown source={post.body} 
          renderers={{ code: CodeBlock }}/>
      </div>
      <AuthorCard author={ get(post, "author", {}) }/>
    </div>
    <PostsCarousel posts={ get(post, "articles_related") } />
  </Wrapper>
)

export default PostPage
