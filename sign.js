const sign = (n) => {
    if (n === 0) {
        return 0
    }
    if (n < 0) {
        return -1
    }
    if (n > 0) {
        return 1
    }
};

const sameSign = (a, b) => {
    if ((a >= 1 && b >= 1) || (a <= -1 && b <= -1) || (a === 0 && b === 0)) {
        return true
    }
    return false
}
