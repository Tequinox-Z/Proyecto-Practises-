//     UnderscoreDeep
//     (c) simonfan
//     UnderscoreDeep is licensed under the MIT terms.

define(["underscore"],function(e){e.mixin({deep:function(t,n,r){var i=n.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split("."),s,o=0,u=i.length;if(arguments.length>2){s=t,u--;while(o<u)n=i[o++],t=t[n]=e.isObject(t[n])?t[n]:{};t[i[o]]=r,r=s}else{while((t=t[i[o++]])!=null&&o<u);r=o<u?void 0:t}return r}})});