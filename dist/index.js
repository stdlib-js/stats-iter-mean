"use strict";var u=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var t=u(function(l,i){
var n=require('@stdlib/assert-is-iterator-like/dist'),v=require('@stdlib/stats-incr-mean/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function o(a){var e,r;if(!n(a))throw new TypeError(s('1Kh3w',a));for(e=v();r=a.next(),!r.done;)typeof r.value=="number"?e(r.value):e(NaN);return e()}i.exports=o
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
