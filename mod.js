// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,i,y,l;if(null==t)return r.call(t);a=t[e],l=e,o=null!=(y=t)&&n.call(y,l);try{t[e]=void 0}catch(n){return r.call(t)}return i=r.call(t),o?t[e]=a:delete t[e],i}:function(t){return r.call(t)},i="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var l="function"==typeof Uint32Array?Uint32Array:void 0;var f=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(i&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?l:function(){throw new Error("not implemented")};export{f as default};
//# sourceMappingURL=mod.js.map
