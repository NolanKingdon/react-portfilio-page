"use strict";var precacheConfig=[["/index.html","c7117d697aaddc4ebb4fd1fa5167235a"],["/static/css/main.cb57eb0b.css","a2d192ee1491fee19891ed5bb228b244"],["/static/js/main.8024e770.js","f98aeeea209a81d08aba1439cad3cfd4"],["/static/media/BVP-logo.d0bf88b2.png","d0bf88b2cd4a0a2e78782522db5f7c84"],["/static/media/Brock_logo.b96eb3af.png","b96eb3afd7abb0c165cad41b763a08fb"],["/static/media/GitHub-Logo.fc6ad95c.png","fc6ad95cab9c2e66d9750f367c52e8d3"],["/static/media/LinkedIn-Logo.bde6bafa.png","bde6bafafbe3c422b1ae28ea79f0d10c"],["/static/media/MITOCW.c7c208bc.png","c7c208bc7d9bf623bba51bf5a902802d"],["/static/media/Mohawk.bf276093.png","bf276093b9f0a8b8f2887b4a043ca71c"],["/static/media/PS-logo.aeea952a.png","aeea952a3d56c876daa4a46a16c0ee29"],["/static/media/calc.fbc54991.jpg","fbc54991c35fd0e699f2c847158557dc"],["/static/media/general.8f0216a8.scss","8f0216a8bfa7fd1f3443e687a9d3b2e1"],["/static/media/moonphase.31017c26.PNG","31017c26ef98079bb6e62279d68ce04e"],["/static/media/nav-icon-code-white.fd129cf2.png","fd129cf2f9be1686b5facfd3527143ce"],["/static/media/nav-icon-grad-cap-white.3e0067d4.png","3e0067d43c81c040ef9678744c4c2b75"],["/static/media/nav-icon-person-white.8405fad9.png","8405fad9928b60611d43190f26a5ea04"],["/static/media/php-mysql.97df3059.png","97df3059369fffceebc3e77f97a791fc"],["/static/media/pokemon.aae51ce6.png","aae51ce699529e105cfa10b4bc20dd61"],["/static/media/react.580ffd26.png","580ffd26ccaa16481ed87c1829c74943"],["/static/media/udemy-logo.a1f41458.png","a1f41458b55cf68f4597b215254a9050"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});