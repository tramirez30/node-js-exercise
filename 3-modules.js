// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require("./4-names");
const sayHi = require("./5-util");
const data = require("./6-alternative");

require("./7-complex");

sayHi("Bob");
sayHi(john);
sayHi(peter);
