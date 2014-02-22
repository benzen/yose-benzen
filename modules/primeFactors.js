
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