(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(251)),o={title:"Purity",description:'Detects pure (side-effect-free) functions. A different implementation of "impurity".'},s={unversionedId:"checker-purity",id:"version-1.0.0/checker-purity",isDocsHomePage:!1,title:"Purity",description:'Detects pure (side-effect-free) functions. A different implementation of "impurity".',source:"@site/versioned_docs/version-1.0.0/checker-purity.md",slug:"/checker-purity",permalink:"/docs/1.0.0/checker-purity",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Pulse",permalink:"/docs/1.0.0/checker-pulse"},next:{title:"Quandary",permalink:"/docs/1.0.0/checker-quandary"}},c=[{value:"Weaknesses",id:"weaknesses",children:[]},{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Detects pure (side-effect-free) functions. A different implementation of "impurity".'),Object(r.b)("p",null,"Activate with ",Object(r.b)("inlineCode",{parentName:"p"},"--purity"),"."),Object(r.b)("p",null,"Supported languages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C/C++/ObjC: Experimental"),Object(r.b)("li",{parentName:"ul"},"Java: Experimental")),Object(r.b)("p",null,"This is an experimental inter-procedural analysis that detects pure (side-effect free) functions. For each function, purity analysis keeps track of not only the purity of the function but also some additional information such as whether the function modifies a global variable or which of the parameters are modified. It models functions with no summary/model as modifying the global state (hence impure)."),Object(r.b)("p",null,"If the function is pure (i.e. doesn't modify any global state or its parameters and doesn't call any unknown functions), then it reports an ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0.0/all-issue-types#pure_function"},Object(r.b)("inlineCode",{parentName:"a"},"PURE_FUNCTION"))," issue."),Object(r.b)("h2",{id:"weaknesses"},"Weaknesses"),Object(r.b)("p",null,"There are two issues with the existing purity analysis:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In order to detect which parameters are modified, we need an alias analysis which is difficult to get right."),Object(r.b)("li",{parentName:"ul"},"Just keeping track of modified arguments doesn't suffice.")),Object(r.b)("p",null,"Too see the issue with the first point, consider the following simple program:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"void foo(Foo a){\n  Foo b = a;\n  b.x = 10; \n}\n")),Object(r.b)("p",null,"in order to determine that ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," is impure, we need to know that the write to ",Object(r.b)("inlineCode",{parentName:"p"},"b"),"'s field is actually changing the function parameter ",Object(r.b)("inlineCode",{parentName:"p"},"a"),", i.e. we need to check if ",Object(r.b)("inlineCode",{parentName:"p"},"b")," is aliasing ",Object(r.b)("inlineCode",{parentName:"p"},"a"),". This is known as alias analysis and is hard to get right in a scalable manner. When this analysis was being developed, Infer didn't have a unified alias analysis and using biabduction seemed like a too daunting task at the time. Hence, we relied on ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0.0/checker-bufferoverrun"},"InferBo"),"'s aliasing mechanism which was easy to invoke and integrate with. However, InferBo's aliasing analysis is far from perfect and causes issues for purity.\nTo see the issue with the second point, consider the following program:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"boolean contains(Integer i, ArrayList<Integer> list){\n  Iterator<Integer> listIterator = list.iterator();\n  while(listIterator.hasNext()) {\n    Integer el = listIterator.next();\n    if (i.equals(el)){\n      return true;\n    }\n  }\n  return false;\n }\n")),Object(r.b)("p",null,"The existing purity analysis concludes that the above function ",Object(r.b)("inlineCode",{parentName:"p"},"contains")," is impure because it calls an impure function ",Object(r.b)("inlineCode",{parentName:"p"},"next()")," which modifies the iterator (hence it thinks it also modifies the ",Object(r.b)("inlineCode",{parentName:"p"},"list"),"). However, notice that ",Object(r.b)("inlineCode",{parentName:"p"},"contains")," doesn't have an observable side-effect: ",Object(r.b)("inlineCode",{parentName:"p"},"list.iterator()")," returns a new object, ",Object(r.b)("inlineCode",{parentName:"p"},"hasNext()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"equals()")," are pure, and ",Object(r.b)("inlineCode",{parentName:"p"},"next()")," only modifies the fields of the fresh object ",Object(r.b)("inlineCode",{parentName:"p"},"listIterator"),".  Therefore, ",Object(r.b)("inlineCode",{parentName:"p"},"contains")," should be considered as pure."),Object(r.b)("p",null,"To alleviate this problem, we have developed an ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0.0/checker-impurity"},"Impurity")," analysis which uses ",Object(r.b)("a",{parentName:"p",href:"/docs/1.0.0/checker-pulse"},"pulse")," which can successfully analyze this program as pure \\o/"),Object(r.b)("p",null,"The analysis is used by:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/1.0.0/checker-loop-hoisting"},"Loop-hoisting")," analysis which identifies loop-invariant function calls, i.e. functions that are pure and have loop-invariant arguments. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/1.0.0/checker-cost"},"Cost")," analysis which identifies control variables in the loop that affect how many times a loop is executed. In this computation, we need to prune control variables that do not affect how many times a loop is executed. In this pruning step, we need to compute loop-invariant variables (which requires the above analysis).")),Object(r.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(r.b)("p",null,"The following issue types are reported by this checker:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/1.0.0/all-issue-types#pure_function"},"PURE_FUNCTION"))))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);