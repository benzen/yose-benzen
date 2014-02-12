http = require('http');
http.createServer(function(req,res){
  res.send({alive:true});
}).listen(80);