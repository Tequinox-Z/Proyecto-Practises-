//     UnderscoreContains
//     (c) simonfan
//     UnderscoreContains is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module UnderscoreContains
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(['underscore'], function (_) {

	function containsAll(container, contained) {
		return _.all(contained, function (val) {
			return _.contains(container, val);
		});
	}

	function containsAny(container, contained) {
		return _.any(contained, function (val) {
			return _.contains(container, val);
		});
	}

	function exclusiveBetween(boundaries, item) {
		return boundaries[0] < item && item < boundaries[1];
	}

	function inclusiveBetween(boundaries, item) {
		return boundaries[0] <= item && item <= boundaries[1];
	}

	function between(boundaries, item, exclusive) {
		// determine which operator to use.
		var operator = exclusive ? exclusiveBetween : inclusiveBetween;

		// curry operator
		operator = _.partial(operator, boundaries);

		return _.isArray(item) ? _.every(item, operator) : operator(item);
	}

	_.mixin({
		containsAll: containsAll,
		containsAny: containsAny,
		between: between
	});

	return _;
});

