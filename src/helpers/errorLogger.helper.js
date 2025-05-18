const logger = require("./winston.helper.js")

function errorLogger(message, req, error) {
      logger.error(`${error.message} when creating a new task`, {
        metadata: {
          errorCodes: error.code,
          errorName: error.name,
          method: req.method,
          url: req.originalUrl,
          body: req.body,
          query: req.query,
          params: req.params,
          error: error
        }
      })
}

module.exports = errorLogger