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

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log("Await Resolved:", first, second);
  } catch (error) {
    console.log("Error:", error);
  }
};

start();

// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
