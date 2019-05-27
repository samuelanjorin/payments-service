import Joi from "joi";

/**
 * @description Validate User Input
 *
 * @param {object} inputData
 * @param {object} schema
 * @returns {object} true if no error | array of errors
 */

export const validator = async (inputData, schema) => {
  try {
    const fields = await Joi.validate(inputData, schema, {
      abortEarly: false
    });
    return { hasError: false, fields };
  } catch ({ details }) {
    const errors = [];
    details.forEach(err => {
      errors.push({
        message: `${err.path[0]} is empty`,
        code: 'VAL_2',
        field: `${err.path[0]}`
      });
    });
    return { hasError: true, errors }
  }
}


