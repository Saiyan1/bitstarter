var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var arr = new Array();
  var buf = new Buffer(arr);
  var fs = require("fs");  
  response.send( buf.toString(fs.readFileSync("index.html")) );
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
