(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return u})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(254)),c=r(255),i=["components"],u={id:"man-infer-explore",title:"infer explore"},l={unversionedId:"man-infer-explore",id:"man-infer-explore",isDocsHomePage:!1,title:"infer explore",source:"@site/docs/man-infer-explore.md",slug:"/man-infer-explore",permalink:"/docs/next/man-infer-explore",version:"current",sidebar:"docs",previous:{title:"infer debug",permalink:"/docs/next/man-infer-debug"},next:{title:"infer help",permalink:"/docs/next/man-infer-help"}},p=[],f={toc:p};function s(e){var n=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},f,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)(c.a,{url:"/man/next/infer-explore.1.html",mdxType:"HtmlWrap"}))}s.isMDXComponent=!0},254:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},f=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=t,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?o.a.createElement(d,i(i({ref:n},l),{},{components:r})):o.a.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},255:function(e,n,r){"use strict";r.d(n,"a",(function(){return a}));var t=r(0),o=r.n(t);function a(e){var n=e.url,r=Object(t.useState)({__html:""}),a=r[0],c=r[1];return Object(t.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){return c({__html:e})}))}),[n]),o.a.createElement("div",{dangerouslySetInnerHTML:a})}}}]);