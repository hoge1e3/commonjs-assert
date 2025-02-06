import * as assert from "../assert.js";
console.log(1,assert);
console.log(2,assert.default);
console.log(3,assert.ok);
console.log(4,assert.default.ok);
console.log(5,assert.ok===assert.default.ok);
globalThis.assert = assert;
assert.ok(true);
assert.ok(false,"FAILED!");