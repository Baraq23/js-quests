const fusion = (obj1, obj2) => {
    for (let key in obj2) {
        if (key in obj1) {
            if (obj1[key] instanceof Array && obj2[key] instanceof Array) {
                obj1[key] = [...obj1[key], ...obj2[key]]
            }else if (typeof(obj1[key]) === 'string' && typeof(obj2[key]) === 'string') {
                obj1[key] += ' ' + obj2[key] 
            }else if (typeof(obj1[key]) === 'number' && typeof(obj2[key]) === 'number') {
                obj1[key] += obj2[key]
            }else if (obj1[key] instanceof Object  && obj2[key] instanceof Object) {
                obj1[key] = fusion(obj1[key], obj2[key])
            }else {
                obj1[key] = obj2[key]
            }
        }else {
            obj1[key] = obj2[key]
        }
    }
    return obj1
}

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }))

// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))
// -> { a: 11, x: [], b: { c: 'Salem alem' } })