const morgan = require("morgan");
const fileSystem = require("fs");
const path = require("path");
const cors = require("cors")
const {StatusCodes} = require("http-status-codes")
const responseFormatter = require("../middleware/statusResponseFormatter.js")
const taskRouter = require("../user-tasks/tasks.router.js");
const authRouter = require("../auth/auth.router.js")
const usersRouter = require("../users/users.router.js")
const expressWinstonLogger = require("../middleware/expressWinston.middleware.js");

function configureApp(app) {


app.use(cors())
// app.use(middleware);
let accesslogStream = fileSystem.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  }
);


app.use(morgan("combined", {stream: accesslogStream}));
app.use(responseFormatter)
app.use(expressWinstonLogger)

// Defining the routes
app.use("/", taskRouter);
app.use("/auth", authRouter)
app.use("/users", usersRouter)


app.use((req,res)=>{
  res.status(StatusCodes.NOT_FOUND).json(null)
})
}

module.exports = configureApp