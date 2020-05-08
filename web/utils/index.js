
export { get } from 'lodash'

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toDateString()
}

export const getDateFormat = (dateString) => {
  const date = new Date(dateString)
  const yy = date.getUTCFullYear()
  const mm = `0${(date.getUTCMonth()+1)}`.slice(-2)
  const dd = `0${date.getUTCDate()}`.slice(-2)
  return `${yy}-${mm}-${dd}`
}

export const absoluteUrl = (req) => {
  let host = req.headers.host
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'

  if (
    req &&
    req.headers['x-forwarded-host'] &&
    typeof req.headers['x-forwarded-host'] === 'string'
  ) {
    host = req.headers['x-forwarded-host']
  }

  if (
    req &&
    req.headers['x-forwarded-proto'] &&
    typeof req.headers['x-forwarded-proto'] === 'string'
  ) {
    protocol = `${req.headers['x-forwarded-proto']}:`
  }

  return protocol + '//' + host
}