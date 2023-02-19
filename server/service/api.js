const { httpGet } = require('../extend/context');
const { SUBJECTS, MODELS, TEST_TYPES } = require('../typing/index');



// 给httpGet进一步封装
async function getQueries({ subject, model }) {

  const _subject = subject || SUBJECTS.s1;
  const _model = model || MODELS.c1;
  const _testType = TEST_TYPES.rand;


  return httpGet({
    url: '/query',
    data: {
      subject: _subject,
      model: _model,
      testType: _testType
    },
    success(data) {
      console.log('成功: ', data);
      return data;
    },
    fail(err) {
      console.log('失败: ', err);
      throw new Error('Request failed' + err);
    }
  })

}



module.exports = {
  getQueries
}