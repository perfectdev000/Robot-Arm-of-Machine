var express = require('express');
const path = require('path');

var app = express();

console.log("app.js : "+__dirname);

app.use(express.static('public'));
// app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')))
// app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/'));
});

app.listen(3000);