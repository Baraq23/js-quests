// dog years

const dogYears = (planet, dogAge) => {

    let pl = 0.0;

    if (planet === "earth") {
        pl = 1.0;
    }
    if (planet === "mercury") {
        pl = 0.2408467;
    }
    if (planet === "venus") {
        pl = 0.61519726;
    }
    if (planet === "mars") {
        pl = 1.8808158 ;
    }
    if (planet === "jupiter") {
        pl = 11.862615;
    }
    if (planet === "saturn") {
        pl = 29.447498;
    }
    if (planet === "uranus") {
        pl = 84.016846;
    }
    if (planet === "neptune") {
        pl = 164.79132;
    }
    
    return Number((((dogAge/31557600)/pl) *7).toFixed(2))
}
