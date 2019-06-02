import dotenv from 'dotenv'
dotenv.config()
const {
  STRIPE_TOKEN
} = process.env

export default {
  stripeToken: STRIPE_TOKEN
}
