const firstDayWeek = (week, year) => {
    let dateStr = year + "-01-01 00:00:00"
    let day1ofYr = new Date(dateStr)
    day1ofYr.setFullYear(year)

    let timeDay1 = day1ofYr.getTime()
    let weekSecs = 24 * 60 * 60 * 1000 * 7 * (week-1)
    let timeAfterWeeks =  timeDay1 + weekSecs
    if (week > 1) {
        let resetWeek = ((7 - (day1ofYr.getDay())) - 6) * 24 * 60 * 60 * 1000
        timeAfterWeeks += resetWeek
    }
    let d = new Date(timeAfterWeeks)
    return formatDate(d)
  
}




const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear().toString();
    if (yy < 9){
        yy = '000'+yy
    }
    if (yy > 99 && yy < 1000) {
        yy = '0'+yy
    }
    if (yy > 9 && yy < 1000) {
        yy = '0'+yy
    }
    
    return dd + "-" + mm + "-" + yy;
}


// console.log(firstDayWeek(2, "0001"));  // Output: "01-01-1000"
// console.log(firstDayWeek(2, "030"));  // Output: "01-01-1000"
console.log(firstDayWeek(1, "0005"));  // Output: "01-01-1000"
// firstDayWeek(2, "0000");  // Output: "08-01-0001"
// firstDayWeek(2, "0001"); // Output: "08-01-0001"
// console.log(new Date('0000-01-01').toDateString())