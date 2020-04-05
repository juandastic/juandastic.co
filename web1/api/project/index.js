import fetch from 'isomorphic-unfetch'
import config from 'config'

export function getProjectInfo () {
  const apiBase = config.getApiUrl()
  return fetch(`${apiBase}/projects/${config.projectId}`)
}
