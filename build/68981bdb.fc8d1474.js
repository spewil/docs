(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/distinct_until_changed-a16a7a86ae4c7bba8e9daaf5343d0169.svg"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(91)),c={id:"distinct_until_changed",title:"DistinctUntilChanged"},o={unversionedId:"core/reactive/distinct_until_changed",id:"core/reactive/distinct_until_changed",isDocsHomePage:!1,title:"DistinctUntilChanged",description:"Category: Combinator (filtering)",source:"@site/docs\\core\\reactive\\distinct_until_changed.md",slug:"/core/reactive/distinct_until_changed",permalink:"/docs/core/reactive/distinct_until_changed",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/core/reactive/distinct_until_changed.md",version:"current",sidebar:"docs",previous:{title:"Concat",permalink:"/docs/core/reactive/concat"},next:{title:"Merge",permalink:"/docs/core/reactive/merge"}},s=[],l={rightToc:s};function u(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Category"),": Combinator (filtering)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Brief"),": Ensures that only distiinct contiguous elements are propagated."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) as long as only one input is supplied"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output"),": Same as input"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DistinctUntilChanged")," operator allows you to filter consecutive duplicate items from an observable sequence. This means that the resulting sequence will only emit items when there are changes in the input. As long as the input sequence keeps repeating the same value, the result will be silent."),Object(a.b)("p",null,Object(a.b)("img",{alt:"DistinctUntilChanged operator",src:n(134).default})),Object(a.b)("p",null,"This operator can be useful to turn a periodic, or continuous, sequence of data values into a discrete event stream, where a new event will be signalled only when there is a change in value."))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(f,o(o({ref:t},l),{},{components:n})):i.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);