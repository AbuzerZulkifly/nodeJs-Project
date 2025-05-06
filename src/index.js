const express = require("express");
const taskRouter = require("./user-tasks/tasks.router.js");
const morgan = require("morgan");
const fileSystem = require("fs");
const path = require("path");

const app = express();
const port = 3001;
const middleware = function (req, res, next) {
  req.info = {
    appname: "Task Manager",
    author: "Abuzer Zulkifly"
  }
  next();
}

app.use(express.json());
app.use(middleware);

let accesslogStream = fileSystem.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  }
);


app.use(morgan("combined", {stream: accesslogStream}))
app.use("/", taskRouter);

app.listen(port, ()=>{
   console.log(`listening on ${port}`);
   })