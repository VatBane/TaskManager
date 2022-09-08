const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static("./public"));
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.status(200);
});

app.use("/api/v1/tasks", tasks);

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

const port = process.env.PORT || 8080;

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log("Server successfully started..."));
  } catch (error) {
    console.log(error);
  }
}

start()

