// 当前月份的天数
export const currentMonthDays = (year, month) => {
  return new Date(year, month, 0).getDate();
}
