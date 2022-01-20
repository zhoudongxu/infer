(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(254)),a=["components"],c={title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."},s={unversionedId:"checker-inefficient-keyset-iterator",id:"version-1.0.0/checker-inefficient-keyset-iterator",isDocsHomePage:!1,title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly.",source:"@site/versioned_docs/version-1.0.0/checker-inefficient-keyset-iterator.md",slug:"/checker-inefficient-keyset-iterator",permalink:"/docs/1.0.0/checker-inefficient-keyset-iterator",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Impurity",permalink:"/docs/1.0.0/checker-impurity"},next:{title:"AST Language (AL)",permalink:"/docs/1.0.0/checker-linters"}},u=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."),Object(o.b)("p",null,"Activate with ",Object(o.b)("inlineCode",{parentName:"p"},"--inefficient-keyset-iterator"),"."),Object(o.b)("p",null,"Supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"C/C++/ObjC: No"),Object(o.b)("li",{parentName:"ul"},"Java: Yes")),Object(o.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(o.b)("p",null,"The following issue types are reported by this checker:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#inefficient_keyset_iterator"},"INEFFICIENT_KEYSET_ITERATOR"))))}p.isMDXComponent=!0},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=n,b=p["".concat(a,".").concat(y)]||p[y]||f[y]||o;return r?i.a.createElement(b,c(c({ref:t},u),{},{components:r})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);