const responseFormatter = require("./middleware/statusResponseFormatter.js")
const express = require("express");
const morgan = require("morgan");
const fileSystem = require("fs");
const path = require("path");
const cors = require("cors")
const {StatusCodes} = require("http-status-codes")
const taskRouter = require("./user-tasks/tasks.router.js");
const authRouter = require("./auth/auth.router.js")
const usersRouter = require("./users/users.router.js")
const app = express();
const port = 3001;
// const middleware = function (req, res, next) {
//   req.info = {
//     appname: "Task Manager",
//     author: "Abuzer Zulkifly"
//   }
//   next();
// }
const corsOption = {origin: ["example.com"]};

app.use(responseFormatter)
app.use(cors(corsOption))
app.use(express.json());
// app.use(middleware);
let accesslogStream = fileSystem.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  }
);


app.use(morgan("combined", {stream: accesslogStream}));
app.use("/", taskRouter);
app.use("/auth", authRouter)
app.use("/users", usersRouter)
app.use((req,res)=>{
  res.status(StatusCodes.NOT_FOUND).json(null)
})
app.listen(port, ()=>{
  console.log(`listening on ${port}`);
   })