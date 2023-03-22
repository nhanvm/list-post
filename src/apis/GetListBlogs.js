import Api from './Api'
const END_POINT = 'blogs'
export default {
  all (params) {
    return Api.get(END_POINT, {
      params: {
        ...params
      }
    })
  }
}
