const addWeek = (date) => {
    const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday"
    ]
    
    var bTime = (new Date("0001-01-01")).getTime()
    var dnow = (new Date(date)).getTime()
    var timePast = dnow - bTime
    var numDay = timePast/86400000
    var day = numDay%14

    return weekday[day]
}

const timeTravel = (obj) => {
    var date = new Date(obj.date)
    var yr = date.getFullYear()
    var mon = date.getMonth()
    var d = date.getDate()
    date.hour = obj.hour
    date.minute = obj.minute
    date.second = obj.second
    // console.log(typeof yr)
    // console.log(d)
    // console.log(typeof mon)
    // console.log(typeof mon)
    var dStr = String(yr) + "-" + String(mon+1) + "-"+ String(d) +" " + String(date.hour)+":"+ String(date.minute)+":"+ String(date.second)
    // console.log(date)
    // console.log(dStr)

    return new Date(dStr)
}


// console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday
// console.log(addWeek(new Date('0001-01-03'))) // Output: Wednessday


// console.log(addWeek('0001-01-14'))
// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString()
//   )

// console.log(addWeek(new Date('0001-01-02')))

