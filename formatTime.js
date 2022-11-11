/*
describe: 发表时间，显示策略为
判断是否是今天，如果是
    1分钟内，显示“刚刚”
    1分钟至1小时，显示“x分钟前”
    1小时至24小时，显示“x小时前”
超出24小时，但是是昨天
    显示“昨天”
超出昨天至1个月，显示“x天前”
超出1个月至1年，显示“x月x日”
超出1年，显示“x年x月x日”
*/

var formatTime = function (publishTimestamp, curTimestamp) {
  publishTimestamp = Number(publishTimestamp)
  if (!publishTimestamp || publishTimestamp < 0) {
    return ''
  }

  curTimestamp = curTimestamp || (new Date() / 1000)

  var interval = curTimestamp - publishTimestamp
  var publishTime = new Date(publishTimestamp * 1000)
  var curTime = new Date(curTimestamp * 1000)
  var month

  if (interval <= 59) {
    return '刚刚'
  } else if (interval < 61) {
    return '1分钟前'
  } else if (interval < 60 * 60) {
    return Math.floor(interval / 60) + '分钟前'
  } else if (interval < 60 * 60 * 24) {
    return Math.floor(interval / (60 * 60)) + '小时前'
  } else if (isInSpecificYesterday(publishTime, curTime)) {
    return '昨天'
  } else if (addMonth(publishTime) > curTime) {
    return Math.ceil(interval / (60 * 60 * 24)) + '天前'
  } else if (addYear(publishTime, 1) > curTime) {
    month = publishTime.getMonth() + 1
    return month + '月' + publishTime.getDate() + '日'
  } else {
    month = publishTime.getMonth() + 1
    return publishTime.getFullYear() + '年' + month + '月' + publishTime.getDate() + '日'
  }
}
