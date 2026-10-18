const assert = require("node:assert");
const { greet } = require("./index.js");

assert.strictEqual(greet("Ada"), "Hello, Ada!");
console.log("ok");
