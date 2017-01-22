var express = require('express')
var app = express()

app.use(express.static('client'))

app.get('/getdata', function (req, res) {
  res.send({someString: 'Data from server.'})
})

app.listen(1234, function () {
  console.log('App is listening on port 1234!')
})