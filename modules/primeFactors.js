
var primeFactors = function(number){
 var rest = number ;
 var factors = [];
 var candidate = 2;
 while(candidate <= rest){
   while( (rest % candidate) == 0 ){
     rest = rest/candidate;
     factors.push(candidate);
   }
 candidate ++;
 }

 return factors;
}
exports.primeFactors = primeFactors;

var jsonisifyPrimes = function(value){
  var decomposition =  { "number": value };
  var numberParam = parseInt( value, 10 );

  //it start with a number
  if(numberParam.toString() != value ){
    numberParam = NaN;
  }
  if(isNaN(numberParam)){
    decomposition.error = "not a number";
  }else if( numberParam > 1000000){
    decomposition.error = "too big number (>1e6)";
  }else if(numberParam < 1){
    decomposition.error = numberParam + ' is not an integer > 1';
  }else{
    decomposition.decomposition = primeFactors(numberParam);
  }
  return decomposition;
};
exports.jsonisifyPrimes = jsonisifyPrimes;