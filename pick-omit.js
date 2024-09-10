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
    let val = Object.values(obj)
    let i = 0

    if (typeof(arr) === "string") {
        for (let char of keys) {
            if (char !== arr)  {
                newObj[char] = val[i]
            }
            i++
        }
    } else {
        for (let char of keys) {
            if (!(arr.includes(char))) {
                newObj[char] = val[i]
            }
            i++
        }
    }
    
    return newObj
}


// console.log(omiti("hello"))
// console.log(omiti(['something', "sm"]))
// console.log(omiti(['something']))

// const ex = {
//        England: 'english',
//        Portugal: 'portuguese'
//      }

//      console.log(omit(ex, 'Portugal'))


// console.log(omit({ something: 5, sm: { d: 6 } }, ['something', "sm"]))
// console.log(omit({ something: 5, sm: { d: 6 } }, 'sm'))