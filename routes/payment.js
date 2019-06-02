import { Router } from 'express'
import controller from '../controllers/payment'
import validate from '../validations/validate'

const router = Router()

router.post('/stripe/charge', validate, controller.stripePay())

export default router
