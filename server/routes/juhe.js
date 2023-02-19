const Router = require('koa-router');
const { juheController } = require('../controller/juheController');




const router = new Router();




router.post('/query', juheController);          // 前端请求localhost:3000/api/query, 进入控制器进行聚合数据的请求









module.exports = router.routes();
