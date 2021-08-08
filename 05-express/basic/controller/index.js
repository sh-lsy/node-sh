var template = require('art-template');
const path = require('path')
const fs = require('fs')

const listModel = require('../model/list')
const list = (req, res, next) => {
  // let data = {
  //   res: true,
  //   data: []
  // }
  // for (let i = 0; i < 100; i++) {
  //   data.data.push('list' + i)
  // }
  // res.send(data)

  // let dataArr = []
  // for (let i = 0; i < 100; i++) {
  //   dataArr.push('list' + i)
  // }
  // res.set('content-type', 'application/json;charset= utf-8')
  // res.render("list", {
  //   data: JSON.stringify(dataArr)
  // })
  // console.log(listModel);
  var html = template(path.join(__dirname, '../views/list-html.art'), {
    data:listModel.dataArr
  })
  fs.writeFileSync(path.join(__dirname,'../public/list.html'), html)
  res.send('ok')
  // 返回内容
//   res.render("list-html",{
//     data:dataArr
//   })
}

exports.list = list