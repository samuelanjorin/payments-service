/* eslint-disable no-return-assign */
import Joi from '@hapi/joi'
import constants from '../constants/index'

const schema = Joi.object().keys({
  stripeToken: Joi.string().required('').trim().strict().label('stripeToken'),
  amount: Joi.number().integer().required().min(50).label('amount'),
  currency: Joi.string().required().label('currency'),
  order_id: Joi.number().integer().required().label('order_id'),
  description: Joi.string().label('description')

})
export default (req, res, next) => {
  const { error } = Joi.validate(req.body, schema)
  if (error) {
    console.log(error)
    let message = error.details[0].message
    message = message.replace(/"/g, '')
    res.status(constants.NETWORK_CODES.HTTP_BAD_REQUEST).json({
      code: constants.NETWORK_CODES.HTTP_BAD_REQUEST,
      message,
      field: message.split(' ')[0].replace(/"/g, '')
    })
  }
  next()
}
