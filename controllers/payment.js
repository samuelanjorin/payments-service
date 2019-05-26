import makePayment from '../utils/charge';
import asyncF from '../middlewares/async'

function stripePay (){
        return asyncF(async(req, res) => {
            const { amount, description, stripeToken, currency } = req.body;
            const charges = await makePayment(stripeToken, amount, currency || 'USD', description);
            return res.json(charges).status(constants.NETWORK_CODES.HTTP_SUCCESS)
        }, true);
    
}

export default { stripePay }