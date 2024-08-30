const cutFirst = (s) => {
    let res = []
    for (let i = 2; i < s.length; i++) {
        res += s[i]
    }
    return res
}

const cutLast = (s) => {
    let res = []
    for (let i = 0; i < s.length-2; i++) {
        res += s[i]
    }
    return res
}

const cutFirstLast = (s) => {
    let res = []
    for (let i = 2; i < s.length-2; i++) {
        res += s[i]
    }
    return res
}

const keepFirst = (s) => {
    let res = []
    for (let i = 0; i < s.length; i++) {
        res += s[i]
        if (i === 2) {
            break
        }
    }
    return res
}

const keepLast = (s) => {
    let res = []
    let count = 0
    for (let i = s.length-1; i >= 0; i--) {
        res = s[i] + res
        count++
        if (count == 2) {
            break
        }
    }
    return res
}

const keepFirstLast = (s) => {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || i === 1 || i === s.length-2 || i === s.length-1) {
            res+=s[i]
        }
    }
    return res
}

// console.log(cutFirst('hello'))
// console.log(cutLast('hello'))
// console.log(cutFirstLast('jjhellojj'))
// console.log(keepFirst('j'))
// console.log(keepFirstLast('hellox'))
// console.log(keepFirstLast('jjhellojj'))