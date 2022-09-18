import fs from "fs";

const file = fs.readFileSync("list.txt", "utf-8");

const maxVal = Math.max(...file.split(","));

console.log(maxVal);
