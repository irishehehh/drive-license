const nodeFetch = require('node-fetch');
const { BASE_URL, APP_KEY } = require('../config/default');
const { formatParams } = require('../lib/utills');



module.exports = {
  // 封装GET请求
  httpGet(options) {
    const { url, data, success, fail } = options;

    // console.log('完整的url: ', BASE_URL + url + '?' + formatParams(data, APP_KEY))
    return nodeFetch(BASE_URL + url + "?" + formatParams(data, APP_KEY))
      .then(res => res.json())
      .then(data => success(data))
      .catch(err => fail(err));
  }
}