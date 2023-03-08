const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Express Server Runs Good')
})
 
app.listen(3000)
