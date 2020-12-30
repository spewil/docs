(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/concat-6cca949de9b2da9b5ee58743b3778774.svg"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(116)),c={id:"concat",title:"Concat"},i={unversionedId:"core/reactive/concat",id:"core/reactive/concat",isDocsHomePage:!1,title:"Concat",description:"Category: Combinator",source:"@site/docs/core/reactive/concat.md",slug:"/core/reactive/concat",permalink:"/bonsai-rx-docs/docs/core/reactive/concat",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/concat.md",version:"current",sidebar:"docs",previous:{title:"CombineLatest",permalink:"/bonsai-rx-docs/docs/core/reactive/combine_latest"},next:{title:"DistinctUntilChanged",permalink:"/bonsai-rx-docs/docs/core/reactive/distinct_until_changed"}},s=[],l={rightToc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Category"),": Combinator "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Brief"),": Concatenates any number of observable sequences as loong as the previous sequence terminated successfully."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) as long as more than one input is supplied and all are of the same type"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output"),": Same type as input, but shape adjusted accordingly (e.g. concatenated two ",Object(o.b)("inlineCode",{parentName:"p"},"1 x N")," arrays gives a ",Object(o.b)("inlineCode",{parentName:"p"},"2 x N")," array)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Concat")," operator allows you to combine the output of multiple observables so that you can treat them as if they were the same observable. This is done by concatenating the notifications from the input observables sequentially, such that the next sequence starts only after the previous sequence has terminated, as described in the marble diagram below."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Concat operator",src:n(180).default})),Object(o.b)("p",null,"The resulting observable will terminate successfully when the last observable sequence has terminated successfully, or exceptionally as soon as any sequence raises an error."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Common errors"),": ",Object(o.b)("inlineCode",{parentName:"p"},"Build Error: No method overload found for the given arguments."),"\nThe supplied inputs might be of different types."))}u.isMDXComponent=!0}}]);