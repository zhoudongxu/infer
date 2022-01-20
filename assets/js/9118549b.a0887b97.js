(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(254)),s=["components"],l={title:"Quandary",description:'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.'},c={unversionedId:"checker-quandary",id:"checker-quandary",isDocsHomePage:!1,title:"Quandary",description:'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.',source:"@site/docs/checker-quandary.md",slug:"/checker-quandary",permalink:"/docs/next/checker-quandary",version:"current",sidebar:"docs",previous:{title:"Purity",permalink:"/docs/next/checker-purity"},next:{title:"RacerD",permalink:"/docs/next/checker-racerd"}},o=[{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],u={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,s);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.'),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--quandary"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),Object(i.b)("li",{parentName:"ul"},"C#/.Net: No"),Object(i.b)("li",{parentName:"ul"},"Erlang: No"),Object(i.b)("li",{parentName:"ul"},"Java: Yes")),Object(i.b)("p",null,"Quandary is a static taint analyzer that identifies a variety of unsafe\ninformation flows. It has a small list of built-in\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/quandary/JavaTrace.ml#L36"},"sources"),"\nand\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/quandary/JavaTrace.ml#L178"},"sinks"),",\nand you can define custom sources and sinks in your ",Object(i.b)("inlineCode",{parentName:"p"},".inferconfig")," file (see\nexample\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/tests/codetoanalyze/java/quandary/.inferconfig"},"here"),")."),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#create_intent_from_uri"},"CREATE_INTENT_FROM_URI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#cross_site_scripting"},"CROSS_SITE_SCRIPTING")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#exposed_insecure_intent_handling"},"EXPOSED_INSECURE_INTENT_HANDLING")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#insecure_intent_handling"},"INSECURE_INTENT_HANDLING")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#javascript_injection"},"JAVASCRIPT_INJECTION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#logging_private_data"},"LOGGING_PRIVATE_DATA")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#quandary_taint_error"},"QUANDARY_TAINT_ERROR")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#shell_injection"},"SHELL_INJECTION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#shell_injection_risk"},"SHELL_INJECTION_RISK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#sql_injection"},"SQL_INJECTION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#sql_injection_risk"},"SQL_INJECTION_RISK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_buffer_access"},"UNTRUSTED_BUFFER_ACCESS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_deserialization"},"UNTRUSTED_DESERIALIZATION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_deserialization_risk"},"UNTRUSTED_DESERIALIZATION_RISK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_environment_change_risk"},"UNTRUSTED_ENVIRONMENT_CHANGE_RISK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_file"},"UNTRUSTED_FILE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_file_risk"},"UNTRUSTED_FILE_RISK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_heap_allocation"},"UNTRUSTED_HEAP_ALLOCATION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_intent_creation"},"UNTRUSTED_INTENT_CREATION")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_url_risk"},"UNTRUSTED_URL_RISK")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_variable_length_array"},"UNTRUSTED_VARIABLE_LENGTH_ARRAY")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#user_controlled_sql_risk"},"USER_CONTROLLED_SQL_RISK"))))}b.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(f,l(l({ref:t},o),{},{components:n})):r.a.createElement(f,l({ref:t},o))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);