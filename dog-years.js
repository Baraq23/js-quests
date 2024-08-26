// dog years

const dogYears = (planet, dogAge) => {

    let pl = 0.0;

    switch (planet) {
        case "earth":
            pl = 1.0;
            break;
        case "mercury":
            pl = 0.2408467
            break;
        case "venus":
            pl = 0.61519726;
            break;
        case "mars":
            pl = 1.8808158 ;
            break;
        case "jupiter":
            pl = 11.862615;
            break;
        case "saturn":
            pl = 29.447498;
            break;
        case "uranus":
            pl = 84.016846;
            break;
        case "neptune":
            pl = 164.79132;
            break;
    }

    return Number((((dogAge/31557600)*pl) *7).toFixed(2))
}
