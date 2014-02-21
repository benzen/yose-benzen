http = require('http');
http.createServer(function(req,res){

  if(req.url == '/'){

    res.writeHead(200, {'content-type':'text/html'});

    res.end(htmlIndex);
  }

  if(req.url == '/ping'){
    res.writeHead(200, {'content-type':'application/json'});
    res.end("{\"alive\":true}");
  }

  if(req.url.indexOf('/primeFactors') === 0 ){
    res.writeHead(200, {'content-type':'application/json'});

    var urlParam = extractUrlParam( req.url, 'number' )
    var decomposition =  { "number": urlParam };
    var numberParam = parseInt( urlParam, 10 );

    if(isNaN(numberParam)){
      decomposition.error = "not a number";
    }else{
      decomposition.decomposition = primeFactors(numberParam);
    }


    res.end( JSON.stringify(decomposition) );

  }

}).listen(process.env.PORT || 5000);

var htmlIndex =
      "<html>"+
        "<body>"+
          "<center>"+
            "<h1>Hello Yose</h1>"+
            "<a id='contact-me-link' href='http://www.linkedin.com/pub/benjamin-dreux/18/7a/aa6'>Contact info</a>"+
          "</center>"+

          "<br>"+

          "<center>"+
          "<a id='ping-challenge-link' href='/ping'>Ping me I'm famous</a>"+
          "</center>"+


          "<a id='repository-link' href='https://github.com/benzen/yose-benzen'>"+
            "<img style='position: absolute; top: 0; left: 0; border: 0;' src='https://github-camo.global.ssl.fastly.net/8b6b8ccc6da3aa5722903da7b58eb5ab1081adee/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6f72616e67655f6666373630302e706e67' alt='Fork me on GitHub' data-canonical-src='https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png'>"
          "</a>"+

        "</body>"+
      "</html>";

var extractUrlParam = function(url, param){
  var index = url.indexOf(param);
  var startOfParamValue = param.length + index +1;
  var startOfNextParam = url.indexOf('&', startOfParamValue)
  if(startOfNextParam === -1){
    startOfNextParam = url.length
  }
  return url.substring(startOfParamValue,startOfNextParam)
}
// exports.primeFactors = function(number){
//   var dec = decomposeInPowerOfTwo(number);
//   var result = {};
//   dec.forEach(function(potentialFactor){
//     result[dec] = ''
//   });
// }
var primeFactors = function(number){
 var rest = number ;
 var factors = [];
 while(rest>=2){
   rest = rest/2;
   factors.push(2);
 }
 return factors;
}
exports.primeFactors = primeFactors