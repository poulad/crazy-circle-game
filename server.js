var express = require('express');
var serveIndex = require('serve-index');

var app = express();

var portNumber = 80;

var directoryName = __dirname + '/CrazyCircleGame';

app.use('', express.static(directoryName));
app.use('', serveIndex(directoryName));

app.listen(portNumber);

console.log("Express started on port " + portNumber);