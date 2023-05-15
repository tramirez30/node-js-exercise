// Path Module
const path = require("path");

// Separator Platform
console.log("Separator:", path.sep);

// Join Method
const filePath = path.join("/content", "subfolder", "test.txt");
console.log("File Path:", filePath);

// Access last portion of the filePath
const base = path.basename(filePath);
console.log("Base:", base);

// Returns absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("Absolute:", absolute);
