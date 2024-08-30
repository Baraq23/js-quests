
const indexOf = (arr, item, n) => {
    if (n !== undefined) {
        for (let i = n; i < arr.length; i++) {
            if (item === arr[i]) {
                return i
            }
        }
        return -1
    }

    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, item, n) => {
    if (n !== undefined) {
        for (let i = n; i >= 0; i--) {
            if (item === arr[i]) {
                return i
            }
        }
        return -1
    }

    let indx = -1
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            indx = i
        }
    }
    return indx
}

const includes = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return true
        }
    }
    return false
}


// var t;
// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2, 2))
// console.log(indexOf([t, 0, 0, t], t, 2))
// // console.log(indexOf([t, 0, 0, t], t, 1))
// console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 5))
// console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
