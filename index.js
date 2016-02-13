var express = require('express');

// Create an express server
var server = express();
var PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
  console.log('Server listening on', PORT);
});

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// Serve up the bundled react components
server.get('/app.js', function(req, res) {
  res.sendFile(__dirname + '/dist/bundle.js');
});
