//     UnderscoreContains
//     (c) simonfan
//     UnderscoreContains is licensed under the MIT terms.

define(["underscore"],function(e){function t(t,n){return e.all(n,function(n){return e.contains(t,n)})}function n(t,n){return e.any(n,function(n){return e.contains(t,n)})}function r(e,t){return e[0]<t&&t<e[1]}function i(e,t){return e[0]<=t&&t<=e[1]}function s(t,n,s){var o=s?r:i;return o=e.partial(o,t),e.isArray(n)?e.every(n,o):o(n)}return e.mixin({containsAll:t,containsAny:n,between:s}),e});