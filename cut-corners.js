const round = (n) => {
    let neg = false;
    if (n < 0) {
        neg = true;
        n = -n;
    }
    let num = 0;
    while (!(n < 1 && n > -1)) {
        n -= 1;
        num++;
    }
    if (n < 0.5) {
        if (neg) {
            return -num;
        } else {
            return num;
        }
    } else {
        if (neg) {
            return -num - 1;
        } else {
            return num + 1;
        }
    }
}

function floor(n) {
    let neg = false;
    if (n < 0) {
        neg = true;
        n = -n;
    }
    let nr = n;
    let num = 0;
    while (!(nr < 1 && nr > -1)) {
        nr -= 1;
        num++;
    }
    if (neg) {
        return -num - 1;
    } else {
        return num;
    }
}

function ceil(n) {
    if (!n) return 0;
    let neg = false;
    if (n < 0) {
        neg = true;
        n = -n;
    }
    let nr = n;
    let num = 0;
    while (!(nr < 1 && nr >= 0)) {
        nr -= 1;
        num++;
    }
    if (neg) {
        if (num === 0) {
            return num
        }
        return -num;
    } else {
        return num + 1;
    }
}

function trunc(n) {
    let num = 0;
    if (n > 0xfffffffff) {
        n -= 0xfffffffff;
        num += 0xfffffffff;
    }
    let neg = false;
    if (n < 0) {
        neg = true;
        n = -n;
    }
    let nr = n;
    while (!(nr < 1 && nr > -1)) {
        nr -= 1;
        num++;
    }
    if (neg) {
        if (num === 0) {
            return num
        }
        return -num;
    }
    return num;
}


// console.log(trunc(-0.435))