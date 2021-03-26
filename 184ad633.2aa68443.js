(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{251:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,d=p["".concat(a,".").concat(f)]||p[f]||b[f]||c;return t?o.a.createElement(d,i(i({ref:r},u),{},{components:t})):o.a.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(0),t(251)),a={title:"Resource Leak checker for .NET",description:'"resource leak" checker for .NET.'},i={unversionedId:"checker-dotnet-resource-leak",id:"version-1.1.0/checker-dotnet-resource-leak",isDocsHomePage:!1,title:"Resource Leak checker for .NET",description:'"resource leak" checker for .NET.',source:"@site/versioned_docs/version-1.1.0/checker-dotnet-resource-leak.md",slug:"/checker-dotnet-resource-leak",permalink:"/docs/checker-dotnet-resource-leak",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"Resource Leak Lab Exercise",permalink:"/docs/checker-resource-leak-lab"},next:{title:"Static Initialization Order Fiasco",permalink:"/docs/checker-siof"}},l=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],u={toc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,'"resource leak" checker for .NET.'),Object(c.b)("p",null,"Activate with ",Object(c.b)("inlineCode",{parentName:"p"},"--dotnet-resource-leak"),"."),Object(c.b)("p",null,"Supported languages:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"C/C++/ObjC: No"),Object(c.b)("li",{parentName:"ul"},"Java: No"),Object(c.b)("li",{parentName:"ul"},"C#/.Net: Yes")),Object(c.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(c.b)("p",null,"The following issue types are reported by this checker:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/all-issue-types#dotnet_resource_leak"},"DOTNET_RESOURCE_LEAK"))))}s.isMDXComponent=!0}}]);