const cutFirst = (s) => {
    if (s.length < 2) {
        return ''
    }
    let res = []
    for (let i = 2; i < s.length; i++) {
        res += s[i]
    }
    return res
}

const cutLast = (s) => {
    if (s.length < 2) {
        return ''
    }
    let res = []
    for (let i = 0; i < s.length-2; i++) {
        res += s[i]
    }
    return res
}

const cutFirstLast = (s) => {
    if (s.length < 4) {
        return ''
    }
    let res = []
    for (let i = 2; i < s.length-2; i++) {
        res += s[i]
    }
    return res
}

const keepFirst = (s) => {
    if (s.length < 2) {
        return ''
    }
    let res = []
    for (let i = 0; i < 2; i++) {
        res += s[i]
    }
    return res
}

const keepLast = (s) => {
    if (s.length < 2) {
        return ''
    }
    let res = []
    for (let i = s.length-2; i < s.length; i++) {
        res += s[i]
    }
    return res
}

const keepFirstLast = (s) => {
    if (s.length < 4) {
        return ''
    }
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