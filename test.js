/*jslint
    node
*/

// http://www.jslint.com/help.html
const assert = require("assert");

function makeGreeting() {
    "use strict";
    return undefined;
}

assert.strictEqual(makeGreeting(), "Hello world!");
