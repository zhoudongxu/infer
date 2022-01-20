(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(254)),i=["components"],c={title:"OCamlFormat open-source released",author:"Josh Berdine"},l={permalink:"/blog/2017/10/20/ocamlformat-released",source:"@site/blog/2017-10-20-ocamlformat-released.md",description:"We are pleased to announce the first public release of OCamlFormat.",date:"2017-10-20T00:00:00.000Z",formattedDate:"October 20, 2017",tags:[],title:"OCamlFormat open-source released",readingTime:.76,truncated:!1,nextItem:{title:"Video of @Scale2016 talk. Getting the most out of static analyzers",permalink:"/blog/2016/11/28/atscale16"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We are pleased to announce the first public release of OCamlFormat."),Object(a.b)("p",null,"OCamlFormat is a tool to automatically format ",Object(a.b)("a",{parentName:"p",href:"https://ocaml.org/"},"OCaml")," code.\nIt follows the same basic design as refmt for\n",Object(a.b)("a",{parentName:"p",href:"https://reasonml.github.io/"},"Reason")," code, but for OCaml. In particular, it\nworks by parsing source code using the OCaml compiler's standard parser,\ndeciding where to place comments in the parsetree, and printing the parsetree\nand comments in a uniform style."),Object(a.b)("p",null,"At Facebook, we currently use this for the OCaml code of\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/infer"},"Infer")," to enable developers to stop thinking\nabout line breaking, indentation, parenthesization, etc., to minimize stylistic\nnit-picking during code review, and to make it as visually obvious as possible\nwhen the parser's interpretation of code does not match the programmer's. We use\nthis both with integration with editors as well as a pre-commit hook."),Object(a.b)("p",null,"Development is taking place on\n",Object(a.b)("a",{parentName:"p",href:"http://github.com/ocaml-ppx/ocamlformat"},"github"),". License is MIT."),Object(a.b)("p",null,"See the ",Object(a.b)("a",{parentName:"p",href:"http://github.com/ocaml-ppx/ocamlformat"},"github page")," for more info on\ninstallation, documentation, contributing, etc."))}u.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);