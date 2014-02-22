var extractUrlParam = function(url, param){
  var index = url.indexOf(param);
  var startOfParamValue = param.length + index +1;
  var startOfNextParam = url.indexOf('&', startOfParamValue)
  if(startOfNextParam === -1){
    startOfNextParam = url.length
  }
  return url.substring(startOfParamValue,startOfNextParam)
}
exports.extractUrlParam = extractUrlParam;