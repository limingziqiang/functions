var daysInMonth = function (year, month) {
  if (month === 2) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return 29
    } else {
      return 28
    }
  } else if ((month <= 7 && month % 2 === 1) || (month > 7 && month % 2 === 0)) {
  //else if ([1,3,5,7,8,10,12].includes(month)) {
    return 31
  } else {
    return 30
  }
}
