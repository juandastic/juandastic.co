import fetch from 'isomorphic-unfetch'

const PRIVATE_API = "http://api.juandastic.co"
const PUBLIC_API = "https://api.juandastic.co"

export function getPosts () {
  const apiBase = process.browser ? PUBLIC_API : PRIVATE_API
  return fetch(`${apiBase}/articles`)
}

export function getPost (slug) {
  const apiBase = process.browser ? PUBLIC_API : PRIVATE_API
  return fetch(`${apiBase}/articles?slug=${slug}`)
}
