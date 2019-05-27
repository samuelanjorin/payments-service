import Joi from "joi";
import { errorFormatter } from "../validator";

/**
 * @description Get name validation schema
 *
 * @param {string} label the text to use instead of field name in the error message;
 
 * @returns {string} Instance of JOI validation schema
 * @method getNameSchema
 */


  const amount = Joi.number()
  .integer()
  .required()
  .label('amount');

  const order_id = Joi.number()
  .integer()
  .required()
  .label('order_id');
  
  const description = Joi.string()
  .required()
  .trim()
  .label('description');

  const stripeToken = Joi.string()
  .required()
  .trim()
  .label('stripeToken');



export const paymentSchema = Joi.object().keys({
  amount,
  order_id,
  description,
  stripeToken
});
