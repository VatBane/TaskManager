const express = require("express");
const app = express();

app.use(express.static('./public'))

// routes
app.get("/", (req, res) => {
  res.status(200);
});

app.all('*', (req, res)=>{
  res.status(404).send('Not Found');
})

const port = 8080;
app.listen(port, console.log('Server successfully started...'))