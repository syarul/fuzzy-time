var fuzzyTime = require('../index')

var opts = {
  setMinDays: 4,
  days: 'hari',
  hours: 'jam',
  minutes: 'minit lepas',
  on: 'pada',
  setMonthArray: [
    'Januari',
    'Februari',
    'Mac',
    'April',
    'Mei',
    'Jun',
    'Julai',
    'Ogos',
    'September',
    'Oktober',
    'November',
    'Disember'
  ],
  /*dateFormat: 'simple'*/
}

var test1 = fuzzyTime('December 17, 2015 03:24:00', opts)

var test2 = fuzzyTime('2016-01-09 23:16'/*, {dateFormat: 'simple'}*/)

console.log(test1)
console.log(test2)