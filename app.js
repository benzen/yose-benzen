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
      var decomposition = jsonisifyPrimes(value);
      result.push(decomposition)
    });

    if(values.length == 1){
      result = result.pop()
    }
    res.end( JSON.stringify(result) );

  }

}).listen(process.env.PORT || 5000);


var jsonisifyPrimes = function(value){
  var decomposition =  { "number": value };
  var numberParam = parseInt( value, 10 );

  if(numberParam.toString() != value ){
    numberParam = NaN;
  }

  if(isNaN(numberParam)){
    decomposition.error = "not a number";
  }else if( numberParam > 1000000){
    decomposition.error = "too big number (>1e6)";
  }else{
    decomposition.decomposition = primeFactors.primeFactors(numberParam);
  }
  return decomposition;
};