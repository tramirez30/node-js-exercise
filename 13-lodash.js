const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

// Built in method from 'lodash'
// Flattens array
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Nodemon is watching");
