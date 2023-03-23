import router from '../router'

export default function (message, statusCode) {
  router.push(
    {
      name: 'PageError',
      params: { message: message, statusCode: statusCode }
    }
  )
}
