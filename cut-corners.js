const modulo = (n, d) => {
    return n%d
}

const round = (n) => {
    let isNeg
    if (n < 0) {
        n = -n
        isNeg = true
    }

    let mod = modulo(n, 1)
    let num = n-mod
    if (mod >=0.5) {
        num = num + 1
    }
    if (isNeg) {
        return -num
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
    let num = n-mod
    if (mod > 0) {
        num = num
    }
    if (isNeg) {
        // num +=1
        return -num
    }
    return num+1
}
// console.log(round(-5.6004))
// console.log(ceil(-5.6004))
// console.log(ceil(0.6004))