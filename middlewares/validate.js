
import { validator } from "../validations/validator"
import constants from '../constants/NetworkResponseStatuses'

import {
  paymentSchema
} from "../validations/schemas/schema"

/**
 * @description Get the schema definitions
 *
 * @param {object} req the request object
 * @returns {Joi.object} a Joi object
 */
const schema = req => {
  const schemas = {
    "/charge": paymentSchema
  };

  return schemas[`/${req.originalUrl.split('/').pop()}`];
};

export default async (req, res, next) => {
  const validation = await validator(req.body, schema(req));
  if (validation.hasError) {
      return res.status(constants.HTTP_BAD_REQUEST).json({
          errors: validation.errors
      });
  }
  req.body = validation.fields;
  return next()
};
