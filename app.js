const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

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

const port = 8080;
app.listen(port, console.log("Server successfully started..."));
