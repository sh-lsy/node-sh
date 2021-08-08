const http = require('http')

const server = http.createServer((req,res) => {
  const urlObj = new URL(req.url, req.headers.referer)
  switch (urlObj.pathname) {
    case '/api/data':
      res.writeHead(200,{
        'Content-type': 'application/json;charset=utf-8', 
        'Access-Control-Allow-Origin': '*'
      })
      res.write('{"data": "aaa"}')
      break;
    default:
      res.write('404,not found')
      break;
  }
  res.end()
})

server.listen(8080, () => {
  console.log('服务启动8080端口');
})