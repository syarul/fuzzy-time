/**
 * fuzzyTime a simple timeago without any dependencies
 */

module.exports = fuzzyTime

function fuzzyTime(ago, options) {

    options = options || {};

    this.days = options.days || 'days';
    this.hours = options.hours || 'hours';
    this.minutes = options.minutes || 'minutes ago';
    this.on = options.on || 'on';
    this.ago = ago
    this.setMonthArray = options.setMonthArray || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.setMinDays = options.setMinDays || 7;
    
    // later record end time
    var endTime = new Date();
    var agoUTC = new Date(ago)

    // time difference in ms
    var timeDiff = endTime - agoUTC;
    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var getMinutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var getHours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var getDays = timeDiff;

    this.formatDate = function(d) {
        var d = this.ago
        var mArr = this.setMonthArray
        var date = new Date(d)
        var dd = date.getDate(); 
        var mm = date.getMonth();
        var yyyy = date.getFullYear(); 

        return d = dd+' '+mArr[mm]+' '+yyyy
    }

    var output;

    if (getDays != 0){
        if(getDays < this.setMinDays){
            if (getHours != 0){
                output = getDays + ' ' + this.days + ' ' + getHours + ' ' + this.hours + ' ' + getMinutes + ' ' + this.minutes
            } else {
                output = getDays + ' ' + this.days + ' ' + getMinutes + ' ' + this.minutes
            }
        } else {
            output = this.on + ' ' + this.formatDate(ago)
        }

    } else {
        output = getHours + ' ' + this.hours + ' ' + getMinutes + ' ' + this.minutes
    }

    return output
}