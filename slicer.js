const slice = (arr, s, n) => {
    if (s < 0) {
        s = arr.length + s
    }
    if (n < 0) {
        n = arr.length + n
    }
    if (n !== undefined){
        let res = []
        for (let i = s; i <= n; i++) {
            if (arr instanceof Array) {
                res.push(arr[i])
            } else {
                res+= arr[i]
            }
        }
        return res
    }
    let res = []
    for (let i = s; i < arr.length; i++) {
        if (arr instanceof Array) {
            res.push(arr[i])
        } else {
            res+= arr[i]
        }
    }
    return res
}

// let a = ['a', 'b', 'c', 'd', 'e']
// let b = ['a', 'b', 'c', 'd', 'e']

// console.log(slicer(a, 3))
// console.log(slicer(a, 2, 3))
// console.log(slicer('hellow', 2, 3))
// console.log(slicer('hellow', 1))
// console.log(slice('abcdef', 2))
// console.log(slice('abcdef', -2))
