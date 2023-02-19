const Koa = require('koa');
const Router = require('koa-router');
const json = require('koa-json');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const juhe = require('./routes/juhe')
// const Router = require('koa-router')
const router = new Router()
const app = new Koa()

// middlewares
app.use(bodyParser())
app.use(json())


// logger

app.use(cors())
router.use('/api',juhe)
// routes
app.use(router.routes(), router.allowedMethods())

app.listen(3000, () => {
  console.log('port is 3000')
})


