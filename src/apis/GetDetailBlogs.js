import Api from './Api'
const END_POINT = 'blogs/id='
export default {
  show (id) {
    return Api.get(`${END_POINT}${id}`)
  }
}
