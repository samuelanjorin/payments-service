/* eslint-disable camelcase */
import networkRequest from './networkRequest'
import dotenv from 'dotenv'
function getKeyByValue (object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

function getToken (req) {
  const { user_key } = req
  const userKey = user_key.split(' ')
  return userKey[1]
}
async function confirmOrder (order_id) {
  await networkRequest.putRequest(process.env.ORDER_URL + '/' + order_id)
}

export default { getKeyByValue, getToken, confirmOrder }
