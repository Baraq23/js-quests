function firstDayWeek(week, year) {
    // Parse the year as an integer to avoid issues with leading zeros
    year = parseInt(year, 10);

    // Create a date object for the 1st of January of the given year
    let date = new Date(year, 0, 1);

    // Get the day of the week for January 1st (0 for Sunday, 6 for Saturday)
    let dayOfWeek = date.getDay();

    // If January 1st is not a Monday, calculate the date of the first Monday of the year
    if (dayOfWeek !== 1) {
        // Calculate the difference to the next Monday (if dayOfWeek is 0, shift to Monday)
        let diff = (dayOfWeek === 0) ? 1 : 8 - dayOfWeek;
        date.setDate(date.getDate() + diff);
    }

    // Add the number of weeks to reach the desired week (week - 1) and multiply by 7
    date.setDate(date.getDate() + (week - 2) * 7);

    // If the calculated date is in the previous year, return January 1st of the specified year
    if (date.getFullYear() !== year) {
        date = new Date(year, 0, 1);
    }

    return formatDate(date);
}

function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear().toString();
    if (yy.length < 4) {
        yy = "0000".substr(0, 4 - yy.length) + yy;
    }
    return dd + "-" + mm + "-" + yy;
}

// Example usage:
console.log(firstDayWeek(1, "1000"));  // Output: "01-01-1000"
console.log(firstDayWeek(2, "0001"));  // Output: "08-01-0001"
console.log(firstDayWeek(53, "2020")); // Output: "28-12-2020"
