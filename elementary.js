const multiply = (a, b) => {
    let negA = false
    let negB = false
    if (a < 0) {
        negA = true
        a = Math.abs(a)
    }
    if (b < 0) {
        negB = true
        b = Math.abs(b)
    }
    let results = 0;
    let count = 0;
    while (count < b) {
        results += a
        count++
    }
    if ((negA && negB) || (!negA && !negB)){
        return results
    }
    return -results
}

const divide = (a, b) => {
    let negA = false
    let negB = false
    if (a < 0) {
        negA = true
        a = Math.abs(a)
    }
    if (b < 0) {
        negB = true
        b = Math.abs(b)
    }

    let results = a;
    let count = 0;

    while (results >= b) {
        results -= b
        count++
    }

    if ((negA && negB) || (!negA && !negB)) {
        return count
    }
    return -count
}

const modulo = (a, b) => {
    let negA = false
    let negB = false
    if (a < 0) {
        negA = true
        a = Math.abs(a)
    }
    if (b < 0) {
        negB = true
        b = Math.abs(b)
    }
    let results = a;
    while (results >= b) {
        results -= b
    }
    if (negA) {
        return -results
    }
    return results
}
