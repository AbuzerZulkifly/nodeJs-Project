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
const mongoose = require("mongoose");

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

async function bootstrap(){
  try {
    await mongoose.connect("mongodb+srv://zulkiflygitzer:Abuzer%403121@nodejs.y3heyh0.mongodb.net/?retryWrites=true&w=majority&appName=NodeJs",
      {dbName:"task_manager_project"}
    );

    //We use this method here because we want our app to start only when its connected to the database
    console.log("Connected to mongodb");
    app.listen(port, ()=>{
      console.log(`listening on ${port}`);
       })
    
  } catch (error) {

    console.log(error);
    //this statement is used if there was an error the app to close smoothly 
    process.exit(1);
    
  }
}

bootstrap()

