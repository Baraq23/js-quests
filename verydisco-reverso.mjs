import { readFile } from 'node:fs/promises';

let filename = process.argv[2]

// console.log("half", half)
try {
    let contents = await readFile(filename, { encoding: 'utf8' })
    reverse(contents)
} catch (error) {
    console.log("Error found catched!")
}


function reverse(word) {

    let oarr = word.split(" ")
    let narr = []



    for (let i = 0; i < oarr.length; i++) {
        let w = oarr[i]
        let arr = []
        let half = Math.floor(w.length / 2)

        arr.push(w.slice(0, half))
        w = w.slice(half)
        arr.push(w)

        let nStr = ""
        for (let i = arr.length - 1; i >= 0; i--) {
            nStr += arr[i]
        }
        narr.push(nStr)
    }

    let newStr = narr.join(' ')

    console.log(newStr)
}
