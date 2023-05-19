const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/first.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Before without promise - this method become messy with callback hell
// readFile("./content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

// Solution to creating more readFile or writeFile methods
// Using Promise to clean up the code vs callback hell!
