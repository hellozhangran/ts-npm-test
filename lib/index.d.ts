export declare function getStringLimited(content: string, num?: number): string;
/**
 * 标准时间格式：
 * 1. 今天的消息显示: hh:mm
 * 2. 昨天的消息显示: 昨天hh:mm
 * 3. 前天的消息显示: m月d日 hh:mm
 * 4. 上一年完整显示: 2016年8月4日 hh:mm
 * 5. 采用24小时制，个位数小时分钟前面补零，但个位数日月前面不补零
 */
export declare function getStandardTime(timestamp: number): string;
