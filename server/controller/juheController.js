
const { getQueries } = require('../service/api');



async function juheController(ctx) {

  // console.log('body: ', ctx.request.body);
  const { subject, model } = ctx.request.body;

  ctx.body = await getQueries( { subject, model } );

}




module.exports = {
  juheController
}

