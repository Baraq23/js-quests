
const indexOf = (arr, item) => {
    // arr.indexOf(item);
    for (let i = arr.length; i > 0; i--) {
        if (item === arr[i]) {
            return i
        }
    }
    return -1
}


const lastIndexOf = (arr, item) => {
    // arr.lastIndexOf(item)
    for (let i = arr.length; i > 0; i--) {
        let indx = -1
        if (item === arr[i]) {
            indx = i
        }
    }
    return indx
}

const includes = (arr, item) => {
    // arr.includes(item)
    for (let i = arr.length; i > 0; i--) {
        if (item === arr[i]) {
            return true
        }
    }
    return false
}
