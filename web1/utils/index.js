
export { get } from 'lodash'

export const formatDate = (dateString) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString)
  return date.toLocaleDateString("es-CO", options)
}
