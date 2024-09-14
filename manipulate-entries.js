const filterEntries = (obj, func) => {
    let n = {};

    for (let key in obj) {
        if (func([key, obj[key]])) {
            n[key] = obj[key];
        }
    }
    return n
}

const mapEntries = (obj, func) => {
    let arr = []
    let entries = Object.entries(obj)

    for (let i = 0 ; i < entries.length; i++) {
        arr.push(func(entries[i]))
    }
    return Object.fromEntries(arr)
}

const reduceEntries = (obj, func, acc) => {
    if (acc === undefined) {
        acc = 0
    }
    
    let entries = Object.entries(obj)

    for (let i = 0 ; i < entries.length; i++) {
        acc = func(acc, entries[i])
    }
    return acc
}

const totalCalories = (entries) => {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

const lowCarbs = (entries) => {
    return filterEntries(entries, (entry) => {let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];return parseInt(value) <= 50;});
}

const cartTotal = (entries) => {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}