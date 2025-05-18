const winston =  require("winston")
const path = require("path")

/* 
Error levels in winstons
Error (0): For critical errors that require immediate attention.
Warn (1): For potential issues or warnings that may not be critical but should be investigated.
Info (2): For general informational messages, like application startup or completion of a task.
Http (3): For HTTP-related logs, like requests and responses.
Verbose (4): For detailed information that can be helpful for debugging, but might not be useful in a production environment.
Debug (5): For debugging information, often used during development.
Silly (6): For the most detailed information, often used for very specific debugging scenarios or logging everything.
*/

const transport = [ 
  new winston.transports.Console({
    level: "info",
    format: winston.format.combine(
      winston.format.colorize()
    )
  }),

  new winston.transports.File({
    level: "info",
    filename: path.join(__dirname, "../..", "info.log"),
    format: winston.format.json()
  }),

  new winston.transports.File({
    level: "error",
    filename: path.join(__dirname, "../..", "error.log"),
    format: winston.format.json()
  }),

]

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.printf((info)=> `${info.timestamp} [${info.level}] : ${info.message}`)
  ),
  transports: transport
});



module.exports = logger