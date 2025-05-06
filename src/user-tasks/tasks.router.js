const express = require("express");
const taskRouter = express.Router();

taskRouter.get("/tasks",(req,res)=> { 
  console.log(req.info);
  return res.send(req.info)
}
)
taskRouter.post("/tasks",(req,res)=>{ 
  console.log(req.body);
  
  return res.send("Task created")
})

module.exports = taskRouter;