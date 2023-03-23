import Api from './Api'
const END_POINT = 'blogs'
export default {
  add (params) {
    return Api.post(END_POINT, {
      ...params
    })
  }
}
