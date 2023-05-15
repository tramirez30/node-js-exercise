// File System (FS) -- Async

const { readFile, writeFile } = require("fs");

// Async -- Need to provide a callback()
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile(
      "./content/fourth-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log("Done with task");
      }
    );
  });
});
console.log("Starting next task");
