import { writeFile } from 'node:fs/promises';

let word = process.argv[2]
// console.log("half", half)
let oarr = word.split(" ")
let narr = []



for (let i = 0; i < oarr.length; i++) {
    let w = oarr[i]
    let arr = []
    let half = Math.ceil(w.length / 2)


    for (let i = 0; true; i++) {
        if (w.length == 0) {
            break
        }
        if (w.length > half) {
            arr.push(w.slice(0, half))
            w = w.slice(half)
        }
        if (w.length <= half) {
            arr.push(w.slice(0, half))
            w = ''
        }
    }
    let nStr = ""
    for (let i = arr.length - 1; i >= 0; i--) {
        nStr += arr[i]
    }
    narr.push(nStr)
}

let newStr = narr.join(' ')

try {
    await writeFile('verydisco-forever.txt', newStr)
} catch (error) {
    console.log("Error found catched!")
}