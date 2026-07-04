"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var c=v(function(C,i){
var E=require('@stdlib/string-base-capitalize/dist'),n=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),p=require('@stdlib/string-base-trim/dist'),A=/\s+/g,_=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,l=/(?:\s|^)([^\s]+)(?=\s|$)/g,o=/([a-z0-9])([A-Z])/g;function q(e,r){return E(n(r))}function s(e){return e=a(e,_," "),e=a(e,A," "),e=a(e,o,"$1 $2"),e=p(e),a(e,l,q)}i.exports=s
});var t=c();module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
