const express = require('express')

const { list } = require('../controller/index')

const router = express.Router()

router.get('/api/list', list)

// router.get('/', (req, res, next) => {
//   res.send('默认界面')
// })
// router.get('/index', (req, res, next) => {
//   const query = req.query
//   res.send(query)
// })
// router.post('/index', (req, res, next) => {
//   const data = req.body
//   console.log(req.body)
//   res.send(data)
// })

module.exports  = router