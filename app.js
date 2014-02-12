http = require('http');
http.createServer(function(req,res){
  res.end("{\"alive\":true}");
}).listen(process.env.PORT || 5000);