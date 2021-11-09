var http = require('http'); // Importing the http package
var fs = require('fs');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('JavaScriptPart/index4.html', (err, data) => {
    res.end(data.toString());
  })
  // res.end('<h1>Hello Aaryan</h1><h2>Hello Aaryan</h2>');
}).listen(8080);