var http = require('http');
var html =  require('./modules/html');
var helpers = require('./modules/helpers');
var primeFactors = require('./modules/primeFactors');

http.createServer(function(req,res){

  if(req.url == '/'){

    res.writeHead(200, {'content-type':'text/html'});

    res.end(html.homepage);
  }

  else if(req.url == '/ping'){
    res.writeHead(200, {'content-type':'application/json'});
    res.end("{\"alive\":true}");
  }
  else if(req.url == '/primeFactors/ui'){
    res.writeHead(200, {'content-type':'text/html'});
    res.end(html.prime);
  }
  else if(req.url.indexOf('/primeFactors') === 0 ){
    res.writeHead(200, {'content-type':'application/json'});

    var values = helpers.extractUrlParam( req.url, 'number' )
    var result;
    result = [];
    values.forEach(function(value){
      var decomposition = primeFactors.jsonisifyPrimes(value);
      result.push(decomposition)
    });

    if(values.length == 1){
      result = result.pop()
    }
    res.end( JSON.stringify(result) );

  }

}).listen(process.env.PORT || 5000);


