!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},a=e.split(o),u=i.decode||n,f=0;f<a.length;f++){var p=a[f],c=p.indexOf("=");if(!(c<0)){var l=p.substr(0,c).trim(),d=p.substr(++c,p.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),null==r[l]&&(r[l]=s(d,u))}}return r},t.serialize=function(e,t,r){var n=r||{},o=n.encode||i;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var u=e+"="+s;if(null!=n.maxAge){var f=n.maxAge-0;if(isNaN(f)||!isFinite(f))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(f)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");u+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");u+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(u+="; HttpOnly");n.secure&&(u+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var n=decodeURIComponent,i=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(t){return e}}},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n);addEventListener("fetch",e=>{e.respondWith(async function(e){const t=e.request.headers.get("Cookie");i.a.parse(t);return new Response("Hello workers",{status:200})}(e))})}]);