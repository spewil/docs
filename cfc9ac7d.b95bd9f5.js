(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(125)),c={id:"subjects",title:"Subjects"},s={unversionedId:"concepts/subjects",id:"concepts/subjects",isDocsHomePage:!1,title:"Subjects",description:"Subjects are a special type of operator that allows reusing and sharing of observable sequences. A subject acts as a bridge or proxy; it will subscribe to an observable sequence and reemit all items it receives to downstream operators. Subjects play a role similar to branches by allowing multiple operators to subscribe to a single observable sequence.",source:"@site/docs/concepts/subjects.md",slug:"/concepts/subjects",permalink:"/bonsai-rx-docs/docs/concepts/subjects",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/concepts/subjects.md",version:"current",sidebar:"docs",previous:{title:"Package Manager",permalink:"/bonsai-rx-docs/docs/concepts/packages"},next:{title:"Amb",permalink:"/bonsai-rx-docs/docs/core/reactive/amb"}},i=[],b={rightToc:i};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Subjects are a special type of operator that allows reusing and sharing of observable sequences. A subject acts as a bridge or proxy; it will subscribe to an observable sequence and reemit all items it receives to downstream operators. Subjects play a role similar to branches by allowing multiple operators to subscribe to a single observable sequence."),Object(o.b)("p",null,"Subjects have two important differences from branches. First, they allow you to control the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/concepts/observables/#temperature"}),"temperature")," of the shared sequence. You can convert a sequence from ",Object(o.b)("em",{parentName:"p"},"cold")," to ",Object(o.b)("em",{parentName:"p"},"hot")," using ",Object(o.b)("inlineCode",{parentName:"p"},"PublishSubject")," or from ",Object(o.b)("em",{parentName:"p"},"hot")," to ",Object(o.b)("em",{parentName:"p"},"cold")," using ",Object(o.b)("inlineCode",{parentName:"p"},"ReplaySubject"),"."),Object(o.b)("p",null,"Second, subjects must be given a name. You can subscribe to a named subject from anywhere in the workflow using the ",Object(o.b)("inlineCode",{parentName:"p"},"SubscribeSubject")," operator, making subjects very useful to define sources of data that can be accessed even at different stages of processing. The following workflow demonstrates how to share an observable sequence of images using subjects."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example of using subjects to share observable sequences",src:n(222).default})),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Subject names have scope. A subject with a given name can be accessed anywhere at the same level it is defined, or inside any node groups defined at that level. You cannot access a subject that was defined in a node group below the level you are in. If node groups are used to define ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/concepts/higher_order/"}),"higher-order observable sequences"),", any subjects defined inside that group will be unique to each created sequence."))))}u.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||p[d]||o;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/subjects-8387d461b70a1b5073bb30e1174a361a.svg"}}]);