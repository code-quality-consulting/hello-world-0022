/*jslint
    node
*/

// http://www.jslint.com/help.html
const assert = require("assert");

function makeGreeting(name) {
    if (name) {
        return "Hello " + name + "!";
    }
    "use strict";
    return "Hello world!";
}

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("All tests have passed");
