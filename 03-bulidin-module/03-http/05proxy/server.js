const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware');
const server = http.createServer((req,res) => {
  let url = req.url
  if(/^\/api/.test(url)) {
    console.log(url);
    const proxy = createProxyMiddleware('/api', {
      target: 'https://floor.jd.com/',
      changeOrigin: true,
      pathRewrite: {'^/api':''}
    })
    proxy(req,res)
  }else {
    res.end('error')
  }
})

server.listen(8080, () => {
  console.log('服务启动8080端口');
})