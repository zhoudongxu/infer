(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(254)),a=["components"],c={title:"Impurity",description:'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.'},s={unversionedId:"checker-impurity",id:"version-1.1.0/checker-impurity",isDocsHomePage:!1,title:"Impurity",description:'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.',source:"@site/versioned_docs/version-1.1.0/checker-impurity.md",slug:"/checker-impurity",permalink:"/docs/checker-impurity",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"Immutable Cast",permalink:"/docs/checker-immutable-cast"},next:{title:"Inefficient keySet Iterator",permalink:"/docs/checker-inefficient-keyset-iterator"}},u=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],p={toc:u};function l(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.'),Object(o.b)("p",null,"Activate with ",Object(o.b)("inlineCode",{parentName:"p"},"--impurity"),"."),Object(o.b)("p",null,"Supported languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"C/C++/ObjC: Experimental"),Object(o.b)("li",{parentName:"ul"},"Java: Experimental"),Object(o.b)("li",{parentName:"ul"},"C#/.Net: Experimental")),Object(o.b)("p",null,"This is an experimental inter-procedural analysis that detects impure functions. It is meant to be an improvement over the ",Object(o.b)("a",{parentName:"p",href:"/docs/checker-purity"},"purity")," analysis with a negation on the issue types. For each function, impurity analysis keeps track of not only the impurity of the function but also some additional information such as which parameters/globals the function modifies. It models functions with no summary/model as impure. The analysis relies on ",Object(o.b)("a",{parentName:"p",href:"/docs/checker-pulse"},"Pulse")," summaries to determine impurity."),Object(o.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(o.b)("p",null,"The following issue types are reported by this checker:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/all-issue-types#impure_function"},"IMPURE_FUNCTION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/all-issue-types#modifies_immutable"},"MODIFIES_IMMUTABLE"))))}l.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,b=l["".concat(a,".").concat(f)]||l[f]||m[f]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);