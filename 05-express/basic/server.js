const express = require('express')
const path = require('path')
const app = express()
const router = require('./router/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // 用于解析form-urlencoded

// 静态资源服务中间间
app.use(express.static('./public'))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape: false
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.use('/', router)

app.listen(5000, () => {
  console.log('5000');
})