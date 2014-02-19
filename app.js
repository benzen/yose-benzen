http = require('http');
http.createServer(function(req,res){

  if(req.url == '/'){
    res.writeHead(200, {'content-type':'text/html'});
    res.end("<html><body>Hello Yose</body></html>");
  }

  if(req.url == '/ping'){
    res.writeHead(200, {'content-type':'application/json'});
    res.end("{\"alive\":true}");
  }

}).listen(process.env.PORT || 5000);