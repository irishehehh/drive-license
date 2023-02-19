// function typeOf(value) {
//   if (value === null) {
//     return 'null'
//   }
//   if (typeof value !== 'object') {
//     return typeof value
//   }
//   const toStr = Object.prototype.toString
//   const types = {
//     ' [object Object]': 'Object',
//     '[object Array': 'Array',
//   }
//   return types[toStr.call(value)]
// }

// function formatParams(data, appKey) {
//   if(typeOf(data) !=='Object') {
//     throw new Error("params 'data' must be a value of type object")
//   }
//   let arr = [];
//   for(let key in data) {
//     arr.push(`${key} =${data[key]}`)
//   }
//   return  arr.join('&') + '&'+`key=${appKey}`

  


  
// }

// module.exports = {
//   formatParams
// }


function formatParams(params, appKey) {
  // {
  //   a:1,
  //   b:2
  // }
  let arr = [];
  for(let key in params) {
    arr.push(`${ key }=${ params[key] }`);
  }

  return arr.join('&') + '&' + `key=${ appKey }`;
}




module.exports = {
  formatParams
}