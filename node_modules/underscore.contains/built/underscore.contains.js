//     UnderscoreContains
//     (c) simonfan
//     UnderscoreContains is licensed under the MIT terms.

define("underscore.contains",["underscore"],function(n){function r(r,t){return n.all(t,function(t){return n.contains(r,t)})}function t(r,t){return n.any(t,function(t){return n.contains(r,t)})}function e(n,r){return n[0]<r&&r<n[1]}function i(n,r){return n[0]<=r&&r<=n[1]}function u(r,t,u){var c=u?e:i;return c=n.partial(c,r),n.isArray(t)?n.every(t,c):c(t)}return n.mixin({containsAll:r,containsAny:t,between:u}),n});