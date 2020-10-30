const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

// app.get('/', (req, res) =>{
//   res.console("Hello world");
// })

app.get('/survey',  (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.listen(3500, () => {
    console.log("Server is running at port 3500")
})