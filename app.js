http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {});
  res.write("{alive:true}");
  res.end();

}).listen(process.env.PORT || 5000);