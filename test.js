const assert = require("node:assert");
const { greet, farewell } = require("./index.js");

assert.strictEqual(greet("Ada"), "Hello, Ada!");
assert.strictEqual(farewell("Ada"), "Goodbye, Ada!");
console.log("ok");
