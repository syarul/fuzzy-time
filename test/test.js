var fuzzyTime = require('../index')

var test1 = fuzzyTime('December 17, 2015 03:24:00', {
	setMinDays: 5, 
	days: 'hari', 
	hours: 'jam', 
	minutes: 'minit lepas', 
	on: 'pada',
	setMonthArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dateFormat: 'simple'
})

var test2 = fuzzyTime('2016-01-09 23:16', {dateFormat: 'simple'})

console.log(test1)
console.log(test2)