const modulo = (n, d) => {
    return n % d
}

const round = (n) => {
    let isNeg
    if (n < 0) {
        n = -n
        isNeg = true
    }

    let mod = modulo(n, 1)
    let num = n - mod
    if (mod >= 0.5) {
        num = num + 1
    }
    if (isNeg) {
        if (num === 0) {
            num = num
        } else {
            num = -num
        }
    }
    return num
}

const ceil = (n) => {
    let isNeg
    if (n < 0) {
        n = -n
        isNeg = true
    }

    let mod = modulo(n, 1)
    let num = n - mod
    if (mod > 0) {
        if (isNeg) {
            if (num === 0) {
                num = num
            } else {
                num = -num
            }
        } else {
            num += 1
        }
    }
    return num
}

const floor = (n) => {
    let isNeg = false
    if (n < 0) {
        n = -n
        isNeg = true
    }
    let mod = modulo(n, 1)
    let num = n - mod

    if (mod > 0) {
        if (isNeg) {
            num += 1
            if (num === 0) {
                num = num
            } else {
                num = -num
            }
        } else {
            num = num
        }
    }
    return num
}

const trunc = (n) => {
    let isNeg = false
    if (n < 0) {
        isNeg = true
        n = -n
    }

    let mod = modulo(n, 1)
    let num = n - mod
    if (isNeg) {
        if (num === 0) {
            num = num
        } else {
            num = -num
        }
    }
    return num
}

// console.log(round(-5.6004))
// console.log(round(-0.6004))
// console.log(round(-0.01))
// console.log(ceil(-5.6004))
// console.log(ceil(0.6004))
// console.log(ceil(0.0))
// console.log(floor(0.0))
// console.log(floor(0.05))
// console.log(floor(5.05))
// console.log(floor(5.05))
// console.log(floor(-1.01))
// console.log(trunc(0.01))
// console.log(trunc(-0.01))
// console.log(trunc(-6.01))
// console.log(trunc(-7.91))
// console.log(trunc(3.91))
