http = require('http');
http.createServer(function(req,res){

  if(req.url == '/'){
    var html = ""+
      "<html>"+
        "<body>"+
          "Hello Yose"+
          "<a id='repository-link' href='https://github.com/benzen/yose-benzen'>"+
            "A link to my party"+
          "</a>"+
        "</body>"+
      "</html>";
    res.writeHead(200, {'content-type':'text/html'});

    res.end(html);
  }

  if(req.url == '/ping'){
    res.writeHead(200, {'content-type':'application/json'});
    res.end("{\"alive\":true}");
  }

}).listen(process.env.PORT || 5000);