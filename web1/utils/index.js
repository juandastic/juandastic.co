
export { get } from 'lodash'

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toDateString()
}
