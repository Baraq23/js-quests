const firstDayWeek = (week, year) => {
    // Create a date object for the 1st of January of the given year
    let date = new Date(year, 0, 1);

    // If it's the first week, return January 1st
    if (week === 1) {
        return formatDate(date);
    }

    // Calculate the date of the first day of the given week
    // Find the first Monday after January 1st (or January 1st itself if it's Monday)
    let dayOfWeek = date.getDay();
    let diff = (dayOfWeek === 0) ? 1 : 8 - dayOfWeek;
    date.setDate(date.getDate() + diff + (week - 2) * 7);

    // If the calculated date is in the previous year, return January 1st of the specified year
    if (date.getFullYear().toString() !== year) {
        date = new Date(year, 0, 1);
    }

    return formatDate(date);
}

const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear().toString();
    return dd + "-" + mm + "-" + yy;
}

// Example usage:
// console.log(firstDayWeek(1, "1000"));  // Output: "01-01-1000"
// console.log(firstDayWeek(2, "2017"));  // Output: "09-01-2017"
// console.log(firstDayWeek(53, "2020")); // Output: "28-12-2020"

console.log((firstDayWeek(1, '1000'))); // Output: "28-12-2020"
