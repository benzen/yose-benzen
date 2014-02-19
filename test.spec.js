var app = require('./app')
describe('primeFactor function', function(){

  it('should return a list', function(){
    expect(app.primeFactors()).toEqual([]);
  });

  xit('when given a prime number, it should return it as the sole element of the liste', function(){
    expect(app.primeFactors(1)).toEqual([1]);
  });

  it('can decompose 16', function(){
    expect(app.primeFactors(16)).toEqual([ 2, 2, 2, 2]);
  });
});