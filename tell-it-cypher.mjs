import { readFile, writeFile } from "fs/promises";
let file = process.argv[2];
let keyword = process.argv[3];
let filename = process.argv[4];
const fileData = await readFile(file, "utf8");

if (keyword === "encode") {
  if (filename === undefined) {
    filename = "cypher.txt";
  }
  const base64data = Buffer.from(fileData).toString("base64");
  await writeFile(filename, base64data);
} else if (keyword === "decode") {
  if (filename === undefined) {
    filename = "clear.txt";
  }
  const decodedData = Buffer.from(fileData, "base64").toString("utf8");
  await writeFile(filename, decodedData);
} else {
  console.error("Invalid keyword. Use 'encode' or 'decode'.");
}