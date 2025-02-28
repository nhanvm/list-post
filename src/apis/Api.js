import axios from 'axios'
import store from '../store'
import redirectErrorPage from '../utils/redirectErrorPage'

const Api = axios.create({
  baseURL: 'https://5f55a98f39221c00167fb11a.mockapi.io/'
})

Api.interceptors.request.use(function (config) {
  console.log(config.url, config)
  store.commit('setLoadingSuccess', true)
  return config
},
function (error) {
  console.log('request:', error)
  store.commit('setLoadingSuccess', false)
  return Promise.reject(error)
})

Api.interceptors.response.use(
  function (response) {
    console.log('response', response)
    store.commit('setLoadingSuccess', false)
    return response
  },
  async function (error) {
    console.log('error', error.response.status)
    store.commit('setLoadingSuccess', false)
    if (error.response.status === 500) {
      redirectErrorPage('Server Error', 500)
      // console.log('1111')
    } else if (error.response.status === 404) {
      redirectErrorPage('Not Found', 404)
    }
    return Promise.reject(error)
  }
)
export default Api
