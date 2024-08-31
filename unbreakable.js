const split = (s, d) => {
    let res = []
    if (d !== '') {
        let item = ''
        for (let i = 0; i < s.length; i++) {
            if (s[i] === d) {
                res.push(item)
                item = ''
                continue
            }
            item += s[i]
        }
        if (item !== '') {
            res.push(item)
        }
        return res
    }
    for (let i = 0; i < s.length; i++) {
        res.push(s[i])
    }
    return res

}

const join = (arr, d) => {
    let res = ''
    if (d !== '') {
        for (let i = 0; i < arr.length; i++) {
            res+=arr[i]
            if (i !== arr.length-1) {
                res+=d
            }
        }
        return res
    }
    for (let i = 0; i < arr.length; i++) {
        res+=arr[i]        
    }
    return res
}

// console.log(split('hello',''))
// console.log(join(split('hello',''), ''))