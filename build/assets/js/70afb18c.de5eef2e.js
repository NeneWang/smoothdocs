"use strict";(self.webpackChunksmoothdocs=self.webpackChunksmoothdocs||[]).push([[593],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={sidebar_position:2,title:"Medium Algorithms - 2"},u=void 0,c={unversionedId:"Computer Science/mid-2",id:"Computer Science/mid-2",title:"Medium Algorithms - 2",description:"11 -  Invert Binary Tree",source:"@site/resources/Computer Science/mid-2.md",sourceDirName:"Computer Science",slug:"/Computer Science/mid-2",permalink:"/resources/Computer Science/mid-2",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Medium Algorithms - 2"},sidebar:"tutorialSidebar",previous:{title:"Medium Algorithms - 1",permalink:"/resources/Computer Science/mid-1"},next:{title:"Medium Algorithms - 3",permalink:"/resources/Computer Science/mid-3"}},s={},p=[{value:"11 -  Invert Binary Tree",id:"11----invert-binary-tree",level:2},{value:"12 -  Binary Tree Diameter",id:"12----binary-tree-diameter",level:2},{value:"13 -  Reconstruct",id:"13----reconstruct",level:2},{value:"14 -  Reconstruct",id:"14----reconstruct",level:2},{value:"15 -  Reconstruct",id:"15----reconstruct",level:2},{value:"16 -  Reconstruct",id:"16----reconstruct",level:2},{value:"17 -  Reconstruct",id:"17----reconstruct",level:2},{value:"18 -  Reconstruct",id:"18----reconstruct",level:2},{value:"19 -  Reconstruct",id:"19----reconstruct",level:2},{value:"20 -  Reconstruct",id:"20----reconstruct",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"11----invert-binary-tree"},"11 -  Invert Binary Tree"),(0,a.kt)("p",null,"Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9374).Z,width:"685",height:"495"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function invertBinaryTree(tree) {\n  // Write your code here.\n}\n\n// This is the class of the input binary tree.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9300).Z,width:"1227",height:"811"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/pqWXSxn-4oM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction invertBinaryTree(tree) {\n    // Write your code here.\n    const queue = [tree];\n    while (queue.length) {\n        const current = queue.shift();\n        if (current === null) continue;\n        swapLeftAndRight(current);\n        queue.push(current.left);\n        queue.push(current.right);\n    }\n\n\n\n}\n\nfunction swapLeftAndRight(tree) {\n    const left = tree.left;\n    tree.left = tree.right;\n    tree.right = left;\n}\n}\n\n")))),(0,a.kt)("h2",{id:"12----binary-tree-diameter"},"12 -  Binary Tree Diameter"),(0,a.kt)("p",null,"Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6249).Z,width:"634",height:"400"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction binaryTreeDiameter(tree) {\n  // Write your code here.\n  return -1;\n}\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"13----reconstruct"},"13 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"14----reconstruct"},"14 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"15----reconstruct"},"15 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"16----reconstruct"},"16 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"17----reconstruct"},"17 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"18----reconstruct"},"18 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"19----reconstruct"},"19 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))),(0,a.kt)("h2",{id:"20----reconstruct"},"20 -  Reconstruct"),(0,a.kt)("p",null,"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6673).Z,width:"786",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starter Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"starter Code\n\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udc68\u200d\ud83d\udd2c Javascript Solution"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9434).Z,width:"1188",height:"784"})),(0,a.kt)("iframe",{width:"380",height:"420",src:"https://www.youtube.com/embed/9kDaGmTZhVI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Solution Code\n}\n\n")))))}m.isMDXComponent=!0},6673:function(e,t,r){t.Z=r.p+"assets/images/2022-05-06-15-44-28-c64c899f78f902b0291783bffd0c2ba2.png"},9434:function(e,t,r){t.Z=r.p+"assets/images/2022-06-12-02-17-29-8012fe120d2ce3e3ef0b8857006a64ac.png"},9374:function(e,t,r){t.Z=r.p+"assets/images/2022-06-12-11-26-16-d6e4cc5e51d4a6512d000c4e380ee651.png"},6249:function(e,t,r){t.Z=r.p+"assets/images/2022-06-12-11-57-43-66285597e733cb340e9cc6fbca247e10.png"},9300:function(e,t,r){t.Z=r.p+"assets/images/2022-06-12-12-00-37-5e00f62960dc54e37345e88c553bff14.png"}}]);