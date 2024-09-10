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
    let newObj = obj
    let keys = Object.keys(obj)
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (keys.includes(arr[i])) {
               delete newObj[arr[i]]
            }            
        }
    }
    if (typeof arr == "string") {
        if (keys.includes(arr)) {
            delete newObj[arr]
        }
    }
    return newObj
}


// let person = {
//     name: "fena",
//     age: '30',
//     town: "kisumu"
// }

// console.log(pick(person, ["name", "age"]))
// console.log(omit(person, 'name'))