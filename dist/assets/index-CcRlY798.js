(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))m(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&m(g)}).observe(document,{childList:!0,subtree:!0});function o(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function m(u){if(u.ep)return;u.ep=!0;const p=o(u);fetch(u.href,p)}})();function Wp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _l={exports:{}},sr={},Ml={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function qp(){if(Zc)return se;Zc=1;var i=Symbol.for("react.element"),d=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.iterator;function P(y){return y===null||typeof y!="object"?null:(y=I&&y[I]||y["@@iterator"],typeof y=="function"?y:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function M(y,R,re){this.props=y,this.context=R,this.refs=A,this.updater=re||F}M.prototype.isReactComponent={},M.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},M.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function D(){}D.prototype=M.prototype;function z(y,R,re){this.props=y,this.context=R,this.refs=A,this.updater=re||F}var ee=z.prototype=new D;ee.constructor=z,T(ee,M.prototype),ee.isPureReactComponent=!0;var ne=Array.isArray,me=Object.prototype.hasOwnProperty,ye={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function Pe(y,R,re){var ie,de={},ce=null,fe=null;if(R!=null)for(ie in R.ref!==void 0&&(fe=R.ref),R.key!==void 0&&(ce=""+R.key),R)me.call(R,ie)&&!ge.hasOwnProperty(ie)&&(de[ie]=R[ie]);var pe=arguments.length-2;if(pe===1)de.children=re;else if(1<pe){for(var we=Array(pe),sa=0;sa<pe;sa++)we[sa]=arguments[sa+2];de.children=we}if(y&&y.defaultProps)for(ie in pe=y.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return{$$typeof:i,type:y,key:ce,ref:fe,props:de,_owner:ye.current}}function xe(y,R){return{$$typeof:i,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}function Te(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function Xe(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(re){return R[re]})}var le=/\/+/g;function $e(y,R){return typeof y=="object"&&y!==null&&y.key!=null?Xe(""+y.key):R.toString(36)}function Ve(y,R,re,ie,de){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var fe=!1;if(y===null)fe=!0;else switch(ce){case"string":case"number":fe=!0;break;case"object":switch(y.$$typeof){case i:case d:fe=!0}}if(fe)return fe=y,de=de(fe),y=ie===""?"."+$e(fe,0):ie,ne(de)?(re="",y!=null&&(re=y.replace(le,"$&/")+"/"),Ve(de,R,re,"",function(sa){return sa})):de!=null&&(Te(de)&&(de=xe(de,re+(!de.key||fe&&fe.key===de.key?"":(""+de.key).replace(le,"$&/")+"/")+y)),R.push(de)),1;if(fe=0,ie=ie===""?".":ie+":",ne(y))for(var pe=0;pe<y.length;pe++){ce=y[pe];var we=ie+$e(ce,pe);fe+=Ve(ce,R,re,we,de)}else if(we=P(y),typeof we=="function")for(y=we.call(y),pe=0;!(ce=y.next()).done;)ce=ce.value,we=ie+$e(ce,pe++),fe+=Ve(ce,R,re,we,de);else if(ce==="object")throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return fe}function ra(y,R,re){if(y==null)return y;var ie=[],de=0;return Ve(y,ie,"","",function(ce){return R.call(re,ce,de++)}),ie}function Le(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(re){(y._status===0||y._status===-1)&&(y._status=1,y._result=re)},function(re){(y._status===0||y._status===-1)&&(y._status=2,y._result=re)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var je={current:null},H={transition:null},G={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:H,ReactCurrentOwner:ye};function $(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:ra,forEach:function(y,R,re){ra(y,function(){R.apply(this,arguments)},re)},count:function(y){var R=0;return ra(y,function(){R++}),R},toArray:function(y){return ra(y,function(R){return R})||[]},only:function(y){if(!Te(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},se.Component=M,se.Fragment=o,se.Profiler=u,se.PureComponent=z,se.StrictMode=m,se.Suspense=j,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,se.act=$,se.cloneElement=function(y,R,re){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ie=T({},y.props),de=y.key,ce=y.ref,fe=y._owner;if(R!=null){if(R.ref!==void 0&&(ce=R.ref,fe=ye.current),R.key!==void 0&&(de=""+R.key),y.type&&y.type.defaultProps)var pe=y.type.defaultProps;for(we in R)me.call(R,we)&&!ge.hasOwnProperty(we)&&(ie[we]=R[we]===void 0&&pe!==void 0?pe[we]:R[we])}var we=arguments.length-2;if(we===1)ie.children=re;else if(1<we){pe=Array(we);for(var sa=0;sa<we;sa++)pe[sa]=arguments[sa+2];ie.children=pe}return{$$typeof:i,type:y.type,key:de,ref:ce,props:ie,_owner:fe}},se.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:p,_context:y},y.Consumer=y},se.createElement=Pe,se.createFactory=function(y){var R=Pe.bind(null,y);return R.type=y,R},se.createRef=function(){return{current:null}},se.forwardRef=function(y){return{$$typeof:f,render:y}},se.isValidElement=Te,se.lazy=function(y){return{$$typeof:_,_payload:{_status:-1,_result:y},_init:Le}},se.memo=function(y,R){return{$$typeof:v,type:y,compare:R===void 0?null:R}},se.startTransition=function(y){var R=H.transition;H.transition={};try{y()}finally{H.transition=R}},se.unstable_act=$,se.useCallback=function(y,R){return je.current.useCallback(y,R)},se.useContext=function(y){return je.current.useContext(y)},se.useDebugValue=function(){},se.useDeferredValue=function(y){return je.current.useDeferredValue(y)},se.useEffect=function(y,R){return je.current.useEffect(y,R)},se.useId=function(){return je.current.useId()},se.useImperativeHandle=function(y,R,re){return je.current.useImperativeHandle(y,R,re)},se.useInsertionEffect=function(y,R){return je.current.useInsertionEffect(y,R)},se.useLayoutEffect=function(y,R){return je.current.useLayoutEffect(y,R)},se.useMemo=function(y,R){return je.current.useMemo(y,R)},se.useReducer=function(y,R,re){return je.current.useReducer(y,R,re)},se.useRef=function(y){return je.current.useRef(y)},se.useState=function(y){return je.current.useState(y)},se.useSyncExternalStore=function(y,R,re){return je.current.useSyncExternalStore(y,R,re)},se.useTransition=function(){return je.current.useTransition()},se.version="18.3.1",se}var eu;function Gl(){return eu||(eu=1,Ml.exports=qp()),Ml.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au;function Gp(){if(au)return sr;au=1;var i=Gl(),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(f,j,v){var _,I={},P=null,F=null;v!==void 0&&(P=""+v),j.key!==void 0&&(P=""+j.key),j.ref!==void 0&&(F=j.ref);for(_ in j)m.call(j,_)&&!p.hasOwnProperty(_)&&(I[_]=j[_]);if(f&&f.defaultProps)for(_ in j=f.defaultProps,j)I[_]===void 0&&(I[_]=j[_]);return{$$typeof:d,type:f,key:P,ref:F,props:I,_owner:u.current}}return sr.Fragment=o,sr.jsx=g,sr.jsxs=g,sr}var nu;function Qp(){return nu||(nu=1,_l.exports=Gp()),_l.exports}var e=Qp(),S=Gl();const Xp=Wp(S);var Ps={},Cl={exports:{}},ta={},Tl={exports:{}},Rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function Yp(){return tu||(tu=1,function(i){function d(H,G){var $=H.length;H.push(G);e:for(;0<$;){var y=$-1>>>1,R=H[y];if(0<u(R,G))H[y]=G,H[$]=R,$=y;else break e}}function o(H){return H.length===0?null:H[0]}function m(H){if(H.length===0)return null;var G=H[0],$=H.pop();if($!==G){H[0]=$;e:for(var y=0,R=H.length,re=R>>>1;y<re;){var ie=2*(y+1)-1,de=H[ie],ce=ie+1,fe=H[ce];if(0>u(de,$))ce<R&&0>u(fe,de)?(H[y]=fe,H[ce]=$,y=ce):(H[y]=de,H[ie]=$,y=ie);else if(ce<R&&0>u(fe,$))H[y]=fe,H[ce]=$,y=ce;else break e}}return G}function u(H,G){var $=H.sortIndex-G.sortIndex;return $!==0?$:H.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();i.unstable_now=function(){return g.now()-f}}var j=[],v=[],_=1,I=null,P=3,F=!1,T=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(H){for(var G=o(v);G!==null;){if(G.callback===null)m(v);else if(G.startTime<=H)m(v),G.sortIndex=G.expirationTime,d(j,G);else break;G=o(v)}}function ne(H){if(A=!1,ee(H),!T)if(o(j)!==null)T=!0,Le(me);else{var G=o(v);G!==null&&je(ne,G.startTime-H)}}function me(H,G){T=!1,A&&(A=!1,D(Pe),Pe=-1),F=!0;var $=P;try{for(ee(G),I=o(j);I!==null&&(!(I.expirationTime>G)||H&&!Xe());){var y=I.callback;if(typeof y=="function"){I.callback=null,P=I.priorityLevel;var R=y(I.expirationTime<=G);G=i.unstable_now(),typeof R=="function"?I.callback=R:I===o(j)&&m(j),ee(G)}else m(j);I=o(j)}if(I!==null)var re=!0;else{var ie=o(v);ie!==null&&je(ne,ie.startTime-G),re=!1}return re}finally{I=null,P=$,F=!1}}var ye=!1,ge=null,Pe=-1,xe=5,Te=-1;function Xe(){return!(i.unstable_now()-Te<xe)}function le(){if(ge!==null){var H=i.unstable_now();Te=H;var G=!0;try{G=ge(!0,H)}finally{G?$e():(ye=!1,ge=null)}}else ye=!1}var $e;if(typeof z=="function")$e=function(){z(le)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,ra=Ve.port2;Ve.port1.onmessage=le,$e=function(){ra.postMessage(null)}}else $e=function(){M(le,0)};function Le(H){ge=H,ye||(ye=!0,$e())}function je(H,G){Pe=M(function(){H(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){T||F||(T=!0,Le(me))},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return o(j)},i.unstable_next=function(H){switch(P){case 1:case 2:case 3:var G=3;break;default:G=P}var $=P;P=G;try{return H()}finally{P=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,G){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=P;P=H;try{return G()}finally{P=$}},i.unstable_scheduleCallback=function(H,G,$){var y=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?y+$:y):$=y,H){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=$+R,H={id:_++,callback:G,priorityLevel:H,startTime:$,expirationTime:R,sortIndex:-1},$>y?(H.sortIndex=$,d(v,H),o(j)===null&&H===o(v)&&(A?(D(Pe),Pe=-1):A=!0,je(ne,$-y))):(H.sortIndex=R,d(j,H),T||F||(T=!0,Le(me))),H},i.unstable_shouldYield=Xe,i.unstable_wrapCallback=function(H){var G=P;return function(){var $=P;P=G;try{return H.apply(this,arguments)}finally{P=$}}}}(Rl)),Rl}var ru;function Zp(){return ru||(ru=1,Tl.exports=Yp()),Tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function eh(){if(su)return ta;su=1;var i=Gl(),d=Zp();function o(a){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+a,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+a+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,u={};function p(a,n){g(a,n),g(a+"Capture",n)}function g(a,n){for(u[a]=n,a=0;a<n.length;a++)m.add(n[a])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},I={};function P(a){return j.call(I,a)?!0:j.call(_,a)?!1:v.test(a)?I[a]=!0:(_[a]=!0,!1)}function F(a,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function T(a,n,t,r){if(n===null||typeof n>"u"||F(a,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function A(a,n,t,r,s,l,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=a,this.type=n,this.sanitizeURL=l,this.removeEmptyString=c}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){M[a]=new A(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var n=a[0];M[n]=new A(n,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){M[a]=new A(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){M[a]=new A(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){M[a]=new A(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){M[a]=new A(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){M[a]=new A(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){M[a]=new A(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){M[a]=new A(a,5,!1,a.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function z(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var n=a.replace(D,z);M[n]=new A(n,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var n=a.replace(D,z);M[n]=new A(n,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var n=a.replace(D,z);M[n]=new A(n,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){M[a]=new A(a,1,!1,a.toLowerCase(),null,!1,!1)}),M.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){M[a]=new A(a,1,!1,a.toLowerCase(),null,!0,!0)});function ee(a,n,t,r){var s=M.hasOwnProperty(n)?M[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T(n,t,s,r)&&(t=null),r||s===null?P(n)&&(t===null?a.removeAttribute(n):a.setAttribute(n,""+t)):s.mustUseProperty?a[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?a.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?a.setAttributeNS(r,n,t):a.setAttribute(n,t))))}var ne=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),ye=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),H=Symbol.iterator;function G(a){return a===null||typeof a!="object"?null:(a=H&&a[H]||a["@@iterator"],typeof a=="function"?a:null)}var $=Object.assign,y;function R(a){if(y===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||""}return`
`+y+a}var re=!1;function ie(a,n){if(!a||re)return"";re=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var r=w}Reflect.construct(a,[],n)}else{try{n.call()}catch(w){r=w}a.call(n.prototype)}else{try{throw Error()}catch(w){r=w}a()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var s=w.stack.split(`
`),l=r.stack.split(`
`),c=s.length-1,h=l.length-1;1<=c&&0<=h&&s[c]!==l[h];)h--;for(;1<=c&&0<=h;c--,h--)if(s[c]!==l[h]){if(c!==1||h!==1)do if(c--,h--,0>h||s[c]!==l[h]){var x=`
`+s[c].replace(" at new "," at ");return a.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",a.displayName)),x}while(1<=c&&0<=h);break}}}finally{re=!1,Error.prepareStackTrace=t}return(a=a?a.displayName||a.name:"")?R(a):""}function de(a){switch(a.tag){case 5:return R(a.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return a=ie(a.type,!1),a;case 11:return a=ie(a.type.render,!1),a;case 1:return a=ie(a.type,!0),a;default:return""}}function ce(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case ge:return"Fragment";case ye:return"Portal";case xe:return"Profiler";case Pe:return"StrictMode";case $e:return"Suspense";case Ve:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case Xe:return(a.displayName||"Context")+".Consumer";case Te:return(a._context.displayName||"Context")+".Provider";case le:var n=a.render;return a=a.displayName,a||(a=n.displayName||n.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case ra:return n=a.displayName||null,n!==null?n:ce(a.type)||"Memo";case Le:n=a._payload,a=a._init;try{return ce(a(n))}catch{}}return null}function fe(a){var n=a.type;switch(a.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=n.render,a=a.displayName||a.name||"",n.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(n);case 8:return n===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pe(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function we(a){var n=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sa(a){var n=we(a)?"checked":"value",t=Object.getOwnPropertyDescriptor(a.constructor.prototype,n),r=""+a[n];if(!a.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,l=t.set;return Object.defineProperty(a,n,{configurable:!0,get:function(){return s.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(a,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){a._valueTracker=null,delete a[n]}}}}function xr(a){a._valueTracker||(a._valueTracker=sa(a))}function ro(a){if(!a)return!1;var n=a._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return a&&(r=we(a)?a.checked?"true":"false":a.value),a=r,a!==t?(n.setValue(a),!0):!1}function fr(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function Is(a,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??a._wrapperState.initialChecked})}function so(a,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pe(n.value!=null?n.value:t),a._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function io(a,n){n=n.checked,n!=null&&ee(a,"checked",n,!1)}function Ls(a,n){io(a,n);var t=pe(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&a.value===""||a.value!=t)&&(a.value=""+t):a.value!==""+t&&(a.value=""+t);else if(r==="submit"||r==="reset"){a.removeAttribute("value");return}n.hasOwnProperty("value")?Ds(a,n.type,t):n.hasOwnProperty("defaultValue")&&Ds(a,n.type,pe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(a.defaultChecked=!!n.defaultChecked)}function lo(a,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+a._wrapperState.initialValue,t||n===a.value||(a.value=n),a.defaultValue=n}t=a.name,t!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,t!==""&&(a.name=t)}function Ds(a,n,t){(n!=="number"||fr(a.ownerDocument)!==a)&&(t==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+t&&(a.defaultValue=""+t))}var jt=Array.isArray;function Un(a,n,t,r){if(a=a.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<a.length;t++)s=n.hasOwnProperty("$"+a[t].value),a[t].selected!==s&&(a[t].selected=s),s&&r&&(a[t].defaultSelected=!0)}else{for(t=""+pe(t),n=null,s=0;s<a.length;s++){if(a[s].value===t){a[s].selected=!0,r&&(a[s].defaultSelected=!0);return}n!==null||a[s].disabled||(n=a[s])}n!==null&&(n.selected=!0)}}function Os(a,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function oo(a,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(o(92));if(jt(t)){if(1<t.length)throw Error(o(93));t=t[0]}n=t}n==null&&(n=""),t=n}a._wrapperState={initialValue:pe(t)}}function co(a,n){var t=pe(n.value),r=pe(n.defaultValue);t!=null&&(t=""+t,t!==a.value&&(a.value=t),n.defaultValue==null&&a.defaultValue!==t&&(a.defaultValue=t)),r!=null&&(a.defaultValue=""+r)}function uo(a){var n=a.textContent;n===a._wrapperState.initialValue&&n!==""&&n!==null&&(a.value=n)}function mo(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(a,n){return a==null||a==="http://www.w3.org/1999/xhtml"?mo(n):a==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var kr,po=function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return a(n,t,r,s)})}:a}(function(a,n){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=n;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=kr.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;n.firstChild;)a.appendChild(n.firstChild)}});function bt(a,n){if(n){var t=a.firstChild;if(t&&t===a.lastChild&&t.nodeType===3){t.nodeValue=n;return}}a.textContent=n}var vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xu=["Webkit","ms","Moz","O"];Object.keys(vt).forEach(function(a){Xu.forEach(function(n){n=n+a.charAt(0).toUpperCase()+a.substring(1),vt[n]=vt[a]})});function ho(a,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vt.hasOwnProperty(a)&&vt[a]?(""+n).trim():n+"px"}function go(a,n){a=a.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=ho(t,n[t],r);t==="float"&&(t="cssFloat"),r?a.setProperty(t,s):a[t]=s}}var Yu=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fs(a,n){if(n){if(Yu[a]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,a));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function zs(a,n){if(a.indexOf("-")===-1)return typeof n.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hs=null;function Us(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var $s=null,$n=null,Vn=null;function xo(a){if(a=Vt(a)){if(typeof $s!="function")throw Error(o(280));var n=a.stateNode;n&&(n=Hr(n),$s(a.stateNode,a.type,n))}}function fo(a){$n?Vn?Vn.push(a):Vn=[a]:$n=a}function ko(){if($n){var a=$n,n=Vn;if(Vn=$n=null,xo(a),n)for(a=0;a<n.length;a++)xo(n[a])}}function yo(a,n){return a(n)}function jo(){}var Vs=!1;function bo(a,n,t){if(Vs)return a(n,t);Vs=!0;try{return yo(a,n,t)}finally{Vs=!1,($n!==null||Vn!==null)&&(jo(),ko())}}function Nt(a,n){var t=a.stateNode;if(t===null)return null;var r=Hr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(a=a.type,r=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!r;break e;default:a=!1}if(a)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var Ks=!1;if(f)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{Ks=!1}function Zu(a,n,t,r,s,l,c,h,x){var w=Array.prototype.slice.call(arguments,3);try{n.apply(t,w)}catch(E){this.onError(E)}}var St=!1,yr=null,jr=!1,Js=null,em={onError:function(a){St=!0,yr=a}};function am(a,n,t,r,s,l,c,h,x){St=!1,yr=null,Zu.apply(em,arguments)}function nm(a,n,t,r,s,l,c,h,x){if(am.apply(this,arguments),St){if(St){var w=yr;St=!1,yr=null}else throw Error(o(198));jr||(jr=!0,Js=w)}}function vn(a){var n=a,t=a;if(a.alternate)for(;n.return;)n=n.return;else{a=n;do n=a,n.flags&4098&&(t=n.return),a=n.return;while(a)}return n.tag===3?t:null}function vo(a){if(a.tag===13){var n=a.memoizedState;if(n===null&&(a=a.alternate,a!==null&&(n=a.memoizedState)),n!==null)return n.dehydrated}return null}function No(a){if(vn(a)!==a)throw Error(o(188))}function tm(a){var n=a.alternate;if(!n){if(n=vn(a),n===null)throw Error(o(188));return n!==a?null:a}for(var t=a,r=n;;){var s=t.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===t)return No(s),a;if(l===r)return No(s),n;l=l.sibling}throw Error(o(188))}if(t.return!==r.return)t=s,r=l;else{for(var c=!1,h=s.child;h;){if(h===t){c=!0,t=s,r=l;break}if(h===r){c=!0,r=s,t=l;break}h=h.sibling}if(!c){for(h=l.child;h;){if(h===t){c=!0,t=l,r=s;break}if(h===r){c=!0,r=l,t=s;break}h=h.sibling}if(!c)throw Error(o(189))}}if(t.alternate!==r)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?a:n}function wo(a){return a=tm(a),a!==null?So(a):null}function So(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var n=So(a);if(n!==null)return n;a=a.sibling}return null}var Po=d.unstable_scheduleCallback,_o=d.unstable_cancelCallback,rm=d.unstable_shouldYield,sm=d.unstable_requestPaint,Ee=d.unstable_now,im=d.unstable_getCurrentPriorityLevel,Ws=d.unstable_ImmediatePriority,Mo=d.unstable_UserBlockingPriority,br=d.unstable_NormalPriority,lm=d.unstable_LowPriority,Co=d.unstable_IdlePriority,vr=null,Pa=null;function om(a){if(Pa&&typeof Pa.onCommitFiberRoot=="function")try{Pa.onCommitFiberRoot(vr,a,void 0,(a.current.flags&128)===128)}catch{}}var fa=Math.clz32?Math.clz32:um,dm=Math.log,cm=Math.LN2;function um(a){return a>>>=0,a===0?32:31-(dm(a)/cm|0)|0}var Nr=64,wr=4194304;function Pt(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Sr(a,n){var t=a.pendingLanes;if(t===0)return 0;var r=0,s=a.suspendedLanes,l=a.pingedLanes,c=t&268435455;if(c!==0){var h=c&~s;h!==0?r=Pt(h):(l&=c,l!==0&&(r=Pt(l)))}else c=t&~s,c!==0?r=Pt(c):l!==0&&(r=Pt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,l=n&-n,s>=l||s===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=a.entangledLanes,n!==0)for(a=a.entanglements,n&=r;0<n;)t=31-fa(n),s=1<<t,r|=a[t],n&=~s;return r}function mm(a,n){switch(a){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pm(a,n){for(var t=a.suspendedLanes,r=a.pingedLanes,s=a.expirationTimes,l=a.pendingLanes;0<l;){var c=31-fa(l),h=1<<c,x=s[c];x===-1?(!(h&t)||h&r)&&(s[c]=mm(h,n)):x<=n&&(a.expiredLanes|=h),l&=~h}}function qs(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function To(){var a=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),a}function Gs(a){for(var n=[],t=0;31>t;t++)n.push(a);return n}function _t(a,n,t){a.pendingLanes|=n,n!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,n=31-fa(n),a[n]=t}function hm(a,n){var t=a.pendingLanes&~n;a.pendingLanes=n,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=n,a.mutableReadLanes&=n,a.entangledLanes&=n,n=a.entanglements;var r=a.eventTimes;for(a=a.expirationTimes;0<t;){var s=31-fa(t),l=1<<s;n[s]=0,r[s]=-1,a[s]=-1,t&=~l}}function Qs(a,n){var t=a.entangledLanes|=n;for(a=a.entanglements;t;){var r=31-fa(t),s=1<<r;s&n|a[r]&n&&(a[r]|=n),t&=~s}}var he=0;function Ro(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var Eo,Xs,Ao,Io,Lo,Ys=!1,Pr=[],Xa=null,Ya=null,Za=null,Mt=new Map,Ct=new Map,en=[],gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Do(a,n){switch(a){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Mt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(n.pointerId)}}function Tt(a,n,t,r,s,l){return a===null||a.nativeEvent!==l?(a={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},n!==null&&(n=Vt(n),n!==null&&Xs(n)),a):(a.eventSystemFlags|=r,n=a.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),a)}function xm(a,n,t,r,s){switch(n){case"focusin":return Xa=Tt(Xa,a,n,t,r,s),!0;case"dragenter":return Ya=Tt(Ya,a,n,t,r,s),!0;case"mouseover":return Za=Tt(Za,a,n,t,r,s),!0;case"pointerover":var l=s.pointerId;return Mt.set(l,Tt(Mt.get(l)||null,a,n,t,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Ct.set(l,Tt(Ct.get(l)||null,a,n,t,r,s)),!0}return!1}function Oo(a){var n=Nn(a.target);if(n!==null){var t=vn(n);if(t!==null){if(n=t.tag,n===13){if(n=vo(t),n!==null){a.blockedOn=n,Lo(a.priority,function(){Ao(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){a.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}a.blockedOn=null}function _r(a){if(a.blockedOn!==null)return!1;for(var n=a.targetContainers;0<n.length;){var t=ei(a.domEventName,a.eventSystemFlags,n[0],a.nativeEvent);if(t===null){t=a.nativeEvent;var r=new t.constructor(t.type,t);Hs=r,t.target.dispatchEvent(r),Hs=null}else return n=Vt(t),n!==null&&Xs(n),a.blockedOn=t,!1;n.shift()}return!0}function Bo(a,n,t){_r(a)&&t.delete(n)}function fm(){Ys=!1,Xa!==null&&_r(Xa)&&(Xa=null),Ya!==null&&_r(Ya)&&(Ya=null),Za!==null&&_r(Za)&&(Za=null),Mt.forEach(Bo),Ct.forEach(Bo)}function Rt(a,n){a.blockedOn===n&&(a.blockedOn=null,Ys||(Ys=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,fm)))}function Et(a){function n(s){return Rt(s,a)}if(0<Pr.length){Rt(Pr[0],a);for(var t=1;t<Pr.length;t++){var r=Pr[t];r.blockedOn===a&&(r.blockedOn=null)}}for(Xa!==null&&Rt(Xa,a),Ya!==null&&Rt(Ya,a),Za!==null&&Rt(Za,a),Mt.forEach(n),Ct.forEach(n),t=0;t<en.length;t++)r=en[t],r.blockedOn===a&&(r.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)Oo(t),t.blockedOn===null&&en.shift()}var Kn=ne.ReactCurrentBatchConfig,Mr=!0;function km(a,n,t,r){var s=he,l=Kn.transition;Kn.transition=null;try{he=1,Zs(a,n,t,r)}finally{he=s,Kn.transition=l}}function ym(a,n,t,r){var s=he,l=Kn.transition;Kn.transition=null;try{he=4,Zs(a,n,t,r)}finally{he=s,Kn.transition=l}}function Zs(a,n,t,r){if(Mr){var s=ei(a,n,t,r);if(s===null)fi(a,n,r,Cr,t),Do(a,r);else if(xm(s,a,n,t,r))r.stopPropagation();else if(Do(a,r),n&4&&-1<gm.indexOf(a)){for(;s!==null;){var l=Vt(s);if(l!==null&&Eo(l),l=ei(a,n,t,r),l===null&&fi(a,n,r,Cr,t),l===s)break;s=l}s!==null&&r.stopPropagation()}else fi(a,n,r,null,t)}}var Cr=null;function ei(a,n,t,r){if(Cr=null,a=Us(r),a=Nn(a),a!==null)if(n=vn(a),n===null)a=null;else if(t=n.tag,t===13){if(a=vo(n),a!==null)return a;a=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;a=null}else n!==a&&(a=null);return Cr=a,null}function Fo(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(im()){case Ws:return 1;case Mo:return 4;case br:case lm:return 16;case Co:return 536870912;default:return 16}default:return 16}}var an=null,ai=null,Tr=null;function zo(){if(Tr)return Tr;var a,n=ai,t=n.length,r,s="value"in an?an.value:an.textContent,l=s.length;for(a=0;a<t&&n[a]===s[a];a++);var c=t-a;for(r=1;r<=c&&n[t-r]===s[l-r];r++);return Tr=s.slice(a,1<r?1-r:void 0)}function Rr(a){var n=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&n===13&&(a=13)):a=n,a===10&&(a=13),32<=a||a===13?a:0}function Er(){return!0}function Ho(){return!1}function ia(a){function n(t,r,s,l,c){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var h in a)a.hasOwnProperty(h)&&(t=a[h],this[h]=t?t(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Er:Ho,this.isPropagationStopped=Ho,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),n}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=ia(Jn),At=$({},Jn,{view:0,detail:0}),jm=ia(At),ti,ri,It,Ar=$({},At,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==It&&(It&&a.type==="mousemove"?(ti=a.screenX-It.screenX,ri=a.screenY-It.screenY):ri=ti=0,It=a),ti)},movementY:function(a){return"movementY"in a?a.movementY:ri}}),Uo=ia(Ar),bm=$({},Ar,{dataTransfer:0}),vm=ia(bm),Nm=$({},At,{relatedTarget:0}),si=ia(Nm),wm=$({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sm=ia(wm),Pm=$({},Jn,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),_m=ia(Pm),Mm=$({},Jn,{data:0}),$o=ia(Mm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(a){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(a):(a=Rm[a])?!!n[a]:!1}function ii(){return Em}var Am=$({},At,{key:function(a){if(a.key){var n=Cm[a.key]||a.key;if(n!=="Unidentified")return n}return a.type==="keypress"?(a=Rr(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Tm[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(a){return a.type==="keypress"?Rr(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Rr(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Im=ia(Am),Lm=$({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=ia(Lm),Dm=$({},At,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),Om=ia(Dm),Bm=$({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=ia(Bm),zm=$({},Ar,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=ia(zm),Um=[9,13,27,32],li=f&&"CompositionEvent"in window,Lt=null;f&&"documentMode"in document&&(Lt=document.documentMode);var $m=f&&"TextEvent"in window&&!Lt,Ko=f&&(!li||Lt&&8<Lt&&11>=Lt),Jo=" ",Wo=!1;function qo(a,n){switch(a){case"keyup":return Um.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Go(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Wn=!1;function Vm(a,n){switch(a){case"compositionend":return Go(n);case"keypress":return n.which!==32?null:(Wo=!0,Jo);case"textInput":return a=n.data,a===Jo&&Wo?null:a;default:return null}}function Km(a,n){if(Wn)return a==="compositionend"||!li&&qo(a,n)?(a=zo(),Tr=ai=an=null,Wn=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ko&&n.locale!=="ko"?null:n.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qo(a){var n=a&&a.nodeName&&a.nodeName.toLowerCase();return n==="input"?!!Jm[a.type]:n==="textarea"}function Xo(a,n,t,r){fo(r),n=Br(n,"onChange"),0<n.length&&(t=new ni("onChange","change",null,t,r),a.push({event:t,listeners:n}))}var Dt=null,Ot=null;function Wm(a){gd(a,0)}function Ir(a){var n=Yn(a);if(ro(n))return a}function qm(a,n){if(a==="change")return n}var Yo=!1;if(f){var oi;if(f){var di="oninput"in document;if(!di){var Zo=document.createElement("div");Zo.setAttribute("oninput","return;"),di=typeof Zo.oninput=="function"}oi=di}else oi=!1;Yo=oi&&(!document.documentMode||9<document.documentMode)}function ed(){Dt&&(Dt.detachEvent("onpropertychange",ad),Ot=Dt=null)}function ad(a){if(a.propertyName==="value"&&Ir(Ot)){var n=[];Xo(n,Ot,a,Us(a)),bo(Wm,n)}}function Gm(a,n,t){a==="focusin"?(ed(),Dt=n,Ot=t,Dt.attachEvent("onpropertychange",ad)):a==="focusout"&&ed()}function Qm(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Ir(Ot)}function Xm(a,n){if(a==="click")return Ir(n)}function Ym(a,n){if(a==="input"||a==="change")return Ir(n)}function Zm(a,n){return a===n&&(a!==0||1/a===1/n)||a!==a&&n!==n}var ka=typeof Object.is=="function"?Object.is:Zm;function Bt(a,n){if(ka(a,n))return!0;if(typeof a!="object"||a===null||typeof n!="object"||n===null)return!1;var t=Object.keys(a),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!j.call(n,s)||!ka(a[s],n[s]))return!1}return!0}function nd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function td(a,n){var t=nd(a);a=0;for(var r;t;){if(t.nodeType===3){if(r=a+t.textContent.length,a<=n&&r>=n)return{node:t,offset:n-a};a=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nd(t)}}function rd(a,n){return a&&n?a===n?!0:a&&a.nodeType===3?!1:n&&n.nodeType===3?rd(a,n.parentNode):"contains"in a?a.contains(n):a.compareDocumentPosition?!!(a.compareDocumentPosition(n)&16):!1:!1}function sd(){for(var a=window,n=fr();n instanceof a.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)a=n.contentWindow;else break;n=fr(a.document)}return n}function ci(a){var n=a&&a.nodeName&&a.nodeName.toLowerCase();return n&&(n==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||n==="textarea"||a.contentEditable==="true")}function ep(a){var n=sd(),t=a.focusedElem,r=a.selectionRange;if(n!==t&&t&&t.ownerDocument&&rd(t.ownerDocument.documentElement,t)){if(r!==null&&ci(t)){if(n=r.start,a=r.end,a===void 0&&(a=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(a,t.value.length);else if(a=(n=t.ownerDocument||document)&&n.defaultView||window,a.getSelection){a=a.getSelection();var s=t.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!a.extend&&l>r&&(s=r,r=l,l=s),s=td(t,l);var c=td(t,r);s&&c&&(a.rangeCount!==1||a.anchorNode!==s.node||a.anchorOffset!==s.offset||a.focusNode!==c.node||a.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),a.removeAllRanges(),l>r?(a.addRange(n),a.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),a.addRange(n)))}}for(n=[],a=t;a=a.parentNode;)a.nodeType===1&&n.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)a=n[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var ap=f&&"documentMode"in document&&11>=document.documentMode,qn=null,ui=null,Ft=null,mi=!1;function id(a,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mi||qn==null||qn!==fr(r)||(r=qn,"selectionStart"in r&&ci(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ft&&Bt(Ft,r)||(Ft=r,r=Br(ui,"onSelect"),0<r.length&&(n=new ni("onSelect","select",null,n,t),a.push({event:n,listeners:r}),n.target=qn)))}function Lr(a,n){var t={};return t[a.toLowerCase()]=n.toLowerCase(),t["Webkit"+a]="webkit"+n,t["Moz"+a]="moz"+n,t}var Gn={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},pi={},ld={};f&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Dr(a){if(pi[a])return pi[a];if(!Gn[a])return a;var n=Gn[a],t;for(t in n)if(n.hasOwnProperty(t)&&t in ld)return pi[a]=n[t];return a}var od=Dr("animationend"),dd=Dr("animationiteration"),cd=Dr("animationstart"),ud=Dr("transitionend"),md=new Map,pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(a,n){md.set(a,n),p(n,[a])}for(var hi=0;hi<pd.length;hi++){var gi=pd[hi],np=gi.toLowerCase(),tp=gi[0].toUpperCase()+gi.slice(1);nn(np,"on"+tp)}nn(od,"onAnimationEnd"),nn(dd,"onAnimationIteration"),nn(cd,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(ud,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));function hd(a,n,t){var r=a.type||"unknown-event";a.currentTarget=t,nm(r,n,void 0,a),a.currentTarget=null}function gd(a,n){n=(n&4)!==0;for(var t=0;t<a.length;t++){var r=a[t],s=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var c=r.length-1;0<=c;c--){var h=r[c],x=h.instance,w=h.currentTarget;if(h=h.listener,x!==l&&s.isPropagationStopped())break e;hd(s,h,w),l=x}else for(c=0;c<r.length;c++){if(h=r[c],x=h.instance,w=h.currentTarget,h=h.listener,x!==l&&s.isPropagationStopped())break e;hd(s,h,w),l=x}}}if(jr)throw a=Js,jr=!1,Js=null,a}function be(a,n){var t=n[Ni];t===void 0&&(t=n[Ni]=new Set);var r=a+"__bubble";t.has(r)||(xd(n,a,2,!1),t.add(r))}function xi(a,n,t){var r=0;n&&(r|=4),xd(t,a,r,n)}var Or="_reactListening"+Math.random().toString(36).slice(2);function Ht(a){if(!a[Or]){a[Or]=!0,m.forEach(function(t){t!=="selectionchange"&&(rp.has(t)||xi(t,!1,a),xi(t,!0,a))});var n=a.nodeType===9?a:a.ownerDocument;n===null||n[Or]||(n[Or]=!0,xi("selectionchange",!1,n))}}function xd(a,n,t,r){switch(Fo(n)){case 1:var s=km;break;case 4:s=ym;break;default:s=Zs}t=s.bind(null,n,t,a),s=void 0,!Ks||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?a.addEventListener(n,t,{capture:!0,passive:s}):a.addEventListener(n,t,!0):s!==void 0?a.addEventListener(n,t,{passive:s}):a.addEventListener(n,t,!1)}function fi(a,n,t,r,s){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var h=r.stateNode.containerInfo;if(h===s||h.nodeType===8&&h.parentNode===s)break;if(c===4)for(c=r.return;c!==null;){var x=c.tag;if((x===3||x===4)&&(x=c.stateNode.containerInfo,x===s||x.nodeType===8&&x.parentNode===s))return;c=c.return}for(;h!==null;){if(c=Nn(h),c===null)return;if(x=c.tag,x===5||x===6){r=l=c;continue e}h=h.parentNode}}r=r.return}bo(function(){var w=l,E=Us(t),L=[];e:{var C=md.get(a);if(C!==void 0){var U=ni,K=a;switch(a){case"keypress":if(Rr(t)===0)break e;case"keydown":case"keyup":U=Im;break;case"focusin":K="focus",U=si;break;case"focusout":K="blur",U=si;break;case"beforeblur":case"afterblur":U=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Om;break;case od:case dd:case cd:U=Sm;break;case ud:U=Fm;break;case"scroll":U=jm;break;case"wheel":U=Hm;break;case"copy":case"cut":case"paste":U=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Vo}var J=(n&4)!==0,Ae=!J&&a==="scroll",b=J?C!==null?C+"Capture":null:C;J=[];for(var k=w,N;k!==null;){N=k;var B=N.stateNode;if(N.tag===5&&B!==null&&(N=B,b!==null&&(B=Nt(k,b),B!=null&&J.push(Ut(k,B,N)))),Ae)break;k=k.return}0<J.length&&(C=new U(C,K,null,t,E),L.push({event:C,listeners:J}))}}if(!(n&7)){e:{if(C=a==="mouseover"||a==="pointerover",U=a==="mouseout"||a==="pointerout",C&&t!==Hs&&(K=t.relatedTarget||t.fromElement)&&(Nn(K)||K[Ba]))break e;if((U||C)&&(C=E.window===E?E:(C=E.ownerDocument)?C.defaultView||C.parentWindow:window,U?(K=t.relatedTarget||t.toElement,U=w,K=K?Nn(K):null,K!==null&&(Ae=vn(K),K!==Ae||K.tag!==5&&K.tag!==6)&&(K=null)):(U=null,K=w),U!==K)){if(J=Uo,B="onMouseLeave",b="onMouseEnter",k="mouse",(a==="pointerout"||a==="pointerover")&&(J=Vo,B="onPointerLeave",b="onPointerEnter",k="pointer"),Ae=U==null?C:Yn(U),N=K==null?C:Yn(K),C=new J(B,k+"leave",U,t,E),C.target=Ae,C.relatedTarget=N,B=null,Nn(E)===w&&(J=new J(b,k+"enter",K,t,E),J.target=N,J.relatedTarget=Ae,B=J),Ae=B,U&&K)a:{for(J=U,b=K,k=0,N=J;N;N=Qn(N))k++;for(N=0,B=b;B;B=Qn(B))N++;for(;0<k-N;)J=Qn(J),k--;for(;0<N-k;)b=Qn(b),N--;for(;k--;){if(J===b||b!==null&&J===b.alternate)break a;J=Qn(J),b=Qn(b)}J=null}else J=null;U!==null&&fd(L,C,U,J,!1),K!==null&&Ae!==null&&fd(L,Ae,K,J,!0)}}e:{if(C=w?Yn(w):window,U=C.nodeName&&C.nodeName.toLowerCase(),U==="select"||U==="input"&&C.type==="file")var W=qm;else if(Qo(C))if(Yo)W=Ym;else{W=Qm;var X=Gm}else(U=C.nodeName)&&U.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(W=Xm);if(W&&(W=W(a,w))){Xo(L,W,t,E);break e}X&&X(a,C,w),a==="focusout"&&(X=C._wrapperState)&&X.controlled&&C.type==="number"&&Ds(C,"number",C.value)}switch(X=w?Yn(w):window,a){case"focusin":(Qo(X)||X.contentEditable==="true")&&(qn=X,ui=w,Ft=null);break;case"focusout":Ft=ui=qn=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,id(L,t,E);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":id(L,t,E)}var Y;if(li)e:{switch(a){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Wn?qo(a,t)&&(ae="onCompositionEnd"):a==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(Ko&&t.locale!=="ko"&&(Wn||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Wn&&(Y=zo()):(an=E,ai="value"in an?an.value:an.textContent,Wn=!0)),X=Br(w,ae),0<X.length&&(ae=new $o(ae,a,null,t,E),L.push({event:ae,listeners:X}),Y?ae.data=Y:(Y=Go(t),Y!==null&&(ae.data=Y)))),(Y=$m?Vm(a,t):Km(a,t))&&(w=Br(w,"onBeforeInput"),0<w.length&&(E=new $o("onBeforeInput","beforeinput",null,t,E),L.push({event:E,listeners:w}),E.data=Y))}gd(L,n)})}function Ut(a,n,t){return{instance:a,listener:n,currentTarget:t}}function Br(a,n){for(var t=n+"Capture",r=[];a!==null;){var s=a,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Nt(a,t),l!=null&&r.unshift(Ut(a,l,s)),l=Nt(a,n),l!=null&&r.push(Ut(a,l,s))),a=a.return}return r}function Qn(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function fd(a,n,t,r,s){for(var l=n._reactName,c=[];t!==null&&t!==r;){var h=t,x=h.alternate,w=h.stateNode;if(x!==null&&x===r)break;h.tag===5&&w!==null&&(h=w,s?(x=Nt(t,l),x!=null&&c.unshift(Ut(t,x,h))):s||(x=Nt(t,l),x!=null&&c.push(Ut(t,x,h)))),t=t.return}c.length!==0&&a.push({event:n,listeners:c})}var sp=/\r\n?/g,ip=/\u0000|\uFFFD/g;function kd(a){return(typeof a=="string"?a:""+a).replace(sp,`
`).replace(ip,"")}function Fr(a,n,t){if(n=kd(n),kd(a)!==n&&t)throw Error(o(425))}function zr(){}var ki=null,yi=null;function ji(a,n){return a==="textarea"||a==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bi=typeof setTimeout=="function"?setTimeout:void 0,lp=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,op=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(a){return yd.resolve(null).then(a).catch(dp)}:bi;function dp(a){setTimeout(function(){throw a})}function vi(a,n){var t=n,r=0;do{var s=t.nextSibling;if(a.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){a.removeChild(s),Et(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);Et(n)}function tn(a){for(;a!=null;a=a.nextSibling){var n=a.nodeType;if(n===1||n===3)break;if(n===8){if(n=a.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return a}function jd(a){a=a.previousSibling;for(var n=0;a;){if(a.nodeType===8){var t=a.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return a;n--}else t==="/$"&&n++}a=a.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),_a="__reactFiber$"+Xn,$t="__reactProps$"+Xn,Ba="__reactContainer$"+Xn,Ni="__reactEvents$"+Xn,cp="__reactListeners$"+Xn,up="__reactHandles$"+Xn;function Nn(a){var n=a[_a];if(n)return n;for(var t=a.parentNode;t;){if(n=t[Ba]||t[_a]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(a=jd(a);a!==null;){if(t=a[_a])return t;a=jd(a)}return n}a=t,t=a.parentNode}return null}function Vt(a){return a=a[_a]||a[Ba],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function Yn(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(o(33))}function Hr(a){return a[$t]||null}var wi=[],Zn=-1;function rn(a){return{current:a}}function ve(a){0>Zn||(a.current=wi[Zn],wi[Zn]=null,Zn--)}function ke(a,n){Zn++,wi[Zn]=a.current,a.current=n}var sn={},Ke=rn(sn),Ye=rn(!1),wn=sn;function et(a,n){var t=a.type.contextTypes;if(!t)return sn;var r=a.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in t)s[l]=n[l];return r&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=n,a.__reactInternalMemoizedMaskedChildContext=s),s}function Ze(a){return a=a.childContextTypes,a!=null}function Ur(){ve(Ye),ve(Ke)}function bd(a,n,t){if(Ke.current!==sn)throw Error(o(168));ke(Ke,n),ke(Ye,t)}function vd(a,n,t){var r=a.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(o(108,fe(a)||"Unknown",s));return $({},t,r)}function $r(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||sn,wn=Ke.current,ke(Ke,a),ke(Ye,Ye.current),!0}function Nd(a,n,t){var r=a.stateNode;if(!r)throw Error(o(169));t?(a=vd(a,n,wn),r.__reactInternalMemoizedMergedChildContext=a,ve(Ye),ve(Ke),ke(Ke,a)):ve(Ye),ke(Ye,t)}var Fa=null,Vr=!1,Si=!1;function wd(a){Fa===null?Fa=[a]:Fa.push(a)}function mp(a){Vr=!0,wd(a)}function ln(){if(!Si&&Fa!==null){Si=!0;var a=0,n=he;try{var t=Fa;for(he=1;a<t.length;a++){var r=t[a];do r=r(!0);while(r!==null)}Fa=null,Vr=!1}catch(s){throw Fa!==null&&(Fa=Fa.slice(a+1)),Po(Ws,ln),s}finally{he=n,Si=!1}}return null}var at=[],nt=0,Kr=null,Jr=0,ua=[],ma=0,Sn=null,za=1,Ha="";function Pn(a,n){at[nt++]=Jr,at[nt++]=Kr,Kr=a,Jr=n}function Sd(a,n,t){ua[ma++]=za,ua[ma++]=Ha,ua[ma++]=Sn,Sn=a;var r=za;a=Ha;var s=32-fa(r)-1;r&=~(1<<s),t+=1;var l=32-fa(n)+s;if(30<l){var c=s-s%5;l=(r&(1<<c)-1).toString(32),r>>=c,s-=c,za=1<<32-fa(n)+s|t<<s|r,Ha=l+a}else za=1<<l|t<<s|r,Ha=a}function Pi(a){a.return!==null&&(Pn(a,1),Sd(a,1,0))}function _i(a){for(;a===Kr;)Kr=at[--nt],at[nt]=null,Jr=at[--nt],at[nt]=null;for(;a===Sn;)Sn=ua[--ma],ua[ma]=null,Ha=ua[--ma],ua[ma]=null,za=ua[--ma],ua[ma]=null}var la=null,oa=null,Se=!1,ya=null;function Pd(a,n){var t=xa(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=a,n=a.deletions,n===null?(a.deletions=[t],a.flags|=16):n.push(t)}function _d(a,n){switch(a.tag){case 5:var t=a.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(a.stateNode=n,la=a,oa=tn(n.firstChild),!0):!1;case 6:return n=a.pendingProps===""||n.nodeType!==3?null:n,n!==null?(a.stateNode=n,la=a,oa=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Sn!==null?{id:za,overflow:Ha}:null,a.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xa(18,null,null,0),t.stateNode=n,t.return=a,a.child=t,la=a,oa=null,!0):!1;default:return!1}}function Mi(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Ci(a){if(Se){var n=oa;if(n){var t=n;if(!_d(a,n)){if(Mi(a))throw Error(o(418));n=tn(t.nextSibling);var r=la;n&&_d(a,n)?Pd(r,t):(a.flags=a.flags&-4097|2,Se=!1,la=a)}}else{if(Mi(a))throw Error(o(418));a.flags=a.flags&-4097|2,Se=!1,la=a}}}function Md(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;la=a}function Wr(a){if(a!==la)return!1;if(!Se)return Md(a),Se=!0,!1;var n;if((n=a.tag!==3)&&!(n=a.tag!==5)&&(n=a.type,n=n!=="head"&&n!=="body"&&!ji(a.type,a.memoizedProps)),n&&(n=oa)){if(Mi(a))throw Cd(),Error(o(418));for(;n;)Pd(a,n),n=tn(n.nextSibling)}if(Md(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));e:{for(a=a.nextSibling,n=0;a;){if(a.nodeType===8){var t=a.data;if(t==="/$"){if(n===0){oa=tn(a.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}a=a.nextSibling}oa=null}}else oa=la?tn(a.stateNode.nextSibling):null;return!0}function Cd(){for(var a=oa;a;)a=tn(a.nextSibling)}function tt(){oa=la=null,Se=!1}function Ti(a){ya===null?ya=[a]:ya.push(a)}var pp=ne.ReactCurrentBatchConfig;function Kt(a,n,t){if(a=t.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o(309));var r=t.stateNode}if(!r)throw Error(o(147,a));var s=r,l=""+a;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(c){var h=s.refs;c===null?delete h[l]:h[l]=c},n._stringRef=l,n)}if(typeof a!="string")throw Error(o(284));if(!t._owner)throw Error(o(290,a))}return a}function qr(a,n){throw a=Object.prototype.toString.call(n),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":a))}function Td(a){var n=a._init;return n(a._payload)}function Rd(a){function n(b,k){if(a){var N=b.deletions;N===null?(b.deletions=[k],b.flags|=16):N.push(k)}}function t(b,k){if(!a)return null;for(;k!==null;)n(b,k),k=k.sibling;return null}function r(b,k){for(b=new Map;k!==null;)k.key!==null?b.set(k.key,k):b.set(k.index,k),k=k.sibling;return b}function s(b,k){return b=gn(b,k),b.index=0,b.sibling=null,b}function l(b,k,N){return b.index=N,a?(N=b.alternate,N!==null?(N=N.index,N<k?(b.flags|=2,k):N):(b.flags|=2,k)):(b.flags|=1048576,k)}function c(b){return a&&b.alternate===null&&(b.flags|=2),b}function h(b,k,N,B){return k===null||k.tag!==6?(k=bl(N,b.mode,B),k.return=b,k):(k=s(k,N),k.return=b,k)}function x(b,k,N,B){var W=N.type;return W===ge?E(b,k,N.props.children,B,N.key):k!==null&&(k.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Le&&Td(W)===k.type)?(B=s(k,N.props),B.ref=Kt(b,k,N),B.return=b,B):(B=ks(N.type,N.key,N.props,null,b.mode,B),B.ref=Kt(b,k,N),B.return=b,B)}function w(b,k,N,B){return k===null||k.tag!==4||k.stateNode.containerInfo!==N.containerInfo||k.stateNode.implementation!==N.implementation?(k=vl(N,b.mode,B),k.return=b,k):(k=s(k,N.children||[]),k.return=b,k)}function E(b,k,N,B,W){return k===null||k.tag!==7?(k=In(N,b.mode,B,W),k.return=b,k):(k=s(k,N),k.return=b,k)}function L(b,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return k=bl(""+k,b.mode,N),k.return=b,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case me:return N=ks(k.type,k.key,k.props,null,b.mode,N),N.ref=Kt(b,null,k),N.return=b,N;case ye:return k=vl(k,b.mode,N),k.return=b,k;case Le:var B=k._init;return L(b,B(k._payload),N)}if(jt(k)||G(k))return k=In(k,b.mode,N,null),k.return=b,k;qr(b,k)}return null}function C(b,k,N,B){var W=k!==null?k.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return W!==null?null:h(b,k,""+N,B);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case me:return N.key===W?x(b,k,N,B):null;case ye:return N.key===W?w(b,k,N,B):null;case Le:return W=N._init,C(b,k,W(N._payload),B)}if(jt(N)||G(N))return W!==null?null:E(b,k,N,B,null);qr(b,N)}return null}function U(b,k,N,B,W){if(typeof B=="string"&&B!==""||typeof B=="number")return b=b.get(N)||null,h(k,b,""+B,W);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case me:return b=b.get(B.key===null?N:B.key)||null,x(k,b,B,W);case ye:return b=b.get(B.key===null?N:B.key)||null,w(k,b,B,W);case Le:var X=B._init;return U(b,k,N,X(B._payload),W)}if(jt(B)||G(B))return b=b.get(N)||null,E(k,b,B,W,null);qr(k,B)}return null}function K(b,k,N,B){for(var W=null,X=null,Y=k,ae=k=0,ze=null;Y!==null&&ae<N.length;ae++){Y.index>ae?(ze=Y,Y=null):ze=Y.sibling;var ue=C(b,Y,N[ae],B);if(ue===null){Y===null&&(Y=ze);break}a&&Y&&ue.alternate===null&&n(b,Y),k=l(ue,k,ae),X===null?W=ue:X.sibling=ue,X=ue,Y=ze}if(ae===N.length)return t(b,Y),Se&&Pn(b,ae),W;if(Y===null){for(;ae<N.length;ae++)Y=L(b,N[ae],B),Y!==null&&(k=l(Y,k,ae),X===null?W=Y:X.sibling=Y,X=Y);return Se&&Pn(b,ae),W}for(Y=r(b,Y);ae<N.length;ae++)ze=U(Y,b,ae,N[ae],B),ze!==null&&(a&&ze.alternate!==null&&Y.delete(ze.key===null?ae:ze.key),k=l(ze,k,ae),X===null?W=ze:X.sibling=ze,X=ze);return a&&Y.forEach(function(xn){return n(b,xn)}),Se&&Pn(b,ae),W}function J(b,k,N,B){var W=G(N);if(typeof W!="function")throw Error(o(150));if(N=W.call(N),N==null)throw Error(o(151));for(var X=W=null,Y=k,ae=k=0,ze=null,ue=N.next();Y!==null&&!ue.done;ae++,ue=N.next()){Y.index>ae?(ze=Y,Y=null):ze=Y.sibling;var xn=C(b,Y,ue.value,B);if(xn===null){Y===null&&(Y=ze);break}a&&Y&&xn.alternate===null&&n(b,Y),k=l(xn,k,ae),X===null?W=xn:X.sibling=xn,X=xn,Y=ze}if(ue.done)return t(b,Y),Se&&Pn(b,ae),W;if(Y===null){for(;!ue.done;ae++,ue=N.next())ue=L(b,ue.value,B),ue!==null&&(k=l(ue,k,ae),X===null?W=ue:X.sibling=ue,X=ue);return Se&&Pn(b,ae),W}for(Y=r(b,Y);!ue.done;ae++,ue=N.next())ue=U(Y,b,ae,ue.value,B),ue!==null&&(a&&ue.alternate!==null&&Y.delete(ue.key===null?ae:ue.key),k=l(ue,k,ae),X===null?W=ue:X.sibling=ue,X=ue);return a&&Y.forEach(function(Jp){return n(b,Jp)}),Se&&Pn(b,ae),W}function Ae(b,k,N,B){if(typeof N=="object"&&N!==null&&N.type===ge&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case me:e:{for(var W=N.key,X=k;X!==null;){if(X.key===W){if(W=N.type,W===ge){if(X.tag===7){t(b,X.sibling),k=s(X,N.props.children),k.return=b,b=k;break e}}else if(X.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Le&&Td(W)===X.type){t(b,X.sibling),k=s(X,N.props),k.ref=Kt(b,X,N),k.return=b,b=k;break e}t(b,X);break}else n(b,X);X=X.sibling}N.type===ge?(k=In(N.props.children,b.mode,B,N.key),k.return=b,b=k):(B=ks(N.type,N.key,N.props,null,b.mode,B),B.ref=Kt(b,k,N),B.return=b,b=B)}return c(b);case ye:e:{for(X=N.key;k!==null;){if(k.key===X)if(k.tag===4&&k.stateNode.containerInfo===N.containerInfo&&k.stateNode.implementation===N.implementation){t(b,k.sibling),k=s(k,N.children||[]),k.return=b,b=k;break e}else{t(b,k);break}else n(b,k);k=k.sibling}k=vl(N,b.mode,B),k.return=b,b=k}return c(b);case Le:return X=N._init,Ae(b,k,X(N._payload),B)}if(jt(N))return K(b,k,N,B);if(G(N))return J(b,k,N,B);qr(b,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,k!==null&&k.tag===6?(t(b,k.sibling),k=s(k,N),k.return=b,b=k):(t(b,k),k=bl(N,b.mode,B),k.return=b,b=k),c(b)):t(b,k)}return Ae}var rt=Rd(!0),Ed=Rd(!1),Gr=rn(null),Qr=null,st=null,Ri=null;function Ei(){Ri=st=Qr=null}function Ai(a){var n=Gr.current;ve(Gr),a._currentValue=n}function Ii(a,n,t){for(;a!==null;){var r=a.alternate;if((a.childLanes&n)!==n?(a.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),a===t)break;a=a.return}}function it(a,n){Qr=a,Ri=st=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&n&&(ea=!0),a.firstContext=null)}function pa(a){var n=a._currentValue;if(Ri!==a)if(a={context:a,memoizedValue:n,next:null},st===null){if(Qr===null)throw Error(o(308));st=a,Qr.dependencies={lanes:0,firstContext:a}}else st=st.next=a;return n}var _n=null;function Li(a){_n===null?_n=[a]:_n.push(a)}function Ad(a,n,t,r){var s=n.interleaved;return s===null?(t.next=t,Li(n)):(t.next=s.next,s.next=t),n.interleaved=t,Ua(a,r)}function Ua(a,n){a.lanes|=n;var t=a.alternate;for(t!==null&&(t.lanes|=n),t=a,a=a.return;a!==null;)a.childLanes|=n,t=a.alternate,t!==null&&(t.childLanes|=n),t=a,a=a.return;return t.tag===3?t.stateNode:null}var on=!1;function Di(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(a,n){a=a.updateQueue,n.updateQueue===a&&(n.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function $a(a,n){return{eventTime:a,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(a,n,t){var r=a.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,Ua(a,t)}return s=r.interleaved,s===null?(n.next=n,Li(r)):(n.next=s.next,s.next=n),r.interleaved=n,Ua(a,t)}function Xr(a,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=a.pendingLanes,t|=r,n.lanes=t,Qs(a,t)}}function Ld(a,n){var t=a.updateQueue,r=a.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?s=l=c:l=l.next=c,t=t.next}while(t!==null);l===null?s=l=n:l=l.next=n}else s=l=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},a.updateQueue=t;return}a=t.lastBaseUpdate,a===null?t.firstBaseUpdate=n:a.next=n,t.lastBaseUpdate=n}function Yr(a,n,t,r){var s=a.updateQueue;on=!1;var l=s.firstBaseUpdate,c=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var x=h,w=x.next;x.next=null,c===null?l=w:c.next=w,c=x;var E=a.alternate;E!==null&&(E=E.updateQueue,h=E.lastBaseUpdate,h!==c&&(h===null?E.firstBaseUpdate=w:h.next=w,E.lastBaseUpdate=x))}if(l!==null){var L=s.baseState;c=0,E=w=x=null,h=l;do{var C=h.lane,U=h.eventTime;if((r&C)===C){E!==null&&(E=E.next={eventTime:U,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var K=a,J=h;switch(C=n,U=t,J.tag){case 1:if(K=J.payload,typeof K=="function"){L=K.call(U,L,C);break e}L=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=J.payload,C=typeof K=="function"?K.call(U,L,C):K,C==null)break e;L=$({},L,C);break e;case 2:on=!0}}h.callback!==null&&h.lane!==0&&(a.flags|=64,C=s.effects,C===null?s.effects=[h]:C.push(h))}else U={eventTime:U,lane:C,tag:h.tag,payload:h.payload,callback:h.callback,next:null},E===null?(w=E=U,x=L):E=E.next=U,c|=C;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;C=h,h=C.next,C.next=null,s.lastBaseUpdate=C,s.shared.pending=null}}while(!0);if(E===null&&(x=L),s.baseState=x,s.firstBaseUpdate=w,s.lastBaseUpdate=E,n=s.shared.interleaved,n!==null){s=n;do c|=s.lane,s=s.next;while(s!==n)}else l===null&&(s.shared.lanes=0);Tn|=c,a.lanes=c,a.memoizedState=L}}function Dd(a,n,t){if(a=n.effects,n.effects=null,a!==null)for(n=0;n<a.length;n++){var r=a[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(o(191,s));s.call(r)}}}var Jt={},Ma=rn(Jt),Wt=rn(Jt),qt=rn(Jt);function Mn(a){if(a===Jt)throw Error(o(174));return a}function Oi(a,n){switch(ke(qt,n),ke(Wt,a),ke(Ma,Jt),a=n.nodeType,a){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bs(null,"");break;default:a=a===8?n.parentNode:n,n=a.namespaceURI||null,a=a.tagName,n=Bs(n,a)}ve(Ma),ke(Ma,n)}function lt(){ve(Ma),ve(Wt),ve(qt)}function Od(a){Mn(qt.current);var n=Mn(Ma.current),t=Bs(n,a.type);n!==t&&(ke(Wt,a),ke(Ma,t))}function Bi(a){Wt.current===a&&(ve(Ma),ve(Wt))}var _e=rn(0);function Zr(a){for(var n=a;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=[];function zi(){for(var a=0;a<Fi.length;a++)Fi[a]._workInProgressVersionPrimary=null;Fi.length=0}var es=ne.ReactCurrentDispatcher,Hi=ne.ReactCurrentBatchConfig,Cn=0,Me=null,De=null,Be=null,as=!1,Gt=!1,Qt=0,hp=0;function Je(){throw Error(o(321))}function Ui(a,n){if(n===null)return!1;for(var t=0;t<n.length&&t<a.length;t++)if(!ka(a[t],n[t]))return!1;return!0}function $i(a,n,t,r,s,l){if(Cn=l,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,es.current=a===null||a.memoizedState===null?kp:yp,a=t(r,s),Gt){l=0;do{if(Gt=!1,Qt=0,25<=l)throw Error(o(301));l+=1,Be=De=null,n.updateQueue=null,es.current=jp,a=t(r,s)}while(Gt)}if(es.current=rs,n=De!==null&&De.next!==null,Cn=0,Be=De=Me=null,as=!1,n)throw Error(o(300));return a}function Vi(){var a=Qt!==0;return Qt=0,a}function Ca(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Me.memoizedState=Be=a:Be=Be.next=a,Be}function ha(){if(De===null){var a=Me.alternate;a=a!==null?a.memoizedState:null}else a=De.next;var n=Be===null?Me.memoizedState:Be.next;if(n!==null)Be=n,De=a;else{if(a===null)throw Error(o(310));De=a,a={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Me.memoizedState=Be=a:Be=Be.next=a}return Be}function Xt(a,n){return typeof n=="function"?n(a):n}function Ki(a){var n=ha(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=a;var r=De,s=r.baseQueue,l=t.pending;if(l!==null){if(s!==null){var c=s.next;s.next=l.next,l.next=c}r.baseQueue=s=l,t.pending=null}if(s!==null){l=s.next,r=r.baseState;var h=c=null,x=null,w=l;do{var E=w.lane;if((Cn&E)===E)x!==null&&(x=x.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:a(r,w.action);else{var L={lane:E,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};x===null?(h=x=L,c=r):x=x.next=L,Me.lanes|=E,Tn|=E}w=w.next}while(w!==null&&w!==l);x===null?c=r:x.next=h,ka(r,n.memoizedState)||(ea=!0),n.memoizedState=r,n.baseState=c,n.baseQueue=x,t.lastRenderedState=r}if(a=t.interleaved,a!==null){s=a;do l=s.lane,Me.lanes|=l,Tn|=l,s=s.next;while(s!==a)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ji(a){var n=ha(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=a;var r=t.dispatch,s=t.pending,l=n.memoizedState;if(s!==null){t.pending=null;var c=s=s.next;do l=a(l,c.action),c=c.next;while(c!==s);ka(l,n.memoizedState)||(ea=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Bd(){}function Fd(a,n){var t=Me,r=ha(),s=n(),l=!ka(r.memoizedState,s);if(l&&(r.memoizedState=s,ea=!0),r=r.queue,Wi(Ud.bind(null,t,r,a),[a]),r.getSnapshot!==n||l||Be!==null&&Be.memoizedState.tag&1){if(t.flags|=2048,Yt(9,Hd.bind(null,t,r,s,n),void 0,null),Fe===null)throw Error(o(349));Cn&30||zd(t,n,s)}return s}function zd(a,n,t){a.flags|=16384,a={getSnapshot:n,value:t},n=Me.updateQueue,n===null?(n={lastEffect:null,stores:null},Me.updateQueue=n,n.stores=[a]):(t=n.stores,t===null?n.stores=[a]:t.push(a))}function Hd(a,n,t,r){n.value=t,n.getSnapshot=r,$d(n)&&Vd(a)}function Ud(a,n,t){return t(function(){$d(n)&&Vd(a)})}function $d(a){var n=a.getSnapshot;a=a.value;try{var t=n();return!ka(a,t)}catch{return!0}}function Vd(a){var n=Ua(a,1);n!==null&&Na(n,a,1,-1)}function Kd(a){var n=Ca();return typeof a=="function"&&(a=a()),n.memoizedState=n.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},n.queue=a,a=a.dispatch=fp.bind(null,Me,a),[n.memoizedState,a]}function Yt(a,n,t,r){return a={tag:a,create:n,destroy:t,deps:r,next:null},n=Me.updateQueue,n===null?(n={lastEffect:null,stores:null},Me.updateQueue=n,n.lastEffect=a.next=a):(t=n.lastEffect,t===null?n.lastEffect=a.next=a:(r=t.next,t.next=a,a.next=r,n.lastEffect=a)),a}function Jd(){return ha().memoizedState}function ns(a,n,t,r){var s=Ca();Me.flags|=a,s.memoizedState=Yt(1|n,t,void 0,r===void 0?null:r)}function ts(a,n,t,r){var s=ha();r=r===void 0?null:r;var l=void 0;if(De!==null){var c=De.memoizedState;if(l=c.destroy,r!==null&&Ui(r,c.deps)){s.memoizedState=Yt(n,t,l,r);return}}Me.flags|=a,s.memoizedState=Yt(1|n,t,l,r)}function Wd(a,n){return ns(8390656,8,a,n)}function Wi(a,n){return ts(2048,8,a,n)}function qd(a,n){return ts(4,2,a,n)}function Gd(a,n){return ts(4,4,a,n)}function Qd(a,n){if(typeof n=="function")return a=a(),n(a),function(){n(null)};if(n!=null)return a=a(),n.current=a,function(){n.current=null}}function Xd(a,n,t){return t=t!=null?t.concat([a]):null,ts(4,4,Qd.bind(null,n,a),t)}function qi(){}function Yd(a,n){var t=ha();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ui(n,r[1])?r[0]:(t.memoizedState=[a,n],a)}function Zd(a,n){var t=ha();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ui(n,r[1])?r[0]:(a=a(),t.memoizedState=[a,n],a)}function ec(a,n,t){return Cn&21?(ka(t,n)||(t=To(),Me.lanes|=t,Tn|=t,a.baseState=!0),n):(a.baseState&&(a.baseState=!1,ea=!0),a.memoizedState=t)}function gp(a,n){var t=he;he=t!==0&&4>t?t:4,a(!0);var r=Hi.transition;Hi.transition={};try{a(!1),n()}finally{he=t,Hi.transition=r}}function ac(){return ha().memoizedState}function xp(a,n,t){var r=pn(a);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},nc(a))tc(n,t);else if(t=Ad(a,n,t,r),t!==null){var s=Qe();Na(t,a,r,s),rc(t,n,r)}}function fp(a,n,t){var r=pn(a),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(nc(a))tc(n,s);else{var l=a.alternate;if(a.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var c=n.lastRenderedState,h=l(c,t);if(s.hasEagerState=!0,s.eagerState=h,ka(h,c)){var x=n.interleaved;x===null?(s.next=s,Li(n)):(s.next=x.next,x.next=s),n.interleaved=s;return}}catch{}finally{}t=Ad(a,n,s,r),t!==null&&(s=Qe(),Na(t,a,r,s),rc(t,n,r))}}function nc(a){var n=a.alternate;return a===Me||n!==null&&n===Me}function tc(a,n){Gt=as=!0;var t=a.pending;t===null?n.next=n:(n.next=t.next,t.next=n),a.pending=n}function rc(a,n,t){if(t&4194240){var r=n.lanes;r&=a.pendingLanes,t|=r,n.lanes=t,Qs(a,t)}}var rs={readContext:pa,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},kp={readContext:pa,useCallback:function(a,n){return Ca().memoizedState=[a,n===void 0?null:n],a},useContext:pa,useEffect:Wd,useImperativeHandle:function(a,n,t){return t=t!=null?t.concat([a]):null,ns(4194308,4,Qd.bind(null,n,a),t)},useLayoutEffect:function(a,n){return ns(4194308,4,a,n)},useInsertionEffect:function(a,n){return ns(4,2,a,n)},useMemo:function(a,n){var t=Ca();return n=n===void 0?null:n,a=a(),t.memoizedState=[a,n],a},useReducer:function(a,n,t){var r=Ca();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:n},r.queue=a,a=a.dispatch=xp.bind(null,Me,a),[r.memoizedState,a]},useRef:function(a){var n=Ca();return a={current:a},n.memoizedState=a},useState:Kd,useDebugValue:qi,useDeferredValue:function(a){return Ca().memoizedState=a},useTransition:function(){var a=Kd(!1),n=a[0];return a=gp.bind(null,a[1]),Ca().memoizedState=a,[n,a]},useMutableSource:function(){},useSyncExternalStore:function(a,n,t){var r=Me,s=Ca();if(Se){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),Fe===null)throw Error(o(349));Cn&30||zd(r,n,t)}s.memoizedState=t;var l={value:t,getSnapshot:n};return s.queue=l,Wd(Ud.bind(null,r,l,a),[a]),r.flags|=2048,Yt(9,Hd.bind(null,r,l,t,n),void 0,null),t},useId:function(){var a=Ca(),n=Fe.identifierPrefix;if(Se){var t=Ha,r=za;t=(r&~(1<<32-fa(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=hp++,n=":"+n+"r"+t.toString(32)+":";return a.memoizedState=n},unstable_isNewReconciler:!1},yp={readContext:pa,useCallback:Yd,useContext:pa,useEffect:Wi,useImperativeHandle:Xd,useInsertionEffect:qd,useLayoutEffect:Gd,useMemo:Zd,useReducer:Ki,useRef:Jd,useState:function(){return Ki(Xt)},useDebugValue:qi,useDeferredValue:function(a){var n=ha();return ec(n,De.memoizedState,a)},useTransition:function(){var a=Ki(Xt)[0],n=ha().memoizedState;return[a,n]},useMutableSource:Bd,useSyncExternalStore:Fd,useId:ac,unstable_isNewReconciler:!1},jp={readContext:pa,useCallback:Yd,useContext:pa,useEffect:Wi,useImperativeHandle:Xd,useInsertionEffect:qd,useLayoutEffect:Gd,useMemo:Zd,useReducer:Ji,useRef:Jd,useState:function(){return Ji(Xt)},useDebugValue:qi,useDeferredValue:function(a){var n=ha();return De===null?n.memoizedState=a:ec(n,De.memoizedState,a)},useTransition:function(){var a=Ji(Xt)[0],n=ha().memoizedState;return[a,n]},useMutableSource:Bd,useSyncExternalStore:Fd,useId:ac,unstable_isNewReconciler:!1};function ja(a,n){if(a&&a.defaultProps){n=$({},n),a=a.defaultProps;for(var t in a)n[t]===void 0&&(n[t]=a[t]);return n}return n}function Gi(a,n,t,r){n=a.memoizedState,t=t(r,n),t=t==null?n:$({},n,t),a.memoizedState=t,a.lanes===0&&(a.updateQueue.baseState=t)}var ss={isMounted:function(a){return(a=a._reactInternals)?vn(a)===a:!1},enqueueSetState:function(a,n,t){a=a._reactInternals;var r=Qe(),s=pn(a),l=$a(r,s);l.payload=n,t!=null&&(l.callback=t),n=dn(a,l,s),n!==null&&(Na(n,a,s,r),Xr(n,a,s))},enqueueReplaceState:function(a,n,t){a=a._reactInternals;var r=Qe(),s=pn(a),l=$a(r,s);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=dn(a,l,s),n!==null&&(Na(n,a,s,r),Xr(n,a,s))},enqueueForceUpdate:function(a,n){a=a._reactInternals;var t=Qe(),r=pn(a),s=$a(t,r);s.tag=2,n!=null&&(s.callback=n),n=dn(a,s,r),n!==null&&(Na(n,a,r,t),Xr(n,a,r))}};function sc(a,n,t,r,s,l,c){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(r,l,c):n.prototype&&n.prototype.isPureReactComponent?!Bt(t,r)||!Bt(s,l):!0}function ic(a,n,t){var r=!1,s=sn,l=n.contextType;return typeof l=="object"&&l!==null?l=pa(l):(s=Ze(n)?wn:Ke.current,r=n.contextTypes,l=(r=r!=null)?et(a,s):sn),n=new n(t,l),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ss,a.stateNode=n,n._reactInternals=a,r&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=s,a.__reactInternalMemoizedMaskedChildContext=l),n}function lc(a,n,t,r){a=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==a&&ss.enqueueReplaceState(n,n.state,null)}function Qi(a,n,t,r){var s=a.stateNode;s.props=t,s.state=a.memoizedState,s.refs={},Di(a);var l=n.contextType;typeof l=="object"&&l!==null?s.context=pa(l):(l=Ze(n)?wn:Ke.current,s.context=et(a,l)),s.state=a.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Gi(a,n,l,t),s.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&ss.enqueueReplaceState(s,s.state,null),Yr(a,t,s,r),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308)}function ot(a,n){try{var t="",r=n;do t+=de(r),r=r.return;while(r);var s=t}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:a,source:n,stack:s,digest:null}}function Xi(a,n,t){return{value:a,source:null,stack:t??null,digest:n??null}}function Yi(a,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var bp=typeof WeakMap=="function"?WeakMap:Map;function oc(a,n,t){t=$a(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ms||(ms=!0,pl=r),Yi(a,n)},t}function dc(a,n,t){t=$a(-1,t),t.tag=3;var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){Yi(a,n)}}var l=a.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Yi(a,n),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function cc(a,n,t){var r=a.pingCache;if(r===null){r=a.pingCache=new bp;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),a=Lp.bind(null,a,n,t),n.then(a,a))}function uc(a){do{var n;if((n=a.tag===13)&&(n=a.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return a;a=a.return}while(a!==null);return null}function mc(a,n,t,r,s){return a.mode&1?(a.flags|=65536,a.lanes=s,a):(a===n?a.flags|=65536:(a.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$a(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),a)}var vp=ne.ReactCurrentOwner,ea=!1;function Ge(a,n,t,r){n.child=a===null?Ed(n,null,t,r):rt(n,a.child,t,r)}function pc(a,n,t,r,s){t=t.render;var l=n.ref;return it(n,s),r=$i(a,n,t,r,l,s),t=Vi(),a!==null&&!ea?(n.updateQueue=a.updateQueue,n.flags&=-2053,a.lanes&=~s,Va(a,n,s)):(Se&&t&&Pi(n),n.flags|=1,Ge(a,n,r,s),n.child)}function hc(a,n,t,r,s){if(a===null){var l=t.type;return typeof l=="function"&&!jl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,gc(a,n,l,r,s)):(a=ks(t.type,null,r,n,n.mode,s),a.ref=n.ref,a.return=n,n.child=a)}if(l=a.child,!(a.lanes&s)){var c=l.memoizedProps;if(t=t.compare,t=t!==null?t:Bt,t(c,r)&&a.ref===n.ref)return Va(a,n,s)}return n.flags|=1,a=gn(l,r),a.ref=n.ref,a.return=n,n.child=a}function gc(a,n,t,r,s){if(a!==null){var l=a.memoizedProps;if(Bt(l,r)&&a.ref===n.ref)if(ea=!1,n.pendingProps=r=l,(a.lanes&s)!==0)a.flags&131072&&(ea=!0);else return n.lanes=a.lanes,Va(a,n,s)}return Zi(a,n,t,r,s)}function xc(a,n,t){var r=n.pendingProps,s=r.children,l=a!==null?a.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(ct,da),da|=t;else{if(!(t&1073741824))return a=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:a,cachePool:null,transitions:null},n.updateQueue=null,ke(ct,da),da|=a,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ke(ct,da),da|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ke(ct,da),da|=r;return Ge(a,n,s,t),n.child}function fc(a,n){var t=n.ref;(a===null&&t!==null||a!==null&&a.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zi(a,n,t,r,s){var l=Ze(t)?wn:Ke.current;return l=et(n,l),it(n,s),t=$i(a,n,t,r,l,s),r=Vi(),a!==null&&!ea?(n.updateQueue=a.updateQueue,n.flags&=-2053,a.lanes&=~s,Va(a,n,s)):(Se&&r&&Pi(n),n.flags|=1,Ge(a,n,t,s),n.child)}function kc(a,n,t,r,s){if(Ze(t)){var l=!0;$r(n)}else l=!1;if(it(n,s),n.stateNode===null)ls(a,n),ic(n,t,r),Qi(n,t,r,s),r=!0;else if(a===null){var c=n.stateNode,h=n.memoizedProps;c.props=h;var x=c.context,w=t.contextType;typeof w=="object"&&w!==null?w=pa(w):(w=Ze(t)?wn:Ke.current,w=et(n,w));var E=t.getDerivedStateFromProps,L=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function";L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==r||x!==w)&&lc(n,c,r,w),on=!1;var C=n.memoizedState;c.state=C,Yr(n,r,c,s),x=n.memoizedState,h!==r||C!==x||Ye.current||on?(typeof E=="function"&&(Gi(n,t,E,r),x=n.memoizedState),(h=on||sc(n,t,h,r,C,x,w))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=x),c.props=r,c.state=x,c.context=w,r=h):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Id(a,n),h=n.memoizedProps,w=n.type===n.elementType?h:ja(n.type,h),c.props=w,L=n.pendingProps,C=c.context,x=t.contextType,typeof x=="object"&&x!==null?x=pa(x):(x=Ze(t)?wn:Ke.current,x=et(n,x));var U=t.getDerivedStateFromProps;(E=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==L||C!==x)&&lc(n,c,r,x),on=!1,C=n.memoizedState,c.state=C,Yr(n,r,c,s);var K=n.memoizedState;h!==L||C!==K||Ye.current||on?(typeof U=="function"&&(Gi(n,t,U,r),K=n.memoizedState),(w=on||sc(n,t,w,r,C,K,x)||!1)?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,K,x),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,K,x)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===a.memoizedProps&&C===a.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&C===a.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=K),c.props=r,c.state=K,c.context=x,r=w):(typeof c.componentDidUpdate!="function"||h===a.memoizedProps&&C===a.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&C===a.memoizedState||(n.flags|=1024),r=!1)}return el(a,n,t,r,l,s)}function el(a,n,t,r,s,l){fc(a,n);var c=(n.flags&128)!==0;if(!r&&!c)return s&&Nd(n,t,!1),Va(a,n,l);r=n.stateNode,vp.current=n;var h=c&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,a!==null&&c?(n.child=rt(n,a.child,null,l),n.child=rt(n,null,h,l)):Ge(a,n,h,l),n.memoizedState=r.state,s&&Nd(n,t,!0),n.child}function yc(a){var n=a.stateNode;n.pendingContext?bd(a,n.pendingContext,n.pendingContext!==n.context):n.context&&bd(a,n.context,!1),Oi(a,n.containerInfo)}function jc(a,n,t,r,s){return tt(),Ti(s),n.flags|=256,Ge(a,n,t,r),n.child}var al={dehydrated:null,treeContext:null,retryLane:0};function nl(a){return{baseLanes:a,cachePool:null,transitions:null}}function bc(a,n,t){var r=n.pendingProps,s=_e.current,l=!1,c=(n.flags&128)!==0,h;if((h=c)||(h=a!==null&&a.memoizedState===null?!1:(s&2)!==0),h?(l=!0,n.flags&=-129):(a===null||a.memoizedState!==null)&&(s|=1),ke(_e,s&1),a===null)return Ci(n),a=n.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(n.mode&1?a.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(c=r.children,a=r.fallback,l?(r=n.mode,l=n.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=ys(c,r,0,null),a=In(a,r,t,null),l.return=n,a.return=n,l.sibling=a,n.child=l,n.child.memoizedState=nl(t),n.memoizedState=al,a):tl(n,c));if(s=a.memoizedState,s!==null&&(h=s.dehydrated,h!==null))return Np(a,n,c,r,h,s,t);if(l){l=r.fallback,c=n.mode,s=a.child,h=s.sibling;var x={mode:"hidden",children:r.children};return!(c&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=x,n.deletions=null):(r=gn(s,x),r.subtreeFlags=s.subtreeFlags&14680064),h!==null?l=gn(h,l):(l=In(l,c,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,c=a.child.memoizedState,c=c===null?nl(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=a.childLanes&~t,n.memoizedState=al,r}return l=a.child,a=l.sibling,r=gn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,a!==null&&(t=n.deletions,t===null?(n.deletions=[a],n.flags|=16):t.push(a)),n.child=r,n.memoizedState=null,r}function tl(a,n){return n=ys({mode:"visible",children:n},a.mode,0,null),n.return=a,a.child=n}function is(a,n,t,r){return r!==null&&Ti(r),rt(n,a.child,null,t),a=tl(n,n.pendingProps.children),a.flags|=2,n.memoizedState=null,a}function Np(a,n,t,r,s,l,c){if(t)return n.flags&256?(n.flags&=-257,r=Xi(Error(o(422))),is(a,n,c,r)):n.memoizedState!==null?(n.child=a.child,n.flags|=128,null):(l=r.fallback,s=n.mode,r=ys({mode:"visible",children:r.children},s,0,null),l=In(l,s,c,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&rt(n,a.child,null,c),n.child.memoizedState=nl(c),n.memoizedState=al,l);if(!(n.mode&1))return is(a,n,c,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var h=r.dgst;return r=h,l=Error(o(419)),r=Xi(l,r,void 0),is(a,n,c,r)}if(h=(c&a.childLanes)!==0,ea||h){if(r=Fe,r!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|c)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Ua(a,s),Na(r,a,s,-1))}return yl(),r=Xi(Error(o(421))),is(a,n,c,r)}return s.data==="$?"?(n.flags|=128,n.child=a.child,n=Dp.bind(null,a),s._reactRetry=n,null):(a=l.treeContext,oa=tn(s.nextSibling),la=n,Se=!0,ya=null,a!==null&&(ua[ma++]=za,ua[ma++]=Ha,ua[ma++]=Sn,za=a.id,Ha=a.overflow,Sn=n),n=tl(n,r.children),n.flags|=4096,n)}function vc(a,n,t){a.lanes|=n;var r=a.alternate;r!==null&&(r.lanes|=n),Ii(a.return,n,t)}function rl(a,n,t,r,s){var l=a.memoizedState;l===null?a.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=s)}function Nc(a,n,t){var r=n.pendingProps,s=r.revealOrder,l=r.tail;if(Ge(a,n,r.children,t),r=_e.current,r&2)r=r&1|2,n.flags|=128;else{if(a!==null&&a.flags&128)e:for(a=n.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&vc(a,t,n);else if(a.tag===19)vc(a,t,n);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r&=1}if(ke(_e,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)a=t.alternate,a!==null&&Zr(a)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),rl(n,!1,s,t,l);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(a=s.alternate,a!==null&&Zr(a)===null){n.child=s;break}a=s.sibling,s.sibling=t,t=s,s=a}rl(n,!0,t,null,l);break;case"together":rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ls(a,n){!(n.mode&1)&&a!==null&&(a.alternate=null,n.alternate=null,n.flags|=2)}function Va(a,n,t){if(a!==null&&(n.dependencies=a.dependencies),Tn|=n.lanes,!(t&n.childLanes))return null;if(a!==null&&n.child!==a.child)throw Error(o(153));if(n.child!==null){for(a=n.child,t=gn(a,a.pendingProps),n.child=t,t.return=n;a.sibling!==null;)a=a.sibling,t=t.sibling=gn(a,a.pendingProps),t.return=n;t.sibling=null}return n.child}function wp(a,n,t){switch(n.tag){case 3:yc(n),tt();break;case 5:Od(n);break;case 1:Ze(n.type)&&$r(n);break;case 4:Oi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;ke(Gr,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ke(_e,_e.current&1),n.flags|=128,null):t&n.child.childLanes?bc(a,n,t):(ke(_e,_e.current&1),a=Va(a,n,t),a!==null?a.sibling:null);ke(_e,_e.current&1);break;case 19:if(r=(t&n.childLanes)!==0,a.flags&128){if(r)return Nc(a,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(_e,_e.current),r)break;return null;case 22:case 23:return n.lanes=0,xc(a,n,t)}return Va(a,n,t)}var wc,sl,Sc,Pc;wc=function(a,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)a.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},sl=function(){},Sc=function(a,n,t,r){var s=a.memoizedProps;if(s!==r){a=n.stateNode,Mn(Ma.current);var l=null;switch(t){case"input":s=Is(a,s),r=Is(a,r),l=[];break;case"select":s=$({},s,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":s=Os(a,s),r=Os(a,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=zr)}Fs(t,r);var c;t=null;for(w in s)if(!r.hasOwnProperty(w)&&s.hasOwnProperty(w)&&s[w]!=null)if(w==="style"){var h=s[w];for(c in h)h.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(u.hasOwnProperty(w)?l||(l=[]):(l=l||[]).push(w,null));for(w in r){var x=r[w];if(h=s!=null?s[w]:void 0,r.hasOwnProperty(w)&&x!==h&&(x!=null||h!=null))if(w==="style")if(h){for(c in h)!h.hasOwnProperty(c)||x&&x.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in x)x.hasOwnProperty(c)&&h[c]!==x[c]&&(t||(t={}),t[c]=x[c])}else t||(l||(l=[]),l.push(w,t)),t=x;else w==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,h=h?h.__html:void 0,x!=null&&h!==x&&(l=l||[]).push(w,x)):w==="children"?typeof x!="string"&&typeof x!="number"||(l=l||[]).push(w,""+x):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(u.hasOwnProperty(w)?(x!=null&&w==="onScroll"&&be("scroll",a),l||h===x||(l=[])):(l=l||[]).push(w,x))}t&&(l=l||[]).push("style",t);var w=l;(n.updateQueue=w)&&(n.flags|=4)}},Pc=function(a,n,t,r){t!==r&&(n.flags|=4)};function Zt(a,n){if(!Se)switch(a.tailMode){case"hidden":n=a.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?a.tail=null:t.sibling=null;break;case"collapsed":t=a.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||a.tail===null?a.tail=null:a.tail.sibling=null:r.sibling=null}}function We(a){var n=a.alternate!==null&&a.alternate.child===a.child,t=0,r=0;if(n)for(var s=a.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=a,s=s.sibling;else for(s=a.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=a,s=s.sibling;return a.subtreeFlags|=r,a.childLanes=t,n}function Sp(a,n,t){var r=n.pendingProps;switch(_i(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return Ze(n.type)&&Ur(),We(n),null;case 3:return r=n.stateNode,lt(),ve(Ye),ve(Ke),zi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(a===null||a.child===null)&&(Wr(n)?n.flags|=4:a===null||a.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ya!==null&&(xl(ya),ya=null))),sl(a,n),We(n),null;case 5:Bi(n);var s=Mn(qt.current);if(t=n.type,a!==null&&n.stateNode!=null)Sc(a,n,t,r,s),a.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(o(166));return We(n),null}if(a=Mn(Ma.current),Wr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[_a]=n,r[$t]=l,a=(n.mode&1)!==0,t){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(s=0;s<zt.length;s++)be(zt[s],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":so(r,l),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},be("invalid",r);break;case"textarea":oo(r,l),be("invalid",r)}Fs(t,l),s=null;for(var c in l)if(l.hasOwnProperty(c)){var h=l[c];c==="children"?typeof h=="string"?r.textContent!==h&&(l.suppressHydrationWarning!==!0&&Fr(r.textContent,h,a),s=["children",h]):typeof h=="number"&&r.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&Fr(r.textContent,h,a),s=["children",""+h]):u.hasOwnProperty(c)&&h!=null&&c==="onScroll"&&be("scroll",r)}switch(t){case"input":xr(r),lo(r,l,!0);break;case"textarea":xr(r),uo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=zr)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=mo(t)),a==="http://www.w3.org/1999/xhtml"?t==="script"?(a=c.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof r.is=="string"?a=c.createElement(t,{is:r.is}):(a=c.createElement(t),t==="select"&&(c=a,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):a=c.createElementNS(a,t),a[_a]=n,a[$t]=r,wc(a,n,!1,!1),n.stateNode=a;e:{switch(c=zs(t,r),t){case"dialog":be("cancel",a),be("close",a),s=r;break;case"iframe":case"object":case"embed":be("load",a),s=r;break;case"video":case"audio":for(s=0;s<zt.length;s++)be(zt[s],a);s=r;break;case"source":be("error",a),s=r;break;case"img":case"image":case"link":be("error",a),be("load",a),s=r;break;case"details":be("toggle",a),s=r;break;case"input":so(a,r),s=Is(a,r),be("invalid",a);break;case"option":s=r;break;case"select":a._wrapperState={wasMultiple:!!r.multiple},s=$({},r,{value:void 0}),be("invalid",a);break;case"textarea":oo(a,r),s=Os(a,r),be("invalid",a);break;default:s=r}Fs(t,s),h=s;for(l in h)if(h.hasOwnProperty(l)){var x=h[l];l==="style"?go(a,x):l==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&po(a,x)):l==="children"?typeof x=="string"?(t!=="textarea"||x!=="")&&bt(a,x):typeof x=="number"&&bt(a,""+x):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(u.hasOwnProperty(l)?x!=null&&l==="onScroll"&&be("scroll",a):x!=null&&ee(a,l,x,c))}switch(t){case"input":xr(a),lo(a,r,!1);break;case"textarea":xr(a),uo(a);break;case"option":r.value!=null&&a.setAttribute("value",""+pe(r.value));break;case"select":a.multiple=!!r.multiple,l=r.value,l!=null?Un(a,!!r.multiple,l,!1):r.defaultValue!=null&&Un(a,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(a.onclick=zr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return We(n),null;case 6:if(a&&n.stateNode!=null)Pc(a,n,a.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(o(166));if(t=Mn(qt.current),Mn(Ma.current),Wr(n)){if(r=n.stateNode,t=n.memoizedProps,r[_a]=n,(l=r.nodeValue!==t)&&(a=la,a!==null))switch(a.tag){case 3:Fr(r.nodeValue,t,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,t,(a.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[_a]=n,n.stateNode=r}return We(n),null;case 13:if(ve(_e),r=n.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(Se&&oa!==null&&n.mode&1&&!(n.flags&128))Cd(),tt(),n.flags|=98560,l=!1;else if(l=Wr(n),r!==null&&r.dehydrated!==null){if(a===null){if(!l)throw Error(o(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[_a]=n}else tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;We(n),l=!1}else ya!==null&&(xl(ya),ya=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(a!==null&&a.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(a===null||_e.current&1?Oe===0&&(Oe=3):yl())),n.updateQueue!==null&&(n.flags|=4),We(n),null);case 4:return lt(),sl(a,n),a===null&&Ht(n.stateNode.containerInfo),We(n),null;case 10:return Ai(n.type._context),We(n),null;case 17:return Ze(n.type)&&Ur(),We(n),null;case 19:if(ve(_e),l=n.memoizedState,l===null)return We(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Zt(l,!1);else{if(Oe!==0||a!==null&&a.flags&128)for(a=n.child;a!==null;){if(c=Zr(a),c!==null){for(n.flags|=128,Zt(l,!1),r=c.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,a=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=a,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,a=c.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t=t.sibling;return ke(_e,_e.current&1|2),n.child}a=a.sibling}l.tail!==null&&Ee()>ut&&(n.flags|=128,r=!0,Zt(l,!1),n.lanes=4194304)}else{if(!r)if(a=Zr(c),a!==null){if(n.flags|=128,r=!0,t=a.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Zt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Se)return We(n),null}else 2*Ee()-l.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,r=!0,Zt(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(t=l.last,t!==null?t.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Ee(),n.sibling=null,t=_e.current,ke(_e,r?t&1|2:t&1),n):(We(n),null);case 22:case 23:return kl(),r=n.memoizedState!==null,a!==null&&a.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?da&1073741824&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function Pp(a,n){switch(_i(n),n.tag){case 1:return Ze(n.type)&&Ur(),a=n.flags,a&65536?(n.flags=a&-65537|128,n):null;case 3:return lt(),ve(Ye),ve(Ke),zi(),a=n.flags,a&65536&&!(a&128)?(n.flags=a&-65537|128,n):null;case 5:return Bi(n),null;case 13:if(ve(_e),a=n.memoizedState,a!==null&&a.dehydrated!==null){if(n.alternate===null)throw Error(o(340));tt()}return a=n.flags,a&65536?(n.flags=a&-65537|128,n):null;case 19:return ve(_e),null;case 4:return lt(),null;case 10:return Ai(n.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var os=!1,qe=!1,_p=typeof WeakSet=="function"?WeakSet:Set,V=null;function dt(a,n){var t=a.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Re(a,n,r)}else t.current=null}function il(a,n,t){try{t()}catch(r){Re(a,n,r)}}var _c=!1;function Mp(a,n){if(ki=Mr,a=sd(),ci(a)){if("selectionStart"in a)var t={start:a.selectionStart,end:a.selectionEnd};else e:{t=(t=a.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var c=0,h=-1,x=-1,w=0,E=0,L=a,C=null;a:for(;;){for(var U;L!==t||s!==0&&L.nodeType!==3||(h=c+s),L!==l||r!==0&&L.nodeType!==3||(x=c+r),L.nodeType===3&&(c+=L.nodeValue.length),(U=L.firstChild)!==null;)C=L,L=U;for(;;){if(L===a)break a;if(C===t&&++w===s&&(h=c),C===l&&++E===r&&(x=c),(U=L.nextSibling)!==null)break;L=C,C=L.parentNode}L=U}t=h===-1||x===-1?null:{start:h,end:x}}else t=null}t=t||{start:0,end:0}}else t=null;for(yi={focusedElem:a,selectionRange:t},Mr=!1,V=n;V!==null;)if(n=V,a=n.child,(n.subtreeFlags&1028)!==0&&a!==null)a.return=n,V=a;else for(;V!==null;){n=V;try{var K=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var J=K.memoizedProps,Ae=K.memoizedState,b=n.stateNode,k=b.getSnapshotBeforeUpdate(n.elementType===n.type?J:ja(n.type,J),Ae);b.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var N=n.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(B){Re(n,n.return,B)}if(a=n.sibling,a!==null){a.return=n.return,V=a;break}V=n.return}return K=_c,_c=!1,K}function er(a,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&a)===a){var l=s.destroy;s.destroy=void 0,l!==void 0&&il(n,t,l)}s=s.next}while(s!==r)}}function ds(a,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&a)===a){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ll(a){var n=a.ref;if(n!==null){var t=a.stateNode;switch(a.tag){case 5:a=t;break;default:a=t}typeof n=="function"?n(a):n.current=a}}function Mc(a){var n=a.alternate;n!==null&&(a.alternate=null,Mc(n)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(n=a.stateNode,n!==null&&(delete n[_a],delete n[$t],delete n[Ni],delete n[cp],delete n[up])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Cc(a){return a.tag===5||a.tag===3||a.tag===4}function Tc(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Cc(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function ol(a,n,t){var r=a.tag;if(r===5||r===6)a=a.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(a,n):t.insertBefore(a,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(a,t)):(n=t,n.appendChild(a)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zr));else if(r!==4&&(a=a.child,a!==null))for(ol(a,n,t),a=a.sibling;a!==null;)ol(a,n,t),a=a.sibling}function dl(a,n,t){var r=a.tag;if(r===5||r===6)a=a.stateNode,n?t.insertBefore(a,n):t.appendChild(a);else if(r!==4&&(a=a.child,a!==null))for(dl(a,n,t),a=a.sibling;a!==null;)dl(a,n,t),a=a.sibling}var He=null,ba=!1;function cn(a,n,t){for(t=t.child;t!==null;)Rc(a,n,t),t=t.sibling}function Rc(a,n,t){if(Pa&&typeof Pa.onCommitFiberUnmount=="function")try{Pa.onCommitFiberUnmount(vr,t)}catch{}switch(t.tag){case 5:qe||dt(t,n);case 6:var r=He,s=ba;He=null,cn(a,n,t),He=r,ba=s,He!==null&&(ba?(a=He,t=t.stateNode,a.nodeType===8?a.parentNode.removeChild(t):a.removeChild(t)):He.removeChild(t.stateNode));break;case 18:He!==null&&(ba?(a=He,t=t.stateNode,a.nodeType===8?vi(a.parentNode,t):a.nodeType===1&&vi(a,t),Et(a)):vi(He,t.stateNode));break;case 4:r=He,s=ba,He=t.stateNode.containerInfo,ba=!0,cn(a,n,t),He=r,ba=s;break;case 0:case 11:case 14:case 15:if(!qe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&il(t,n,c),s=s.next}while(s!==r)}cn(a,n,t);break;case 1:if(!qe&&(dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(h){Re(t,n,h)}cn(a,n,t);break;case 21:cn(a,n,t);break;case 22:t.mode&1?(qe=(r=qe)||t.memoizedState!==null,cn(a,n,t),qe=r):cn(a,n,t);break;default:cn(a,n,t)}}function Ec(a){var n=a.updateQueue;if(n!==null){a.updateQueue=null;var t=a.stateNode;t===null&&(t=a.stateNode=new _p),n.forEach(function(r){var s=Op.bind(null,a,r);t.has(r)||(t.add(r),r.then(s,s))})}}function va(a,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var l=a,c=n,h=c;e:for(;h!==null;){switch(h.tag){case 5:He=h.stateNode,ba=!1;break e;case 3:He=h.stateNode.containerInfo,ba=!0;break e;case 4:He=h.stateNode.containerInfo,ba=!0;break e}h=h.return}if(He===null)throw Error(o(160));Rc(l,c,s),He=null,ba=!1;var x=s.alternate;x!==null&&(x.return=null),s.return=null}catch(w){Re(s,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ac(n,a),n=n.sibling}function Ac(a,n){var t=a.alternate,r=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(va(n,a),Ta(a),r&4){try{er(3,a,a.return),ds(3,a)}catch(J){Re(a,a.return,J)}try{er(5,a,a.return)}catch(J){Re(a,a.return,J)}}break;case 1:va(n,a),Ta(a),r&512&&t!==null&&dt(t,t.return);break;case 5:if(va(n,a),Ta(a),r&512&&t!==null&&dt(t,t.return),a.flags&32){var s=a.stateNode;try{bt(s,"")}catch(J){Re(a,a.return,J)}}if(r&4&&(s=a.stateNode,s!=null)){var l=a.memoizedProps,c=t!==null?t.memoizedProps:l,h=a.type,x=a.updateQueue;if(a.updateQueue=null,x!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&io(s,l),zs(h,c);var w=zs(h,l);for(c=0;c<x.length;c+=2){var E=x[c],L=x[c+1];E==="style"?go(s,L):E==="dangerouslySetInnerHTML"?po(s,L):E==="children"?bt(s,L):ee(s,E,L,w)}switch(h){case"input":Ls(s,l);break;case"textarea":co(s,l);break;case"select":var C=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var U=l.value;U!=null?Un(s,!!l.multiple,U,!1):C!==!!l.multiple&&(l.defaultValue!=null?Un(s,!!l.multiple,l.defaultValue,!0):Un(s,!!l.multiple,l.multiple?[]:"",!1))}s[$t]=l}catch(J){Re(a,a.return,J)}}break;case 6:if(va(n,a),Ta(a),r&4){if(a.stateNode===null)throw Error(o(162));s=a.stateNode,l=a.memoizedProps;try{s.nodeValue=l}catch(J){Re(a,a.return,J)}}break;case 3:if(va(n,a),Ta(a),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Et(n.containerInfo)}catch(J){Re(a,a.return,J)}break;case 4:va(n,a),Ta(a);break;case 13:va(n,a),Ta(a),s=a.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(ml=Ee())),r&4&&Ec(a);break;case 22:if(E=t!==null&&t.memoizedState!==null,a.mode&1?(qe=(w=qe)||E,va(n,a),qe=w):va(n,a),Ta(a),r&8192){if(w=a.memoizedState!==null,(a.stateNode.isHidden=w)&&!E&&a.mode&1)for(V=a,E=a.child;E!==null;){for(L=V=E;V!==null;){switch(C=V,U=C.child,C.tag){case 0:case 11:case 14:case 15:er(4,C,C.return);break;case 1:dt(C,C.return);var K=C.stateNode;if(typeof K.componentWillUnmount=="function"){r=C,t=C.return;try{n=r,K.props=n.memoizedProps,K.state=n.memoizedState,K.componentWillUnmount()}catch(J){Re(r,t,J)}}break;case 5:dt(C,C.return);break;case 22:if(C.memoizedState!==null){Dc(L);continue}}U!==null?(U.return=C,V=U):Dc(L)}E=E.sibling}e:for(E=null,L=a;;){if(L.tag===5){if(E===null){E=L;try{s=L.stateNode,w?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=L.stateNode,x=L.memoizedProps.style,c=x!=null&&x.hasOwnProperty("display")?x.display:null,h.style.display=ho("display",c))}catch(J){Re(a,a.return,J)}}}else if(L.tag===6){if(E===null)try{L.stateNode.nodeValue=w?"":L.memoizedProps}catch(J){Re(a,a.return,J)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===a)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===a)break e;for(;L.sibling===null;){if(L.return===null||L.return===a)break e;E===L&&(E=null),L=L.return}E===L&&(E=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:va(n,a),Ta(a),r&4&&Ec(a);break;case 21:break;default:va(n,a),Ta(a)}}function Ta(a){var n=a.flags;if(n&2){try{e:{for(var t=a.return;t!==null;){if(Cc(t)){var r=t;break e}t=t.return}throw Error(o(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(bt(s,""),r.flags&=-33);var l=Tc(a);dl(a,l,s);break;case 3:case 4:var c=r.stateNode.containerInfo,h=Tc(a);ol(a,h,c);break;default:throw Error(o(161))}}catch(x){Re(a,a.return,x)}a.flags&=-3}n&4096&&(a.flags&=-4097)}function Cp(a,n,t){V=a,Ic(a)}function Ic(a,n,t){for(var r=(a.mode&1)!==0;V!==null;){var s=V,l=s.child;if(s.tag===22&&r){var c=s.memoizedState!==null||os;if(!c){var h=s.alternate,x=h!==null&&h.memoizedState!==null||qe;h=os;var w=qe;if(os=c,(qe=x)&&!w)for(V=s;V!==null;)c=V,x=c.child,c.tag===22&&c.memoizedState!==null?Oc(s):x!==null?(x.return=c,V=x):Oc(s);for(;l!==null;)V=l,Ic(l),l=l.sibling;V=s,os=h,qe=w}Lc(a)}else s.subtreeFlags&8772&&l!==null?(l.return=s,V=l):Lc(a)}}function Lc(a){for(;V!==null;){var n=V;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:qe||ds(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!qe)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:ja(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Dd(n,l,r);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Dd(n,c,t)}break;case 5:var h=n.stateNode;if(t===null&&n.flags&4){t=h;var x=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&t.focus();break;case"img":x.src&&(t.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var E=w.memoizedState;if(E!==null){var L=E.dehydrated;L!==null&&Et(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}qe||n.flags&512&&ll(n)}catch(C){Re(n,n.return,C)}}if(n===a){V=null;break}if(t=n.sibling,t!==null){t.return=n.return,V=t;break}V=n.return}}function Dc(a){for(;V!==null;){var n=V;if(n===a){V=null;break}var t=n.sibling;if(t!==null){t.return=n.return,V=t;break}V=n.return}}function Oc(a){for(;V!==null;){var n=V;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ds(4,n)}catch(x){Re(n,t,x)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(x){Re(n,s,x)}}var l=n.return;try{ll(n)}catch(x){Re(n,l,x)}break;case 5:var c=n.return;try{ll(n)}catch(x){Re(n,c,x)}}}catch(x){Re(n,n.return,x)}if(n===a){V=null;break}var h=n.sibling;if(h!==null){h.return=n.return,V=h;break}V=n.return}}var Tp=Math.ceil,cs=ne.ReactCurrentDispatcher,cl=ne.ReactCurrentOwner,ga=ne.ReactCurrentBatchConfig,oe=0,Fe=null,Ie=null,Ue=0,da=0,ct=rn(0),Oe=0,ar=null,Tn=0,us=0,ul=0,nr=null,aa=null,ml=0,ut=1/0,Ka=null,ms=!1,pl=null,un=null,ps=!1,mn=null,hs=0,tr=0,hl=null,gs=-1,xs=0;function Qe(){return oe&6?Ee():gs!==-1?gs:gs=Ee()}function pn(a){return a.mode&1?oe&2&&Ue!==0?Ue&-Ue:pp.transition!==null?(xs===0&&(xs=To()),xs):(a=he,a!==0||(a=window.event,a=a===void 0?16:Fo(a.type)),a):1}function Na(a,n,t,r){if(50<tr)throw tr=0,hl=null,Error(o(185));_t(a,t,r),(!(oe&2)||a!==Fe)&&(a===Fe&&(!(oe&2)&&(us|=t),Oe===4&&hn(a,Ue)),na(a,r),t===1&&oe===0&&!(n.mode&1)&&(ut=Ee()+500,Vr&&ln()))}function na(a,n){var t=a.callbackNode;pm(a,n);var r=Sr(a,a===Fe?Ue:0);if(r===0)t!==null&&_o(t),a.callbackNode=null,a.callbackPriority=0;else if(n=r&-r,a.callbackPriority!==n){if(t!=null&&_o(t),n===1)a.tag===0?mp(Fc.bind(null,a)):wd(Fc.bind(null,a)),op(function(){!(oe&6)&&ln()}),t=null;else{switch(Ro(r)){case 1:t=Ws;break;case 4:t=Mo;break;case 16:t=br;break;case 536870912:t=Co;break;default:t=br}t=Wc(t,Bc.bind(null,a))}a.callbackPriority=n,a.callbackNode=t}}function Bc(a,n){if(gs=-1,xs=0,oe&6)throw Error(o(327));var t=a.callbackNode;if(mt()&&a.callbackNode!==t)return null;var r=Sr(a,a===Fe?Ue:0);if(r===0)return null;if(r&30||r&a.expiredLanes||n)n=fs(a,r);else{n=r;var s=oe;oe|=2;var l=Hc();(Fe!==a||Ue!==n)&&(Ka=null,ut=Ee()+500,En(a,n));do try{Ap();break}catch(h){zc(a,h)}while(!0);Ei(),cs.current=l,oe=s,Ie!==null?n=0:(Fe=null,Ue=0,n=Oe)}if(n!==0){if(n===2&&(s=qs(a),s!==0&&(r=s,n=gl(a,s))),n===1)throw t=ar,En(a,0),hn(a,r),na(a,Ee()),t;if(n===6)hn(a,r);else{if(s=a.current.alternate,!(r&30)&&!Rp(s)&&(n=fs(a,r),n===2&&(l=qs(a),l!==0&&(r=l,n=gl(a,l))),n===1))throw t=ar,En(a,0),hn(a,r),na(a,Ee()),t;switch(a.finishedWork=s,a.finishedLanes=r,n){case 0:case 1:throw Error(o(345));case 2:An(a,aa,Ka);break;case 3:if(hn(a,r),(r&130023424)===r&&(n=ml+500-Ee(),10<n)){if(Sr(a,0)!==0)break;if(s=a.suspendedLanes,(s&r)!==r){Qe(),a.pingedLanes|=a.suspendedLanes&s;break}a.timeoutHandle=bi(An.bind(null,a,aa,Ka),n);break}An(a,aa,Ka);break;case 4:if(hn(a,r),(r&4194240)===r)break;for(n=a.eventTimes,s=-1;0<r;){var c=31-fa(r);l=1<<c,c=n[c],c>s&&(s=c),r&=~l}if(r=s,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tp(r/1960))-r,10<r){a.timeoutHandle=bi(An.bind(null,a,aa,Ka),r);break}An(a,aa,Ka);break;case 5:An(a,aa,Ka);break;default:throw Error(o(329))}}}return na(a,Ee()),a.callbackNode===t?Bc.bind(null,a):null}function gl(a,n){var t=nr;return a.current.memoizedState.isDehydrated&&(En(a,n).flags|=256),a=fs(a,n),a!==2&&(n=aa,aa=t,n!==null&&xl(n)),a}function xl(a){aa===null?aa=a:aa.push.apply(aa,a)}function Rp(a){for(var n=a;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],l=s.getSnapshot;s=s.value;try{if(!ka(l(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hn(a,n){for(n&=~ul,n&=~us,a.suspendedLanes|=n,a.pingedLanes&=~n,a=a.expirationTimes;0<n;){var t=31-fa(n),r=1<<t;a[t]=-1,n&=~r}}function Fc(a){if(oe&6)throw Error(o(327));mt();var n=Sr(a,0);if(!(n&1))return na(a,Ee()),null;var t=fs(a,n);if(a.tag!==0&&t===2){var r=qs(a);r!==0&&(n=r,t=gl(a,r))}if(t===1)throw t=ar,En(a,0),hn(a,n),na(a,Ee()),t;if(t===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=n,An(a,aa,Ka),na(a,Ee()),null}function fl(a,n){var t=oe;oe|=1;try{return a(n)}finally{oe=t,oe===0&&(ut=Ee()+500,Vr&&ln())}}function Rn(a){mn!==null&&mn.tag===0&&!(oe&6)&&mt();var n=oe;oe|=1;var t=ga.transition,r=he;try{if(ga.transition=null,he=1,a)return a()}finally{he=r,ga.transition=t,oe=n,!(oe&6)&&ln()}}function kl(){da=ct.current,ve(ct)}function En(a,n){a.finishedWork=null,a.finishedLanes=0;var t=a.timeoutHandle;if(t!==-1&&(a.timeoutHandle=-1,lp(t)),Ie!==null)for(t=Ie.return;t!==null;){var r=t;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:lt(),ve(Ye),ve(Ke),zi();break;case 5:Bi(r);break;case 4:lt();break;case 13:ve(_e);break;case 19:ve(_e);break;case 10:Ai(r.type._context);break;case 22:case 23:kl()}t=t.return}if(Fe=a,Ie=a=gn(a.current,null),Ue=da=n,Oe=0,ar=null,ul=us=Tn=0,aa=nr=null,_n!==null){for(n=0;n<_n.length;n++)if(t=_n[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,l=t.pending;if(l!==null){var c=l.next;l.next=s,r.next=c}t.pending=r}_n=null}return a}function zc(a,n){do{var t=Ie;try{if(Ei(),es.current=rs,as){for(var r=Me.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}as=!1}if(Cn=0,Be=De=Me=null,Gt=!1,Qt=0,cl.current=null,t===null||t.return===null){Oe=1,ar=n,Ie=null;break}e:{var l=a,c=t.return,h=t,x=n;if(n=Ue,h.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var w=x,E=h,L=E.tag;if(!(E.mode&1)&&(L===0||L===11||L===15)){var C=E.alternate;C?(E.updateQueue=C.updateQueue,E.memoizedState=C.memoizedState,E.lanes=C.lanes):(E.updateQueue=null,E.memoizedState=null)}var U=uc(c);if(U!==null){U.flags&=-257,mc(U,c,h,l,n),U.mode&1&&cc(l,w,n),n=U,x=w;var K=n.updateQueue;if(K===null){var J=new Set;J.add(x),n.updateQueue=J}else K.add(x);break e}else{if(!(n&1)){cc(l,w,n),yl();break e}x=Error(o(426))}}else if(Se&&h.mode&1){var Ae=uc(c);if(Ae!==null){!(Ae.flags&65536)&&(Ae.flags|=256),mc(Ae,c,h,l,n),Ti(ot(x,h));break e}}l=x=ot(x,h),Oe!==4&&(Oe=2),nr===null?nr=[l]:nr.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var b=oc(l,x,n);Ld(l,b);break e;case 1:h=x;var k=l.type,N=l.stateNode;if(!(l.flags&128)&&(typeof k.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(un===null||!un.has(N)))){l.flags|=65536,n&=-n,l.lanes|=n;var B=dc(l,h,n);Ld(l,B);break e}}l=l.return}while(l!==null)}$c(t)}catch(W){n=W,Ie===t&&t!==null&&(Ie=t=t.return);continue}break}while(!0)}function Hc(){var a=cs.current;return cs.current=rs,a===null?rs:a}function yl(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(Tn&268435455)&&!(us&268435455)||hn(Fe,Ue)}function fs(a,n){var t=oe;oe|=2;var r=Hc();(Fe!==a||Ue!==n)&&(Ka=null,En(a,n));do try{Ep();break}catch(s){zc(a,s)}while(!0);if(Ei(),oe=t,cs.current=r,Ie!==null)throw Error(o(261));return Fe=null,Ue=0,Oe}function Ep(){for(;Ie!==null;)Uc(Ie)}function Ap(){for(;Ie!==null&&!rm();)Uc(Ie)}function Uc(a){var n=Jc(a.alternate,a,da);a.memoizedProps=a.pendingProps,n===null?$c(a):Ie=n,cl.current=null}function $c(a){var n=a;do{var t=n.alternate;if(a=n.return,n.flags&32768){if(t=Pp(t,n),t!==null){t.flags&=32767,Ie=t;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Oe=6,Ie=null;return}}else if(t=Sp(t,n,da),t!==null){Ie=t;return}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=a}while(n!==null);Oe===0&&(Oe=5)}function An(a,n,t){var r=he,s=ga.transition;try{ga.transition=null,he=1,Ip(a,n,t,r)}finally{ga.transition=s,he=r}return null}function Ip(a,n,t,r){do mt();while(mn!==null);if(oe&6)throw Error(o(327));t=a.finishedWork;var s=a.finishedLanes;if(t===null)return null;if(a.finishedWork=null,a.finishedLanes=0,t===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var l=t.lanes|t.childLanes;if(hm(a,l),a===Fe&&(Ie=Fe=null,Ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ps||(ps=!0,Wc(br,function(){return mt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=ga.transition,ga.transition=null;var c=he;he=1;var h=oe;oe|=4,cl.current=null,Mp(a,t),Ac(t,a),ep(yi),Mr=!!ki,yi=ki=null,a.current=t,Cp(t),sm(),oe=h,he=c,ga.transition=l}else a.current=t;if(ps&&(ps=!1,mn=a,hs=s),l=a.pendingLanes,l===0&&(un=null),om(t.stateNode),na(a,Ee()),n!==null)for(r=a.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(ms)throw ms=!1,a=pl,pl=null,a;return hs&1&&a.tag!==0&&mt(),l=a.pendingLanes,l&1?a===hl?tr++:(tr=0,hl=a):tr=0,ln(),null}function mt(){if(mn!==null){var a=Ro(hs),n=ga.transition,t=he;try{if(ga.transition=null,he=16>a?16:a,mn===null)var r=!1;else{if(a=mn,mn=null,hs=0,oe&6)throw Error(o(331));var s=oe;for(oe|=4,V=a.current;V!==null;){var l=V,c=l.child;if(V.flags&16){var h=l.deletions;if(h!==null){for(var x=0;x<h.length;x++){var w=h[x];for(V=w;V!==null;){var E=V;switch(E.tag){case 0:case 11:case 15:er(8,E,l)}var L=E.child;if(L!==null)L.return=E,V=L;else for(;V!==null;){E=V;var C=E.sibling,U=E.return;if(Mc(E),E===w){V=null;break}if(C!==null){C.return=U,V=C;break}V=U}}}var K=l.alternate;if(K!==null){var J=K.child;if(J!==null){K.child=null;do{var Ae=J.sibling;J.sibling=null,J=Ae}while(J!==null)}}V=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,V=c;else e:for(;V!==null;){if(l=V,l.flags&2048)switch(l.tag){case 0:case 11:case 15:er(9,l,l.return)}var b=l.sibling;if(b!==null){b.return=l.return,V=b;break e}V=l.return}}var k=a.current;for(V=k;V!==null;){c=V;var N=c.child;if(c.subtreeFlags&2064&&N!==null)N.return=c,V=N;else e:for(c=k;V!==null;){if(h=V,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:ds(9,h)}}catch(W){Re(h,h.return,W)}if(h===c){V=null;break e}var B=h.sibling;if(B!==null){B.return=h.return,V=B;break e}V=h.return}}if(oe=s,ln(),Pa&&typeof Pa.onPostCommitFiberRoot=="function")try{Pa.onPostCommitFiberRoot(vr,a)}catch{}r=!0}return r}finally{he=t,ga.transition=n}}return!1}function Vc(a,n,t){n=ot(t,n),n=oc(a,n,1),a=dn(a,n,1),n=Qe(),a!==null&&(_t(a,1,n),na(a,n))}function Re(a,n,t){if(a.tag===3)Vc(a,a,t);else for(;n!==null;){if(n.tag===3){Vc(n,a,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){a=ot(t,a),a=dc(n,a,1),n=dn(n,a,1),a=Qe(),n!==null&&(_t(n,1,a),na(n,a));break}}n=n.return}}function Lp(a,n,t){var r=a.pingCache;r!==null&&r.delete(n),n=Qe(),a.pingedLanes|=a.suspendedLanes&t,Fe===a&&(Ue&t)===t&&(Oe===4||Oe===3&&(Ue&130023424)===Ue&&500>Ee()-ml?En(a,0):ul|=t),na(a,n)}function Kc(a,n){n===0&&(a.mode&1?(n=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):n=1);var t=Qe();a=Ua(a,n),a!==null&&(_t(a,n,t),na(a,t))}function Dp(a){var n=a.memoizedState,t=0;n!==null&&(t=n.retryLane),Kc(a,t)}function Op(a,n){var t=0;switch(a.tag){case 13:var r=a.stateNode,s=a.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=a.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(n),Kc(a,t)}var Jc;Jc=function(a,n,t){if(a!==null)if(a.memoizedProps!==n.pendingProps||Ye.current)ea=!0;else{if(!(a.lanes&t)&&!(n.flags&128))return ea=!1,wp(a,n,t);ea=!!(a.flags&131072)}else ea=!1,Se&&n.flags&1048576&&Sd(n,Jr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ls(a,n),a=n.pendingProps;var s=et(n,Ke.current);it(n,t),s=$i(null,n,r,a,s,t);var l=Vi();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ze(r)?(l=!0,$r(n)):l=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Di(n),s.updater=ss,n.stateNode=s,s._reactInternals=n,Qi(n,r,a,t),n=el(null,n,r,!0,l,t)):(n.tag=0,Se&&l&&Pi(n),Ge(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ls(a,n),a=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=Fp(r),a=ja(r,a),s){case 0:n=Zi(null,n,r,a,t);break e;case 1:n=kc(null,n,r,a,t);break e;case 11:n=pc(null,n,r,a,t);break e;case 14:n=hc(null,n,r,ja(r.type,a),t);break e}throw Error(o(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:ja(r,s),Zi(a,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:ja(r,s),kc(a,n,r,s,t);case 3:e:{if(yc(n),a===null)throw Error(o(387));r=n.pendingProps,l=n.memoizedState,s=l.element,Id(a,n),Yr(n,r,null,t);var c=n.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){s=ot(Error(o(423)),n),n=jc(a,n,r,t,s);break e}else if(r!==s){s=ot(Error(o(424)),n),n=jc(a,n,r,t,s);break e}else for(oa=tn(n.stateNode.containerInfo.firstChild),la=n,Se=!0,ya=null,t=Ed(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tt(),r===s){n=Va(a,n,t);break e}Ge(a,n,r,t)}n=n.child}return n;case 5:return Od(n),a===null&&Ci(n),r=n.type,s=n.pendingProps,l=a!==null?a.memoizedProps:null,c=s.children,ji(r,s)?c=null:l!==null&&ji(r,l)&&(n.flags|=32),fc(a,n),Ge(a,n,c,t),n.child;case 6:return a===null&&Ci(n),null;case 13:return bc(a,n,t);case 4:return Oi(n,n.stateNode.containerInfo),r=n.pendingProps,a===null?n.child=rt(n,null,r,t):Ge(a,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:ja(r,s),pc(a,n,r,s,t);case 7:return Ge(a,n,n.pendingProps,t),n.child;case 8:return Ge(a,n,n.pendingProps.children,t),n.child;case 12:return Ge(a,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,l=n.memoizedProps,c=s.value,ke(Gr,r._currentValue),r._currentValue=c,l!==null)if(ka(l.value,c)){if(l.children===s.children&&!Ye.current){n=Va(a,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var h=l.dependencies;if(h!==null){c=l.child;for(var x=h.firstContext;x!==null;){if(x.context===r){if(l.tag===1){x=$a(-1,t&-t),x.tag=2;var w=l.updateQueue;if(w!==null){w=w.shared;var E=w.pending;E===null?x.next=x:(x.next=E.next,E.next=x),w.pending=x}}l.lanes|=t,x=l.alternate,x!==null&&(x.lanes|=t),Ii(l.return,t,n),h.lanes|=t;break}x=x.next}}else if(l.tag===10)c=l.type===n.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=t,h=c.alternate,h!==null&&(h.lanes|=t),Ii(c,t,n),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Ge(a,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,it(n,t),s=pa(s),r=r(s),n.flags|=1,Ge(a,n,r,t),n.child;case 14:return r=n.type,s=ja(r,n.pendingProps),s=ja(r.type,s),hc(a,n,r,s,t);case 15:return gc(a,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:ja(r,s),ls(a,n),n.tag=1,Ze(r)?(a=!0,$r(n)):a=!1,it(n,t),ic(n,r,s),Qi(n,r,s,t),el(null,n,r,!0,a,t);case 19:return Nc(a,n,t);case 22:return xc(a,n,t)}throw Error(o(156,n.tag))};function Wc(a,n){return Po(a,n)}function Bp(a,n,t,r){this.tag=a,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xa(a,n,t,r){return new Bp(a,n,t,r)}function jl(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Fp(a){if(typeof a=="function")return jl(a)?1:0;if(a!=null){if(a=a.$$typeof,a===le)return 11;if(a===ra)return 14}return 2}function gn(a,n){var t=a.alternate;return t===null?(t=xa(a.tag,n,a.key,a.mode),t.elementType=a.elementType,t.type=a.type,t.stateNode=a.stateNode,t.alternate=a,a.alternate=t):(t.pendingProps=n,t.type=a.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=a.flags&14680064,t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=a.sibling,t.index=a.index,t.ref=a.ref,t}function ks(a,n,t,r,s,l){var c=2;if(r=a,typeof a=="function")jl(a)&&(c=1);else if(typeof a=="string")c=5;else e:switch(a){case ge:return In(t.children,s,l,n);case Pe:c=8,s|=8;break;case xe:return a=xa(12,t,n,s|2),a.elementType=xe,a.lanes=l,a;case $e:return a=xa(13,t,n,s),a.elementType=$e,a.lanes=l,a;case Ve:return a=xa(19,t,n,s),a.elementType=Ve,a.lanes=l,a;case je:return ys(t,s,l,n);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Te:c=10;break e;case Xe:c=9;break e;case le:c=11;break e;case ra:c=14;break e;case Le:c=16,r=null;break e}throw Error(o(130,a==null?a:typeof a,""))}return n=xa(c,t,n,s),n.elementType=a,n.type=r,n.lanes=l,n}function In(a,n,t,r){return a=xa(7,a,r,n),a.lanes=t,a}function ys(a,n,t,r){return a=xa(22,a,r,n),a.elementType=je,a.lanes=t,a.stateNode={isHidden:!1},a}function bl(a,n,t){return a=xa(6,a,null,n),a.lanes=t,a}function vl(a,n,t){return n=xa(4,a.children!==null?a.children:[],a.key,n),n.lanes=t,n.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},n}function zp(a,n,t,r,s){this.tag=n,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Nl(a,n,t,r,s,l,c,h,x){return a=new zp(a,n,t,h,x),n===1?(n=1,l===!0&&(n|=8)):n=0,l=xa(3,null,null,n),a.current=l,l.stateNode=a,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(l),a}function Hp(a,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:r==null?null:""+r,children:a,containerInfo:n,implementation:t}}function qc(a){if(!a)return sn;a=a._reactInternals;e:{if(vn(a)!==a||a.tag!==1)throw Error(o(170));var n=a;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(a.tag===1){var t=a.type;if(Ze(t))return vd(a,t,n)}return n}function Gc(a,n,t,r,s,l,c,h,x){return a=Nl(t,r,!0,a,s,l,c,h,x),a.context=qc(null),t=a.current,r=Qe(),s=pn(t),l=$a(r,s),l.callback=n??null,dn(t,l,s),a.current.lanes=s,_t(a,s,r),na(a,r),a}function js(a,n,t,r){var s=n.current,l=Qe(),c=pn(s);return t=qc(t),n.context===null?n.context=t:n.pendingContext=t,n=$a(l,c),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=dn(s,n,c),a!==null&&(Na(a,s,c,l),Xr(a,s,c)),c}function bs(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Qc(a,n){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var t=a.retryLane;a.retryLane=t!==0&&t<n?t:n}}function wl(a,n){Qc(a,n),(a=a.alternate)&&Qc(a,n)}function Up(){return null}var Xc=typeof reportError=="function"?reportError:function(a){console.error(a)};function Sl(a){this._internalRoot=a}vs.prototype.render=Sl.prototype.render=function(a){var n=this._internalRoot;if(n===null)throw Error(o(409));js(a,n,null,null)},vs.prototype.unmount=Sl.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var n=a.containerInfo;Rn(function(){js(null,a,null,null)}),n[Ba]=null}};function vs(a){this._internalRoot=a}vs.prototype.unstable_scheduleHydration=function(a){if(a){var n=Io();a={blockedOn:null,target:a,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,a),t===0&&Oo(a)}};function Pl(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function Ns(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function Yc(){}function $p(a,n,t,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var w=bs(c);l.call(w)}}var c=Gc(n,r,a,0,null,!1,!1,"",Yc);return a._reactRootContainer=c,a[Ba]=c.current,Ht(a.nodeType===8?a.parentNode:a),Rn(),c}for(;s=a.lastChild;)a.removeChild(s);if(typeof r=="function"){var h=r;r=function(){var w=bs(x);h.call(w)}}var x=Nl(a,0,!1,null,null,!1,!1,"",Yc);return a._reactRootContainer=x,a[Ba]=x.current,Ht(a.nodeType===8?a.parentNode:a),Rn(function(){js(n,x,t,r)}),x}function ws(a,n,t,r,s){var l=t._reactRootContainer;if(l){var c=l;if(typeof s=="function"){var h=s;s=function(){var x=bs(c);h.call(x)}}js(n,c,a,s)}else c=$p(t,n,a,s,r);return bs(c)}Eo=function(a){switch(a.tag){case 3:var n=a.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pt(n.pendingLanes);t!==0&&(Qs(n,t|1),na(n,Ee()),!(oe&6)&&(ut=Ee()+500,ln()))}break;case 13:Rn(function(){var r=Ua(a,1);if(r!==null){var s=Qe();Na(r,a,1,s)}}),wl(a,1)}},Xs=function(a){if(a.tag===13){var n=Ua(a,134217728);if(n!==null){var t=Qe();Na(n,a,134217728,t)}wl(a,134217728)}},Ao=function(a){if(a.tag===13){var n=pn(a),t=Ua(a,n);if(t!==null){var r=Qe();Na(t,a,n,r)}wl(a,n)}},Io=function(){return he},Lo=function(a,n){var t=he;try{return he=a,n()}finally{he=t}},$s=function(a,n,t){switch(n){case"input":if(Ls(a,t),n=t.name,t.type==="radio"&&n!=null){for(t=a;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==a&&r.form===a.form){var s=Hr(r);if(!s)throw Error(o(90));ro(r),Ls(r,s)}}}break;case"textarea":co(a,t);break;case"select":n=t.value,n!=null&&Un(a,!!t.multiple,n,!1)}},yo=fl,jo=Rn;var Vp={usingClientEntryPoint:!1,Events:[Vt,Yn,Hr,fo,ko,fl]},rr={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=wo(a),a===null?null:a.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{vr=Ss.inject(Kp),Pa=Ss}catch{}}return ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp,ta.createPortal=function(a,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pl(n))throw Error(o(200));return Hp(a,n,null,t)},ta.createRoot=function(a,n){if(!Pl(a))throw Error(o(299));var t=!1,r="",s=Xc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Nl(a,1,!1,null,null,t,!1,r,s),a[Ba]=n.current,Ht(a.nodeType===8?a.parentNode:a),new Sl(n)},ta.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var n=a._reactInternals;if(n===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=wo(n),a=a===null?null:a.stateNode,a},ta.flushSync=function(a){return Rn(a)},ta.hydrate=function(a,n,t){if(!Ns(n))throw Error(o(200));return ws(null,a,n,!0,t)},ta.hydrateRoot=function(a,n,t){if(!Pl(a))throw Error(o(405));var r=t!=null&&t.hydratedSources||null,s=!1,l="",c=Xc;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Gc(n,null,a,1,t??null,s,!1,l,c),a[Ba]=n.current,Ht(a),r)for(a=0;a<r.length;a++)t=r[a],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new vs(n)},ta.render=function(a,n,t){if(!Ns(n))throw Error(o(200));return ws(null,a,n,!1,t)},ta.unmountComponentAtNode=function(a){if(!Ns(a))throw Error(o(40));return a._reactRootContainer?(Rn(function(){ws(null,null,a,!1,function(){a._reactRootContainer=null,a[Ba]=null})}),!0):!1},ta.unstable_batchedUpdates=fl,ta.unstable_renderSubtreeIntoContainer=function(a,n,t,r){if(!Ns(t))throw Error(o(200));if(a==null||a._reactInternals===void 0)throw Error(o(38));return ws(a,n,t,!1,r)},ta.version="18.3.1-next-f1338f8080-20240426",ta}var iu;function ah(){if(iu)return Cl.exports;iu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),Cl.exports=eh(),Cl.exports}var lu;function nh(){if(lu)return Ps;lu=1;var i=ah();return Ps.createRoot=i.createRoot,Ps.hydrateRoot=i.hydrateRoot,Ps}var th=nh(),ir={},ou;function rh(){if(ou)return ir;ou=1,Object.defineProperty(ir,"__esModule",{value:!0}),ir.parse=g,ir.serialize=v;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,d=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,m=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,p=(()=>{const P=function(){};return P.prototype=Object.create(null),P})();function g(P,F){const T=new p,A=P.length;if(A<2)return T;const M=(F==null?void 0:F.decode)||_;let D=0;do{const z=P.indexOf("=",D);if(z===-1)break;const ee=P.indexOf(";",D),ne=ee===-1?A:ee;if(z>ne){D=P.lastIndexOf(";",z-1)+1;continue}const me=f(P,D,z),ye=j(P,z,me),ge=P.slice(me,ye);if(T[ge]===void 0){let Pe=f(P,z+1,ne),xe=j(P,ne,Pe);const Te=M(P.slice(Pe,xe));T[ge]=Te}D=ne+1}while(D<A);return T}function f(P,F,T){do{const A=P.charCodeAt(F);if(A!==32&&A!==9)return F}while(++F<T);return T}function j(P,F,T){for(;F>T;){const A=P.charCodeAt(--F);if(A!==32&&A!==9)return F+1}return T}function v(P,F,T){const A=(T==null?void 0:T.encode)||encodeURIComponent;if(!i.test(P))throw new TypeError(`argument name is invalid: ${P}`);const M=A(F);if(!d.test(M))throw new TypeError(`argument val is invalid: ${F}`);let D=P+"="+M;if(!T)return D;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);D+="; Max-Age="+T.maxAge}if(T.domain){if(!o.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);D+="; Domain="+T.domain}if(T.path){if(!m.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);D+="; Path="+T.path}if(T.expires){if(!I(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);D+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(D+="; HttpOnly"),T.secure&&(D+="; Secure"),T.partitioned&&(D+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return D}function _(P){if(P.indexOf("%")===-1)return P;try{return decodeURIComponent(P)}catch{return P}}function I(P){return u.call(P)==="[object Date]"}return ir}rh();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var du="popstate";function sh(i={}){function d(m,u){let{pathname:p,search:g,hash:f}=m.location;return zl("",{pathname:p,search:g,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(m,u){return typeof u=="string"?u:cr(u)}return lh(d,o,null,i)}function Ce(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}function La(i,d){if(!i){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function ih(){return Math.random().toString(36).substring(2,10)}function cu(i,d){return{usr:i.state,key:i.key,idx:d}}function zl(i,d,o=null,m){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof d=="string"?gt(d):d,state:o,key:d&&d.key||m||ih()}}function cr({pathname:i="/",search:d="",hash:o=""}){return d&&d!=="?"&&(i+=d.charAt(0)==="?"?d:"?"+d),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function gt(i){let d={};if(i){let o=i.indexOf("#");o>=0&&(d.hash=i.substring(o),i=i.substring(0,o));let m=i.indexOf("?");m>=0&&(d.search=i.substring(m),i=i.substring(0,m)),i&&(d.pathname=i)}return d}function lh(i,d,o,m={}){let{window:u=document.defaultView,v5Compat:p=!1}=m,g=u.history,f="POP",j=null,v=_();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function _(){return(g.state||{idx:null}).idx}function I(){f="POP";let M=_(),D=M==null?null:M-v;v=M,j&&j({action:f,location:A.location,delta:D})}function P(M,D){f="PUSH";let z=zl(A.location,M,D);v=_()+1;let ee=cu(z,v),ne=A.createHref(z);try{g.pushState(ee,"",ne)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;u.location.assign(ne)}p&&j&&j({action:f,location:A.location,delta:1})}function F(M,D){f="REPLACE";let z=zl(A.location,M,D);v=_();let ee=cu(z,v),ne=A.createHref(z);g.replaceState(ee,"",ne),p&&j&&j({action:f,location:A.location,delta:0})}function T(M){let D=u.location.origin!=="null"?u.location.origin:u.location.href,z=typeof M=="string"?M:cr(M);return z=z.replace(/ $/,"%20"),Ce(D,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,D)}let A={get action(){return f},get location(){return i(u,g)},listen(M){if(j)throw new Error("A history only accepts one active listener");return u.addEventListener(du,I),j=M,()=>{u.removeEventListener(du,I),j=null}},createHref(M){return d(u,M)},createURL:T,encodeLocation(M){let D=T(M);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:P,replace:F,go(M){return g.go(M)}};return A}function Nu(i,d,o="/"){return oh(i,d,o,!1)}function oh(i,d,o,m){let u=typeof d=="string"?gt(d):d,p=yn(u.pathname||"/",o);if(p==null)return null;let g=wu(i);dh(g);let f=null;for(let j=0;f==null&&j<g.length;++j){let v=jh(p);f=kh(g[j],v,m)}return f}function wu(i,d=[],o=[],m=""){let u=(p,g,f)=>{let j={relativePath:f===void 0?p.path||"":f,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};j.relativePath.startsWith("/")&&(Ce(j.relativePath.startsWith(m),`Absolute route path "${j.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(m.length));let v=Ga([m,j.relativePath]),_=o.concat(j);p.children&&p.children.length>0&&(Ce(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),wu(p.children,d,_,v)),!(p.path==null&&!p.index)&&d.push({path:v,score:xh(v,p.index),routesMeta:_})};return i.forEach((p,g)=>{var f;if(p.path===""||!((f=p.path)!=null&&f.includes("?")))u(p,g);else for(let j of Su(p.path))u(p,g,j)}),d}function Su(i){let d=i.split("/");if(d.length===0)return[];let[o,...m]=d,u=o.endsWith("?"),p=o.replace(/\?$/,"");if(m.length===0)return u?[p,""]:[p];let g=Su(m.join("/")),f=[];return f.push(...g.map(j=>j===""?p:[p,j].join("/"))),u&&f.push(...g),f.map(j=>i.startsWith("/")&&j===""?"/":j)}function dh(i){i.sort((d,o)=>d.score!==o.score?o.score-d.score:fh(d.routesMeta.map(m=>m.childrenIndex),o.routesMeta.map(m=>m.childrenIndex)))}var ch=/^:[\w-]+$/,uh=3,mh=2,ph=1,hh=10,gh=-2,uu=i=>i==="*";function xh(i,d){let o=i.split("/"),m=o.length;return o.some(uu)&&(m+=gh),d&&(m+=mh),o.filter(u=>!uu(u)).reduce((u,p)=>u+(ch.test(p)?uh:p===""?ph:hh),m)}function fh(i,d){return i.length===d.length&&i.slice(0,-1).every((m,u)=>m===d[u])?i[i.length-1]-d[d.length-1]:0}function kh(i,d,o=!1){let{routesMeta:m}=i,u={},p="/",g=[];for(let f=0;f<m.length;++f){let j=m[f],v=f===m.length-1,_=p==="/"?d:d.slice(p.length)||"/",I=Rs({path:j.relativePath,caseSensitive:j.caseSensitive,end:v},_),P=j.route;if(!I&&v&&o&&!m[m.length-1].route.index&&(I=Rs({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},_)),!I)return null;Object.assign(u,I.params),g.push({params:u,pathname:Ga([p,I.pathname]),pathnameBase:wh(Ga([p,I.pathnameBase])),route:P}),I.pathnameBase!=="/"&&(p=Ga([p,I.pathnameBase]))}return g}function Rs(i,d){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,m]=yh(i.path,i.caseSensitive,i.end),u=d.match(o);if(!u)return null;let p=u[0],g=p.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:m.reduce((v,{paramName:_,isOptional:I},P)=>{if(_==="*"){let T=f[P]||"";g=p.slice(0,p.length-T.length).replace(/(.)\/+$/,"$1")}const F=f[P];return I&&!F?v[_]=void 0:v[_]=(F||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:g,pattern:i}}function yh(i,d=!1,o=!0){La(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let m=[],u="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,f,j)=>(m.push({paramName:f,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(m.push({paramName:"*"}),u+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":i!==""&&i!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,d?void 0:"i"),m]}function jh(i){try{return i.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return La(!1,`The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),i}}function yn(i,d){if(d==="/")return i;if(!i.toLowerCase().startsWith(d.toLowerCase()))return null;let o=d.endsWith("/")?d.length-1:d.length,m=i.charAt(o);return m&&m!=="/"?null:i.slice(o)||"/"}function bh(i,d="/"){let{pathname:o,search:m="",hash:u=""}=typeof i=="string"?gt(i):i;return{pathname:o?o.startsWith("/")?o:vh(o,d):d,search:Sh(m),hash:Ph(u)}}function vh(i,d){let o=d.replace(/\/+$/,"").split("/");return i.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function El(i,d,o,m){return`Cannot include a '${i}' character in a manually specified \`to.${d}\` field [${JSON.stringify(m)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nh(i){return i.filter((d,o)=>o===0||d.route.path&&d.route.path.length>0)}function Pu(i){let d=Nh(i);return d.map((o,m)=>m===d.length-1?o.pathname:o.pathnameBase)}function _u(i,d,o,m=!1){let u;typeof i=="string"?u=gt(i):(u={...i},Ce(!u.pathname||!u.pathname.includes("?"),El("?","pathname","search",u)),Ce(!u.pathname||!u.pathname.includes("#"),El("#","pathname","hash",u)),Ce(!u.search||!u.search.includes("#"),El("#","search","hash",u)));let p=i===""||u.pathname==="",g=p?"/":u.pathname,f;if(g==null)f=o;else{let I=d.length-1;if(!m&&g.startsWith("..")){let P=g.split("/");for(;P[0]==="..";)P.shift(),I-=1;u.pathname=P.join("/")}f=I>=0?d[I]:"/"}let j=bh(u,f),v=g&&g!=="/"&&g.endsWith("/"),_=(p||g===".")&&o.endsWith("/");return!j.pathname.endsWith("/")&&(v||_)&&(j.pathname+="/"),j}var Ga=i=>i.join("/").replace(/\/\/+/g,"/"),wh=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Sh=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Ph=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function _h(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Mu=["POST","PUT","PATCH","DELETE"];new Set(Mu);var Mh=["GET",...Mu];new Set(Mh);var xt=S.createContext(null);xt.displayName="DataRouter";var Es=S.createContext(null);Es.displayName="DataRouterState";var Cu=S.createContext({isTransitioning:!1});Cu.displayName="ViewTransition";var Ch=S.createContext(new Map);Ch.displayName="Fetchers";var Th=S.createContext(null);Th.displayName="Await";var Oa=S.createContext(null);Oa.displayName="Navigation";var pr=S.createContext(null);pr.displayName="Location";var Qa=S.createContext({outlet:null,matches:[],isDataRoute:!1});Qa.displayName="Route";var Ql=S.createContext(null);Ql.displayName="RouteError";function Rh(i,{relative:d}={}){Ce(hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:m}=S.useContext(Oa),{hash:u,pathname:p,search:g}=gr(i,{relative:d}),f=p;return o!=="/"&&(f=p==="/"?o:Ga([o,p])),m.createHref({pathname:f,search:g,hash:u})}function hr(){return S.useContext(pr)!=null}function Bn(){return Ce(hr(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(pr).location}var Tu="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ru(i){S.useContext(Oa).static||S.useLayoutEffect(i)}function Eh(){let{isDataRoute:i}=S.useContext(Qa);return i?Kh():Ah()}function Ah(){Ce(hr(),"useNavigate() may be used only in the context of a <Router> component.");let i=S.useContext(xt),{basename:d,navigator:o}=S.useContext(Oa),{matches:m}=S.useContext(Qa),{pathname:u}=Bn(),p=JSON.stringify(Pu(m)),g=S.useRef(!1);return Ru(()=>{g.current=!0}),S.useCallback((j,v={})=>{if(La(g.current,Tu),!g.current)return;if(typeof j=="number"){o.go(j);return}let _=_u(j,JSON.parse(p),u,v.relative==="path");i==null&&d!=="/"&&(_.pathname=_.pathname==="/"?d:Ga([d,_.pathname])),(v.replace?o.replace:o.push)(_,v.state,v)},[d,o,p,u,i])}S.createContext(null);function gr(i,{relative:d}={}){let{matches:o}=S.useContext(Qa),{pathname:m}=Bn(),u=JSON.stringify(Pu(o));return S.useMemo(()=>_u(i,JSON.parse(u),m,d==="path"),[i,u,m,d])}function Ih(i,d){return Eu(i,d)}function Eu(i,d,o,m){var D;Ce(hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=S.useContext(Oa),{matches:p}=S.useContext(Qa),g=p[p.length-1],f=g?g.params:{},j=g?g.pathname:"/",v=g?g.pathnameBase:"/",_=g&&g.route;{let z=_&&_.path||"";Au(j,!_||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let I=Bn(),P;if(d){let z=typeof d=="string"?gt(d):d;Ce(v==="/"||((D=z.pathname)==null?void 0:D.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${z.pathname}" was given in the \`location\` prop.`),P=z}else P=I;let F=P.pathname||"/",T=F;if(v!=="/"){let z=v.replace(/^\//,"").split("/");T="/"+F.replace(/^\//,"").split("/").slice(z.length).join("/")}let A=Nu(i,{pathname:T});La(_||A!=null,`No routes matched location "${P.pathname}${P.search}${P.hash}" `),La(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Fh(A&&A.map(z=>Object.assign({},z,{params:Object.assign({},f,z.params),pathname:Ga([v,u.encodeLocation?u.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?v:Ga([v,u.encodeLocation?u.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),p,o,m);return d&&M?S.createElement(pr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...P},navigationType:"POP"}},M):M}function Lh(){let i=Vh(),d=_h(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,m="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:m},p={padding:"2px 4px",backgroundColor:m},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:p},"ErrorBoundary")," or"," ",S.createElement("code",{style:p},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},d),o?S.createElement("pre",{style:u},o):null,g)}var Dh=S.createElement(Lh,null),Oh=class extends S.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,d){return d.location!==i.location||d.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:d.error,location:d.location,revalidation:i.revalidation||d.revalidation}}componentDidCatch(i,d){console.error("React Router caught the following error during render",i,d)}render(){return this.state.error!==void 0?S.createElement(Qa.Provider,{value:this.props.routeContext},S.createElement(Ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Bh({routeContext:i,match:d,children:o}){let m=S.useContext(xt);return m&&m.static&&m.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=d.route.id),S.createElement(Qa.Provider,{value:i},o)}function Fh(i,d=[],o=null,m=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(d.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let u=i,p=o==null?void 0:o.errors;if(p!=null){let j=u.findIndex(v=>v.route.id&&(p==null?void 0:p[v.route.id])!==void 0);Ce(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),u=u.slice(0,Math.min(u.length,j+1))}let g=!1,f=-1;if(o)for(let j=0;j<u.length;j++){let v=u[j];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=j),v.route.id){let{loaderData:_,errors:I}=o,P=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!I||I[v.route.id]===void 0);if(v.route.lazy||P){g=!0,f>=0?u=u.slice(0,f+1):u=[u[0]];break}}}return u.reduceRight((j,v,_)=>{let I,P=!1,F=null,T=null;o&&(I=p&&v.route.id?p[v.route.id]:void 0,F=v.route.errorElement||Dh,g&&(f<0&&_===0?(Au("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),P=!0,T=null):f===_&&(P=!0,T=v.route.hydrateFallbackElement||null)));let A=d.concat(u.slice(0,_+1)),M=()=>{let D;return I?D=F:P?D=T:v.route.Component?D=S.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=j,S.createElement(Bh,{match:v,routeContext:{outlet:j,matches:A,isDataRoute:o!=null},children:D})};return o&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?S.createElement(Oh,{location:o.location,revalidation:o.revalidation,component:F,error:I,children:M(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):M()},null)}function Xl(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zh(i){let d=S.useContext(xt);return Ce(d,Xl(i)),d}function Hh(i){let d=S.useContext(Es);return Ce(d,Xl(i)),d}function Uh(i){let d=S.useContext(Qa);return Ce(d,Xl(i)),d}function Yl(i){let d=Uh(i),o=d.matches[d.matches.length-1];return Ce(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function $h(){return Yl("useRouteId")}function Vh(){var m;let i=S.useContext(Ql),d=Hh("useRouteError"),o=Yl("useRouteError");return i!==void 0?i:(m=d.errors)==null?void 0:m[o]}function Kh(){let{router:i}=zh("useNavigate"),d=Yl("useNavigate"),o=S.useRef(!1);return Ru(()=>{o.current=!0}),S.useCallback(async(u,p={})=>{La(o.current,Tu),o.current&&(typeof u=="number"?i.navigate(u):await i.navigate(u,{fromRouteId:d,...p}))},[i,d])}var mu={};function Au(i,d,o){!d&&!mu[i]&&(mu[i]=!0,La(!1,o))}S.memo(Jh);function Jh({routes:i,future:d,state:o}){return Eu(i,void 0,o,d)}function ca(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wh({basename:i="/",children:d=null,location:o,navigationType:m="POP",navigator:u,static:p=!1}){Ce(!hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=i.replace(/^\/*/,"/"),f=S.useMemo(()=>({basename:g,navigator:u,static:p,future:{}}),[g,u,p]);typeof o=="string"&&(o=gt(o));let{pathname:j="/",search:v="",hash:_="",state:I=null,key:P="default"}=o,F=S.useMemo(()=>{let T=yn(j,g);return T==null?null:{location:{pathname:T,search:v,hash:_,state:I,key:P},navigationType:m}},[g,j,v,_,I,P,m]);return La(F!=null,`<Router basename="${g}"> is not able to match the URL "${j}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:S.createElement(Oa.Provider,{value:f},S.createElement(pr.Provider,{children:d,value:F}))}function qh({children:i,location:d}){return Ih(Hl(i),d)}function Hl(i,d=[]){let o=[];return S.Children.forEach(i,(m,u)=>{if(!S.isValidElement(m))return;let p=[...d,u];if(m.type===S.Fragment){o.push.apply(o,Hl(m.props.children,p));return}Ce(m.type===ca,`[${typeof m.type=="string"?m.type:m.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!m.props.index||!m.props.children,"An index route cannot have child routes.");let g={id:m.props.id||p.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,hydrateFallbackElement:m.props.hydrateFallbackElement,HydrateFallback:m.props.HydrateFallback,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.hasErrorBoundary===!0||m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(g.children=Hl(m.props.children,p)),o.push(g)}),o}var Cs="get",Ts="application/x-www-form-urlencoded";function As(i){return i!=null&&typeof i.tagName=="string"}function Gh(i){return As(i)&&i.tagName.toLowerCase()==="button"}function Qh(i){return As(i)&&i.tagName.toLowerCase()==="form"}function Xh(i){return As(i)&&i.tagName.toLowerCase()==="input"}function Yh(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Zh(i,d){return i.button===0&&(!d||d==="_self")&&!Yh(i)}var _s=null;function eg(){if(_s===null)try{new FormData(document.createElement("form"),0),_s=!1}catch{_s=!0}return _s}var ag=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Al(i){return i!=null&&!ag.has(i)?(La(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ts}"`),null):i}function ng(i,d){let o,m,u,p,g;if(Qh(i)){let f=i.getAttribute("action");m=f?yn(f,d):null,o=i.getAttribute("method")||Cs,u=Al(i.getAttribute("enctype"))||Ts,p=new FormData(i)}else if(Gh(i)||Xh(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=i.getAttribute("formaction")||f.getAttribute("action");if(m=j?yn(j,d):null,o=i.getAttribute("formmethod")||f.getAttribute("method")||Cs,u=Al(i.getAttribute("formenctype"))||Al(f.getAttribute("enctype"))||Ts,p=new FormData(f,i),!eg()){let{name:v,type:_,value:I}=i;if(_==="image"){let P=v?`${v}.`:"";p.append(`${P}x`,"0"),p.append(`${P}y`,"0")}else v&&p.append(v,I)}}else{if(As(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Cs,m=null,u=Ts,g=i}return p&&u==="text/plain"&&(g=p,p=void 0),{action:m,method:o.toLowerCase(),encType:u,formData:p,body:g}}function Zl(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}async function tg(i,d){if(i.id in d)return d[i.id];try{let o=await import(i.module);return d[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rg(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function sg(i,d,o){let m=await Promise.all(i.map(async u=>{let p=d.routes[u.route.id];if(p){let g=await tg(p,o);return g.links?g.links():[]}return[]}));return dg(m.flat(1).filter(rg).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function pu(i,d,o,m,u,p){let g=(j,v)=>o[v]?j.route.id!==o[v].route.id:!0,f=(j,v)=>{var _;return o[v].pathname!==j.pathname||((_=o[v].route.path)==null?void 0:_.endsWith("*"))&&o[v].params["*"]!==j.params["*"]};return p==="assets"?d.filter((j,v)=>g(j,v)||f(j,v)):p==="data"?d.filter((j,v)=>{var I;let _=m.routes[j.route.id];if(!_||!_.hasLoader)return!1;if(g(j,v)||f(j,v))return!0;if(j.route.shouldRevalidate){let P=j.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((I=o[0])==null?void 0:I.params)||{},nextUrl:new URL(i,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function ig(i,d){return lg(i.map(o=>{let m=d.routes[o.route.id];if(!m)return[];let u=[m.module];return m.imports&&(u=u.concat(m.imports)),u}).flat(1))}function lg(i){return[...new Set(i)]}function og(i){let d={},o=Object.keys(i).sort();for(let m of o)d[m]=i[m];return d}function dg(i,d){let o=new Set;return new Set(d),i.reduce((m,u)=>{let p=JSON.stringify(og(u));return o.has(p)||(o.add(p),m.push({key:p,link:u})),m},[])}function cg(i){let d=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return d.pathname==="/"?d.pathname="_root.data":d.pathname=`${d.pathname.replace(/\/$/,"")}.data`,d}function ug(){let i=S.useContext(xt);return Zl(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function mg(){let i=S.useContext(Es);return Zl(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var eo=S.createContext(void 0);eo.displayName="FrameworkContext";function Iu(){let i=S.useContext(eo);return Zl(i,"You must render this element inside a <HydratedRouter> element"),i}function pg(i,d){let o=S.useContext(eo),[m,u]=S.useState(!1),[p,g]=S.useState(!1),{onFocus:f,onBlur:j,onMouseEnter:v,onMouseLeave:_,onTouchStart:I}=d,P=S.useRef(null);S.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let A=D=>{D.forEach(z=>{g(z.isIntersecting)})},M=new IntersectionObserver(A,{threshold:.5});return P.current&&M.observe(P.current),()=>{M.disconnect()}}},[i]),S.useEffect(()=>{if(m){let A=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(A)}}},[m]);let F=()=>{u(!0)},T=()=>{u(!1),g(!1)};return o?i!=="intent"?[p,P,{}]:[p,P,{onFocus:lr(f,F),onBlur:lr(j,T),onMouseEnter:lr(v,F),onMouseLeave:lr(_,T),onTouchStart:lr(I,F)}]:[!1,P,{}]}function lr(i,d){return o=>{i&&i(o),o.defaultPrevented||d(o)}}function hg({page:i,...d}){let{router:o}=ug(),m=S.useMemo(()=>Nu(o.routes,i,o.basename),[o.routes,i,o.basename]);return m?S.createElement(xg,{page:i,matches:m,...d}):(console.warn(`Tried to prefetch ${i} but no routes matched.`),null)}function gg(i){let{manifest:d,routeModules:o}=Iu(),[m,u]=S.useState([]);return S.useEffect(()=>{let p=!1;return sg(i,d,o).then(g=>{p||u(g)}),()=>{p=!0}},[i,d,o]),m}function xg({page:i,matches:d,...o}){let m=Bn(),{manifest:u,routeModules:p}=Iu(),{loaderData:g,matches:f}=mg(),j=S.useMemo(()=>pu(i,d,f,u,m,"data"),[i,d,f,u,m]),v=S.useMemo(()=>pu(i,d,f,u,m,"assets"),[i,d,f,u,m]),_=S.useMemo(()=>{if(i===m.pathname+m.search+m.hash)return[];let F=new Set,T=!1;if(d.forEach(M=>{var z;let D=u.routes[M.route.id];!D||!D.hasLoader||(!j.some(ee=>ee.route.id===M.route.id)&&M.route.id in g&&((z=p[M.route.id])!=null&&z.shouldRevalidate)||D.hasClientLoader?T=!0:F.add(M.route.id))}),F.size===0)return[];let A=cg(i);return T&&F.size>0&&A.searchParams.set("_routes",d.filter(M=>F.has(M.route.id)).map(M=>M.route.id).join(",")),[A.pathname+A.search]},[g,m,u,j,d,i,p]),I=S.useMemo(()=>ig(v,u),[v,u]),P=gg(v);return S.createElement(S.Fragment,null,_.map(F=>S.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...o})),I.map(F=>S.createElement("link",{key:F,rel:"modulepreload",href:F,...o})),P.map(({key:F,link:T})=>S.createElement("link",{key:F,...T})))}function fg(...i){return d=>{i.forEach(o=>{typeof o=="function"?o(d):o!=null&&(o.current=d)})}}var Lu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lu&&(window.__reactRouterVersion="7.0.2")}catch{}function kg({basename:i,children:d,window:o}){let m=S.useRef();m.current==null&&(m.current=sh({window:o,v5Compat:!0}));let u=m.current,[p,g]=S.useState({action:u.action,location:u.location}),f=S.useCallback(j=>{S.startTransition(()=>g(j))},[g]);return S.useLayoutEffect(()=>u.listen(f),[u,f]),S.createElement(Wh,{basename:i,children:d,location:p.location,navigationType:p.action,navigator:u})}var Du=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ou=S.forwardRef(function({onClick:d,discover:o="render",prefetch:m="none",relative:u,reloadDocument:p,replace:g,state:f,target:j,to:v,preventScrollReset:_,viewTransition:I,...P},F){let{basename:T}=S.useContext(Oa),A=typeof v=="string"&&Du.test(v),M,D=!1;if(typeof v=="string"&&A&&(M=v,Lu))try{let xe=new URL(window.location.href),Te=v.startsWith("//")?new URL(xe.protocol+v):new URL(v),Xe=yn(Te.pathname,T);Te.origin===xe.origin&&Xe!=null?v=Xe+Te.search+Te.hash:D=!0}catch{La(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=Rh(v,{relative:u}),[ee,ne,me]=pg(m,P),ye=vg(v,{replace:g,state:f,target:j,preventScrollReset:_,relative:u,viewTransition:I});function ge(xe){d&&d(xe),xe.defaultPrevented||ye(xe)}let Pe=S.createElement("a",{...P,...me,href:M||z,onClick:D||p?d:ge,ref:fg(F,ne),target:j,"data-discover":!A&&o==="render"?"true":void 0});return ee&&!A?S.createElement(S.Fragment,null,Pe,S.createElement(hg,{page:z})):Pe});Ou.displayName="Link";var yg=S.forwardRef(function({"aria-current":d="page",caseSensitive:o=!1,className:m="",end:u=!1,style:p,to:g,viewTransition:f,children:j,...v},_){let I=gr(g,{relative:v.relative}),P=Bn(),F=S.useContext(Es),{navigator:T,basename:A}=S.useContext(Oa),M=F!=null&&_g(I)&&f===!0,D=T.encodeLocation?T.encodeLocation(I).pathname:I.pathname,z=P.pathname,ee=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;o||(z=z.toLowerCase(),ee=ee?ee.toLowerCase():null,D=D.toLowerCase()),ee&&A&&(ee=yn(ee,A)||ee);const ne=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let me=z===D||!u&&z.startsWith(D)&&z.charAt(ne)==="/",ye=ee!=null&&(ee===D||!u&&ee.startsWith(D)&&ee.charAt(D.length)==="/"),ge={isActive:me,isPending:ye,isTransitioning:M},Pe=me?d:void 0,xe;typeof m=="function"?xe=m(ge):xe=[m,me?"active":null,ye?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Te=typeof p=="function"?p(ge):p;return S.createElement(Ou,{...v,"aria-current":Pe,className:xe,ref:_,style:Te,to:g,viewTransition:f},typeof j=="function"?j(ge):j)});yg.displayName="NavLink";var jg=S.forwardRef(({discover:i="render",fetcherKey:d,navigate:o,reloadDocument:m,replace:u,state:p,method:g=Cs,action:f,onSubmit:j,relative:v,preventScrollReset:_,viewTransition:I,...P},F)=>{let T=Sg(),A=Pg(f,{relative:v}),M=g.toLowerCase()==="get"?"get":"post",D=typeof f=="string"&&Du.test(f),z=ee=>{if(j&&j(ee),ee.defaultPrevented)return;ee.preventDefault();let ne=ee.nativeEvent.submitter,me=(ne==null?void 0:ne.getAttribute("formmethod"))||g;T(ne||ee.currentTarget,{fetcherKey:d,method:me,navigate:o,replace:u,state:p,relative:v,preventScrollReset:_,viewTransition:I})};return S.createElement("form",{ref:F,method:M,action:A,onSubmit:m?j:z,...P,"data-discover":!D&&i==="render"?"true":void 0})});jg.displayName="Form";function bg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bu(i){let d=S.useContext(xt);return Ce(d,bg(i)),d}function vg(i,{target:d,replace:o,state:m,preventScrollReset:u,relative:p,viewTransition:g}={}){let f=Eh(),j=Bn(),v=gr(i,{relative:p});return S.useCallback(_=>{if(Zh(_,d)){_.preventDefault();let I=o!==void 0?o:cr(j)===cr(v);f(i,{replace:I,state:m,preventScrollReset:u,relative:p,viewTransition:g})}},[j,f,v,o,m,d,i,u,p,g])}var Ng=0,wg=()=>`__${String(++Ng)}__`;function Sg(){let{router:i}=Bu("useSubmit"),{basename:d}=S.useContext(Oa),o=$h();return S.useCallback(async(m,u={})=>{let{action:p,method:g,encType:f,formData:j,body:v}=ng(m,d);if(u.navigate===!1){let _=u.fetcherKey||wg();await i.fetch(_,o,u.action||p,{preventScrollReset:u.preventScrollReset,formData:j,body:v,formMethod:u.method||g,formEncType:u.encType||f,flushSync:u.flushSync})}else await i.navigate(u.action||p,{preventScrollReset:u.preventScrollReset,formData:j,body:v,formMethod:u.method||g,formEncType:u.encType||f,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,d,o])}function Pg(i,{relative:d}={}){let{basename:o}=S.useContext(Oa),m=S.useContext(Qa);Ce(m,"useFormAction must be used inside a RouteContext");let[u]=m.matches.slice(-1),p={...gr(i||".",{relative:d})},g=Bn();if(i==null){p.search=g.search;let f=new URLSearchParams(p.search),j=f.getAll("index");if(j.some(_=>_==="")){f.delete("index"),j.filter(I=>I).forEach(I=>f.append("index",I));let _=f.toString();p.search=_?`?${_}`:""}}return(!i||i===".")&&u.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(p.pathname=p.pathname==="/"?o:Ga([o,p.pathname])),cr(p)}function _g(i,d={}){let o=S.useContext(Cu);Ce(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:m}=Bu("useViewTransitionState"),u=gr(i,{relative:d.relative});if(!o.isTransitioning)return!1;let p=yn(o.currentLocation.pathname,m)||o.currentLocation.pathname,g=yn(o.nextLocation.pathname,m)||o.nextLocation.pathname;return Rs(u.pathname,g)!=null||Rs(u.pathname,p)!=null}new TextEncoder;const Mg=S.createContext(void 0),Cg=({children:i})=>{const[d,o]=S.useState({isAuthenticated:!1,token:null,user:null});S.useEffect(()=>{const f=localStorage.getItem("token"),j=localStorage.getItem("user");f&&j&&o({isAuthenticated:!0,token:f,user:j})},[]);const m=(f,j)=>{localStorage.setItem("token",f),localStorage.setItem("user",j),o({isAuthenticated:!0,token:f,user:j})},u=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),o({isAuthenticated:!1,token:null,user:null})},p=f=>{localStorage.setItem("token",f),o(j=>({...j,token:f}))},g=()=>d.token;return e.jsx(Mg.Provider,{value:{...d,login:m,logout:u,updateToken:p,getToken:g},children:i})};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fu=(...i)=>i.filter((d,o,m)=>!!d&&d.trim()!==""&&m.indexOf(d)===o).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=S.forwardRef(({color:i="currentColor",size:d=24,strokeWidth:o=2,absoluteStrokeWidth:m,className:u="",children:p,iconNode:g,...f},j)=>S.createElement("svg",{ref:j,...Rg,width:d,height:d,stroke:i,strokeWidth:m?Number(o)*24/Number(d):o,className:Fu("lucide",u),...f},[...g.map(([v,_])=>S.createElement(v,_)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(i,d)=>{const o=S.forwardRef(({className:m,...u},p)=>S.createElement(Eg,{ref:p,iconNode:d,className:Fu(`lucide-${Tg(i)}`,m),...u}));return o.displayName=`${i}`,o};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=Z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=Z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=Z("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=Z("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Z("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Z("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=Z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=Z("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=Z("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=Z("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=Z("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=Z("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=Z("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=Z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=Z("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=Z("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Z("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=Z("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=Z("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=Z("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Z("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=Z("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=Z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=Z("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=Z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=Z("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=Z("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=Z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=Z("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=Z("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=Z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=Z("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=Z("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Z("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=Z("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=Z("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=Z("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=Z("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=Z("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Z("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Z("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Z("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=Z("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=Z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Z("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function fu(i,d){if(typeof i=="function")return i(d);i!=null&&(i.current=d)}function rx(...i){return d=>{let o=!1;const m=i.map(u=>{const p=fu(u,d);return!o&&typeof p=="function"&&(o=!0),p});if(o)return()=>{for(let u=0;u<m.length;u++){const p=m[u];typeof p=="function"?p():fu(i[u],null)}}}}var Uu=S.forwardRef((i,d)=>{const{children:o,...m}=i,u=S.Children.toArray(o),p=u.find(ix);if(p){const g=p.props.children,f=u.map(j=>j===p?S.Children.count(g)>1?S.Children.only(null):S.isValidElement(g)?g.props.children:null:j);return e.jsx(Wl,{...m,ref:d,children:S.isValidElement(g)?S.cloneElement(g,void 0,f):null})}return e.jsx(Wl,{...m,ref:d,children:o})});Uu.displayName="Slot";var Wl=S.forwardRef((i,d)=>{const{children:o,...m}=i;if(S.isValidElement(o)){const u=ox(o);return S.cloneElement(o,{...lx(m,o.props),ref:d?rx(d,u):u})}return S.Children.count(o)>1?S.Children.only(null):null});Wl.displayName="SlotClone";var sx=({children:i})=>e.jsx(e.Fragment,{children:i});function ix(i){return S.isValidElement(i)&&i.type===sx}function lx(i,d){const o={...d};for(const m in d){const u=i[m],p=d[m];/^on[A-Z]/.test(m)?u&&p?o[m]=(...f)=>{p(...f),u(...f)}:u&&(o[m]=u):m==="style"?o[m]={...u,...p}:m==="className"&&(o[m]=[u,p].filter(Boolean).join(" "))}return{...i,...o}}function ox(i){var m,u;let d=(m=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:m.get,o=d&&"isReactWarning"in d&&d.isReactWarning;return o?i.ref:(d=(u=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:u.get,o=d&&"isReactWarning"in d&&d.isReactWarning,o?i.props.ref:i.props.ref||i.ref)}function $u(i){var d,o,m="";if(typeof i=="string"||typeof i=="number")m+=i;else if(typeof i=="object")if(Array.isArray(i)){var u=i.length;for(d=0;d<u;d++)i[d]&&(o=$u(i[d]))&&(m&&(m+=" "),m+=o)}else for(o in i)i[o]&&(m&&(m+=" "),m+=o);return m}function Vu(){for(var i,d,o=0,m="",u=arguments.length;o<u;o++)(i=arguments[o])&&(d=$u(i))&&(m&&(m+=" "),m+=d);return m}const ku=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,yu=Vu,dx=(i,d)=>o=>{var m;if((d==null?void 0:d.variants)==null)return yu(i,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:u,defaultVariants:p}=d,g=Object.keys(u).map(v=>{const _=o==null?void 0:o[v],I=p==null?void 0:p[v];if(_===null)return null;const P=ku(_)||ku(I);return u[v][P]}),f=o&&Object.entries(o).reduce((v,_)=>{let[I,P]=_;return P===void 0||(v[I]=P),v},{}),j=d==null||(m=d.compoundVariants)===null||m===void 0?void 0:m.reduce((v,_)=>{let{class:I,className:P,...F}=_;return Object.entries(F).every(T=>{let[A,M]=T;return Array.isArray(M)?M.includes({...p,...f}[A]):{...p,...f}[A]===M})?[...v,I,P]:v},[]);return yu(i,g,j,o==null?void 0:o.class,o==null?void 0:o.className)},to="-",cx=i=>{const d=mx(i),{conflictingClassGroups:o,conflictingClassGroupModifiers:m}=i;return{getClassGroupId:g=>{const f=g.split(to);return f[0]===""&&f.length!==1&&f.shift(),Ku(f,d)||ux(g)},getConflictingClassGroupIds:(g,f)=>{const j=o[g]||[];return f&&m[g]?[...j,...m[g]]:j}}},Ku=(i,d)=>{var g;if(i.length===0)return d.classGroupId;const o=i[0],m=d.nextPart.get(o),u=m?Ku(i.slice(1),m):void 0;if(u)return u;if(d.validators.length===0)return;const p=i.join(to);return(g=d.validators.find(({validator:f})=>f(p)))==null?void 0:g.classGroupId},ju=/^\[(.+)\]$/,ux=i=>{if(ju.test(i)){const d=ju.exec(i)[1],o=d==null?void 0:d.substring(0,d.indexOf(":"));if(o)return"arbitrary.."+o}},mx=i=>{const{theme:d,prefix:o}=i,m={nextPart:new Map,validators:[]};return hx(Object.entries(i.classGroups),o).forEach(([p,g])=>{ql(g,m,p,d)}),m},ql=(i,d,o,m)=>{i.forEach(u=>{if(typeof u=="string"){const p=u===""?d:bu(d,u);p.classGroupId=o;return}if(typeof u=="function"){if(px(u)){ql(u(m),d,o,m);return}d.validators.push({validator:u,classGroupId:o});return}Object.entries(u).forEach(([p,g])=>{ql(g,bu(d,p),o,m)})})},bu=(i,d)=>{let o=i;return d.split(to).forEach(m=>{o.nextPart.has(m)||o.nextPart.set(m,{nextPart:new Map,validators:[]}),o=o.nextPart.get(m)}),o},px=i=>i.isThemeGetter,hx=(i,d)=>d?i.map(([o,m])=>{const u=m.map(p=>typeof p=="string"?d+p:typeof p=="object"?Object.fromEntries(Object.entries(p).map(([g,f])=>[d+g,f])):p);return[o,u]}):i,gx=i=>{if(i<1)return{get:()=>{},set:()=>{}};let d=0,o=new Map,m=new Map;const u=(p,g)=>{o.set(p,g),d++,d>i&&(d=0,m=o,o=new Map)};return{get(p){let g=o.get(p);if(g!==void 0)return g;if((g=m.get(p))!==void 0)return u(p,g),g},set(p,g){o.has(p)?o.set(p,g):u(p,g)}}},Ju="!",xx=i=>{const{separator:d,experimentalParseClassName:o}=i,m=d.length===1,u=d[0],p=d.length,g=f=>{const j=[];let v=0,_=0,I;for(let M=0;M<f.length;M++){let D=f[M];if(v===0){if(D===u&&(m||f.slice(M,M+p)===d)){j.push(f.slice(_,M)),_=M+p;continue}if(D==="/"){I=M;continue}}D==="["?v++:D==="]"&&v--}const P=j.length===0?f:f.substring(_),F=P.startsWith(Ju),T=F?P.substring(1):P,A=I&&I>_?I-_:void 0;return{modifiers:j,hasImportantModifier:F,baseClassName:T,maybePostfixModifierPosition:A}};return o?f=>o({className:f,parseClassName:g}):g},fx=i=>{if(i.length<=1)return i;const d=[];let o=[];return i.forEach(m=>{m[0]==="["?(d.push(...o.sort(),m),o=[]):o.push(m)}),d.push(...o.sort()),d},kx=i=>({cache:gx(i.cacheSize),parseClassName:xx(i),...cx(i)}),yx=/\s+/,jx=(i,d)=>{const{parseClassName:o,getClassGroupId:m,getConflictingClassGroupIds:u}=d,p=[],g=i.trim().split(yx);let f="";for(let j=g.length-1;j>=0;j-=1){const v=g[j],{modifiers:_,hasImportantModifier:I,baseClassName:P,maybePostfixModifierPosition:F}=o(v);let T=!!F,A=m(T?P.substring(0,F):P);if(!A){if(!T){f=v+(f.length>0?" "+f:f);continue}if(A=m(P),!A){f=v+(f.length>0?" "+f:f);continue}T=!1}const M=fx(_).join(":"),D=I?M+Ju:M,z=D+A;if(p.includes(z))continue;p.push(z);const ee=u(A,T);for(let ne=0;ne<ee.length;++ne){const me=ee[ne];p.push(D+me)}f=v+(f.length>0?" "+f:f)}return f};function bx(){let i=0,d,o,m="";for(;i<arguments.length;)(d=arguments[i++])&&(o=Wu(d))&&(m&&(m+=" "),m+=o);return m}const Wu=i=>{if(typeof i=="string")return i;let d,o="";for(let m=0;m<i.length;m++)i[m]&&(d=Wu(i[m]))&&(o&&(o+=" "),o+=d);return o};function vx(i,...d){let o,m,u,p=g;function g(j){const v=d.reduce((_,I)=>I(_),i());return o=kx(v),m=o.cache.get,u=o.cache.set,p=f,f(j)}function f(j){const v=m(j);if(v)return v;const _=jx(j,o);return u(j,_),_}return function(){return p(bx.apply(null,arguments))}}const Ne=i=>{const d=o=>o[i]||[];return d.isThemeGetter=!0,d},qu=/^\[(?:([a-z-]+):)?(.+)\]$/i,Nx=/^\d+\/\d+$/,wx=new Set(["px","full","screen"]),Sx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Px=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_x=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Mx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Cx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ja=i=>ht(i)||wx.has(i)||Nx.test(i),fn=i=>kt(i,"length",Ox),ht=i=>!!i&&!Number.isNaN(Number(i)),Dl=i=>kt(i,"number",ht),or=i=>!!i&&Number.isInteger(Number(i)),Tx=i=>i.endsWith("%")&&ht(i.slice(0,-1)),te=i=>qu.test(i),kn=i=>Sx.test(i),Rx=new Set(["length","size","percentage"]),Ex=i=>kt(i,Rx,Gu),Ax=i=>kt(i,"position",Gu),Ix=new Set(["image","url"]),Lx=i=>kt(i,Ix,Fx),Dx=i=>kt(i,"",Bx),dr=()=>!0,kt=(i,d,o)=>{const m=qu.exec(i);return m?m[1]?typeof d=="string"?m[1]===d:d.has(m[1]):o(m[2]):!1},Ox=i=>Px.test(i)&&!_x.test(i),Gu=()=>!1,Bx=i=>Mx.test(i),Fx=i=>Cx.test(i),zx=()=>{const i=Ne("colors"),d=Ne("spacing"),o=Ne("blur"),m=Ne("brightness"),u=Ne("borderColor"),p=Ne("borderRadius"),g=Ne("borderSpacing"),f=Ne("borderWidth"),j=Ne("contrast"),v=Ne("grayscale"),_=Ne("hueRotate"),I=Ne("invert"),P=Ne("gap"),F=Ne("gradientColorStops"),T=Ne("gradientColorStopPositions"),A=Ne("inset"),M=Ne("margin"),D=Ne("opacity"),z=Ne("padding"),ee=Ne("saturate"),ne=Ne("scale"),me=Ne("sepia"),ye=Ne("skew"),ge=Ne("space"),Pe=Ne("translate"),xe=()=>["auto","contain","none"],Te=()=>["auto","hidden","clip","visible","scroll"],Xe=()=>["auto",te,d],le=()=>[te,d],$e=()=>["",Ja,fn],Ve=()=>["auto",ht,te],ra=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Le=()=>["solid","dashed","dotted","double","none"],je=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",te],$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>[ht,te];return{cacheSize:500,separator:":",theme:{colors:[dr],spacing:[Ja,fn],blur:["none","",kn,te],brightness:y(),borderColor:[i],borderRadius:["none","","full",kn,te],borderSpacing:le(),borderWidth:$e(),contrast:y(),grayscale:G(),hueRotate:y(),invert:G(),gap:le(),gradientColorStops:[i],gradientColorStopPositions:[Tx,fn],inset:Xe(),margin:Xe(),opacity:y(),padding:le(),saturate:y(),scale:y(),sepia:G(),skew:y(),space:le(),translate:le()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[kn]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ra(),te]}],overflow:[{overflow:Te()}],"overflow-x":[{"overflow-x":Te()}],"overflow-y":[{"overflow-y":Te()}],overscroll:[{overscroll:xe()}],"overscroll-x":[{"overscroll-x":xe()}],"overscroll-y":[{"overscroll-y":xe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",or,te]}],basis:[{basis:Xe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",or,te]}],"grid-cols":[{"grid-cols":[dr]}],"col-start-end":[{col:["auto",{span:["full",or,te]},te]}],"col-start":[{"col-start":Ve()}],"col-end":[{"col-end":Ve()}],"grid-rows":[{"grid-rows":[dr]}],"row-start-end":[{row:["auto",{span:[or,te]},te]}],"row-start":[{"row-start":Ve()}],"row-end":[{"row-end":Ve()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[P]}],"gap-x":[{"gap-x":[P]}],"gap-y":[{"gap-y":[P]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[z]}],px:[{px:[z]}],py:[{py:[z]}],ps:[{ps:[z]}],pe:[{pe:[z]}],pt:[{pt:[z]}],pr:[{pr:[z]}],pb:[{pb:[z]}],pl:[{pl:[z]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[ge]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ge]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,d]}],"min-w":[{"min-w":[te,d,"min","max","fit"]}],"max-w":[{"max-w":[te,d,"none","full","min","max","fit","prose",{screen:[kn]},kn]}],h:[{h:[te,d,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,d,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,d,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,d,"auto","min","max","fit"]}],"font-size":[{text:["base",kn,fn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Dl]}],"font-family":[{font:[dr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",ht,Dl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ja,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[D]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Le(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ja,fn]}],"underline-offset":[{"underline-offset":["auto",Ja,te]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:le()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[D]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ra(),Ax]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ex]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Lx]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[T]}],"gradient-via-pos":[{via:[T]}],"gradient-to-pos":[{to:[T]}],"gradient-from":[{from:[F]}],"gradient-via":[{via:[F]}],"gradient-to":[{to:[F]}],rounded:[{rounded:[p]}],"rounded-s":[{"rounded-s":[p]}],"rounded-e":[{"rounded-e":[p]}],"rounded-t":[{"rounded-t":[p]}],"rounded-r":[{"rounded-r":[p]}],"rounded-b":[{"rounded-b":[p]}],"rounded-l":[{"rounded-l":[p]}],"rounded-ss":[{"rounded-ss":[p]}],"rounded-se":[{"rounded-se":[p]}],"rounded-ee":[{"rounded-ee":[p]}],"rounded-es":[{"rounded-es":[p]}],"rounded-tl":[{"rounded-tl":[p]}],"rounded-tr":[{"rounded-tr":[p]}],"rounded-br":[{"rounded-br":[p]}],"rounded-bl":[{"rounded-bl":[p]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[D]}],"border-style":[{border:[...Le(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[D]}],"divide-style":[{divide:Le()}],"border-color":[{border:[u]}],"border-color-x":[{"border-x":[u]}],"border-color-y":[{"border-y":[u]}],"border-color-s":[{"border-s":[u]}],"border-color-e":[{"border-e":[u]}],"border-color-t":[{"border-t":[u]}],"border-color-r":[{"border-r":[u]}],"border-color-b":[{"border-b":[u]}],"border-color-l":[{"border-l":[u]}],"divide-color":[{divide:[u]}],"outline-style":[{outline:["",...Le()]}],"outline-offset":[{"outline-offset":[Ja,te]}],"outline-w":[{outline:[Ja,fn]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:$e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[D]}],"ring-offset-w":[{"ring-offset":[Ja,fn]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",kn,Dx]}],"shadow-color":[{shadow:[dr]}],opacity:[{opacity:[D]}],"mix-blend":[{"mix-blend":[...je(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":je()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[m]}],contrast:[{contrast:[j]}],"drop-shadow":[{"drop-shadow":["","none",kn,te]}],grayscale:[{grayscale:[v]}],"hue-rotate":[{"hue-rotate":[_]}],invert:[{invert:[I]}],saturate:[{saturate:[ee]}],sepia:[{sepia:[me]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[m]}],"backdrop-contrast":[{"backdrop-contrast":[j]}],"backdrop-grayscale":[{"backdrop-grayscale":[v]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_]}],"backdrop-invert":[{"backdrop-invert":[I]}],"backdrop-opacity":[{"backdrop-opacity":[D]}],"backdrop-saturate":[{"backdrop-saturate":[ee]}],"backdrop-sepia":[{"backdrop-sepia":[me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[g]}],"border-spacing-x":[{"border-spacing-x":[g]}],"border-spacing-y":[{"border-spacing-y":[g]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:y()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:y()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[ne]}],"scale-x":[{"scale-x":[ne]}],"scale-y":[{"scale-y":[ne]}],rotate:[{rotate:[or,te]}],"translate-x":[{"translate-x":[Pe]}],"translate-y":[{"translate-y":[Pe]}],"skew-x":[{"skew-x":[ye]}],"skew-y":[{"skew-y":[ye]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":le()}],"scroll-mx":[{"scroll-mx":le()}],"scroll-my":[{"scroll-my":le()}],"scroll-ms":[{"scroll-ms":le()}],"scroll-me":[{"scroll-me":le()}],"scroll-mt":[{"scroll-mt":le()}],"scroll-mr":[{"scroll-mr":le()}],"scroll-mb":[{"scroll-mb":le()}],"scroll-ml":[{"scroll-ml":le()}],"scroll-p":[{"scroll-p":le()}],"scroll-px":[{"scroll-px":le()}],"scroll-py":[{"scroll-py":le()}],"scroll-ps":[{"scroll-ps":le()}],"scroll-pe":[{"scroll-pe":le()}],"scroll-pt":[{"scroll-pt":le()}],"scroll-pr":[{"scroll-pr":le()}],"scroll-pb":[{"scroll-pb":le()}],"scroll-pl":[{"scroll-pl":le()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Ja,fn,Dl]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Hx=vx(zx);function zn(...i){return Hx(Vu(i))}const Ux=dx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Ia=S.forwardRef(({className:i,variant:d,size:o,asChild:m=!1,...u},p)=>{const g=m?Uu:"button";return e.jsx(g,{className:zn(Ux({variant:d,size:o,className:i})),ref:p,...u})});Ia.displayName="Button";const Qu="/assets/logo-CjbLROB6.png",vu=[{label:"Beranda",href:"/"},{label:"Praktikum",href:"#",children:[{label:"JavaScript Dasar",href:"/pemrograman-web/javascript-dasar"},{label:"Next Gen JavaScript",href:"/pemrograman-web/nextgen-javascript"},{label:"React JS Dasar",href:"/pemrograman-web/react-dasar"},{label:"Python Dasar",href:"/pemrograman-web/pemrograman-python"}]},{label:"UTS",href:"#",children:[{label:"Pemrograman Web",href:"/pemrograman-web/uts"}]},{label:"Tentang",href:"/about"},{label:"Kontak",href:"/contact"}],$x=()=>{const[i,d]=S.useState(!1),[o,m]=S.useState(null),u=()=>{d(!i)},p=g=>{m(o===g?null:g)};return e.jsx("nav",{className:"bg-white/80 backdrop-blur-sm shadow-md py-4 px-4 sticky top-0 z-50",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"flex",children:e.jsx("a",{href:"/",className:"flex",children:e.jsx("img",{src:Qu,alt:"Logo Praktikum IF",className:"h-12 w-auto"})})}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:vu.map(g=>e.jsx("div",{className:"relative",children:g.children?e.jsxs("div",{children:[e.jsxs("button",{className:"flex items-center text-gray-700 hover:text-blue-600",onClick:()=>p(g.label),children:[g.label,e.jsx(hu,{className:"ml-1 h-4 w-4"})]}),o===g.label&&e.jsx("div",{className:"absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50",children:g.children.map(f=>e.jsx("a",{href:f.href,className:"block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50",children:f.label},f.label))})]}):e.jsx("a",{href:g.href,className:"text-gray-700 hover:text-blue-600",children:g.label})},g.label))}),e.jsx("div",{className:"hidden md:flex",children:e.jsx(Ia,{variant:"default",children:"Masuk"})}),e.jsx("div",{className:"md:hidden flex items-center",children:e.jsx("button",{className:"text-gray-500 hover:text-blue-600 focus:outline-none",onClick:u,children:i?e.jsx(tx,{size:24}):e.jsx(Gg,{size:24})})})]}),i&&e.jsx("div",{className:"md:hidden mt-4",children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[vu.map(g=>e.jsx("div",{children:g.children?e.jsxs("div",{children:[e.jsxs("button",{className:"flex items-center text-gray-700 hover:text-blue-600 font-medium",onClick:()=>p(g.label),children:[g.label,e.jsx(hu,{className:"ml-1 h-4 w-4"})]}),o===g.label&&e.jsx("div",{className:"ml-4 mt-2 flex flex-col space-y-2",children:g.children.map(f=>e.jsx("a",{href:f.href,className:"text-sm text-gray-600 hover:text-blue-600",children:f.label},f.label))})]}):e.jsx("a",{href:g.href,className:"text-gray-700 hover:text-blue-600 font-medium",children:g.label})},g.label)),e.jsx("div",{className:"pt-4",children:e.jsx(Ia,{variant:"default",className:"w-full",children:"Masuk"})})]})})]})})},Vx=({title:i,subtitle:d,icon:o=e.jsx(Sa,{className:"w-16 h-16 text-blue-500 mb-6"})})=>e.jsx("div",{className:"bg-gradient-to-r from-blue-100 to-blue-100 py-16 px-4",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"flex flex-col items-center justify-center text-center max-w-3xl mx-auto",children:[o,e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800",children:i}),d&&e.jsx("p",{className:"mt-4 text-xl text-gray-600 max-w-2xl",children:d})]})})}),Kx=()=>e.jsx("footer",{className:"bg-gray-800 text-white py-8 mt-12",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex",children:e.jsx("a",{href:"/",className:"flex",children:e.jsx("img",{src:Qu,alt:"Logo Praktikum IF",className:"h-12 w-auto"})})}),e.jsx("p",{className:"text-gray-300 mt-4",children:"Platform pembelajaran interaktif untuk mengembangkan keterampilan pemrograman Kalian melalui praktikum yang komprehensif."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Tautan"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("a",{href:"/",className:"text-gray-300 hover:text-white",children:"Beranda"})}),e.jsx("li",{children:e.jsx("a",{href:"/praktikum",className:"text-gray-300 hover:text-white",children:"Praktikum"})}),e.jsx("li",{children:e.jsx("a",{href:"/about",className:"text-gray-300 hover:text-white",children:"Tentang"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact",className:"text-gray-300 hover:text-white",children:"Kontak"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Hubungi Kami"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Punya pertanyaan? Hubungi kami di contact@Praktikum IF.com"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:e.jsx(Vg,{size:24})}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:e.jsx(nx,{size:24})}),e.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:e.jsx(Jg,{size:24})})]})]})]}),e.jsx("div",{className:"border-t border-gray-700 mt-8 pt-6 text-center",children:e.jsxs("p",{className:"text-gray-300",children:["© ",new Date().getFullYear()," Praktikum IF. All rights reserved."]})})]})}),Hn=({title:i,subtitle:d,children:o})=>e.jsxs("div",{className:"flex flex-col min-h-screen",children:[e.jsx($x,{}),i?e.jsx(Vx,{title:i,subtitle:d}):null,e.jsx("main",{className:"flex-grow bg-white px-4 lg:px-8",children:o}),e.jsx(Kx,{})]}),Q=({id:i,title:d,isBordered:o=!0,icon:m,children:u})=>e.jsx("section",{id:i,className:"py-8",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"mr-4",children:m||null}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:d||null})]}),e.jsx("div",{className:`pl-2 ${o==!0?"border-l-4 border-blue-400":""}`,children:e.jsx("div",{className:"px-2",children:u})})]})}),Jx=i=>{const[d,o]=Xp.useState(!1);return{copied:d,copy:async()=>{try{await navigator.clipboard.writeText(i),o(!0),setTimeout(()=>o(!1),2e3)}catch(u){console.error("Failed to copy text: ",u)}}}},O=({code:i,language:d="javascript",title:o})=>{const{copied:m,copy:u}=Jx(i);return e.jsxs("div",{className:"rounded-lg overflow-hidden bg-gray-900 my-4",children:[o&&e.jsxs("div",{className:"bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono flex justify-between items-center",children:[e.jsx("span",{children:o}),e.jsx(Ia,{variant:"ghost",size:"sm",onClick:u,className:"text-gray-300 hover:text-white","aria-label":m?"Copied":"Copy to clipboard",children:m?e.jsx(mr,{size:16}):e.jsx(gu,{size:16})})]}),e.jsxs("pre",{className:`p-4 overflow-x-auto text-gray-300 ${o?"":"pt-10 relative"}`,children:[!o&&e.jsx(Ia,{variant:"ghost",size:"sm",onClick:u,className:"absolute top-2 right-2 text-gray-300 hover:text-white","aria-label":m?"Copied":"Copy to clipboard",children:m?e.jsx(mr,{size:16}):e.jsx(gu,{size:16})}),e.jsx("code",{className:`font-mono text-sm language-${d}`,children:i})]})]})},yt=({steps:i})=>e.jsx("div",{className:"space-y-6",children:i.map((d,o)=>e.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[e.jsxs("div",{className:"bg-blue-50 px-6 py-4 flex items-center",children:[e.jsx("div",{className:"bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4",children:o+1}),e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:d.title})]}),e.jsx("div",{className:"p-6",children:d.content})]},d.id))}),q=({type:i,title:d,children:o})=>{const m=()=>{switch(i){case"info":return{bgColor:"bg-blue-50",borderColor:"border-blue-500",textColor:"text-blue-800",icon:e.jsx(zu,{className:"w-5 h-5 text-blue-500"})};case"warning":return{bgColor:"bg-amber-50",borderColor:"border-amber-500",textColor:"text-amber-800",icon:e.jsx(Jl,{className:"w-5 h-5 text-amber-500"})};case"success":return{bgColor:"bg-green-50",borderColor:"border-green-500",textColor:"text-green-800",icon:e.jsx(bn,{className:"w-5 h-5 text-green-500"})};case"tip":return{bgColor:"bg-purple-50",borderColor:"border-purple-500",textColor:"text-purple-800",icon:e.jsx(ao,{className:"w-5 h-5 text-purple-500"})}}},{bgColor:u,textColor:p,icon:g}=m();return e.jsxs("div",{className:`${u} p-4 rounded-r-md my-4 overflow-x-scroll`,children:[e.jsxs("div",{className:"flex items-center",children:[g,d&&e.jsx("h4",{className:`ml-2 font-semibold ${p}`,children:d})]}),e.jsx("div",{className:`mt-2 ${p}`,children:o})]})},On=({href:i,title:d="Submit Tugas"})=>e.jsx("div",{className:"bg-gray-100 p-6 rounded-lg border border-gray-300 my-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsxs("div",{className:"mb-4 md:mb-0",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Sudah selesai mengerjakan?"}),e.jsx("p",{className:"text-gray-600",children:"Klik tombol di samping untuk mengirimkan tugas praktikum Kalian."})]}),e.jsxs(Ia,{variant:"default",size:"lg",onClick:()=>window.open(i,"_blank"),className:"flex items-center",children:[d,e.jsx(Fg,{className:"ml-2 w-4 h-4"})]})]})});function Wx(){return e.jsxs(Hn,{title:"Praktikum JavaScript Dasar",subtitle:"Mengenal dasar-dasar JavaScript dan konsep pemrograman web",children:[e.jsx(Q,{id:"tujuan",title:"Tujuan Praktikum",icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan praktikum ini, Kalian diharapkan mampu:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Memahami konsep dasar JavaScript sebagai bahasa pemrograman web"}),e.jsx("li",{children:"Menguasai penggunaan variabel, tipe data, dan operator dalam JavaScript"}),e.jsx("li",{children:"Mengimplementasikan struktur kendali (conditionals dan loops)"}),e.jsx("li",{children:"Membuat dan menggunakan fungsi dalam JavaScript"}),e.jsx("li",{children:"Mengerti cara menangani event dan memanipulasi DOM"})]})]})}),e.jsx(Q,{id:"dasar-teori",title:"Dasar Teori",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs(q,{type:"info",title:"Apa itu JavaScript?",children:[e.jsx("p",{children:"JavaScript adalah bahasa pemrograman tingkat tinggi, dinamis, dan serbaguna yang memungkinkan Kalian untuk menambahkan interaktivitas ke halaman web. Sejak diciptakan oleh Brendan Eich pada tahun 1995, JavaScript telah menjadi salah satu bahasa pemrograman paling populer di dunia."}),e.jsx("p",{className:"mt-2",children:"Menurut survey Stack Overflow Developer Survey 2024, JavaScript tetap menjadi bahasa pemrograman yang paling banyak digunakan untuk tahun kesepuluh berturut-turut, dengan lebih dari 67% developer menggunakannya secara reguler."}),e.jsx("p",{className:"mt-2",children:'JavaScript awalnya dikembangkan untuk browser Netscape Navigator dengan nama "Mocha", kemudian diubah menjadi "LiveScript", dan akhirnya menjadi "JavaScript" sebagai strategi pemasaran untuk memanfaatkan popularitas Java pada saat itu.'})]}),e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 my-4",children:"Karakteristik Utama JavaScript"}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Karakteristik"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Deskripsi"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Contoh"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Client-side scripting"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Berjalan di browser pengguna, tidak memerlukan kompilasi"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:"document.getElementById('demo').innerHTML = 'Hello World';"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Dinamis"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Tipe data ditentukan saat runtime"}),e.jsx("td",{className:"px-4 py-2",children:e.jsxs("code",{children:["let x = 5; // x adalah number",e.jsx("br",{}),'x = "John"; // sekarang x adalah string']})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Berorientasi objek"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Berbasis prototipe alih-alih kelas"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
const person = {name: 'John', age: 30};
                      `})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Event-driven"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Dapat merespons tindakan pengguna"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
button.addEventListener('click', function() {alert('Clicked!'); });
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"First-class functions"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Fungsi dapat diperlakukan sebagai variabel"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
const greeting = function(name) { return \`Hello ${name}\`; };`})})})]})]})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Engine JavaScript"}),e.jsx("p",{children:"Engine JavaScript adalah program yang mengeksekusi kode JavaScript. Browser web modern memiliki engine JavaScript terintegrasi."}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"V8"}),": Dikembangkan oleh Google, digunakan di Chrome dan Node.js"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SpiderMonkey"}),": Engine pertama, dikembangkan oleh Netscape, sekarang digunakan di Firefox"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JavaScriptCore"}),": Dikembangkan oleh Apple untuk Safari"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Chakra"}),": Dikembangkan oleh Microsoft untuk Edge (versi lama)"]})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Dasar-dasar JavaScript"}),e.jsxs("div",{children:[e.jsx("p",{children:"JavaScript memiliki 3 cara untuk mendeklarasikan variabel:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"var"}),": Cara lama, memiliki cakupan fungsi atau global"]}),e.jsxs("li",{children:[e.jsx("code",{children:"let"}),": Diperkenalkan di ES6, memiliki cakupan blok"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"}),": Diperkenalkan di ES6, untuk nilai yang tidak berubah"]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium text-gray-700",children:"Tipe Data Primitif"}),e.jsx("p",{children:"Number, String, Boolean, Undefined, Null, Symbol, dan BigInt"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-lg font-medium text-gray-800",children:"JavaScript modern tidak hanya terbatas pada browser, tetapi telah berkembang menjadi ekosistem lengkap untuk pengembangan berbagai platform:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6",children:[{title:"Server-side",tech:"Node.js, Deno",color:"bg-blue-50"},{title:"Mobile",tech:"React Native, Ionic",color:"bg-green-50"},{title:"Desktop",tech:"Electron, NW.js",color:"bg-yellow-50"},{title:"IoT",tech:"Johnny-Five, Cylon.js",color:"bg-purple-50"},{title:"Game",tech:"Phaser, Three.js",color:"bg-red-50"},{title:"AI/ML",tech:"TensorFlow.js, Brain.js",color:"bg-blue-50"}].map((i,d)=>e.jsxs("div",{className:`${i.color} p-4 rounded-xl shadow-md hover:scale-105 transition-transform`,children:[e.jsx("h4",{className:"font-semibold text-blue-700 text-lg",children:i.title}),e.jsx("p",{className:"text-sm text-gray-700 mt-1",children:i.tech})]},d))})]}),e.jsx("div",{className:"mt-12",children:e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 my-4",children:"Fitur JavaScript Modern"}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Fitur"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Deskripsi"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Contoh"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Arrow Functions"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Sintaks ringkas untuk fungsi"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
const add = (a, b) => a + b;
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Template Literals"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"String yang mendukung interpolasi"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`\`Hello, ${name}!\``})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Destructuring"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Ekstraksi nilai dari objek/array"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
const {name, age} = person;
                         `})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Promises"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Penanganan operasi asinkron"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
fetch(url).then(response => response.json())
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Async/Await"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Sintaks untuk kode asinkron"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
async function getData() {... }
`})})})]})]})]})]})}),e.jsxs("div",{className:"flex flex-col pt-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Document Object Model (DOM)"}),e.jsx("p",{children:"DOM adalah representasi terstruktur dari dokumen HTML yang memungkinkan JavaScript untuk berinteraksi dengan dan memanipulasi konten halaman web."}),e.jsx("div",{className:"mt-2 bg-gray-100 p-3 md:p-5 rounded-md overflow-x-auto",children:e.jsx("code",{className:"text-sm md:text-base",children:e.jsx("pre",{className:"whitespace-pre-wrap md:whitespace-pre",children:`
// Mengakses elemen
const element = document.getElementById('myId');

// Mengubah konten
element.innerHTML = 'New content';

// Menambah event listener
element.addEventListener('click', function() {
    alert('Element clicked!');
});
        `})})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mt-8",children:"API Web Modern"}),e.jsx("p",{className:"text-lg font-medium text-gray-800",children:"JavaScript modern menawarkan berbagai API Web yang memungkinkan pengembangan aplikasi yang kaya fitur:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6",children:[{title:"Fetch API",tech:"Mengirim permintaan jaringan",color:"bg-blue-50"},{title:"Web Storage",tech:"Menyimpan data di browser",color:"bg-green-50"},{title:"Geolocation",tech:"Mendapatkan lokasi pengguna",color:"bg-yellow-50"},{title:"Canvas",tech:"Menggambar grafik dinamis",color:"bg-purple-50"},{title:"WebSockets",tech:"Komunikasi dua arah real-time",color:"bg-red-50"},{title:"IndexedDB",tech:"Database di sisi klien",color:"bg-blue-50"}].map((i,d)=>e.jsxs("div",{className:`${i.color} p-4 rounded-xl shadow-md hover:scale-105 transition-transform`,children:[e.jsx("h4",{className:"font-semibold text-blue-700 text-lg",children:i.title}),e.jsx("p",{className:"text-sm text-gray-700 mt-1",children:i.tech})]},d))})]})]})}),e.jsx(Q,{id:"prasyarat",title:"Prasyarat",icon:e.jsx(bn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Sebelum memulai praktikum ini, pastikan Kalian memiliki pengetahuan dasar tentang:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"HTML dan CSS dasar"}),e.jsx("li",{children:"Konsep logika pemrograman"}),e.jsx("li",{children:"Penggunaan browser modern (Chrome, Firefox, dll.)"})]})]})}),e.jsx(Q,{id:"alat-bahan",title:"Alat dan Bahan",icon:e.jsx(Da,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk mengikuti praktikum ini, Kalian memerlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser Web"}),": Chrome, Firefox, atau Edge"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Editor"}),": Visual Studio Code, Sublime Text, atau editor teks lainnya"]})]}),e.jsx(q,{type:"tip",title:"Rekomendasi",children:e.jsx("p",{children:"Kami menyarankan menggunakan Visual Studio Code dengan ekstensi JavaScript (ES6) code snippets dan LiveServer untuk pengalaman pengembangan yang lebih baik."})})]})}),e.jsx(Q,{id:"langkah-praktikum",title:"Langkah Praktikum",icon:e.jsx(ft,{className:"w-6 h-6 text-blue-500"}),children:e.jsx(yt,{steps:[{id:1,title:"Membuat File JavaScript Pertama",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Buat sebuah file HTML baru dengan nama"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"index.html"})," ","dan file JavaScript dengan nama"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"script.js"}),". Hubungkan file JavaScript dengan file HTML menggunakan tag script."]}),e.jsx(O,{title:"index.html",code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Dasar</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script> 
    <!-- Tailwind opsional karna kali ini kita tidak fokus ke styling -->
</head>
<body>
    <h1>Belajar JavaScript Dasar</h1>
    
    <div id="result"></div>
    
    <!-- Menghubungkan dengan file JavaScript -->
    <script src="script.js"><\/script>
</body>
</html>`,language:"html"}),e.jsx(q,{type:"info",children:e.jsxs("p",{children:["Tag"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"script"})," ","dapat diletakkan di dalam"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"head"})," ","atau sebelum penutup"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"body"}),". Menempatkannya sebelum penutup body memastikan bahwa semua elemen HTML telah dimuat sebelum JavaScript dijalankan."]})})]})},{id:2,title:"Mengenal Variabel dan Output",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Buka file"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"script.js"})," ","dan tulis kode berikut untuk mendeklarasikan variabel dan menampilkan output:"]}),e.jsx(O,{title:"script.js",code:`// Mendeklarasikan variabel dengan var, let, dan const
var nama = "Budi";
let usia = 20;
const TAHUN_LAHIR = 2004;

// Menampilkan output ke konsol
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Tahun Lahir: " + TAHUN_LAHIR);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = \`
  <p>Nama: <strong>\${nama}</strong></p>
  <p>Usia: <strong>\${usia}</strong></p>
  <p>Tahun Lahir: <strong>\${TAHUN_LAHIR}</strong></p>
\`;`,language:"javascript"}),e.jsx("p",{className:"text-gray-700",children:"Buka file HTML Kalian di browser dan buka konsol pengembang (F12 atau klik kanan → Inspect → Console) untuk melihat output log yang dihasilkan."}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:["Template literals (menggunakan backticks ``) memungkinkan Kalian untuk menyisipkan variabel langsung ke dalam string dengan menggunakan sintaks"," ",e.jsxs("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:["$","{","variabel","}"]}),"."]})})]})},{id:3,title:"Implementasi Struktur Kondisional",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Tambahkan kode berikut untuk mempelajari struktur kondisional dalam JavaScript:"}),e.jsx(O,{title:"script.js (tambahkan di bawah kode sebelumnya)",code:`// Struktur kondisional
let nilai = 85;
let grade = "";

// If-else if-else
if (nilai >= 90) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Nilai: " + nilai + ", Grade: " + grade);

// Menambahkan hasil ke HTML
document.getElementById("result").innerHTML += \`
  <hr>
  <p>Nilai: <strong>\${nilai}</strong></p>
  <p>Grade: <strong>\${grade}</strong></p>
\`;

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

document.getElementById("result").innerHTML += \`
  <p>Status: <strong>\${status}</strong></p>
\`;

// Switch case
let hari = new Date().getDay();
let namaHari = "";

switch (hari) {
    case 0:
        namaHari = "Minggu";
        break;
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    default:
        namaHari = "Hari tidak valid";
}

console.log("Hari ini adalah: " + namaHari);

document.getElementById("result").innerHTML += \`
  <p>Hari ini adalah: <strong>\${namaHari}</strong></p>
\`;`,language:"javascript"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"JavaScript menyediakan beberapa cara untuk membuat keputusan berdasarkan kondisi: if-else, ternary operator (?:), dan switch-case. Pilih yang paling sesuai dengan kebutuhan kode Kalian."})})]})},{id:4,title:"Menggunakan Loop",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Tambahkan kode berikut untuk mempelajari loop dalam JavaScript:"}),e.jsx(O,{title:"script.js (tambahkan di bawah kode sebelumnya)",code:`// For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

document.getElementById("result").innerHTML += \`
  <hr>
  <h3>Daftar Nilai Siswa:</h3>
  <ul id="daftar-nilai"></ul>
  <p id="rata-rata"></p>
\`;

for (let i = 0; i < nilaiSiswa.length; i++) {
    total += nilaiSiswa[i];
    document.getElementById("daftar-nilai").innerHTML += \`
      <li>Siswa \${i + 1}: \${nilaiSiswa[i]}</li>
    \`;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = \`
  Rata-rata nilai: <strong>\${rataRata.toFixed(2)}</strong>
\`;

// While loop
document.getElementById("result").innerHTML += \`
  <h3>Countdown:</h3>
  <div id="countdown"></div>
\`;

let hitungMundur = 5;
while (hitungMundur > 0) {
    document.getElementById("countdown").innerHTML += \`
      <span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">\${hitungMundur}</span>
    \`;
    hitungMundur--;
}

// For...of loop (ES6)
document.getElementById("result").innerHTML += \`
  <h3>Nilai dengan for...of:</h3>
  <div id="nilai-of" class="flex flex-wrap gap-2"></div>
\`;

for (let nilai of nilaiSiswa) {
    let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
    document.getElementById("nilai-of").innerHTML += \`
      <span class="inline-block bg-gray-100 px-3 py-1 rounded \${statusNilai}">\${nilai}</span>
    \`;
}`,language:"javascript"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"JavaScript menyediakan beberapa jenis loop: for, while, do-while, for...in, dan for...of. for...of (diperkenalkan di ES6) sangat berguna untuk meng-iterasi array dan objek iterable lainnya."})})]})},{id:5,title:"Fungsi dan Event Handler",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pada langkah ini, kita akan belajar membuat fungsi dan menangani event:"}),e.jsx(O,{title:"Tambahkan ke index.html",code:`<hr>
<div class="event-demo p-4 my-4 border border-gray-300 rounded">
    <h2 class="text-xl font-bold mb-3">Demo Event Handler</h2>
    <input type="text" id="nama-input" placeholder="Masukkan nama Kalian" class="border p-2 rounded w-full mb-3">
    <button id="sapa-button" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sapa Saya</button>
    <div id="sapa-output" class="mt-3"></div>
    
    <div class="mt-4">
        <h3 class="font-semibold mb-2">Kalkulator Sederhana</h3>
        <div class="flex gap-2 mb-3">
            <input type="number" id="angka1" placeholder="Angka 1" class="border p-2 rounded flex-1">
            <input type="number" id="angka2" placeholder="Angka 2" class="border p-2 rounded flex-1">
        </div>
        <div class="flex gap-2">
            <button id="btn-tambah" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">+</button>
            <button id="btn-kurang" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">-</button>
            <button id="btn-kali" class="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">×</button>
            <button id="btn-bagi" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">÷</button>
        </div>
        <div id="hasil-kalkulator" class="mt-3 font-semibold"></div>
    </div>
</div>`,language:"html"}),e.jsx(O,{title:"Tambahkan kode JavaScript berikut ke file script.js kalian",code:`function sapaNama(nama) {
    return \`Halo, \${nama}! Selamat belajar JavaScript!\`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = 
            \`<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>\`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = 
            \`<p class="text-green-500">\${pesan}</p>\`;
    }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} + \${angka2} = \${hasil}</p>\`;
    }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} - \${angka2} = \${hasil}</p>\`;
    }
});

document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} × \${angka2} = \${hasil}</p>\`;
    }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} ÷ \${angka2} = \${hasil}</p>\`;
    }
});`,language:"javascript"})]})},{id:6,title:"Array dan Objek",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pada langkah ini, kita akan belajar membuat fungsi dan menangani event:"}),e.jsx(O,{title:"Tambahkan ke script.js",code:`// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

document.getElementById("result").innerHTML += \`
  <hr>
  <h3>Manipulasi Array:</h3>
  <div id="array-demo"></div>
\`;

// Menampilkan array
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Array buah:</strong> \${buah.join(", ")}</p>
\`;

// Menambahkan item
buah.push("Durian");
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah push Durian:</strong> \${buah.join(", ")}</p>
\`;

// Menghapus item terakhir
const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah pop:</strong> \${buah.join(", ")} (item dihapus: \${itemDihapus})</p>
\`;

// Mengurutkan array
buah.sort();
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah sort:</strong> \${buah.join(", ")}</p>
\`;

// Array map
const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, index) => \`\${item} (Rp\${hargaBuah[index].toLocaleString()})\`);

document.getElementById("array-demo").innerHTML += \`
  <p><strong>Array dengan harga:</strong> \${daftarBuah.join(", ")}</p>
\`;

// Array filter
const buahMahal = buah.filter((item, index) => hargaBuah[index] > 10000);
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Buah dengan harga > 10.000:</strong> \${buahMahal.join(", ")}</p>
\`;

// Objek
const mahasiswa = {
    nama: "Budi Santoso",
    nim: "20210001",
    jurusan: "Teknik Informatika",
    nilai: {
        algoritma: 85,
        basis_data: 90,
        web: 88
    },
    hobi: ["Coding", "Membaca", "Futsal"],
    tampilkanInfo: function() {
        return \`\${this.nama} (\${this.nim}) - \${this.jurusan}\`;
    },
    hitungRataRata: function() {
        const nilaiArray = Object.values(this.nilai);
        const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
        return (total / nilaiArray.length).toFixed(2);
    }
};

document.getElementById("result").innerHTML += \`
  <hr>
  <h3>Manipulasi Objek:</h3>
  <div id="objek-demo"></div>
\`;

// Menampilkan informasi objek
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Info Mahasiswa:</strong> \${mahasiswa.tampilkanInfo()}</p>
  <p><strong>Rata-rata Nilai:</strong> \${mahasiswa.hitungRataRata()}</p>
  <p><strong>Hobi:</strong> \${mahasiswa.hobi.join(", ")}</p>
\`;

// Menambahkan properti baru ke objek
mahasiswa.email = "budi.santoso@example.com";
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Email:</strong> \${mahasiswa.email}</p>
\`;

// Mengubah nilai properti
mahasiswa.nilai.web = 92;
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Nilai Web setelah diubah:</strong> \${mahasiswa.nilai.web}</p>
\`;

// Menghapus properti
delete mahasiswa.hobi;
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Hobi setelah dihapus:</strong> \${mahasiswa.hobi ? mahasiswa.hobi.join(", ") : "Tidak ada data hobi"}</p>
\`;`,language:"html"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"Array dan objek adalah struktur data penting dalam JavaScript. Array digunakan untuk menyimpan koleksi data, sedangkan objek digunakan untuk menyimpan data dalam bentuk pasangan key-value. JavaScript menyediakan banyak metode bawaan untuk memanipulasi array dan objek."})})]})},{id:7,title:"Manipulasi DOM",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pelajari cara memanipulasi DOM (Document Object Model) dengan JavaScript:"}),e.jsx(O,{title:"Tambahkan ke index.html (sebelum tag script)",code:`<hr>
<div class="dom-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Manipulasi DOM</h2>
  <div id="dom-output" class="mb-3"></div>
  <button id="btn-tambah-item" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tambah Item</button>
  <button id="btn-hapus-item" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Hapus Item</button>
  <button id="btn-ubah-warna" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ubah Warna</button>
</div>`,language:"html"}),e.jsx(O,{title:"script.js (tambahkan di bawah kode sebelumnya)",code:`// Manipulasi DOM
const domOutput = document.getElementById("dom-output");
let itemCount = 0;

// Fungsi untuk menambahkan item
document.getElementById("btn-tambah-item").addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("div");
  newItem.className = "p-2 mb-2 bg-gray-100 rounded";
  newItem.innerText = \`Item \${itemCount}\`;
  domOutput.appendChild(newItem);
});

// Fungsi untuk menghapus item
document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild) {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
});

// Fungsi untuk mengubah warna background
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  domOutput.className = \`p-4 mb-3 \${randomColor} rounded\`;
});`,language:"javascript"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"DOM adalah representasi struktur HTML dalam bentuk pohon objek. JavaScript dapat memanipulasi DOM untuk mengubah konten, struktur, dan gaya halaman web secara dinamis."})})]})},{id:8,title:"Fetch API dan Async/Await",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pelajari cara menggunakan Fetch API dan async/await untuk mengambil data dari server:"}),e.jsx(O,{title:"Tambahkan ke index.html (sebelum tag script)",code:`<hr>
<div class="api-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Fetch API</h2>
  <button id="btn-fetch" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ambil Data</button>
  <div id="api-output" class="mt-3"></div>
</div>`,language:"html"}),e.jsx(O,{title:"script.js (tambahkan di bawah kode sebelumnya)",code:`// Fetch API dengan async/await
document.getElementById("btn-fetch").addEventListener("click", async function() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const apiOutput = document.getElementById("api-output");
    apiOutput.innerHTML = "<h3 class='font-bold mb-2'>Daftar Post:</h3>";
    
    data.slice(0, 5).forEach(post => {
      apiOutput.innerHTML += \`
        <div class="p-3 mb-2 bg-gray-100 rounded">
          <h4 class="font-semibold">\${post.title}</h4>
          <p class="text-sm">\${post.body}</p>
        </div>
      \`;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("api-output").innerHTML = \`
      <div class="p-3 bg-red-100 text-red-800 rounded">
        Gagal mengambil data: \${error.message}
      </div>
    \`;
  }
});`,language:"javascript"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"Fetch API adalah cara modern untuk melakukan HTTP request di JavaScript. Dengan async/await, kode menjadi lebih mudah dibaca dan dikelola dibandingkan dengan callback atau promise chaining."})})]})}]})}),e.jsx(Q,{id:"hasil-praktikum",title:"Hasil Praktikum",icon:e.jsx(Fn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya telah:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Membuat file HTML dan JavaScript yang terhubung"}),e.jsx("li",{children:"Menggunakan variabel, tipe data, dan operator"}),e.jsx("li",{children:"Mengimplementasikan struktur kondisional dan loop"}),e.jsx("li",{children:"Membuat dan menggunakan fungsi"}),e.jsx("li",{children:"Menangani event dan memanipulasi DOM"}),e.jsx("li",{children:"Menggunakan array dan objek"}),e.jsx("li",{children:"Mengambil data dari API menggunakan Fetch API"})]})]})}),e.jsx(Q,{id:"format-pengumpulan",title:"Format Pengumpulan",icon:e.jsx(jn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Direktori GitHub:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat repository dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_[NIM]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_119140001"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Struktur Folder:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat folder per pertemuan dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"[NAMA]_[NIM]_pertemuan[X]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"johndoe_119140001_pertemuan3"})]}),e.jsx("li",{children:"Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Deadline Pengumpulan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Deadline: ",e.jsx("span",{className:"font-medium",children:"Minggu, 23 Maret 2025, pukul 23:59 WIB"})]}),e.jsx("li",{children:"Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari"})]})]})]})}),e.jsx(Q,{id:"pertanyaan-dan-tugas",title:"Pertanyaan dan Tugas",icon:e.jsx(ao,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk menguji pemahaman Kalian, kerjakan tugas yang berikut:"}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Tugas:"}),e.jsxs("ol",{className:"pl-6 space-y-2 text-gray-700 list-decimal",children:[e.jsxs("li",{children:["Buatlah aplikasi to-do list sederhana. Style tampilan tidak menjadi penilaian, fokus utama pada fungsionalitas JavaScript, dengan kriteria:",e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsx("li",{children:"Menambahkan item baru"}),e.jsx("li",{children:"Menandai item sebagai selesai"}),e.jsx("li",{children:"Menghapus item"}),e.jsx("li",{children:"Menyimpan data ke localStorage"})]}),e.jsxs("p",{className:"mt-2 text-gray-600 text-sm",children:[e.jsx("strong",{children:"Bobot:"})," 40% dari nilai tugas"]})]}),e.jsxs("li",{children:["Modifikasi kalkulator pada langkah 5 untuk mendukung operasi matematika tambahan seperti pangkat, akar kuadrat, dan modulus.",e.jsxs("p",{className:"mt-2 text-gray-600 text-sm",children:[e.jsx("strong",{children:"Bobot:"})," 30% dari nilai tugas"]})]}),e.jsxs("li",{children:["Buatlah sebuah fungsi untuk memvalidasi form input dengan kriteria:",e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsx("li",{children:"Nama harus lebih dari 3 karakter"}),e.jsx("li",{children:"Email harus valid"}),e.jsx("li",{children:"Password harus minimal 8 karakter"})]}),e.jsxs("p",{className:"mt-2 text-gray-600 text-sm",children:[e.jsx("strong",{children:"Bobot:"})," 30% dari nilai tugas"]})]})]})]})}),e.jsx(On,{title:"Submit Tugas Praktikum 1",href:"https://forms.gle/qM3Xj8HVqFp7mQKX8"})]})})]})}const Ea=S.forwardRef(({className:i,...d},o)=>e.jsx("div",{ref:o,className:zn("text-card-foreground",i),...d}));Ea.displayName="Card";const qx=S.forwardRef(({className:i,...d},o)=>e.jsx("div",{ref:o,className:zn("flex flex-col space-y-1.5 p-6",i),...d}));qx.displayName="CardHeader";const Gx=S.forwardRef(({className:i,...d},o)=>e.jsx("div",{ref:o,className:zn("font-semibold leading-none tracking-tight",i),...d}));Gx.displayName="CardTitle";const Qx=S.forwardRef(({className:i,...d},o)=>e.jsx("div",{ref:o,className:zn("text-sm text-muted-foreground",i),...d}));Qx.displayName="CardDescription";const Aa=S.forwardRef(({className:i,...d},o)=>e.jsx("div",{ref:o,className:zn("p-6 pt-0",i),...d}));Aa.displayName="CardContent";const Xx=S.forwardRef(({className:i,...d},o)=>e.jsx("div",{ref:o,className:zn("flex items-center p-6 pt-0",i),...d}));Xx.displayName="CardFooter";const Yx="/assets/home-E5N2wEUs.png",Zx=()=>e.jsxs(Hn,{children:[e.jsx(Q,{isBordered:!1,children:e.jsxs("div",{className:"mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-screen container lg:pb-28",children:[e.jsxs("div",{className:"md:w-1/2 md:pr-12",children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:["Belajar Programming ",e.jsx("span",{className:"text-blue-600",children:"Lebih Mudah"})," dan Terstruktur"]}),e.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Platform interaktif untuk mahasiswa Teknik Informatika ITERA. Kembangkan skill programming dengan praktikum yang terstruktur dan asistensi online."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs(Ia,{size:"lg",className:"bg-blue-600 hover:bg-blue-700",children:["Mulai Belajar ",e.jsx(ur,{className:"ml-2 h-4 w-4"})]}),e.jsx(Ia,{size:"lg",variant:"outline",children:"Lihat Demo"})]})]}),e.jsx("div",{className:"md:w-1/2 mt-12 md:mt-0 flex justify-center",children:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("div",{className:"absolute -z-10 -top-8 -left-8 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70"}),e.jsx("div",{className:"absolute -z-10 -bottom-8 -right-8 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-70"}),e.jsx("img",{src:Yx,alt:"Platform Praktikum",className:"w-full object-cover"})]})})]})}),e.jsx(Q,{isBordered:!1,children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Fitur Unggulan"}),e.jsx("p",{className:"max-w-2xl mx-auto text-gray-600",children:"Platform praktikum interaktif dengan berbagai fitur untuk memudahkan proses belajar programming"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[e.jsx(Ea,{className:"border border-gray-100 shadow-sm hover:shadow-md transition-shadow",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"bg-blue-50 p-3 rounded-lg inline-block mb-4",children:e.jsx(Sa,{className:"h-6 w-6 text-blue-600"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Modul Interaktif"}),e.jsx("p",{className:"text-gray-600",children:"Modul praktikum yang interaktif dengan panduan langkah demi langkah dan contoh kode."})]})}),e.jsx(Ea,{className:"border border-gray-100 shadow-sm hover:shadow-md transition-shadow",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"bg-blue-50 p-3 rounded-lg inline-block mb-4",children:e.jsx(Qg,{className:"h-6 w-6 text-blue-600"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"IDE Terintegrasi"}),e.jsx("p",{className:"text-gray-600",children:"Coding langsung di browser dengan IDE terintegrasi yang mendukung berbagai bahasa pemrograman."})]})}),e.jsx(Ea,{className:"border border-gray-100 shadow-sm hover:shadow-md transition-shadow",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"bg-green-50 p-3 rounded-lg inline-block mb-4",children:e.jsx(zg,{className:"h-6 w-6 text-green-600"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Auto-Grading"}),e.jsx("p",{className:"text-gray-600",children:"Sistem penilaian otomatis yang memberikan feedback instan untuk setiap tugas yang dikerjakan."})]})}),e.jsx(Ea,{className:"border border-gray-100 shadow-sm hover:shadow-md transition-shadow",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"bg-purple-50 p-3 rounded-lg inline-block mb-4",children:e.jsx(Ll,{className:"h-6 w-6 text-purple-600"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Asistensi Online"}),e.jsx("p",{className:"text-gray-600",children:"Bimbingan dari asisten praktikum secara online melalui forum diskusi dan chat."})]})}),e.jsx(Ea,{className:"border border-gray-100 shadow-sm hover:shadow-md transition-shadow",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"bg-orange-50 p-3 rounded-lg inline-block mb-4",children:e.jsx(Lg,{className:"h-6 w-6 text-orange-600"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Jadwal Terintegrasi"}),e.jsx("p",{className:"text-gray-600",children:"Pengingat jadwal praktikum dan deadline tugas yang tersinkronisasi dengan kalender pribadi."})]})}),e.jsx(Ea,{className:"border border-gray-100 shadow-sm hover:shadow-md transition-shadow",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"bg-red-50 p-3 rounded-lg inline-block mb-4",children:e.jsx(Ig,{className:"h-6 w-6 text-red-600"})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Bimbingan AI"}),e.jsx("p",{className:"text-gray-600",children:"Dukungan dari AI untuk membantu menyelesaikan masalah dan menjawab pertanyaan."})]})})]})]})}),e.jsx(Q,{isBordered:!1,children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Mata Kuliah Praktikum"}),e.jsx("p",{className:"text-gray-600 max-w-2xl",children:"Jelajahi berbagai mata kuliah praktikum yang tersedia untuk program studi Informatika, Sistem Informasi, dan jurusan terkait."})]}),e.jsx("div",{className:"mt-6 md:mt-0",children:e.jsxs(Ia,{variant:"outline",className:"flex items-center",children:["Lihat Semua ",e.jsx(ur,{className:"ml-2 h-4 w-4"})]})})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Pemrograman Web",level:"Semester 4",students:120,image:"/api/placeholder/400/240",color:"bg-blue-600"},{title:"Struktur Data",level:"Semester 2",students:175,image:"/api/placeholder/400/240",color:"bg-green-600"},{title:"Basis Data",level:"Semester 3",students:150,image:"/api/placeholder/400/240",color:"bg-purple-600"}].map((i,d)=>e.jsxs("div",{className:"group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all",children:[e.jsxs("div",{className:"relative h-48 overflow-hidden",children:[e.jsx("div",{className:`absolute inset-0 ${i.color} opacity-80`}),e.jsx("img",{src:"https://placehold.co/600x400",alt:i.title,className:"absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("h3",{className:"text-2xl font-bold text-white text-center px-4",children:i.title})})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-800",children:i.level}),e.jsxs("span",{className:"text-sm text-gray-600 flex items-center",children:[e.jsx(Ll,{className:"h-4 w-4 mr-1"}),i.students," Mahasiswa"]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsxs("div",{className:"flex items-center space-x-1 text-sm text-gray-600",children:[e.jsx(Dg,{className:"h-4 w-4"}),e.jsx("span",{children:"12 Pertemuan"})]}),e.jsx(Ia,{variant:"ghost",size:"sm",className:"text-blue-600 hover:text-blue-800",children:"Lihat Detail"})]})]})]},d))})]})}),e.jsx(Q,{isBordered:!1,children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Apa Kata Mereka?"}),e.jsx("p",{className:"max-w-2xl mx-auto text-gray-600",children:"Mahasiswa yang telah menggunakan platform praktikum kami"})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{name:"Dian Pratama",role:"Mahasiswa Informatika",image:"/api/placeholder/100/100",text:"Platform ini sangat membantu saya memahami konsep pemrograman web. Modul interaktif dan asistensi online membuat praktikum jadi lebih efektif."},{name:"Raka Aditya",role:"Mahasiswa Sistem Informasi",image:"/api/placeholder/100/100",text:"Saya suka fitur IDE terintegrasi yang memungkinkan saya coding langsung di browser. Auto-grading juga memberikan feedback yang cepat untuk tugas yang saya kerjakan."},{name:"Putri Handayani",role:"Mahasiswa Teknik Komputer",image:"/api/placeholder/100/100",text:"Bimbingan AI sangat membantu saat saya stuck dengan kode. Platform ini membuat saya lebih mandiri dalam menyelesaikan praktikum."}].map((i,d)=>e.jsx(Ea,{className:"border border-gray-100",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"mr-4",children:e.jsx("img",{src:"https://placehold.co/600x400",alt:i.name,className:"h-12 w-12 rounded-full object-cover"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900",children:i.name}),e.jsx("p",{className:"text-sm text-gray-600",children:i.role})]})]}),e.jsxs("p",{className:"text-gray-600 italic",children:['"',i.text,'"']})]})},d))})]})}),e.jsx(Q,{isBordered:!1,children:e.jsx("div",{className:"container mx-auto max-w-6xl",children:e.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:[{number:"2,500+",label:"Mahasiswa Aktif",icon:e.jsx(Ll,{className:"h-6 w-6 text-blue-600"})},{number:"15+",label:"Mata Kuliah",icon:e.jsx(Sa,{className:"h-6 w-6 text-blue-600"})},{number:"50+",label:"Asisten Praktikum",icon:e.jsx(Fn,{className:"h-6 w-6 text-blue-600"})},{number:"24/7",label:"Dukungan Online",icon:e.jsx(bn,{className:"h-6 w-6 text-blue-600"})}].map((i,d)=>e.jsx(Ea,{className:"text-center border border-gray-100",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("div",{className:"flex justify-center mb-4",children:i.icon}),e.jsx("h3",{className:"text-3xl font-bold text-gray-900 mb-1",children:i.number}),e.jsx("p",{className:"text-gray-600",children:i.label})]})},d))})})}),e.jsx(Q,{isBordered:!1,children:e.jsxs("div",{className:"container mx-auto max-w-4xl",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Pertanyaan Umum"}),e.jsx("p",{className:"max-w-2xl mx-auto text-gray-600",children:"Jawaban untuk beberapa pertanyaan yang sering diajukan"})]}),e.jsx("div",{className:"space-y-6",children:[{question:"Bagaimana cara mendaftar di PraktikumITERA?",answer:"Untuk mendaftar, Anda dapat mengklik tombol 'Daftar' di halaman beranda dan mengisi formulir pendaftaran dengan data mahasiswa ITERA Anda. Setelah verifikasi email, Anda dapat langsung mengakses platform."},{question:"Apakah semua mata kuliah praktikum tersedia di platform ini?",answer:"Saat ini kami menyediakan platform untuk mata kuliah praktikum di program studi Informatika, Sistem Informasi, dan beberapa jurusan terkait. Kami terus menambahkan mata kuliah baru setiap semesternya."},{question:"Bagaimana sistem penilaian praktikum bekerja?",answer:"Sistem penilaian menggunakan auto-grading untuk tugas pemrograman. Kode yang Anda kerjakan akan dievaluasi secara otomatis berdasarkan test case yang telah ditentukan. Asisten praktikum juga dapat memberikan feedback tambahan untuk perbaikan."},{question:"Apakah saya bisa mengakses platform dari perangkat mobile?",answer:"Ya, PraktikumITERA didesain dengan responsif sehingga dapat diakses dari berbagai perangkat termasuk smartphone dan tablet. Namun, untuk pengalaman coding yang optimal, kami menyarankan menggunakan laptop atau komputer."}].map((i,d)=>e.jsx(Ea,{className:"border border-gray-100",children:e.jsxs(Aa,{className:"pt-6",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-2",children:i.question}),e.jsx("p",{className:"text-gray-600",children:i.answer})]})},d))})]})})]}),Ol=({title:i,description:d,code:o})=>e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:i}),e.jsx("p",{className:"text-gray-700 mb-4",children:d}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto",children:e.jsx("code",{children:o})})]}),ef=({title:i,headers:d,rows:o})=>e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:i}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-gray-100",children:d.map((m,u)=>e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:m},u))})}),e.jsx("tbody",{children:o.map((m,u)=>e.jsx("tr",{className:u%2===0?"bg-white":"bg-gray-50",children:m.map((p,g)=>e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:p},g))},u))})]})})]}),Ms=({title:i,icon:d,description:o,pros:m,cons:u,renderingImpact:p})=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[d,e.jsx("h3",{className:"text-xl font-semibold ml-3",children:i})]}),e.jsx("p",{className:"text-gray-700 mb-4",children:o}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-green-600 mb-2",children:"Kelebihan:"}),e.jsx("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:m.map((g,f)=>e.jsx("li",{children:g},f))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-600 mb-2",children:"Kekurangan:"}),e.jsx("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:u.map((g,f)=>e.jsx("li",{children:g},f))})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Dampak pada Rendering:"}),e.jsx("p",{className:"text-gray-700",children:p})]})]}),af=()=>e.jsx("div",{className:"min-h-screen p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("header",{className:"mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent",children:"React Rendering & State Management"}),e.jsxs("div",{className:"flex items-center justify-center text-xl text-gray-700 mb-6",children:[e.jsx(Vl,{size:28,className:"text-blue-500 mr-3"}),e.jsx("span",{children:"Memahami bagaimana React merender komponen dan mengelola state"})]})]}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Da,{size:28,className:"text-blue-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Konsep Dasar React Rendering"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"React menggunakan mekanisme rendering yang efisien untuk memperbarui User Interface (UI). Memahami dasar rendering React sangat penting untuk membangun aplikasi yang performant."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Proses Rendering React"}),e.jsxs("ol",{className:"list-decimal list-inside text-gray-700 space-y-3",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Trigger:"})," Rendering dimulai ketika ada perubahan state/props"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Render Phase:"})," React memanggil fungsi komponen dan membandingkan hasil"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Reconciliation:"})," React membandingkan Virtual DOM lama dan baru"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Commit Phase:"})," Perubahan diterapkan ke DOM browser"]})]})]}),e.jsxs("div",{className:"bg-indigo-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Kapan Komponen Re-render?"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:["Ketika state komponen berubah (",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"useState"}),", ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"useReducer"}),")"]}),e.jsx("li",{children:"Ketika props yang diterima berubah"}),e.jsx("li",{children:"Ketika parent component melakukan re-render"}),e.jsxs("li",{children:["Ketika context yang digunakan berubah (",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"useContext"}),")"]}),e.jsxs("li",{children:["Setelah memanggil ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"forceUpdate()"})," (dalam class components)"]})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Virtual DOM & Reconciliation"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"React menggunakan Virtual DOM untuk meningkatkan efisiensi. Alih-alih memanipulasi DOM browser secara langsung (yang mahal secara komputasi), React:"}),e.jsxs("ol",{className:"list-decimal list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Memelihara representasi ringan dari DOM di memori (Virtual DOM)"}),e.jsx("li",{children:"Saat ada perubahan, React membuat Virtual DOM baru"}),e.jsx("li",{children:"React membandingkan (diff) Virtual DOM baru dan lama"}),e.jsx("li",{children:"Hanya perubahan yang diperlukan yang diterapkan ke DOM asli"}),e.jsx("li",{children:'Algoritma ini disebut "Reconciliation" atau "Diffing Algorithm"'})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Ul,{size:28,className:"text-blue-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Perbandingan State Management"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Berbagai metode pengelolaan state memiliki dampak yang berbeda terhadap rendering React. Mari kita bandingkan:"}),e.jsx(Ms,{title:"useState",icon:e.jsx(Ln,{size:24,className:"text-blue-500"}),description:"Hook dasar untuk mengelola state lokal dalam komponen fungsi.",pros:["Sederhana dan mudah dipahami","Ideal untuk state lokal yang sederhana","Terintegrasi langsung dengan React"],cons:["Tidak cocok untuk state yang kompleks","Bisa menyebabkan prop drilling","Re-render terjadi pada seluruh komponen"],renderingImpact:"Saat setState dipanggil, komponen (dan semua child-nya) akan melakukan re-render. Jika tidak menggunakan React.memo, useState dapat menyebabkan re-render yang tidak perlu pada komponen anak."}),e.jsx(Ms,{title:"useReducer",icon:e.jsx(Vl,{size:24,className:"text-purple-500"}),description:"Hook yang digunakan untuk mengelola state kompleks dengan pola reducer (mirip Redux).",pros:["Lebih baik untuk state yang kompleks","Logic state terpusat dalam reducer","Memudahkan testing dan debugging"],cons:["Boilerplate code lebih banyak","Masih menyebabkan prop drilling","Kurva belajar lebih tinggi"],renderingImpact:"Seperti useState, ketika dispatch dipanggil, komponen dan semua turunannya akan re-render. Perbedaannya adalah pada pengelolaan logika state yang lebih terstruktur."}),e.jsx(Ms,{title:"useContext",icon:e.jsx(Da,{size:24,className:"text-green-500"}),description:"Hook untuk mengakses data context tanpa prop drilling melalui komponen perantara.",pros:["Menghindari prop drilling","Menyediakan state global/semi-global","Ideal untuk tema, preferensi, data pengguna"],cons:["Re-render berlebihan jika tidak dioptimalkan","Tidak direkomendasikan untuk state yang sering berubah","Bisa membuat testing menjadi lebih kompleks"],renderingImpact:"Semua komponen yang mengonsumsi context akan re-render ketika nilai context berubah. Jika context berisi banyak data tetapi komponen hanya membutuhkan sebagian, ini bisa menyebabkan re-render yang tidak perlu."}),e.jsx(Ms,{title:"Redux",icon:e.jsx(Ul,{size:24,className:"text-red-500"}),description:"Library state management untuk aplikasi berskala besar dengan store terpusat.",pros:["State global terpusat","Developer tools yang powerful","Middleware untuk side effects","Time-travel debugging"],cons:["Boilerplate code yang banyak","Kurva belajar yang curam","Overhead untuk aplikasi kecil","Setup awal kompleks"],renderingImpact:"Dengan connect atau useSelector yang tepat, Redux menawarkan rendering yang optimal karena hanya komponen yang berlangganan data tertentu yang akan re-render. Redux Toolkit dan hooks modern seperti useSelector membuat optimasi lebih mudah."})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(ur,{size:28,className:"text-blue-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-6",children:"Perbandingan Detail Dampak Rendering"}),e.jsx(ef,{title:"Perbandingan State Management & Rendering",headers:["State Management","Cakupan Re-render","Optimasi","Kompleksitas","Use Case Ideal"],rows:[["useState","Komponen dan semua turunannya","React.memo, useMemo, useCallback","Rendah","State lokal sederhana, form inputs, toggles"],["useReducer","Komponen dan semua turunannya","React.memo, useMemo, useCallback","Sedang","State kompleks dengan beberapa aksi terkait"],["useContext","Semua konsumen context","Context splitting, memoization","Sedang","Data global seperti tema, autentikasi"],["Redux","Hanya komponen yang berlangganan","Selector yang tepat, memoized selectors","Tinggi","Aplikasi besar dengan state kompleks"]]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Dampak Pattern Re-render pada Performa"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Setiap pendekatan state management memiliki dampak berbeda pada frekuensi dan cakupan re-render. Berikut adalah perbandingan lebih mendalam:"}),e.jsx(Ol,{title:"useState - Re-render Pattern",description:"Ketika state berubah, komponen dan semua children akan re-render",code:`// Parent.jsx
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  
  console.log('Parent rendering'); // Akan dijalankan saat re-render
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
      <Child /> {/* Child akan re-render meskipun tidak menggunakan count */}
    </div>
  );
};

// Child.jsx
const Child = () => {
  console.log('Child rendering'); // Juga dijalankan saat Parent re-render
  return <div>Child Component</div>;
};

// Solusi: Gunakan React.memo untuk mencegah re-render yang tidak perlu
const MemoizedChild = React.memo(Child);`}),e.jsx(Ol,{title:"useContext - Re-render Pattern",description:"Semua komponen yang menggunakan useContext akan re-render saat context berubah",code:`// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'John' });
  
  // Kedua nilai dalam value akan memicu re-render saat berubah
  return (
    <ThemeContext.Provider value={{ theme, setTheme, user, setUser }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemedButton.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
  // Komponen ini akan re-render jika theme ATAU user berubah
  // meskipun hanya menggunakan theme
  const { theme } = useContext(ThemeContext);
  
  console.log('ThemedButton rendering');
  
  return <button className={theme}>Themed Button</button>;
};

// Solusi: Pisahkan context untuk mengurangi re-render yang tidak perlu
// Atau gunakan useMemo untuk memisahkan value object`}),e.jsx(Ol,{title:"Redux - Re-render Pattern",description:"Hanya komponen yang menggunakan data yang berubah yang akan re-render",code:`// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, user: { name: 'John' } },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

// Counter.js dengan useSelector optimal
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const Counter = () => {
  // Hanya re-render saat counter.value berubah
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  console.log('Counter component rendering');
  
  return (
    <button onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  );
};

// UserProfile.js - tidak re-render saat counter berubah
const UserProfile = () => {
  // Hanya re-render saat user berubah
  const user = useSelector(state => state.counter.user);
  
  console.log('UserProfile component rendering');
  
  return <div>User: {user.name}</div>;
};`})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(mr,{size:28,className:"text-blue-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Praktik Terbaik Optimasi Rendering"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Memoization"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"React.memo"})," - Mencegah re-render komponen jika props tidak berubah"]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"useMemo"})," - Menyimpan hasil kalkulasi yang mahal"]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"useCallback"})," - Menyimpan referensi fungsi yang stabil"]})]}),e.jsx("div",{className:"mt-4 p-4 bg-white rounded-lg",children:e.jsx("pre",{className:"text-sm",children:e.jsx("code",{children:`// Menggunakan React.memo
const MemoizedComponent = React.memo(ExpensiveComponent);

// Menggunakan useMemo
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b), 
  [a, b]
);

// Menggunakan useCallback
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b]
);`})})})]}),e.jsxs("div",{className:"bg-indigo-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Struktur Komponen"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Pecah komponen besar menjadi komponen yang lebih kecil"}),e.jsx("li",{children:"Turunkan state ke level terendah yang diperlukan"}),e.jsx("li",{children:"Gunakan children props untuk menghindari re-render"}),e.jsx("li",{children:"Hindari anonymous function dalam JSX"})]}),e.jsx("div",{className:"mt-4 p-4 bg-white rounded-lg",children:e.jsx("pre",{className:"text-sm",children:e.jsx("code",{children:`// Menggunakan children props
function Wrapper({ children }) {
  const [state, setState] = useState(false);
  
  return (
    <div onClick={() => setState(!state)}>
      {state ? 'On' : 'Off'}
      {children} 
      {/* Tidak re-render saat state berubah */}
    </div>
  );
}

// Penggunaan:
<Wrapper>
  <ExpensiveComponent />
</Wrapper>`})})})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Bagaimana Memilih State Management?"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pilihan state management harus didasarkan pada kebutuhan spesifik aplikasi Anda:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Aplikasi kecil-sedang:"})," useState + useReducer + useContext biasanya cukup"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Aplikasi besar dengan banyak state terkait:"})," Redux atau alternatif seperti Zustand"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Untuk data server:"})," Pertimbangkan React Query, SWR, atau RTK Query"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Kombinasikan pendekatan:"})," State lokal dengan useState, state global dengan Redux/Context"]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Tools Debugging Rendering"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"React DevTools Profiler"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"Visualisasi flamegraph"}),e.jsx("li",{children:"Rekam dan analisis rendering"}),e.jsx("li",{children:"Identifikasi re-render yang tidak perlu"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"why-did-you-render"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"Library untuk debugging re-render"}),e.jsx("li",{children:"Notifikasi ketika komponen re-render"}),e.jsx("li",{children:"Menunjukkan alasan specific re-render"})]})]})]}),e.jsx("div",{className:"mt-4 p-4 bg-white rounded-lg",children:e.jsx("pre",{className:"text-sm overflow-x-auto",children:e.jsx("code",{children:`// Setup why-did-you-render
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

// Menandai komponen untuk di-track
function MyComponent() {
  // ...
}
MyComponent.whyDidYouRender = true;`})})})]})]})]})})]})});function nf(){return e.jsxs(Hn,{title:"Ujian Tengah Semester tentang Web Development Menggunakan React JS",subtitle:"Implementasi komponen, hooks, dan state management dalam aplikasi React",children:[e.jsx(Q,{id:"komponen-penilaian",title:"Komponen Penilaian",isBordered:!1,icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Berikut adalah komponen penilaian untuk UTS ini:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Implementasi Komponen (20%)"}),": Struktur, penggunaan props, dan komposisi komponen yang tepat"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Penggunaan Hooks (20%)"}),": Implementasi React Hooks yang sesuai dengan kebutuhan aplikasi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"State Management (15%)"}),": Pengelolaan state yang efisien dan sesuai dengan kompleksitas aplikasi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Routing (15%)"}),": Implementasi React Router yang benar untuk navigasi antar halaman"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data Fetching (15%)"}),": Pengambilan dan pengelolaan data dari API eksternal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Desain UI dan UX (10%)"}),": Tampilan yang responsif dan user-friendly"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kode yang Bersih dan Terorganisir (5%)"}),": Struktur folder, penamaan, dan format kode"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BONUS (10%)"}),": Berhasil melakukan deploy di vercel."]})]})]})}),e.jsx(Q,{id:"deskripsi-tugas",title:"Deskripsi Tugas",isBordered:!1,icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pada UTS ini, Anda akan mengembangkan aplikasi React yang menerapkan berbagai konsep fundamental React seperti komponen, props, state, lifecycle, hooks, routing, dan state management. Fokus utama adalah implementasi fetching data dari API di sisi klien."}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"Fokus Implementasi"}),e.jsx("p",{className:"text-gray-700",children:"Penilaian utama akan difokuskan pada kemampuan aplikasi Anda untuk:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fetching Data:"})," Mengambil data dari API eksternal menggunakan method HTTP GET"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"State Management:"})," Mengelola state aplikasi dengan baik (Context API atau Redux)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Routing:"})," Implementasi navigasi antar halaman dengan React Router"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Component Organization:"})," Struktur komponen yang rapi dan dapat digunakan kembali"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UI/UX:"})," Tampilan yang responsif dan user-friendly"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error Handling:"})," Penanganan error saat fetching data"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loading States:"})," Menampilkan indikator loading saat fetching data"]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-800 mb-2",children:"Pilihan API"}),e.jsx("p",{className:"text-gray-700",children:"Anda bebas memilih untuk membuat salah satu dari API berikut:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fake Store API:"})," ",e.jsx("code",{children:"https://fakestoreapi.com/"})," - Ideal untuk aplikasi e-commerce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON Placeholder:"})," ",e.jsx("code",{children:"https://jsonplaceholder.typicode.com/todos"})," - Cocok untuk task management"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DummyJSON:"})," ",e.jsx("code",{children:"https://dummyjson.com/"})," - Menyediakan data untuk berbagai jenis aplikasi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MockAPI.io:"})," ",e.jsx("code",{children:"https://mockapi.io/"})," - Untuk membuat API kustom"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON Server:"})," Untuk membuat API lokal dengan file JSON"]})]}),e.jsx("p",{className:"text-gray-700 mt-2",children:"Semua API di atas mendukung method HTTP GET untuk mengambil data yang diperlukan dalam tugas ini."})]})]})})}),e.jsx(Q,{id:"detail-penugasan",title:"Detail Penugasan",isBordered:!1,icon:e.jsx(Fn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"Implementasi Komponen yang Diharapkan"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-800 mb-2",children:"1. Komponen, Props, dan State"}),e.jsxs("div",{className:"pl-4 border-l-2 border-blue-500 mb-4",children:[e.jsx("p",{className:"text-gray-700 mb-2",children:"Implementasikan berbagai jenis komponen dengan manajemen props dan state yang sesuai:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsx("li",{children:"Minimal 5 komponen fungsional yang berbeda"}),e.jsx("li",{children:"Penggunaan props untuk komunikasi antar komponen"}),e.jsx("li",{children:"Implementasi prop validation dengan PropTypes"}),e.jsx("li",{children:"Pembuatan komponen yang memiliki state lokal"})]})]}),e.jsx("p",{className:"text-gray-700 mb-3 pl-4",children:"Komponen fungsional adalah standar modern dalam pengembangan React dan memungkinkan penggunaan hooks. Penggunaan props memungkinkan aliran data yang jelas antar komponen, sedangkan PropTypes membantu dokumentasi dan validasi yang lebih baik."}),e.jsx(O,{title:"Contoh Komponen dengan Props dan PropTypes",code:`import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold">\${product.price}</span>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;`,language:"jsx"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-800 mb-2",children:"2. React Lifecycle dan Hooks"}),e.jsxs("div",{className:"pl-4 border-l-2 border-green-500 mb-4",children:[e.jsx("p",{className:"text-gray-700 mb-2",children:"Implementasikan berbagai hooks React untuk mengelola lifecycle dan state:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsx("li",{children:"useState untuk state management dalam komponen"}),e.jsx("li",{children:"useEffect untuk side effects dan simulasi lifecycle methods"}),e.jsx("li",{children:"useRef untuk referensi DOM dan nilai yang persisten"}),e.jsx("li",{children:"useCallback untuk memoize functions"}),e.jsx("li",{children:"useMemo untuk memoize nilai-nilai yang membutuhkan komputasi tinggi"}),e.jsx("li",{children:"Minimal 1 custom hook yang Anda buat sendiri"})]})]}),e.jsx("p",{className:"text-gray-700 mb-3 pl-4",children:"Hooks menyederhanakan logika React dan memungkinkan penggunaan state dan fitur React lainnya tanpa menulis kelas. Hooks juga meningkatkan reusabilitas kode dan membuatnya lebih mudah ditest."}),e.jsx(O,{title:"Contoh Custom Hook untuk Data Fetching",code:`import { useState, useEffect } from 'react';

// Custom hook untuk fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url]); // Re-run effect if URL changes

  return { data, loading, error };
}

export default useFetch;`,language:"jsx"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-800 mb-2",children:"3. Pengambilan Data (Data Fetching)"}),e.jsxs("div",{className:"pl-4 border-l-2 border-purple-500 mb-4",children:[e.jsx("p",{className:"text-gray-700 mb-2",children:"Implementasikan pengambilan data dari API eksternal:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsx("li",{children:"Gunakan fetch API atau Axios untuk mengambil data"}),e.jsx("li",{children:"Implementasi loading states saat data sedang diambil"}),e.jsx("li",{children:"Penanganan error yang baik"}),e.jsx("li",{children:"Integrasi data yang diambil dengan state aplikasi"})]})]}),e.jsx("p",{className:"text-gray-700 mb-3 pl-4",children:"Hampir semua aplikasi modern perlu berkomunikasi dengan API. Pengambilan data yang efisien dan penanganan error yang baik sangat penting untuk pengalaman pengguna yang optimal."}),e.jsx(q,{type:"tip",title:"API Gratis untuk Digunakan",children:e.jsx("p",{children:"Anda dapat menggunakan API gratis yang sudah tertera diatas."})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-800 mb-2",children:"4. React Router"}),e.jsxs("div",{className:"pl-4 border-l-2 border-yellow-500 mb-4",children:[e.jsx("p",{className:"text-gray-700 mb-2",children:"Implementasikan navigasi dan routing dalam aplikasi:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsx("li",{children:"Minimal 3 halaman/rute berbeda"}),e.jsx("li",{children:"Implementasi dynamic routing dengan parameter"}),e.jsx("li",{children:"Penggunaan nested routes (jika sesuai)"}),e.jsx("li",{children:"Navigasi programatis menggunakan hooks dari React Router"}),e.jsx("li",{children:"Implementasi error page untuk rute yang tidak ditemukan"})]})]}),e.jsx("p",{className:"text-gray-700 mb-3 pl-4",children:"React Router memungkinkan navigasi yang mulus tanpa refresh halaman, yang merupakan salah satu keunggulan utama Single Page Applications (SPA)."}),e.jsx(O,{title:"Contoh Setup React Router",code:`import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;`,language:"jsx"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-lg font-medium text-gray-800 mb-2",children:"5. State Management"}),e.jsxs("div",{className:"pl-4 border-l-2 border-red-500 mb-4",children:[e.jsx("p",{className:"text-gray-700 mb-2",children:"Implementasikan state management sesuai dengan kebutuhan, disertai dengan alasan. Pilihlah di antara pilihan berikut:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg border border-blue-200",children:[e.jsx("h5",{className:"font-medium text-blue-800 mb-1",children:"Use Context"}),e.jsx("p",{className:"text-gray-700",children:"Gunakan Context API jika state bersifat global tetapi tidak sering berubah, seperti tema atau autentikasi."})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg border border-blue-200",children:[e.jsx("h5",{className:"font-medium text-blue-800 mb-1",children:"Use Reducer"}),e.jsx("p",{className:"text-gray-700",children:"Gunakan useReducer jika state memiliki logika perubahan yang kompleks dalam satu komponen atau sekelompok kecil komponen."})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg border border-green-200",children:[e.jsx("h5",{className:"font-medium text-green-800 mb-1",children:"Use Redux"}),e.jsx("p",{className:"text-gray-700",children:"Gunakan Redux Toolkit jika aplikasi memiliki state yang besar, sering berubah, dan digunakan di banyak komponen secara luas."})]})]})]})]}),e.jsx(On,{href:"https://forms.gle/rDGk3s8psbq3edxv9"})]})}),e.jsx(Q,{id:"rekomendasi-api",isBordered:!1,title:"Rekomendasi API dan Tips Penggunaan",icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Berikut adalah rekomendasi API gratis yang dapat digunakan untuk pengembangan aplikasi React, baik untuk Task Management System maupun E-Commerce Product Catalog."}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6",children:"1. Fake Store API"}),e.jsx("p",{className:"text-gray-700",children:"API ini ideal untuk aplikasi e-commerce dengan data produk lengkap."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:["URL: ",e.jsx("code",{children:"https://fakestoreapi.com/"})]}),e.jsxs("li",{children:["Mendapatkan semua produk: ",e.jsx("code",{children:"GET https://fakestoreapi.com/products"})]}),e.jsxs("li",{children:["Mendapatkan produk berdasarkan ID: ",e.jsx("code",{children:"GET https://fakestoreapi.com/products/1"})]}),e.jsxs("li",{children:["Filter berdasarkan kategori: ",e.jsx("code",{children:"GET https://fakestoreapi.com/products/category/electronics"})]})]}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Tips Penggunaan:"})," Gunakan ",e.jsx("code",{children:"useEffect"})," untuk memanggil API saat komponen dimuat dan ",e.jsx("code",{children:"useState"})," untuk menyimpan data produk. Contoh: ",e.jsx("code",{children:"useEffect(() => { fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProducts(data)) }, [])"})]})}),e.jsx(O,{title:"Contoh Fetch Fake Store API",code:`import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk fetch data
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h3 className="font-bold mt-2">{product.title}</h3>
          <p className="text-green-600 font-bold">\${product.price}</p>
          <p>{product.category}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}`,language:"jsx"}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6",children:"2. JSON Placeholder"}),e.jsx("p",{className:"text-gray-700",children:"API sederhana yang cocok untuk task management dengan operasi dasar."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:["URL: ",e.jsx("code",{children:"https://jsonplaceholder.typicode.com/"})]}),e.jsxs("li",{children:["Mendapatkan semua tugas: ",e.jsx("code",{children:"GET https://jsonplaceholder.typicode.com/todos"})]}),e.jsxs("li",{children:["Mendapatkan tugas berdasarkan ID: ",e.jsx("code",{children:"GET https://jsonplaceholder.typicode.com/todos/1"})]}),e.jsxs("li",{children:["Filter berdasarkan user: ",e.jsx("code",{children:"GET https://jsonplaceholder.typicode.com/todos?userId=1"})]})]}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Tips Penggunaan:"})," Meskipun API ini mendukung POST/PUT/DELETE, perubahan tidak disimpan secara permanen di server. Gunakan ",e.jsx("code",{children:"Context API"})," atau ",e.jsx("code",{children:"Redux"})," untuk menyimpan state aplikasi."]})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6",children:"3. DummyJSON"}),e.jsx("p",{className:"text-gray-700",children:"API dengan data dummy yang kaya dan mendukung banyak endpoint."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:["URL: ",e.jsx("code",{children:"https://dummyjson.com/"})]}),e.jsxs("li",{children:["Produk: ",e.jsx("code",{children:"GET https://dummyjson.com/products"})]}),e.jsxs("li",{children:["Keranjang: ",e.jsx("code",{children:"GET https://dummyjson.com/carts"})]}),e.jsxs("li",{children:["Pencarian produk: ",e.jsx("code",{children:"GET https://dummyjson.com/products/search?q=phone"})]}),e.jsxs("li",{children:["Filter berdasarkan kategori: ",e.jsx("code",{children:"GET https://dummyjson.com/products/category/smartphones"})]})]}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Tips Penggunaan:"})," DummyJSON mendukung pagination dengan parameter ",e.jsx("code",{children:"limit"})," dan ",e.jsx("code",{children:"skip"}),". Contoh: ",e.jsx("code",{children:"GET https://dummyjson.com/products?limit=10&skip=10"})," untuk halaman kedua."]})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6",children:"4. MockAPI.io"}),e.jsx("p",{className:"text-gray-700",children:"Platform untuk membuat dan mengelola API palsu kustom."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700",children:[e.jsxs("li",{children:["URL: ",e.jsx("code",{children:"https://mockapi.io/"})]}),e.jsx("li",{children:"Memungkinkan pembuatan struktur data sendiri"}),e.jsx("li",{children:"Mendukung semua operasi CRUD"}),e.jsx("li",{children:"Data disimpan secara persisten"})]}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Tips Penggunaan:"}),' Daftar akun gratis, buat project baru, definisikan resource (seperti "tasks" atau "products"), dan gunakan endpoint yang dihasilkan. Ideal untuk menyimpan perubahan selama pengembangan.']})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6",children:"5. JSON Server (Local Development)"}),e.jsx("p",{className:"text-gray-700",children:"Tool untuk membuat REST API lokal menggunakan file JSON."}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:["Instalasi: ",e.jsx("code",{children:"npm install -g json-server"})]}),e.jsxs("li",{children:["Buat file ",e.jsx("code",{children:"db.json"})," dengan data Anda"]}),e.jsxs("li",{children:["Jalankan: ",e.jsx("code",{children:"json-server --watch db.json --port 3001"})]})]}),e.jsx(O,{title:"Contoh file db.json",code:`{
  "tasks": [
    { "id": 1, "title": "Learn React", "completed": false },
    { "id": 2, "title": "Build Task App", "completed": false }
  ],
  "products": [
    { "id": 1, "title": "Smartphone", "price": 499, "category": "electronics" },
    { "id": 2, "title": "Laptop", "price": 999, "category": "electronics" }
  ]
}`,language:"json"}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Tips Penggunaan:"})," JSON Server ideal untuk pengembangan lokal dan pengujian karena data akan disimpan di file local. Tambahkan delay dengan ",e.jsx("code",{children:"--delay 1000"})," untuk mensimulasikan jaringan lambat dan menguji loading state."]})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6",children:"Tips Umum Penggunaan API"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Gunakan Custom Hook:"})," Buat hook seperti ",e.jsx("code",{children:"useFetch"})," untuk mengelola pemanggilan API dan status loading/error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Implementasikan Caching:"})," Gunakan state management untuk menyimpan respons API, mengurangi permintaan berulang."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error Handling:"})," Selalu tangani kemungkinan error dan tampilkan pesan yang sesuai kepada pengguna."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loading States:"})," Tampilkan spinner atau skeleton loader saat menunggu respons API."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debouncing:"})," Untuk fitur pencarian, terapkan debouncing untuk mengurangi permintaan API."]})]}),e.jsx(O,{title:"Contoh Custom Hook useFetch",code:`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: abortController.signal });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}

// Penggunaan:
// const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');`,language:"jsx"})]})}),e.jsx(Q,{id:"prasyarat",title:"Prasyarat",isBordered:!1,icon:e.jsx(bn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Sebelum mengerjakan UTS ini, pastikan Anda telah memahami dan menguasai:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dasar JavaScript Modern"}),": Arrow functions, destructuring, spread operator, dan konsep ES6 lainnya"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fundamental React"}),": JSX, komponen, props, dan state"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js dan npm/yarn"}),": Instalasi dan penggunaan package manager"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git"}),": Dasar-dasar version control untuk mengumpulkan tugas"]})]}),e.jsx(q,{type:"tip",title:"Persiapan",children:e.jsx("p",{children:"Sebelum memulai, pastikan Anda telah menginstal Node.js versi terbaru dan create-react-app atau Vite untuk membuat proyek React baru dengan mudah."})})]})}),e.jsx(Q,{id:"alat-bahan",title:"Alat dan Bahan",isBordered:!1,icon:e.jsx(Da,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk mengikuti praktikum ini, Kalian memerlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser Web"}),": Chrome, Firefox, atau Edge"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Editor"}),": Visual Studio Code dengan ekstensi ES7+ React/Redux/React-Native snippets"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js dan npm"}),": Versi terbaru untuk mengelola paket"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git"}),": Untuk version control dan pengumpulan tugas"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React Developer Tools"}),": Ekstensi browser untuk debugging"]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Paket dan Library yang Dibutuhkan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"React"}),": Library utama"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React Router"}),": Untuk navigasi antar halaman"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Axios"}),": Untuk mengambil data dari API (opsional: bisa menggunakan fetch API)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Styling"}),": CSS, Tailwind CSS, atau library styling lainnya"]})]})]}),e.jsx(q,{type:"tip",title:"Rekomendasi",children:e.jsx("p",{children:"Kami menyarankan menggunakan Visual Studio Code dengan ekstensi JavaScript (ES6) code snippets, ESLint, dan Prettier untuk pengalaman pengembangan yang lebih baik."})})]})}),e.jsxs(Q,{id:"tutorial-hosting-react-di-vercel",title:"Tutorial Hosting React di Vercel",isBordered:!1,icon:e.jsx(ft,{className:"w-6 h-6 text-blue-500"}),children:[e.jsx(yt,{steps:[{id:1,title:"Persiapan Project untuk Deployment",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pastikan project React Anda sudah siap untuk di-deploy dengan memperhatikan hal-hal berikut:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll",children:[e.jsx("li",{children:"Project telah berjalan tanpa error di lingkungan development"}),e.jsx("li",{children:"Package.json sudah berisi script build yang benar"}),e.jsx("li",{children:"Environment variables sudah dikonfigurasi dengan benar"})]})]})},{id:2,title:"Membuat Akun dan Repositori GitHub",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Sebelum deploy ke Vercel, Anda memerlukan repositori GitHub:"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Buat akun GitHub jika belum memiliki"}),e.jsx("li",{children:"Buat repositori baru sesuai format pengumpulan"}),e.jsx("li",{children:"Push project React Anda ke repositori tersebut"})]}),e.jsx(O,{title:"Push ke GitHub",code:`# Inisialisasi Git di folder project
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit"

# Tambahkan remote repository baru di github
git remote add origin https://github.com/username/uts_pemrograman_web_[NIM].git

# Push ke branch main
git push -u origin main`,language:"bash"}),e.jsx(q,{type:"info",children:e.jsxs("p",{children:["Pastikan Anda mengganti ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"username"})," dan ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"[NIM]"})," dengan username GitHub dan NIM Anda."]})})]})},{id:3,title:"Mendaftar dan Connect ke Vercel",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Langkah-langkah untuk mendaftar dan connect ke Vercel:"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Kunjungi ",e.jsx("a",{href:"https://vercel.com/",className:"text-blue-600 hover:underline",children:"vercel.com"})," dan daftar dengan GitHub"]}),e.jsx("li",{children:'Setelah login, klik "Add New..." dan pilih "Project"'}),e.jsx("li",{children:"Pilih repositori GitHub yang berisi project React Anda"}),e.jsx("li",{children:"Vercel akan otomatis mendeteksi bahwa ini adalah project React"})]}),e.jsx(q,{type:"tip",title:"Tip",children:e.jsx("p",{children:"Vercel secara otomatis mendeteksi framework yang Anda gunakan. Untuk project React, Anda biasanya tidak perlu mengubah konfigurasi default."})})]})},{id:4,title:"Konfigurasi Project",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Konfigurasikan project Anda sebelum deployment:"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Pada halaman konfigurasi, verifikasi Build and Output Settings"}),e.jsx("li",{children:"Tambahkan Environment Variables jika diperlukan"}),e.jsx("li",{children:"Konfigurasi pengaturan domain jika Anda ingin menggunakan domain kustom"})]}),e.jsx(q,{type:"warning",title:"Perhatian",children:e.jsxs("p",{children:["Untuk aplikasi React yang menggunakan React Router dengan mode browser history, Anda perlu menambahkan file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"vercel.json"})," di root project:"]})}),e.jsx(O,{title:"vercel.json",code:`{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`,language:"json"})]})},{id:5,title:"Deploy Project",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Langkah terakhir untuk deploy project:"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:'Klik tombol "Deploy" untuk memulai proses deployment'}),e.jsx("li",{children:"Vercel akan melakukan proses build dan deployment"}),e.jsx("li",{children:"Setelah selesai, Anda akan mendapatkan URL untuk aplikasi yang sudah di-deploy"})]}),e.jsx(q,{type:"success",title:"Continuous Deployment",children:e.jsx("p",{children:"Setiap kali Anda push perubahan ke repositori GitHub, Vercel akan otomatis men-deploy perubahan tersebut. Ini disebut Continuous Deployment (CD)."})})]})}]}),e.jsx(Q,{id:"format-pengumpulan",title:"Format Pengumpulan",icon:e.jsx(jn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Direktori GitHub:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat repository dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"uts_pemrograman_web_[NIM]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"uts_pemrograman_web_119140001"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Struktur Folder:"}),e.jsx("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:e.jsx("li",{children:"Setiap folder berisi folder  aplikasi  react"})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Deadline Pengumpulan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Deadline: ",e.jsx("span",{className:"font-medium",children:"Minggu, 23 Maret 2025, pukul 23:59 WIB"})]}),e.jsx("li",{children:"Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari"})]})]})]})}),e.jsx(On,{href:"https://forms.gle/rDGk3s8psbq3edxv9"})]})]})}function tf(){return e.jsxs(Hn,{title:"Praktikum JavaScript Next Gen",subtitle:"Mengenal fitur modern JavaScript (ES6+) dan penerapannya dalam pengembangan web",children:[e.jsx(Q,{id:"tujuan",title:"Tujuan Praktikum",icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan praktikum ini, Kalian diharapkan mampu:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Memahami fitur-fitur modern JavaScript (ES6+)"}),e.jsx("li",{children:"Menguasai penggunaan let dan const untuk deklarasi variabel"}),e.jsx("li",{children:"Mengimplementasikan arrow functions dalam kode JavaScript"}),e.jsx("li",{children:"Menerapkan destructuring, rest dan spread operators"}),e.jsx("li",{children:"Menggunakan template literals dengan efektif"}),e.jsx("li",{children:"Mengenal dan mengimplementasikan modules dan import/export"}),e.jsx("li",{children:"Menguasai metode array modern dan higher-order functions"}),e.jsx("li",{children:"Menggunakan Promise dan async/await untuk operasi asinkron"})]})]})}),e.jsx(Q,{id:"pengenalan",title:"Pengenalan JavaScript Next Gen",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"JavaScript Next Gen mengacu pada fitur-fitur modern dari JavaScript yang diperkenalkan dalam ECMAScript 2015 (ES6) dan versi-versi berikutnya. Fitur-fitur ini telah merevolusi cara pengembang menulis kode JavaScript, membuat kode menjadi lebih bersih, ekspresif, dan mudah dipelihara."}),e.jsx("p",{className:"text-gray-700",children:"Beberapa fitur utama yang akan kita pelajari dalam praktikum ini:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Let dan Const"}),": Cara baru untuk mendeklarasikan variabel dengan scope yang lebih baik"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrow Functions"}),": Sintaks yang lebih ringkas untuk mendefinisikan fungsi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Template Literals"}),": Cara baru untuk membuat string dengan interpolasi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Destructuring"}),": Ekstraksi nilai dari array dan objek dengan cara yang efisien"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread dan Rest Operators"}),": Cara baru untuk bekerja dengan array dan objek"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default Parameters"}),": Nilai default untuk parameter fungsi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Classes"}),": Sintaks berorientasi objek untuk JavaScript"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modules"}),": Sistem untuk mengimpor dan mengekspor kode"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Promise dan Async/Await"}),": Cara baru untuk menangani operasi asinkron"]})]}),e.jsx(q,{type:"info",title:"JavaScript Compatibility",children:e.jsx("p",{children:"Meskipun sebagian besar browser modern telah mendukung fitur ES6+, beberapa browser lama mungkin tidak mendukungnya. Dalam lingkungan produksi, sering digunakan transpiler seperti Babel untuk mengkonversi kode ES6+ menjadi ES5 yang memiliki kompatibilitas lebih luas."})})]})}),e.jsx(Q,{id:"alat-bahan",title:"Alat dan Bahan",icon:e.jsx(Da,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk mengikuti praktikum ini, Kalian memerlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Browser Web"}),": Chrome, Firefox, atau Edge (versi terbaru)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Editor"}),": Visual Studio Code, Sublime Text, atau editor kode lainnya"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js"}),": (Opsional) Untuk menjalankan JavaScript di luar browser"]})]}),e.jsxs(q,{type:"tip",title:"Rekomendasi",children:[e.jsx("p",{children:"Kami menyarankan menggunakan Visual Studio Code dengan ekstensi-ekstensi berikut untuk pengalaman pengembangan yang lebih baik:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsx("li",{children:"ESLint - Untuk membantu menemukan dan memperbaiki masalah dalam kode JavaScript"}),e.jsx("li",{children:"Prettier - Untuk memformat kode secara otomatis"}),e.jsx("li",{children:"JavaScript (ES6) code snippets - Untuk mempercepat penulisan kode ES6"}),e.jsx("li",{children:"LiveServer - Untuk melihat perubahan langsung di browser"})]})]})]})}),e.jsx(Q,{id:"langkah-praktikum",title:"Langkah Praktikum",icon:e.jsx(ft,{className:"w-6 h-6 text-blue-500"}),children:e.jsx(yt,{steps:[{id:1,title:"Membuat Project dan Struktur File",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Pertama, buat direktori project baru dengan struktur file berikut:"}),e.jsx(O,{title:"Struktur Direktori",code:`project-js-nextgen/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── modules/
│   │   ├── utils.js
│   │   └── data.js
│   └── app.js`,language:"bash"}),e.jsxs("p",{className:"text-gray-700",children:["Buat file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"index.html"})," dengan konten dasar:"]}),e.jsx(O,{title:"index.html",code:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript Next Gen</title>
<link rel="stylesheet" href="css/style.css">
<script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="bg-gray-100 p-8">
<div class="max-w-4xl mx-auto">
<header class="mb-8">
<h1 class="text-3xl font-bold text-blue-600 mb-2">JavaScript Next Gen Praktikum</h1>
<p class="text-gray-600">Belajar fitur modern JavaScript (ES6+)</p>
</header>

<main class="bg-white p-6 rounded-lg shadow-md">
<div id="output" class="space-y-4">
<!-- Output akan ditampilkan di sini -->
</div>

<div class="flex space-x-4 mt-8">
<button id="runBtn" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
    Run Demo
</button>
<button id="clearBtn" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
    Clear Output
</button>
</div>
</main>
</div>

<!-- Type module penting untuk mendukung ES modules -->
<script type="module" src="js/main.js"><\/script>
</body>
</html>`,language:"html"}),e.jsx("p",{className:"text-gray-700",children:"Buat file CSS dasar:"}),e.jsx(O,{title:"css/style.css",code:`.output-item {
padding: 1rem;
margin-bottom: 1rem;
border-radius: 0.375rem;
}

.output-item:nth-child(odd) {
background-color: #f3f4f6;
}

.output-item:nth-child(even) {
background-color: #e5e7eb;
}

.output-title {
font-weight: 600;
margin-bottom: 0.5rem;
color: #1e40af;
}

.code {
font-family: monospace;
background-color: #f1f5f9;
padding: 0.125rem 0.25rem;
border-radius: 0.25rem;
}

.result {
margin-top: 0.5rem;
padding: 0.5rem;
background-color: #dbeafe;
border-radius: 0.25rem;
}`,language:"css"}),e.jsx("p",{className:"text-gray-700",children:"Buat file JavaScript utama:"}),e.jsx(O,{title:"js/main.js",code:`// Import dari module lain
import { formatDate, capitalizeString } from './modules/utils.js';
import { sampleData } from './modules/data.js';

// DOM elements
const outputElement = document.getElementById('output');
const runButton = document.getElementById('runBtn');
const clearButton = document.getElementById('clearBtn');

// Fungsi untuk menambahkan output ke DOM
function addOutput(title, code, result) {
const outputItem = document.createElement('div');
outputItem.className = 'output-item';

const titleEl = document.createElement('div');
titleEl.className = 'output-title';
titleEl.textContent = title;

const codeEl = document.createElement('div');
codeEl.className = 'code';
codeEl.textContent = code;

const resultEl = document.createElement('div');
resultEl.className = 'result';

if (typeof result === 'object') {
resultEl.textContent = JSON.stringify(result, null, 2);
} else {
resultEl.textContent = result;
}

outputItem.appendChild(titleEl);
outputItem.appendChild(codeEl);
outputItem.appendChild(resultEl);

outputElement.appendChild(outputItem);
}

// Event listener untuk tombol Run
runButton.addEventListener('click', () => {
clearOutput();
runAllDemos();
});

// Event listener untuk tombol Clear
clearButton.addEventListener('click', clearOutput);

function clearOutput() {
outputElement.innerHTML = '';
}

// Fungsi utama untuk menjalankan semua demo
function runAllDemos() {
// Demo akan diimplementasikan pada langkah berikutnya
console.log('Demo akan dijalankan di sini');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript Next Gen Demo Ready!');
});;`,language:"javascript"}),e.jsx("p",{className:"text-gray-700",children:"Buat modul utils:"}),e.jsx(O,{title:"js/modules/utils.js",code:`// Utility functions
                
// Format date to locale string
export function formatDate(date) {
return new Date(date).toLocaleDateString('id-ID', {
year: 'numeric',
month: 'long',
day: 'numeric'
});
}

// Capitalize first letter of each word
export function capitalizeString(str) {
return str
.split(' ')
.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(' ');
}

// Calculate years between dates
export function calculateYears(startDate, endDate = new Date()) {
const start = new Date(startDate);
const end = new Date(endDate);
const yearDiff = end.getFullYear() - start.getFullYear();

// Adjust for months and days
if (
end.getMonth() < start.getMonth() ||
(end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
) {
return yearDiff - 1;
}

return yearDiff;
}`,language:"javascript"}),e.jsx("p",{className:"text-gray-700",children:"Buat modul data:"}),e.jsx(O,{title:"js/modules/data.js",code:`// Sample data for demos
                
export const sampleData = {
users: [
{
id: 1,
name: "john doe",
email: "johndoe@example.com",
age: 28,
joinDate: "2022-03-15",
active: true,
skills: ["JavaScript", "React", "Node.js"]
},
{
id: 2,
name: "jane smith",
email: "janesmith@example.com",
age: 32,
joinDate: "2021-11-07",
active: true,
skills: ["Python", "Django", "JavaScript"]
},
{
id: 3,
name: "bob johnson",
email: "bobjohnson@example.com",
age: 24,
joinDate: "2023-01-20",
active: false,
skills: ["Java", "Spring", "SQL"]
},
{
id: 4,
name: "alice williams",
email: "alicewilliams@example.com",
age: 35,
joinDate: "2020-09-30",
active: true,
skills: ["JavaScript", "Vue", "CSS", "HTML"]
},
{
id: 5,
name: "charlie brown",
email: "charliebrown@example.com",
age: 22,
joinDate: "2023-04-10",
active: false,
skills: ["PHP", "Laravel", "MySQL"]
}
],
products: [
{ id: 1, name: "Laptop", price: 12000000, stock: 15 },
{ id: 2, name: "Smartphone", price: 5000000, stock: 25 },
{ id: 3, name: "Headphones", price: 800000, stock: 30 },
{ id: 4, name: "Monitor", price: 2500000, stock: 10 },
{ id: 5, name: "Keyboard", price: 350000, stock: 20 }
]
};`,language:"javascript"}),e.jsx(q,{type:"tip",children:e.jsx("p",{children:"Memahami struktur proyek yang baik akan membantu Anda mengelola kode JavaScript modern dengan lebih terstruktur. Penggunaan modules memungkinkan pemisahan kode yang lebih baik dan lebih maintainable."})})]})},{id:2,title:"Let dan Const, Arrow Functions, Template Literals",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Buat file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"js/app.js"})," untuk implementasi fitur ES6 dasar:"]}),e.jsx(O,{title:"js/app.js",code:`// JavaScript Next Gen Demo Code
                
// ----------------------------
// Let dan Const
// ----------------------------
export function demoVariables() {
// Menggunakan var (cara lama)
var oldVar = "Old variable";
{
var oldVar = "Changed inside block";
}

// Menggunakan let (ES6)
let newLet = "New let variable";
{
let newLet = "Different variable inside block";
console.log("newLet inside block:", newLet);
}

// Menggunakan const (ES6)
const PI = 3.14159;
const user = { name: "John", age: 30 };
// PI = 3.15; // Error! Tidak bisa mengubah nilai const
user.age = 31; // Ini valid! Konten objek const dapat diubah

return {
oldVar,
newLet,
PI,
user
};
}

// ----------------------------
// Arrow Functions
// ----------------------------
export function demoArrowFunctions() {
// Fungsi reguler
function regularSum(a, b) {
return a + b;
}

// Arrow function dasar
const arrowSum = (a, b) => {
return a + b;
};

// Arrow function dengan implicit return
const shortArrowSum = (a, b) => a + b;

// Arrow function tanpa parameter
const sayHello = () => "Hello World!";

// Arrow function dengan satu parameter (kurung opsional)
const square = x => x * x;

return {
regularSum: regularSum(5, 3),
arrowSum: arrowSum(5, 3),
shortArrowSum: shortArrowSum(5, 3),
sayHello: sayHello(),
square: square(4)
};
}

// ----------------------------
// Template Literals
// ----------------------------
export function demoTemplateLiterals() {
const name = "John";
const age = 30;

// String concatenation cara lama
const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";

// Template literals (ES6)
const newWay = \`Nama saya \${name} dan umur saya \${age} tahun.\`;

// Template literals multi-baris
const multiLine = \`
Ini adalah string multi-baris.
Sangat berguna untuk HTML template.
Nama: \${name}
Umur: \${age}
\`;

// Template literals dengan ekspresi
const expression = \`Tahun lahir: \${new Date().getFullYear() - age}\`;

return {
oldWay,
newWay,
multiLine,
expression
};
}`,language:"javascript"}),e.jsxs("p",{className:"text-gray-700",children:["Sekarang update ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"main.js"})," untuk mengimpor dan menjalankan demo:"]}),e.jsx(O,{title:"Tambahkan import ini ke js/main.js",code:"import { demoVariables, demoArrowFunctions, demoTemplateLiterals } from './app.js';",language:"javascript"}),e.jsx(O,{title:"Tambahkan fungsi runAllDemos di js/main.js",code:`// Fungsi utama untuk menjalankan semua demo
function runAllDemos() {
// Demo Let dan Const
const varResults = demoVariables();
addOutput(
"1. Let dan Const",
"var vs let/const dan block scope",
\`var (function scope): \${varResults.oldVar}
let (block scope): \${varResults.newLet}
const (immutable): \${varResults.PI}
const object (mutable content): \${JSON.stringify(varResults.user)}\`
);

// Demo Arrow Functions
const arrowResults = demoArrowFunctions();
addOutput(
"2. Arrow Functions",
"Perbandingan fungsi reguler dan arrow functions",
\`Regular function: \${arrowResults.regularSum}
Arrow function: \${arrowResults.arrowSum}
Short arrow: \${arrowResults.shortArrowSum}
No params: \${arrowResults.sayHello}
Single param: \${arrowResults.square}\`
);

// Demo Template Literals
const templateResults = demoTemplateLiterals();
addOutput(
"3. Template Literals",
"String concatenation vs template literals",
\`Old way: \${templateResults.oldWay}
New way: \${templateResults.newWay}
With expression: \${templateResults.expression}
Multi-line: \${templateResults.multiLine}\`
);
}`,language:"javascript"}),e.jsx(q,{type:"info",children:e.jsxs("p",{children:[e.jsx("strong",{children:"let dan const"})," memecahkan masalah hoisting dan scope dalam JavaScript. Penggunaan ",e.jsx("strong",{children:"arrow functions"})," tidak hanya membuat kode lebih ringkas, tetapi juga mengatasi masalah ",e.jsx("em",{children:"this"})," binding. ",e.jsx("strong",{children:"Template literals"})," membuat interpolasi string jauh lebih mudah dan readable."]})})]})},{id:3,title:"Destructuring, Spread dan Rest Operators",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Tambahkan fungsi-fungsi berikut ke file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"js/app.js"}),":"]}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Destructuring
// ----------------------------
export function demoDestructuring() {
// Object destructuring
const person = {
firstName: "John",
lastName: "Doe",
age: 30,
email: "john@example.com",
address: {
city: "Jakarta",
postalCode: "12345"
}
};

// Basic destructuring
const { firstName, lastName } = person;

// Destructuring dengan nama variabel baru
const { firstName: fName, lastName: lName } = person;

// Destructuring dengan nilai default
const { hobby = "coding" } = person;

// Nested destructuring
const { address: { city, postalCode } } = person;

// Array destructuring
const colors = ["red", "green", "blue", "yellow", "purple"];

// Basic array destructuring
const [firstColor, secondColor] = colors;

// Skip elements
const [, , thirdColor] = colors;

// Rest pattern dalam array destructuring
const [primary, secondary, ...restColors] = colors;

// Swap variables menggunakan destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];

return {
objectBasic: { firstName, lastName },
objectRenamed: { fName, lName },
objectDefault: hobby,
objectNested: { city, postalCode },
arrayBasic: { firstColor, secondColor },
arraySkipped: thirdColor,
arrayRest: { primary, secondary, restColors },
swapped: { a, b }
};
}

// ----------------------------
// Spread dan Rest Operators
// ----------------------------
export function demoSpreadRest() {
// Spread operator dengan array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// Copy array dengan spread
const numbersCopy = [...numbers];

// Merge arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

// Spread operator dengan objek
const person = {
name: "John",
age: 30
};

// Copy objek
const personCopy = { ...person };

// Extend objek
const extendedPerson = {
...person,
email: "john@example.com",
age: 31 // Override properti yang ada
};

// Rest parameter dalam fungsi
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

// Rest parameter dengan parameter reguler
function process(first, second, ...rest) {
return {
first,
second,
rest
};
}

return {
spreadArray: moreNumbers,
copyArray: numbersCopy,
mergedArrays: mergedArray,
spreadObject: extendedPerson,
restSum: sum(1, 2, 3, 4, 5),
restProcess: process("a", "b", "c", "d", "e")
};
}`,language:"javascript"}),e.jsxs("p",{className:"text-gray-700",children:["Update ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"main.js"})," untuk menjalankan demo-demo baru:"]}),e.jsx(O,{title:"Update import di js/main.js",code:"import { demoVariables, demoArrowFunctions, demoTemplateLiterals, demoDestructuring, demoSpreadRest } from './app.js';",language:"javascript"}),e.jsx(O,{title:"Tambahkan ke awal fungsi runAllDemos di js/main.js",code:`// Demo Destructuring
const destructuringResults = demoDestructuring();
addOutput(
"4. Destructuring",
"Ekstraksi nilai dari objek dan array",
\`Object basic: \${JSON.stringify(destructuringResults.objectBasic)}
Object renamed: \${JSON.stringify(destructuringResults.objectRenamed)}
Object default: \${destructuringResults.objectDefault}
Object nested: \${JSON.stringify(destructuringResults.objectNested)}
Array basic: \${JSON.stringify(destructuringResults.arrayBasic)}
Array skipped: \${destructuringResults.arraySkipped}
Array with rest: \${JSON.stringify(destructuringResults.arrayRest)}
Swapped variables: \${JSON.stringify(destructuringResults.swapped)}\`
);

// Demo Spread dan Rest Operators
const spreadRestResults = demoSpreadRest();
addOutput(
"5. Spread dan Rest Operators",
"Pengggunaan ... untuk array dan objek",
\`Spread in array: \${JSON.stringify(spreadRestResults.spreadArray)}
Copy array: \${JSON.stringify(spreadRestResults.copyArray)}
Merged arrays: \${JSON.stringify(spreadRestResults.mergedArrays)}
Spread in object: \${JSON.stringify(spreadRestResults.spreadObject)}
Rest in function (sum): \${spreadRestResults.restSum}
Rest with regular params: \${JSON.stringify(spreadRestResults.restProcess)}\`
);`,language:"javascript"}),e.jsx(q,{type:"info",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Destructuring"})," adalah cara efisien untuk mengekstrak nilai dari array dan objek. ",e.jsx("strong",{children:"Spread operator"})," (...) memungkinkan untuk memperluas array atau objek, sementara ",e.jsx("strong",{children:"rest parameter"})," memungkinkan untuk mengumpulkan elemen yang tersisa ke dalam array tunggal."]})})]})},{id:4,title:"Default Parameters, Classes, Object Literals",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Tambahkan fungsi-fungsi berikut ke file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"js/app.js"}),":"]}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Default Parameters
// ----------------------------
export function demoDefaultParams() {
// Cara lama (ES5)
function greetOld(name, greeting) {
  name = name || "Guest";
  greeting = greeting || "Hello";
  return \`\${greeting}, \${name}!\`;
}

// Dengan default parameters (ES6)
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Default parameters dengan ekspresi
function createUser(name, role = "user", createdAt = new Date().toISOString()) {
  return { name, role, createdAt };
}

// Default parameters bisa menggunakan parameter sebelumnya
function createOrder(product, quantity = 1, price, total = price * quantity) {
  return { product, quantity, price, total };
}

return {
  oldWay: greetOld(),
  oldWayParams: greetOld("John", "Hi"),
  newWay: greet(),
  newWayParams: greet("John", "Hi"),
  withExpression: createUser("Alice"),
  usingPrevious: createOrder("Laptop", 2, 1000000)
};
}`}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Classes
// ----------------------------
export function demoClasses() {
// Definisi class
class User {
  // Constructor
  constructor(name, email) {
      this.name = name;
      this.email = email;
      this.createdAt = new Date();
  }
  
  // Methods
  getInfo() {
      return \`\${this.name} (\${this.email})\`;
  }
  
  getCreatedDate() {
      return this.createdAt.toLocaleDateString();
  }
}

// Inheritance
class Admin extends User {
  constructor(name, email, role = "admin") {
      // Memanggil constructor parent class
      super(name, email);
      this.role = role;
  }
  
  // Override method
  getInfo() {
      return \`\${this.name} (\${this.email}) - \${this.role}\`;
  }
  
  // Admin method
  hasAccess(module) {
      return true; // Untuk contoh, admin selalu punya akses
  }
}

// Instances
const user = new User("John Doe", "john@example.com");
const admin = new Admin("Admin User", "admin@example.com");

return {
  user: {
      info: user.getInfo(),
      createdDate: user.getCreatedDate()
  },
  admin: {
      info: admin.getInfo(),
      createdDate: admin.getCreatedDate(),
      hasAccess: admin.hasAccess("dashboard")
  },
  isUserInstance: user instanceof User,
  isAdminInstance: admin instanceof User // true karena inheritance
};
}`}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Enhanced Object Literals
// ----------------------------
export function demoObjectLiterals() {
// Property shorthand
const name = "John";
const age = 30;

// Cara lama
const oldPerson = {
  name: name,
  age: age,
  sayHello: function() {
      return "Hello!";
  }
};

// Object literal modern (ES6)
const newPerson = {
  name,
  age,
  // Method shorthand
  sayHello() {
      return "Hello!";
  },
  // Computed property names
  ["skill_" + 1]: "JavaScript",
  ["skill_" + 2]: "React"
};

// Combining with other features
const prefix = "user";
const userData = {
    [\`\${prefix}_id\`]: 123,   // Properti dengan template literal harus dalam []
    [\`\${prefix}_name\`]: "john_doe",
    [Date.now()]: "timestamp" // Properti dengan nilai timestamp
};

return {
  oldWay: oldPerson,
  newWay: newPerson,
  methods: {
      old: oldPerson.sayHello(),
      new: newPerson.sayHello()
  },
  computedProps: {
      skill1: newPerson.skill_1,
      skill2: newPerson.skill_2
  },
  dynamicProps: userData
};
}`}),e.jsx("p",{className:"text-gray-700",children:"Update main.js untuk menjalankan demo-demo baru:"}),e.jsx(O,{title:"Update import di js/main.js",code:`import { 
demoVariables, 
demoArrowFunctions, 
demoTemplateLiterals, 
demoDestructuring, 
demoSpreadRest,
demoDefaultParams,
demoClasses,
demoObjectLiterals
} from './app.js';`}),e.jsx(O,{title:"Tambahkan ke awal fungsi runAllDemos di js/main.js",code:`// Demo Default Parameters
const defaultParamsResults = demoDefaultParams();
addOutput(
  "6. Default Parameters",
  "Nilai default untuk parameter fungsi",
  \`Old way: \${defaultParamsResults.oldWay}
Old way with params: \${defaultParamsResults.oldWayParams}
New way: \${defaultParamsResults.newWay}
New way with params: \${defaultParamsResults.newWayParams}
With expression: \${JSON.stringify(defaultParamsResults.withExpression)}
Using previous params: \${JSON.stringify(defaultParamsResults.usingPrevious)}\`
);

// Demo Classes
const classesResults = demoClasses();
addOutput(
  "7. Classes",
  "Penggunaan class dan inheritance",
  \`User: \${classesResults.user.info}
User created: \${classesResults.user.createdDate}
Admin: \${classesResults.admin.info}
Admin created: \${classesResults.admin.createdDate}
Admin has access: \${classesResults.admin.hasAccess}
user instanceof User: \${classesResults.isUserInstance}
admin instanceof User: \${classesResults.isAdminInstance}\`
);

// Demo Enhanced Object Literals
const objectLiteralsResults = demoObjectLiterals();
addOutput(
  "8. Enhanced Object Literals",
  "Penulisan objek yang lebih ringkas",
  \`Property shorthand: \${JSON.stringify(objectLiteralsResults.newWay)}
Method shorthand: \${objectLiteralsResults.methods.new}
Computed properties: \${JSON.stringify(objectLiteralsResults.computedProps)}
Dynamic properties: \${JSON.stringify(objectLiteralsResults.dynamicProps)}\`
);`})]})},{id:5,title:"Array Methods dan Higher-Order Functions",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Tambahkan fungsi-fungsi berikut ke file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"js/app.js"}),":"]}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Modern Array Methods dan Higher-Order Functions
// ----------------------------
export function demoArrayMethods() {
// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Jane", age: 30, active: false },
  { id: 3, name: "Bob", age: 22, active: true },
  { id: 4, name: "Alice", age: 28, active: true },
  { id: 5, name: "Charlie", age: 35, active: false }
];

// map
const doubled = numbers.map(num => num * 2);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
const activeUsers = users.filter(user => user.active);

// find
const userJane = users.find(user => user.name === "Jane");

// some dan every
const hasAdult = users.some(user => user.age >= 18);
const allAdults = users.every(user => user.age >= 18);

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
const oldest = users.reduce((oldest, user) => 
  user.age > oldest.age ? user : oldest, users[0]);

// Combining methods (chaining)
const activeUsersNames = users
  .filter(user => user.active)
  .map(user => user.name);

const totalActiveAge = users
  .filter(user => user.active)
  .reduce((sum, user) => sum + user.age, 0);

return {
  map: doubled,
  filter: {
      evenNumbers,
      activeUsers: activeUsers.length
  },
  find: userJane,
  some: hasAdult,
  every: allAdults,
  reduce: {
      sum,
      oldest: oldest.name
  },
  chaining: {
      activeUsersNames,
      totalActiveAge
  }
};
}`}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Array Destructuring dan Spread in-depth
// ----------------------------
export function demoAdvancedArrays() {
const numbers = [1, 2, 3, 4, 5];

// Clone dan concat
const numbersCopy = [...numbers];
const moreNumbers = [...numbers, 6, 7, 8];
const combinedArrays = [...numbers, ...[6, 7, 8, 9]];

// Array.from
const fromIterable = Array.from("hello");
const withMapFn = Array.from(numbers, n => n * n);

// Array.of
const newArray = Array.of(1, "two", { three: 3 });

// Flat dan FlatMap
const nestedArrays = [1, [2, 3], [[4, 5], 6]];
const flattened = nestedArrays.flat();
const deepFlattened = nestedArrays.flat(2);

const flatMapped = numbers.flatMap(n => [n, n * 2]);

// Includes
const hasThree = numbers.includes(3);

return {
  clone: numbersCopy,
  concat: {
      moreNumbers,
      combinedArrays
  },
  arrayFrom: {
      fromIterable,
      withMapFn
  },
  arrayOf: newArray,
  flatAndFlatMap: {
      flattened,
      deepFlattened,
      flatMapped
  },
  includes: hasThree
};
}`}),e.jsx("p",{className:"text-gray-700",children:"Update main.js untuk menjalankan demo-demo baru:"}),e.jsx(O,{title:"Update import di js/main.js",code:`import { 
demoVariables, 
demoArrowFunctions, 
demoTemplateLiterals, 
demoDestructuring, 
demoSpreadRest,
demoDefaultParams,
demoClasses,
demoObjectLiterals,
demoArrayMethods,
demoAdvancedArrays
} from './app.js';`}),e.jsx(O,{title:"Tambahkan ke awal fungsi runAllDemos di js/main.js",code:`// Demo Array Methods
const arrayMethodsResults = demoArrayMethods();
addOutput(
  "9. Modern Array Methods",
  "Higher-Order Functions pada array",
  \`map: \${JSON.stringify(arrayMethodsResults.map)}
filter (evenNumbers): \${JSON.stringify(arrayMethodsResults.filter.evenNumbers)}
filter (activeUsers): \${arrayMethodsResults.filter.activeUsers}
find: \${JSON.stringify(arrayMethodsResults.find)}
some (hasAdult): \${arrayMethodsResults.some}
every (allAdults): \${arrayMethodsResults.every}
reduce (sum): \${arrayMethodsResults.reduce.sum}
reduce (oldest): \${arrayMethodsResults.reduce.oldest}
chaining (activeUsersNames): \${JSON.stringify(arrayMethodsResults.chaining.activeUsersNames)}
chaining (totalActiveAge): \${arrayMethodsResults.chaining.totalActiveAge}\`
);

// Demo Advanced Arrays
const advArraysResults = demoAdvancedArrays();
addOutput(
  "10. Advanced Arrays",
  "Fitur array lanjutan",
  \`Clone: \${JSON.stringify(advArraysResults.clone)}
Concat: \${JSON.stringify(advArraysResults.concat.combinedArrays)}
Array.from: \${JSON.stringify(advArraysResults.arrayFrom.withMapFn)}
Array.of: \${JSON.stringify(advArraysResults.arrayOf)}
flat: \${JSON.stringify(advArraysResults.flatAndFlatMap.flattened)}
deepFlat: \${JSON.stringify(advArraysResults.flatAndFlatMap.deepFlattened)}
flatMap: \${JSON.stringify(advArraysResults.flatAndFlatMap.flatMapped)}
includes: \${advArraysResults.includes}\`
);`})]})},{id:6,title:"Promise dan Async/Await",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Tambahkan fungsi-fungsi berikut ke file ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"js/app.js"}),":"]}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Promises
// ----------------------------
export function demoPromises() {
// Simulasi operasi asinkron dengan Promise
function fetchData(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (id > 0) {
              resolve({ id, name: \`User \${id}\`, success: true });
          } else {
              reject(new Error("Invalid ID"));
          }
      }, 1000);
  });
}

// Basic Promise usage
let basicPromiseResult = "Loading...";
fetchData(1)
  .then(data => {
      basicPromiseResult = \`Success: \${JSON.stringify(data)}\`;
      document.getElementById('promise-basic').textContent = basicPromiseResult;
  })
  .catch(err => {
      basicPromiseResult = \`Error: \${err.message}\`;
      document.getElementById('promise-basic').textContent = basicPromiseResult;
  });

// Promise chaining
let chainResult = "Loading...";
fetchData(2)
  .then(user => {
      chainResult = \`Got user: \${user.name}\`;
      return fetchData(3); // Return another promise
  })
  .then(secondUser => {
      chainResult += \` and \${secondUser.name}\`;
      document.getElementById('promise-chain').textContent = chainResult;
  })
  .catch(err => {
      chainResult = \`Error: \${err.message}\`;
      document.getElementById('promise-chain').textContent = chainResult;
  });

// Promise.all
let allResult = "Loading...";
Promise.all([fetchData(4), fetchData(5), fetchData(6)])
  .then(results => {
      allResult = \`All completed: \${results.map(r => r.name).join(', ')}\`;
      document.getElementById('promise-all').textContent = allResult;
  })
  .catch(err => {
      allResult = \`Error in one: \${err.message}\`;
      document.getElementById('promise-all').textContent = allResult;
  });

// Promise.race
let raceResult = "Loading...";
Promise.race([
  fetchData(7),
  fetchData(8),
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1500))
])
  .then(winner => {
      raceResult = \`Race winner: \${winner.name}\`;
      document.getElementById('promise-race').textContent = raceResult;
  })
  .catch(err => {
      raceResult = \`Race error: \${err.message}\`;
      document.getElementById('promise-race').textContent = raceResult;
  });

// Create elements for promise updates
const outputDiv = document.createElement('div');
outputDiv.className = 'promise-outputs';

const createPromiseElement = (id, label) => {
  const el = document.createElement('div');
  el.className = 'promise-result';
  el.innerHTML = \`<strong>\${label}:</strong> <span id="\${id}">Loading...</span>\`;
  outputDiv.appendChild(el);
};

createPromiseElement('promise-basic', 'Basic Promise');
createPromiseElement('promise-chain', 'Promise Chain');
createPromiseElement('promise-all', 'Promise.all');
createPromiseElement('promise-race', 'Promise.race');

return outputDiv;
}`}),e.jsx(O,{title:"Tambahkan ke js/app.js",code:`// ----------------------------
// Async/Await
// ----------------------------
export function demoAsyncAwait() {
// Simulasi API call
function fetchUser(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (id > 0) {
              resolve({ id, name: \`User \${id}\`, email: \`user\${id}@example.com\` });
          } else {
              reject(new Error("Invalid user ID"));
          }
      }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve([
              { id: 1, title: "Post 1", body: "Content for post 1" },
              { id: 2, title: "Post 2", body: "Content for post 2" },
          ]);
      }, 800);
  });
}

// Using async/await
async function getUserData(id) {
  try {
      const user = await fetchUser(id);
      const posts = await fetchUserPosts(user.id);
      return {
          user,
          posts,
          success: true
      };
  } catch (error) {
      return {
          error: error.message,
          success: false
      };
  }
}

// Parallel execution with async/await
async function getMultipleUsers(ids) {
  try {
      // Execute promises in parallel
      const userPromises = ids.map(id => fetchUser(id));
      const users = await Promise.all(userPromises);
      
      // Get posts for all users in parallel
      const postPromises = users.map(user => fetchUserPosts(user.id));
      const allPosts = await Promise.all(postPromises);
      
      // Combine results
      return users.map((user, i) => ({
          user,
          posts: allPosts[i]
      }));
  } catch (error) {
      return { error: error.message };
  }
}

// Create elements to display results
const outputDiv = document.createElement('div');
outputDiv.className = 'async-outputs';

// Basic async/await example
const basicAsyncResult = document.createElement('div');
basicAsyncResult.innerHTML = '<strong>Single User:</strong> Loading...';
basicAsyncResult.className = 'async-result';
outputDiv.appendChild(basicAsyncResult);

// Parallel async/await example
const parallelAsyncResult = document.createElement('div');
parallelAsyncResult.innerHTML = '<strong>Multiple Users:</strong> Loading...';
parallelAsyncResult.className = 'async-result';
outputDiv.appendChild(parallelAsyncResult);

// Execute and update UI
getUserData(42).then(result => {
  if (result.success) {
      basicAsyncResult.innerHTML = \`
          <strong>Single User:</strong> \${result.user.name} | 
          Posts: \${result.posts.length}
      \`;
  } else {
      basicAsyncResult.innerHTML = \`<strong>Error:</strong> \${result.error}\`;
  }
});

getMultipleUsers([101, 102, 103]).then(results => {
  if (!results.error) {
      parallelAsyncResult.innerHTML = \`
          <strong>Multiple Users:</strong> 
          \${results.map(r => r.user.name).join(', ')} |
          Total posts: \${results.reduce((sum, r) => sum + r.posts.length, 0)}
      \`;
  } else {
      parallelAsyncResult.innerHTML = \`<strong>Error:</strong> \${results.error}\`;
  }
});

return outputDiv;
}`}),e.jsx("p",{className:"text-gray-700",children:"Update main.js untuk menjalankan demo-demo asynchronous:"}),e.jsx(O,{title:"Update import di js/main.js",code:`import { 
demoVariables, 
demoArrowFunctions, 
demoTemplateLiterals, 
demoDestructuring, 
demoSpreadRest,
demoDefaultParams,
demoClasses,
demoObjectLiterals,
demoArrayMethods,
demoAdvancedArrays,
demoPromises,
demoAsyncAwait
} from './app.js';`}),e.jsx(O,{title:"Tambahkan ke awal fungsi runAllDemos di js/main.js",code:`// Demo Promises
addOutput(
  "11. Promises",
  "Penanganan operasi asinkron dengan Promise",
  ""
);
const promiseOutput = demoPromises();
document.querySelector('.output-item:last-child .result').appendChild(promiseOutput);

// Demo Async/Await
addOutput(
  "12. Async/Await",
  "Penanganan operasi asinkron dengan syntax yang lebih bersih",
  ""
);
const asyncOutput = demoAsyncAwait();
document.querySelector('.output-item:last-child .result').appendChild(asyncOutput);`})]})}]})}),e.jsx(Q,{id:"hasil-praktikum",title:"Hasil Praktikum",icon:e.jsx(Fn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya telah:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Memahami perbedaan"})," ",e.jsx("code",{children:"let"}),", ",e.jsx("code",{children:"const"}),", dan ",e.jsx("code",{children:"var"})," beserta scope-nya."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menggunakan"})," arrow function untuk penulisan fungsi yang lebih ringkas."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menerapkan"})," template literals untuk string dinamis dan multi-baris."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengaplikasikan"})," destructuring pada objek dan array."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memanfaatkan"})," spread operator (",e.jsx("code",{children:"..."}),") dan rest parameter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menambahkan"})," default parameter pada fungsi."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat class"})," dengan sintaks ES6 dan ",e.jsx("code",{children:"inheritance"})," (",e.jsx("code",{children:"extends"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menggunakan"})," enhanced object literals (shorthand property/method)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memisahkan kode"})," dengan module system (",e.jsx("code",{children:"import/export"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengimplementasikan"})," array modern methods (",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"reduce"}),", dll.)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menangani"})," operasi asinkron dengan ",e.jsx("code",{children:"Promise"})," dan ",e.jsx("code",{children:"async/await"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat proyek"})," dengan struktur folder modular."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menghubungkan"})," file HTML dengan JavaScript modern (",e.jsx("code",{children:'type="module"'}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memanipulasi DOM"})," menggunakan sintaks ES6+."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengambil data eksternal"})," via ",e.jsx("code",{children:"Fetch API"}),"."]})]})]})}),e.jsx(Q,{id:"format-pengumpulan",title:"Format Pengumpulan",icon:e.jsx(jn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Direktori GitHub:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat repository dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_[NIM]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_119140001"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Struktur Folder:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat folder per pertemuan dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"[NAMA]_[NIM]_pertemuan[X]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"johndoe_119140001_pertemuan3"})]}),e.jsx("li",{children:"Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Deadline Pengumpulan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Deadline: ",e.jsx("span",{className:"font-medium",children:"-"})]}),e.jsx("li",{children:"Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari"})]})]})]})}),e.jsxs(Q,{id:"tugas-praktikum",title:"Tugas Praktikum",icon:e.jsx(bn,{className:"w-6 h-6 text-blue-500"}),children:[e.jsxs("div",{className:"border rounded-lg p-6 bg-white shadow-sm mb-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-600 mb-4",children:"Tugas: Aplikasi Personal Dashboard"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Buatlah aplikasi personal dashboard sederhana yang menampilkan informasi yang Kalian pilih sendiri (misalnya jadwal kuliah, daftar tugas, catatan, atau informasi cuaca/waktu)."}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Persyaratan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Interaktif:"})," Pengguna harus dapat menambah, mengedit, atau menghapus informasi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Penyimpanan Lokal:"})," Gunakan localStorage untuk menyimpan data pengguna"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fitur ES6+ Wajib:"}),e.jsxs("ul",{className:"list-circle pl-6 mt-1",children:[e.jsxs("li",{children:["Gunakan ",e.jsx("code",{children:"let"})," dan ",e.jsx("code",{children:"const"})," secara tepat untuk deklarasi variabel"]}),e.jsx("li",{children:"Implementasikan minimal 3 arrow functions"}),e.jsx("li",{children:"Gunakan template literals untuk rendering dinamis"}),e.jsx("li",{children:"Gunakan Fungsi Asinkron (Pilih salah satu Async Await atau Promises) "}),e.jsx("li",{children:"Ada implementasi Classes"})]})]})]})]}),e.jsx(q,{type:"tip",title:"Tantangan Kreatif",children:e.jsx("p",{children:"Daripada membuat aplikasi generik, pikirkan kebutuhan spesifik Kalian sebagai mahasiswa. Aplikasi apa yang akan membantu produktivitas atau organisasi Kalian sehari-hari?"})}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Kriteria Penilaian:"}),e.jsxs("table",{className:"min-w-full border border-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Aspek"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Bobot"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Fungsionalitas dan interaktivitas aplikasi"}),e.jsx("td",{className:"px-4 py-2",children:"30%"})]}),e.jsxs("tr",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2",children:"Implementasi fitur ES6+"}),e.jsx("td",{className:"px-4 py-2",children:"25%"})]}),e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Penggunaan localStorage dan pengelolaan data"}),e.jsx("td",{className:"px-4 py-2",children:"20%"})]}),e.jsxs("tr",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2",children:"Desain UI dan UX"}),e.jsx("td",{className:"px-4 py-2",children:"15%"})]}),e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Dokumentasi dan kerapian kode"}),e.jsx("td",{className:"px-4 py-2",children:"10%"})]})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Dokumentasi yang Diperlukan di Readme:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700",children:[e.jsx("li",{children:"Penjelasan singkat tentang fungsi aplikasi dan fitur-fiturnya"}),e.jsx("li",{children:"Screenshot aplikasi yang sudah jadi"}),e.jsx("li",{children:"Daftar fitur ES6+ yang diimplementasikan"})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(On,{title:"Submit Tugas Praktikum 2",href:"https://forms.gle/Gt26HB44vG3Y2r6d9"})})]})]})}function rf(){return e.jsxs(Hn,{title:"Praktikum React Basics",subtitle:"Memahami konsep dasar React dan membangun aplikasi interaktif dengan Component-Based Architecture",children:[e.jsx(Q,{id:"tujuan",title:"Tujuan Praktikum",icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan praktikum ini, Kalian diharapkan mampu:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Memahami filosofi dan konsep dasar React (Component-Based Architecture)"}),e.jsx("li",{children:"Membuat dan menggunakan functional components dengan hooks"}),e.jsx("li",{children:"Mengelola state dan props dalam aplikasi React"}),e.jsx("li",{children:"Menerapkan event handling dan conditional rendering"}),e.jsx("li",{children:"Membuat form interaktif dengan controlled components"}),e.jsx("li",{children:"Mengelola daftar data dengan keys dan rendering lists"}),e.jsx("li",{children:"Memahami lifecycle components melalui useEffect"}),e.jsx("li",{children:"Mengimplementasikan routing dasar dengan React Router"})]})]})}),e.jsx(Q,{id:"pengenalan",title:"Pengenalan React",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"React adalah library JavaScript yang dikembangkan oleh Facebook (sekarang Meta) untuk membangun antarmuka pengguna (UI) yang interaktif dan efisien. Berbeda dengan framework monolitik, React berfokus pada satu hal dan melakukannya dengan sangat baik: membangun UI dengan pendekatan component-based."}),e.jsx("p",{className:"text-gray-700",children:"Beberapa konsep kunci yang membuat React powerful:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Component-Based"}),": Memecah UI menjadi komponen-komponen yang reusable dan independent"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Declarative"}),": Anda menentukan seperti apa UI seharusnya pada kondisi tertentu, dan React akan memperbarui DOM secara efisien"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Virtual DOM"}),": Representasi memori dari DOM yang memungkinkan perubahan cepat dan efisien"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unidirectional Data Flow"}),": Data mengalir satu arah, membuat aplikasi lebih mudah di-debug"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSX"}),": Ekstensi sintaks JavaScript yang memungkinkan Anda menulis struktur UI dengan sintaks yang mirip HTML"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hooks"}),": Fitur yang memungkinkan functional components menggunakan state dan fitur React lainnya"]})]}),e.jsx(q,{type:"info",title:"React vs Framework Lain",children:e.jsx("p",{children:"React hanya menangani layer view dalam aplikasi. Ini berbeda dengan framework seperti Angular atau Vue yang lebih comprehensive. Dengan React, Anda bebas memilih libraries tambahan untuk state management (Redux, Zustand), routing (React Router), dan lainnya sesuai kebutuhan project."})})]})}),e.jsx(Q,{id:"alat-bahan",title:"Alat dan Bahan",icon:e.jsx(Da,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk mengikuti praktikum ini, Kalian memerlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js dan npm"}),": Versi terbaru (LTS) untuk menjalankan React dan tools development"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Editor"}),": Visual Studio Code dengan ekstensi React/JSX"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Browser Modern"}),": Chrome/Firefox dengan React DevTools terinstal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git"}),": Untuk version control dan submission praktikum"]})]}),e.jsxs(q,{type:"tip",title:"Rekomendasi Ekstensi VS Code",children:[e.jsx("p",{children:"Ekstensi berikut akan meningkatkan produktivitas pengembangan React:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsx("li",{children:"ES7+ React/Redux/React-Native snippets - Snippets untuk React"}),e.jsx("li",{children:"ESLint - Untuk menemukan dan memperbaiki masalah dalam kode"}),e.jsx("li",{children:"Prettier - Untuk memformat kode secara otomatis"}),e.jsx("li",{children:"Auto Import - Mengimpor modul secara otomatis"}),e.jsx("li",{children:"React Developer Tools - Ekstensi browser untuk inspect komponen React"})]})]})]})}),e.jsx(Q,{id:"langkah-praktikum",title:"Langkah Praktikum",icon:e.jsx(ft,{className:"w-6 h-6 text-blue-500"}),children:e.jsx(yt,{steps:[{id:1,title:"Mempersiapkan Project React",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Kita akan menggunakan Create React App (CRA) untuk membuat project baru. CRA adalah tool resmi yang membantu setup React project tanpa konfigurasi build yang rumit."}),e.jsx(O,{title:"Membuat Project Baru",code:`# Buat project React baru
npx create-react-app my-react-app

# Masuk ke direktori project
cd my-react-app

# Jalankan application dalam development mode
npm start`,language:"bash"}),e.jsx("p",{className:"text-gray-700",children:"Struktur project yang dihasilkan:"}),e.jsx(O,{title:"Struktur Project",code:`my-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── reportWebVitals.js
├── .gitignore
├── package.json
└── README.md`,language:"bash"}),e.jsx("p",{className:"text-gray-700",children:"Mari modifikasi struktur folder untuk praktikum kita:"}),e.jsx(O,{title:"Struktur Folder yang Lebih Baik",code:`my-react-app/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── TaskItem/
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskItem.css
│   │   └── TaskForm/
│   │       ├── TaskForm.jsx
│   │       └── TaskForm.css
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   └── About/
│   │       └── About.jsx
│   ├── hooks/             # Custom hooks
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css`,language:"bash"}),e.jsxs("p",{className:"text-gray-700",children:["Hapus konten default ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"App.js"})," dan ganti dengan component App yang lebih sederhana:"]}),e.jsx(O,{title:"src/App.jsx",code:`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Task Manager</h1>
        <p>Selamat datang di aplikasi Task Manager!</p>
      </header>
    </div>
  );
}

export default App;`,language:"jsx"}),e.jsx(q,{type:"tip",children:e.jsx("p",{children:"Dalam pengembangan modern React, kita menggunakan functional components dengan Hooks daripada class components. Pendekatan ini membuat kode lebih ringkas dan mudah dipahami."})})]})},{id:2,title:"Membuat Component Pertama",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Component adalah blok pembangun utama aplikasi React. Mari kita buat beberapa komponen dasar untuk aplikasi Task Manager kita."}),e.jsx("p",{className:"text-gray-700",children:"Pertama, buat komponen Header:"}),e.jsx(O,{title:"src/components/Header/Header.jsx",code:`import React from 'react';
import './Header.css';

function Header({ title, description }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}

export default Header;`,language:"jsx"}),e.jsx(O,{title:"src/components/Header/Header.css",code:`.header {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.header p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
}`,language:"css"}),e.jsx("p",{className:"text-gray-700",children:"Selanjutnya, buat komponen TaskItem untuk menampilkan satu tugas:"}),e.jsx(O,{title:"src/components/TaskItem/TaskItem.jsx",code:`import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={\`task-item \${task.completed ? 'completed' : ''}\`}>
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggleComplete(task.id)} 
        />
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-actions">
        <button 
          className="delete-btn" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;`,language:"jsx"}),e.jsx(O,{title:"src/components/TaskItem/TaskItem.css",code:`.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.task-item.completed {
  background-color: #e9ecef;
  opacity: 0.7;
}

.task-content {
  display: flex;
  align-items: center;
}

.task-title {
  margin-left: 0.5rem;
}

.completed .task-title {
  text-decoration: line-through;
  color: #6c757d;
}

.task-actions {
  display: flex;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #c82333;
}`,language:"css"}),e.jsx("p",{className:"text-gray-700",children:"Buat komponen form untuk menambahkan task baru:"}),e.jsx(O,{title:"src/components/TaskForm/TaskForm.jsx",code:`import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    // Buat task baru
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    
    // Kirim task ke parent component
    onAddTask(newTask);
    
    // Reset form
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;`,language:"jsx"}),e.jsx(O,{title:"src/components/TaskForm/TaskForm.css",code:`.task-form {
  display: flex;
  margin-bottom: 1.5rem;
}

.task-form input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.task-form button {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.task-form button:hover {
  background-color: #218838;
}`,language:"css"}),e.jsx(q,{type:"info",title:"Props dalam React",children:e.jsx("p",{children:"Props (properties) adalah cara kita mengirim data dari parent component ke child component. Props bersifat read-only dan membantu membuat komponen menjadi reusable. Perhatikan bagaimana kita menerima dan menggunakan props dalam komponen di atas."})})]})},{id:3,title:"Mengelola State dengan Hooks",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"State adalah data yang dikelola dalam component dan dapat berubah sepanjang lifecycle component. Dengan Hooks, kita bisa mengelola state dalam functional components."}),e.jsx("p",{className:"text-gray-700",children:"Mari buat Home page component yang mengintegrasikan semua komponen sebelumnya dan mengelola state:"}),e.jsx(O,{title:"src/pages/Home/Home.jsx",code:`import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import './Home.css';

function Home() {
  // State untuk menyimpan daftar tasks
  const [tasks, setTasks] = useState([]);
  
  // Load tasks dari localStorage saat component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  
  // Simpan tasks ke localStorage setiap kali tasks berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`,language:"jsx"}),e.jsx(O,{title:"src/pages/Home/Home.css",code:`.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.stats {
  display: flex;
  justify-content: space-between;
  background-color: #f1f8ff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.empty-message {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  color: #6c757d;
}`,language:"css"}),e.jsx("p",{className:"text-gray-700",children:"Perbarui App.jsx untuk menggunakan komponen Home:"}),e.jsx(O,{title:"src/App.jsx",code:`import React from 'react';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;`,language:"jsx"}),e.jsxs(q,{type:"info",title:"React Hooks",children:[e.jsx("p",{children:"Pada contoh di atas, kita menggunakan dua hooks penting:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"useState"})," - Untuk menambahkan state ke functional component"]}),e.jsxs("li",{children:[e.jsx("code",{children:"useEffect"})," - Untuk melakukan side effects dalam functional component, seperti data fetching atau interaksi dengan DOM"]})]}),e.jsx("p",{className:"mt-2",children:"Perhatikan array dependensi pada useEffect yang memungkinkan kita mengontrol kapan effect dijalankan."})]})]})},{id:4,title:"Menerapkan Routing dengan React Router",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"React Router memungkinkan kita membangun aplikasi dengan navigasi tanpa memuat ulang halaman (single-page application)."}),e.jsx("p",{className:"text-gray-700",children:"Pertama, install React Router:"}),e.jsx(O,{title:"Install React Router",code:"npm install react-router-dom",language:"bash"}),e.jsx("p",{className:"text-gray-700",children:"Buat komponen About page:"}),e.jsx(O,{title:"src/pages/About/About.jsx",code:`import React from 'react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  return (
    <div className="about">
      <Header 
        title="About Task Manager" 
        description="Learn more about our app" 
      />
      
      <main className="container">
        <div className="about-content">
          <h2>Welcome to Task Manager</h2>
          <p>
            Task Manager adalah aplikasi sederhana yang dibuat dengan React untuk membantu
            Anda mengelola tugas sehari-hari dengan mudah dan efisien.
          </p>
          
          <h3>Fitur:</h3>
          <ul>
            <li>Tambah, hapus, dan tandai tugas sebagai selesai</li>
            <li>Penyimpanan lokal di browser Anda</li>
            <li>Antarmuka pengguna yang responsif dan intuitif</li>
            <li>Statistik tugas real-time</li>
          </ul>
          
          <h3>Teknologi:</h3>
          <p>
            Aplikasi ini dibangun menggunakan React dengan functional components dan Hooks.
            Kami juga menggunakan localStorage untuk menyimpan data Anda secara lokal.
          </p>
          
          <h3>Tentang Developer:</h3>
          <p>
            Task Manager dikembangkan sebagai bagian dari praktikum React Basics.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;`,language:"jsx"}),e.jsx(O,{title:"src/pages/About/About.css",code:`.about-content {
  background-color: white;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-content h2 {
  color: #3498db;
  margin-top: 0;
}

.about-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.about-content ul {
  padding-left: 1.5rem;
}

.about-content li {
  margin-bottom: 0.5rem;
}`,language:"css"}),e.jsx("p",{className:"text-gray-700",children:"Buat komponen navigasi:"}),e.jsx(O,{title:"src/components/Navbar/Navbar.jsx",code:`import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Task Manager</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;`,language:"jsx"}),e.jsx(O,{title:"src/components/Navbar/Navbar.css",code:`.navbar {
  background-color: #2c3e50;
  padding: 1rem 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #3498db;
}`,language:"css"}),e.jsx("p",{className:"text-gray-700",children:"Update App.jsx untuk mengimplementasikan routing:"}),e.jsx(O,{title:"src/App.jsx",code:`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`,language:"jsx"}),e.jsx("p",{className:"text-gray-700",children:"Perbarui App.css:"}),e.jsx(O,{title:"src/App.css",code:`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f7f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}`,language:"css"}),e.jsx(q,{type:"tip",title:"React Router",children:e.jsx("p",{children:"React Router menggunakan client-side routing, yang berarti navigasi antar halaman tidak memerlukan permintaan ke server untuk halaman baru. Hal ini membuat navigasi sangat cepat dan memberikan pengalaman yang lebih baik."})})]})},{id:5,title:"Membuat Custom Hook",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Custom Hook memungkinkan kita mengekstrak logika komponen ke fungsi yang dapat digunakan kembali. Mari buat custom hook untuk mengelola state tasks dengan localStorage."}),e.jsx(O,{title:"src/hooks/useLocalStorage.js",code:`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // State untuk menyimpan value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Dapatkan dari localStorage berdasarkan key
      const item = window.localStorage.getItem(key);
      // Parse JSON jika ada, jika tidak return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Jika error, return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Effect untuk update localStorage ketika storedValue berubah
  useEffect(() => {
    try {
      // Simpan ke localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;`,language:"javascript"}),e.jsx("p",{className:"text-gray-700",children:"Sekarang kita bisa memodifikasi Home component untuk menggunakan custom hook ini:"}),e.jsx(O,{title:"src/pages/Home/Home.jsx (Updated)",code:`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

function Home() {
  // Gunakan custom hook untuk tasks
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`,language:"jsx"}),e.jsxs(q,{type:"info",title:"Custom Hooks",children:[e.jsx("p",{children:"Custom Hook adalah mekanisme untuk mengekstrak logika stateful dari komponen sehingga bisa digunakan kembali. Dengan membuat custom hook, kita bisa:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsx("li",{children:"Mengurangi duplikasi kode"}),e.jsx("li",{children:"Membuat logika yang kompleks lebih mudah dipahami"}),e.jsx("li",{children:"Memisahkan concern dengan lebih baik"})]}),e.jsx("p",{className:"mt-2",children:'Nama custom hook harus dimulai dengan "use" agar React tahu bahwa itu adalah hook dan bisa menerapkan aturan hooks padanya.'})]})]})},{id:6,title:"Menerapkan Context API",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Context API memungkinkan kita berbagi state antar komponen tanpa harus mengoper props secara manual di setiap level. Mari buat TaskContext untuk mengelola state tasks."}),e.jsx(O,{title:"src/context/TaskContext.jsx",code:`import React, { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  const dispatch = (action) => {
    setTasks(taskReducer(tasks, action));
  };

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
                        }`,language:"jsx"}),e.jsx("p",{className:"text-gray-700",children:"Update App.jsx untuk menyediakan TaskContext:"}),e.jsx(O,{title:"src/App.jsx (Updated)",code:`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;`,language:"jsx"}),e.jsx("p",{className:"text-gray-700",children:"Sekarang kita bisa memodifikasi Home component untuk menggunakan TaskContext:"}),e.jsx(O,{title:"src/pages/Home/Home.jsx (Updated with Context)",code:`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  const { tasks, dispatch } = useTasks();
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: taskId });
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`,language:"jsx"}),e.jsxs(q,{type:"info",title:"Context API",children:[e.jsx("p",{children:"Context API sangat berguna untuk state yang perlu diakses oleh banyak komponen di berbagai level dalam aplikasi. Dengan Context:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsx("li",{children:'Kita menghindari "prop drilling" (mengoper props melalui banyak level komponen)'}),e.jsx("li",{children:"State management menjadi lebih terpusat"}),e.jsx("li",{children:"Komponen menjadi lebih bersih karena tidak perlu menerima props yang tidak digunakan"})]}),e.jsx("p",{className:"mt-2",children:"Untuk state management yang lebih kompleks, kita bisa mempertimbangkan Redux, tetapi Context API seringkali cukup untuk banyak kasus penggunaan."})]})]})},{id:7,title:"Testing Komponen dengan Jest dan React Testing Library",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Testing adalah bagian penting dari pengembangan aplikasi. Mari kita buat beberapa test untuk komponen kita."}),e.jsx("p",{className:"text-gray-700",children:"Pertama, pastikan testing library sudah terinstall (sudah termasuk dalam Create React App):"}),e.jsx(O,{title:"Install Testing Library (jika belum ada)",code:"npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event",language:"bash"}),e.jsx("p",{className:"text-gray-700",children:"Buat test untuk TaskItem component:"}),e.jsx(O,{title:"src/components/TaskItem/TaskItem.test.jsx",code:`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    completed: false
  };

  const mockOnDelete = jest.fn();
  const mockOnToggleComplete = jest.fn();

  it('renders task title', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggleComplete when checkbox is clicked', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
    
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
    
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

 it('shows completed style when task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    render(
      <TaskItem 
        task={completedTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
  
    const taskItem = screen.getByText('Test Task').closest('.task-item');
    expect(taskItem).toHaveClass('completed');
  });  
});`,language:"javascript"}),e.jsx("p",{className:"text-gray-700",children:"Buat test untuk TaskForm component:"}),e.jsx(O,{title:"src/components/TaskForm/TaskForm.test.jsx",code:`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  const mockOnAddTask = jest.fn();

  beforeEach(() => {
    mockOnAddTask.mockClear();
  });

  it('renders form with input and button', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    expect(screen.getByPlaceholderText('Tambahkan tugas baru...')).toBeInTheDocument();
    expect(screen.getByText('Tambah')).toBeInTheDocument();
  });

  it('calls onAddTask with new task when form is submitted', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    
    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
    expect(mockOnAddTask.mock.calls[0][0]).toEqual({
      id: expect.any(Number),
      title: 'New Task',
      completed: false
    });
  });

  it('does not call onAddTask when input is empty', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const button = screen.getByText('Tambah');
    fireEvent.click(button);
    
    expect(mockOnAddTask).not.toHaveBeenCalled();
  });

  it('clears input after form submission', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });
});`,language:"javascript"}),e.jsx("p",{className:"text-gray-700",children:"Jalankan test dengan perintah:"}),e.jsx(O,{title:"Run Tests",code:"npm test",language:"bash"}),e.jsxs(q,{type:"tip",title:"Testing Best Practices",children:[e.jsx("p",{children:"Beberapa praktik terbaik dalam testing React components:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsx("li",{children:"Fokus pada pengujian perilaku, bukan implementasi"}),e.jsx("li",{children:"Gunakan React Testing Library yang mendorong praktik testing yang lebih baik"}),e.jsx("li",{children:"Test interaksi pengguna, bukan state internal"}),e.jsx("li",{children:"Buat test yang kecil dan terfokus"}),e.jsx("li",{children:"Gunakan mock untuk dependensi eksternal"})]}),e.jsx("p",{className:"mt-2",children:"Testing membantu memastikan komponen kita bekerja seperti yang diharapkan dan mencegah regresi saat melakukan perubahan."})]})]})}]})}),e.jsx(Q,{id:"hasil-praktikum",title:"Hasil Praktikum",icon:e.jsx(Fn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya telah:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Memahami"})," filosofi dan konsep dasar React (Component-Based Architecture)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat"})," functional components dengan JSX dan hooks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengelola"})," state dengan ",e.jsx("code",{children:"useState"})," dan side effects dengan ",e.jsx("code",{children:"useEffect"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menerapkan"})," props untuk komunikasi antar komponen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat"})," form interaktif dengan controlled components."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengimplementasikan"})," event handling dan conditional rendering."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengelola"})," daftar data dengan keys dan rendering lists."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat"})," aplikasi multi-halaman dengan React Router."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mendesain"})," struktur folder yang modular untuk aplikasi React."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat"})," custom hooks untuk logika yang reusable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menggunakan"})," Context API untuk state management global."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menulis"})," test unit untuk komponen dengan Jest dan React Testing Library."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengoptimalkan"})," performa dengan proper penggunaan dependencies array di useEffect."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menyimpan data"})," secara lokal dengan localStorage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menerapkan"})," styling modular dengan CSS per komponen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Membuat"})," reusable UI components (Header, TaskItem, TaskForm)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menggunakan"})," proper TypeScript/PropTypes untuk type checking (opsional)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menerapkan"})," clean code principles dalam struktur komponen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memahami"})," lifecycle komponen melalui useEffect hook."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mengimplementasikan"})," navigation bar dengan React Router Link."]})]}),e.jsxs(q,{title:"Aplikasi yang Dibangun",type:"tip",children:[e.jsxs("p",{className:"mt-2",children:["Kalian telah berhasil membangun sebuah ",e.jsx("strong",{children:"Task Manager Application"})," dengan fitur:"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-1",children:[e.jsx("li",{children:"Menambah, menghapus, dan menandai tugas sebagai selesai"}),e.jsx("li",{children:"Penyimpanan data tugas di localStorage"}),e.jsx("li",{children:"Statistik tugas real-time (total, selesai, belum selesai)"}),e.jsx("li",{children:"Navigasi multi-halaman (Home dan About)"}),e.jsx("li",{children:"Responsive UI dengan styling modular"}),e.jsx("li",{children:"Form validasi sederhana"})]})]})]})}),e.jsx(Q,{id:"format-pengumpulan",title:"Format Pengumpulan",icon:e.jsx(jn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Direktori GitHub:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat repository dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_[NIM]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_119140001"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Struktur Folder:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat folder per pertemuan dengan format: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"[NAMA]_[NIM]_pertemuan[X]"})]}),e.jsxs("li",{children:["Contoh: ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"johndoe_119140001_pertemuan3"})]}),e.jsx("li",{children:"Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Deadline Pengumpulan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Deadline: ",e.jsx("span",{className:"font-medium",children:"-"})]}),e.jsx("li",{children:"Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari"})]})]})]})}),e.jsxs(Q,{id:"tugas-praktikum",title:"Tugas Praktikum",icon:e.jsx(bn,{className:"w-6 h-6 text-blue-500"}),children:[e.jsxs("div",{className:"border rounded-lg p-6 bg-white shadow-sm mb-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-600 mb-4",children:"Tugas: Aplikasi Manajemen Buku Pribadi"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Buatlah aplikasi manajemen buku pribadi yang memungkinkan pengguna mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli."}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Persyaratan Wajib:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fitur Dasar:"}),e.jsxs("ul",{className:"list-circle pl-6 mt-1",children:[e.jsx("li",{children:"Menambah buku baru (judul, penulis, status: milik/baca/beli)"}),e.jsx("li",{children:"Mengedit dan menghapus buku"}),e.jsx("li",{children:"Filter buku berdasarkan status"}),e.jsx("li",{children:"Pencarian buku"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Teknologi React:"}),e.jsxs("ul",{className:"list-circle pl-6 mt-1",children:[e.jsxs("li",{children:["Gunakan ",e.jsx("code",{children:"useState"})," dan ",e.jsx("code",{children:"useEffect"})]}),e.jsx("li",{children:"Buat minimal 3 komponen reusable"}),e.jsx("li",{children:"Implementasikan Context API untuk state management"}),e.jsx("li",{children:"Gunakan React Router untuk navigasi multi-halaman"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Penyimpanan:"})," Gunakan localStorage untuk menyimpan data"]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Persyaratan Teknis:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Gunakan functional components dengan Hooks"}),e.jsx("li",{children:"Implementasikan minimal 2 custom hooks"}),e.jsx("li",{children:"Gunakan PropTypes untuk type checking"}),e.jsx("li",{children:"Buat minimal 5 test unit dengan React Testing Library"}),e.jsx("li",{children:"Terapkan error handling untuk form input"})]})]}),e.jsx(q,{type:"tip",title:"Tips Implementasi",children:e.jsxs("p",{children:["Struktur folder yang disarankan:",e.jsx(O,{code:`src/
├── components/
│   ├── BookForm/
│   ├── BookList/
│   └── BookFilter/
├── pages/
│   ├── Home/
│   └── Stats/
├── hooks/
│   ├── useLocalStorage.js
│   └── useBookStats.js
├── context/
│   └── BookContext.js
└── App.js`,language:"bash",showLineNumbers:!1})]})}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Kriteria Penilaian:"}),e.jsxs("table",{className:"min-w-full border border-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Aspek"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Bobot"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Fungsi dasar aplikasi"}),e.jsx("td",{className:"px-4 py-2",children:"30%"})]}),e.jsxs("tr",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2",children:"Penerapan konsep React"}),e.jsx("td",{className:"px-4 py-2",children:"25%"})]}),e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Struktur kode dan organisasi"}),e.jsx("td",{className:"px-4 py-2",children:"20%"})]}),e.jsxs("tr",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2",children:"Testing dan error handling"}),e.jsx("td",{className:"px-4 py-2",children:"15%"})]}),e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Dokumentasi"}),e.jsx("td",{className:"px-4 py-2",children:"10%"})]})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Dokumentasi yang Diperlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1 text-gray-700",children:[e.jsxs("li",{children:["README.md berisi:",e.jsxs("ul",{className:"list-circle pl-6 mt-1",children:[e.jsx("li",{children:"Deskripsi aplikasi"}),e.jsx("li",{children:"Instruksi instalasi dan menjalankan"}),e.jsx("li",{children:"Screenshot antarmuka"}),e.jsx("li",{children:"Penjelasan fitur React yang digunakan"})]})]}),e.jsx("li",{children:"Komentar dalam kode untuk bagian penting"}),e.jsx("li",{children:"Laporan testing (screenshots hasil test)"})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(On,{title:"Submit Tugas Praktikum 3",href:"https://forms.gle/W7Vf4C821Rezzq9R7"})})]})]})}function sf(){return e.jsxs(Hn,{title:"Praktikum Python Dasar",subtitle:"Mengenal dasar-dasar Python dan pemrograman berbasis objek",children:[e.jsx(Q,{id:"tujuan",title:"Tujuan Praktikum",icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan praktikum ini, kalian diharapkan mampu:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Memahami konsep dasar Python sebagai bahasa pemrograman"}),e.jsx("li",{children:"Menguasai penggunaan variabel, tipe data, dan operator dalam Python"}),e.jsx("li",{children:"Mengimplementasikan struktur kendali (conditionals dan loops)"}),e.jsx("li",{children:"Membuat dan menggunakan fungsi dalam Python"}),e.jsx("li",{children:"Bekerja dengan koleksi data seperti list, dictionary, dan set"})]})]})}),e.jsx(Q,{id:"dasar-teori",title:"Dasar Teori",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs(q,{type:"info",title:"Apa itu Python?",children:[e.jsx("p",{children:"Python adalah bahasa pemrograman interpretatif multiguna dengan filosofi perancangan yang berfokus pada tingkat keterbacaan kode. Diciptakan oleh Guido van Rossum dan pertama kali dirilis pada tahun 1991, Python didesain dengan penekanan pada keterbacaan kode."}),e.jsx("p",{className:"mt-2",children:"Menurut survey Stack Overflow Developer Survey 2024, Python tetap menjadi salah satu bahasa pemrograman paling populer di dunia, terutama di bidang data science, machine learning, dan AI."}),e.jsx("p",{className:"mt-2",children:"Python dikenal dengan sintaksisnya yang bersih dan mudah dibaca, yang membuatnya menjadi bahasa yang ideal untuk pemula maupun profesional. Tidak seperti bahasa lain yang menggunakan kurung kurawal, Python menggunakan indentasi untuk mendefinisikan blok kode."})]}),e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 my-4",children:"Karakteristik Utama Python"}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Karakteristik"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Deskripsi"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Contoh"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Interpreted"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Kode dieksekusi langsung tanpa perlu dikompilasi terlebih dahulu"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:"python script.py"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Dinamis"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Tipe data ditentukan saat runtime"}),e.jsx("td",{className:"px-4 py-2",children:e.jsxs("code",{children:["x = 5 # x adalah integer",e.jsx("br",{}),'x = "Python" # sekarang x adalah string']})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Berorientasi Objek"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Mendukung konsep OOP seperti class dan inheritance"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
                      `})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Indentasi"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Menggunakan indentasi untuk mendefinisikan blok kode"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
if x > 0:
    print("Positif")
else:
    print("Negatif")
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Multi-paradigma"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Mendukung beberapa paradigma pemrograman"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`# Functional
data = [1, 2, 3, 4, 5]
result = list(map(lambda x: x * 2, data))`})})})]})]})]})]})]})}),e.jsx(Q,{id:"dasar-teori-2",title:"Dasar Teori (Lanjutan)",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Interpreter Python"}),e.jsx("p",{children:"Python menggunakan interpreter untuk mengeksekusi kode. Ada beberapa implementasi interpreter Python:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"CPython"}),": Implementasi standar, ditulis dalam C"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PyPy"}),": Implementasi dengan JIT compiler, lebih cepat untuk beberapa aplikasi"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jython"}),": Implementasi yang berjalan di JVM"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IronPython"}),": Implementasi untuk .NET Framework"]})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Dasar-dasar Python"}),e.jsxs("div",{children:[e.jsx("p",{children:"Python memiliki beberapa tipe data dasar:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"int"}),": Bilangan bulat (1, 100, -10)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"float"}),": Bilangan desimal (3.14, -0.001)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"str"}),`: String ("Hello", 'Python')`]}),e.jsxs("li",{children:[e.jsx("code",{children:"bool"}),": Boolean (True, False)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"None"}),": Tipe khusus untuk menyatakan nilai kosong"]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-medium text-gray-700",children:"Tipe Data Koleksi"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"list"}),": Koleksi terurut yang bisa diubah [1, 2, 3]"]}),e.jsxs("li",{children:[e.jsx("code",{children:"tuple"}),": Koleksi terurut yang tidak bisa diubah (1, 2, 3)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"dict"}),": Kumpulan pasangan key-value"," ","{'nama': 'Budi', 'usia': 20}"]}),e.jsxs("li",{children:[e.jsx("code",{children:"set"}),": Kumpulan item unik tanpa urutan ","{","1, 2, 3","}"]})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-lg font-medium text-gray-800",children:"Python tidak hanya populer untuk pengembangan web, tetapi juga banyak digunakan di berbagai bidang:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6",children:[{title:"Data Science",tech:"NumPy, Pandas, Matplotlib",color:"bg-blue-50"},{title:"Machine Learning",tech:"TensorFlow, PyTorch, Scikit-learn",color:"bg-green-50"},{title:"Web Development",tech:"Django, Flask, FastAPI",color:"bg-yellow-50"},{title:"Automation",tech:"Selenium, PyAutoGUI, Scrapy",color:"bg-purple-50"},{title:"Game Development",tech:"Pygame, Panda3D",color:"bg-red-50"},{title:"Scientific Computing",tech:"SciPy, Sympy",color:"bg-blue-50"}].map((i,d)=>e.jsxs("div",{className:`${i.color} p-4 rounded-xl shadow-md hover:scale-105 transition-transform`,children:[e.jsx("h4",{className:"font-semibold text-blue-700 text-lg",children:i.title}),e.jsx("p",{className:"text-sm text-gray-700 mt-1",children:i.tech})]},d))})]})]})}),e.jsx(Q,{id:"fitur-modern",title:"Fitur Python Modern",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"mt-12",children:e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 my-4",children:"Fitur Python Modern"}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Fitur"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Deskripsi"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Contoh"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"List Comprehension"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Cara singkat untuk membuat list"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
squares = [x**2 for x in range(10)]
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"f-strings"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"String formatting yang mudah"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:'f"Hello, {name}!"'})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Type Hints"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Petunjuk tipe data"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
def greet(name: str) -> str:
    return f"Hello {name}"
                        `})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Async/Await"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Dukungan untuk programming asinkron"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
async def fetch_data():
    # code here
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Walrus Operator"}),e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Assignment dalam ekspresi"}),e.jsx("td",{className:"px-4 py-2",children:e.jsx("code",{children:e.jsx("pre",{children:`
if (n := len(data)) > 10:
    print(f"Data terlalu banyak ({n} items)")
`})})})]})]})]})]})})})}),e.jsx(Q,{id:"prasyarat",title:"Prasyarat",icon:e.jsx(bn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Sebelum memulai praktikum ini, pastikan kalian memiliki:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Python 3.8 atau versi lebih baru yang terinstall"}),e.jsx("li",{children:"Dasar pemahaman konsep pemrograman"}),e.jsx("li",{children:"Editor teks atau IDE seperti VS Code, PyCharm, dll."})]})]})}),e.jsx(Q,{id:"alat-bahan",title:"Alat dan Bahan",icon:e.jsx(Da,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk mengikuti praktikum ini, kalian memerlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Python 3.8+"}),": Pastikan Python sudah terinstall dengan menjalankan ",e.jsx("code",{children:"python --version"})," di terminal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Editor"}),": VSCode, PyCharm, Sublime Text, IDLE, atau editor teks lainnya"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Terminal atau Command Prompt"}),": Untuk menjalankan program Python"]})]}),e.jsx(q,{type:"tip",title:"Rekomendasi",children:e.jsx("p",{children:"Kami menyarankan menggunakan Visual Studio Code dengan ekstensi Python untuk pengalaman pengembangan yang lebih baik. VSCode menyediakan fitur seperti debugging, IntelliSense, dan linting untuk Python."})})]})}),e.jsx(Q,{id:"langkah-praktikum",title:"Langkah Praktikum",icon:e.jsx(ft,{className:"w-6 h-6 text-blue-500"}),children:e.jsx(yt,{steps:[{id:1,title:"Mengenal Python dan Cara Menjalankannya",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Buat sebuah file dengan nama"," ",e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded",children:"hello.py"})," ","dan tulis kode pertama Python kalian."]}),e.jsx(O,{title:"hello.py",code:`# Program Python pertama
print("Hello, World!")
print("Selamat datang di praktikum Python")
print("Saya sedang belajar Python")`,language:"python"}),e.jsx("p",{className:"text-gray-700",children:"Untuk menjalankan file Python, buka terminal, arahkan ke direktori tempat file tersebut berada, kemudian ketik:"}),e.jsx(O,{title:"Terminal",code:"python hello.py",language:"bash"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"Python adalah bahasa yang diinterpretasi, artinya kode Python tidak perlu dikompilasi sebelum dijalankan. Interpreter Python membaca dan menjalankan kode secara langsung."})}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded-md",children:[e.jsx("h4",{className:"font-medium text-gray-800",children:"Output yang diharapkan:"}),e.jsxs("pre",{className:"bg-black text-white p-3 rounded mt-2",children:["Hello, World!",e.jsx("br",{}),"Selamat datang di praktikum Python",e.jsx("br",{}),"Saya sedang belajar Python"]})]})]})},{id:2,title:"Variabel dan Tipe Data",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Python memiliki beberapa tipe data dasar. Mari mengenal variabel dan tipe data dalam Python."}),e.jsx(O,{title:"variables.py",code:`# Variabel dan tipe data dasar
nama = "Budi Santoso"    # string
usia = 20                # integer
tinggi = 175.5           # float
is_mahasiswa = True      # boolean

# Menampilkan nilai variabel
print("Nama:", nama)
print("Usia:", usia, "tahun")
print("Tinggi:", tinggi, "cm")
print("Status mahasiswa:", is_mahasiswa)

# Memeriksa tipe data
print("\\nTipe data variabel:")
print("Tipe data nama:", type(nama))
print("Tipe data usia:", type(usia))
print("Tipe data tinggi:", type(tinggi))
print("Tipe data is_mahasiswa:", type(is_mahasiswa))

# Konversi tipe data
usia_str = str(usia)
print("\\nUsia (string):", usia_str)
print("Tipe data usia_str:", type(usia_str))

# Input dari user
print("\\nInput dari pengguna:")
nama_input = input("Masukkan nama Anda: ")
usia_input = int(input("Masukkan usia Anda: "))  # konversi input ke integer
print(f"Halo {nama_input}, usia Anda {usia_input} tahun")`,language:"python"}),e.jsx(q,{type:"tip",children:e.jsx("p",{children:'Di Python, kita tidak perlu mendeklarasikan tipe data secara eksplisit. Python akan menentukan tipe data secara otomatis berdasarkan nilai yang diberikan. Ini disebut dengan "dynamic typing".'})}),e.jsx(q,{type:"info",children:e.jsxs("p",{children:[e.jsx("code",{children:"input()"})," selalu mengembalikan string. Jika kita ingin mendapatkan tipe data lain, kita perlu melakukan konversi secara manual, seperti"," ",e.jsx("code",{children:"int(input())"})," untuk mendapatkan integer."]})})]})},{id:3,title:"Operator dan Ekspresi",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Python mendukung berbagai jenis operator untuk melakukan operasi pada variabel dan nilai."}),e.jsx(O,{title:"operators.py",code:`# Operator aritmatika
a = 10
b = 3

print("Operator Aritmatika:")
print("a + b =", a + b)    # Penjumlahan
print("a - b =", a - b)    # Pengurangan
print("a * b =", a * b)    # Perkalian
print("a / b =", a / b)    # Pembagian (hasil float)
print("a // b =", a // b)  # Pembagian bulat
print("a % b =", a % b)    # Modulo (sisa pembagian)
print("a ** b =", a ** b)  # Pangkat

# Operator perbandingan
print("\\nOperator Perbandingan:")
print("a == b:", a == b)  # Sama dengan
print("a != b:", a != b)  # Tidak sama dengan
print("a > b:", a > b)    # Lebih besar dari
print("a < b:", a < b)    # Lebih kecil dari
print("a >= b:", a >= b)  # Lebih besar atau sama dengan
print("a <= b:", a <= b)  # Lebih kecil atau sama dengan

# Operator logika
x = True
y = False

print("\\nOperator Logika:")
print("x and y:", x and y)  # AND
print("x or y:", x or y)    # OR
print("not x:", not x)      # NOT

# Operator assignment
c = 5
print("\\nOperator Assignment:")
print("Nilai awal c =", c)
c += 3  # Sama dengan c = c + 3
print("Setelah c += 3, c =", c)
c -= 1  # Sama dengan c = c - 1
print("Setelah c -= 1, c =", c)
c *= 2  # Sama dengan c = c * 2
print("Setelah c *= 2, c =", c)
c /= 4  # Sama dengan c = c / 4
print("Setelah c /= 4, c =", c)`,language:"python"}),e.jsx(q,{type:"info",children:e.jsxs("p",{children:["Python juga mendukung operator identitas (",e.jsx("code",{children:"is"}),","," ",e.jsx("code",{children:"is not"}),") untuk memeriksa apakah dua variabel merujuk ke objek yang sama dalam memori, dan operator keanggotaan (",e.jsx("code",{children:"in"}),", ",e.jsx("code",{children:"not in"}),") untuk memeriksa keanggotaan dalam sebuah sequence (string, list, tuple, dll)."]})})]})},{id:4,title:"Struktur Kendali: Percabangan",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Struktur kendali digunakan untuk mengontrol alur eksekusi program. Mari belajar tentang percabangan."}),e.jsx(O,{title:"conditionals.py",code:`# Contoh if-else
nilai = int(input("Masukkan nilai (0-100): "))
grade = ""

# If-elif-else
if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "E"

print(f"Nilai: {nilai}, Grade: {grade}")

# Keterangan kelulusan
if nilai >= 60:
    print("Status: LULUS")
else:
    print("Status: TIDAK LULUS")

# Nested if
print("\\nKeterangan:")
if nilai >= 60:
    if nilai >= 90:
        print("Excellent!")
    elif nilai >= 80:
        print("Great job!")
    else:
        print("Good, keep improving!")
else:
    if nilai >= 40:
        print("Need more practice")
    else:
        print("Need serious attention")

# Ternary operator
status = "LULUS" if nilai >= 60 else "TIDAK LULUS"
print(f"Status (ternary): {status}")

# Multiple conditions
if nilai >= 80 and nilai <= 100:
    print("Nilai sangat baik")
elif nilai >= 60 or nilai == 55:
    print("Nilai cukup")
elif not (nilai < 40):
    print("Nilai di atas 40")`,language:"python"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"Python tidak menggunakan kurung kurawal untuk blok kode seperti bahasa lain. Sebagai gantinya, Python menggunakan indentasi (biasanya 4 spasi) untuk mengelompokkan pernyataan dalam blok logika yang sama."})})]})},{id:5,title:"Struktur Kendali: Perulangan",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Python menyediakan dua jenis loop utama: ",e.jsx("code",{children:"for"})," ","dan ",e.jsx("code",{children:"while"}),". Mari belajar cara menggunakannya."]}),e.jsx(O,{title:"loops.py",code:`# For loop dengan range
print("For loop dengan range:")
for i in range(5):  # 0, 1, 2, 3, 4
    print(i, end=" ")
print()

# Range dengan start, stop, step
print("\\nRange dengan start, stop, step:")
for i in range(2, 10, 2):  # 2, 4, 6, 8
    print(i, end=" ")
print()

# For loop dengan list
print("\\nFor loop dengan list:")
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
for item in buah:
    print(item)

# For loop dengan enumerate (mendapatkan indeks)
print("\\nFor loop dengan enumerate:")
for index, item in enumerate(buah):
    print(f"Index {index}: {item}")

# While loop
print("\\nWhile loop:")
count = 0
while count < 5:
    print(count, end=" ")
    count += 1
print()

# While dengan break
print("\\nWhile dengan break:")
angka = 0
while True:
    print(angka, end=" ")
    angka += 1
    if angka >= 5:
        break
print()

# For loop dengan continue
print("\\nFor loop dengan continue:")
for i in range(10):
    if i % 2 == 0:  # Skip bilangan genap
        continue
    print(i, end=" ")
print()

# Nested loops
print("\\nNested loops (multiplication table):")
for i in range(1, 5):
    for j in range(1, 5):
        print(f"{i}x{j}={i*j}", end="\\t")
    print()

# Loop dengan else
print("\\nLoop dengan else:")
for i in range(5):
    print(i, end=" ")
else:
    print("Loop selesai")

# List comprehension - cara singkat untuk membuat list
print("\\nList comprehension:")
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares)`,language:"python"}),e.jsx(q,{type:"tip",children:e.jsxs("p",{children:["List comprehension adalah fitur Python yang powerful untuk membuat list secara singkat dan efisien. Format dasarnya adalah:"," ",e.jsx("code",{children:"[expression for item in iterable if condition]"}),"."]})})]})},{id:6,title:"Fungsi",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Fungsi adalah blok kode yang dapat digunakan kembali yang hanya dijalankan ketika dipanggil. Mari belajar cara membuat dan menggunakan fungsi di Python."}),e.jsx(O,{title:"functions.py",code:`# Fungsi dasar
def sapa():
    print("Halo, selamat datang!")

# Memanggil fungsi
print("Memanggil fungsi sapa():")
sapa()

# Fungsi dengan parameter
def sapa_nama(nama):
    print(f"Halo, {nama}! Selamat datang!")

print("\\nFungsi dengan parameter:")
sapa_nama("Budi")
sapa_nama("Ani")

# Fungsi dengan parameter default
def sapa_lengkap(nama, pesan="Selamat datang!"):
    print(f"Halo, {nama}! {pesan}")

print("\\nFungsi dengan parameter default:")
sapa_lengkap("Citra")
sapa_lengkap("Dodi", "Semoga harimu menyenangkan!")

# Fungsi dengan return value
def jumlah(a, b):
    return a + b

print("\\nFungsi dengan return value:")
hasil = jumlah(5, 3)
print(f"5 + 3 = {hasil}")

# Fungsi dengan multiple return values
def operasi_aritmatika(a, b):
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b
    return tambah, kurang, kali, bagi

print("\\nFungsi dengan multiple return values:")
a, b, c, d = operasi_aritmatika(10, 2)
print(f"10 + 2 = {a}")
print(f"10 - 2 = {b}")
print(f"10 * 2 = {c}")
print(f"10 / 2 = {d}")

# Lambda function (anonymous function)
print("\\nLambda function:")
kuadrat = lambda x: x**2
print(f"Kuadrat dari 5 adalah {kuadrat(5)}")

# Menggunakan lambda dengan built-in functions
angka = [1, 5, 4, 3, 2, 6]
angka_urut = sorted(angka)
print(f"Sorted: {angka_urut}")

# Menggunakan fungsi sebagai argumen
def apply_operation(a, b, operation):
    return operation(a, b)

print("\\nFungsi sebagai argumen:")
add = lambda x, y: x + y
multiply = lambda x, y: x * y

print(f"5 + 3 = {apply_operation(5, 3, add)}")
print(f"5 * 3 = {apply_operation(5, 3, multiply)}")`,language:"python"}),e.jsx(q,{type:"info",children:e.jsx("p",{children:"Python mendukung berbagai jenis parameter fungsi termasuk positional arguments, keyword arguments, default arguments, variable-length arguments (*args), dan variable-length keyword arguments (**kwargs)."})})]})},{id:7,title:"Struktur Data: List dan Dictionary",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Python memiliki struktur data bawaan yang sangat berguna. Mari kita fokus pada dua yang paling sering digunakan: list dan dictionary."}),e.jsx(O,{title:"data_structures.py",code:`# List - koleksi data yang terurut dan bisa diubah
print("LIST OPERATIONS")
print("--------------")

# Membuat list
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print("List buah:", buah)

# Mengakses elemen list
print("\\nMengakses elemen list:")
print("Buah pertama:", buah[0])
print("Buah terakhir:", buah[-1])  # Indeks negatif menghitung dari belakang

# Slicing list
print("\\nSlicing list:")
print("Dua buah pertama:", buah[0:2])  # Indeks 0 dan 1
print("Dua buah terakhir:", buah[-2:])  # Dua terakhir

# Mengubah elemen list
print("\\nMengubah elemen list:")
buah[1] = "Strawberry"
print("Setelah mengubah buah[1]:", buah)

# Metode list
print("\\nMetode list:")

# Menambah elemen
buah.append("Anggur")
print("Setelah append Anggur:", buah)

buah.insert(2, "Durian")
print("Setelah insert Durian di indeks 2:", buah)

# Menghapus elemen
removed = buah.pop()
print(f"Elemen yang dihapus dengan pop(): {removed}")
print("List setelah pop():", buah)

buah.remove("Durian")
print("List setelah remove('Durian'):", buah)

# List operations
print("\\nList operations:")
print("Jumlah elemen:", len(buah))
print("Apel di indeks:", buah.index("Apel"))

# Sorting list
angka = [3, 1, 4, 1, 5, 9, 2]
print("\\nList angka:", angka)

angka.sort()
print("Setelah sort():", angka)

angka.reverse()
print("Setelah reverse():", angka)

# Nested list
print("\\nNested list:")
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print("Matrix:", matrix)
print("matrix[1][2]:", matrix[1][2])  # Mengakses elemen baris 1, kolom 2 (nilai 6)

# Dictionary - koleksi key-value yang tidak berurutan
print("\\n\\nDICTIONARY OPERATIONS")
print("--------------------")

# Membuat dictionary
mahasiswa = {
    "nama": "Budi Santoso",
    "nim": "20210001",
    "jurusan": "Teknik Informatika",
    "usia": 20
}
print("Dictionary mahasiswa:", mahasiswa)

# Mengakses nilai dengan key
print("\\nMengakses nilai dengan key:")
print("Nama:", mahasiswa["nama"])
print("NIM:", mahasiswa["nim"])

# Mengakses dengan get() (lebih aman)
print("\\nMengakses dengan get():")
print("Jurusan:", mahasiswa.get("jurusan"))
print("IPK:", mahasiswa.get("ipk", "Data tidak tersedia"))  # Default jika key tidak ada

# Mengubah nilai
print("\\nMengubah nilai:")
mahasiswa["usia"] = 21
print("Setelah mengubah usia:", mahasiswa)

# Menambah pasangan key-value baru
mahasiswa["ipk"] = 3.75
print("Setelah menambah IPK:", mahasiswa)

# Menghapus item
print("\\nMenghapus item:")
del mahasiswa["usia"]
print("Setelah menghapus usia:", mahasiswa)

# Dictionary methods
print("\\nDictionary methods:")
print("Keys:", list(mahasiswa.keys()))
print("Values:", list(mahasiswa.values()))
print("Items:", list(mahasiswa.items()))

# Looping dictionary
print("\\nLooping dictionary:")
for key in mahasiswa:
    print(f"{key}: {mahasiswa[key]}")

print("\\nLooping items:")
for key, value in mahasiswa.items():
    print(f"{key}: {value}")

# Nested dictionary
print("\\nNested dictionary:")
kampus = {
    "fakultas": {
        "FTIK": ["Informatika", "Sistem Informasi"],
        "FTI": ["Teknik Elektro", "Teknik Mesin"]
    },
    "alamat": "Jl. Pendidikan No. 1"
}
print("Kampus:", kampus)
print("Prodi di FTIK:", kampus["fakultas"]["FTIK"])`,language:"python"}),e.jsx(q,{type:"tip",children:e.jsx("p",{children:"List dan dictionary adalah dua struktur data yang paling sering digunakan di Python. List digunakan untuk menyimpan koleksi data terurut, sedangkan dictionary digunakan untuk menyimpan data dalam format key-value."})})]})},{id:8,title:"Menggunakan Modul Python",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Modul Python adalah file yang berisi definisi dan pernyataan Python. Modul memungkinkan kita untuk mengorganisir kode dalam file terpisah yang dapat digunakan kembali."}),e.jsx("p",{className:"text-gray-700",children:"Mari kita membuat modul Python sederhana dan menggunakannya dalam program lain."}),e.jsx(O,{title:"my_module.py",code:`# Modul matematika sederhana

# Variabel dalam modul
pi = 3.14159

# Fungsi untuk menghitung luas lingkaran
def hitung_luas_lingkaran(radius):
    return pi * radius * radius

# Fungsi untuk menghitung keliling lingkaran
def hitung_keliling_lingkaran(radius):
    return 2 * pi * radius

# Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
def fahrenheit_ke_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9`,language:"python"}),e.jsx("p",{className:"text-gray-700",children:"Sekarang, mari kita buat program yang menggunakan modul tersebut:"}),e.jsx(O,{title:"use_module.py",code:`# Mengimpor modul yang telah kita buat
import my_module

# Menggunakan variabel dari modul
print(f"Nilai Pi: {my_module.pi}")

# Menggunakan fungsi dari modul
radius = 5
luas = my_module.hitung_luas_lingkaran(radius)
keliling = my_module.hitung_keliling_lingkaran(radius)

print(f"Lingkaran dengan radius {radius}")
print(f"Luas: {luas:.2f}")
print(f"Keliling: {keliling:.2f}")

# Mengimpor fungsi tertentu dari modul
from my_module import celsius_ke_fahrenheit, fahrenheit_ke_celsius

# Menggunakan fungsi yang diimpor
celsius = 25
fahrenheit = celsius_ke_fahrenheit(celsius)
print(f"\\n{celsius}°C = {fahrenheit:.2f}°F")

fahrenheit = 98.6
celsius = fahrenheit_ke_celsius(fahrenheit)
print(f"{fahrenheit}°F = {celsius:.2f}°C")

# Mengimpor semua dari modul (umumnya tidak disarankan)
# from my_module import *

# Mengimpor modul dengan alias
import my_module as mm
print(f"\\nMenggunakan alias: Pi = {mm.pi}")`,language:"python"}),e.jsxs(q,{type:"info",children:[e.jsx("p",{children:"Ada beberapa cara untuk mengimpor modul di Python:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"import modul"})," - Mengimpor seluruh modul"]}),e.jsxs("li",{children:[e.jsx("code",{children:"from modul import fungsi"})," - Mengimpor fungsi tertentu dari modul"]}),e.jsxs("li",{children:[e.jsx("code",{children:"from modul import *"})," - Mengimpor semua dari modul (tidak disarankan)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"import modul as alias"})," - Mengimpor modul dengan alias"]})]})]}),e.jsxs(q,{type:"tip",children:[e.jsx("p",{children:"Python juga memiliki banyak modul bawaan yang dapat Anda gunakan, seperti:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"math"})," - Fungsi matematika"]}),e.jsxs("li",{children:[e.jsx("code",{children:"random"})," - Menghasilkan angka acak"]}),e.jsxs("li",{children:[e.jsx("code",{children:"datetime"})," - Bekerja dengan tanggal dan waktu"]}),e.jsxs("li",{children:[e.jsx("code",{children:"os"})," - Berinteraksi dengan sistem operasi"]}),e.jsxs("li",{children:[e.jsx("code",{children:"sys"})," - Fungsi dan variabel yang digunakan oleh interpreter"]})]})]}),e.jsx(O,{title:"built_in_modules.py",code:`# Menggunakan modul bawaan Python
import math
import random
import datetime
import os

# Menggunakan math module
print("Modul math:")
print(f"Nilai Pi: {math.pi}")
print(f"Akar kuadrat dari 16: {math.sqrt(16)}")
print(f"Cos(0): {math.cos(0)}\\n")

# Menggunakan random module
print("Modul random:")
print(f"Angka acak antara 1 dan 10: {random.randint(1, 10)}")
print(f"Pilihan acak dari list: {random.choice(['apel', 'jeruk', 'mangga'])}\\n")

# Menggunakan datetime module
print("Modul datetime:")
today = datetime.datetime.now()
print(f"Tanggal dan waktu saat ini: {today}")
print(f"Hanya tanggal: {today.date()}")
print(f"Hanya waktu: {today.time()}\\n")

# Menggunakan os module
print("Modul os:")
print(f"Direktori saat ini: {os.getcwd()}")
print(f"List file dalam direktori: {os.listdir()[:5]}")  # Menampilkan 5 item pertama`,language:"python"})]})}]})}),e.jsx(Q,{id:"hasil-praktikum",title:"Hasil Praktikum",icon:e.jsx(Fn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan semua langkah praktikum, kalian seharusnya telah:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Mengenal dasar-dasar bahasa pemrograman Python"}),e.jsx("li",{children:"Menggunakan variabel, tipe data, dan operator"}),e.jsx("li",{children:"Mengimplementasikan struktur kendali seperti if-else dan loops"}),e.jsx("li",{children:"Membuat dan menggunakan fungsi"}),e.jsx("li",{children:"Bekerja dengan struktur data list dan dictionary"}),e.jsx("li",{children:"Menangani file dan exception"}),e.jsx("li",{children:"Mengembangkan aplikasi sederhana (Todo List) menggunakan konsep OOP"})]})]})}),e.jsx(Q,{id:"format-pengumpulan",title:"Format Pengumpulan",icon:e.jsx(jn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Direktori GitHub:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat repository dengan format:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_[NIM]"})]}),e.jsxs("li",{children:["Contoh:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_web_itera_119140001"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Struktur Folder:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat folder per pertemuan dengan format:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"[NAMA]_[NIM]_pertemuan[X]"})]}),e.jsxs("li",{children:["Contoh:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"johndoe_119140001_pertemuan4"})]}),e.jsx("li",{children:"Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Deadline Pengumpulan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Deadline:"," ",e.jsx("span",{className:"font-medium",children:"Minggu, 27 April 2025, pukul 23:59 WIB"})]}),e.jsx("li",{children:"Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari"})]})]})]})}),e.jsx(Q,{id:"pertanyaan-dan-tugas",title:"Pertanyaan dan Tugas",icon:e.jsx(ao,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk menguji pemahaman kalian, kerjakan tugas berikut:"}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Tugas:"}),e.jsxs("ol",{className:"pl-6 space-y-2 text-gray-700 list-decimal",children:[e.jsxs("li",{children:["Buatlah program penghitung BMI (Body Mass Index) sederhana:",e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsx("li",{children:"Buatlah variabel untuk menyimpan berat badan (kg) dan tinggi badan (m)"}),e.jsx("li",{children:"Hitung BMI dengan rumus: BMI = berat / (tinggi * tinggi)"}),e.jsxs("li",{children:["Gunakan percabangan if-elif-else untuk menampilkan kategori BMI:",e.jsxs("ul",{className:"list-disc pl-6 mt-1",children:[e.jsx("li",{children:"BMI < 18.5: Berat badan kurang"}),e.jsx("li",{children:"18.5 <= BMI < 25: Berat badan normal"}),e.jsx("li",{children:"25 <= BMI < 30: Berat badan berlebih"}),e.jsx("li",{children:"BMI >= 30: Obesitas"})]})]}),e.jsx("li",{children:"Print hasil perhitungan dan kategori BMI"})]}),e.jsxs("p",{className:"mt-2 text-gray-600 text-sm",children:[e.jsx("strong",{children:"Bobot:"})," 30% dari nilai tugas"]})]}),e.jsxs("li",{children:["Buatlah program pengelolaan data nilai mahasiswa:",e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsx("li",{children:"Buat list berisi minimal 5 dictionary data mahasiswa (nama, nim, nilai_uts, nilai_uas, nilai_tugas)"}),e.jsx("li",{children:"Hitung nilai akhir setiap mahasiswa dengan rumus: (30% UTS + 40% UAS + 30% Tugas)"}),e.jsxs("li",{children:["Tentukan grade setiap mahasiswa berdasarkan nilai akhir:",e.jsxs("ul",{className:"list-disc pl-6 mt-1",children:[e.jsx("li",{children:"A: nilai akhir 80 atau lebih"}),e.jsx("li",{children:"B: nilai akhir 70 sampai 79"}),e.jsx("li",{children:"C: nilai akhir 60 sampai 69"}),e.jsx("li",{children:"D: nilai akhir 50 sampai 59"}),e.jsx("li",{children:"E: nilai akhir kurang dari 50"})]})]}),e.jsx("li",{children:"Tampilkan data mahasiswa lengkap dengan nilai akhir dan grade dalam format tabel"}),e.jsx("li",{children:"Tampilkan mahasiswa dengan nilai tertinggi dan terendah"})]}),e.jsxs("p",{className:"mt-2 text-gray-600 text-sm",children:[e.jsx("strong",{children:"Bobot:"})," 40% dari nilai tugas"]})]}),e.jsxs("li",{children:["Buatlah modul matematika Python dan program yang menggunakannya:",e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[e.jsxs("li",{children:["Buat file ",e.jsx("code",{children:"math_operations.py"})," yang berisi:",e.jsxs("ul",{className:"list-disc pl-6 mt-1",children:[e.jsx("li",{children:"Fungsi untuk menghitung luas dan keliling bentuk geometri (minimal 3 bentuk: persegi, persegi panjang, lingkaran)"}),e.jsx("li",{children:"Fungsi untuk konversi suhu (minimal 2 konversi: Celsius-Fahrenheit, Celsius-Kelvin)"}),e.jsx("li",{children:"Minimal 1 variabel konstanta (misal: PI = 3.14159)"})]})]}),e.jsxs("li",{children:["Buat file ",e.jsx("code",{children:"main.py"})," yang:",e.jsxs("ul",{className:"list-disc pl-6 mt-1",children:[e.jsxs("li",{children:["Mengimpor modul ",e.jsx("code",{children:"math_operations"})," yang telah dibuat"]}),e.jsx("li",{children:"Menggunakan semua fungsi dari modul tersebut dengan berbagai nilai input"}),e.jsx("li",{children:"Menampilkan hasil perhitungan dengan format yang rapi"}),e.jsx("li",{children:"Menggunakan minimal 2 cara berbeda untuk mengimpor modul/fungsi"})]})]})]}),e.jsxs("p",{className:"mt-2 text-gray-600 text-sm",children:[e.jsx("strong",{children:"Bobot:"})," 30% dari nilai tugas"]})]})]})]})}),e.jsx(On,{title:"Submit Tugas Praktikum Python",href:"https://forms.gle/qM3Xj8HVqFp7mQKX8"})]})})]})}const Bl=({title:i,description:d,code:o})=>e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:i}),e.jsx("p",{className:"text-gray-700 mb-4",children:d}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:o})})]}),lf=()=>e.jsx("div",{className:"min-h-screen p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("header",{className:"mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent",children:"Pengenalan Framework Pyramid"}),e.jsxs("div",{className:"flex items-center justify-center text-xl text-gray-700 mb-6",children:[e.jsx(xu,{size:28,className:"text-red-500 mr-3"}),e.jsx("span",{children:'Framework web Python fleksibel dengan filosofi "mulai kecil, berakhir besar"'})]})]}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx($l,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Apa itu Pyramid?"}),e.jsx("p",{className:"text-gray-700 mb-6",children:'Pyramid adalah framework web Python yang fleksibel, minimalis, dan pragmatis. Dirancang untuk bekerja dengan berbagai macam aplikasi web dari yang sederhana hingga yang kompleks. Pyramid menggunakan konsep "start small, finish big" yang memungkinkan developer untuk memulai dengan aplikasi sederhana dan berkembang sesuai kebutuhan tanpa harus mengganti framework.'}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsxs("h3",{className:"text-xl font-semibold mb-2 flex items-center",children:[e.jsx(mr,{size:20,className:"text-green-500 mr-2"}),"Keunggulan Pyramid"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-red-700",children:"Fleksibilitas"}),e.jsx("p",{className:"text-gray-700",children:"Tidak memaksakan cara tertentu untuk menyelesaikan masalah, bebas menggunakan template engine, database, dan teknologi apapun."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-red-700",children:"Skalabilitas"}),e.jsx("p",{className:"text-gray-700",children:"Dapat berkembang dari aplikasi sederhana menjadi aplikasi enterprise yang kompleks tanpa perlu refactor besar-besaran."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-red-700",children:"Dokumentasi Lengkap"}),e.jsx("p",{className:"text-gray-700",children:"Memiliki dokumentasi yang komprehensif dan mudah dipahami untuk developer dari segala tingkat keahlian."})]})]})]}),e.jsxs("div",{className:"bg-orange-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Sejarah Singkat"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid dikembangkan oleh tim Pylons Project dan pertama kali dirilis pada tahun 2010. Framework ini didesain berdasarkan pengalaman dari framework Pylons sebelumnya dengan tujuan menyediakan framework yang bisa tumbuh sesuai kebutuhan aplikasi."}),e.jsxs("div",{className:"bg-white p-4 rounded-md border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-orange-700 mb-2",children:"Filosofi Pyramid"}),e.jsx("p",{className:"text-gray-700",children:'"Kami tidak memaksakan struktur yang menghalangi, tetapi kami menyediakan panduan yang membantu. Kami tidak memaksakan pendapat, tetapi kami memiliki pendapat."'})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(Bl,{title:"Aplikasi Pyramid Sederhana",description:"Contoh aplikasi Hello World dengan Pyramid",code:`from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response

def hello_world(request):
    return Response('Hello World!')

if __name__ == '__main__':
    with Configurator() as config:
        config.add_route('hello', '/')
        config.add_view(hello_world, route_name='hello')
        app = config.make_wsgi_app()
    
    server = make_server('0.0.0.0', 6543, app)
    print('Web server started on http://0.0.0.0:6543')
    server.serve_forever()`})})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Ug,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Konsep Inti Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid dibangun berdasarkan beberapa konsep inti yang memberikan fleksibilitas namun tetap mempertahankan struktur. Berikut adalah konsep-konsep utama yang perlu dipahami dalam pengembangan aplikasi dengan Pyramid."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Routes & Views"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Routes menghubungkan URL dengan view yang akan menangani request. Views mengembalikan response untuk ditampilkan kepada pengguna."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md  text-sm",children:e.jsx("code",{children:`# Definisi route dan view
config.add_route('home', '/')
config.add_view(my_view_callable, route_name='home')`})})]}),e.jsxs("div",{className:"bg-orange-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Configuration"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Configurator adalah komponen sentral yang mengatur semua aspek aplikasi Pyramid."}),e.jsx("div",{className:"bg-white p-4 rounded-md border border-gray-200",children:e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Mendaftarkan routes"}),e.jsx("li",{children:"Menambahkan views"}),e.jsx("li",{children:"Mengatur renderers"}),e.jsx("li",{children:"Mengkonfigurasi static assets"}),e.jsx("li",{children:"Mendaftarkan event subscribers"})]})})]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-2 flex items-center",children:[e.jsx(no,{size:20,className:"text-yellow-600 mr-2"}),"Renderers"]}),e.jsx("p",{className:"text-gray-700",children:"Menerjemahkan data Python menjadi format yang dapat dikirim ke browser seperti JSON, HTML melalui template engines (Jinja2, Mako, Chameleon)."})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-2 flex items-center",children:[e.jsx(Ul,{size:20,className:"text-green-600 mr-2"}),"Models & Persistence"]}),e.jsx("p",{className:"text-gray-700",children:"Pyramid tidak memaksakan ORM tertentu, bisa menggunakan SQLAlchemy, MongoDB, atau penyimpanan data lainnya sesuai kebutuhan."})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-2 flex items-center",children:[e.jsx(ex,{size:20,className:"text-blue-600 mr-2"}),"Security"]}),e.jsx("p",{className:"text-gray-700",children:"Sistem authentication dan authorization yang robust dengan dukungan untuk ACLs (Access Control Lists) dan permission-based security."})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(Bl,{title:"Definisi View dengan Decorator",description:"Mendefinisikan view menggunakan decorator sebagai alternatif konfigurasi imperatif",code:`from pyramid.view import view_config
from pyramid.response import Response

@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    return {'project': 'My Awesome Pyramid App'}

@view_config(route_name='api', renderer='json')
def api_view(request):
    return {'status': 'success', 'data': ['item1', 'item2', 'item3']}`})})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(ur,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Struktur Aplikasi Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid tidak memaksakan struktur proyek tertentu, namun menyediakan scaffolds (template proyek) yang dapat membantu developer memulai dengan cepat. Berikut adalah struktur proyek yang umum digunakan."}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Struktur Folder Pyramid Dasar"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:`myproject/
│
├── setup.py                 # Package setup file
├── setup.cfg               # Package configuration
├── MANIFEST.in             # Package manifest
├── README.txt              # README for the project
├── development.ini         # Development configuration
├── production.ini          # Production configuration
│
└── myproject/              # Actual Python package
    ├── __init__.py         # Package initialization, app factory
    ├── routes.py           # Route definitions
    ├── views/              # View callables
    │   ├── __init__.py
    │   ├── default.py
    │   └── api.py
    ├── models/             # Data models
    │   ├── __init__.py
    │   └── mymodel.py
    ├── scripts/            # Command line scripts
    │   ├── __init__.py
    │   └── initialize_db.py
    ├── static/             # Static assets
    │   ├── css/
    │   ├── js/
    │   └── img/
    └── templates/          # Template files
        ├── layout.jinja2
        └── home.jinja2`})})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Bootstrapping Aplikasi"}),e.jsx("p",{className:"text-gray-700 mb-2",children:"Aplikasi Pyramid dimulai dari file __init__.py yang berisi app factory:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md  text-sm",children:e.jsx("code",{children:`# myproject/__init__.py
from pyramid.config import Configurator

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application. """
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        config.include('.routes')
        config.scan()
        return config.make_wsgi_app()`})})]}),e.jsxs("div",{className:"bg-orange-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Definisi Routes"}),e.jsx("p",{className:"text-gray-700 mb-2",children:"Routes didefinisikan dalam file terpisah untuk memudahkan pengelolaan:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md  text-sm",children:e.jsx("code",{children:`# myproject/routes.py
def includeme(config):
    """Add routes to the config."""
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_route('about', '/about')
    config.add_route('api', '/api/{action}')`})})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Tips Struktur Proyek"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Gunakan cookiecutter-pyramid untuk membuat template proyek custom"}),e.jsx("li",{children:"Buat struktur yang sesuai dengan ukuran dan kompleksitas proyek"}),e.jsx("li",{children:"Aplikasi kecil bisa menggunakan single-file approach"}),e.jsx("li",{children:"Aplikasi besar sebaiknya menggunakan modular approach dengan package terpisah"}),e.jsx("li",{children:"Organisasikan view berdasarkan fungsi atau resource"}),e.jsx("li",{children:"Manfaatkan fitur namespace package untuk aplikasi yang sangat besar"})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Vl,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Fitur Lanjutan Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid dilengkapi dengan fitur-fitur lanjutan yang membuatnya cocok untuk aplikasi skala besar dan enterprise. Berikut adalah beberapa fitur yang membedakan Pyramid dari framework web Python lainnya."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Traversal vs URL Dispatch"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid mendukung dua paradigma routing berbeda yang dapat digunakan sesuai kebutuhan:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-md border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700",children:"URL Dispatch"}),e.jsx("p",{className:"text-gray-700",children:"Pattern matching sederhana antara URL dan view, cocok untuk situs dengan struktur URL statis."})]}),e.jsxs("div",{className:"bg-white p-4 rounded-md border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700",children:"Traversal"}),e.jsx("p",{className:"text-gray-700",children:"Menggunakan struktur hirarki objek untuk resolusi URL, sangat berguna untuk CMS dan aplikasi dengan struktur data nested seperti folder dan file."})]})]})]}),e.jsxs("div",{className:"bg-orange-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Event System"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid memiliki sistem event yang kuat untuk menangkap berbagai momen dalam siklus hidup request:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md  text-sm",children:e.jsx("code",{children:`from pyramid.events import NewRequest
from pyramid.events import subscriber

@subscriber(NewRequest)
def my_request_callback(event):
    request = event.request
    request.start_time = time.time()`})})]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Predicates"}),e.jsx("p",{className:"text-gray-700",children:"Mekanisme untuk menyaring view berdasarkan kriteria seperti metode HTTP, parameter permintaan, tipe konten, dll."}),e.jsx("div",{className:"mt-4",children:e.jsx("code",{className:"bg-gray-100 text-gray-800 p-2 rounded-md text-sm",children:"@view_config(route_name='api', request_method='POST', renderer='json')"})})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Asset Specifications"}),e.jsx("p",{className:"text-gray-700",children:"Cara yang jelas dan konsisten untuk mereferensikan resource di seluruh aplikasi dan di dalam package Python."}),e.jsx("div",{className:"mt-4",children:e.jsx("code",{className:"bg-gray-100 text-gray-800 p-2 rounded-md text-sm",children:"mypackage:static/logo.png"})})]}),e.jsxs("div",{className:"bg-purple-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Tweens"}),e.jsx("p",{className:"text-gray-700",children:"Middleware yang dioptimalkan Pyramid untuk memproses request dan response, digunakan untuk logging, sesi, dan fitur lintas request lainnya."}),e.jsx("div",{className:"mt-4",children:e.jsx("code",{className:"bg-gray-100 text-gray-800 p-2 rounded-md text-sm",children:"config.add_tween('mypackage.tweens.timing_tween')"})})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(Bl,{title:"Authentikasi dan Authorization dengan ACL",description:"Contoh implementasi keamanan dengan Pyramid menggunakan ACL",code:`from pyramid.security import Allow, Everyone, Authenticated
from pyramid.authentication import SessionAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy

class Root:
    __acl__ = [
        (Allow, Everyone, 'view'),
        (Allow, Authenticated, 'edit'),
        (Allow, 'group:admin', 'admin'),
    ]
    
    def __init__(self, request):
        self.request = request

def main(global_config, **settings):
    with Configurator(settings=settings) as config:
        # Setup security policies
        authn_policy = SessionAuthenticationPolicy()
        authz_policy = ACLAuthorizationPolicy()
        
        config.set_authentication_policy(authn_policy)
        config.set_authorization_policy(authz_policy)
        config.set_root_factory(Root)
        
        # Add protected view
        config.add_route('admin', '/admin')
        config.add_view(admin_view, route_name='admin', permission='admin')
        
        # The rest of your configuration...
        return config.make_wsgi_app()`})})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Ln,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Ekosistem dan Perbandingan"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid memiliki ekosistem yang solid dengan berbagai add-on dan integrasi. Mari bandingkan Pyramid dengan framework web Python populer lainnya."}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Add-ons dan Package Populer"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700 mb-2",children:"pyramid_jinja2"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Integrasi dengan template engine Jinja2"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700 mb-2",children:"pyramid_tm"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Transaction management otomatis"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700 mb-2",children:"pyramid_debugtoolbar"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Toolbar interaktif untuk debugging"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700 mb-2",children:"pyramid_mailer"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Utilitas untuk mengirim email"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700 mb-2",children:"pyramid_jwt"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Autentikasi berbasis JSON Web Token"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-red-700 mb-2",children:"pyramid_openapi3"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Validasi OpenAPI specification"})]})]})]}),e.jsx("div",{className:" mb-8",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-red-100",children:[e.jsx("th",{className:"border border-red-200 p-3 text-left",children:"Fitur"}),e.jsx("th",{className:"border border-red-200 p-3 text-left",children:"Pyramid"}),e.jsx("th",{className:"border border-red-200 p-3 text-left",children:"Django"}),e.jsx("th",{className:"border border-red-200 p-3 text-left",children:"Flask"}),e.jsx("th",{className:"border border-red-200 p-3 text-left",children:"FastAPI"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-red-200 p-3 font-medium",children:"Filosofi"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Start small, finish big"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Batteries included"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Microframework"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Modern, fast API"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-red-200 p-3 font-medium",children:"Kurva Belajar"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Sedang"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Curam"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Landai"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Landai"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-red-200 p-3 font-medium",children:"ORM Default"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Tidak ada (SQLAlchemy direkomendasikan)"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Django ORM"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Tidak ada"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Tidak ada (SQLAlchemy)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-red-200 p-3 font-medium",children:"Template Engine"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Fleksibel (Jinja2, Mako, Chameleon)"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Django Templates"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Jinja2"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Jinja2"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-red-200 p-3 font-medium",children:"Skalabilitas"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Sangat baik"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Baik"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Sedang"}),e.jsx("td",{className:"border border-red-200 p-3",children:"Sangat baik"})]})]})]})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Kapan menggunakan Pyramid?"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Aplikasi yang membutuhkan fleksibilitas maksimal"}),e.jsx("li",{children:"Saat kebutuhan bisa berkembang dari sederhana menjadi kompleks"}),e.jsx("li",{children:"Proyek yang membutuhkan kontrol penuh atas komponen framework"}),e.jsx("li",{children:"Aplikasi enterprise dengan kebutuhan keamanan kompleks"}),e.jsx("li",{children:"Saat ingin menggunakan teknologi yang tidak didukung framework lain"})]})]}),e.jsxs("div",{className:"bg-orange-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Kapan tidak menggunakan Pyramid?"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Untuk proyek kecil yang membutuhkan solusi cepat (gunakan Flask/FastAPI)"}),e.jsx("li",{children:"Ketika ingin menggunakan fitur siap pakai seperti admin panel (Django lebih cocok)"}),e.jsx("li",{children:"Jika tim belum berpengalaman dengan konsep WSGI dan web Python"}),e.jsx("li",{children:"Untuk proyek yang membutuhkan dukungan komunitas sangat besar"})]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(xu,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Memulai dengan Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Mari lihat bagaimana memulai proyek Pyramid baru dan menjalankannya di lingkungan pengembangan."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Instalasi"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid dapat diinstal menggunakan pip. Disarankan menggunakan virtual environment."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:`# Membuat virtual environment
python -m venv venv

# Mengaktifkan virtual environment
# Windows:
venv\\Scripts\\activate
# Unix/macOS:
source venv/bin/activate

# Menginstal Pyramid
pip install "pyramid==2.0"`})})]}),e.jsxs("div",{className:"bg-orange-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Membuat Proyek Baru"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid menyediakan scaffolds (template proyek) untuk memulai dengan cepat."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:`# Menginstal cookiecutter untuk template proyek
pip install cookiecutter

# Membuat proyek Pyramid baru
cookiecutter gh:Pylons/pyramid-cookiecutter-starter

# Atau menggunakan scaffold bawaan
pip install "pyramid[starter]"
pcreate -s starter myproject`})})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Menjalankan Aplikasi"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Setelah proyek dibuat, Anda dapat menjalankan server pengembangan:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:`# Masuk ke direktori proyek
cd myproject

# Install dalam mode development
pip install -e ".[dev]"

# Menjalankan server pengembangan
pserve development.ini --reload`})}),e.jsxs("p",{className:"text-gray-700 mt-4",children:["Server akan berjalan di ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"http://localhost:6543"}),"dengan auto-reload saat ada perubahan kode."]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Testing Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid mendukung pengujian dengan berbagai framework testing Python."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md  text-sm",children:e.jsx("code",{children:`# Contoh test dengan pytest
from pyramid import testing
import pytest

def test_home_view():
    from myproject.views.default import home_view
    request = testing.DummyRequest()
    response = home_view(request)
    assert response['project'] == 'My Awesome Pyramid App'`})})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Deployment"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Aplikasi Pyramid dapat dideploy dengan berbagai server WSGI seperti:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Waitress (direkomendasikan untuk development/produksi kecil)"}),e.jsx("li",{children:"Gunicorn"}),e.jsx("li",{children:"uWSGI"}),e.jsx("li",{children:"mod_wsgi (Apache)"})]}),e.jsx("div",{className:"mt-4",children:e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md  text-sm",children:e.jsx("code",{children:`# Install waitress
pip install waitress

# Menjalankan dengan waitress
waitress-serve --port=8080 myproject:app`})})})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(mr,{size:28,className:"text-red-500 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Kesimpulan"}),e.jsxs("div",{className:"bg-red-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Keunggulan Pyramid"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:'Fleksibilitas tinggi dengan pendekatan "pay only for what you use"'}),e.jsx("li",{children:"Dapat berkembang dari aplikasi sederhana ke kompleks tanpa perubahan besar"}),e.jsx("li",{children:"Sistem keamanan yang robust dengan ACL dan permission-based security"}),e.jsx("li",{children:"Dukungan untuk berbagai paradigma routing (URL dispatch dan traversal)"}),e.jsx("li",{children:"Kompatibilitas dengan berbagai database dan teknologi lainnya"}),e.jsx("li",{children:"Dokumentasi yang sangat baik dan komprehensif"})]})]})]})]})})]})}),Fl=({title:i,description:d,icon:o})=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"p-3 rounded-md bg-red-100 mr-4",children:e.jsx(o,{size:24,className:"text-red-500"})}),e.jsx("h3",{className:"text-xl font-semibold",children:i})]}),e.jsx("p",{className:"text-gray-700 flex-grow",children:d})]}),Ra=({code:i})=>e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:i})}),of=()=>e.jsx("div",{className:"min-h-screen p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("header",{className:"mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",children:"Arsitektur Pyramid"}),e.jsxs("div",{className:"flex items-center justify-center text-xl text-gray-700 mb-6",children:[e.jsx(Da,{size:28,className:"text-blue-500 mr-3"}),e.jsx("span",{children:"Mengadopsi pola MVC dengan komponen modular yang dapat disesuaikan sesuai kebutuhan proyek"})]})]}),e.jsxs("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-6",children:"Paradigma Arsitektur Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid mengadopsi pendekatan arsitektur yang fleksibel, memungkinkan pengembang untuk membangun aplikasi web dengan pola yang sesuai kebutuhan mereka. Meskipun tidak mengharuskan satu pola arsitektur tertentu, Pyramid secara alami mendukung pola Model-View-Controller (MVC) dan variasi lainnya seperti Model-View-Template (MVT) dan Resource-Oriented Architecture (ROA)."}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Berbeda dengan Framework Lain"}),e.jsx("p",{className:"text-gray-700",children:"Tidak seperti Django yang ketat dengan MVT atau Rails dengan MVC, Pyramid memberi kebebasan kepada pengembang untuk memilih pola yang sesuai. Pyramid menyediakan komponen-komponen yang dapat disusun untuk membuat pola arsitektur yang paling masuk akal untuk aplikasi tertentu."})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[e.jsx(Fl,{title:"Model",description:"Representasi data dan logika bisnis, sering diimplementasikan dengan SQLAlchemy, ZODB, atau sistem database lainnya.",icon:Yg}),e.jsx(Fl,{title:"View",description:"Fungsi atau kelas yang memproses permintaan dan mengembalikan respons, bisa berupa HTML, JSON, atau format lainnya.",icon:Ln}),e.jsx(Fl,{title:"Controller/Template",description:"Bagian yang menangani presentasi dan rendering tampilan, biasanya menggunakan template engine seperti Jinja2, Mako, atau Chameleon.",icon:Kl})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-6",children:"Komponen Arsitektur Inti"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Arsitektur Pyramid dibangun dari komponen-komponen modular yang dapat digunakan bersama atau secara terpisah sesuai kebutuhan. Setiap komponen memiliki tanggung jawab spesifik dalam alur aplikasi."}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200",children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-100 mr-3",children:e.jsx(Ln,{size:20,className:"text-blue-500"})}),"Router & URL Dispatch"]}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Komponen routing Pyramid menangani pemetaan antara URL dan kode yang akan dieksekusi. Anda dapat mendefinisikan pola URL dan menghubungkannya dengan fungsi view tertentu."}),e.jsx(Ra,{code:`# routes.py
def includeme(config):
    config.add_route('home', '/')
    config.add_route('blog', '/blog/{id}')
    config.add_route('api_users', '/api/users', request_method='GET')
    config.add_route('api_user', '/api/users/{id}', request_method='GET')`})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200",children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-100 mr-3",children:e.jsx($g,{size:20,className:"text-blue-500"})}),"Traversal"]}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Selain URL Dispatch, Pyramid mendukung Traversal untuk resolusi URL berbasis objek. Sangat berguna untuk aplikasi dengan struktur hierarkis seperti CMS atau sistem file."}),e.jsx(Ra,{code:`# resources.py
class Resource:
    def __init__(self, name, parent=None):
        self.__name__ = name
        self.__parent__ = parent
        self.children = {}
    
    def __getitem__(self, key):
        return self.children[key]

class Root(Resource):
    def __init__(self):
        super().__init__('', None)
        self.children['blog'] = BlogCollection(self)
        
class BlogCollection(Resource):
    def __init__(self, parent):
        super().__init__('blog', parent)`})]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200",children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-100 mr-3",children:e.jsx(Ag,{size:20,className:"text-blue-500"})}),"Views & Renderers"]}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Views dalam Pyramid adalah fungsi atau kelas yang merespons permintaan dan mengembalikan data. Renderers mengubah data dari views menjadi format yang dapat dikonsumsi oleh klien."}),e.jsx(Ra,{code:`# views.py
from pyramid.view import view_config

@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    return {'project': 'My Pyramid App'}

@view_config(route_name='api_users', renderer='json')
def api_view(request):
    return {
        'users': [
            {'id': 1, 'name': 'Alice'},
            {'id': 2, 'name': 'Bob'}
        ]
    }`})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200",children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-100 mr-3",children:e.jsx(Da,{size:20,className:"text-blue-500"})}),"Models & Database"]}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Model merepresentasikan data dan logika bisnis. Pyramid tidak memaksakan ORM tertentu, tetapi umumnya menggunakan SQLAlchemy untuk aplikasi dengan database relasional."}),e.jsx(Ra,{code:`# models.py
from sqlalchemy import Column, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)
    email = Column(Text, unique=True, nullable=False)
    
    def __repr__(self):
        return f"<User(name='{self.name}', email='{self.email}')>"`})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-6",children:"Pola Arsitektur yang Didukung"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-md border border-blue-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-700",children:"Model-View-Controller"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pattern tradisional dengan pemisahan jelas antara model data, logika bisnis, dan presentasi. Implementasinya bervariasi tergantung kebutuhan."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1 text-sm",children:[e.jsx("li",{children:"Models: SQLAlchemy models"}),e.jsx("li",{children:"Views: View functions/classes"}),e.jsx("li",{children:"Controllers: URL dispatch/routing"})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-md border border-green-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-700",children:"Resource-Oriented Architecture"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Cocok untuk API REST atau sistem berbasis resource, dengan traversal untuk akses hierarki resource."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1 text-sm",children:[e.jsx("li",{children:"Resources: Object dengan __getitem__"}),e.jsx("li",{children:"Representations: Renderers (JSON, XML)"}),e.jsx("li",{children:"State transitions: Views"})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md border border-purple-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-purple-700",children:"Model-View-Template"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Variasi dari MVC dengan penekanan pada template untuk presentasi, mirip dengan Django."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1 text-sm",children:[e.jsx("li",{children:"Models: Data models"}),e.jsx("li",{children:"Views: View logic"}),e.jsx("li",{children:"Templates: Jinja2/Mako templates"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Arsitektur Aplikasi Besar"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Untuk aplikasi skala besar, Pyramid mendukung arsitektur modular dengan komponenisasi lewat beberapa teknik:"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"Includes"}),e.jsx("p",{className:"text-gray-700 mb-3",children:"Memungkinkan aplikasi dibagi menjadi modul-modul terpisah yang dapat disertakan (included) dalam konfigurasi utama."}),e.jsx(Ra,{code:`# app.py
def main(global_config, **settings):
    config = Configurator(settings=settings)
    
    # Include sub-modules
    config.include('myapp.auth')
    config.include('myapp.blog')
    config.include('myapp.admin')
    
    return config.make_wsgi_app()`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"Asset Specifications"}),e.jsx("p",{className:"text-gray-700 mb-3",children:"Cara standar untuk mereferensikan resource di seluruh komponen aplikasi dengan format yang konsisten."}),e.jsx(Ra,{code:`# Using asset specifications
config.add_static_view('static', 'myapp:static')
config.add_renderer('.jinja2', 'myapp.renderers.jinja2_renderer')

# In a view
@view_config(renderer='myapp:templates/home.jinja2')
def home_view(request):
    return {'project': 'My Pyramid App'}`})]})]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-6",children:"Contoh Implementasi Arsitektur MVC"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200",children:[e.jsx("p",{className:"text-gray-700 mb-6",children:"Berikut adalah contoh aplikasi blog sederhana yang menunjukkan implementasi arsitektur MVC dalam Pyramid:"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-blue-700",children:"Model (models.py)"}),e.jsx(Ra,{code:`from sqlalchemy import Column, Integer, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
import datetime

Base = declarative_base()

class BlogPost(Base):
    __tablename__ = 'blog_posts'
    
    id = Column(Integer, primary_key=True)
    title = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    created = Column(DateTime, default=datetime.datetime.utcnow)
    
    def __repr__(self):
        return f"<BlogPost('{self.title}')>"`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-green-700",children:"View (views.py)"}),e.jsx(Ra,{code:`from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound
from .models import BlogPost

@view_config(route_name='blog_list', 
             renderer='templates/blog_list.jinja2')
def blog_list(request):
    posts = request.dbsession.query(BlogPost).all()
    return {'posts': posts}

@view_config(route_name='blog_view', 
             renderer='templates/blog_detail.jinja2')
def blog_view(request):
    post_id = request.matchdict['id']
    post = request.dbsession.query(BlogPost).get(post_id)
    return {'post': post}`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-purple-700",children:"Controller (routes.py)"}),e.jsx(Ra,{code:`def includeme(config):
    """Add routes to the config."""
    config.add_route('home', '/')
    config.add_route('blog_list', '/blog')
    config.add_route('blog_view', '/blog/{id}')
    config.add_route('blog_create', '/blog/create')
    config.add_route('blog_edit', '/blog/{id}/edit')
    config.add_route('blog_delete', '/blog/{id}/delete')`}),e.jsx("h3",{className:"text-lg font-semibold mt-6 mb-3 text-red-700",children:"Template (blog_list.jinja2)"}),e.jsx(Ra,{code:`{% extends "layout.jinja2" %}

{% block content %}
  <h1>Blog Posts</h1>
  <div class="blog-list">
    {% for post in posts %}
      <div class="blog-item">
        <h2>{{ post.title }}</h2>
        <div class="created">{{ post.created }}</div>
        <a href="{{ request.route_url('blog_view', id=post.id) }}">
          Read more
        </a>
      </div>
    {% endfor %}
  </div>
{% endblock %}`})]})]})]})]})]}),e.jsxs("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-6",children:"Best Practices dalam Arsitektur Pyramid"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Struktur Proyek"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:'Ikuti prinsip "separation of concerns" dengan memisahkan model, view, dan controller'}),e.jsx("li",{children:"Gunakan package terpisah untuk komponen besar (auth, admin, api, dll)"}),e.jsx("li",{children:"Hindari cyclic imports dengan meletakkan kode inisialisasi di file __init__.py"}),e.jsx("li",{children:"Kelompokkan views berdasarkan fungsionalitas, bukan teknologi"})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg border border-green-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Flexibility vs. Consistency"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid memberikan fleksibilitas tinggi, tetapi sebaiknya tetap konsisten dalam satu proyek:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Tentukan standar untuk definisi route (decorator vs. imperativ)"}),e.jsx("li",{children:"Pilih satu template engine dan konsisten menggunakannya"}),e.jsx("li",{children:"Standardisasi error handling dan response format"}),e.jsx("li",{children:"Dokumentasikan keputusan arsitektur untuk memudahkan onboarding"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Memaksimalkan Keuntungan Arsitektur Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Meskipun fleksibel, arsitektur Pyramid memiliki beberapa keunggulan spesifik yang perlu dimanfaatkan:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Modular:"})," Pisahkan aplikasi menjadi komponen independen dengan config.include()"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extensible:"})," Manfaatkan subscribers, tweens, dan hooks untuk modifikasi perilaku"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalable:"})," Mulai dengan struktur sederhana, lalu refactor secara incremental saat aplikasi berkembang"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testable:"})," Gunakan pyramid.testing untuk unit testing view tanpa memerlukan server lengkap"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Adaptable:"})," Sesuaikan pola arsitektur dengan kebutuhan spesifik domain"]})]})]})]})]})}),pt=({title:i,description:d,icon:o})=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"p-3 rounded-md bg-blue-100 mr-4",children:e.jsx(o,{size:24,className:"text-blue-600"})}),e.jsx("h3",{className:"text-xl font-semibold",children:i})]}),e.jsx("p",{className:"text-gray-700",children:d})]}),Wa=({code:i,title:d=null})=>e.jsxs("div",{className:"mb-6",children:[d&&e.jsx("h4",{className:"text-lg font-medium mb-2 text-blue-700",children:d}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md",children:e.jsx("code",{children:i})})]}),df=()=>e.jsx("div",{className:"min-h-screen p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("header",{className:"mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent",children:"Instalasi dan Konfigurasi Pyramid"}),e.jsxs("div",{className:"flex items-center justify-center text-xl text-gray-700 mb-6",children:[e.jsx(ax,{size:28,className:"text-blue-600 mr-3"}),e.jsx("span",{children:"Memulai dengan framework web Python yang fleksibel dan skalabel"})]})]}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(zu,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Prasyarat Instalasi"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Sebelum menginstal Pyramid, pastikan sistem Anda memenuhi persyaratan berikut untuk pengalaman pengembangan yang optimal."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[e.jsx(pt,{title:"Python 3.7+",description:"Pyramid 2.0+ membutuhkan Python versi 3.7 atau lebih baru. Disarankan menggunakan Python 3.9 atau 3.10 untuk kompatibilitas terbaik.",icon:Og}),e.jsx(pt,{title:"Pip & Setuptools",description:"Package installer Python (pip) versi terbaru dan setuptools diperlukan untuk mengelola dependensi Pyramid.",icon:Xg}),e.jsx(pt,{title:"Virtual Environment",description:"Sangat direkomendasikan menggunakan virtual environment untuk mengisolasi dependensi proyek Anda.",icon:jn})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Mengapa Virtual Environment?"}),e.jsx("p",{className:"text-gray-700",children:"Virtual environment memungkinkan Anda membuat lingkungan Python terisolasi untuk setiap proyek, mencegah konflik dependensi antar proyek, dan memudahkan pengelolaan versi package. Ini adalah praktik standar dalam pengembangan Python modern."})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Bg,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Proses Instalasi"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid dapat diinstal dengan berbagai cara, tetapi metode yang paling umum adalah menggunakan pip dalam virtual environment. Berikut adalah langkah-langkah detail untuk menginstal Pyramid dengan benar."}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. Mempersiapkan Lingkungan"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{children:e.jsx(Wa,{title:"Membuat Virtual Environment",code:`# Windows/macOS/Linux
python -m venv venv

# Aktivasi virtual environment
# Windows:
venv\\Scripts\\activate

# macOS/Linux:
source venv/bin/activate

# Memperbarui pip & setuptools
pip install --upgrade pip setuptools`})}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"Indikator Virtual Environment Aktif"}),e.jsx("p",{className:"text-gray-700 mb-4",children:'Saat virtual environment aktif, Anda akan melihat nama environment (biasanya "venv") di awal prompt shell Anda:'}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md",children:e.jsx("code",{children:"(venv) user@hostname:~/myproject$"})}),e.jsx("p",{className:"text-gray-700 mt-4",children:"Untuk menonaktifkan virtual environment, cukup ketik:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md mt-2",children:e.jsx("code",{children:"deactivate"})})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. Menginstal Pyramid"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsx(Wa,{title:"Instalasi Dasar",code:`# Instalasi Pyramid versi terbaru
pip install "pyramid"

# Instalasi Pyramid versi spesifik
pip install "pyramid==2.0.2"

# Instalasi dengan extras untuk memulai proyek
pip install "pyramid[starter]"`}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-100",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:'Pilihan "Extras" Instalasi'}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid menyediakan beberapa kumpulan dependensi opsional yang dapat diinstal berdasarkan kebutuhan:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"pyramid[starter]"}),": Dependensi untuk memulai proyek Pyramid dasar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pyramid[testing]"}),": Alat untuk testing aplikasi Pyramid"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pyramid[docs]"}),": Dependensi untuk membangun dokumentasi Pyramid"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pyramid[dev]"}),": Semua dependensi untuk pengembangan Pyramid (termasuk testing dan docs)"]})]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. Membuat Proyek Pyramid"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(Wa,{title:"Menggunakan Cookiecutter (Direkomendasikan)",code:`# Menginstal cookiecutter
pip install cookiecutter

# Membuat proyek dengan Cookiecutter Starter
cookiecutter gh:Pylons/pyramid-cookiecutter-starter

# ATAU menggunakan Cookiecutter SQLAlchemy
cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy`}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4",children:e.jsx("p",{className:"text-gray-700 text-sm",children:"Cookiecutter akan menanyakan beberapa pertanyaan seperti nama proyek, template engine yang digunakan, dan opsi lainnya untuk menyesuaikan proyek dengan kebutuhan Anda."})})]}),e.jsxs("div",{children:[e.jsx(Wa,{title:"Menggunakan pcreate (Cara Lama)",code:`# Metode pcreate (deprecating)
pcreate -s starter myproject

# Menginstal proyek dalam mode editable
cd myproject
pip install -e ".[dev]"`}),e.jsx("div",{className:"bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4",children:e.jsxs("p",{className:"text-gray-700 text-sm",children:[e.jsx("strong",{children:"Catatan:"})," pcreate sedang dalam proses deprecated dan akan dihapus di versi mendatang. Direkomendasikan menggunakan cookiecutter sebagai gantinya."]})})]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"4. Menjalankan Proyek"}),e.jsx(Wa,{title:"Memulai Server Pengembangan",code:`# Di direktori proyek
cd myproject

# Menjalankan server dengan auto-reload
pserve development.ini --reload

# ATAU menggunakan waitress (untuk produksi)
pip install waitress
waitress-serve --port=6543 myproject:app`}),e.jsxs("div",{className:"mt-4 p-6 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"text-lg font-medium mb-2 text-green-700",children:"Server Berjalan!"}),e.jsx("p",{className:"text-gray-700",children:"Aplikasi Pyramid Anda kini berjalan dan dapat diakses di:"}),e.jsx("div",{className:"mt-2 p-3 bg-white rounded-md border border-gray-200 font-mono text-green-600",children:"http://localhost:6543"}),e.jsxs("p",{className:"text-gray-700 mt-3",children:["Flag ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"--reload"})," memungkinkan server memuat ulang secara otomatis saat ada perubahan kode, sangat berguna selama pengembangan."]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(jn,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Struktur Direktori Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Memahami struktur direktori standar Pyramid sangat penting untuk pengembangan yang efisien. Berikut adalah eksplorasi struktur direktori yang dihasilkan oleh scaffold Pyramid standar."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Struktur Direktori Dasar"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md ",children:e.jsx("code",{children:`myproject/
│
├── CHANGES.txt              # Log perubahan proyek
├── MANIFEST.in              # Instruksi packaging
├── README.txt               # Dokumentasi proyek
├── development.ini          # Konfigurasi pengembangan
├── production.ini           # Konfigurasi produksi
├── pytest.ini               # Konfigurasi pengujian
├── setup.py                 # Script instalasi package
│
└── myproject/               # Package Python utama
    ├── __init__.py          # Entry point aplikasi
    ├── routes.py            # Definisi rute
    ├── static/              # File statis (CSS, JS, dsb)
    │   ├── theme.css
    │   └── app.js
    ├── templates/           # Template HTML
    │   ├── layout.jinja2
    │   └── home.jinja2
    ├── views/               # View functions/callables
    │   ├── __init__.py
    │   ├── default.py
    │   └── notfound.py
    └── models/              # Model data (bila ada)
        └── __init__.py`})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"File-file Penting"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"setup.py"}),e.jsxs("p",{className:"text-gray-700 text-sm",children:["Mendefinisikan metadata proyek dan dependensi. Ini adalah file yang digunakan pip untuk menginstal proyek Anda dengan ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"pip install -e ."})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"__init__.py"}),e.jsxs("p",{className:"text-gray-700 text-sm",children:["Entry point utama aplikasi yang berisi factory function untuk membuat aplikasi WSGI. Biasanya berisi fungsi ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"main()"})," yang dikonfigurasi di setup.py."]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"development.ini & production.ini"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"File konfigurasi yang digunakan untuk menjalankan aplikasi pada mode pengembangan atau produksi. Berisi pengaturan server, logging, dan konfigurasi aplikasi."})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"routes.py"}),e.jsxs("p",{className:"text-gray-700 text-sm",children:["Mendefinisikan pemetaan URL dengan fungsi view yang akan menangani request. Biasanya berisi fungsi ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"includeme()"})," yang dipanggil melalui ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"config.include('.routes')"}),"."]})]})]}),e.jsxs("div",{className:"mt-6 p-5 bg-blue-50 rounded-lg border-l-4 border-blue-400",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"Struktur yang Dapat Disesuaikan"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Penting untuk dicatat bahwa Pyramid tidak memaksakan struktur direktori tertentu. Struktur di atas adalah konvensi umum, tetapi Anda bebas menyesuaikannya sesuai kebutuhan proyek. Untuk aplikasi yang sangat sederhana, semua kode bahkan dapat ditempatkan dalam satu file."})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Struktur Konfigurasi INI"}),e.jsx(Wa,{title:"Contoh File development.ini",code:`[app:main]
use = egg:myproject

pyramid.reload_templates = true
pyramid.debug_authorization = false
pyramid.debug_notfound = false
pyramid.debug_routematch = false
pyramid.default_locale_name = en
pyramid.includes =
    pyramid_debugtoolbar
    pyramid_jinja2

# Database URL if using SQLAlchemy
sqlalchemy.url = sqlite:///%(here)s/myproject.sqlite

[server:main]
use = egg:waitress#main
listen = localhost:6543

# Logging configuration
[loggers]
keys = root, myproject

[handlers]
keys = console

[formatters]
keys = generic

[logger_root]
level = INFO
handlers = console

[logger_myproject]
level = DEBUG
handlers =
qualname = myproject

[handler_console]
class = StreamHandler
args = (sys.stderr,)
level = NOTSET
formatter = generic

[formatter_generic]
format = %(asctime)s %(levelname)-5.5s [%(name)s:%(lineno)s][%(threadName)s] %(message)s`})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Struktur untuk Aplikasi Kompleks"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Untuk aplikasi yang lebih besar, Pyramid mendukung struktur modular dengan pemisahan berdasarkan fitur atau fungsi bisnis:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md text-sm",children:e.jsx("code",{children:`myproject/
├── setup.py
└── myproject/
    ├── __init__.py
    ├── core/             # Fungsi-fungsi inti
    ├── auth/             # Autentikasi & pengguna
    │   ├── __init__.py
    │   ├── models.py
    │   ├── views.py
    │   └── templates/
    ├── blog/             # Fitur blog
    │   ├── __init__.py
    │   ├── models.py
    │   ├── views.py
    │   └── templates/
    └── admin/            # Panel admin
        ├── __init__.py
        ├── views.py
        └── templates/`})})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg border border-green-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Praktik Terbaik Struktur Proyek"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Kelompokkan fitur-fitur terkait dalam subpackage"}),e.jsxs("li",{children:["Pakai ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"includeme()"})," di setiap package untuk registrasi konfigurasi"]}),e.jsx("li",{children:"Gunakan namespace templates untuk mencegah konflik"}),e.jsx("li",{children:'Terapkan "asset specifications" untuk mereferensikan resource'}),e.jsx("li",{children:"Pisahkan konfigurasi ke bagian-bagian logis"}),e.jsx("li",{children:"Buat struktur direktori yang mencerminkan domain bisnis"}),e.jsx("li",{children:"Tetap konsisten dengan konvensi penamaan"})]}),e.jsxs("p",{className:"mt-4 text-gray-700",children:["Gunakan ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"config.include('myproject.modulename')"})," di file ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"__init__.py"})," untuk menyertakan submodul ke dalam konfigurasi utama."]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Kl,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Konfigurasi Mendalam"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid menyediakan sistem konfigurasi yang komprehensif dan fleksibel. Berikut adalah detail tentang cara mengkonfigurasi berbagai aspek aplikasi Pyramid Anda."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Konfigurasi Dasar Aplikasi"}),e.jsx(Wa,{code:`# myproject/__init__.py
from pyramid.config import Configurator

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application. """
    with Configurator(settings=settings) as config:
        # Includes
        config.include('pyramid_jinja2')
        config.include('.routes')
        
        # Static views
        config.add_static_view('static', 'static', cache_max_age=3600)
        
        # Session configuration
        config.set_session_factory(...)
        
        # Authentication and authorization
        config.set_authentication_policy(...)
        config.set_authorization_policy(...)
        
        # Scan for view decorators
        config.scan()
        
        return config.make_wsgi_app()`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"File INI vs Settings Programatik"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Pyramid menggunakan kombinasi file konfigurasi INI dan kode Python untuk menerapkan konfigurasi."}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"File INI"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"Konfigurasi server dan lingkungan"}),e.jsx("li",{children:"Pengaturan logging"}),e.jsx("li",{children:"Parameter konfigurasi aplikasi"}),e.jsx("li",{children:"URL database dan pengaturan koneksi"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"Kode Python"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"Definisi routes dan views"}),e.jsx("li",{children:"Registrasi renderers"}),e.jsx("li",{children:"Middleware dan tweens"}),e.jsx("li",{children:"Event subscribers"}),e.jsx("li",{children:"Authentication & authorization policies"})]})]}),e.jsx("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-100",children:e.jsxs("p",{className:"text-gray-700 text-sm",children:[e.jsx("strong",{children:"Pro Tip:"})," Pengaturan di file INI dapat diakses sebagai dictionary melalui parameter ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"settings"})," yang diteruskan ke fungsi ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"main()"}),"."]})})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Konfigurasi Route & View"}),e.jsx("div",{className:"grid md:grid-cols-1 gap-6",children:e.jsx(Wa,{code:`# routes.py
def includeme(config):
    # Basic routes
    config.add_route('home', '/')
    config.add_route('about', '/about')
    
    # Route with path variables
    config.add_route('user_profile', '/users/{username}')
    
    # Route with regex constraint
    config.add_route('article', '/article/{id:\\d+}')
    
    # Route with HTTP method predicate
    config.add_route('api_users', '/api/users', 
                     request_method='GET')
    config.add_route('api_create_user', '/api/users', 
                     request_method='POST')
    
    # Route with custom predicate
    config.add_route('admin', '/admin',
                     custom_predicates=[is_admin])
                     
# views.py
from pyramid.view import view_config

@view_config(route_name='home', renderer='templates/home.jinja2')
def home(request):
    return {'project': 'MyProject'}

# View with permission
@view_config(route_name='admin', renderer='templates/admin.jinja2',
             permission='admin')
def admin_panel(request):
    return {'admin_tools': get_tools()}`})})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-6",children:[e.jsx(pt,{title:"Renderers",description:"Mengkonfigurasi output format untuk view Anda, seperti Jinja2, JSON, atau custom renderers untuk format output khusus.",icon:no}),e.jsx(pt,{title:"Authentication",description:"Sistem untuk mengidentifikasi user, biasanya dikonfigurasi dengan `set_authentication_policy()` menggunakan berbagai policy seperti session-based atau JWT.",icon:Hu}),e.jsx(pt,{title:"Environment Variables",description:"Gunakan variabel lingkungan untuk menyimpan konfigurasi sensitif seperti kredensial database dan kunci API alih-alih di kode.",icon:Kl})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Praktik Konfigurasi Terbaik"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Modularitas:"})," Pisahkan konfigurasi menjadi modul yang dapat digunakan kembali"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Konfigurasi Berbasis Lingkungan:"})," Gunakan file .ini yang berbeda untuk dev/staging/prod"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Settings Dictionary:"})," Akses pengaturan melalui request.registry.settings"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Environment Variables:"})," Gunakan untuk kredensial dan konfigurasi sensitif"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bootstrapping Bertahap:"})," Mulai dengan konfigurasi minimal, tambahkan sesuai kebutuhan"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Package Config:"})," Gunakan config.include() untuk konfigurasi berbasis paket"]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Contoh Konfigurasi Menyeluruh"}),e.jsx(Wa,{code:`# myproject/__init__.py
import os
from pyramid.config import Configurator
from pyramid.authentication import SessionAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid.session import SignedCookieSessionFactory

def main(global_config, **settings):
    """ Fungsi ini mengembalikan aplikasi WSGI Pyramid. """
    
    # Variabel lingkungan dapat mengoverride settings dari file INI
    settings['sqlalchemy.url'] = os.environ.get('DATABASE_URL', 
                                settings['sqlalchemy.url'])
    
    # Konfigurasi session
    session_factory = SignedCookieSessionFactory(
        settings['session.secret'],
        timeout=3600,
        reissue_time=300
    )
    
    # Konfigurasi autentikasi
    authn_policy = SessionAuthenticationPolicy(
        callback=groupfinder,
        debug=settings.get('pyramid.debug_authorization', False)
    )
    
    # Konfigurasi authorization
    authz_policy = ACLAuthorizationPolicy()
    
    with Configurator(
        settings=settings,
        session_factory=session_factory,
        authentication_policy=authn_policy,
        authorization_policy=authz_policy
    ) as config:
        # Includes
        config.include('pyramid_jinja2')
        config.include('pyramid_tm')
        config.include('.routes')
        config.include('.security')
        config.include('.models')
        
        # Static assets
        config.add_static_view('static', 'static', cache_max_age=3600)
        config.add_static_view('uploads', 'var/uploads')
        
        # Base route
        config.add_route('home', '/')
        
        # Error views
        config.add_notfound_view(renderer='templates/404.jinja2')
        config.add_forbidden_view(renderer='templates/403.jinja2')
        
        # Scan untuk dekorator @view_config
        config.scan('.views')
        
        return config.make_wsgi_app()`})]})]})]})})]})}),qa=({title:i,description:d,icon:o})=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"p-3 rounded-md bg-blue-100 mr-4",children:e.jsx(o,{size:24,className:"text-blue-600"})}),e.jsx("h3",{className:"text-xl font-semibold",children:i})]}),e.jsx("p",{className:"text-gray-700",children:d})]}),wa=({code:i,title:d=null})=>e.jsxs("div",{className:"mb-6",children:[d&&e.jsx("h4",{className:"text-lg font-medium mb-2 text-blue-700",children:d}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto",children:e.jsx("code",{children:i})})]}),cf=()=>e.jsx("div",{className:"min-h-screen p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("header",{className:"mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent",children:"Routing dan URL Dispatch di Pyramid"}),e.jsxs("div",{className:"flex items-center justify-center text-xl text-gray-700 mb-6",children:[e.jsx(Zg,{size:28,className:"text-blue-600 mr-3"}),e.jsx("span",{children:"Sistem routing untuk menangani permintaan HTTP dengan pola URL fleksibel"})]})]}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx($l,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Pengenalan Routing di Pyramid"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Routing adalah mekanisme yang menghubungkan URL yang diminta oleh pengguna dengan kode Python yang akan dieksekusi (view) untuk menangani permintaan tersebut. Pyramid menyediakan sistem routing yang fleksibel dan kuat yang disebut URL Dispatch."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[e.jsx(qa,{title:"Pattern Matching",description:"Mendukung pencocokan pola URL sederhana hingga pola kompleks dengan ekspresi reguler untuk kebutuhan routing yang canggih.",icon:Kg}),e.jsx(qa,{title:"Route Predicates",description:"Memungkinkan pembatasan rute berdasarkan metode HTTP, domain, header, dan kondisi kustom lainnya.",icon:Ln}),e.jsx(qa,{title:"URL Generation",description:"Membuat URL secara dinamis berdasarkan nama rute dan parameter yang diberikan, untuk pembuatan link dalam aplikasi.",icon:Il})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Dua Sistem Routing di Pyramid"}),e.jsx("p",{className:"text-gray-700",children:"Pyramid sebenarnya memiliki dua sistem routing yang berbeda:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"URL Dispatch"})," - Sistem berbasis rute yang akan kita bahas dalam materi ini"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Traversal"})," - Pendekatan berbasis hierarki resource untuk aplikasi yang sangat berorientasi pada konten"]})]}),e.jsx("p",{className:"text-gray-700 mt-2",children:"URL Dispatch adalah sistem yang paling sering digunakan karena kesederhanaan dan kecepatannya, serta kemiripannya dengan framework web lain."})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(qg,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Pendefinisian Rute"}),e.jsxs("p",{className:"text-gray-700 mb-6",children:["Dalam Pyramid, rute didefinisikan menggunakan metode ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"config.add_route()"}),". Metode ini mengaitkan nama rute dengan pola URL dan opsional parameter tambahan."]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Definisi Dasar Rute"}),e.jsx(wa,{title:"Pendefinisian Rute Dasar",code:`# Dalam file routes.py atau __init__.py
def includeme(config):
    # Rute sederhana - pola statis
    config.add_route('home', '/')
    config.add_route('about', '/about')
    config.add_route('contact', '/contact-us')
    
    # Rute dengan variabel path
    config.add_route('user_profile', '/users/{username}')
    config.add_route('blog_post', '/blog/{year}/{month}/{slug}')
    
    # Rute dengan tipe variabel (menggunakan pattern)
    config.add_route('article', '/article/{id:\\d+}')  # id harus berupa digit
    config.add_route('category', '/category/{name:[a-z0-9-]+}')`}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"Anatomi add_route()"}),e.jsxs("p",{className:"text-gray-700 mb-4",children:["Metode ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"add_route()"})," memiliki dua parameter wajib:"]}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"name"})," - Nama unik untuk route (digunakan untuk URL generation)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pattern"})," - Pola URL yang akan dicocokkan"]})]}),e.jsxs("p",{className:"text-gray-700 mt-4",children:["Nama route digunakan untuk menghasilkan URL secara programatis menggunakan fungsi",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.route_url()"})," atau ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.route_path()"}),"."]})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-100",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"Variabel Path"}),e.jsxs("p",{className:"text-gray-700 mb-4",children:["Format umum untuk variabel path adalah ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"{nama_variabel}"})," atau",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"{nama_variabel:pola_regex}"})]}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Variabel tanpa regex akan mencocokkan semua karakter hingga slash berikutnya"}),e.jsx("li",{children:"Variabel dengan regex hanya mencocokkan pola yang ditentukan"}),e.jsxs("li",{children:["Nilai variabel path tersedia di ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.matchdict"})]})]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Route Predicates"}),e.jsxs("p",{className:"text-gray-700 mb-4",children:["Pyramid memungkinkan Anda membatasi kapan sebuah rute cocok dengan menggunakan predikat. Predikat adalah kata kunci tambahan yang diberikan ke ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"add_route()"}),"."]}),e.jsx(wa,{title:"Penggunaan Route Predicates",code:`# Predikat berdasarkan metode HTTP
config.add_route('api_users_get', '/api/users', request_method='GET')
config.add_route('api_users_post', '/api/users', request_method='POST')

# Predikat berdasarkan header permintaan
config.add_route('mobile_home', '/', request_header='X-Device=mobile')
config.add_route('desktop_home', '/', request_header='X-Device=desktop')

# Predikat berdasarkan parameter query string
config.add_route('search_products', '/search', request_param='type=product')
config.add_route('search_users', '/search', request_param='type=user')

# Menggabungkan beberapa predikat
config.add_route('api_v1', '/api/data',
                request_method='GET',
                request_param='version=1')`}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mt-6",children:[e.jsx(qa,{title:"request_method",description:"Membatasi route agar hanya cocok dengan metode HTTP tertentu (GET, POST, PUT, DELETE, dll).",icon:no}),e.jsx(qa,{title:"request_param",description:"Route hanya cocok jika query string memiliki parameter tertentu atau nilai tertentu.",icon:Wg}),e.jsx(qa,{title:"custom_predicates",description:"Fungsi yang mengevaluasi permintaan dan mengembalikan True atau False untuk menentukan apakah route cocok.",icon:Ln})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Urutan Rute Penting!"}),e.jsxs("div",{className:"flex items-start",children:[e.jsx(Jl,{size:24,className:"text-yellow-600 mt-1 mr-3 flex-shrink-0"}),e.jsxs("p",{className:"text-gray-700",children:['Urutan pendefinisian rute sangat penting. Pyramid akan mencocokkan rute dalam urutan mereka didefinisikan. Rute yang lebih spesifik harus didefinisikan sebelum rute yang lebih umum untuk mencegah "penyembunyian rute". Misalnya,',e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"'/pages/about'"}),"harus didefinisikan sebelum",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"/pages/{name}"}),", jika tidak",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"/pages/about"}),"tidak akan pernah dicocokkan."]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Ln,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Konfigurasi View dengan Dekorator"}),e.jsxs("p",{className:"text-gray-700 mb-6",children:["Setelah rute didefinisikan, Anda perlu mengaitkannya dengan fungsi view yang akan dijalankan ketika rute cocok. Pyramid menyediakan dekorator ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"@view_config"})," untuk memetakan view ke rute."]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Dekorator View Config"}),e.jsx(wa,{title:"Menghubungkan View dengan Route",code:`# views.py
from pyramid.view import view_config
from pyramid.response import Response

# View sederhana yang dikaitkan dengan route 'home'
@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    return {'page_title': 'Beranda'}

# View dengan variabel path dari URL
@view_config(route_name='user_profile', renderer='templates/profile.jinja2')
def user_profile(request):
    username = request.matchdict['username']
    user_data = get_user_data(username)  # fungsi hypotetis
    return {'user': user_data}

# View dengan renderer JSON
@view_config(route_name='api_users_get', renderer='json')
def api_get_users(request):
    users = get_all_users()  # fungsi hypotetis
    return {'status': 'success', 'users': users}

# View yang menanggapi permintaan POST dengan parameter JSON
@view_config(route_name='api_users_post', renderer='json', request_method='POST')
def api_create_user(request):
    user_data = request.json_body
    user_id = create_user(user_data)  # fungsi hypotetis
    return {'status': 'success', 'id': user_id}`}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Parameter @view_config"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"route_name"}),e.jsxs("p",{className:"text-gray-700 text-sm",children:["Nama rute yang akan dikaitkan dengan view. Ini harus cocok dengan nama yang diberikan di",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"config.add_route()"}),"."]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"renderer"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Template atau format output. Bisa berupa path template ('templates/home.jinja2'), format ('json'), atau renderer kustom."})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"permission"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Permission yang diperlukan untuk mengakses view ini. Digunakan bersama dengan sistem authorization Pyramid."})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"context"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Kelas atau objek konteks yang harus cocok untuk view ini untuk dijalankan. Berguna saat menggunakan traversal atau resource trees."})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Opsi Dekorator Tambahan"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"request_method"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Membatasi view untuk metode HTTP tertentu ('GET', 'POST', 'PUT', dll). Bisa berupa string atau daftar string."})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"request_param"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"View hanya dijalankan jika parameter query string tertentu ada atau memiliki nilai tertentu."})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"xhr"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"Jika True, view hanya dipanggil untuk permintaan AJAX. Jika False, view tidak akan dipanggil untuk permintaan AJAX."})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-1",children:"header"}),e.jsx("p",{className:"text-gray-700 text-sm",children:"View hanya dipanggil jika header permintaan HTTP tertentu ada atau cocok dengan nilai tertentu."})]})]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Mengakses Parameter URL"}),e.jsx(wa,{title:"Mengakses Parameter di View",code:`@view_config(route_name='blog_post', renderer='templates/post.jinja2')
def blog_post_view(request):
    # Mengakses variabel path dari URL
    year = request.matchdict['year']
    month = request.matchdict['month']
    slug = request.matchdict['slug']
    
    # Mengakses parameter query string
    show_comments = request.params.get('comments', 'true').lower() == 'true'
    page = int(request.params.get('page', 1))
    
    # Logika untuk mendapatkan post
    post = get_blog_post(year, month, slug)
    comments = get_comments(post.id) if show_comments else []
    
    return {
        'post': post,
        'comments': comments,
        'show_comments': show_comments,
        'page': page
    }`}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-100",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"request.matchdict"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Dictionary yang berisi semua variabel path yang diekstrak dari URL berdasarkan pola rute."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsxs("li",{children:["Untuk rute ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"/users/{username}"})]}),e.jsxs("li",{children:["URL ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"/users/john"})]}),e.jsx("li",{children:e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.matchdict['username'] == 'john'"})})]})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border border-blue-100",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"request.params"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"MultiDict yang berisi parameter query string dan parameter form POST."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsxs("li",{children:["Untuk URL ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"'/search?q=python&sort=date'"})]}),e.jsx("li",{children:e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.params['q'] == 'python'"})}),e.jsx("li",{children:e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.params['sort'] == 'date'"})}),e.jsxs("li",{children:["Gunakan ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:".get(key, default)"})," untuk nilai default"]})]})]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Il,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Pembentukan URL"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Fitur penting dari sistem routing Pyramid adalah kemampuan untuk membentuk URL secara dinamis berdasarkan nama rute dan parameter. Ini memungkinkan Anda menghasilkan link tanpa hardcoding URL, membuat aplikasi lebih mudah dikelola."}),e.jsxs("div",{className:"mb-8",children:[e.jsx(wa,{title:"Membentuk URL dari Nama Route",code:`# Di dalam fungsi view
@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    # URL lengkap termasuk domain
    user_url = request.route_url(
        'user_profile',             # nama route
        username='john',            # variabel path
        _query={'tab': 'photos'},   # parameter query string
        _anchor='bio'               # fragment (bagian setelah #)
    )
    # Menghasilkan: http://example.com/users/john?tab=photos#bio
    
    # Hanya path URL tanpa domain
    article_path = request.route_path(
        'article',
        id=42
    )
    # Menghasilkan: /article/42
    
    return {
        'user_url': user_url,
        'article_path': article_path
    }`}),e.jsx(wa,{title:"Membentuk URL di Template Jinja2",code:`{# Dalam template Jinja2 #}
<nav>
  <a href="{{ request.route_path('home') }}">Beranda</a>
  <a href="{{ request.route_path('about') }}">Tentang</a>
  <a href="{{ request.route_path('user_profile', username=current_user.username) }}">
    Profil Saya
  </a>
  <a href="{{ request.route_path('search', _query={'q': 'pyramid'}) }}">
    Pencarian Pyramid
  </a>
</nav>`}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mt-6",children:[e.jsx(qa,{title:"route_url()",description:"Menghasilkan URL absolut lengkap termasuk skema, domain, dan port. Ideal untuk email dan komunikasi eksternal.",icon:$l}),e.jsx(qa,{title:"route_path()",description:"Menghasilkan path URL relatif (tanpa domain). Ideal untuk link internal dalam aplikasi web.",icon:Il}),e.jsx(qa,{title:"current_route_(url|path)()",description:"Menghasilkan URL/path ke rute saat ini, berguna untuk membuat varian dari halaman saat ini.",icon:ur})]})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parameter Tambahan route_url dan route_path"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Kedua fungsi pembentuk URL menerima parameter tambahan khusus:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"_query"})," - dict atau daftar tuple untuk parameter query string"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"_anchor"})," - fragment identifier (bagian setelah #)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"_scheme"})," - skema URL (http, https) untuk route_url"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"_host"})," - override hostname untuk route_url"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"_port"})," - override port untuk route_url"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"_app_url"})," - base application URL untuk route_url"]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Hg,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Teknik Routing Lanjutan"}),e.jsx("p",{className:"text-gray-700 mb-6",children:"Pyramid menyediakan beberapa fitur routing lanjutan yang dapat membantu dalam kasus yang lebih kompleks."}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Predikat Kustom"}),e.jsx(wa,{title:"Membuat dan Menggunakan Predikat Kustom",code:`# Mendefinisikan fungsi predikat
def is_admin(info, request):
    """Mencocokkan hanya jika pengguna adalah admin."""
    return request.user and request.user.is_admin

def api_version_at_least(version):
    """Factory untuk predikat berdasarkan versi API."""
    def predicate(info, request):
        req_version = request.headers.get('X-API-Version', '1.0')
        return float(req_version) >= float(version)
    return predicate

# Menggunakan predikat kustom
config.add_route('admin_dashboard', '/admin',
                custom_predicates=[is_admin])

config.add_route('api_v2', '/api/data',
                custom_predicates=[api_version_at_least('2.0')])`}),e.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6",children:[e.jsx("h4",{className:"text-lg font-medium mb-2 text-yellow-700",children:"Catatan tentang custom_predicates"}),e.jsxs("div",{className:"flex items-start",children:[e.jsx(Jl,{size:24,className:"text-yellow-600 mt-1 mr-3 flex-shrink-0"}),e.jsxs("p",{className:"text-gray-700",children:["Parameter ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"custom_predicates"})," sedang dalam proses deprecated di versi terbaru Pyramid. Cara yang lebih baru dan lebih direkomendasikan adalah dengan mendaftarkan predikat kustom menggunakan",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"config.add_route_predicate()"})," dan kemudian menggunakannya sebagai kata kunci dalam ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"add_route()"}),"."]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Route Factories"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Route factories memungkinkan Anda memisahkan logika pemuatan resource dari view."}),e.jsx(wa,{title:"Menggunakan Route Factories",code:`# Definisi factory
class BlogPostFactory:
    def __init__(self, request):
        self.request = request
    
    def __call__(self):
        post_id = self.request.matchdict['post_id']
        post = get_blog_post(post_id)  # Fungsi hypotetis
        if not post:
            raise HTTPNotFound()
        return post

# Konfigurasi route dengan factory
config.add_route('blog_post', '/blog/{post_id}', 
                factory=BlogPostFactory)

# View yang menggunakan konteks dari factory
@view_config(route_name='blog_post', renderer='templates/post.jinja2')
def blog_post_view(request):
    # Objek post sudah tersedia dari factory
    post = request.context
    return {'post': post}`}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mt-6",children:[e.jsx("h4",{className:"text-lg font-medium mb-2 text-blue-700",children:"Keuntungan Route Factories"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[e.jsx("li",{children:"Memisahkan logika pemuatan resource dari view"}),e.jsx("li",{children:"Memungkinkan penggunaan yang sama dengan traversal"}),e.jsx("li",{children:"Dapat melakukan otorisasi awal sebelum view dipanggil"}),e.jsx("li",{children:"Dapat mengembalikan 404 jika resource tidak ditemukan"})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Route Prefixes"}),e.jsx(wa,{title:"Menggunakan Route Prefixes untuk API Versioning",code:`# routes.py
def includeme(config):
    # API v1 routes
    config.add_route('api_v1_users', '/api/v1/users')
    config.add_route('api_v1_posts', '/api/v1/posts')
    
    # API v2 routes dengan prefix
    config.add_route('api_v2_users', '/users', 
                    factory=APIV2Factory,
                    header='X-API-Version=2.0')
    config.add_route('api_v2_posts', '/posts',
                    factory=APIV2Factory,
                    header='X-API-Version=2.0')

    # Frontend routes
    config.add_route('home', '/')
    config.add_route('about', '/about')

# application.py
def main(global_config, **settings):
    config = Configurator(settings=settings)
    
    # Include API v1 routes dengan prefix
    config.include('myapp.routes', route_prefix='/api/v1')
    
    # Include API v2 routes tanpa prefix di URL
    config.include('myapp.routes', route_prefix='/api/v2')
    
    # Include frontend routes tanpa prefix
    config.include('myapp.routes')
    
    return config.make_wsgi_app()`}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"Route Prefix vs URL Prefix"}),e.jsxs("p",{className:"text-gray-700",children:[e.jsx("strong",{children:"Route Prefix"})," diterapkan saat konfigurasi routing dan mempengaruhi bagaimana URL dicocokkan.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"URL Prefix"})," biasanya diterapkan di level WSGI (misal melalui proxy) dan tidak mempengaruhi routing Pyramid."]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h4",{className:"text-lg font-medium mb-3 text-blue-700",children:"Kapan Menggunakan Route Prefix"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Versioning API"}),e.jsx("li",{children:"Multi-tenant applications"}),e.jsx("li",{children:"Modular applications dengan route namespace"}),e.jsx("li",{children:"Ketika ingin memisahkan route secara logis"})]})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Static Routes"}),e.jsx(wa,{title:"Menambahkan Static Routes untuk Assets",code:`# Menambahkan route untuk static assets
config.add_static_view(name='static', path='myapp:static')

# Dengan cache control
config.add_static_view(name='static', path='myapp:static',
                     cache_max_age=3600)

# Dengan route prefix
config.add_static_view(name='media', path='/var/www/media',
                     route_prefix='uploads')

# Menggunakan static route di template
<link rel="stylesheet" href="{{ request.static_url('myapp:static/css/style.css') }}">`}),e.jsxs("div",{className:"bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mt-6",children:[e.jsx("h4",{className:"text-lg font-medium mb-2 text-green-700",children:"Best Practices Static Files"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:["Gunakan ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"request.static_url()"})," untuk menghasilkan URL assets"]}),e.jsxs("li",{children:["Setel ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"cache_max_age"})," yang sesuai untuk assets"]}),e.jsx("li",{children:"Untuk production, pertimbangkan untuk menggunakan CDN atau web server statis (Nginx)"}),e.jsxs("li",{children:["Gunakan package name (misal ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"myapp:static"}),") untuk menghindari konflik"]})]})]})]})]})]})}),e.jsx("section",{className:"mb-12 bg-white p-8 rounded-xl shadow-md",children:e.jsxs("div",{className:"flex items-start mb-6",children:[e.jsx(Hu,{size:28,className:"text-blue-600 mt-1 mr-4 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold mb-4",children:"Best Practices Routing"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-700",children:"Organisasi Route"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Kelompokkan route terkait dalam file/modul terpisah"}),e.jsxs("li",{children:["Gunakan ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"config.include()"})," untuk modularitas"]}),e.jsx("li",{children:"Pisahkan API routes dari frontend routes"}),e.jsx("li",{children:"Gunakan prefix untuk versioning API"}),e.jsx("li",{children:"Dokumentasikan route dengan komentar"})]})]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-700",children:"Desain URL"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Gunakan URL yang deskriptif dan bermakna"}),e.jsx("li",{children:"Hindari penggunaan parameter query untuk resource utama"}),e.jsx("li",{children:"Gunakan hyphen (-) bukan underscore (_) untuk URL"}),e.jsx("li",{children:"Pertahankan konsistensi dalam penamaan"}),e.jsx("li",{children:"Hindari perubahan URL setelah dipublikasikan"})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-700",children:"Keamanan Routing"})," ",e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[" ",e.jsx("li",{children:"Selalu validasi input dari URL (matchdict dan params)"})," ",e.jsx("li",{children:"Gunakan route predicates untuk pembatasan akses awal"})," ",e.jsx("li",{children:"Hindari mengekspose ID internal dalam URL jika memungkinkan"})," ",e.jsx("li",{children:"Gunakan permission dengan sistem ACL Pyramid"})," ",e.jsx("li",{children:"Pertimbangkan rate limiting untuk API endpoints"})," "]})," "]}),e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-700",children:"Optimasi Routing"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsx("li",{children:"Letakkan route yang sering diakses di atas"}),e.jsx("li",{children:"Gunakan regex yang efisien untuk pola kompleks"}),e.jsx("li",{children:"Hindari terlalu banyak predikat yang tidak perlu"}),e.jsx("li",{children:"Pertimbangkan menggunakan traversal untuk hierarki kompleks"}),e.jsx("li",{children:"Monitor dan uji performa routing"})]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mt-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Mengelola Perubahan URL"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"Ketika Anda perlu mengubah URL yang sudah ada, pertimbangkan strategi berikut untuk mempertahankan kompatibilitas:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Redirect:"})," Tambahkan route lama yang mengarahkan ke route baru"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Alias:"})," Definisikan route alternatif yang mengarah ke view yang sama"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Versioning:"})," Tambahkan versi baru sambil mempertahankan versi lama"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom Predicate:"})," Gunakan predikat untuk menangani URL lama dan baru"]})]}),e.jsx(wa,{title:"Contoh Redirect untuk URL Lama",code:`# Menambahkan redirect untuk URL yang diubah
                                    # Route lama yang redirect ke baru
config.add_route('old_route', '/old-path/{id}')

@view_config(route_name='old_route')
def old_route_redirect(request):
    new_url = request.route_url('new_route', id=request.matchdict['id'])
    return HTTPMovedPermanently(new_url)`})]})]})]})})]})});function uf(){return e.jsxs(Hn,{title:"Praktikum Python OOP",subtitle:"Pemrograman Berorientasi Objek dengan Python",children:[e.jsx(Q,{id:"tujuan",title:"Tujuan Praktikum",icon:e.jsx(Dn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan praktikum ini, Anda diharapkan mampu:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Memahami konsep dasar Object-Oriented Programming (OOP)"}),e.jsx("li",{children:"Mengimplementasikan Class dan Object dalam Python"}),e.jsx("li",{children:"Menerapkan Atribut dan Metode dalam Class"}),e.jsx("li",{children:"Menggunakan Constructor dan Self dalam Python"}),e.jsx("li",{children:"Implementasi Inheritance (Pewarisan) antar Class"}),e.jsx("li",{children:"Menerapkan Encapsulation dan Access Modifiers"}),e.jsx("li",{children:"Memahami Polymorphism dan Method Overriding"}),e.jsx("li",{children:"Implementasi Abstract Class dan Interface"})]})]})}),e.jsx(Q,{id:"dasar-teori",title:"Dasar Teori",icon:e.jsx(Sa,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(q,{type:"info",title:"Apa itu OOP?",children:e.jsx("p",{children:'Object-Oriented Programming (OOP) adalah paradigma pemrograman yang menggunakan konsep "objek" yang memiliki atribut dan metode. Python sepenuhnya mendukung OOP, dan memungkinkan kita untuk mendefinisikan class, membuat objek, dan menerapkan konsep inheritance, encapsulation, dan polymorphism.'})}),e.jsxs("div",{className:"overflow-x-auto",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 my-4",children:"Konsep Utama OOP"}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Konsep"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium uppercase tracking-wider",children:"Deskripsi"})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Class"}),e.jsx("td",{className:"px-4 py-2",children:"Blueprint untuk membuat objek yang mendefinisikan atribut dan metode yang dimiliki oleh semua instance"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Object"}),e.jsx("td",{className:"px-4 py-2",children:"Instance dari sebuah class yang memiliki state dan behavior"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Inheritance"}),e.jsx("td",{className:"px-4 py-2",children:"Kemampuan class untuk mewarisi atribut dan metode dari class lain"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Encapsulation"}),e.jsx("td",{className:"px-4 py-2",children:"Menyembunyikan detail implementasi dan membatasi akses langsung ke atribut class"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Polymorphism"}),e.jsx("td",{className:"px-4 py-2",children:"Kemampuan objek yang berbeda untuk merespons metode dengan nama yang sama"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 whitespace-nowrap font-medium",children:"Abstraction"}),e.jsx("td",{className:"px-4 py-2",children:"Menyederhanakan kompleksitas dengan menyembunyikan detail yang tidak perlu"})]})]})]})]}),e.jsx(q,{type:"tip",title:"Tips Memahami OOP",children:e.jsx("p",{children:"Bayangkan class seperti cetakan kue dan objek adalah kue yang dihasilkan. Setiap kue memiliki bentuk yang sama (metode) tapi bisa memiliki isian berbeda (atribut). Inheritance seperti membuat cetakan kue baru berdasarkan cetakan yang sudah ada, dengan tambahan fitur baru."})})]})}),e.jsx(Q,{id:"alat-bahan",title:"Alat dan Bahan",icon:e.jsx(Da,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Untuk mengikuti praktikum ini, Anda memerlukan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Python 3.x"}),": Pastikan Python sudah terpasang"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code Editor"}),": Visual Studio Code, PyCharm, atau editor teks lainnya"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Terminal"}),": Untuk menjalankan program Python"]})]}),e.jsx(q,{type:"tip",title:"Rekomendasi",children:e.jsx("p",{children:"Kami menyarankan menggunakan Visual Studio Code dengan ekstensi Python. Pastikan untuk menggunakan virtual environment jika ingin menginstal package tambahan."})})]})}),e.jsx(Q,{id:"langkah-praktikum",title:"Langkah Praktikum",icon:e.jsx(ft,{className:"w-6 h-6 text-blue-500"}),children:e.jsx(yt,{steps:[{id:1,title:"Membuat Class dan Object Sederhana",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Mari kita mulai dengan membuat class dan object sederhana untuk memahami konsep dasar OOP."}),e.jsx(O,{title:"mahasiswa.py",code:`# Membuat class Mahasiswa
class Mahasiswa:
    # Atribut Class (shared by all instances)
    jurusan = "Teknik Informatika"
    
    # Constructor/initializer
    def __init__(self, nama, nim):
        # Atribut Instance (unique for each instance)
        self.nama = nama
        self.nim = nim
        
    # Method
    def display_info(self):
        print(f"Nama: {self.nama}")
        print(f"NIM: {self.nim}")
        print(f"Jurusan: {self.jurusan}")
        
    def update_nama(self, nama_baru):
        self.nama = nama_baru
        print(f"Nama berhasil diubah menjadi {nama_baru}")

# Membuat object (instance) dari class Mahasiswa
mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs2 = Mahasiswa("Ani Wijaya", "TI67890")

# Mengakses atribut
print(f"Mahasiswa 1: {mhs1.nama}, NIM: {mhs1.nim}")
print(f"Mahasiswa 2: {mhs2.nama}, NIM: {mhs2.nim}")

# Memanggil method
print("\\nInformasi Mahasiswa 1:")
mhs1.display_info()

print("\\nInformasi Mahasiswa 2:")
mhs2.display_info()

# Mengubah atribut
mhs1.update_nama("Budi Prakoso")

# Mengubah class attribute (berlaku untuk semua instance)
Mahasiswa.jurusan = "Informatika"
print("\\nSetelah perubahan jurusan:")
mhs1.display_info()
mhs2.display_info()`,language:"python"}),e.jsxs(q,{type:"info",title:"Penjelasan",children:[e.jsx("p",{children:"Pada contoh ini:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Mahasiswa"}),": Mendefinisikan blueprint untuk membuat objek mahasiswa"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__init__"}),": Constructor/initializer yang dipanggil saat objek dibuat"]}),e.jsxs("li",{children:[e.jsx("code",{children:"self"}),": Referensi ke instance objek yang sedang berjalan"]}),e.jsxs("li",{children:[e.jsx("code",{children:"jurusan"}),": Class attribute yang dibagikan ke semua instance"]}),e.jsxs("li",{children:[e.jsx("code",{children:"nama, nim"}),": Instance attributes yang unik untuk setiap objek"]}),e.jsxs("li",{children:[e.jsx("code",{children:"display_info(), update_nama()"}),": Methods yang memanipulasi data objek"]})]})]})]})},{id:2,title:"Inheritance (Pewarisan)",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Inheritance memungkinkan kita untuk mendefinisikan class yang mewarisi atribut dan metode dari class lain."}),e.jsx(O,{title:"inheritance.py",code:`# Class dasar
class Kendaraan:
    def __init__(self, merek, tahun):
        self.merek = merek
        self.tahun = tahun
        self.odometer = 0
        
    def deskripsi(self):
        return f"{self.merek} ({self.tahun})"
    
    def baca_odometer(self):
        return f"Kendaraan ini telah berjalan sejauh {self.odometer} kilometer"
    
    def update_odometer(self, km):
        if km >= self.odometer:
            self.odometer = km
        else:
            print("Anda tidak dapat mengubah odometer!")

# Class turunan (inherited)
class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        # Memanggil constructor class parent
        super().__init__(merek, tahun)
        # Attribute tambahan
        self.tipe = tipe
        self.bensin = 100  # capacity in liters
        
    # Method tambahan
    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi sebanyak {liter} liter. Total: {self.bensin} liter"
    
    # Method overriding
    def deskripsi(self):
        # Extend method dari parent class
        base_desc = super().deskripsi()
        return f"{base_desc} - {self.tipe}"

# Class turunan kedua
class Motor(Kendaraan):
    def __init__(self, merek, tahun, cc):
        super().__init__(merek, tahun)
        self.cc = cc
    
    def deskripsi(self):
        return f"{self.merek} ({self.tahun}) - {self.cc}cc"

# Membuat instance
kendaraan1 = Kendaraan("Generic", 2020)
mobil1 = Mobil("Toyota", 2022, "SUV")
motor1 = Motor("Honda", 2021, 150)

# Menggunakan method dari class dasar
print(kendaraan1.deskripsi())
print(mobil1.deskripsi())  # Method yang di-override
print(motor1.deskripsi())  # Method yang di-override

# Menggunakan method dari class dasar yang diwarisi
mobil1.update_odometer(1500)
print(mobil1.baca_odometer())

# Menggunakan method dari class turunan
print(mobil1.isi_bensin(20))`,language:"python"}),e.jsxs(q,{type:"info",title:"Penjelasan",children:[e.jsx("p",{children:"Pada contoh ini:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Mobil(Kendaraan)"}),": Mobil adalah subclass dari Kendaraan"]}),e.jsxs("li",{children:[e.jsx("code",{children:"super().__init__(merek, tahun)"}),": Memanggil constructor dari class parent"]}),e.jsxs("li",{children:[e.jsx("code",{children:"deskripsi()"})," dalam class Mobil dan Motor: Method Overriding, mengubah implementasi method parent"]}),e.jsx("li",{children:"Instance Mobil dan Motor dapat mengakses semua method milik Kendaraan"}),e.jsx("li",{children:"Class turunan dapat menambahkan atribut dan method baru"})]})]})]})},{id:3,title:"Encapsulation dan Access Modifiers",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Encapsulation berarti menyembunyikan detail implementasi dan membatasi akses langsung ke atribut. Python menggunakan konvensi untuk access modifiers."}),e.jsx(O,{title:"encapsulation.py",code:`class Student:
                def __init__(self, name, nim):
                    self.name = name           # Public attribute
                    self._program = "Teknik"   # Protected attribute (konvensi)
                    self.__id = "2023-" + nim  # Private attribute
                
                # Public method
                def display_info(self):
                    return f"Name: {self.name}, Program: {self._program}, ID: {self.__id}"
                
                # Property decorator
                @property
                def program(self):
                    return self._program
                
                @program.setter
                def program(self, value):
                    if value in ["Teknik", "Sains", "Bisnis"]:
                        self._program = value
                    else:
                        print("Program tidak valid")
            
            # Membuat instance
            student1 = Student("Budi", "12345")
            
            # Mengakses public attribute
            print(f"Nama: {student1.name}")
            
            # Mengakses protected attribute (dapat diakses, tapi secara konvensi seharusnya tidak)
            print(f"Program (protected): {student1._program}")
            
            # Mencoba mengakses private attribute (akan error)
            try:
                print(student1.__id)  # Error!
            except AttributeError as e:
                print(f"Error: {e}")
            
            # Menggunakan name mangling untuk mengakses private attribute (tidak disarankan)
            print(f"ID (dengan name mangling): {student1._Student__id}")
            
            # Menggunakan property
            print(f"Program via property: {student1.program}")
            
            # Menggunakan property setter
            student1.program = "Sains"
            print(f"Program setelah diubah: {student1.program}")
            
            # Mencoba mengubah dengan nilai yang tidak valid
            student1.program = "Hukum"  # Akan menampilkan "Program tidak valid"
            print(f"Program tetap: {student1.program}")
            `,language:"python"}),e.jsx(q,{type:"info",title:"Penjelasan Access Modifiers di Python",children:e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Public"}),": Atribut/metode tanpa awalan underscore (misalnya ",e.jsx("code",{children:"name"}),"). Dapat diakses dari mana saja."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Protected"}),": Diawali dengan single underscore (misalnya ",e.jsx("code",{children:"_program"}),"). Ini hanya konvensi, masih bisa diakses dari luar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Private"}),": Diawali dengan double underscore (misalnya ",e.jsx("code",{children:"__id"}),'). Python melakukan "name mangling" sehingga sulit diakses dari luar.']}),e.jsxs("li",{children:[e.jsx("code",{children:"@property"}),": Decorator untuk membuat getter dan setter yang lebih pythonic."]})]})})]})},{id:4,title:"Polymorphism dan Method Overriding",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Polymorphism memungkinkan objek dari class yang berbeda merespons method dengan nama yang sama dengan cara yang berbeda."}),e.jsx(O,{title:"polymorphism.py",code:`# Class dasar
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        # Method yang akan di-override oleh class turunan
        pass

# Class turunan
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Cow(Animal):
    def speak(self):
        return f"{self.name} says Moo!"

# Fungsi yang mendemonstrasikan polymorphism
def animal_sound(animal):
    # Fungsi ini bisa menerima objek apa pun yang memiliki method speak()
    return animal.speak()

# Membuat instances dari berbagai class
dog = Dog("Buddy")
cat = Cat("Whiskers")
cow = Cow("Milly")

# Memanggil fungsi yang sama dengan objek yang berbeda
print(animal_sound(dog))  # Output: Buddy says Woof!
print(animal_sound(cat))  # Output: Whiskers says Meow!
print(animal_sound(cow))  # Output: Milly says Moo!

# Demonstrasi polymorphism dengan list
animals = [Dog("Rex"), Cat("Felix"), Cow("Betty")]

# Iterating melalui list objek yang berbeda
for animal in animals:
    print(animal.speak())`,language:"python"}),e.jsxs(q,{type:"info",title:"Penjelasan",children:[e.jsx("p",{children:"Pada contoh ini:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:["Semua class memiliki method ",e.jsx("code",{children:"speak()"})," tapi dengan implementasi berbeda"]}),e.jsxs("li",{children:["Fungsi ",e.jsx("code",{children:"animal_sound()"})," bisa menerima objek apa pun yang memiliki method ",e.jsx("code",{children:"speak()"})]}),e.jsx("li",{children:"Duck typing: Python tidak peduli tipe objek apa yang diberikan, selama objek tersebut memiliki method yang dipanggil"}),e.jsx("li",{children:"Polymorphism sangat berguna untuk membuat kode yang fleksibel dan dapat diperluas"})]})]})]})},{id:5,title:"Abstract Classes dan Interface",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700",children:["Python tidak memiliki abstract classes dan interface secara bawaan seperti bahasa lain, tetapi kita bisa mengimplementasikannya menggunakan module ",e.jsx("code",{children:"abc"})," ","(Abstract Base Classes)."]}),e.jsx(O,{title:"abstract_class.py",code:`from abc import ABC, abstractmethod

# Abstract Base Class
class Shape(ABC):
    @abstractmethod
    def area(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass
    
    def describe(self):
        """Method non-abstract (tidak wajib di-override)"""
        return "Ini adalah bentuk geometris"

# Concrete class (mengimplementasikan abstract methods)
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    # Override method non-abstract
    def describe(self):
        return f"Ini adalah persegi panjang dengan lebar {self.width} dan tinggi {self.height}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# Error jika mencoba instantiate abstract class
try:
    shape = Shape()  # Akan menghasilkan TypeError
except TypeError as e:
    print(f"Error saat membuat instance dari Shape: {e}")

# Membuat instance dari concrete classes
rectangle = Rectangle(5, 4)
circle = Circle(3)

# Menggunakan method
print(f"Luas persegi panjang: {rectangle.area()}")
print(f"Keliling persegi panjang: {rectangle.perimeter()}")
print(f"Deskripsi persegi panjang: {rectangle.describe()}")

print(f"Luas lingkaran: {circle.area():.2f}")
print(f"Keliling lingkaran: {circle.perimeter():.2f}")
print(f"Deskripsi lingkaran: {circle.describe()}")`,language:"python"}),e.jsx(q,{type:"info",title:"Implementasi Interface di Python",children:e.jsx("p",{children:'Python tidak memiliki keyword "interface" seperti Java, tetapi konsep interface dapat diimplementasikan dengan abstract base classes di mana semua method adalah abstract. Ini memaksa subclass untuk mengimplementasikan semua method yang ditentukan.'})})]})}]})}),e.jsxs(Q,{id:"tugas-praktikum",title:"Tugas Praktikum",icon:e.jsx(bn,{className:"w-6 h-6 text-blue-500"}),children:[e.jsxs("div",{className:"space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-600 mb-4",children:"Tugas: Sistem Manajemen Perpustakaan Sederhana"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Buatlah sistem manajemen perpustakaan sederhana menggunakan konsep OOP Python yang telah dipelajari. Fokus pada implementasi konsep class, inheritance, encapsulation, dan polymorphism."}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Persyaratan:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buatlah abstract class ",e.jsx("code",{children:"LibraryItem"})," yang menjadi dasar untuk semua item di perpustakaan"]}),e.jsxs("li",{children:["Implementasikan minimal 2 subclass (contoh: ",e.jsx("code",{children:"Book"})," ","dan ",e.jsx("code",{children:"Magazine"}),") yang mewarisi dari"," ",e.jsx("code",{children:"LibraryItem"})]}),e.jsx("li",{children:"Setiap subclass harus mengimplementasikan minimal satu method abstract dari parent class"}),e.jsxs("li",{children:["Buatlah class ",e.jsx("code",{children:"Library"})," untuk menyimpan dan mengelola koleksi item perpustakaan"]}),e.jsx("li",{children:"Terapkan encapsulation menggunakan access modifiers (protected/private) untuk melindungi data penting"}),e.jsx("li",{children:"Gunakan property decorator untuk minimal satu atribut di salah satu class"}),e.jsxs("li",{children:["Sistem minimal harus dapat:",e.jsxs("ul",{className:"list-circle pl-6 mt-1",children:[e.jsx("li",{children:"Menambahkan item ke perpustakaan"}),e.jsx("li",{children:"Menampilkan daftar item yang tersedia"}),e.jsx("li",{children:"Mencari item berdasarkan judul atau id"})]})]})]})]}),e.jsx(q,{type:"tip",title:"Tips Pengerjaan",children:e.jsx("p",{children:"Buatlah struktur program yang sederhana namun menerapkan konsep OOP dengan benar. Pastikan untuk membuat dokumentasi berupa komentar di setiap class dan method penting untuk menjelaskan fungsinya."})}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-2",children:"Kriteria Penilaian:"}),e.jsxs("table",{className:"min-w-full border border-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Aspek"}),e.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase",children:"Bobot"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Penggunaan Abstract Class dan Inheritance"}),e.jsx("td",{className:"px-4 py-2",children:"30%"})]}),e.jsxs("tr",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2",children:"Implementasi Encapsulation"}),e.jsx("td",{className:"px-4 py-2",children:"25%"})]}),e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Penerapan Polymorphism"}),e.jsx("td",{className:"px-4 py-2",children:"20%"})]}),e.jsxs("tr",{className:"border-t border-gray-200 bg-gray-50",children:[e.jsx("td",{className:"px-4 py-2",children:"Fungsionalitas Program"}),e.jsx("td",{className:"px-4 py-2",children:"15%"})]}),e.jsxs("tr",{className:"border-t border-gray-200",children:[e.jsx("td",{className:"px-4 py-2",children:"Dokumentasi Kode"}),e.jsx("td",{className:"px-4 py-2",children:"10%"})]})]})]})]})]})]}),e.jsx(On,{title:"Submit Tugas Praktikum OOP",href:"https://forms.gle/exampleSubmissionLink123"})]}),e.jsx(Q,{id:"hasil-praktikum",title:"Hasil Praktikum",icon:e.jsx(Fn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700",children:"Setelah menyelesaikan praktikum ini, Anda seharusnya telah:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Memahami dan menerapkan konsep dasar Object-Oriented Programming"}),e.jsx("li",{children:"Mampu membuat class dan object dalam Python"}),e.jsx("li",{children:"Menguasai penggunaan atribut dan metode dalam class"}),e.jsx("li",{children:"Mampu mengimplementasikan inheritance antar class"}),e.jsx("li",{children:"Menerapkan encapsulation untuk melindungi data"}),e.jsx("li",{children:"Memahami polymorphism dan method overriding"}),e.jsx("li",{children:"Menggunakan abstract class dan interface"}),e.jsx("li",{children:"Membuat aplikasi berbasis OOP yang lebih terstruktur dan mudah dipelihara"})]})]})}),e.jsx(Q,{id:"format-pengumpulan",title:"Format Pengumpulan",icon:e.jsx(jn,{className:"w-6 h-6 text-blue-500"}),children:e.jsxs("div",{className:"space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Direktori GitHub:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat repository dengan format:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_python_itera_[NIM]"})]}),e.jsxs("li",{children:["Contoh:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"pemrograman_python_itera_119140001"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Struktur Folder:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:[e.jsxs("li",{children:["Buat folder dengan format:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"[NAMA]_[NIM]_praktikum10"})]}),e.jsxs("li",{children:["Contoh:"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"johndoe_119140001_praktikum10"})]}),e.jsxs("li",{children:["File tugas diberi nama"," ",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded",children:"online_shop.py"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Deadline Pengumpulan:"}),e.jsx("ul",{className:"list-disc pl-6 space-y-2 text-gray-700",children:e.jsxs("li",{children:["Deadline:"," ",e.jsx("span",{className:"font-medium",children:"Rabu, 7 Mei 2025, pukul 23:59 WIB"})]})})]})]})})]})}function mf(){return e.jsx(Cg,{children:e.jsx(kg,{children:e.jsxs(qh,{children:[e.jsx(ca,{path:"/",element:e.jsx(Zx,{})}),e.jsx(ca,{path:"/pemrograman-web/uts",element:e.jsx(nf,{})}),e.jsx(ca,{path:"/test",element:e.jsx(lf,{})}),e.jsx(ca,{path:"/test2",element:e.jsx(of,{})}),e.jsx(ca,{path:"/test3",element:e.jsx(df,{})}),e.jsx(ca,{path:"/test4",element:e.jsx(cf,{})}),e.jsx(ca,{path:"/test5",element:e.jsx(af,{})}),e.jsx(ca,{path:"/pemrograman-web/javascript-dasar",element:e.jsx(Wx,{})}),e.jsx(ca,{path:"/pemrograman-web/nextgen-javascript",element:e.jsx(tf,{})}),e.jsx(ca,{path:"/pemrograman-web/react-dasar",element:e.jsx(rf,{})}),e.jsx(ca,{path:"pemrograman-web/pemrograman-python",element:e.jsx(sf,{})}),e.jsx(ca,{path:"/pemrograman-web/OOPPython",element:e.jsx(uf,{})})]})})})}th.createRoot(document.getElementById("root")).render(e.jsx(S.StrictMode,{children:e.jsx(mf,{})}));
