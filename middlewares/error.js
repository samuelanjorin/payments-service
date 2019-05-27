import logger from '../utils/errors/errorlogger'
import constant from '../constants/NetworkResponseStatuses'
/**
 * @description handles all routes errors
 *
 * @param {string} err error to be handled
 * @param {string} req
 * @param {string} res
 *
 */
module.exports = function (err, req, res) {
  if (err) {
    logger.error(err)
    res.status(constant.HTPP_INTERNAL_SERVER).json({ message: 'Hey Something Broke, Contact Administrator' })
  }
}
