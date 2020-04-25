import fetch from 'isomorphic-unfetch'
import config from 'config'

export function getPosts () {
  const apiBase = config.getApiUrl()
  return fetch(`${apiBase}/articles?project.project_id=${config.projectId}`)
}

export function getPost (slug) {
  const apiBase = config.getApiUrl()
  return fetch(`${apiBase}/articles/${slug}?project.project_id=${config.projectId}`)
}
