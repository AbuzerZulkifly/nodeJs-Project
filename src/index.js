const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const configureApp = require("./settings/config.js");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({path: envFile});
const app = express();
app.use(express.json());
// Every thing in the env files are a string, so we need to convert it to a number to get the port number
const port = parseInt(process.env.PORT);
// const middleware = function (req, res, next) {
//   req.info = {
//     appname: "Task Manager",
//     author: "Abuzer Zulkifly"
//   }
//   next();
// }

configureApp(app);
async function bootstrap(){
  try {
    console.log("Connecting to mongodb");
    await mongoose.connect(process.env.DATABASE_URL,
      {dbName:process.env.DATABASE_NAME}
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

