import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://5f55a98f39221c00167fb11a.mockapi.io/'
})

Api.interceptors.request.use(function (config) {
  console.log(config.url, config)
  return config
},
function (error) {
  console.log('request:', error)
  return Promise.reject(error)
})

Api.interceptors.response.use(
  function (response) {
    console.log('response', response)
    return response
  },
  async function (error) {
    console.log('error', error.response.status)
    return Promise.reject(error)
  }
)
export default Api
