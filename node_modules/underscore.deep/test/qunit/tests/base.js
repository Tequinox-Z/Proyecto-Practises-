define(['underscore.deep'], function(UnderscoreDeep) {

	return function() {

	    module('Base');

	    test('Base', function() {
	        var obj = {
	            a: {
	             b: {
	               c: {
	                 d: ['e', 'f', 'g']
	               }
	             }
	            }
	        };

	        //Get deep value
	        equal( _.deep(obj, 'a.b.c.d[2]'), 'g');

	        //Set deep value
	        _.deep(obj, 'a.b.c.d[2]', 'george');

	        equal( _.deep(obj, 'a.b.c.d[2]'), 'george');
	    });

	}
});
