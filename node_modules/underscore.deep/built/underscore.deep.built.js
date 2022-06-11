//     UnderscoreDeep
//     (c) simonfan
//     UnderscoreDeep is licensed under the MIT terms.

define("underscore.deep",["underscore"],function(e){e.mixin({deep:function(n,r,i){var l,t=r.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split("."),c=0,o=t.length;if(arguments.length>2){for(l=n,o--;o>c;)r=t[c++],n=n[r]=e.isObject(n[r])?n[r]:{};n[t[c]]=i,i=l}else{for(;null!=(n=n[t[c++]])&&o>c;);i=o>c?void 0:n}return i}})});