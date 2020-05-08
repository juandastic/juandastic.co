import { getPost } from 'api/posts'
import { getProjectInfo } from 'api/project'
import { absoluteUrl } from 'utils'

export default async (context) => {
  const [ projectResponse, postResponse ] = await Promise.all([getProjectInfo(), getPost(context.query.param[1])])
  let additionalProps = {}

  const errorCodePost = postResponse.ok ? false : postResponse.status
  const errorCodeProject = projectResponse.ok ? false : projectResponse.status
  const errorCode = (errorCodePost || errorCodeProject) ? getWorstError(errorCodePost, errorCodeProject) : false

  if (!errorCode) {
    const [ projectData, postData ] = await Promise.all([projectResponse.json(), postResponse.json()])
    const pageUrl = absoluteUrl(context.req) + context.req.url
    additionalProps = {
      project: projectData,
      post: postData,
      pageUrl: pageUrl
    }
  }

  return {
    props: {
      errorCode,
      ...additionalProps
    }
  }
}

const getWorstError = (errorCodePost, errorCodeProject) => {
  return Math.max(errorCodePost, errorCodeProject)
}