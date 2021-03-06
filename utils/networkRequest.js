import axios from 'axios'
import logger from './errors/errorlogger'
/**
 * @description handles post requests
 *
 * @param {string} url link to direct to
 * @param {Object} headers
 * @param {string} formData
 * @returns {Object}  JSON
 */
const postRequest = function (url, headers, formData) {
  let headersConfig = {
    headers
  }
  try {
    return axios.post(
      url,
      formData,
      headersConfig
    )
  } catch (err) {
    logger.error(err)
  }
}

/**
 * @description handles bearer token authentication
 *
 * @param {string} url link to direct to
 * @param {Object} header
 * @returns {Object}  JSON
 */
const getRequest = async function (url, headers) {
  try {
    let response
    if (headers) {
      let headersConfig = {
        headers
      }
      response = await axios.get(url, headersConfig)
    } else {
      response = await axios.get(url)
    }

    return response
  } catch (err) {
    logger.error(err)
    return err.response
  }
}
const putRequest = async function (url, headers) {
  try {
    let response
    if (headers) {
      let headersConfig = {
        headers
      }
      response = await axios.put(url, headersConfig)
    } else {
      response = await axios.put(url)
    }

    return response
  } catch (err) {
    logger.error(err)
    return err.response
  }
}
export default { postRequest, getRequest, putRequest }
