(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),i=(n(0),n(176)),a={title:"Collaboration with Spotify",author:"Jules Villard"},s={permalink:"/blog/2016/03/17/collaboration-with-spotify",source:"@site/blog/2016-03-17-collaboration-with-spotify.md",description:"![Infer/Spotify collaboration](/img/blog/Infer-Spotify.png)",date:"2016-03-17T00:00:00.000Z",tags:[],title:"Collaboration with Spotify",truncated:!1,prevItem:{title:"Talk at Mobile@Scale London",permalink:"/blog/2016/04/07/mobileatscale-london-talk"},nextItem:{title:"Infer on Open Source Android Apps",permalink:"/blog/2015/05/22/Infer-on-open-source-android-apps.md"}},l=[],p={rightToc:l},c="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/blog/Infer-Spotify.png",alt:"Infer/Spotify collaboration"}))),Object(i.b)("p",null,"Working on deploying Infer inside Facebook has taught us how important it is to\nhave the analysis tool deeply embedded into the developers' workflow; see our\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://research.facebook.com/publications/moving-fast-with-software-verification/"}),"\u201cMoving Fast with Software Verification\u201d paper"),"."),Object(i.b)("p",null,"Infer runs as part of our continuous integration (CI) system, where it reports\nissues on code modifications submitted for review by our engineers. We think\nit's great when someone can hook up Infer to their workflow, and we're working\nwith several other companies to help integrate Infer into their own CI systems.\nWe've come far enough in a collaboration with Spotify to talk about it now!"),Object(i.b)("p",null,"Last July, shortly after Infer was open-sourced, we started talking with the\nMarvin (Android Infrastructure) team at Spotify. They were interested in using\nInfer on their Android app, but it did not work with their build system. They\nwere using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://gradle.org/"}),"Gradle")," build system, but Infer's deployment\nwithin Facebook is done using a different build system, Facebook's\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://buckbuild.com/"}),"Buck"),"; we had only an initial, basic integration with\nGradle, which did not work with Spotify's app. A Spotify engineer, Deniz\nT\xfcrkoglu, made improvements to our Gradle integration, which he submitted as a\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/infer/pull/131"}),"pull request")," to Infer's codebase,\nwhich is hosted on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/infer/"}),"GitHub"),"."),Object(i.b)("p",null,"Then, in November 2015, two of our engineers, Dulma Churchill and Jules Villard,\ntraveled to the Spotify office in Stockholm to attend a Hack Week there. After\nrunning Infer on the Spotify app, we discussed the analyzer reports with Spotify\nengineers, and we agreed that they identified potential problems in the code.\nInfer is now running as part of Spotify's CI system, and here is a quote from\nDeniz on Spotify's perspective on Infer, which we include with his kind\npermission."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u201cAt Spotify we are continuously working on making our codebase better, and in\nthe Android infrastructure team we use a lot of tools: static analyzers,\nlinters, thread/address sanitizers, etc. In our quest to make our code even\nbetter, we started using Infer. Infer found several legitimate issues that\nother tools had missed. The Infer team was also very helpful in following a\nfew false positives that we encountered, and we now have it running on our\nbuild servers."),Object(i.b)("p",{parentName:"blockquote"},"Infer is a great add-on to a company's toolbox. It's not intrusive \u2014 you can\nsimply add it to your flow and it will tell you where you forgot to close that\ncursor or leaked that context. If you find a false positive, just report it\nor, even better, make a PR. With more users, it will just keep getting\nbetter.\u201d")),Object(i.b)("p",null,"This collaboration was truly a two-way street: Not only does Infer find issues\nin Spotify, which helps improve its Android app, but feedback from Spotify led\nto several improvements in Infer, including resolution of false positives and\nimprovements of Infer's UI and integration with Gradle. The better Gradle\nintegration will make it easier for other people to run Infer on lots of other\napps around the world."),Object(i.b)("p",null,"We're excited to collaborate with other companies and individuals to help make\nthe world's software better. If you are interested in integrating Infer into CI\nor otherwise hearing about our experience, ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/support"}),"drop us a line"),"!"))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o),i=r.a.createContext({}),a=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=a(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),c=a(n),u=o,f=c[s+"."+u]||c[u]||p[u]||i;return n?r.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(f,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);