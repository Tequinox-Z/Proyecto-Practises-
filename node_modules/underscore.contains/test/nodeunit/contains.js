'use strict';

/*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
        test.expect(numAssertions)
        test.done()
    Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
*/

exports.containsAll = function (t) {

    var _ = require('../../src/underscore.contains');

    var container = ['a','b','e','ffff'];

    t.ok(_.containsAll(container, ['b','ffff']));
    t.ok(!_.containsAll(container, ['o','b','e']));

    t.done();
};

exports.containsAny = function (t) {

    var _ = require('../../src/underscore.contains');

    var container = ['a','b','e','ffff'];

    t.ok(_.containsAny(container, ['i','b','lalsldlas']));
    t.ok(!_.containsAny(container, ['u','i','o']));

    t.done();
};

