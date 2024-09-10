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

const omit = (obj, arr) => {
    let newObj = {}
    let keys = Object.keys(obj)
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (!keys.includes(arr[i])) {
                newObj[arr[i]] = obj[arr[i]]
            }
        }
    }
    if (typeof arr == "string") {
        if (!keys.includes(arr)) {
            newObj[arr] = obj[arr]
        }
    }
    return newObj
}


// console.log(omiti("hello"))
// console.log(omiti(['something', "sm"]))
// console.log(omiti(['something']))


// console.log(omit({ something: 5, sm: { d: 6 } }, ['something', "sm"]))
// console.log(omit({ something: 5, sm: { d: 6 } }, 'sm'))