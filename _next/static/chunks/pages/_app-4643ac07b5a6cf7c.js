(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6814)}])},6691:function(e,t){"use strict";var n,r,o,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let l="refresh",f="navigate",i="restore",c="server-patch",a="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(u=r||(r={})).fresh="fresh",u.reusable="reusable",u.expired="expired",u.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(1401),f=n(2045),i=n(7420),c=n(7201),a=n(1443),s=n(9953),d=n(5320),p=n(2905),h=n(4318),b=n(953),y=n(6691),v=new Set;function _(e,t,n,r,o,u){if(u||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let j=u.default.forwardRef(function(e,t){let n,r;let{href:i,as:v,children:j,prefetch:g=null,passHref:m,replace:O,shallow:C,scroll:E,locale:P,onClick:T,onMouseEnter:M,onTouchStart:N,legacyBehavior:R=!1,...A}=e;n=j,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let k=u.default.useContext(s.RouterContext),w=u.default.useContext(d.AppRouterContext),I=null!=k?k:w,L=!k,S=!1!==g,U=null===g?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:F,as:K}=u.default.useMemo(()=>{if(!k){let e=x(i);return{href:e,as:v?x(v):e}}let[e,t]=(0,l.resolveHref)(k,i,!0);return{href:e,as:v?(0,l.resolveHref)(k,v):t||e}},[k,i,v]),H=u.default.useRef(F),D=u.default.useRef(K);R&&(r=u.default.Children.only(n));let V=R?r&&"object"==typeof r&&r.ref:t,[z,X,q]=(0,p.useIntersection)({rootMargin:"200px"}),B=u.default.useCallback(e=>{(D.current!==K||H.current!==F)&&(q(),D.current=K,H.current=F),z(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[K,V,F,q,z]);u.default.useEffect(()=>{I&&X&&S&&_(I,F,K,{locale:P},{kind:U},L)},[K,F,X,P,S,null==k?void 0:k.locale,I,L,U]);let G={ref:B,onClick(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,c,a){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};a?u.default.startTransition(d):d()}(e,I,F,K,O,C,E,P,L)},onMouseEnter(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(S||!L)&&_(I,F,K,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){R||"function"!=typeof N||N(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(S||!L)&&_(I,F,K,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,c.isAbsoluteUrl)(K))G.href=K;else if(!R||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);G.href=t||(0,b.addBasePath)((0,a.addLocale)(K,e,null==k?void 0:k.defaultLocale))}return R?u.default.cloneElement(r,G):(0,o.jsx)("a",{...A,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(3815),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!u,[a,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,a,d.current]),[p,a,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1127:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893);function o(e){let{className:t,text:n}=e;return(0,r.jsx)("button",{className:"".concat(t," text-white font-bold py-1 px-2 rounded"),children:n})}},470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=n(4493);function u(e){let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:"min-h-screen bg-gray-100 text-slate-800",children:[(0,r.jsx)(o.default,{}),t]})})}},4493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=n(1664),u=n.n(o),l=n(1127);function f(){return(0,r.jsx)("nav",{className:"sticky top-0 z-50 flex items-center w-full h-16 overflow-hidden bg-white shadow-sm",children:(0,r.jsxs)("div",{className:"container flex items-center justify-between mx-auto",children:[(0,r.jsx)(u(),{href:"/",children:(0,r.jsx)("h1",{className:"text-xl font-bold md:text-3xl",children:"Logo"})}),(0,r.jsx)("div",{className:"flex gap-3 list-none",children:(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/about",children:(0,r.jsx)(l.default,{className:"bg-blue-500 hover:bg-blue-700",text:"About"})})})})]})})}},6814:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(9311);var o=n(470);t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(o.default,{children:(0,r.jsx)(t,{...n})})}},9311:function(){},1664:function(e,t,n){e.exports=n(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);