import Api from './Api'
const END_POINT = 'blogs'
export default {
  show (id) {
    return Api.get(`${END_POINT}/${id}`)
  }
}
