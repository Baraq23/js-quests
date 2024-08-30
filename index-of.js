
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

    for (let i = 0 - 1; i < arr.length; i++) {
        if (item === arr[i]) {
            return i
        }
    }
    return -1
}


const lastIndexOf = (arr, item, n) => {
    // arr.lastIndexOf(item)
    if (Boolean(n)) {
        let indx = -1
        for (let i = n; i > arr.length; i++) {
            if (item === arr[i]) {
                indx = i
            }
        }
        return indx
    }

    let indx2 = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (item === arr[i]) {
            return i
        }
    }
    return indx2
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
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
