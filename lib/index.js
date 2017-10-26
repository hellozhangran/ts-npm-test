"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
//限制长度，默认为5个汉字长度，即10个英文字符长度
function getStringLimited(content, num) {
    if (num === void 0) { num = 5; }
    var len = content.length;
    var current = 0;
    var limitedIndex = len - 1;
    for (var i = 0; i < len; i++) {
        if (content.charCodeAt(i) > 127 || content.charCodeAt(i) == 94) {
            current += 2;
        }
        else {
            current++;
        }
        if (current >= num * 2) {
            limitedIndex = i;
            break;
        }
    }
    var tails = limitedIndex < len - 1 ? '...' : '';
    return content.substring(0, limitedIndex + 1) + tails;
}
exports.getStringLimited = getStringLimited;
/**
 * 标准时间格式：
 * 1. 今天的消息显示: hh:mm
 * 2. 昨天的消息显示: 昨天hh:mm
 * 3. 前天的消息显示: m月d日 hh:mm
 * 4. 上一年完整显示: 2016年8月4日 hh:mm
 * 5. 采用24小时制，个位数小时分钟前面补零，但个位数日月前面不补零
 */
function getStandardTime(timestamp) {
    var timeStr = timestamp + '';
    if ((timestamp + '').length === 10) {
        timestamp = timestamp * 1000;
    }
    else if ((timestamp + '').length !== 13) {
        return '';
    }
    var mo = moment();
    var oldMo = moment(timestamp);
    var yesterdayTimestamp = +mo - 24 * 60 * 60 * 1000;
    var nowDay = parseInt(mo.format('DD'));
    var nowYear = parseInt(mo.format('YYYY'));
    var yesterday = parseInt(moment(yesterdayTimestamp).format('DD'));
    var oldDay = parseInt(oldMo.format('DD'));
    var oldYear = parseInt(oldMo.format('YYYY'));
    //今天
    if (nowDay === oldDay) {
        return '' + oldMo.format('HH:mm');
    }
    //昨天
    if (yesterday === oldDay) {
        return '昨天 ' + oldMo.format('HH:mm');
    }
    //今年
    if (nowYear === oldYear) {
        return '' + oldMo.format('M月D日 HH:mm');
    }
    //去年
    if (oldYear < nowYear) {
        return '' + oldMo.format('YYYY年M月D日 HH:mm');
    }
}
exports.getStandardTime = getStandardTime;
