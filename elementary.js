const multiply = (a, b) => {
    let negA = 1
    let negB = 1
    if (a < 0) {
        a *= -1
        negA = -1
    }
    if (b < 0) {
        b *= -1
        negB = -1
    }
    let results = 0;
    let count = 0;
    while (count < b) {
        results += a
        count++
    }
    return results * negA * negB
}

const divide = (a, b) => {
    let negA = 1
    let negB = 1
    if (a < 0) {
        a *= -1
        negA = -1
    }
    if (b < 0) {
        b *= -1
        negB = -1
    }
    let results = a;
    let count = 0;
    while (results != 0 && results > 0) {
        results -= b
        count++
    }
    return count * negA * negB
}

const modulo = (a, b) => {
    if (a < 0) {
        a *= -1
    }
    if (b < 0) {
        b *= -1
    }
    let results = a;
    while (results >= b) {
        results -= b
    }
    return results
}
