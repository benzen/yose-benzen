http = require('http');
http.createServer(function(req,res){

  if(req.url == '/'){
    var html = ""+
      "<html>"+
        "<body>"+
          "<center>"+
            "<h1>Hello Yose</h1>"+
            "<a id='contact-me-link' href='http://www.linkedin.com/pub/benjamin-dreux/18/7a/aa6'>Contact info</a>"+
          "</center>"+


          "<a id='repository-link' href='https://github.com/benzen/yose-benzen'>"+
            "<img style='position: absolute; top: 0; left: 0; border: 0;' src='https://github-camo.global.ssl.fastly.net/8b6b8ccc6da3aa5722903da7b58eb5ab1081adee/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6f72616e67655f6666373630302e706e67' alt='Fork me on GitHub' data-canonical-src='https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png'>"
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