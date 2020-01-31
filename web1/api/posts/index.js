import fetch from 'isomorphic-unfetch'

export function getPosts () {
  return fetch('https://api.juandastic.co/articles')
}

export function getPost (slug) {
  return fetch(`https://api.juandastic.co/articles?slug=${slug}`)
}
