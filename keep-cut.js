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
    for (let i = 0; i < 2; i++) {
        res += s[i]
    }
    return res
}

const keepLast = (s) => {
    let res = []
    for (let i = s.length-2; i < s.length; i++) {
        res += s[i]
    }
    return res
}

const keepFirstLast = (s) => {
    let res = []
    res += keepFirst(s)
    res += keepLast(s)
    return res
}

// console.log(cutFirst('hello'))
// console.log(cutLast('hello'))
// console.log(cutFirstLast('jjhellojj'))
// console.log(keepFirst('jjhellojj'))
// console.log(keepLast('hello'))
// console.log(keepFirstLast('jjhellojj'))