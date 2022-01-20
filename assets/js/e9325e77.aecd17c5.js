(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(254)),o=["components"],s={title:"Topl",description:"Detect errors based on user-provided state machines describing temporal properties over multiple objects."},l={unversionedId:"checker-topl",id:"checker-topl",isDocsHomePage:!1,title:"Topl",description:"Detect errors based on user-provided state machines describing temporal properties over multiple objects.",source:"@site/docs/checker-topl.md",slug:"/checker-topl",permalink:"/docs/next/checker-topl",version:"current",sidebar:"docs",previous:{title:"Starvation",permalink:"/docs/next/checker-starvation"},next:{title:"Uninitialized Value",permalink:"/docs/next/checker-uninit"}},c=[{value:"What is it?",id:"what-is-it",children:[]},{value:"Specifying Properties",id:"specifying-properties",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"List of Issue Types",id:"list-of-issue-types",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Detect errors based on user-provided state machines describing temporal properties over multiple objects."),Object(i.b)("p",null,"Activate with ",Object(i.b)("inlineCode",{parentName:"p"},"--topl"),"."),Object(i.b)("p",null,"Supported languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C/C++/ObjC: Experimental"),Object(i.b)("li",{parentName:"ul"},"C#/.Net: No"),Object(i.b)("li",{parentName:"ul"},"Erlang: Experimental"),Object(i.b)("li",{parentName:"ul"},"Java: Experimental")),Object(i.b)("h1",{id:"topl"},"Topl"),Object(i.b)("h2",{id:"what-is-it"},"What is it?"),Object(i.b)("p",null,"Topl is an analysis framework, built on top of Infer, for statically finding violations of temporal properties. Many analyses can be encoded as temporal properties supported by Topl, such as taint analysis. As a simple example, suppose that we don't want a value returned by method ",Object(i.b)("inlineCode",{parentName:"p"},"source()")," to be sent as an argument to a method ",Object(i.b)("inlineCode",{parentName:"p"},"sink()"),". This can be specified as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'property Taint\n  prefix "Main"\n  start -> start: *\n  start -> tracking: source(Ret) => x := Ret\n  tracking -> error: sink(Arg, VoidRet) when x == Arg\n')),Object(i.b)("p",null,"This specifies an automaton called ",Object(i.b)("inlineCode",{parentName:"p"},"Taint")," that has three states (",Object(i.b)("inlineCode",{parentName:"p"},"start"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tracking"),", ",Object(i.b)("inlineCode",{parentName:"p"},"error"),"). Two of those states (",Object(i.b)("inlineCode",{parentName:"p"},"start")," and ",Object(i.b)("inlineCode",{parentName:"p"},"error"),") have special meaning; other states (",Object(i.b)("inlineCode",{parentName:"p"},"tracking"),") can have any names. The first transition (",Object(i.b)("inlineCode",{parentName:"p"},"start \u2192 tracking"),") is taken when a method called ",Object(i.b)("inlineCode",{parentName:"p"},"source()")," is called, and its return value is stored in a register called ",Object(i.b)("inlineCode",{parentName:"p"},"x"),"; the second transition (",Object(i.b)("inlineCode",{parentName:"p"},"tracking \u2192 error"),") is taken when a method called ",Object(i.b)("inlineCode",{parentName:"p"},"sink()")," is called, but only if its argument equals what was previously saved in register ",Object(i.b)("inlineCode",{parentName:"p"},"x"),".\nThis property is violated in the following Java code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'public class Main {\n  static void f() { g(tito(source())); }\n  static void g(Object x) { h(x); }\n  static void h(Object x) { sink(x); }\n  static Object tito(Object x) { return x; }\n  static Object source() { return "dirty"; }\n  static void sink(Object x) {}\n}\n')),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"source()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sink()")," are not called from the same method, and that the \u201cdirty\u201d object is passed around a few times before finally reaching the sink. Assuming that the property is in a file ",Object(i.b)("inlineCode",{parentName:"p"},"taint.topl")," and the Java code in a file ",Object(i.b)("inlineCode",{parentName:"p"},"Main.java"),", you can invoke Infer with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"infer --topl --topl-properties taint.topl  -- javac Main.java\n")),Object(i.b)("p",null,"It will display the following error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Main.java:2: error: Topl Error\n  property Taint reaches state error.\n  1.   public class Main {\n  2. >   static void f() { g(tito(source())); }\n  3.     static void g(Object x) { h(x); }\n  4.     static void h(Object x) { sink(x); }\n")),Object(i.b)("p",null,"To get a full trace, use the command"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"infer explore\n")),Object(i.b)("h2",{id:"specifying-properties"},"Specifying Properties"),Object(i.b)("p",null,"A property is a nondeterministic automaton that can remember values in registers. An execution that drives the automaton from the start state to the error state will make Infer report an issue, and the trace that it produces will indicate which parts of the program drive which transitions of the automaton."),Object(i.b)("p",null,"The general form of a property is the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'property Name\n  message "Optional error message" // This line can be missing\n  prefix "Prefix" // There can be zero, one, or more prefix declarations\n  sourceState -> targetState: Pattern(Arg1,...,ArgN,Ret) when Condition => Action\n')),Object(i.b)("p",null,"The property name and the optional error message are used for reporting issues. The prefix declarations are used to simplify Patterns. The core of the property is the list of transitions."),Object(i.b)("p",null,"Each transition has a source state and a target state. The special transition label * means that the transition is always taken. Typically, there is a transition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  start -> start: *\n")),Object(i.b)("p",null,"meaning that the property can start anywhere, not just at the beginning of a method."),Object(i.b)("p",null,"Otherwise, the label on a transition contains:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("em",{parentName:"li"},"Pattern"),", which indicates what kind of instruction in the program drives this transition;"),Object(i.b)("li",{parentName:"ul"},"a list of transition variable bindings (above named Arg1, ..., but any identifier starting with uppercase letters works);"),Object(i.b)("li",{parentName:"ul"},"possibly a boolean Condition, which can refer to transition variables and to registers;"),Object(i.b)("li",{parentName:"ul"},"possibly and Action, which is a list sequence of assignments of the form ",Object(i.b)("em",{parentName:"li"},"register")," := ",Object(i.b)("em",{parentName:"li"},"TransitionVariable")," (registers do not need to be declared, and any identifier starting with a lowercase letter works).")),Object(i.b)("p",null,"There are two types of patterns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a regex that matches method names",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"if the regex uses non-letters (such as dots) it must be within double-quotes; otherwise, double quotes are optional"),Object(i.b)("li",{parentName:"ul"},"the prefix declarations are used to add potential prefixes to the regex. The combine regex is essentially \u201c(prefix_regex_a | prefix_regex_b) transition_pattern_regex\u201c"),Object(i.b)("li",{parentName:"ul"},"for a method with n arguments, there must be n+1 transition variables to get a match. The first n transition variables get bound to the argument values, and the last transition variable gets bound to the return value. ",Object(i.b)("em",{parentName:"li"},"This is true even for the case in which the return type is void"),"."))),Object(i.b)("li",{parentName:"ul"},"the special keyword ",Object(i.b)("strong",{parentName:"li"},"#ArrayWrite"),". In that case, there should be two transition variables like \u201c(Array, Index)\u201d \u2014 Array gets bound to the array object, and Index gets bound to the index at which the write happens.")),Object(i.b)("p",null,"For several examples, see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/tree/main/infer/tests/codetoanalyze/java/topl"},"https://github.com/facebook/infer/tree/main/infer/tests/codetoanalyze/java/topl")),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By design, some problems may be missed. Topl is built on Pulse, which attempts to minimize false positives, at the cost of sometimes having false negatives."),Object(i.b)("li",{parentName:"ul"},"Analysis time increases exponentially with the number of registers used in properties.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In theory, there should be no significant slowdown if registers belong to different properties, but the implementation is not yet optimized."),Object(i.b)("li",{parentName:"ul"},"If there are many registers within the same property, then the slowdown is unavoidable (without some significant breakthrough). However, the maximum number of registers we ever used for one practical property was 3.")))),Object(i.b)("h2",{id:"list-of-issue-types"},"List of Issue Types"),Object(i.b)("p",null,"The following issue types are reported by this checker:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/all-issue-types#topl_error"},"TOPL_ERROR"))))}b.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);