const path = require('path')
const fs = require('fs')

const mime = require('mime')

function readStaticFile(fileName,res) {
  const ext = path.parse(fileName).ext
  // console.log('ext', ext, 'type', type);
  if (ext) {
    const type = mime.getType(ext)
    fs.readFile(fileName, (err, content) => {
      if(err) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.write("404 - NOT FOUND")
        res.end()
      } else {
        res.writeHead(200, {
          'Content-Type':`${type};charset=utf-8`
        })
        res.end(content)
      }
    })
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end('not static resources')
  }
}

module.exports = readStaticFile