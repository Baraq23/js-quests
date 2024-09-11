// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

const filterKeys = (obj, f) => {
    let newObj = {}
    for (let key in obj) {
        if (f(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}

const mapKeys = (obj, f) => {
    let newObj = {}
    for (let key in obj) {
        let newKey = f(key)
        newObj[newKey] = obj[key]
    }
    return newObj
}

const reduceKeys = (obj, f, acc) => {    
    let str = ""
    if (acc !== undefined){
        str = acc
    }
    let i = 0
    for (let key in obj) {
        if (i===0) {
            str = key
            i++
            continue            
        }
        str = f(str, key)
        i++
    }
    return str
}



// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }