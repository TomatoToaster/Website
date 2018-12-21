var express = require('express')
var path = require("path")
var app = express()

app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/public'))

// Set up Front End
// =============================================================================
const port = process.env.PORT || 8080;

// This is a handler that sends out the front end (index.html)
const front_end_handler = function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/index.html'));
}

// These are the routes that should point to the front end
const front_end_routes = ['/', '/about', '/interests/:interest?'];

// Now we are using the handler for each of the front end routes
front_end_routes.forEach(route => app.get(route, front_end_handler));

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
})