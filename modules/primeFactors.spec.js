var pf = require('./primeFactors')
describe('primeFactor function', function(){

  it('should return a list', function(){
    expect(pf.primeFactors(2)).toEqual([2]);
  });

  it('can decompose into factor of two', function(){
    expect(pf.primeFactors(16)).toEqual([ 2, 2, 2, 2]);
  });

  it('can decompose into prime factors  any number', function(){
    expect(pf.primeFactors(300)).toEqual([ 2,2,3,5,5]);
  });
});
