importScripts("/precache-manifest.8328ee3c379087d2e9ec106711d2a3a0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(r){return e[r]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r(r.s="idKB")}({idKB:function(){self.__precacheManifest=[].concat(self.__precacheManifest||[]);var e=e=>"navigate"===e.request.mode;workbox.routing.registerRoute(r=>{var{event:t}=r;return e(t)},new workbox.strategies.NetworkFirst({cacheName:workbox.core.cacheNames.precache,networkTimeoutSeconds:5,plugins:[new workbox.cacheableResponse.Plugin({statuses:[200]})]})),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.setCatchHandler(r=>{var{event:t}=r;return e(t)?caches.match(workbox.precaching.getCacheKeyForURL("/index.html")):Response.error()})}});
//# sourceMappingURL=sw.js.map
