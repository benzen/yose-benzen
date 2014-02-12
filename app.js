http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {'content-type':'application/json'});
  res.end("{\"alive\":true}");

}).listen(process.env.PORT || 5000);