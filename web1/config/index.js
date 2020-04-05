
const PRIVATE_API = process.env.PRIVATE_API
const PUBLIC_API = process.env.PUBLIC_API

const getApiUrl = () => {
  return typeof window === "undefined" ? PRIVATE_API : PUBLIC_API
}

export default {
  getApiUrl: getApiUrl,
  assetsUrl: PUBLIC_API
}
