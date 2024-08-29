const multiply = (a, b) => {
    let results = 0;
    let count = 0;
    while (count < b) {
        results += a
        count++
    }
    return results
}

const divide = (a, b) => {
    let results = a;
    let count = 0;
    while (results != 0 && results > 0) {
        results -= b
        count++
    }
    return count
}

const modulo = (a, b) => {
    let results = a;
    while (results >= b) {
        results -= b
    }
    return results
}
