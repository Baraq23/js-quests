const invert = (obj) => {
    let keys = Object.keys(obj)
    let vals = Object.values(obj)
    let newObj = {}
    for (let i = 0; i < keys.length; i++) {
        newObj[vals[i]] = keys[i]
    }
    return newObj
}

// const person = {
//     name: "fena",
//     age: '30',
//     town: "kisumu"
// }
// console.log(invert(person))