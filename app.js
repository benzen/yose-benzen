var http = require('http');
var homepage =  require('./modules/homepage');
var helpers = require('./modules/helpers');
var primeFactors = require('./modules/primeFactors');

http.createServer(function(req,res){

  if(req.url == '/'){

    res.writeHead(200, {'content-type':'text/html'});

    res.end(homepage);
  }

  if(req.url == '/ping'){
    res.writeHead(200, {'content-type':'application/json'});
    res.end("{\"alive\":true}");
  }

  if(req.url.indexOf('/primeFactors') === 0 ){
    res.writeHead(200, {'content-type':'application/json'});

    var urlParam = helpers.extractUrlParam( req.url, 'number' )
    var decomposition =  { "number": urlParam };
    var numberParam = parseInt( urlParam, 10 );

    if(isNaN(numberParam)){
      decomposition.error = "not a number";
    }if( numberParam > 1000000){
      decomposition.error = "too big number (>1e6)";
    }else{
      decomposition.decomposition = primeFactors.primeFactors(numberParam);
    }


    res.end( JSON.stringify(decomposition) );

  }

}).listen(process.env.PORT || 5000);


