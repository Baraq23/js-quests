import { readdir } from "fs/promises";

let path = process.argv[2]

if (!path) {
    path = process.cwd()
    // console.log(path)
}

try {
    let files = await readdir(path)
    console.log(files.length)
} catch (error) {
    console.error(error);
}
