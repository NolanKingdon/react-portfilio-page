"use strict";var precacheConfig=[["/index.html","a8b1340ec7556075db6321b7281ae014"],["/static/css/main.b913330d.css","b1f649517bc0be6279cd86c536deb279"],["/static/js/main.969d73ee.js","a6f835c51399e81e0febd6728b6b1f75"],["/static/media/BVP-logo.d0bf88b2.png","d0bf88b2cd4a0a2e78782522db5f7c84"],["/static/media/Brock_logo.b96eb3af.png","b96eb3afd7abb0c165cad41b763a08fb"],["/static/media/GitHub-Logo.fc6ad95c.png","fc6ad95cab9c2e66d9750f367c52e8d3"],["/static/media/LinkedIn-Logo.bde6bafa.png","bde6bafafbe3c422b1ae28ea79f0d10c"],["/static/media/MITOCW.c7c208bc.png","c7c208bc7d9bf623bba51bf5a902802d"],["/static/media/PS-logo.aeea952a.png","aeea952a3d56c876daa4a46a16c0ee29"],["/static/media/calc.fbc54991.jpg","fbc54991c35fd0e699f2c847158557dc"],["/static/media/nav-icon-code-white.fd129cf2.png","fd129cf2f9be1686b5facfd3527143ce"],["/static/media/nav-icon-grad-cap-white.3e0067d4.png","3e0067d43c81c040ef9678744c4c2b75"],["/static/media/nav-icon-person-white.8405fad9.png","8405fad9928b60611d43190f26a5ea04"],["/static/media/php-mysql.97df3059.png","97df3059369fffceebc3e77f97a791fc"],["/static/media/react.580ffd26.png","580ffd26ccaa16481ed87c1829c74943"],["/static/media/udemy-logo.a1f41458.png","a1f41458b55cf68f4597b215254a9050"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});