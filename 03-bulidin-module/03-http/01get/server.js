const logger = require('../../utils/log')

const http = require('http')
const https = require('https')
const querysting = require('querystring')
const server = http.createServer((req,res) => {
  // logger.debug(req)
  // debugger
  // res.writeHead(200, {'Content-type' : 'text/html'}); 
  // res.write('<head><meta charset="utf-8"/></head>');
  // res.write('<h1>Node.js</h1>');
  // res.write('中文测试');
  // res.end('<p>Hello World</p>');

  // 返回json字符串
  // let url = req.url
  // res.writeHead(200,{'Content-type': 'application/json;charset=utf-8'})
  // res.write(`{"url": "${url}"}`)
  // res.end()

  // let data = ''
  // req.on('data', (v) => {
  //   data +=v
  // })

  // req.on('end', (v) => {
  //   res.writeHead(200,{'Content-type': 'application/json;charset=utf-8'})
  //   res.write(`{"url": "${JSON.stringify(querysting.parse(data))}"}`)
  //   logger.debug(JSON.stringify(querysting.parse(data)))
  //   res.end()
  // })
  https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', (result) => {
    let data = ''
    result.on('data', (v) => {
      data += v
    })
    result.on('end', (v) => {
      res.writeHead(200,{'Content-type': 'application/json;charset=utf-8'})
      res.write(data)
      // logger.debug(JSON.stringify(querysting.parse(data)))
      res.end()
    })
  })
})

server.listen(3000,'127.0.0.1',() => {
  console.log('服务器启动')
})