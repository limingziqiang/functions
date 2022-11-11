var isInSpecificYesterday = function (time, specTime) {
  specTime.setDate(specTime.getDate() - 1)
  return time.toDateString() == specTime.toDateString()
}
