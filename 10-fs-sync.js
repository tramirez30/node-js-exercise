// FS module (Sync)
// Destructure methods

const { readFileSync, writeFileSync } = require("fs");

// Same as:

// const fs = require("fs");
// fs.readFileSync

// Read file from the file system
// 2 Parameters (Path, Encoding)
// Encoding by default is utf8

console.log("Start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// Create new txt file
// 2 Parameters/Arguments
// (File Name, Value)
// 3rd parameter if you would like to append a value -- Object Value

writeFileSync(
  "./content/third.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("Done with this task");
console.log("Starting next one");
