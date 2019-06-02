const NETWORK_CODES = Object.freeze({
  HTTP_SUCCESS: 200,
  HTTP_CREATED: 201,
  HTTP_BAD_REQUEST: 400,
  HTTP_UN_AUTHORISED: 401,
  HTTP_NOT_FOUND: 404,
  HTPP_INTERNAL_SERVER: 500

})
const ERROR_CODES = Object.freeze({
  PAY_01: 'connection failed'

})
export default { ERROR_CODES, NETWORK_CODES }
