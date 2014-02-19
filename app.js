http = require('http');
http.createServer(function(req,res){

  res.writeHead(200, {'content-type':'text/html'});
  res.end("<html><body>Hello Yose</body></html>")
  // res.writeHead(200, {'content-type':'application/json'});
  // res.end("{\"alive\":true}");

}).listen(process.env.PORT || 5000);