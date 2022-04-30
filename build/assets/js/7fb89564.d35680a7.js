"use strict";(self.webpackChunksmoothdocs=self.webpackChunksmoothdocs||[]).push([[2920],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,f=p["".concat(o,".").concat(g)]||p[g]||h[g]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7215:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],s={sidebar_position:2,title:"Mid algorithm Questions"},o="Medium Algorithms Questions",u={unversionedId:"resources_specific/Computer Science/algorithms-questions-mid",id:"resources_specific/Computer Science/algorithms-questions-mid",title:"Mid algorithm Questions",description:"Longest Peak",source:"@site/docs/resources_specific/Computer Science/algorithms-questions-mid.md",sourceDirName:"resources_specific/Computer Science",slug:"/resources_specific/Computer Science/algorithms-questions-mid",permalink:"/docs/resources_specific/Computer Science/algorithms-questions-mid",editUrl:"https://github.com/NeneWang/smoothdocs/tree/master/docs/resources_specific/Computer Science/algorithms-questions-mid.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Mid algorithm Questions"},sidebar:"tutorialSidebar",previous:{title:"Easy algorithm Questions",permalink:"/docs/resources_specific/Computer Science/algorithms-questions-easy"},next:{title:"Hard algorithm Questions",permalink:"/docs/resources_specific/Computer Science/algorithms-questions-hard"}},c={},h=[{value:"Longest Peak",id:"longest-peak",level:2},{value:"Array of Products",id:"array-of-products",level:2},{value:"First Duplicate Value",id:"first-duplicate-value",level:2},{value:"Merge Overlapping Intervals",id:"merge-overlapping-intervals",level:2},{value:"BST Contruction",id:"bst-contruction",level:2},{value:"Longest Peak",id:"longest-peak-1",level:2}],p={toc:h};function g(e){var n=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"medium-algorithms-questions"},"Medium Algorithms Questions"),(0,i.kt)("h2",{id:"longest-peak"},"Longest Peak"),(0,i.kt)("p",null,"Write a function that takes in an array of integers and returns the length of\nthe longest peak in the array.\n",(0,i.kt)("img",{src:t(648).Z,width:"837",height:"339"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Javascript Solution"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function longestPeak(array) {\n    let longestPeakLength = 0;\n    let i = 1;\n\n    while (i < array.length - 1) {\n        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];\n        if (!isPeak) {\n            i++;\n            continue;\n        }\n\n        let leftIdx = i - 2;\n        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {\n            leftIdx--;\n        }\n\n        let rightIdx = i + 2;\n        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {\n            rightIdx++;\n        }\n\n         const currentLongest = rightIdx - leftIdx - 1;\n        longestPeakLength = Math.max(currentLongest, longestPeakLength);\n        i = rightIdx;\n\n    }\n\n    return longestPeakLength;\n\n}\n\n")))),(0,i.kt)("h2",{id:"array-of-products"},"Array of Products"),(0,i.kt)("p",null,"Write a function that takes in an array of integers and ran array of the same\nlength, where each element in the output array is equal to the product of every\nother number in the input array\n",(0,i.kt)("img",{src:t(2738).Z,width:"839",height:"349"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Javascript Solution"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction arrayOfProducts(array) {\n    const products = [];\n\n    for (let i = 0; i < array.length; i++) {\n        let runningProduct = 1;\n        for (let j = 0; j < array.length; j++) {\n            if(i!==j){\n                runningProduct *= array[j];\n            }\n            products[i] = runningProduct;\n        }\n    }\n    return products;\n}\n// Do not edit the line below.\nexports.arrayOfProducts = arrayOfProducts;\n\n")),(0,i.kt)("p",null,"o(n) solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function arrayOfProducts(array){\n    const products = new Array(array.length).fill(1);\n\n    let leftRunningProduct = 1;\n    for(let i=0; i<array.length; i++){\n        products[i] = leftRunningProduct;\n        leftRunningProduct *= array[i];\n    }\n\n    let rightRunningProduct = 1;\n    for(let i=array.length -1 ; i>=0;i--){\n        products[i] *= rightRunningProduct;\n        rightRunningProduct *= array[i];\n    }\n\n    return products;\n\n}\n")))),(0,i.kt)("h2",{id:"first-duplicate-value"},"First Duplicate Value"),(0,i.kt)("p",null,"Given an array of integers between ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", inclusive, where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is the\nlength of the array, write a function that returns the first integer that\nappears more than once. (when the array is read from left to right)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8274).Z,width:"833",height:"550"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Javascript Solution"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function firstDuplicateValue(array) {\n    for (const value of array) {\n        const absValue = Math.abs(value);\n        if (array[absValue - 1] < 0) return absValue;\n        array[absValue - 1] *= -1;\n\n    }\n    return -1;\n}\n\n")))),(0,i.kt)("h2",{id:"merge-overlapping-intervals"},"Merge Overlapping Intervals"),(0,i.kt)("p",null,"Write a function that takes in a non-empty array of arbitrary intervals, merges\nany overalapping intervals, and returns the new intervals in no particular order."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"details",src:t(863).Z,width:"836",height:"409"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Javascript Solution"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function mergeOverlappingIntervals(intervals) {\n    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);\n\n    const mergedIntervals = [];\n    let currentInterval = sortedIntervals[0];\n    mergedIntervals.push(currentInterval);\n\n    for (const nextInterval of sortedIntervals) {\n        const [_, currentIntervalEnd] = currentInterval;\n        const [nextIntervalStart, nextIntervalEnd] = nextInterval;\n\n        if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)\n        else{\n            currentInterval = nextInterval;\n            mergedIntervals.push(currentInterval);\n        }\n    }\n    return mergedIntervals;\n}\n\n")))),(0,i.kt)("h2",{id:"bst-contruction"},"BST Contruction"),(0,i.kt)("p",null,"Write a BST Class that supports ",(0,i.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"contains")," method\n",(0,i.kt)("img",{src:t(7091).Z,width:"884",height:"786"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Javascript Solution"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class BST {\n    constructor(value) {\n        this.value = value;\n        this.left = null;\n        this.right = null;\n    }\n\n    insert(value) {\n        // Write your code here.\n        // Do not edit the return statement of this method.\n        if (value < this.value) {\n            if (this.left === null) {\n                this.left = new BST(value);\n            } else {\n                this.left.insert(value);\n            }\n        } else {\n            if (this.right === null) {\n                this.right = new BST(value);\n            } else {\n                this.right.insert(value);\n            }\n        }\n\n\n        return this;\n    }\n\n    contains(value) {\n        // Write your code here.\n        if (value < this.value) {\n            if (this.left === null) {\n                return false;\n            } else {\n                return this.left.contains(value);\n            }\n        } else if (value > this.value) {\n            if (this.right === null) {\n                return false;\n            } else {\n                return this.right.contains(value);\n            }\n        } else {\n            return (true);\n        }\n    }\n\n    remove(value, parent = null) {\n        if (value < this.value) {\n            if (this.left !== null) {\n                this.left.remove(value, this);\n            }\n        } else if (value > this.value) {\n            if (this.right !== null) {\n                this.right.remove(value, this);\n            }\n        } else {\n            if (this.left !== null && this.right !== null) {\n                this.value = this.right.getMinValue();\n                this.right.remove(this.value, this);\n            } else if (parent === null) {\n                if (this.left !== null) {\n                    this.value = this.left.value;\n                    this.right = this.left.right;\n                    this.left = this.left.left;\n                } else if (this.right !== null) {\n                    this.value = this.right.value;\n                    this.left = this.right.left;\n                    this.right = this.right.right;\n                } else {\n                    \n                }\n            } else if (parent.left === this) {\n                parent.left = this.left !== null ? this.left : this.right;\n            } else if (parent.right === this) {\n                parent.right = this.left !== null ? this.left : this.right;\n            }\n        }\n        return this;\n    }\n\n    getMinValue() {\n        if (this.left == null) {\n            return this.value;\n        } else {\n            return this.left.getMinValue();\n        }\n    }\n}\n\n// Do not edit the line below.\nexports.BST = BST;\n\n")))),(0,i.kt)("h2",{id:"longest-peak-1"},"Longest Peak"),(0,i.kt)("p",null,"Write a function that takes in an array of integers and returns the length of\nthe longest peak in the array.\n",(0,i.kt)("img",{src:t(3005).Z,width:"673",height:"348"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Javascript Solution"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function longestPeak(array) {\n    let longestPeakLength = 0;\n    let i = 1;\n\n    while (i < array.length - 1) {\n        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];\n        if (!isPeak) {\n            i++;\n            continue;\n        }\n\n        let leftIdx = i - 2;\n        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {\n            leftIdx--;\n        }\n\n        let rightIdx = i + 2;\n        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {\n            rightIdx++;\n        }\n\n         const currentLongest = rightIdx - leftIdx - 1;\n        longestPeakLength = Math.max(currentLongest, longestPeakLength);\n        i = rightIdx;\n\n    }\n\n    return longestPeakLength;\n\n}\n\n")))))}g.isMDXComponent=!0},3005:function(e,n,t){n.Z=t.p+"assets/images/2022-04-18-17-07-54-92a8722a202b602fbf67c650e8a28f5a.png"},8274:function(e,n,t){n.Z=t.p+"assets/images/2022-04-18-18-21-15-a5634cb90fbf1540e0f6b7878bb0949f.png"},648:function(e,n,t){n.Z=t.p+"assets/images/2022-04-18-18-22-04-8b966d1292e319b9d4ed2e8b9a7bf9c3.png"},2738:function(e,n,t){n.Z=t.p+"assets/images/2022-04-18-18-22-56-c9ceb233e81aefed11806c97a9ec6281.png"},863:function(e,n,t){n.Z=t.p+"assets/images/2022-04-18-18-36-02-4cae1b5588080a7fe072af441f6bf855.png"},7091:function(e,n,t){n.Z=t.p+"assets/images/2022-04-18-18-53-45-95acebb057784e245b0b05254300c778.png"}}]);