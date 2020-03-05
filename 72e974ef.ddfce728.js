(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(1),l=t(9),i=(t(0),t(176)),r={id:"eradicate-warnings",title:"Eradicate warnings"},o={id:"eradicate-warnings",title:"Eradicate warnings",description:"Below you will find a description of all the warnings reported by",source:"@site/docs/03-eradicate-warnings.md",permalink:"/docs/eradicate-warnings",sidebar:"docs",previous:{title:"Checkers bug types",permalink:"/docs/checkers-bug-types"},next:{title:"Linters bug types",permalink:"/docs/linters-bug-types"}},c=[{value:"Eradicate null field access",id:"eradicate-null-field-access",children:[]},{value:"Eradicate null method call",id:"eradicate-null-method-call",children:[]},{value:"Eradicate field not nullable",id:"eradicate-field-not-nullable",children:[]},{value:"Eradicate field not initialized",id:"eradicate-field-not-initialized",children:[]},{value:"Eradicate parameter not nullable",id:"eradicate-parameter-not-nullable",children:[]},{value:"Eradicate return not nullable",id:"eradicate-return-not-nullable",children:[]},{value:"Eradicate condition redundant",id:"eradicate-condition-redundant",children:[]},{value:"Eradicate return overannotated",id:"eradicate-return-overannotated",children:[]},{value:"Eradicate inconsistent subclass return annotation",id:"eradicate-inconsistent-subclass-return-annotation",children:[]}],s={rightToc:c},d="wrapper";function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Below you will find a description of all the warnings reported by\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/eradicate"}),"Eradicate"),"."),Object(i.b)("h2",{id:"eradicate-null-field-access"},"Eradicate null field access"),Object(i.b)("p",null,"A field access of the form x.field where x could be null."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  void foo(@Nullable C x) {\n    x.field = 3;\n  }\n}\n")),Object(i.b)("p",null,"Action: Make sure that x cannot be null by changing the code or changing\nannotations. If this cannot be done, the only choice is to use defensive\nprogramming: if (x != null) { ... x.field ... } else { ... you need to decide\nwhat to do when x is null ... } The general recommendation is to push null\nchecks up the call chain as much as possible in order to detect the place where\nnull values originate and deal with them at that point. When a null value is\npropagated down the call chain it is often difficult to determine its origin\nwithout global knowledge of what the program does. For example, a null value\ncould originate in third party libraries which are not under your control, and\nthe best place to check for null is typically immediately after calling these\nlibrary functions."),Object(i.b)("h2",{id:"eradicate-null-method-call"},"Eradicate null method call"),Object(i.b)("p",null,"A method call x.m(...) where x could be null."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  void foo(@Nullable C x) {\n    String s = x.toString();\n  }\n}\n")),Object(i.b)("p",null,"Action: Same as for Null field access."),Object(i.b)("h2",{id:"eradicate-field-not-nullable"},"Eradicate field not nullable"),Object(i.b)("p",null,"An assignment x.f = v where v could be null and field f is not annotated with\n@Nullable."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  String f;\n\n  void foo(@Nullable String s) {\n    f = s;\n  }\n}\n")),Object(i.b)("p",null,"Action: The preferred action is to ensure that a null value is never stored in\nthe field, by changing the code or changing annotations. If this cannot be done,\nadd a @Nullable annotation to the field. This annotation might trigger more\nwarnings in other code that uses the field, as that code must now deal with null\nvalues."),Object(i.b)("h2",{id:"eradicate-field-not-initialized"},"Eradicate field not initialized"),Object(i.b)("p",null,"The constructor does not initialize a field f which is not annotated with\n@Nullable"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  String f;\n\n  C () { // field f not initialized and not annotated @Nullable\n  }\n}\n")),Object(i.b)("p",null,"Action: The preferred action is to initialize the field with a value that is not\nnull. If, by design, null is a valid value for the field, then it should be\nannotated with @Nullable."),Object(i.b)("h2",{id:"eradicate-parameter-not-nullable"},"Eradicate parameter not nullable"),Object(i.b)("p",null,"Method call x.m(..., v, ...) where v can be null and the corresponding parameter\nin method m is not annotated with @Nullable"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  void m(C x) {\n    String s = x.toString()\n  }\n\n  void test(@Nullable C x) {\n    m(x);\n  }\n}\n")),Object(i.b)("p",null,"Action: The preferred action is to ensure that a null value is never passed to\nthe method, by changing the code or changing annotations. If this cannot be\ndone, add a @Nullable annotation to the relevant parameter in the method\ndeclaration. This annotation might trigger more warnings in the implementation\nof method m, as that code must now deal with null values."),Object(i.b)("h2",{id:"eradicate-return-not-nullable"},"Eradicate return not nullable"),Object(i.b)("p",null,"Method m can return null, but the method's return type is not annotated with\n@Nullable"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class C {\n  String m() {\n    return null;\n  }\n}\n")),Object(i.b)("p",null,"Action: The preferred action is to ensure that a null value is never returned by\nthe method, by changing the code or changing annotations. If this cannot be\ndone, add a @Nullable annotation to the the method declaration. This annotation\nmight trigger more warnings in the callers of method m, as the callers must now\ndeal with null values."),Object(i.b)("h2",{id:"eradicate-condition-redundant"},"Eradicate condition redundant"),Object(i.b)("p",null,"This report is inactive by default. Condition (x != null) or (x == null) when x\ncannot be null: the first condition is always true and the second is always\nfalse"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class C {\n  void m() {\n    String s = new String("abc");\n    if (s != null) {\n      int n = s.length();\n    }\n  }\n}\n')),Object(i.b)("p",null,"Action: Make sure that the annotations are correct, as the condition is\nconsidered redundant based on the existing annotations. In particular, check the\nannotation of any input parameters and fields of the current method, as well as\nthe annotations of any method called directly by the current method, if\nrelevant. If the annotations are correct, you can remove the redundant case."),Object(i.b)("h2",{id:"eradicate-return-overannotated"},"Eradicate return overannotated"),Object(i.b)("p",null,"This report is inactive by default. Method m is annotated with @Nullable but the\nmethod cannot return null"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class C {\n  @Nullable String m() {\n    String s = new String("abc");\n    return s;\n  }\n}\n')),Object(i.b)("p",null,"Action: Make sure that the annotations are correct, as the return annotation is\nconsidered redundant based on the existing annotations. In particular, check the\nannotation of any input parameters and fields of the current method, as well as\nthe annotations of any method called directly by the current method, if\nrelevant. If the annotations are correct, you can remove the @Nullable\nannotation."),Object(i.b)("h2",{id:"eradicate-inconsistent-subclass-return-annotation"},"Eradicate inconsistent subclass return annotation"),Object(i.b)("p",null,"The return type of the overridden method is annotated @Nullable, but the\ncorresponding method in the superclass is not."),Object(i.b)("p",null,"Action: choose a consistent annotation based on the desired invariant."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'class A {\n  String create() {\n    return new String("abc");\n  }\n}\n\nclass B extends A {\n  @Nullable String create() {  // Inconsistent @Nullable annotation.\n      return null;\n  }\n}\n')),Object(i.b)("p",null,"A consistent use of @Nullable on the return type across subtyping should prevent\nruntime issue like in:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Main {\n\n  int foo(A a) {\n     String s = a.create();\n     return s.length();\n  }\n\n  void main(String[] args) {\n     A a = new B();\n     foo(a);\n  }\n\n}\n```\n\n\n##  Inconsistent subclass parameter annotation\n\nA parameter of the overridden method is missing a @Nullable annotation present in the superclass.\n\nAction: choose a consistent annotation based on the desired invariant.\n\nExample:\n\n```java\nclass A {\n\n  int len(@Nullable String s) {\n    if (s != null) {\n      return s.length();\n    } else {\n      return 0;\n    }\n  }\n}\n\nclass B extends A {\n\n  int len(String s) {  // @Nullable missing.\n    return s.length();\n  }\n}\n```\n\nA consistent use of @Nullable on parameters across subtyping should prevent runtime issue like in:\n\n```java\npublic class Main {\n\n  String s;\n\n  int foo() {\n    A a = new B();\n    return a.len(s);\n  }\n}\n```\n")))}u.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));var a=t(0),l=t.n(a),i=l.a.createContext({}),r=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=r(e.components);return l.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),d=r(t),u=a,b=d[o+"."+u]||d[u]||s[u]||i;return t?l.a.createElement(b,Object.assign({},{ref:n},c,{components:t})):l.a.createElement(b,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=t[u];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);