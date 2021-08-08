// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req,res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('zwlnb')
// })
// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`)
// })
// process.on('SIGTERM', () => {
//   server.close(() => {
//     console.log('终止进程');
//   })
// })

// const args = require('minimist')(process.argv.slice(2))
const args = require('minimist')(process.argv.slice(2))
console.log(args['name'])
console.log(args)
// args.forEach((val, index) => {
//   console.log(11)
//   console.log(`${index}: ${val}`)
// })

const oranges = ['橙子', '橙子', '苹果', '🐉']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

console.log('\x1b[33m%s\x1b[0m', '🐉黄龙')


const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)