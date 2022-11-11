var daysInMonth = function (year, month) {
  if (month === 2) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return 29
    } else {
      return 28
    }
  } else if ((month <= 7 && month % 2 === 1) || (month > 7 && month % 2 === 0)) {
    return 31
  } else {
    return 30
  }
}

var addMonth = function (date) {
  var m = date.getMonth()
  var daysInNextMonth
  var day

  if (m === 11) {
    return new Date(date.getFullYear() + 1, 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
  }

  daysInNextMonth = daysInMonth(date.getFullYear(), date.getMonth() + 1)
  day = date.getDate()

  if (day > daysInNextMonth) {
    day = daysInNextMonth
  }

  return new Date(date.getFullYear(), date.getMonth() + 1, day, date.getHours(), date.getMinutes(), date.getSeconds())
}
