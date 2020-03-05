(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(1),r=t(9),o=(t(0),t(176)),i={title:"Infer on Open Source Android Apps",author:"Dulma Churchill"},c={permalink:"/blog/2015/05/22/Infer-on-open-source-android-apps.md",source:"@site/blog/2015-05-22-Infer-on-open-source-android-apps.md.md",description:"We ran Infer on a few open source Android apps with the aim of finding some bugs",date:"2015-05-22T00:00:00.000Z",tags:[],title:"Infer on Open Source Android Apps",truncated:!1,prevItem:{title:"Collaboration with Spotify",permalink:"/blog/2016/03/17/collaboration-with-spotify"}},p=[],d={rightToc:p},s="wrapper";function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(s,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We ran Infer on a few open source Android apps with the aim of finding some bugs\nand getting them fixed. Some of those reports got indeed fixed."),Object(o.b)("p",null,"One of the apps analyzed was the search engine\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/duckduckgo/android"}),"DuckDuckGo"),". We found that many database\ncursors were not closed. Soon after we reported the issue, a developer\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/duckduckgo/android/commit/2c2d79f990dde0e44cdbecb1925b73c63bf9141d"}),"fixed it"),"."),Object(o.b)("p",null,"We also analyzed the popular email client ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/k9mail/k-9"}),"k-9"),".\nWe found a file not closed leak and reported it. Interestingly, a developer\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/k9mail/k-9/commit/d538278be62687758c956af62ee47c53637d67d8"}),"fixed it"),"\nby not writing some logging info to the file at all. So Infer helped them to\nsimplify their code."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/siacs/Conversations"}),"Conversations")," is an open source\nXMPP/Jabber client for Android smart phones. We analyzed it as well and found a\nfile not closed leak, which was also\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Flowdalic/MemorizingTrustManager/commit/190c57a9a8385f4726c817924b123438af6adc2f"}),"fixed"),"."))}l.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return l}));var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),l=a,u=s[c+"."+l]||s[l]||d[l]||o;return t?r.a.createElement(u,Object.assign({},{ref:n},p,{components:t})):r.a.createElement(u,Object.assign({},{ref:n},p))}));function l(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);