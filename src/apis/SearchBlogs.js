import Api from './Api'
const END_POINT = 'blogs'
export default {
  search (params) {
    return Api.get(END_POINT, {
      params: {
        ...params
      }
    })
  }
}
