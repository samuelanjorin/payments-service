import makePayment from '../utils/charge'
import asyncF from '../middlewares/async'
import constants from '../constants'
import globalFunc from '../utils/globalfunc'

function stripePay () {
  return asyncF(async (req, res) => {
    const { amount, description, stripeToken, currency } = req.body

    const charges = await makePayment(stripeToken, amount, currency || 'USD', description)
    if (charges === 'error') {
      return res.status(constants.NETWORK_CODES.HTTP_BAD_REQUEST).json({
        code: globalFunc.getKeyByValue(constants.ERROR_CODES, constants.ERROR_CODES.PAY_01),
        message: constants.ERROR_CODES.PAY_01,
        field: 'token'
      })
    }
    return res.status(constants.NETWORK_CODES.HTTP_SUCCESS).json(charges)
  }, true)
}

export default { stripePay }
