import fetch from 'isomorphic-unfetch'
import config from 'config'

export function getPosts () {
  const apiBase = config.getApiUrl()
  return fetch(`${apiBase}/articles`)
}

export function getPost (slug) {
  const apiBase = config.getApiUrl()
  return fetch(`${apiBase}/articles/${slug}`)
}
