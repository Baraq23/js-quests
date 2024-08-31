const reverse = (arr) => {
    let res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr instanceof Array) {
            res.push(arr[i])
        } else {
            res+=arr[i]
        }

    }
    return res
}


// console.log(reverse([1, 2, 3]))
// console.log(reverse("hellow"))