const letterSpaceNumber = (s) => {
    let reg = /[a-zA-Z]\s[0-9]{1}(?![a-zA-Z0-9])/g
    let matches = s.match(reg)
    return matches || []
}

// console.log(letterSpaceNumber('example 1, example 20'))
