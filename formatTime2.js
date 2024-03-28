function formatTime(timeString) {
  // 分割字符串为小时和分钟
  const [hours, minutes] = timeString.split(':');
  // 确保小时和分钟都是两位数格式
  const formattedHours = hours.padStart(2, '0');
  const formattedMinutes = minutes.padStart(2, '0');
  // 拼接新的字符串
  return `${formattedHours}时${formattedMinutes}分`;
}

// 使用示例
const timeString = "03:00";
const formattedTimeString = formatTime(timeString);
console.log(formattedTimeString); // 输出: "03时00分"
