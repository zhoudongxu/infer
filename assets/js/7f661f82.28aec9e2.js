(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return f}));var r=t(3),a=t(7),i=(t(0),t(254)),o=["components"],c={id:"steps-for-ci",title:"Recommended flow for CI"},l={unversionedId:"steps-for-ci",id:"version-1.1.0/steps-for-ci",isDocsHomePage:!1,title:"Recommended flow for CI",description:"The recommended flow for CI integration is to determine the modified files, and",source:"@site/versioned_docs/version-1.1.0/01-steps-for-ci.md",slug:"/steps-for-ci",permalink:"/docs/steps-for-ci",version:"1.1.0",sidebar:"version-1.1.0/docs",previous:{title:"Analyzing apps or projects",permalink:"/docs/analyzing-apps-or-projects"},next:{title:"infer",permalink:"/docs/man-infer"}},s=[{value:"Differential Workflow",id:"differential-workflow",children:[]},{value:"Example: Android Gradle",id:"example-android-gradle",children:[]}],u={toc:s};function f(e){var n=e.components,t=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The recommended flow for CI integration is to determine the modified files, and\nrun the analysis in reactive mode starting from those files. If you would like\nto run more than one analyzer, it is more efficient to separate the capture\nphase, so that the result can be used by all the analyzers."),Object(i.b)("h3",{id:"differential-workflow"},"Differential Workflow"),Object(i.b)("p",null,"Here's how to run infer on two versions of a project and compare the results in\ngeneral."),Object(i.b)("p",null,"Assume the project uses git, ",Object(i.b)("inlineCode",{parentName:"p"},"feature")," is the feature branch (the code change\nyou want to analyze), ",Object(i.b)("inlineCode",{parentName:"p"},"main")," is the main branch, and ",Object(i.b)("inlineCode",{parentName:"p"},"make")," builds the\nproject."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# go to feature branch if not there already\ngit checkout feature\n# get list of changed files\ngit diff --name-only origin/feature..origin/main > index.txt\n## first run: feature branch\n# run infer on the feature branch\ninfer capture -- make -j 4  # assuming a machine with 4 cores\ninfer analyze --changed-files-index index.txt\n# store the infer report\ncp infer-out/report.json report-feature.json\n## second run: main branch\ngit checkout main\n# run capture in reactive mode so that previously-captured source files are kept if they are up-to-date\ninfer capture --reactive -- make -j 4\ninfer analyze --reactive --changed-files-index index.txt\n# compare reports\ninfer reportdiff --report-current report-feature.json --report-previous infer-out/report.json\n")),Object(i.b)("p",null,'At the end of this process, "infer-out/differential/" contains three files,\nwhich follow the same format as normal infer JSON reports:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"introduced.json contains the issues found in the feature branch but not in\nmain;"),Object(i.b)("li",{parentName:"ul"},"fixed.json contains the issues found in main but not in the feature branch;"),Object(i.b)("li",{parentName:"ul"},"preexisting.json contains the issues found in both branches.")),Object(i.b)("h3",{id:"example-android-gradle"},"Example: Android Gradle"),Object(i.b)("p",null,"The following CI script runs the ",Object(i.b)("inlineCode",{parentName:"p"},"infer")," and ",Object(i.b)("inlineCode",{parentName:"p"},"eradicate")," analyzers. Assume again\nthat ",Object(i.b)("inlineCode",{parentName:"p"},"feature")," is the feature branch, and ",Object(i.b)("inlineCode",{parentName:"p"},"main")," is the main branch."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git diff --name-only origin/feature..origin/main > index.txt\ninfer capture -- ./gradlew --offline assembleDebug\ninfer analyze --fail-on-issue --eradicate --changed-files-index ./index.txt\n")),Object(i.b)("p",null,"Notice that"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use git to find the changed files ",Object(i.b)("inlineCode",{parentName:"li"},"git diff --name-only")),Object(i.b)("li",{parentName:"ul"},"We run capture only once, and the output is kept for the subsequent analyses"),Object(i.b)("li",{parentName:"ul"},"We run the eradicate analysis alongside the default analyses: ",Object(i.b)("inlineCode",{parentName:"li"},"--eradicate")),Object(i.b)("li",{parentName:"ul"},"We analyze only the changed files ",Object(i.b)("inlineCode",{parentName:"li"},"--changed-files-index ./index.txt"))))}f.isMDXComponent=!0},254:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=r,b=f["".concat(o,".").concat(d)]||f[d]||p[d]||i;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);