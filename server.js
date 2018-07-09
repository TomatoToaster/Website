var express = require('express')
var path = require("path")
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
