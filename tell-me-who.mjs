import { readdir } from "node:fs/promises";

let path = process.argv[2]

if (!path) {
    path = process.cwd()
}

const data = await readdir(path, "utf8")
let arr = []

for (let i = 0; i <= data.length - 1; i++) {
    let s = data[i].replace(/\.json$/, "") 
    let a = s.split("_")
    arr.push(a[1] + " " + a[0])
}

arr.sort()

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(String(i + 1) + ". " + arr[i])
}