!function(){"use strict";var e,t,r,n,o,c={},f={};function u(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return c[e](r,r.exports,u),r.exports}u.m=c,e=[],u.O=function(t,r,n,o){if(!r){var c=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var f=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(u.O).every((function(e){return u.O[e](r[i])}))?r.splice(i--,1):(f=!1,o<c&&(c=o));if(f){e.splice(s--,1);var a=n();void 0!==a&&(t=a)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var f=2&n&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},u.d(o,c),o},u.d=function(e,t){for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,r){return u.f[r](e,t),t}),[]))},u.u=function(e){return({501:"component---src-pages-contact-js",678:"component---src-pages-index-js",682:"component---src-pages-about-js",769:"component---src-pages-projects-strapi-project-title-js",853:"component---src-pages-projects-js",878:"component---src-pages-recipes-js",883:"component---src-pages-404-js",908:"a68285f79f4793ac3eb4cfec9bda1360cf8cca9f",933:"ffed234b14afed4e659f6011fc530c4f79c66bd9"}[e]||e)+"-"+{501:"04d8288dd98c12c77c51",678:"4f4c90460158d1194bb9",682:"f26a8dc7d1e44a7da27f",731:"d514c11a3e170a503556",769:"0bca5e4863c868120f0c",843:"ec4302638027797cca24",853:"dc834e2a46a32132782a",878:"639225004dfe7ce61b37",883:"549a19819c406b2be556",908:"564a1ba5d64a35a29916",933:"a389a0967214dbb6b6bd"}[e]+".js"},u.miniCssF=function(e){return"styles.1a6801ddd879113e09e1.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="gatsby-starter-hello-world:",u.l=function(e,t,r,c){if(n[e])n[e].push(t);else{var f,i;if(void 0!==r)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){f=l;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.setAttribute("data-webpack",o+r),f.src=e),n[e]=[t];var d=function(t,r){f.onerror=f.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),i&&document.head.appendChild(f)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",function(){var e={658:0,532:0};u.f.j=function(t,r){var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var c=u.p+u.u(t),f=new Error;u.l(c,(function(r){if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,c=r[0],f=r[1],i=r[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(n in f)u.o(f,n)&&(u.m[n]=f[n]);if(i)var s=i(u)}for(t&&t(r);a<c.length;a++)o=c[a],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(s)},r=self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();
//# sourceMappingURL=webpack-runtime-828b7c025f1781ac825a.js.map