(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(254)),o=["components"],c={title:"Annotation Reachability",description:"Given a pair of source and sink annotation, e.g. `@PerformanceCritical` and `@Expensive`, this checker will warn whenever some method annotated with `@PerformanceCritical` calls, directly or indirectly, another method annotated with `@Expensive`"},l={unversionedId:"checker-annotation-reachability",id:"version-1.0.0/checker-annotation-reachability",isDocsHomePage:!1,title:"Annotation Reachability",description:"Given a pair of source and sink annotation, e.g. `@PerformanceCritical` and `@Expensive`, this checker will warn whenever some method annotated with `@PerformanceCritical` calls, directly or indirectly, another method annotated with `@Expensive`",source:"@site/versioned_docs/version-1.0.0/checker-annotation-reachability.md",slug:"/checker-annotation-reachability",permalink:"/docs/1.0.0/checker-annotation-reachability",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"List of all issue types",permalink:"/docs/1.0.0/all-issue-types"},next:{title:"Biabduction",permalink:"/docs/1.0.0/checker-biabduction"}},s=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Given a pair of source and sink annotation, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"@PerformanceCritical")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@Expensive"),", this checker will warn whenever some method annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@PerformanceCritical")," calls, directly or indirectly, another method annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@Expensive")),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--annotation-reachability"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(i.b)("li",{parentName:"ul"},"Java: Yes")),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#checkers_allocates_memory"},"CHECKERS_ALLOCATES_MEMORY")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#checkers_annotation_reachability_error"},"CHECKERS_ANNOTATION_REACHABILITY_ERROR")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#checkers_calls_expensive_method"},"CHECKERS_CALLS_EXPENSIVE_METHOD")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#checkers_expensive_overrides_unannotated"},"CHECKERS_EXPENSIVE_OVERRIDES_UNANNOTATED"))))}u.isMDXComponent=!0}}]);