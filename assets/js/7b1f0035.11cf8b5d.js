(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(254)),i=["components"],c={id:"about-Infer",title:"About Infer"},s={unversionedId:"about-Infer",id:"about-Infer",isDocsHomePage:!1,title:"About Infer",description:"Infer is a static program analyzer for Java, C, and Objective-C, written in",source:"@site/docs/02-about-infer.md",slug:"/about-Infer",permalink:"/docs/next/about-Infer",version:"current",sidebar:"docs",previous:{title:"Uninitialized Value",permalink:"/docs/next/checker-uninit"},next:{title:"Separation logic and bi-abduction",permalink:"/docs/next/separation-logic-and-bi-abduction"}},l=[],u={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Infer is a static program analyzer for Java, C, and Objective-C, written in\n",Object(o.b)("a",{parentName:"p",href:"https://ocaml.org/"},"OCaml"),". Infer is deployed within Facebook and it is running\ncontinuously to verify select properties of every code modification for the main\nFacebook apps for Android and iOS, Facebook Messenger, Instagram, and other\napps. It can be used for other code too: Infer can also analyze C code, and Java\ncode that is not Android. At present Infer is tracking problems caused by null\npointer dereferences and resource and memory leaks, which cause some of the more\nimportant problems on mobile."),Object(o.b)("p",null,"Infer came to Facebook with the acquisition of the verification startup\nMonoidics in 2013. Monoidics was itself based on recent academic research,\nparticularly on separation logic and bi-abduction."),Object(o.b)("p",null,"We have broadened Infer's scope within the past few years. We now refer to the\noriginal separation logic analysis as Infer.SL. We now also have Infer.AI, a\ngeneral analysis framework which is an interface to the modular analysis engine\nwhich can be used by other kinds of program analyses (technically, called\n''abstract interpretations'', hence the AI monicker). This added generality has\nbeen used to develop instantiations of Infer.AI for security, concurrency and in\nother domains. Additionally, we have Infer linters for describing shallow\nsyntactic analyses, using the AL language, because sometimes linters are just\nwhat you need."))}p.isMDXComponent=!0},254:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);