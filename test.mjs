/*jslint
    node
*/

// http://www.jslint.com/help.html
import assert from "assert";

function makeGreeting(name = "world") {
    return "Hello " + name + "!";
}

assert.strictEqual(makeGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Mike"), "Hello Mike!");
console.log("All tests have passed");
