"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[934],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},7059:function(e,t,r){r.d(t,{G:function(){return _},L:function(){return f},M:function(){return L},P:function(){return E},S:function(){return W},_:function(){return o},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return l}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=o(e,p);return a.createElement(a.Fragment,null,a.createElement(g,s({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=o(e,h);return a.createElement("img",s({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},w=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=o(e,v),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,s({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],E=function(e){var t=e.fallback,r=o(e,b);return t?a.createElement(w,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(m=w.propTypes)?void 0:m.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var L=function(e){return a.createElement(a.Fragment,null,a.createElement(w,s({},e)),a.createElement("noscript",null,a.createElement(w,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=w.propTypes;var C,k,N=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:i().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],I=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=o(e,S),v=i.width,y=i.height,w=i.layout,b=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,w),E=b.style,L=b.className,N=o(b,x),j=(0,a.useRef)(),T=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var _=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,v,y);return(0,a.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(680)]).then(r.bind(r,8680)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=j.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(T)):k&&I.has(T)?void 0:(C.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;j.current&&(j.current.innerHTML=a(s({isLoading:!0,isLoaded:I.has(T),image:i},h)),I.has(T)||(e=requestAnimationFrame((function(){j.current&&(t=n(j.current,T,I,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){I.has(T)&&k&&(j.current.innerHTML=k(s({isLoading:I.has(T),isLoaded:I.has(T),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(n,s({},N,{style:s({},E,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},_=(0,a.memo)((function(e){return e.image?(0,a.createElement)(T,e):null}));_.propTypes=j,_.displayName="GatsbyImage";var O,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],A=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:N,width:A,height:A,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},W=(O=_,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=o(e,q);return n&&console.warn(n),r?a.createElement(O,s({image:r},i)):(console.warn("Image not loaded",t),null)});W.displayName="StaticImage",W.propTypes=z},3702:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(3260),i=r(7059),s=r(3201),o=r(1597),l=function(e){var t=e.description,r=e.title,n=(e.github,e.stack),l=e.url,c=e.image,u=e.index,d=e.slug;return a.createElement("article",{className:"project"},a.createElement(i.G,{image:(0,i.c)(c.localFile),className:"project-img",alt:r}),a.createElement("div",{className:"project-info"},a.createElement("span",{className:"project-number"},"0",u+1,"."),a.createElement(o.rU,{to:"/projects/"+d,className:"project-slug"},a.createElement("h3",null,r)),a.createElement("p",{className:"project-desc"},t),a.createElement("div",{className:"project-stack"},n.map((function(e){return a.createElement("span",{key:e.id},e.title)}))),a.createElement("div",{className:"project-links"},a.createElement("a",{href:l},a.createElement(s.NML,{className:"project-icon"})),a.createElement("a",{href:l},a.createElement(s.ZH2,{className:"project-icon"})))))},c=function(e){var t=e.projects,r=e.title,i=e.showLink;return a.createElement("section",{className:"section projects"},a.createElement(n.Z,{title:r}),a.createElement("div",{className:"section-center projects-center"},t.map((function(e,t){return a.createElement(l,Object.assign({key:e.id,index:t},e))}))),i&&a.createElement(o.rU,{to:"/projects",className:"btn center-btn"},"projects"))}},3260:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.title;return a.createElement("div",{className:"section-title"},a.createElement("h2",null,t||"default title"),a.createElement("div",{className:"underline"}))}}}]);
//# sourceMappingURL=c169b6902947a77fec05096cb4da441bfcc3d6f1-575a7a8d4c182a5f71e0.js.map