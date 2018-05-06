/*jslint
    node
*/

// http://www.jslint.com/help.html
const assert = require("assert");

function makeGreeting() {
    "use strict";
    return "Hello world!";
}

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting(), "Hello Mike!");
console.log("All tests have passed");
