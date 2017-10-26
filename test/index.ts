import * as utils from '../src/index'

let hourPre = +new Date() - 1000 * 60 * 60
let standardTime = utils.getStandardTime(hourPre)
console.log('一小时前：', standardTime)

let sentence = '你好，我是一个很长很长很长的句子'
let short = utils.getStringLimited(sentence, 7)
console.log('字符限制：', short)
