"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=u(function(g,i){
var v=require('@stdlib/string-base-capitalize/dist'),E=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),n=require('@stdlib/string-base-trim/dist'),p=/\s+/g,A=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,_=/(?:\s|^)([^\s]+)(?=\s|$)/g,l=/([a-z0-9])([A-Z])/g;function o(e,r){return v(E(r))}function q(e){return e=a(e,A," "),e=a(e,p," "),e=a(e,l,"$1 $2"),e=n(e),a(e,_,o)}i.exports=q
});var s=c();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
