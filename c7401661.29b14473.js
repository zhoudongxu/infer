(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(251)),l={title:"Pulse",description:"Memory and lifetime analysis."},c={unversionedId:"checker-pulse",id:"version-1.0.0/checker-pulse",isDocsHomePage:!1,title:"Pulse",description:"Memory and lifetime analysis.",source:"@site/versioned_docs/version-1.0.0/checker-pulse.md",slug:"/checker-pulse",permalink:"/docs/1.0.0/checker-pulse",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"`printf()` Argument Types",permalink:"/docs/1.0.0/checker-printf-args"},next:{title:"Purity",permalink:"/docs/1.0.0/checker-purity"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],o={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Memory and lifetime analysis."),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--pulse"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Experimental"),Object(i.b)("li",{parentName:"ul"},"Java: Experimental")),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#constant_address_dereference"},"CONSTANT_ADDRESS_DEREFERENCE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#memory_leak"},"MEMORY_LEAK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#nullptr_dereference"},"NULLPTR_DEREFERENCE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#optional_empty_access"},"OPTIONAL_EMPTY_ACCESS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#stack_variable_address_escape"},"STACK_VARIABLE_ADDRESS_ESCAPE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#use_after_delete"},"USE_AFTER_DELETE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#use_after_free"},"USE_AFTER_FREE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#use_after_lifetime"},"USE_AFTER_LIFETIME")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#vector_invalidation"},"VECTOR_INVALIDATION"))))}p.isMDXComponent=!0},251:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||i;return r?a.a.createElement(m,c(c({ref:t},o),{},{components:r})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);