
const BASE_URL = {
  development: '/api_dev',
  production: '/api_prod'
}

const config = {
  defaultTitle: 'Vue Template Webpack',
  enablePermission: false,
  BASE_URL: BASE_URL[process.env.NODE_ENV]
}

export default config
