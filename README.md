# fuzzy-time
A simple timeago to update timestamp (e.g 4 days 12 hours 4 minutes ago) with no dependencies

## Usage:
to install

``` npm install fuzzy-time```

As node modules
```javascript
var fuzzyTime = require('fuzzy-time')

console.log(fuzzyTime('2016-01-09 23:16'))
```
Usage for browser look in **dist** folder
```html
  <script src="node_modules/fuzzy-time/dist/fuzzy-time.min.js"></script>

<script>
  var fuzzyTime = window.fuzzyTime;
  console.log(fuzzyTime('2016-01-09 23:16'))
</script>
```
#### Options Paramenters
```javascript
fuzzyTime(date, options)
```
- **setMinDays**: set the minimum days before the date is shown as actual date
- **days**: change the days string
- **hours**: change the hours string
- **minutes**: change the minutes string
- **on**: change the on string
- **setMonthArray**: Set New Array for Month ( eg: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
- **dateFormat**: date format, can be set to 'simple' format which output ( eg: July 20 '15)

#### Sample Usage with Options

```javascript
var getDate = fuzzyTime('2015-12-27 23:16', {
	setMinDays: 4, 
	days: 'hari', 
	hours: 'jam', 
	minutes: 'minit lepas', 
	on: 'pada',
	setMonthArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dateFormat: 'simple'
})

console.log(getDate)
```
