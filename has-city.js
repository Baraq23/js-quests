const hasCity = (country, arr) => {
    return f = (city) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(city) === -1) {
                return city + ' is not a city from ' + country
            }
            return city + ' is a city from ' + country
        }
    }
}