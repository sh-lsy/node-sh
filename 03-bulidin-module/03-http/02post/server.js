const http = require('http')
const querysting = require('querystring')

const postData = querysting.stringify({
  province: '四川',
  city: '成都',
  req: '🤫🐂🍺'
})
const options = {
  protocal: 'http:',
  hostname: 'localhost',
  method: 'post',
  port: 3000,
  path: '/data',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}

const server = http.createServer((req,res) => {
  const request = http.request(options, (result) => {

  })
  request.write(postData)
  request.end()
  res.end()
})

server.listen(8080, () => {
  console.log('服务启动');
})