var app = require('./app')
describe('primeFactor function', function(){

  it('should return a list', function(){
    expect(app.primeFactors(2)).toEqual([2]);
  });

  xit('when given a prime number, it should return it as the sole element of the liste', function(){
    expect(app.primeFactors(1)).toEqual([1]);
  });

  it('can decompose into factor of two', function(){
    expect(app.decomposeInPowerOfTwo(16)).toEqual([ 2, 2, 2, 2]);
  });

  it('return a list where the same number does repeat', function(){
    expect(app.primeFactors(16)).toEqual([ 2]);
  });

});