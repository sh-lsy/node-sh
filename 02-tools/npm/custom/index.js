const _ = require('lodash')

// let arr = [1, 3, 5, 7]

// let arr2 = _.chunk(arr, 2)

// console.log(arr2);

function myChunk(arr) {
  return _.chunk(arr, 2)
}
module.exports = myChunk