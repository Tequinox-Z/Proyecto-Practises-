define(['underscore.contains'], function(_) {

	return function() {

	    module('Contains');

	    test('containsAll', function() {
	        var container = ['a','b','e','ffff'];

	        ok(_.containsAll(container, ['b','ffff']));
	        ok(!_.containsAll(container, ['o','b','e']));
	    });

	    test('containsAny', function() {
	        var container = ['a','b','e','ffff'];

	        ok(_.containsAny(container, ['i','b','lalsldlas']));
	        ok(!_.containsAny(container, ['u','i','o']));
	    });

	}
});
