var fuzzyTime = require('../index')

var test1 = fuzzyTime('2015-12-27 23:16', {
	setMinDays: 4, 
	days: 'hari', 
	hours: 'jam', 
	minutes: 'minit lepas', 
	on: 'pada',
	setMonthArray: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dis']
})

var test2 = fuzzyTime('2016-01-09 23:16')

console.log(test1)
console.log(test2)