(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(h,i(i({ref:t},s),{},{components:n})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(251)),p={title:'Litho "Required Props"',description:"Checks that all non-optional `@Prop`s have been specified when constructing Litho components."},i={unversionedId:"checker-litho-required-props",id:"version-1.1.0/checker-litho-required-props",isDocsHomePage:!1,title:'Litho "Required Props"',description:"Checks that all non-optional `@Prop`s have been specified when constructing Litho components.",source:"@site/versioned_docs/version-1.1.0/checker-litho-required-props.md",slug:"/checker-litho-required-props",permalink:"/docs/checker-litho-required-props",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"AST Language (AL)",permalink:"/docs/checker-linters"},next:{title:"Liveness",permalink:"/docs/checker-liveness"}},c=[{value:"What are required Props?",id:"what-are-required-props",children:[]},{value:"Examples",id:"examples",children:[]},{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],s={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Checks that all non-optional ",Object(a.b)("inlineCode",{parentName:"p"},"@Prop"),"s have been specified when constructing Litho components."),Object(a.b)("p",null,"Activate with ",Object(a.b)("inlineCode",{parentName:"p"},"--litho-required-props"),"."),Object(a.b)("p",null,"Supported languages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"C/C++/ObjC: No"),Object(a.b)("li",{parentName:"ul"},"Java: Yes"),Object(a.b)("li",{parentName:"ul"},"C#/.Net: Yes")),Object(a.b)("p",null,"This analysis checks that all non-optional ",Object(a.b)("a",{parentName:"p",href:"https://fblitho.com/docs/props"},Object(a.b)("inlineCode",{parentName:"a"},"@Prop")),"`s have been specified when constructing Litho components. This is a ",Object(a.b)("a",{parentName:"p",href:"https://fblitho.com/"},"Litho")," specific checker."),Object(a.b)("h2",{id:"what-are-required-props"},"What are required Props?"),Object(a.b)("p",null,"In a nutshell, a Litho Component is essentially a class that defines immutable inputs, called prop (annotated with ",Object(a.b)("inlineCode",{parentName:"p"},"@Prop"),") in component hierarchy methods. For each Component there is a corresponding spec class which defines the required props:. E.g:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"class MyComponentSpec {\n\n  static void onCreate(\n      ComponentContext c,\n      @Prop(optional = true) String prop1, @Prop int prop2) {\n    ...\n  }\n  ...\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MyComponentSpec")," defines two props: a String prop called ",Object(a.b)("inlineCode",{parentName:"p"},"prop1")," and an int prop named ",Object(a.b)("inlineCode",{parentName:"p"},"prop2"),". For each prop defined on the spec, the annotation processor creates a builder pattern method that has the same name as the prop."),Object(a.b)("p",null,"Developers pass down values for these props by calling the appropriate methods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'MyComponent.create(c)\n    .prop1("My prop 1")\n    .prop2(256)\n    .build();\n')),Object(a.b)("p",null,"If the required props are not called, then annotation processor throws an exception in run time. This is really bad and that's where this checker comes into play to detect such cases statically."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"E.g. the following is caught as ",Object(a.b)("a",{parentName:"p",href:"/docs/all-issue-types#missing_required_prop"},"MISSING_REQUIRED_PROP")," ",Object(a.b)("inlineCode",{parentName:"p"},"prop2"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'MyComponent.create(c)\n    .prop1("My prop 1")\n    .build();\n')),Object(a.b)("p",null,"The following is ok though since ",Object(a.b)("inlineCode",{parentName:"p"},"prop1")," is optional."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"MyComponent.create(c)\n    .prop2(8)\n    .build();\n")),Object(a.b)("p",null,"Note that, the functions ",Object(a.b)("inlineCode",{parentName:"p"},"create()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"build()")," could be defined in different methods and there could be various function calls, aliasing, and control flow patterns in between. Hence, this checker is inter-procedural."),Object(a.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(a.b)("p",null,"The following issue types are reported by this checker:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/all-issue-types#missing_required_prop"},"MISSING_REQUIRED_PROP"))))}l.isMDXComponent=!0}}]);