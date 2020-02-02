import fetch from 'isomorphic-unfetch'

const PRIVATE_API = process.env.PRIVATE_API
const PUBLIC_API = process.env.PUBLIC_API

export function getPosts () {
  const apiBase = process.browser ? PUBLIC_API : PRIVATE_API
  return fetch(`${apiBase}/articles`)
}

export function getPost (slug) {
  const apiBase = process.browser ? PUBLIC_API : PRIVATE_API
  return fetch(`${apiBase}/articles?slug=${slug}`)
}
