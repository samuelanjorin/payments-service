/* eslint-disable camelcase */
function getKeyByValue (object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

function getToken (req) {
  const { user_key } = req
  const userKey = user_key.split(' ')
  return userKey[1]
}

export default { getKeyByValue, getToken }
