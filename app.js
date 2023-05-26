const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/new-text-file.txt",
      `This is a new file!: ${first} ${second}`,
      { flag: "a" }
    );
    console.log("Await Resolved:", first, second);
  } catch (error) {
    console.log("Error:", error);
  }
};

start();

// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// Timestamp 3:12:48
