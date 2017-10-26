import * as moment from 'moment'

//限制长度，默认为5个汉字长度，即10个英文字符长度
export function getStringLimited(content: string, num:number=5): string{
  const len = content.length
  let current = 0
  let limitedIndex = len - 1
  for(let i = 0; i < len; i++){
    if(content.charCodeAt(i) > 127 || content.charCodeAt(i) == 94){
      current+= 2
    }else{
      current++
    }
    if(current >= num * 2){
      limitedIndex = i
      break;
    }
  }
  let tails = limitedIndex < len - 1 ? '...' : '' 
  return content.substring(0, limitedIndex+1) + tails
}

/**
 * 标准时间格式：
 * 1. 今天的消息显示: hh:mm
 * 2. 昨天的消息显示: 昨天hh:mm
 * 3. 前天的消息显示: m月d日 hh:mm
 * 4. 上一年完整显示: 2016年8月4日 hh:mm
 * 5. 采用24小时制，个位数小时分钟前面补零，但个位数日月前面不补零
 */
export function getStandardTime(timestamp: number){
  let timeStr = timestamp+''
  if((timestamp+'').length === 10){
    timestamp = timestamp * 1000
  }else if((timestamp+'').length !== 13){
    return ''
  }

  let mo = moment()
  let oldMo = moment(timestamp)
  let yesterdayTimestamp = +mo - 24 * 60 * 60 * 1000 
  let nowDay = parseInt( mo.format('DD') )
  let nowYear = parseInt( mo.format('YYYY') )
  let yesterday = parseInt( moment(yesterdayTimestamp).format('DD') )
  let oldDay = parseInt( oldMo.format('DD') )
  let oldYear = parseInt( oldMo.format('YYYY') )
  
  //今天
  if(nowDay === oldDay){
    return  ''+ oldMo.format('HH:mm')
  }
  //昨天
  if(yesterday === oldDay){
    return '昨天 ' + oldMo.format('HH:mm')
  }

  //今年
  if(nowYear === oldYear){
    return '' + oldMo.format('M月D日 HH:mm')
  }

  //去年
  if(oldYear < nowYear){
    return '' + oldMo.format('YYYY年M月D日 HH:mm')
  }  
}