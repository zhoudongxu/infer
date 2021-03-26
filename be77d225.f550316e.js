(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(251)),i={id:"absint-framework",title:"Building checkers with the Infer.AI framework"},s={unversionedId:"absint-framework",id:"version-1.1.0/absint-framework",isDocsHomePage:!1,title:"Building checkers with the Infer.AI framework",description:"Infer.AI is a framework for quickly developing abstract interpretation-based",source:"@site/versioned_docs/version-1.1.0/04-absint-framework.md",slug:"/absint-framework",permalink:"/docs/absint-framework",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"Separation logic and bi-abduction",permalink:"/docs/separation-logic-and-bi-abduction"},next:{title:"Infer Internal OCaml Modules API",permalink:"/docs/internal-API"}},c=[{value:"By example: intraprocedural analysis",id:"by-example-intraprocedural-analysis",children:[]},{value:"Error reporting",id:"error-reporting",children:[]},{value:"By example: interprocedural analysis",id:"by-example-interprocedural-analysis",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Infer.AI is a framework for quickly developing abstract interpretation-based\ncheckers (intraprocedural or interprocedural). You define only:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An abstract domain (type of abstract state plus ",Object(o.b)("inlineCode",{parentName:"li"},"<="),", ",Object(o.b)("inlineCode",{parentName:"li"},"join"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"widen"),"\noperations)"),Object(o.b)("li",{parentName:"ol"},"Transfer functions (a transformer that takes an abstract state as input and\nproduces an abstract state as output)")),Object(o.b)("p",null,"What you get in exchange is an analysis that can run on all of the\nlanguages Infer supports (C, Objective-C, C++, and Java)!"),Object(o.b)("p",null,"This guide covers how to use the framework. For background on why we built the\nframework and how it works, check out these\n",Object(o.b)("a",{parentName:"p",href:"http://fbinfer.com/downloads/pldi17-infer-ai-tutorial.pdf"},"slides")," from a PLDI\n2017 tutorial and this\n",Object(o.b)("a",{parentName:"p",href:"https://atscaleconference.com/videos/getting-the-most-out-of-static-analyzers"},"talk"),"\nfrom @Scale2016."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you feel like coding instead of reading, a great way to get started with\nInfer.AI is to go through the lab exercise\n",Object(o.b)("a",{parentName:"strong",href:"https://github.com/facebook/infer/blob/master/infer/src/labs/README.md"},"here"),".")),Object(o.b)("h2",{id:"by-example-intraprocedural-analysis"},"By example: intraprocedural analysis"),Object(o.b)("p",null,"This section helps you get started ASAP if you already understand\n",Object(o.b)("a",{parentName:"p",href:"http://www.di.ens.fr/~cousot/AI/IntroAbsInt.html"},"abstract interpretation")," (or\ndon't, but are feeling bold)."),Object(o.b)("p",null,"Take a look at\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/checkers/liveness.ml"},"liveness.ml"),".\nThis code is performing a compilers-101 style liveness analysis over\n",Object(o.b)("a",{parentName:"p",href:"#ir-basics-sil-cfgs-tenvs-procdescs-and-procnames"},"SIL"),", Infer's intermediate\nlanguage. Since this code is fairly small and you should already understand what\nit's trying to do, it's a fairly good place to look in order to understand both\nhow to use the abstract interpretation framework and what SIL is."),Object(o.b)("p",null,"There are basically three important bits here: defining the domain, defining the\ntransfer functions, and then passing the pieces to the framework to create an an\nanalysis. Let's break down the third bit:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-OCaml"},"module CFG = ProcCfg.OneInstrPerNode (ProcCfg.Backward (ProcCfg.Exceptional))\nmodule CheckerAnalyzer =\n  AbstractInterpreter.MakeRPO (TransferFunctions (CheckerMode) (CFG))\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ProcCfg.Backward (ProcCfg.Exceptional)"),' part says: "I want the direction of\niteration to be backward" (since liveness is a backward analysis), and "I want\nto the analysis to follow exceptional edges". For a forward analysis that\nignores exceptional edges, you would do ',Object(o.b)("inlineCode",{parentName:"p"},"ProcCfg.Normal")," instead (and many other\ncombinations are possible; take a look at\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/absint/ProcCfg.mli"},"ProcCfg.mli"),"\nfor more). And finally, the ",Object(o.b)("inlineCode",{parentName:"p"},"TransferFunctions"),' part says "Use the transfer\nfunctions I defined above".'),Object(o.b)("p",null,"Now you have a ",Object(o.b)("inlineCode",{parentName:"p"},"CheckerAnalyzer")," module that exposes useful functions\nlike\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/absint/AbstractInterpreter.mli#L30"},Object(o.b)("inlineCode",{parentName:"a"},"compute_post")),"\n(take a procedure as input and compute a postcondition) and\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/absint/AbstractInterpreter.mli#L36"},Object(o.b)("inlineCode",{parentName:"a"},"exec_pdesc")),"\n(take a procedure and compute an invariant map from node id's to the\npre/post at each node). The next step is to hook your checker up to\nthe Infer command-line interface (CLI). For the liveness analysis, you\nwould do this by exposing a function for running the checker on a\nsingle procedure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-OCaml"},'let checker ({IntraproceduralAnalysis.proc_desc; err_log} as analysis_data) =\n  match Analyzer.compute_post analysis_data ~initial:Domain.empty with\n  | Some post ->\n      Logging.progress "Computed post %a for %a"\n        Domain.pp post Procname.pp (Procdesc.get_proc_name proc_desc);\n  | None -> ()\n')),Object(o.b)("p",null,"and then adding ",Object(o.b)("inlineCode",{parentName:"p"},"Liveness.checker")," to the list of registered checkers\nin\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/backend/registerCheckers.ml"},"registerCheckers.ml"),'\n(search for "Liveness").'),Object(o.b)("p",null,"you can then run ",Object(o.b)("inlineCode",{parentName:"p"},"infer run --liveness-only -- <your_build_command>")," to run your\nchecker on real code. See ",Object(o.b)("a",{parentName:"p",href:"/docs/analyzing-apps-or-projects"},"here")," for more\ndetails on the build systems supported by Infer."),Object(o.b)("p",null,"Other examples of simple intraprocedural checkers are\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/checkers/addressTaken.ml"},"addressTaken.ml"),"\nand\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/checkers/Siof.ml"},"Siof.ml"),"."),Object(o.b)("h2",{id:"error-reporting"},"Error reporting"),Object(o.b)("p",null,"Useful analyses have output. Basic printing to stderr or stderr is\ngood for debugging, but to report a programmer-readable error that is\ntied to a source code location, you'll want to use\n",Object(o.b)("a",{parentName:"p",href:"pathname:///odoc/1.1.0/infer/Absint/Reporting/index.html#val-log_issue"},Object(o.b)("inlineCode",{parentName:"a"},"Reporting.log_issue")),"."),Object(o.b)("h2",{id:"by-example-interprocedural-analysis"},"By example: interprocedural analysis"),Object(o.b)("p",null,'Let\'s assume you have already read and understood the "intraprocedural analysis"\nsection and have an intraprocedural checker. The abstract interpretation\nframework makes it easy to convert your intraprocedural analysis into a\n',Object(o.b)("em",{parentName:"p"},"modular")," interprocedural analysis. Let me emphasize the ",Object(o.b)("em",{parentName:"p"},"modular")," point once\nmore; global analyses cannot be expressed in this framework."),Object(o.b)("p",null,"To make your checker interprocedural, you need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Define the type of procedure summaries for your analysis and let\nregisterCheckers.ml know that your checker is interprocedural")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add logic for (a) using summaries in your transfer functions and (b)\nconverting your intraprocedural abstract state to a summary."))),Object(o.b)("p",null,"A good example to look at here is\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/checkers/Siof.ml"},"Siof.ml"),".\nStep (1) is just:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-OCaml"},"(* in src/checkers/SiofDomain.ml *)\n(* note that as a result the type of summaries is the same as the type of domain\n   elements *)\nmodule Summary = ...\ninclude Summary\n\n\n(* in src/backend/Payloads.ml: register the payload of the analyzer *)\ntype t =\n  { ...\n  ; siof: SiofDomain.Summary.t option\n  ... }\n\n\n(* in src/backend/registerCheckers.ml *)\nlet all_checkers = [ ...\n  ; {checker= SIOF; callbacks= [(interprocedural Payloads.Fields.siof Siof.checker, Clang)]}\n  ... ]\n")),Object(o.b)("p",null,"Here, the type of the abstract state and the type of the summary are the same,\nwhich makes things easier for us (no logic to convert an abstract state to a\nsummary)."),Object(o.b)("p",null,"Part (2a) is\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/be4ddc48f6330b7b788d899ce12ca51b4d673530/infer/src/checkers/Siof.ml#L168"},"here"),"\nand uses the ",Object(o.b)("inlineCode",{parentName:"p"},"analyze_dependency")," callback provided by the framework:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"match analyze_dependency callee_pname with\n")),Object(o.b)("p",null,'This says: "read the summary for ',Object(o.b)("inlineCode",{parentName:"p"},"callee_pname"),', possibly computing it\nfirst". You must then add logic for applying the summary to the\ncurrent abstract state (often, this is as simple as doing a join).'),Object(o.b)("p",null,"Because our summary type is the same as the abstract state, part (2b)\nhere simply consists in return the post computed by the analysis as\nthe procedure's summary, using ",Object(o.b)("inlineCode",{parentName:"p"},"Analyzer.compute_post"),"."),Object(o.b)("p",null,"That's it! We now have an interprocedural analysis."),Object(o.b)("p",null,"To go deeper, jump to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/master/infer/src/labs/README.md"},"lab\nexercise"),"\nand to the ",Object(o.b)("a",{parentName:"p",href:"internal-API/"},"API documentation"),", e.g. for the\n",Object(o.b)("a",{parentName:"p",href:"pathname:///odoc/1.1.0/infer/Absint.html"},"Absint")," and\n",Object(o.b)("a",{parentName:"p",href:"pathname:///odoc/1.1.0/infer/IR.html"},"IR")," modules."))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);