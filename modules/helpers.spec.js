var helpers = require('./helpers');
describe('extractUrlParam function',function(){
  it('give the first value for the given param',function(){
    var url = "http://your-server/primeFactors?number=300";
    expect(helpers.extractUrlParam(url, "number")).toEqual(["300"])
  });
  it('give all values for the given param',function(){
    var url = "http://your-server/primeFactors?number=300&number=120&number=hello";
    expect(helpers.extractUrlParam(url, "number")).toEqual(["300",'120','hello'])
  });
  it('respond with an array of values if the param contains comma', function(){
    var url = "http://your-server/primeFactors?number=21, 22";
    expect(helpers.extractUrlParam(url, "number")).toEqual(["21",'22'])
  });
});