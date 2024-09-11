const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

const filterValues = (obj, f) => {
    let newObj = {}
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
      if (f(values[i])){
        newObj[keys[i]] = values[i]
      }
    }
    return newObj
}


const mapValues = (obj, f) => {
    let newObj = {}
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
        let newVal = f(values[i])
        newObj[keys[i]] = newVal
    }
    return newObj
}

const reduceValues = (obj, f) => {
    let redVal = 0
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
        redVal = f(redVal, values[i])
    }
    return redVal
}

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))



// console.log(mapValues(nutrients, (v) => v+1))


// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }