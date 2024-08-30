
const indexOf = (arr, item, n) => {
    // arr.indexOf(item);
    if (Boolean(n)) {
        let indx = -1
        for (let i = 0; i < arr.length; i++) {
            if (i >= n) {
                if (item === arr[i]) {
                    indx = i
                }
            }
        }
        return indx
    }

    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i
        }
    }
    return -1
}


const lastIndexOf = (arr, item) => {
    // arr.lastIndexOf(item)
    for (let i = 0; i < arr.length; i++) {
        let indx = -1
        if (item === arr[i]) {
            indx = i
        }
    }
    return indx
}

const includes = (arr, item) => {
    // arr.includes(item)
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return true
        }
    }
    return false
}
// var t;
// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
// console.log(indexOf([t, 0, 0, t], t, 2))
// console.log(indexOf([t, 0, 0, t], t, 1))
