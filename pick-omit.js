const pick = (obj, arr) => {
    let newObj = {}
    let keys = Object.keys(obj)
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (keys.includes(arr[i])) {
                newObj[arr[i]] = obj[arr[i]]
            }
        }
    }
    if (typeof arr == "string") {
        if (keys.includes(arr)) {
            newObj[arr] = obj[arr]
        }
    }
    return newObj
}

const omit = (obj, s) => {
    let newObj = {}
    let keys = Object.keys(obj)
    let arr
    Array.isArray(arr) ? arr = [...s] : arr = [s]
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (keys.includes(arr[i])) {
                continue
            }
            newObj[arr[i]] = obj[arr[i]]
        }
    }
    return newObj
}


// console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'))