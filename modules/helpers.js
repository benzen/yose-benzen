var extractUrlParam = function(url, param){
  var nextStart = 0;
  var values = [];
  while(nextStart>=0){
    var res = extractUrlParam_sub(url,param,nextStart);
    nextStart = res.nextStart;
    values.push(res.value);

  }
  return values
}
var extractUrlParam_sub = function(url, param, startIndex){
  var index = url.indexOf(param, startIndex);
  var startOfParamValue = param.length + index +1;
  var startOfNextParam = url.indexOf('&', startOfParamValue);
  if(startOfNextParam === -1){
    startOfNextParam = url.length
  }
  return {
    value: url.substring(startOfParamValue,startOfNextParam),
    nextStart: url.indexOf('&', startOfParamValue)
  }
}
exports.extractUrlParam = extractUrlParam;