(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{189:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return f}));var t=r(3),o=r(7),a=(r(0),r(251)),i=r(252),c={id:"man-infer-help",title:"infer help"},u={unversionedId:"man-infer-help",id:"version-1.0.0/man-infer-help",isDocsHomePage:!1,title:"infer help",source:"@site/versioned_docs/version-1.0.0/man-infer-help.md",slug:"/man-infer-help",permalink:"/docs/1.0.0/man-infer-help",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"infer explore",permalink:"/docs/1.0.0/man-infer-explore"},next:{title:"infer report",permalink:"/docs/1.0.0/man-infer-report"}},p=[],l={toc:p};function f(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)(i.a,{url:"/man/1.0.0/infer-help.1.html",mdxType:"HtmlWrap"}))}f.isMDXComponent=!0},251:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},f=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=t,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?o.a.createElement(d,c(c({ref:n},p),{},{components:r})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},252:function(e,n,r){"use strict";r.d(n,"a",(function(){return a}));var t=r(0),o=r.n(t);function a(e){var n=e.url,r=Object(t.useState)({__html:""}),a=r[0],i=r[1];return Object(t.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){return i({__html:e})}))}),[n]),o.a.createElement("div",{dangerouslySetInnerHTML:a})}}}]);