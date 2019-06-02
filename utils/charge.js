import Stripe from 'stripe'
import envconfig from '../config/envconfig'
import logger from '../utils/errors/errorlogger'

const stripe = Stripe(envconfig.stripeToken)
export default async (token, amount, currency, description) => {
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: currency,
      description,
      source: token
    })
    return charge
  } catch (error) {
    logger.error('error', error)
    return 'error'
  }
}
