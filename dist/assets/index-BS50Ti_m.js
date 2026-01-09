const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Start-BADUjwQc.js","assets/Start-CSlWg3kN.css","assets/AdventureTourP-C6xD5KVT.js","assets/AdventureTourP-DbCuisF9.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function u(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(f){if(f.ep)return;f.ep=!0;const p=u(f);fetch(f.href,p)}})();function Fh(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Cc={exports:{}},hl={};var nh;function rx(){if(nh)return hl;nh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(d,f,p){var g=null;if(p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),"key"in f){p={};for(var b in f)b!=="key"&&(p[b]=f[b])}else p=f;return f=p.ref,{$$typeof:l,type:d,key:g,ref:f!==void 0?f:null,props:p}}return hl.Fragment=o,hl.jsx=u,hl.jsxs=u,hl}var lh;function sx(){return lh||(lh=1,Cc.exports=rx()),Cc.exports}var a=sx(),zc={exports:{}},be={};var rh;function ox(){if(rh)return be;rh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),T=Symbol.iterator;function M(S){return S===null||typeof S!="object"?null:(S=T&&S[T]||S["@@iterator"],typeof S=="function"?S:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function J(S,U,ne){this.props=S,this.context=U,this.refs=B,this.updater=ne||O}J.prototype.isReactComponent={},J.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},J.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function _(){}_.prototype=J.prototype;function P(S,U,ne){this.props=S,this.context=U,this.refs=B,this.updater=ne||O}var le=P.prototype=new _;le.constructor=P,L(le,J.prototype),le.isPureReactComponent=!0;var H=Array.isArray;function I(){}var E={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function Q(S,U,ne){var oe=ne.ref;return{$$typeof:l,type:S,key:U,ref:oe!==void 0?oe:null,props:ne}}function ce(S,U){return Q(S.type,U,S.props)}function xe(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function se(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ne){return U[ne]})}var Re=/\/+/g;function ee(S,U){return typeof S=="object"&&S!==null&&S.key!=null?se(""+S.key):U.toString(36)}function ae(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(I,I):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function c(S,U,ne,oe,k){var te=typeof S;(te==="undefined"||te==="boolean")&&(S=null);var ue=!1;if(S===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(S.$$typeof){case l:case o:ue=!0;break;case w:return ue=S._init,c(ue(S._payload),U,ne,oe,k)}}if(ue)return k=k(S),ue=oe===""?"."+ee(S,0):oe,H(k)?(ne="",ue!=null&&(ne=ue.replace(Re,"$&/")+"/"),c(k,U,ne,"",function(Ta){return Ta})):k!=null&&(xe(k)&&(k=ce(k,ne+(k.key==null||S&&S.key===k.key?"":(""+k.key).replace(Re,"$&/")+"/")+ue)),U.push(k)),1;ue=0;var me=oe===""?".":oe+":";if(H(S))for(var ge=0;ge<S.length;ge++)oe=S[ge],te=me+ee(oe,ge),ue+=c(oe,U,ne,te,k);else if(ge=M(S),typeof ge=="function")for(S=ge.call(S),ge=0;!(oe=S.next()).done;)oe=oe.value,te=me+ee(oe,ge++),ue+=c(oe,U,ne,te,k);else if(te==="object"){if(typeof S.then=="function")return c(ae(S),U,ne,oe,k);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ue}function m(S,U,ne){if(S==null)return S;var oe=[],k=0;return c(S,oe,"","",function(te){return U.call(ne,te,k++)}),oe}function z(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(ne){(S._status===0||S._status===-1)&&(S._status=1,S._result=ne)},function(ne){(S._status===0||S._status===-1)&&(S._status=2,S._result=ne)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var Z=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},R={map:m,forEach:function(S,U,ne){m(S,function(){U.apply(this,arguments)},ne)},count:function(S){var U=0;return m(S,function(){U++}),U},toArray:function(S){return m(S,function(U){return U})||[]},only:function(S){if(!xe(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return be.Activity=N,be.Children=R,be.Component=J,be.Fragment=u,be.Profiler=f,be.PureComponent=P,be.StrictMode=d,be.Suspense=j,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,be.__COMPILER_RUNTIME={__proto__:null,c:function(S){return E.H.useMemoCache(S)}},be.cache=function(S){return function(){return S.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(S,U,ne){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var oe=L({},S.props),k=S.key;if(U!=null)for(te in U.key!==void 0&&(k=""+U.key),U)!re.call(U,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&U.ref===void 0||(oe[te]=U[te]);var te=arguments.length-2;if(te===1)oe.children=ne;else if(1<te){for(var ue=Array(te),me=0;me<te;me++)ue[me]=arguments[me+2];oe.children=ue}return Q(S.type,k,oe)},be.createContext=function(S){return S={$$typeof:g,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:p,_context:S},S},be.createElement=function(S,U,ne){var oe,k={},te=null;if(U!=null)for(oe in U.key!==void 0&&(te=""+U.key),U)re.call(U,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(k[oe]=U[oe]);var ue=arguments.length-2;if(ue===1)k.children=ne;else if(1<ue){for(var me=Array(ue),ge=0;ge<ue;ge++)me[ge]=arguments[ge+2];k.children=me}if(S&&S.defaultProps)for(oe in ue=S.defaultProps,ue)k[oe]===void 0&&(k[oe]=ue[oe]);return Q(S,te,k)},be.createRef=function(){return{current:null}},be.forwardRef=function(S){return{$$typeof:b,render:S}},be.isValidElement=xe,be.lazy=function(S){return{$$typeof:w,_payload:{_status:-1,_result:S},_init:z}},be.memo=function(S,U){return{$$typeof:v,type:S,compare:U===void 0?null:U}},be.startTransition=function(S){var U=E.T,ne={};E.T=ne;try{var oe=S(),k=E.S;k!==null&&k(ne,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(I,Z)}catch(te){Z(te)}finally{U!==null&&ne.types!==null&&(U.types=ne.types),E.T=U}},be.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},be.use=function(S){return E.H.use(S)},be.useActionState=function(S,U,ne){return E.H.useActionState(S,U,ne)},be.useCallback=function(S,U){return E.H.useCallback(S,U)},be.useContext=function(S){return E.H.useContext(S)},be.useDebugValue=function(){},be.useDeferredValue=function(S,U){return E.H.useDeferredValue(S,U)},be.useEffect=function(S,U){return E.H.useEffect(S,U)},be.useEffectEvent=function(S){return E.H.useEffectEvent(S)},be.useId=function(){return E.H.useId()},be.useImperativeHandle=function(S,U,ne){return E.H.useImperativeHandle(S,U,ne)},be.useInsertionEffect=function(S,U){return E.H.useInsertionEffect(S,U)},be.useLayoutEffect=function(S,U){return E.H.useLayoutEffect(S,U)},be.useMemo=function(S,U){return E.H.useMemo(S,U)},be.useOptimistic=function(S,U){return E.H.useOptimistic(S,U)},be.useReducer=function(S,U,ne){return E.H.useReducer(S,U,ne)},be.useRef=function(S){return E.H.useRef(S)},be.useState=function(S){return E.H.useState(S)},be.useSyncExternalStore=function(S,U,ne){return E.H.useSyncExternalStore(S,U,ne)},be.useTransition=function(){return E.H.useTransition()},be.version="19.2.3",be}var sh;function Kc(){return sh||(sh=1,zc.exports=ox()),zc.exports}var x=Kc();const ti=Fh(x);var Ec={exports:{}},pl={},Tc={exports:{}},Ac={};var oh;function cx(){return oh||(oh=1,(function(l){function o(c,m){var z=c.length;c.push(m);e:for(;0<z;){var Z=z-1>>>1,R=c[Z];if(0<f(R,m))c[Z]=m,c[z]=R,z=Z;else break e}}function u(c){return c.length===0?null:c[0]}function d(c){if(c.length===0)return null;var m=c[0],z=c.pop();if(z!==m){c[0]=z;e:for(var Z=0,R=c.length,S=R>>>1;Z<S;){var U=2*(Z+1)-1,ne=c[U],oe=U+1,k=c[oe];if(0>f(ne,z))oe<R&&0>f(k,ne)?(c[Z]=k,c[oe]=z,Z=oe):(c[Z]=ne,c[U]=z,Z=U);else if(oe<R&&0>f(k,z))c[Z]=k,c[oe]=z,Z=oe;else break e}}return m}function f(c,m){var z=c.sortIndex-m.sortIndex;return z!==0?z:c.id-m.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var g=Date,b=g.now();l.unstable_now=function(){return g.now()-b}}var j=[],v=[],w=1,N=null,T=3,M=!1,O=!1,L=!1,B=!1,J=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function le(c){for(var m=u(v);m!==null;){if(m.callback===null)d(v);else if(m.startTime<=c)d(v),m.sortIndex=m.expirationTime,o(j,m);else break;m=u(v)}}function H(c){if(L=!1,le(c),!O)if(u(j)!==null)O=!0,I||(I=!0,se());else{var m=u(v);m!==null&&ae(H,m.startTime-c)}}var I=!1,E=-1,re=5,Q=-1;function ce(){return B?!0:!(l.unstable_now()-Q<re)}function xe(){if(B=!1,I){var c=l.unstable_now();Q=c;var m=!0;try{e:{O=!1,L&&(L=!1,_(E),E=-1),M=!0;var z=T;try{t:{for(le(c),N=u(j);N!==null&&!(N.expirationTime>c&&ce());){var Z=N.callback;if(typeof Z=="function"){N.callback=null,T=N.priorityLevel;var R=Z(N.expirationTime<=c);if(c=l.unstable_now(),typeof R=="function"){N.callback=R,le(c),m=!0;break t}N===u(j)&&d(j),le(c)}else d(j);N=u(j)}if(N!==null)m=!0;else{var S=u(v);S!==null&&ae(H,S.startTime-c),m=!1}}break e}finally{N=null,T=z,M=!1}m=void 0}}finally{m?se():I=!1}}}var se;if(typeof P=="function")se=function(){P(xe)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,ee=Re.port2;Re.port1.onmessage=xe,se=function(){ee.postMessage(null)}}else se=function(){J(xe,0)};function ae(c,m){E=J(function(){c(l.unstable_now())},m)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(c){c.callback=null},l.unstable_forceFrameRate=function(c){0>c||125<c?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<c?Math.floor(1e3/c):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_next=function(c){switch(T){case 1:case 2:case 3:var m=3;break;default:m=T}var z=T;T=m;try{return c()}finally{T=z}},l.unstable_requestPaint=function(){B=!0},l.unstable_runWithPriority=function(c,m){switch(c){case 1:case 2:case 3:case 4:case 5:break;default:c=3}var z=T;T=c;try{return m()}finally{T=z}},l.unstable_scheduleCallback=function(c,m,z){var Z=l.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,c){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=z+R,c={id:w++,callback:m,priorityLevel:c,startTime:z,expirationTime:R,sortIndex:-1},z>Z?(c.sortIndex=z,o(v,c),u(j)===null&&c===u(v)&&(L?(_(E),E=-1):L=!0,ae(H,z-Z))):(c.sortIndex=R,o(j,c),O||M||(O=!0,I||(I=!0,se()))),c},l.unstable_shouldYield=ce,l.unstable_wrapCallback=function(c){var m=T;return function(){var z=T;T=m;try{return c.apply(this,arguments)}finally{T=z}}}})(Ac)),Ac}var ch;function dx(){return ch||(ch=1,Tc.exports=cx()),Tc.exports}var Rc={exports:{}},mt={};var dh;function ux(){if(dh)return mt;dh=1;var l=Kc();function o(j){var v="https://react.dev/errors/"+j;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)v+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+j+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(j,v,w){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:N==null?null:""+N,children:j,containerInfo:v,implementation:w}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(j,v){if(j==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,mt.createPortal=function(j,v){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(o(299));return p(j,v,null,w)},mt.flushSync=function(j){var v=g.T,w=d.p;try{if(g.T=null,d.p=2,j)return j()}finally{g.T=v,d.p=w,d.d.f()}},mt.preconnect=function(j,v){typeof j=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(j,v))},mt.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},mt.preinit=function(j,v){if(typeof j=="string"&&v&&typeof v.as=="string"){var w=v.as,N=b(w,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,M=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;w==="style"?d.d.S(j,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:N,integrity:T,fetchPriority:M}):w==="script"&&d.d.X(j,{crossOrigin:N,integrity:T,fetchPriority:M,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},mt.preinitModule=function(j,v){if(typeof j=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var w=b(v.as,v.crossOrigin);d.d.M(j,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(j)},mt.preload=function(j,v){if(typeof j=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var w=v.as,N=b(w,v.crossOrigin);d.d.L(j,w,{crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},mt.preloadModule=function(j,v){if(typeof j=="string")if(v){var w=b(v.as,v.crossOrigin);d.d.m(j,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(j)},mt.requestFormReset=function(j){d.d.r(j)},mt.unstable_batchedUpdates=function(j,v){return j(v)},mt.useFormState=function(j,v,w){return g.H.useFormState(j,v,w)},mt.useFormStatus=function(){return g.H.useHostTransitionStatus()},mt.version="19.2.3",mt}var uh;function fx(){if(uh)return Rc.exports;uh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Rc.exports=ux(),Rc.exports}var fh;function mx(){if(fh)return pl;fh=1;var l=dx(),o=Kc(),u=fx();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(p(e)!==e)throw Error(d(188))}function v(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(d(188));return t!==e?null:e}for(var i=e,n=t;;){var r=i.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===i)return j(r),e;if(s===n)return j(r),t;s=s.sibling}throw Error(d(188))}if(i.return!==n.return)i=r,n=s;else{for(var h=!1,y=r.child;y;){if(y===i){h=!0,i=r,n=s;break}if(y===n){h=!0,n=r,i=s;break}y=y.sibling}if(!h){for(y=s.child;y;){if(y===i){h=!0,i=s,n=r;break}if(y===n){h=!0,n=s,i=r;break}y=y.sibling}if(!h)throw Error(d(189))}}if(i.alternate!==n)throw Error(d(190))}if(i.tag!==3)throw Error(d(188));return i.stateNode.current===i?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,T=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),P=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case J:return"Profiler";case B:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case P:return e.displayName||"Context";case _:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}var ae=Array.isArray,c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,m=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},Z=[],R=-1;function S(e){return{current:e}}function U(e){0>R||(e.current=Z[R],Z[R]=null,R--)}function ne(e,t){R++,Z[R]=e.current,e.current=t}var oe=S(null),k=S(null),te=S(null),ue=S(null);function me(e,t){switch(ne(te,t),ne(k,e),ne(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zm(t),e=Em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(oe),ne(oe,e)}function ge(){U(oe),U(k),U(te)}function Ta(e){e.memoizedState!==null&&ne(ue,e);var t=oe.current,i=Em(t,e.type);t!==i&&(ne(k,e),ne(oe,i))}function Lt(e){k.current===e&&(U(oe),U(k)),ue.current===e&&(U(ue),dl._currentValue=z)}var wi,gn;function Zt(e){if(wi===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||"",gn=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wi+e+gn}var xn=!1;function Si(e,t){if(!e||xn)return"";xn=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(X){var G=X}Reflect.construct(e,[],W)}else{try{W.call()}catch(X){G=X}e.call(W.prototype)}}else{try{throw Error()}catch(X){G=X}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(X){if(X&&G&&typeof X.stack=="string")return[X.stack,G.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),h=s[0],y=s[1];if(h&&y){var C=h.split(`
`),Y=y.split(`
`);for(r=n=0;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;for(;r<Y.length&&!Y[r].includes("DetermineComponentFrameRoot");)r++;if(n===C.length||r===Y.length)for(n=C.length-1,r=Y.length-1;1<=n&&0<=r&&C[n]!==Y[r];)r--;for(;1<=n&&0<=r;n--,r--)if(C[n]!==Y[r]){if(n!==1||r!==1)do if(n--,r--,0>r||C[n]!==Y[r]){var $=`
`+C[n].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=n&&0<=r);break}}}finally{xn=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Zt(i):""}function ki(e,t){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return e.child!==t&&t!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Si(e.type,!1);case 11:return Si(e.type.render,!1);case 1:return Si(e.type,!0);case 31:return Zt("Activity");default:return""}}function it(e){try{var t="",i=null;do t+=ki(e,i),i=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var bn=Object.prototype.hasOwnProperty,yn=l.unstable_scheduleCallback,vn=l.unstable_cancelCallback,cs=l.unstable_shouldYield,ds=l.unstable_requestPaint,pt=l.unstable_now,us=l.unstable_getCurrentPriorityLevel,ie=l.unstable_ImmediatePriority,st=l.unstable_UserBlockingPriority,Ct=l.unstable_NormalPriority,fs=l.unstable_LowPriority,Cl=l.unstable_IdlePriority,jn=l.log,Vp=l.unstable_setDisableYieldValue,Nn=null,zt=null;function Aa(e){if(typeof jn=="function"&&Vp(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Nn,e)}catch{}}var Et=Math.clz32?Math.clz32:Fp,Pp=Math.log,Xp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Pp(e)/Xp|0)|0}var zl=256,El=262144,Tl=4194304;function ai(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Al(e,t,i){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=n&134217727;return y!==0?(n=y&~s,n!==0?r=ai(n):(h&=y,h!==0?r=ai(h):i||(i=y&~e,i!==0&&(r=ai(i))))):(y=n&~s,y!==0?r=ai(y):h!==0?r=ai(h):i||(i=n&~e,i!==0&&(r=ai(i)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,i=t&-t,s>=i||s===32&&(i&4194048)!==0)?t:r}function wn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $p(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(){var e=Tl;return Tl<<=1,(Tl&62914560)===0&&(Tl=4194304),e}function ms(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qp(e,t,i,n,r,s){var h=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var y=e.entanglements,C=e.expirationTimes,Y=e.hiddenUpdates;for(i=h&~i;0<i;){var $=31-Et(i),W=1<<$;y[$]=0,C[$]=-1;var G=Y[$];if(G!==null)for(Y[$]=null,$=0;$<G.length;$++){var X=G[$];X!==null&&(X.lane&=-536870913)}i&=~W}n!==0&&od(e,n,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function od(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Et(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|i&261930}function cd(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-Et(i),r=1<<n;r&t|e[n]&t&&(e[n]|=t),i&=~r}}function dd(e,t){var i=t&-t;return i=(i&42)!==0?1:hs(i),(i&(e.suspendedLanes|t))!==0?0:i}function hs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ps(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ud(){var e=m.p;return e!==0?e:(e=window.event,e===void 0?32:Jm(e.type))}function fd(e,t){var i=m.p;try{return m.p=e,t()}finally{m.p=i}}var Ra=Math.random().toString(36).slice(2),ot="__reactFiber$"+Ra,xt="__reactProps$"+Ra,Ci="__reactContainer$"+Ra,gs="__reactEvents$"+Ra,Zp="__reactListeners$"+Ra,Kp="__reactHandles$"+Ra,md="__reactResources$"+Ra,kn="__reactMarker$"+Ra;function xs(e){delete e[ot],delete e[xt],delete e[gs],delete e[Zp],delete e[Kp]}function zi(e){var t=e[ot];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ci]||i[ot]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Mm(e);e!==null;){if(i=e[ot])return i;e=Mm(e)}return t}e=i,i=e.parentNode}return null}function Ei(e){if(e=e[ot]||e[Ci]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ti(e){var t=e[md];return t||(t=e[md]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[kn]=!0}var hd=new Set,pd={};function ii(e,t){Ai(e,t),Ai(e+"Capture",t)}function Ai(e,t){for(pd[e]=t,e=0;e<t.length;e++)hd.add(t[e])}var Jp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gd={},xd={};function Wp(e){return bn.call(xd,e)?!0:bn.call(gd,e)?!1:Jp.test(e)?xd[e]=!0:(gd[e]=!0,!1)}function Rl(e,t,i){if(Wp(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function Ol(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function sa(e,t,i,n){if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+n)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ip(e,t,i){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){i=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){if(!e._valueTracker){var t=bd(e)?"checked":"value";e._valueTracker=Ip(e,t,""+e[t])}}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=bd(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function Dl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var eg=/[\n"\\]/g;function Ut(e){return e.replace(eg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ys(e,t,i,n,r,s,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?vs(e,h,_t(t)):i!=null?vs(e,h,_t(i)):n!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+_t(y):e.removeAttribute("name")}function vd(e,t,i,n,r,s,h,y){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||i!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){bs(e);return}i=i!=null?""+_t(i):"",t=t!=null?""+_t(t):i,y||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=y?e.checked:!!n,e.defaultChecked=!!n,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),bs(e)}function vs(e,t,i){t==="number"&&Dl(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Ri(e,t,i,n){if(e=e.options,t){t={};for(var r=0;r<i.length;r++)t["$"+i[r]]=!0;for(i=0;i<e.length;i++)r=t.hasOwnProperty("$"+e[i].value),e[i].selected!==r&&(e[i].selected=r),r&&n&&(e[i].defaultSelected=!0)}else{for(i=""+_t(i),t=null,r=0;r<e.length;r++){if(e[r].value===i){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function jd(e,t,i){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+_t(i):""}function Nd(e,t,i,n){if(t==null){if(n!=null){if(i!=null)throw Error(d(92));if(ae(n)){if(1<n.length)throw Error(d(93));n=n[0]}i=n}i==null&&(i=""),t=i}i=_t(t),e.defaultValue=i,n=e.textContent,n===i&&n!==""&&n!==null&&(e.value=n),bs(e)}function Oi(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var tg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(e,t,i){var n=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,i):typeof i!="number"||i===0||tg.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Sd(e,t,i){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&i[r]!==n&&wd(e,r,n)}else for(var s in t)t.hasOwnProperty(s)&&wd(e,s,t[s])}function js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ag=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ig=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(e){return ig.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Ns=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Bi=null;function kd(e){var t=Ei(e);if(t&&(e=t.stateNode)){var i=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ys(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var r=n[xt]||null;if(!r)throw Error(d(90));ys(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<i.length;t++)n=i[t],n.form===e.form&&yd(n)}break e;case"textarea":jd(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Ri(e,!!i.multiple,t,!1)}}}var Ss=!1;function Cd(e,t,i){if(Ss)return e(t,i);Ss=!0;try{var n=e(t);return n}finally{if(Ss=!1,(Di!==null||Bi!==null)&&(jr(),Di&&(t=Di,e=Bi,Bi=Di=null,kd(t),e)))for(t=0;t<e.length;t++)kd(e[t])}}function zn(e,t){var i=e.stateNode;if(i===null)return null;var n=i[xt]||null;if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(d(231,t,typeof i));return i}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=!1;if(ca)try{var En={};Object.defineProperty(En,"passive",{get:function(){ks=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ks=!1}var Oa=null,Cs=null,Ml=null;function zd(){if(Ml)return Ml;var e,t=Cs,i=t.length,n,r="value"in Oa?Oa.value:Oa.textContent,s=r.length;for(e=0;e<i&&t[e]===r[e];e++);var h=i-e;for(n=1;n<=h&&t[i-n]===r[s-n];n++);return Ml=r.slice(e,1<n?1-n:void 0)}function Ll(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Ed(){return!1}function bt(e){function t(i,n,r,s,h){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(i=e[y],this[y]=i?i(s):s[y]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:Ed,this.isPropagationStopped=Ed,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=bt(ni),Tn=N({},ni,{view:0,detail:0}),ng=bt(Tn),zs,Es,An,Hl=N({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(zs=e.screenX-An.screenX,Es=e.screenY-An.screenY):Es=zs=0,An=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),Td=bt(Hl),lg=N({},Hl,{dataTransfer:0}),rg=bt(lg),sg=N({},Tn,{relatedTarget:0}),Ts=bt(sg),og=N({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),cg=bt(og),dg=N({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ug=bt(dg),fg=N({},ni,{data:0}),Ad=bt(fg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pg[e])?!!t[e]:!1}function As(){return gg}var xg=N({},Tn,{key:function(e){if(e.key){var t=mg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bg=bt(xg),yg=N({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=bt(yg),vg=N({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),jg=bt(vg),Ng=N({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=bt(Ng),Sg=N({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=bt(Sg),Cg=N({},ni,{newState:0,oldState:0}),zg=bt(Cg),Eg=[9,13,27,32],Rs=ca&&"CompositionEvent"in window,Rn=null;ca&&"documentMode"in document&&(Rn=document.documentMode);var Tg=ca&&"TextEvent"in window&&!Rn,Od=ca&&(!Rs||Rn&&8<Rn&&11>=Rn),Dd=" ",Bd=!1;function Md(e,t){switch(e){case"keyup":return Eg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mi=!1;function Ag(e,t){switch(e){case"compositionend":return Ld(t);case"keypress":return t.which!==32?null:(Bd=!0,Dd);case"textInput":return e=t.data,e===Dd&&Bd?null:e;default:return null}}function Rg(e,t){if(Mi)return e==="compositionend"||!Rs&&Md(e,t)?(e=zd(),Ml=Cs=Oa=null,Mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Og[e.type]:t==="textarea"}function Ud(e,t,i,n){Di?Bi?Bi.push(n):Bi=[n]:Di=n,t=Er(t,"onChange"),0<t.length&&(i=new Ul("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var On=null,Dn=null;function Dg(e){jm(e,0)}function ql(e){var t=Cn(e);if(yd(t))return e}function Hd(e,t){if(e==="change")return t}var qd=!1;if(ca){var Os;if(ca){var Ds="oninput"in document;if(!Ds){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Ds=typeof Yd.oninput=="function"}Os=Ds}else Os=!1;qd=Os&&(!document.documentMode||9<document.documentMode)}function Gd(){On&&(On.detachEvent("onpropertychange",Vd),Dn=On=null)}function Vd(e){if(e.propertyName==="value"&&ql(Dn)){var t=[];Ud(t,Dn,e,ws(e)),Cd(Dg,t)}}function Bg(e,t,i){e==="focusin"?(Gd(),On=t,Dn=i,On.attachEvent("onpropertychange",Vd)):e==="focusout"&&Gd()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(Dn)}function Lg(e,t){if(e==="click")return ql(t)}function _g(e,t){if(e==="input"||e==="change")return ql(t)}function Ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Ug;function Bn(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!bn.call(t,r)||!Tt(e[r],t[r]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var i=Pd(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Pd(i)}}function Fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dl(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Dl(e.document)}return t}function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hg=ca&&"documentMode"in document&&11>=document.documentMode,Li=null,Ms=null,Mn=null,Ls=!1;function Qd(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ls||Li==null||Li!==Dl(n)||(n=Li,"selectionStart"in n&&Bs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mn&&Bn(Mn,n)||(Mn=n,n=Er(Ms,"onSelect"),0<n.length&&(t=new Ul("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=Li)))}function li(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var _i={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionrun:li("Transition","TransitionRun"),transitionstart:li("Transition","TransitionStart"),transitioncancel:li("Transition","TransitionCancel"),transitionend:li("Transition","TransitionEnd")},_s={},Zd={};ca&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function ri(e){if(_s[e])return _s[e];if(!_i[e])return e;var t=_i[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Zd)return _s[e]=t[i];return e}var Kd=ri("animationend"),Jd=ri("animationiteration"),Wd=ri("animationstart"),qg=ri("transitionrun"),Yg=ri("transitionstart"),Gg=ri("transitioncancel"),Id=ri("transitionend"),eu=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function Kt(e,t){eu.set(e,t),ii(t,[e])}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ht=[],Ui=0,Hs=0;function Gl(){for(var e=Ui,t=Hs=Ui=0;t<e;){var i=Ht[t];Ht[t++]=null;var n=Ht[t];Ht[t++]=null;var r=Ht[t];Ht[t++]=null;var s=Ht[t];if(Ht[t++]=null,n!==null&&r!==null){var h=n.pending;h===null?r.next=r:(r.next=h.next,h.next=r),n.pending=r}s!==0&&tu(i,r,s)}}function Vl(e,t,i,n){Ht[Ui++]=e,Ht[Ui++]=t,Ht[Ui++]=i,Ht[Ui++]=n,Hs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function qs(e,t,i,n){return Vl(e,t,i,n),Pl(e)}function si(e,t){return Vl(e,null,null,t),Pl(e)}function tu(e,t,i){e.lanes|=i;var n=e.alternate;n!==null&&(n.lanes|=i);for(var r=!1,s=e.return;s!==null;)s.childLanes|=i,n=s.alternate,n!==null&&(n.childLanes|=i),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Et(i),e=s.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=i|536870912),s):null}function Pl(e){if(50<il)throw il=0,Ko=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hi={};function Vg(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,i,n){return new Vg(e,t,i,n)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,t){var i=e.alternate;return i===null?(i=At(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function au(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xl(e,t,i,n,r,s){var h=0;if(n=e,typeof e=="function")Ys(e)&&(h=1);else if(typeof e=="string")h=Q0(e,i,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=At(31,i,t,r),e.elementType=Q,e.lanes=s,e;case L:return oi(i.children,r,s,t);case B:h=8,r|=24;break;case J:return e=At(12,i,t,r|2),e.elementType=J,e.lanes=s,e;case H:return e=At(13,i,t,r),e.elementType=H,e.lanes=s,e;case I:return e=At(19,i,t,r),e.elementType=I,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:h=10;break e;case _:h=9;break e;case le:h=11;break e;case E:h=14;break e;case re:h=16,n=null;break e}h=29,i=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=At(h,i,t,r),t.elementType=e,t.type=n,t.lanes=s,t}function oi(e,t,i,n){return e=At(7,e,n,t),e.lanes=i,e}function Gs(e,t,i){return e=At(6,e,null,t),e.lanes=i,e}function iu(e){var t=At(18,null,null,0);return t.stateNode=e,t}function Vs(e,t,i){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nu=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var i=nu.get(e);return i!==void 0?i:(t={value:e,source:t,stack:it(t)},nu.set(e,t),t)}return{value:e,source:t,stack:it(t)}}var qi=[],Yi=0,Fl=null,Ln=0,Yt=[],Gt=0,Da=null,ea=1,ta="";function ua(e,t){qi[Yi++]=Ln,qi[Yi++]=Fl,Fl=e,Ln=t}function lu(e,t,i){Yt[Gt++]=ea,Yt[Gt++]=ta,Yt[Gt++]=Da,Da=e;var n=ea;e=ta;var r=32-Et(n)-1;n&=~(1<<r),i+=1;var s=32-Et(t)+r;if(30<s){var h=r-r%5;s=(n&(1<<h)-1).toString(32),n>>=h,r-=h,ea=1<<32-Et(t)+r|i<<r|n,ta=s+e}else ea=1<<s|i<<r|n,ta=e}function Ps(e){e.return!==null&&(ua(e,1),lu(e,1,0))}function Xs(e){for(;e===Fl;)Fl=qi[--Yi],qi[Yi]=null,Ln=qi[--Yi],qi[Yi]=null;for(;e===Da;)Da=Yt[--Gt],Yt[Gt]=null,ta=Yt[--Gt],Yt[Gt]=null,ea=Yt[--Gt],Yt[Gt]=null}function ru(e,t){Yt[Gt++]=ea,Yt[Gt++]=ta,Yt[Gt++]=Da,ea=t.id,ta=t.overflow,Da=e}var ct=null,qe=null,Ce=!1,Ba=null,Vt=!1,Fs=Error(d(519));function Ma(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _n(qt(t,e)),Fs}function su(e){var t=e.stateNode,i=e.type,n=e.memoizedProps;switch(t[ot]=e,t[xt]=n,i){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(i=0;i<ll.length;i++)we(ll[i],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),vd(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),Nd(t,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||n.suppressHydrationWarning===!0||km(t.textContent,i)?(n.popover!=null&&(we("beforetoggle",t),we("toggle",t)),n.onScroll!=null&&we("scroll",t),n.onScrollEnd!=null&&we("scrollend",t),n.onClick!=null&&(t.onclick=oa),t=!0):t=!1,t||Ma(e,!0)}function ou(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ct=ct.return}}function Gi(e){if(e!==ct)return!1;if(!Ce)return ou(e),Ce=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||uc(e.type,e.memoizedProps)),i=!i),i&&qe&&Ma(e),ou(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));qe=Bm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));qe=Bm(e)}else t===27?(t=qe,Za(e.type)?(e=gc,gc=null,qe=e):qe=t):qe=ct?Xt(e.stateNode.nextSibling):null;return!0}function ci(){qe=ct=null,Ce=!1}function $s(){var e=Ba;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),Ba=null),e}function _n(e){Ba===null?Ba=[e]:Ba.push(e)}var Qs=S(null),di=null,fa=null;function La(e,t,i){ne(Qs,t._currentValue),t._currentValue=i}function ma(e){e._currentValue=Qs.current,U(Qs)}function Zs(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Ks(e,t,i,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var h=r.child;s=s.firstContext;e:for(;s!==null;){var y=s;s=r;for(var C=0;C<t.length;C++)if(y.context===t[C]){s.lanes|=i,y=s.alternate,y!==null&&(y.lanes|=i),Zs(s.return,i,e),n||(h=null);break e}s=y.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(d(341));h.lanes|=i,s=h.alternate,s!==null&&(s.lanes|=i),Zs(h,i,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function Vi(e,t,i,n){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(d(387));if(h=h.memoizedProps,h!==null){var y=r.type;Tt(r.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(r===ue.current){if(h=r.alternate,h===null)throw Error(d(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}r=r.return}e!==null&&Ks(t,e,i,n),t.flags|=262144}function $l(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ui(e){di=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return cu(di,e)}function Ql(e,t){return di===null&&ui(e),cu(e,t)}function cu(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},fa===null){if(e===null)throw Error(d(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return i}var Pg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Xg=l.unstable_scheduleCallback,Fg=l.unstable_NormalPriority,We={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Js(){return{controller:new Pg,data:new Map,refCount:0}}function Un(e){e.refCount--,e.refCount===0&&Xg(Fg,function(){e.controller.abort()})}var Hn=null,Ws=0,Pi=0,Xi=null;function $g(e,t){if(Hn===null){var i=Hn=[];Ws=0,Pi=ac(),Xi={status:"pending",value:void 0,then:function(n){i.push(n)}}}return Ws++,t.then(du,du),t}function du(){if(--Ws===0&&Hn!==null){Xi!==null&&(Xi.status="fulfilled");var e=Hn;Hn=null,Pi=0,Xi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qg(e,t){var i=[],n={status:"pending",value:null,reason:null,then:function(r){i.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<i.length;r++)(0,i[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<i.length;r++)(0,i[r])(void 0)}),n}var uu=c.S;c.S=function(e,t){Zf=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$g(e,t),uu!==null&&uu(e,t)};var fi=S(null);function Is(){var e=fi.current;return e!==null?e:Ue.pooledCache}function Zl(e,t){t===null?ne(fi,fi.current):ne(fi,t.pool)}function fu(){var e=Is();return e===null?null:{parent:We._currentValue,pool:e}}var Fi=Error(d(460)),eo=Error(d(474)),Kl=Error(d(542)),Jl={then:function(){}};function mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hu(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(oa,oa),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gu(e),e;default:if(typeof t.status=="string")t.then(oa,oa);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gu(e),e}throw hi=t,Fi}}function mi(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(hi=i,Fi):i}}var hi=null;function pu(){if(hi===null)throw Error(d(459));var e=hi;return hi=null,e}function gu(e){if(e===Fi||e===Kl)throw Error(d(483))}var $i=null,qn=0;function Wl(e){var t=qn;return qn+=1,$i===null&&($i=[]),hu($i,e,t)}function Yn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Il(e,t){throw t.$$typeof===T?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xu(e){function t(D,A){if(e){var q=D.deletions;q===null?(D.deletions=[A],D.flags|=16):q.push(A)}}function i(D,A){if(!e)return null;for(;A!==null;)t(D,A),A=A.sibling;return null}function n(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function r(D,A){return D=da(D,A),D.index=0,D.sibling=null,D}function s(D,A,q){return D.index=q,e?(q=D.alternate,q!==null?(q=q.index,q<A?(D.flags|=67108866,A):q):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function h(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function y(D,A,q,K){return A===null||A.tag!==6?(A=Gs(q,D.mode,K),A.return=D,A):(A=r(A,q),A.return=D,A)}function C(D,A,q,K){var he=q.type;return he===L?$(D,A,q.props.children,K,q.key):A!==null&&(A.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===re&&mi(he)===A.type)?(A=r(A,q.props),Yn(A,q),A.return=D,A):(A=Xl(q.type,q.key,q.props,null,D.mode,K),Yn(A,q),A.return=D,A)}function Y(D,A,q,K){return A===null||A.tag!==4||A.stateNode.containerInfo!==q.containerInfo||A.stateNode.implementation!==q.implementation?(A=Vs(q,D.mode,K),A.return=D,A):(A=r(A,q.children||[]),A.return=D,A)}function $(D,A,q,K,he){return A===null||A.tag!==7?(A=oi(q,D.mode,K,he),A.return=D,A):(A=r(A,q),A.return=D,A)}function W(D,A,q){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Gs(""+A,D.mode,q),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return q=Xl(A.type,A.key,A.props,null,D.mode,q),Yn(q,A),q.return=D,q;case O:return A=Vs(A,D.mode,q),A.return=D,A;case re:return A=mi(A),W(D,A,q)}if(ae(A)||se(A))return A=oi(A,D.mode,q,null),A.return=D,A;if(typeof A.then=="function")return W(D,Wl(A),q);if(A.$$typeof===P)return W(D,Ql(D,A),q);Il(D,A)}return null}function G(D,A,q,K){var he=A!==null?A.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return he!==null?null:y(D,A,""+q,K);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return q.key===he?C(D,A,q,K):null;case O:return q.key===he?Y(D,A,q,K):null;case re:return q=mi(q),G(D,A,q,K)}if(ae(q)||se(q))return he!==null?null:$(D,A,q,K,null);if(typeof q.then=="function")return G(D,A,Wl(q),K);if(q.$$typeof===P)return G(D,A,Ql(D,q),K);Il(D,q)}return null}function X(D,A,q,K,he){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return D=D.get(q)||null,y(A,D,""+K,he);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return D=D.get(K.key===null?q:K.key)||null,C(A,D,K,he);case O:return D=D.get(K.key===null?q:K.key)||null,Y(A,D,K,he);case re:return K=mi(K),X(D,A,q,K,he)}if(ae(K)||se(K))return D=D.get(q)||null,$(A,D,K,he,null);if(typeof K.then=="function")return X(D,A,q,Wl(K),he);if(K.$$typeof===P)return X(D,A,q,Ql(A,K),he);Il(A,K)}return null}function de(D,A,q,K){for(var he=null,Ee=null,fe=A,je=A=0,ke=null;fe!==null&&je<q.length;je++){fe.index>je?(ke=fe,fe=null):ke=fe.sibling;var Te=G(D,fe,q[je],K);if(Te===null){fe===null&&(fe=ke);break}e&&fe&&Te.alternate===null&&t(D,fe),A=s(Te,A,je),Ee===null?he=Te:Ee.sibling=Te,Ee=Te,fe=ke}if(je===q.length)return i(D,fe),Ce&&ua(D,je),he;if(fe===null){for(;je<q.length;je++)fe=W(D,q[je],K),fe!==null&&(A=s(fe,A,je),Ee===null?he=fe:Ee.sibling=fe,Ee=fe);return Ce&&ua(D,je),he}for(fe=n(fe);je<q.length;je++)ke=X(fe,D,je,q[je],K),ke!==null&&(e&&ke.alternate!==null&&fe.delete(ke.key===null?je:ke.key),A=s(ke,A,je),Ee===null?he=ke:Ee.sibling=ke,Ee=ke);return e&&fe.forEach(function(ei){return t(D,ei)}),Ce&&ua(D,je),he}function pe(D,A,q,K){if(q==null)throw Error(d(151));for(var he=null,Ee=null,fe=A,je=A=0,ke=null,Te=q.next();fe!==null&&!Te.done;je++,Te=q.next()){fe.index>je?(ke=fe,fe=null):ke=fe.sibling;var ei=G(D,fe,Te.value,K);if(ei===null){fe===null&&(fe=ke);break}e&&fe&&ei.alternate===null&&t(D,fe),A=s(ei,A,je),Ee===null?he=ei:Ee.sibling=ei,Ee=ei,fe=ke}if(Te.done)return i(D,fe),Ce&&ua(D,je),he;if(fe===null){for(;!Te.done;je++,Te=q.next())Te=W(D,Te.value,K),Te!==null&&(A=s(Te,A,je),Ee===null?he=Te:Ee.sibling=Te,Ee=Te);return Ce&&ua(D,je),he}for(fe=n(fe);!Te.done;je++,Te=q.next())Te=X(fe,D,je,Te.value,K),Te!==null&&(e&&Te.alternate!==null&&fe.delete(Te.key===null?je:Te.key),A=s(Te,A,je),Ee===null?he=Te:Ee.sibling=Te,Ee=Te);return e&&fe.forEach(function(lx){return t(D,lx)}),Ce&&ua(D,je),he}function Le(D,A,q,K){if(typeof q=="object"&&q!==null&&q.type===L&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case M:e:{for(var he=q.key;A!==null;){if(A.key===he){if(he=q.type,he===L){if(A.tag===7){i(D,A.sibling),K=r(A,q.props.children),K.return=D,D=K;break e}}else if(A.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===re&&mi(he)===A.type){i(D,A.sibling),K=r(A,q.props),Yn(K,q),K.return=D,D=K;break e}i(D,A);break}else t(D,A);A=A.sibling}q.type===L?(K=oi(q.props.children,D.mode,K,q.key),K.return=D,D=K):(K=Xl(q.type,q.key,q.props,null,D.mode,K),Yn(K,q),K.return=D,D=K)}return h(D);case O:e:{for(he=q.key;A!==null;){if(A.key===he)if(A.tag===4&&A.stateNode.containerInfo===q.containerInfo&&A.stateNode.implementation===q.implementation){i(D,A.sibling),K=r(A,q.children||[]),K.return=D,D=K;break e}else{i(D,A);break}else t(D,A);A=A.sibling}K=Vs(q,D.mode,K),K.return=D,D=K}return h(D);case re:return q=mi(q),Le(D,A,q,K)}if(ae(q))return de(D,A,q,K);if(se(q)){if(he=se(q),typeof he!="function")throw Error(d(150));return q=he.call(q),pe(D,A,q,K)}if(typeof q.then=="function")return Le(D,A,Wl(q),K);if(q.$$typeof===P)return Le(D,A,Ql(D,q),K);Il(D,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,A!==null&&A.tag===6?(i(D,A.sibling),K=r(A,q),K.return=D,D=K):(i(D,A),K=Gs(q,D.mode,K),K.return=D,D=K),h(D)):i(D,A)}return function(D,A,q,K){try{qn=0;var he=Le(D,A,q,K);return $i=null,he}catch(fe){if(fe===Fi||fe===Kl)throw fe;var Ee=At(29,fe,null,D.mode);return Ee.lanes=K,Ee.return=D,Ee}}}var pi=xu(!0),bu=xu(!1),_a=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ae&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=Pl(e),tu(e,null,i),t}return Vl(e,n,t,i),Pl(e)}function Gn(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,cd(e,i)}}function io(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var h={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};s===null?r=s=h:s=s.next=h,i=i.next}while(i!==null);s===null?r=s=t:s=s.next=t}else r=s=t;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var no=!1;function Vn(){if(no){var e=Xi;if(e!==null)throw e}}function Pn(e,t,i,n){no=!1;var r=e.updateQueue;_a=!1;var s=r.firstBaseUpdate,h=r.lastBaseUpdate,y=r.shared.pending;if(y!==null){r.shared.pending=null;var C=y,Y=C.next;C.next=null,h===null?s=Y:h.next=Y,h=C;var $=e.alternate;$!==null&&($=$.updateQueue,y=$.lastBaseUpdate,y!==h&&(y===null?$.firstBaseUpdate=Y:y.next=Y,$.lastBaseUpdate=C))}if(s!==null){var W=r.baseState;h=0,$=Y=C=null,y=s;do{var G=y.lane&-536870913,X=G!==y.lane;if(X?(Se&G)===G:(n&G)===G){G!==0&&G===Pi&&(no=!0),$!==null&&($=$.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var de=e,pe=y;G=t;var Le=i;switch(pe.tag){case 1:if(de=pe.payload,typeof de=="function"){W=de.call(Le,W,G);break e}W=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=pe.payload,G=typeof de=="function"?de.call(Le,W,G):de,G==null)break e;W=N({},W,G);break e;case 2:_a=!0}}G=y.callback,G!==null&&(e.flags|=64,X&&(e.flags|=8192),X=r.callbacks,X===null?r.callbacks=[G]:X.push(G))}else X={lane:G,tag:y.tag,payload:y.payload,callback:y.callback,next:null},$===null?(Y=$=X,C=W):$=$.next=X,h|=G;if(y=y.next,y===null){if(y=r.shared.pending,y===null)break;X=y,y=X.next,X.next=null,r.lastBaseUpdate=X,r.shared.pending=null}}while(!0);$===null&&(C=W),r.baseState=C,r.firstBaseUpdate=Y,r.lastBaseUpdate=$,s===null&&(r.shared.lanes=0),Pa|=h,e.lanes=h,e.memoizedState=W}}function yu(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function vu(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)yu(i[e],t)}var Qi=S(null),er=S(0);function ju(e,t){e=Na,ne(er,e),ne(Qi,t),Na=e|t.baseLanes}function lo(){ne(er,Na),ne(Qi,Qi.current)}function ro(){Na=er.current,U(Qi),U(er)}var Rt=S(null),Pt=null;function qa(e){var t=e.alternate;ne(Ze,Ze.current&1),ne(Rt,e),Pt===null&&(t===null||Qi.current!==null||t.memoizedState!==null)&&(Pt=e)}function so(e){ne(Ze,Ze.current),ne(Rt,e),Pt===null&&(Pt=e)}function Nu(e){e.tag===22?(ne(Ze,Ze.current),ne(Rt,e),Pt===null&&(Pt=e)):Ya()}function Ya(){ne(Ze,Ze.current),ne(Rt,Rt.current)}function Ot(e){U(Rt),Pt===e&&(Pt=null),U(Ze)}var Ze=S(0);function tr(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||hc(i)||pc(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,ye=null,Be=null,Ie=null,ar=!1,Zi=!1,gi=!1,ir=0,Xn=0,Ki=null,Zg=0;function Fe(){throw Error(d(321))}function oo(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Tt(e[i],t[i]))return!1;return!0}function co(e,t,i,n,r,s){return ha=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,c.H=e===null||e.memoizedState===null?rf:ko,gi=!1,s=i(n,r),gi=!1,Zi&&(s=Su(t,i,n,r)),wu(e),s}function wu(e){c.H=Qn;var t=Be!==null&&Be.next!==null;if(ha=0,Ie=Be=ye=null,ar=!1,Xn=0,Ki=null,t)throw Error(d(300));e===null||et||(e=e.dependencies,e!==null&&$l(e)&&(et=!0))}function Su(e,t,i,n){ye=e;var r=0;do{if(Zi&&(Ki=null),Xn=0,Zi=!1,25<=r)throw Error(d(301));if(r+=1,Ie=Be=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}c.H=sf,s=t(i,n)}while(Zi);return s}function Kg(){var e=c.H,t=e.useState()[0];return t=typeof t.then=="function"?Fn(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ye.flags|=1024),t}function uo(){var e=ir!==0;return ir=0,e}function fo(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function mo(e){if(ar){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ar=!1}ha=0,Ie=Be=ye=null,Zi=!1,Xn=ir=0,Ki=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ye.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ke(){if(Be===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ie===null?ye.memoizedState:Ie.next;if(t!==null)Ie=t,Be=e;else{if(e===null)throw ye.alternate===null?Error(d(467)):Error(d(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ie===null?ye.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fn(e){var t=Xn;return Xn+=1,Ki===null&&(Ki=[]),e=hu(Ki,e,t),t=ye,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,c.H=t===null||t.memoizedState===null?rf:ko),e}function lr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fn(e);if(e.$$typeof===P)return dt(e)}throw Error(d(438,String(e)))}function ho(e){var t=null,i=ye.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var n=ye.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=nr(),ye.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),n=0;n<e;n++)i[n]=ce;return t.index++,i}function pa(e,t){return typeof t=="function"?t(e):t}function rr(e){var t=Ke();return po(t,Be,e)}function po(e,t,i){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=i;var r=e.baseQueue,s=n.pending;if(s!==null){if(r!==null){var h=r.next;r.next=s.next,s.next=h}t.baseQueue=r=s,n.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var y=h=null,C=null,Y=t,$=!1;do{var W=Y.lane&-536870913;if(W!==Y.lane?(Se&W)===W:(ha&W)===W){var G=Y.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),W===Pi&&($=!0);else if((ha&G)===G){Y=Y.next,G===Pi&&($=!0);continue}else W={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},C===null?(y=C=W,h=s):C=C.next=W,ye.lanes|=G,Pa|=G;W=Y.action,gi&&i(s,W),s=Y.hasEagerState?Y.eagerState:i(s,W)}else G={lane:W,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},C===null?(y=C=G,h=s):C=C.next=G,ye.lanes|=W,Pa|=W;Y=Y.next}while(Y!==null&&Y!==t);if(C===null?h=s:C.next=y,!Tt(s,e.memoizedState)&&(et=!0,$&&(i=Xi,i!==null)))throw i;e.memoizedState=s,e.baseState=h,e.baseQueue=C,n.lastRenderedState=s}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function go(e){var t=Ke(),i=t.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=e;var n=i.dispatch,r=i.pending,s=t.memoizedState;if(r!==null){i.pending=null;var h=r=r.next;do s=e(s,h.action),h=h.next;while(h!==r);Tt(s,t.memoizedState)||(et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),i.lastRenderedState=s}return[s,n]}function ku(e,t,i){var n=ye,r=Ke(),s=Ce;if(s){if(i===void 0)throw Error(d(407));i=i()}else i=t();var h=!Tt((Be||r).memoizedState,i);if(h&&(r.memoizedState=i,et=!0),r=r.queue,yo(Eu.bind(null,n,r,e),[e]),r.getSnapshot!==t||h||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Ji(9,{destroy:void 0},zu.bind(null,n,r,i,t),null),Ue===null)throw Error(d(349));s||(ha&127)!==0||Cu(n,t,i)}return i}function Cu(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ye.updateQueue,t===null?(t=nr(),ye.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function zu(e,t,i,n){t.value=i,t.getSnapshot=n,Tu(t)&&Au(e)}function Eu(e,t,i){return i(function(){Tu(t)&&Au(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Tt(e,i)}catch{return!0}}function Au(e){var t=si(e,2);t!==null&&wt(t,e,2)}function xo(e){var t=gt();if(typeof e=="function"){var i=e;if(e=i(),gi){Aa(!0);try{i()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function Ru(e,t,i,n){return e.baseState=i,po(e,Be,typeof n=="function"?n:pa)}function Jg(e,t,i,n,r){if(cr(e))throw Error(d(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};c.T!==null?i(!0):s.isTransition=!1,n(s),i=t.pending,i===null?(s.next=t.pending=s,Ou(t,s)):(s.next=i.next,t.pending=i.next=s)}}function Ou(e,t){var i=t.action,n=t.payload,r=e.state;if(t.isTransition){var s=c.T,h={};c.T=h;try{var y=i(r,n),C=c.S;C!==null&&C(h,y),Du(e,t,y)}catch(Y){bo(e,t,Y)}finally{s!==null&&h.types!==null&&(s.types=h.types),c.T=s}}else try{s=i(r,n),Du(e,t,s)}catch(Y){bo(e,t,Y)}}function Du(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){Bu(e,t,n)},function(n){return bo(e,t,n)}):Bu(e,t,i)}function Bu(e,t,i){t.status="fulfilled",t.value=i,Mu(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Ou(e,i)))}function bo(e,t,i){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=i,Mu(t),t=t.next;while(t!==n)}e.action=null}function Mu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lu(e,t){return t}function _u(e,t){if(Ce){var i=Ue.formState;if(i!==null){e:{var n=ye;if(Ce){if(qe){t:{for(var r=qe,s=Vt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Xt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){qe=Xt(r.nextSibling),n=r.data==="F!";break e}}Ma(n)}n=!1}n&&(t=i[0])}}return i=gt(),i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:t},i.queue=n,i=af.bind(null,ye,n),n.dispatch=i,n=xo(!1),s=So.bind(null,ye,!1,n.queue),n=gt(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,i=Jg.bind(null,ye,r,s,i),r.dispatch=i,n.memoizedState=e,[t,i,!1]}function Uu(e){var t=Ke();return Hu(t,Be,e)}function Hu(e,t,i){if(t=po(e,t,Lu)[0],e=rr(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Fn(t)}catch(h){throw h===Fi?Kl:h}else n=t;t=Ke();var r=t.queue,s=r.dispatch;return i!==t.memoizedState&&(ye.flags|=2048,Ji(9,{destroy:void 0},Wg.bind(null,r,i),null)),[n,s,e]}function Wg(e,t){e.action=t}function qu(e){var t=Ke(),i=Be;if(i!==null)return Hu(t,i,e);Ke(),t=t.memoizedState,i=Ke();var n=i.queue.dispatch;return i.memoizedState=e,[t,n,!1]}function Ji(e,t,i,n){return e={tag:e,create:i,deps:n,inst:t,next:null},t=ye.updateQueue,t===null&&(t=nr(),ye.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e),e}function Yu(){return Ke().memoizedState}function sr(e,t,i,n){var r=gt();ye.flags|=e,r.memoizedState=Ji(1|t,{destroy:void 0},i,n===void 0?null:n)}function or(e,t,i,n){var r=Ke();n=n===void 0?null:n;var s=r.memoizedState.inst;Be!==null&&n!==null&&oo(n,Be.memoizedState.deps)?r.memoizedState=Ji(t,s,i,n):(ye.flags|=e,r.memoizedState=Ji(1|t,s,i,n))}function Gu(e,t){sr(8390656,8,e,t)}function yo(e,t){or(2048,8,e,t)}function Ig(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=nr(),ye.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Vu(e){var t=Ke().memoizedState;return Ig({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Pu(e,t){return or(4,2,e,t)}function Xu(e,t){return or(4,4,e,t)}function Fu(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $u(e,t,i){i=i!=null?i.concat([e]):null,or(4,4,Fu.bind(null,t,e),i)}function vo(){}function Qu(e,t){var i=Ke();t=t===void 0?null:t;var n=i.memoizedState;return t!==null&&oo(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function Zu(e,t){var i=Ke();t=t===void 0?null:t;var n=i.memoizedState;if(t!==null&&oo(t,n[1]))return n[0];if(n=e(),gi){Aa(!0);try{e()}finally{Aa(!1)}}return i.memoizedState=[n,t],n}function jo(e,t,i){return i===void 0||(ha&1073741824)!==0&&(Se&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Jf(),ye.lanes|=e,Pa|=e,i)}function Ku(e,t,i,n){return Tt(i,t)?i:Qi.current!==null?(e=jo(e,i,n),Tt(e,t)||(et=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Se&261930)===0?(et=!0,e.memoizedState=i):(e=Jf(),ye.lanes|=e,Pa|=e,t)}function Ju(e,t,i,n,r){var s=m.p;m.p=s!==0&&8>s?s:8;var h=c.T,y={};c.T=y,So(e,!1,t,i);try{var C=r(),Y=c.S;if(Y!==null&&Y(y,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=Qg(C,n);$n(e,t,$,Mt(e))}else $n(e,t,n,Mt(e))}catch(W){$n(e,t,{then:function(){},status:"rejected",reason:W},Mt())}finally{m.p=s,h!==null&&y.types!==null&&(h.types=y.types),c.T=h}}function e0(){}function No(e,t,i,n){if(e.tag!==5)throw Error(d(476));var r=Wu(e).queue;Ju(e,r,t,z,i===null?e0:function(){return Iu(e),i(n)})}function Wu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:z},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Iu(e){var t=Wu(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},Mt())}function wo(){return dt(dl)}function ef(){return Ke().memoizedState}function tf(){return Ke().memoizedState}function t0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=Mt();e=Ua(i);var n=Ha(t,e,i);n!==null&&(wt(n,t,i),Gn(n,t,i)),t={cache:Js()},e.payload=t;return}t=t.return}}function a0(e,t,i){var n=Mt();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},cr(e)?nf(t,i):(i=qs(e,t,i,n),i!==null&&(wt(i,e,n),lf(i,t,n)))}function af(e,t,i){var n=Mt();$n(e,t,i,n)}function $n(e,t,i,n){var r={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(cr(e))nf(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,y=s(h,i);if(r.hasEagerState=!0,r.eagerState=y,Tt(y,h))return Vl(e,t,r,0),Ue===null&&Gl(),!1}catch{}if(i=qs(e,t,r,n),i!==null)return wt(i,e,n),lf(i,t,n),!0}return!1}function So(e,t,i,n){if(n={lane:2,revertLane:ac(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cr(e)){if(t)throw Error(d(479))}else t=qs(e,i,n,2),t!==null&&wt(t,e,2)}function cr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function nf(e,t){Zi=ar=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function lf(e,t,i){if((i&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,cd(e,i)}}var Qn={readContext:dt,use:lr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};Qn.useEffectEvent=Fe;var rf={readContext:dt,use:lr,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Gu,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,sr(4194308,4,Fu.bind(null,t,e),i)},useLayoutEffect:function(e,t){return sr(4194308,4,e,t)},useInsertionEffect:function(e,t){sr(4,2,e,t)},useMemo:function(e,t){var i=gt();t=t===void 0?null:t;var n=e();if(gi){Aa(!0);try{e()}finally{Aa(!1)}}return i.memoizedState=[n,t],n},useReducer:function(e,t,i){var n=gt();if(i!==void 0){var r=i(t);if(gi){Aa(!0);try{i(t)}finally{Aa(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=a0.bind(null,ye,e),[n.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=xo(e);var t=e.queue,i=af.bind(null,ye,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:vo,useDeferredValue:function(e,t){var i=gt();return jo(i,e,t)},useTransition:function(){var e=xo(!1);return e=Ju.bind(null,ye,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var n=ye,r=gt();if(Ce){if(i===void 0)throw Error(d(407));i=i()}else{if(i=t(),Ue===null)throw Error(d(349));(Se&127)!==0||Cu(n,t,i)}r.memoizedState=i;var s={value:i,getSnapshot:t};return r.queue=s,Gu(Eu.bind(null,n,s,e),[e]),n.flags|=2048,Ji(9,{destroy:void 0},zu.bind(null,n,s,i,t),null),i},useId:function(){var e=gt(),t=Ue.identifierPrefix;if(Ce){var i=ta,n=ea;i=(n&~(1<<32-Et(n)-1)).toString(32)+i,t="_"+t+"R_"+i,i=ir++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Zg++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wo,useFormState:_u,useActionState:_u,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=So.bind(null,ye,!0,i),i.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return gt().memoizedState=t0.bind(null,ye)},useEffectEvent:function(e){var t=gt(),i={impl:e};return t.memoizedState=i,function(){if((Ae&2)!==0)throw Error(d(440));return i.impl.apply(void 0,arguments)}}},ko={readContext:dt,use:lr,useCallback:Qu,useContext:dt,useEffect:yo,useImperativeHandle:$u,useInsertionEffect:Pu,useLayoutEffect:Xu,useMemo:Zu,useReducer:rr,useRef:Yu,useState:function(){return rr(pa)},useDebugValue:vo,useDeferredValue:function(e,t){var i=Ke();return Ku(i,Be.memoizedState,e,t)},useTransition:function(){var e=rr(pa)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:ku,useId:ef,useHostTransitionStatus:wo,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var i=Ke();return Ru(i,Be,e,t)},useMemoCache:ho,useCacheRefresh:tf};ko.useEffectEvent=Vu;var sf={readContext:dt,use:lr,useCallback:Qu,useContext:dt,useEffect:yo,useImperativeHandle:$u,useInsertionEffect:Pu,useLayoutEffect:Xu,useMemo:Zu,useReducer:go,useRef:Yu,useState:function(){return go(pa)},useDebugValue:vo,useDeferredValue:function(e,t){var i=Ke();return Be===null?jo(i,e,t):Ku(i,Be.memoizedState,e,t)},useTransition:function(){var e=go(pa)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:ku,useId:ef,useHostTransitionStatus:wo,useFormState:qu,useActionState:qu,useOptimistic:function(e,t){var i=Ke();return Be!==null?Ru(i,Be,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:ho,useCacheRefresh:tf};sf.useEffectEvent=Vu;function Co(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:N({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var zo={enqueueSetState:function(e,t,i){e=e._reactInternals;var n=Mt(),r=Ua(n);r.payload=t,i!=null&&(r.callback=i),t=Ha(e,r,n),t!==null&&(wt(t,e,n),Gn(t,e,n))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=Mt(),r=Ua(n);r.tag=1,r.payload=t,i!=null&&(r.callback=i),t=Ha(e,r,n),t!==null&&(wt(t,e,n),Gn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Mt(),n=Ua(i);n.tag=2,t!=null&&(n.callback=t),t=Ha(e,n,i),t!==null&&(wt(t,e,i),Gn(t,e,i))}};function of(e,t,i,n,r,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,h):t.prototype&&t.prototype.isPureReactComponent?!Bn(i,n)||!Bn(r,s):!0}function cf(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function xi(e,t){var i=t;if("ref"in t){i={};for(var n in t)n!=="ref"&&(i[n]=t[n])}if(e=e.defaultProps){i===t&&(i=N({},i));for(var r in e)i[r]===void 0&&(i[r]=e[r])}return i}function df(e){Yl(e)}function uf(e){console.error(e)}function ff(e){Yl(e)}function dr(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function mf(e,t,i){try{var n=e.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Eo(e,t,i){return i=Ua(i),i.tag=3,i.payload={element:null},i.callback=function(){dr(e,t)},i}function hf(e){return e=Ua(e),e.tag=3,e}function pf(e,t,i,n){var r=i.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;e.payload=function(){return r(s)},e.callback=function(){mf(t,i,n)}}var h=i.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){mf(t,i,n),typeof r!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})})}function i0(e,t,i,n,r){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=i.alternate,t!==null&&Vi(t,i,r,!0),i=Rt.current,i!==null){switch(i.tag){case 31:case 13:return Pt===null?Nr():i.alternate===null&&$e===0&&($e=3),i.flags&=-257,i.flags|=65536,i.lanes=r,n===Jl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([n]):t.add(n),Io(e,n,r)),!1;case 22:return i.flags|=65536,n===Jl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([n]):i.add(n)),Io(e,n,r)),!1}throw Error(d(435,i.tag))}return Io(e,n,r),Nr(),!1}if(Ce)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==Fs&&(e=Error(d(422),{cause:n}),_n(qt(e,i)))):(n!==Fs&&(t=Error(d(423),{cause:n}),_n(qt(t,i))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=qt(n,i),r=Eo(e.stateNode,n,r),io(e,r),$e!==4&&($e=2)),!1;var s=Error(d(520),{cause:n});if(s=qt(s,i),al===null?al=[s]:al.push(s),$e!==4&&($e=2),t===null)return!0;n=qt(n,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=r&-r,i.lanes|=e,e=Eo(i.stateNode,n,e),io(i,e),!1;case 1:if(t=i.type,s=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Xa===null||!Xa.has(s))))return i.flags|=65536,r&=-r,i.lanes|=r,r=hf(r),pf(r,e,i,n),io(i,r),!1}i=i.return}while(i!==null);return!1}var To=Error(d(461)),et=!1;function ut(e,t,i,n){t.child=e===null?bu(t,null,i,n):pi(t,e.child,i,n)}function gf(e,t,i,n,r){i=i.render;var s=t.ref;if("ref"in n){var h={};for(var y in n)y!=="ref"&&(h[y]=n[y])}else h=n;return ui(t),n=co(e,t,i,h,s,r),y=uo(),e!==null&&!et?(fo(e,t,r),ga(e,t,r)):(Ce&&y&&Ps(t),t.flags|=1,ut(e,t,n,r),t.child)}function xf(e,t,i,n,r){if(e===null){var s=i.type;return typeof s=="function"&&!Ys(s)&&s.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=s,bf(e,t,s,n,r)):(e=Xl(i.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!_o(e,r)){var h=s.memoizedProps;if(i=i.compare,i=i!==null?i:Bn,i(h,n)&&e.ref===t.ref)return ga(e,t,r)}return t.flags|=1,e=da(s,n),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,i,n,r){if(e!==null){var s=e.memoizedProps;if(Bn(s,n)&&e.ref===t.ref)if(et=!1,t.pendingProps=n=s,_o(e,r))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,ga(e,t,r)}return Ao(e,t,i,n,r)}function yf(e,t,i,n){var r=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|i:i,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~s}else n=0,t.child=null;return vf(e,t,s,i,n)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zl(t,s!==null?s.cachePool:null),s!==null?ju(t,s):lo(),Nu(t);else return n=t.lanes=536870912,vf(e,t,s!==null?s.baseLanes|i:i,i,n)}else s!==null?(Zl(t,s.cachePool),ju(t,s),Ya(),t.memoizedState=null):(e!==null&&Zl(t,null),lo(),Ya());return ut(e,t,r,i),t.child}function Zn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vf(e,t,i,n,r){var s=Is();return s=s===null?null:{parent:We._currentValue,pool:s},t.memoizedState={baseLanes:i,cachePool:s},e!==null&&Zl(t,null),lo(),Nu(t),e!==null&&Vi(e,t,n,!0),t.childLanes=r,null}function ur(e,t){return t=mr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jf(e,t,i){return pi(t,e.child,null,i),e=ur(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function n0(e,t,i){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(n.mode==="hidden")return e=ur(t,n),t.lanes=536870912,Zn(null,e);if(so(t),(e=qe)?(e=Dm(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},i=iu(e),i.return=t,t.child=i,ct=t,qe=null)):e=null,e===null)throw Ma(t);return t.lanes=536870912,null}return ur(t,n)}var s=e.memoizedState;if(s!==null){var h=s.dehydrated;if(so(t),r)if(t.flags&256)t.flags&=-257,t=jf(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(et||Vi(e,t,i,!1),r=(i&e.childLanes)!==0,et||r){if(n=Ue,n!==null&&(h=dd(n,i),h!==0&&h!==s.retryLane))throw s.retryLane=h,si(e,h),wt(n,e,h),To;Nr(),t=jf(e,t,i)}else e=s.treeContext,qe=Xt(h.nextSibling),ct=t,Ce=!0,Ba=null,Vt=!1,e!==null&&ru(t,e),t=ur(t,n),t.flags|=4096;return t}return e=da(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fr(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(d(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Ao(e,t,i,n,r){return ui(t),i=co(e,t,i,n,void 0,r),n=uo(),e!==null&&!et?(fo(e,t,r),ga(e,t,r)):(Ce&&n&&Ps(t),t.flags|=1,ut(e,t,i,r),t.child)}function Nf(e,t,i,n,r,s){return ui(t),t.updateQueue=null,i=Su(t,n,i,r),wu(e),n=uo(),e!==null&&!et?(fo(e,t,s),ga(e,t,s)):(Ce&&n&&Ps(t),t.flags|=1,ut(e,t,i,s),t.child)}function wf(e,t,i,n,r){if(ui(t),t.stateNode===null){var s=Hi,h=i.contextType;typeof h=="object"&&h!==null&&(s=dt(h)),s=new i(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},to(t),h=i.contextType,s.context=typeof h=="object"&&h!==null?dt(h):Hi,s.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Co(t,i,h,n),s.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&zo.enqueueReplaceState(s,s.state,null),Pn(t,n,s,r),Vn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var y=t.memoizedProps,C=xi(i,y);s.props=C;var Y=s.context,$=i.contextType;h=Hi,typeof $=="object"&&$!==null&&(h=dt($));var W=i.getDerivedStateFromProps;$=typeof W=="function"||typeof s.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,$||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(y||Y!==h)&&cf(t,s,n,h),_a=!1;var G=t.memoizedState;s.state=G,Pn(t,n,s,r),Vn(),Y=t.memoizedState,y||G!==Y||_a?(typeof W=="function"&&(Co(t,i,W,n),Y=t.memoizedState),(C=_a||of(t,i,C,n,G,Y,h))?($||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=Y),s.props=n,s.state=Y,s.context=h,n=C):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,ao(e,t),h=t.memoizedProps,$=xi(i,h),s.props=$,W=t.pendingProps,G=s.context,Y=i.contextType,C=Hi,typeof Y=="object"&&Y!==null&&(C=dt(Y)),y=i.getDerivedStateFromProps,(Y=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==W||G!==C)&&cf(t,s,n,C),_a=!1,G=t.memoizedState,s.state=G,Pn(t,n,s,r),Vn();var X=t.memoizedState;h!==W||G!==X||_a||e!==null&&e.dependencies!==null&&$l(e.dependencies)?(typeof y=="function"&&(Co(t,i,y,n),X=t.memoizedState),($=_a||of(t,i,$,n,G,X,C)||e!==null&&e.dependencies!==null&&$l(e.dependencies))?(Y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,X,C),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,X,C)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=X),s.props=n,s.state=X,s.context=C,n=$):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,fr(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=pi(t,e.child,null,r),t.child=pi(t,null,i,r)):ut(e,t,i,r),t.memoizedState=s.state,e=t.child):e=ga(e,t,r),e}function Sf(e,t,i,n){return ci(),t.flags|=256,ut(e,t,i,n),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(e){return{baseLanes:e,cachePool:fu()}}function Do(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Bt),e}function kf(e,t,i){var n=t.pendingProps,r=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(r?qa(t):Ya(),(e=qe)?(e=Dm(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},i=iu(e),i.return=t,t.child=i,ct=t,qe=null)):e=null,e===null)throw Ma(t);return pc(e)?t.lanes=32:t.lanes=536870912,null}var y=n.children;return n=n.fallback,r?(Ya(),r=t.mode,y=mr({mode:"hidden",children:y},r),n=oi(n,r,i,null),y.return=t,n.return=t,y.sibling=n,t.child=y,n=t.child,n.memoizedState=Oo(i),n.childLanes=Do(e,h,i),t.memoizedState=Ro,Zn(null,n)):(qa(t),Bo(t,y))}var C=e.memoizedState;if(C!==null&&(y=C.dehydrated,y!==null)){if(s)t.flags&256?(qa(t),t.flags&=-257,t=Mo(e,t,i)):t.memoizedState!==null?(Ya(),t.child=e.child,t.flags|=128,t=null):(Ya(),y=n.fallback,r=t.mode,n=mr({mode:"visible",children:n.children},r),y=oi(y,r,i,null),y.flags|=2,n.return=t,y.return=t,n.sibling=y,t.child=n,pi(t,e.child,null,i),n=t.child,n.memoizedState=Oo(i),n.childLanes=Do(e,h,i),t.memoizedState=Ro,t=Zn(null,n));else if(qa(t),pc(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var Y=h.dgst;h=Y,n=Error(d(419)),n.stack="",n.digest=h,_n({value:n,source:null,stack:null}),t=Mo(e,t,i)}else if(et||Vi(e,t,i,!1),h=(i&e.childLanes)!==0,et||h){if(h=Ue,h!==null&&(n=dd(h,i),n!==0&&n!==C.retryLane))throw C.retryLane=n,si(e,n),wt(h,e,n),To;hc(y)||Nr(),t=Mo(e,t,i)}else hc(y)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,qe=Xt(y.nextSibling),ct=t,Ce=!0,Ba=null,Vt=!1,e!==null&&ru(t,e),t=Bo(t,n.children),t.flags|=4096);return t}return r?(Ya(),y=n.fallback,r=t.mode,C=e.child,Y=C.sibling,n=da(C,{mode:"hidden",children:n.children}),n.subtreeFlags=C.subtreeFlags&65011712,Y!==null?y=da(Y,y):(y=oi(y,r,i,null),y.flags|=2),y.return=t,n.return=t,n.sibling=y,t.child=n,Zn(null,n),n=t.child,y=e.child.memoizedState,y===null?y=Oo(i):(r=y.cachePool,r!==null?(C=We._currentValue,r=r.parent!==C?{parent:C,pool:C}:r):r=fu(),y={baseLanes:y.baseLanes|i,cachePool:r}),n.memoizedState=y,n.childLanes=Do(e,h,i),t.memoizedState=Ro,Zn(e.child,n)):(qa(t),i=e.child,e=i.sibling,i=da(i,{mode:"visible",children:n.children}),i.return=t,i.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=i,t.memoizedState=null,i)}function Bo(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=At(22,e,null,t),e.lanes=0,e}function Mo(e,t,i){return pi(t,e.child,null,i),e=Bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Zs(e.return,t,i)}function Lo(e,t,i,n,r,s){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r,treeForkCount:s}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=n,h.tail=i,h.tailMode=r,h.treeForkCount=s)}function zf(e,t,i){var n=t.pendingProps,r=n.revealOrder,s=n.tail;n=n.children;var h=Ze.current,y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,ne(Ze,h),ut(e,t,n,i),n=Ce?Ln:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cf(e,i,t);else if(e.tag===19)Cf(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(i=t.child,r=null;i!==null;)e=i.alternate,e!==null&&tr(e)===null&&(r=i),i=i.sibling;i=r,i===null?(r=t.child,t.child=null):(r=i.sibling,i.sibling=null),Lo(t,!1,r,i,s,n);break;case"backwards":case"unstable_legacy-backwards":for(i=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&tr(e)===null){t.child=r;break}e=r.sibling,r.sibling=i,i=r,r=e}Lo(t,!0,i,null,s,n);break;case"together":Lo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ga(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Pa|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(Vi(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,i=da(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=da(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function _o(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$l(e)))}function l0(e,t,i){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),La(t,We,e.memoizedState.cache),ci();break;case 27:case 5:Ta(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:La(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(qa(t),t.flags|=128,null):(i&t.child.childLanes)!==0?kf(e,t,i):(qa(t),e=ga(e,t,i),e!==null?e.sibling:null);qa(t);break;case 19:var r=(e.flags&128)!==0;if(n=(i&t.childLanes)!==0,n||(Vi(e,t,i,!1),n=(i&t.childLanes)!==0),r){if(n)return zf(e,t,i);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ne(Ze,Ze.current),n)break;return null;case 22:return t.lanes=0,yf(e,t,i,t.pendingProps);case 24:La(t,We,e.memoizedState.cache)}return ga(e,t,i)}function Ef(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!_o(e,i)&&(t.flags&128)===0)return et=!1,l0(e,t,i);et=(e.flags&131072)!==0}else et=!1,Ce&&(t.flags&1048576)!==0&&lu(t,Ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=mi(t.elementType),t.type=e,typeof e=="function")Ys(e)?(n=xi(e,n),t.tag=1,t=wf(null,t,e,n,i)):(t.tag=0,t=Ao(null,t,e,n,i));else{if(e!=null){var r=e.$$typeof;if(r===le){t.tag=11,t=gf(null,t,e,n,i);break e}else if(r===E){t.tag=14,t=xf(null,t,e,n,i);break e}}throw t=ee(e)||e,Error(d(306,t,""))}}return t;case 0:return Ao(e,t,t.type,t.pendingProps,i);case 1:return n=t.type,r=xi(n,t.pendingProps),wf(e,t,n,r,i);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var s=t.memoizedState;r=s.element,ao(e,t),Pn(t,n,null,i);var h=t.memoizedState;if(n=h.cache,La(t,We,n),n!==s.cache&&Ks(t,[We],i,!0),Vn(),n=h.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Sf(e,t,n,i);break e}else if(n!==r){r=qt(Error(d(424)),t),_n(r),t=Sf(e,t,n,i);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=Xt(e.firstChild),ct=t,Ce=!0,Ba=null,Vt=!0,i=bu(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ci(),n===r){t=ga(e,t,i);break e}ut(e,t,n,i)}t=t.child}return t;case 26:return fr(e,t),e===null?(i=Hm(t.type,null,t.pendingProps,null))?t.memoizedState=i:Ce||(i=t.type,e=t.pendingProps,n=Tr(te.current).createElement(i),n[ot]=t,n[xt]=e,ft(n,i,e),nt(n),t.stateNode=n):t.memoizedState=Hm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ta(t),e===null&&Ce&&(n=t.stateNode=Lm(t.type,t.pendingProps,te.current),ct=t,Vt=!0,r=qe,Za(t.type)?(gc=r,qe=Xt(n.firstChild)):qe=r),ut(e,t,t.pendingProps.children,i),fr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((r=n=qe)&&(n=M0(n,t.type,t.pendingProps,Vt),n!==null?(t.stateNode=n,ct=t,qe=Xt(n.firstChild),Vt=!1,r=!0):r=!1),r||Ma(t)),Ta(t),r=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,n=s.children,uc(r,s)?n=null:h!==null&&uc(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=co(e,t,Kg,null,null,i),dl._currentValue=r),fr(e,t),ut(e,t,n,i),t.child;case 6:return e===null&&Ce&&((e=i=qe)&&(i=L0(i,t.pendingProps,Vt),i!==null?(t.stateNode=i,ct=t,qe=null,e=!0):e=!1),e||Ma(t)),null;case 13:return kf(e,t,i);case 4:return me(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=pi(t,null,n,i):ut(e,t,n,i),t.child;case 11:return gf(e,t,t.type,t.pendingProps,i);case 7:return ut(e,t,t.pendingProps,i),t.child;case 8:return ut(e,t,t.pendingProps.children,i),t.child;case 12:return ut(e,t,t.pendingProps.children,i),t.child;case 10:return n=t.pendingProps,La(t,t.type,n.value),ut(e,t,n.children,i),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,ui(t),r=dt(r),n=n(r),t.flags|=1,ut(e,t,n,i),t.child;case 14:return xf(e,t,t.type,t.pendingProps,i);case 15:return bf(e,t,t.type,t.pendingProps,i);case 19:return zf(e,t,i);case 31:return n0(e,t,i);case 22:return yf(e,t,i,t.pendingProps);case 24:return ui(t),n=dt(We),e===null?(r=Is(),r===null&&(r=Ue,s=Js(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=i),r=s),t.memoizedState={parent:n,cache:r},to(t),La(t,We,r)):((e.lanes&i)!==0&&(ao(e,t),Pn(t,null,null,i),Vn()),r=e.memoizedState,s=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),La(t,We,n)):(n=s.cache,La(t,We,n),n!==r.cache&&Ks(t,[We],i,!0))),ut(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function xa(e){e.flags|=4}function Uo(e,t,i,n,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(tm())e.flags|=8192;else throw hi=Jl,eo}else e.flags&=-16777217}function Tf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pm(t))if(tm())e.flags|=8192;else throw hi=Jl,eo}function hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sd():536870912,e.lanes|=t,tn|=t)}function Kn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function r0(e,t,i){var n=t.pendingProps;switch(Xs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return i=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ma(We),ge(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?xa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$s())),Ye(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(xa(t),s!==null?(Ye(t),Tf(t,s)):(Ye(t),Uo(t,r,null,n,i))):s?s!==e.memoizedState?(xa(t),Ye(t),Tf(t,s)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&xa(t),Ye(t),Uo(t,r,e,n,i)),null;case 27:if(Lt(t),i=te.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&xa(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Ye(t),null}e=oe.current,Gi(t)?su(t):(e=Lm(r,n,i),t.stateNode=e,xa(t))}return Ye(t),null;case 5:if(Lt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&xa(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Ye(t),null}if(s=oe.current,Gi(t))su(t);else{var h=Tr(te.current);switch(s){case 1:s=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=h.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?h.createElement("select",{is:n.is}):h.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?h.createElement(r,{is:n.is}):h.createElement(r)}}s[ot]=t,s[xt]=n;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)s.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=s;e:switch(ft(s,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&xa(t)}}return Ye(t),Uo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&xa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=te.current,Gi(t)){if(e=t.stateNode,i=t.memoizedProps,n=null,r=ct,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[ot]=t,e=!!(e.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||km(e.nodeValue,i)),e||Ma(t,!0)}else e=Tr(e).createTextNode(n),e[ot]=t,t.stateNode=e}return Ye(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(n=Gi(t),i!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[ot]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else i=$s(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Ye(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Gi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[ot]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),r=!1}else r=$s(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=i,t):(i=n!==null,e=e!==null&&e.memoizedState!==null,i&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==r&&(n.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),hr(t,t.updateQueue),Ye(t),null);case 4:return ge(),e===null&&rc(t.stateNode.containerInfo),Ye(t),null;case 10:return ma(t.type),Ye(t),null;case 19:if(U(Ze),n=t.memoizedState,n===null)return Ye(t),null;if(r=(t.flags&128)!==0,s=n.rendering,s===null)if(r)Kn(n,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=tr(e),s!==null){for(t.flags|=128,Kn(n,!1),e=s.updateQueue,t.updateQueue=e,hr(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)au(i,e),i=i.sibling;return ne(Ze,Ze.current&1|2),Ce&&ua(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&pt()>yr&&(t.flags|=128,r=!0,Kn(n,!1),t.lanes=4194304)}else{if(!r)if(e=tr(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,hr(t,e),Kn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!Ce)return Ye(t),null}else 2*pt()-n.renderingStartTime>yr&&i!==536870912&&(t.flags|=128,r=!0,Kn(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=pt(),e.sibling=null,i=Ze.current,ne(Ze,r?i&1|2:i&1),Ce&&ua(t,n.treeForkCount),e):(Ye(t),null);case 22:case 23:return Ot(t),ro(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(i&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),i=t.updateQueue,i!==null&&hr(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==i&&(t.flags|=2048),e!==null&&U(fi),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ma(We),Ye(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function s0(e,t){switch(Xs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(We),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Lt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(d(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ze),null;case 4:return ge(),null;case 10:return ma(t.type),null;case 22:case 23:return Ot(t),ro(),e!==null&&U(fi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(We),null;case 25:return null;default:return null}}function Af(e,t){switch(Xs(t),t.tag){case 3:ma(We),ge();break;case 26:case 27:case 5:Lt(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:U(Ze);break;case 10:ma(t.type);break;case 22:case 23:Ot(t),ro(),e!==null&&U(fi);break;case 24:ma(We)}}function Jn(e,t){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){n=void 0;var s=i.create,h=i.inst;n=s(),h.destroy=n}i=i.next}while(i!==r)}}catch(y){De(t,t.return,y)}}function Ga(e,t,i){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&e)===e){var h=n.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,r=t;var C=i,Y=y;try{Y()}catch($){De(r,C,$)}}}n=n.next}while(n!==s)}}catch($){De(t,t.return,$)}}function Rf(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{vu(t,i)}catch(n){De(e,e.return,n)}}}function Of(e,t,i){i.props=xi(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(n){De(e,t,n)}}function Wn(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof i=="function"?e.refCleanup=i(n):i.current=n}}catch(r){De(e,t,r)}}function aa(e,t){var i=e.ref,n=e.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(r){De(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(r){De(e,t,r)}else i.current=null}function Df(e){var t=e.type,i=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break e;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(r){De(e,e.return,r)}}function Ho(e,t,i){try{var n=e.stateNode;T0(n,e.type,i,t),n[xt]=t}catch(r){De(e,e.return,r)}}function Bf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=oa));else if(n!==4&&(n===27&&Za(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Yo(e,t,i),e=e.sibling;e!==null;)Yo(e,t,i),e=e.sibling}function pr(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(n===27&&Za(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(pr(e,t,i),e=e.sibling;e!==null;)pr(e,t,i),e=e.sibling}function Mf(e){var t=e.stateNode,i=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ft(t,n,i),t[ot]=e,t[xt]=i}catch(s){De(e,e.return,s)}}var ba=!1,tt=!1,Go=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,lt=null;function o0(e,t){if(e=e.containerInfo,cc=Lr,e=$d(e),Bs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var h=0,y=-1,C=-1,Y=0,$=0,W=e,G=null;t:for(;;){for(var X;W!==i||r!==0&&W.nodeType!==3||(y=h+r),W!==s||n!==0&&W.nodeType!==3||(C=h+n),W.nodeType===3&&(h+=W.nodeValue.length),(X=W.firstChild)!==null;)G=W,W=X;for(;;){if(W===e)break t;if(G===i&&++Y===r&&(y=h),G===s&&++$===n&&(C=h),(X=W.nextSibling)!==null)break;W=G,G=W.parentNode}W=X}i=y===-1||C===-1?null:{start:y,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(dc={focusedElem:e,selectionRange:i},Lr=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)r=e[i],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,i=t,r=s.memoizedProps,s=s.memoizedState,n=i.stateNode;try{var de=xi(i.type,r);e=n.getSnapshotBeforeUpdate(de,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(pe){De(i,i.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)mc(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function _f(e,t,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:va(e,i),n&4&&Jn(5,i);break;case 1:if(va(e,i),n&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(h){De(i,i.return,h)}else{var r=xi(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){De(i,i.return,h)}}n&64&&Rf(i),n&512&&Wn(i,i.return);break;case 3:if(va(e,i),n&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{vu(e,t)}catch(h){De(i,i.return,h)}}break;case 27:t===null&&n&4&&Mf(i);case 26:case 5:va(e,i),t===null&&n&4&&Df(i),n&512&&Wn(i,i.return);break;case 12:va(e,i);break;case 31:va(e,i),n&4&&qf(e,i);break;case 13:va(e,i),n&4&&Yf(e,i),n&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=x0.bind(null,i),_0(e,i))));break;case 22:if(n=i.memoizedState!==null||ba,!n){t=t!==null&&t.memoizedState!==null||tt,r=ba;var s=tt;ba=n,(tt=t)&&!s?ja(e,i,(i.subtreeFlags&8772)!==0):va(e,i),ba=r,tt=s}break;case 30:break;default:va(e,i)}}function Uf(e){var t=e.alternate;t!==null&&(e.alternate=null,Uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,yt=!1;function ya(e,t,i){for(i=i.child;i!==null;)Hf(e,t,i),i=i.sibling}function Hf(e,t,i){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Nn,i)}catch{}switch(i.tag){case 26:tt||aa(i,t),ya(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:tt||aa(i,t);var n=Ge,r=yt;Za(i.type)&&(Ge=i.stateNode,yt=!1),ya(e,t,i),sl(i.stateNode),Ge=n,yt=r;break;case 5:tt||aa(i,t);case 6:if(n=Ge,r=yt,Ge=null,ya(e,t,i),Ge=n,yt=r,Ge!==null)if(yt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(i.stateNode)}catch(s){De(i,t,s)}else try{Ge.removeChild(i.stateNode)}catch(s){De(i,t,s)}break;case 18:Ge!==null&&(yt?(e=Ge,Rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),dn(e)):Rm(Ge,i.stateNode));break;case 4:n=Ge,r=yt,Ge=i.stateNode.containerInfo,yt=!0,ya(e,t,i),Ge=n,yt=r;break;case 0:case 11:case 14:case 15:Ga(2,i,t),tt||Ga(4,i,t),ya(e,t,i);break;case 1:tt||(aa(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Of(i,t,n)),ya(e,t,i);break;case 21:ya(e,t,i);break;case 22:tt=(n=tt)||i.memoizedState!==null,ya(e,t,i),tt=n;break;default:ya(e,t,i)}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dn(e)}catch(i){De(t,t.return,i)}}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dn(e)}catch(i){De(t,t.return,i)}}function c0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lf),t;default:throw Error(d(435,e.tag))}}function gr(e,t){var i=c0(e);t.forEach(function(n){if(!i.has(n)){i.add(n);var r=b0.bind(null,e,n);n.then(r,r)}})}function vt(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n],s=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(Za(y.type)){Ge=y.stateNode,yt=!1;break e}break;case 5:Ge=y.stateNode,yt=!1;break e;case 3:case 4:Ge=y.stateNode.containerInfo,yt=!0;break e}y=y.return}if(Ge===null)throw Error(d(160));Hf(s,h,r),Ge=null,yt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}var Jt=null;function Gf(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),jt(e),n&4&&(Ga(3,e,e.return),Jn(3,e),Ga(5,e,e.return));break;case 1:vt(t,e),jt(e),n&512&&(tt||i===null||aa(i,i.return)),n&64&&ba&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:var r=Jt;if(vt(t,e),jt(e),n&512&&(tt||i===null||aa(i,i.return)),n&4){var s=i!==null?i.memoizedState:null;if(n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null){e:{n=e.type,i=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":s=r.getElementsByTagName("title")[0],(!s||s[kn]||s[ot]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(n),r.head.insertBefore(s,r.querySelector("head > title"))),ft(s,n,i),s[ot]=e,nt(s),n=s;break e;case"link":var h=Gm("link","href",r).get(n+(i.href||""));if(h){for(var y=0;y<h.length;y++)if(s=h[y],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){h.splice(y,1);break t}}s=r.createElement(n),ft(s,n,i),r.head.appendChild(s);break;case"meta":if(h=Gm("meta","content",r).get(n+(i.content||""))){for(y=0;y<h.length;y++)if(s=h[y],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){h.splice(y,1);break t}}s=r.createElement(n),ft(s,n,i),r.head.appendChild(s);break;default:throw Error(d(468,n))}s[ot]=e,nt(s),n=s}e.stateNode=n}else Vm(r,e.type,e.stateNode);else e.stateNode=Ym(r,n,e.memoizedProps);else s!==n?(s===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):s.count--,n===null?Vm(r,e.type,e.stateNode):Ym(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ho(e,e.memoizedProps,i.memoizedProps)}break;case 27:vt(t,e),jt(e),n&512&&(tt||i===null||aa(i,i.return)),i!==null&&n&4&&Ho(e,e.memoizedProps,i.memoizedProps);break;case 5:if(vt(t,e),jt(e),n&512&&(tt||i===null||aa(i,i.return)),e.flags&32){r=e.stateNode;try{Oi(r,"")}catch(de){De(e,e.return,de)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,Ho(e,r,i!==null?i.memoizedProps:r)),n&1024&&(Go=!0);break;case 6:if(vt(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,i=e.stateNode;try{i.nodeValue=n}catch(de){De(e,e.return,de)}}break;case 3:if(Or=null,r=Jt,Jt=Ar(t.containerInfo),vt(t,e),Jt=r,jt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(de){De(e,e.return,de)}Go&&(Go=!1,Vf(e));break;case 4:n=Jt,Jt=Ar(e.stateNode.containerInfo),vt(t,e),jt(e),Jt=n;break;case 12:vt(t,e),jt(e);break;case 31:vt(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,gr(e,n)));break;case 13:vt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(br=pt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,gr(e,n)));break;case 22:r=e.memoizedState!==null;var C=i!==null&&i.memoizedState!==null,Y=ba,$=tt;if(ba=Y||r,tt=$||C,vt(t,e),tt=$,ba=Y,jt(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(i===null||C||ba||tt||bi(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){C=i=t;try{if(s=C.stateNode,r)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=C.stateNode;var W=C.memoizedProps.style,G=W!=null&&W.hasOwnProperty("display")?W.display:null;y.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(de){De(C,C.return,de)}}}else if(t.tag===6){if(i===null){C=t;try{C.stateNode.nodeValue=r?"":C.memoizedProps}catch(de){De(C,C.return,de)}}}else if(t.tag===18){if(i===null){C=t;try{var X=C.stateNode;r?Om(X,!0):Om(C.stateNode,!1)}catch(de){De(C,C.return,de)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,gr(e,i))));break;case 19:vt(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,gr(e,n)));break;case 30:break;case 21:break;default:vt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var i,n=e.return;n!==null;){if(Bf(n)){i=n;break}n=n.return}if(i==null)throw Error(d(160));switch(i.tag){case 27:var r=i.stateNode,s=qo(e);pr(e,s,r);break;case 5:var h=i.stateNode;i.flags&32&&(Oi(h,""),i.flags&=-33);var y=qo(e);pr(e,y,h);break;case 3:case 4:var C=i.stateNode.containerInfo,Y=qo(e);Yo(e,Y,C);break;default:throw Error(d(161))}}catch($){De(e,e.return,$)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_f(e,t.alternate,t),t=t.sibling}function bi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ga(4,t,t.return),bi(t);break;case 1:aa(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Of(t,t.return,i),bi(t);break;case 27:sl(t.stateNode);case 26:case 5:aa(t,t.return),bi(t);break;case 22:t.memoizedState===null&&bi(t);break;case 30:bi(t);break;default:bi(t)}e=e.sibling}}function ja(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:ja(r,s,i),Jn(4,s);break;case 1:if(ja(r,s,i),n=s,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Y){De(n,n.return,Y)}if(n=s,r=n.updateQueue,r!==null){var y=n.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)yu(C[r],y)}catch(Y){De(n,n.return,Y)}}i&&h&64&&Rf(s),Wn(s,s.return);break;case 27:Mf(s);case 26:case 5:ja(r,s,i),i&&n===null&&h&4&&Df(s),Wn(s,s.return);break;case 12:ja(r,s,i);break;case 31:ja(r,s,i),i&&h&4&&qf(r,s);break;case 13:ja(r,s,i),i&&h&4&&Yf(r,s);break;case 22:s.memoizedState===null&&ja(r,s,i),Wn(s,s.return);break;case 30:break;default:ja(r,s,i)}t=t.sibling}}function Vo(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Un(i))}function Po(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Un(e))}function Wt(e,t,i,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pf(e,t,i,n),t=t.sibling}function Pf(e,t,i,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,i,n),r&2048&&Jn(9,t);break;case 1:Wt(e,t,i,n);break;case 3:Wt(e,t,i,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Un(e)));break;case 12:if(r&2048){Wt(e,t,i,n),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,y=s.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){De(t,t.return,C)}}else Wt(e,t,i,n);break;case 31:Wt(e,t,i,n);break;case 13:Wt(e,t,i,n);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?Wt(e,t,i,n):In(e,t):s._visibility&2?Wt(e,t,i,n):(s._visibility|=2,Wi(e,t,i,n,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Vo(h,t);break;case 24:Wt(e,t,i,n),r&2048&&Po(t.alternate,t);break;default:Wt(e,t,i,n)}}function Wi(e,t,i,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,h=t,y=i,C=n,Y=h.flags;switch(h.tag){case 0:case 11:case 15:Wi(s,h,y,C,r),Jn(8,h);break;case 23:break;case 22:var $=h.stateNode;h.memoizedState!==null?$._visibility&2?Wi(s,h,y,C,r):In(s,h):($._visibility|=2,Wi(s,h,y,C,r)),r&&Y&2048&&Vo(h.alternate,h);break;case 24:Wi(s,h,y,C,r),r&&Y&2048&&Po(h.alternate,h);break;default:Wi(s,h,y,C,r)}t=t.sibling}}function In(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,n=t,r=n.flags;switch(n.tag){case 22:In(i,n),r&2048&&Vo(n.alternate,n);break;case 24:In(i,n),r&2048&&Po(n.alternate,n);break;default:In(i,n)}t=t.sibling}}var el=8192;function Ii(e,t,i){if(e.subtreeFlags&el)for(e=e.child;e!==null;)Xf(e,t,i),e=e.sibling}function Xf(e,t,i){switch(e.tag){case 26:Ii(e,t,i),e.flags&el&&e.memoizedState!==null&&Z0(i,Jt,e.memoizedState,e.memoizedProps);break;case 5:Ii(e,t,i);break;case 3:case 4:var n=Jt;Jt=Ar(e.stateNode.containerInfo),Ii(e,t,i),Jt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=el,el=16777216,Ii(e,t,i),el=n):Ii(e,t,i));break;default:Ii(e,t,i)}}function Ff(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];lt=n,Qf(n,e)}Ff(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$f(e),e=e.sibling}function $f(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xr(e)):tl(e);break;default:tl(e)}}function xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];lt=n,Qf(n,e)}Ff(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ga(8,t,t.return),xr(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,xr(t));break;default:xr(t)}e=e.sibling}}function Qf(e,t){for(;lt!==null;){var i=lt;switch(i.tag){case 0:case 11:case 15:Ga(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Un(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,lt=n;else e:for(i=e;lt!==null;){n=lt;var r=n.sibling,s=n.return;if(Uf(n),n===i){lt=null;break e}if(r!==null){r.return=s,lt=r;break e}lt=s}}}var d0={getCacheForType:function(e){var t=dt(We),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return dt(We).controller.signal}},u0=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ue=null,Ne=null,Se=0,Oe=0,Dt=null,Va=!1,en=!1,Xo=!1,Na=0,$e=0,Pa=0,yi=0,Fo=0,Bt=0,tn=0,al=null,Nt=null,$o=!1,br=0,Zf=0,yr=1/0,vr=null,Xa=null,at=0,Fa=null,an=null,wa=0,Qo=0,Zo=null,Kf=null,il=0,Ko=null;function Mt(){return(Ae&2)!==0&&Se!==0?Se&-Se:c.T!==null?ac():ud()}function Jf(){if(Bt===0)if((Se&536870912)===0||Ce){var e=El;El<<=1,(El&3932160)===0&&(El=262144),Bt=e}else Bt=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Bt}function wt(e,t,i){(e===Ue&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(nn(e,0),$a(e,Se,Bt,!1)),Sn(e,i),((Ae&2)===0||e!==Ue)&&(e===Ue&&((Ae&2)===0&&(yi|=i),$e===4&&$a(e,Se,Bt,!1)),ia(e))}function Wf(e,t,i){if((Ae&6)!==0)throw Error(d(327));var n=!i&&(t&127)===0&&(t&e.expiredLanes)===0||wn(e,t),r=n?h0(e,t):Wo(e,t,!0),s=n;do{if(r===0){en&&!n&&$a(e,t,0,!1);break}else{if(i=e.current.alternate,s&&!f0(i)){r=Wo(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;r=al;var C=y.current.memoizedState.isDehydrated;if(C&&(nn(y,h).flags|=256),h=Wo(y,h,!1),h!==2){if(Xo&&!C){y.errorRecoveryDisabledLanes|=s,yi|=s,r=4;break e}s=Nt,Nt=r,s!==null&&(Nt===null?Nt=s:Nt.push.apply(Nt,s))}r=h}if(s=!1,r!==2)continue}}if(r===1){nn(e,0),$a(e,t,0,!0);break}e:{switch(n=e,s=r,s){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:$a(n,t,Bt,!Va);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(r=br+300-pt(),10<r)){if($a(n,t,Bt,!Va),Al(n,0,!0)!==0)break e;wa=t,n.timeoutHandle=Tm(If.bind(null,n,i,Nt,vr,$o,t,Bt,yi,tn,Va,s,"Throttled",-0,0),r);break e}If(n,i,Nt,vr,$o,t,Bt,yi,tn,Va,s,null,-0,0)}}break}while(!0);ia(e)}function If(e,t,i,n,r,s,h,y,C,Y,$,W,G,X){if(e.timeoutHandle=-1,W=t.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},Xf(t,s,W);var de=(s&62914560)===s?br-pt():(s&4194048)===s?Zf-pt():0;if(de=K0(W,de),de!==null){wa=s,e.cancelPendingCommit=de(sm.bind(null,e,t,s,i,n,r,h,y,C,$,W,null,G,X)),$a(e,s,h,!Y);return}}sm(e,t,s,i,n,r,h,y,C)}function f0(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var r=i[n],s=r.getSnapshot;r=r.value;try{if(!Tt(s(),r))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $a(e,t,i,n){t&=~Fo,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var s=31-Et(r),h=1<<s;n[s]=-1,r&=~h}i!==0&&od(e,i,t)}function jr(){return(Ae&6)===0?(nl(0),!1):!0}function Jo(){if(Ne!==null){if(Oe===0)var e=Ne.return;else e=Ne,fa=di=null,mo(e),$i=null,qn=0,e=Ne;for(;e!==null;)Af(e.alternate,e),e=e.return;Ne=null}}function nn(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,O0(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),wa=0,Jo(),Ue=e,Ne=i=da(e.current,null),Se=t,Oe=0,Dt=null,Va=!1,en=wn(e,t),Xo=!1,tn=Bt=Fo=yi=Pa=$e=0,Nt=al=null,$o=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Et(n),s=1<<r;t|=e[r],n&=~s}return Na=t,Gl(),i}function em(e,t){ye=null,c.H=Qn,t===Fi||t===Kl?(t=pu(),Oe=3):t===eo?(t=pu(),Oe=4):Oe=t===To?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,Ne===null&&($e=1,dr(e,qt(t,e.current)))}function tm(){var e=Rt.current;return e===null?!0:(Se&4194048)===Se?Pt===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Pt:!1}function am(){var e=c.H;return c.H=Qn,e===null?Qn:e}function im(){var e=c.A;return c.A=d0,e}function Nr(){$e=4,Va||(Se&4194048)!==Se&&Rt.current!==null||(en=!0),(Pa&134217727)===0&&(yi&134217727)===0||Ue===null||$a(Ue,Se,Bt,!1)}function Wo(e,t,i){var n=Ae;Ae|=2;var r=am(),s=im();(Ue!==e||Se!==t)&&(vr=null,nn(e,t)),t=!1;var h=$e;e:do try{if(Oe!==0&&Ne!==null){var y=Ne,C=Dt;switch(Oe){case 8:Jo(),h=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var Y=Oe;if(Oe=0,Dt=null,ln(e,y,C,Y),i&&en){h=0;break e}break;default:Y=Oe,Oe=0,Dt=null,ln(e,y,C,Y)}}m0(),h=$e;break}catch($){em(e,$)}while(!0);return t&&e.shellSuspendCounter++,fa=di=null,Ae=n,c.H=r,c.A=s,Ne===null&&(Ue=null,Se=0,Gl()),h}function m0(){for(;Ne!==null;)nm(Ne)}function h0(e,t){var i=Ae;Ae|=2;var n=am(),r=im();Ue!==e||Se!==t?(vr=null,yr=pt()+500,nn(e,t)):en=wn(e,t);e:do try{if(Oe!==0&&Ne!==null){t=Ne;var s=Dt;t:switch(Oe){case 1:Oe=0,Dt=null,ln(e,t,s,1);break;case 2:case 9:if(mu(s)){Oe=0,Dt=null,lm(t);break}t=function(){Oe!==2&&Oe!==9||Ue!==e||(Oe=7),ia(e)},s.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:mu(s)?(Oe=0,Dt=null,lm(t)):(Oe=0,Dt=null,ln(e,t,s,7));break;case 5:var h=null;switch(Ne.tag){case 26:h=Ne.memoizedState;case 5:case 27:var y=Ne;if(h?Pm(h):y.stateNode.complete){Oe=0,Dt=null;var C=y.sibling;if(C!==null)Ne=C;else{var Y=y.return;Y!==null?(Ne=Y,wr(Y)):Ne=null}break t}}Oe=0,Dt=null,ln(e,t,s,5);break;case 6:Oe=0,Dt=null,ln(e,t,s,6);break;case 8:Jo(),$e=6;break e;default:throw Error(d(462))}}p0();break}catch($){em(e,$)}while(!0);return fa=di=null,c.H=n,c.A=r,Ae=i,Ne!==null?0:(Ue=null,Se=0,Gl(),$e)}function p0(){for(;Ne!==null&&!cs();)nm(Ne)}function nm(e){var t=Ef(e.alternate,e,Na);e.memoizedProps=e.pendingProps,t===null?wr(e):Ne=t}function lm(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=Nf(i,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Nf(i,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:mo(t);default:Af(i,t),t=Ne=au(t,Na),t=Ef(i,t,Na)}e.memoizedProps=e.pendingProps,t===null?wr(e):Ne=t}function ln(e,t,i,n){fa=di=null,mo(t),$i=null,qn=0;var r=t.return;try{if(i0(e,r,t,i,Se)){$e=1,dr(e,qt(i,e.current)),Ne=null;return}}catch(s){if(r!==null)throw Ne=r,s;$e=1,dr(e,qt(i,e.current)),Ne=null;return}t.flags&32768?(Ce||n===1?e=!0:en||(Se&536870912)!==0?e=!1:(Va=e=!0,(n===2||n===9||n===3||n===6)&&(n=Rt.current,n!==null&&n.tag===13&&(n.flags|=16384))),rm(t,e)):wr(t)}function wr(e){var t=e;do{if((t.flags&32768)!==0){rm(t,Va);return}e=t.return;var i=r0(t.alternate,t,Na);if(i!==null){Ne=i;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);$e===0&&($e=5)}function rm(e,t){do{var i=s0(e.alternate,e);if(i!==null){i.flags&=32767,Ne=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=i}while(e!==null);$e=6,Ne=null}function sm(e,t,i,n,r,s,h,y,C){e.cancelPendingCommit=null;do Sr();while(at!==0);if((Ae&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(s=t.lanes|t.childLanes,s|=Hs,Qp(e,i,s,h,y,C),e===Ue&&(Ne=Ue=null,Se=0),an=t,Fa=e,wa=i,Qo=s,Zo=r,Kf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,y0(Ct,function(){return fm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=c.T,c.T=null,r=m.p,m.p=2,h=Ae,Ae|=4;try{o0(e,t,i)}finally{Ae=h,m.p=r,c.T=n}}at=1,om(),cm(),dm()}}function om(){if(at===1){at=0;var e=Fa,t=an,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=c.T,c.T=null;var n=m.p;m.p=2;var r=Ae;Ae|=4;try{Gf(t,e);var s=dc,h=$d(e.containerInfo),y=s.focusedElem,C=s.selectionRange;if(h!==y&&y&&y.ownerDocument&&Fd(y.ownerDocument.documentElement,y)){if(C!==null&&Bs(y)){var Y=C.start,$=C.end;if($===void 0&&($=Y),"selectionStart"in y)y.selectionStart=Y,y.selectionEnd=Math.min($,y.value.length);else{var W=y.ownerDocument||document,G=W&&W.defaultView||window;if(G.getSelection){var X=G.getSelection(),de=y.textContent.length,pe=Math.min(C.start,de),Le=C.end===void 0?pe:Math.min(C.end,de);!X.extend&&pe>Le&&(h=Le,Le=pe,pe=h);var D=Xd(y,pe),A=Xd(y,Le);if(D&&A&&(X.rangeCount!==1||X.anchorNode!==D.node||X.anchorOffset!==D.offset||X.focusNode!==A.node||X.focusOffset!==A.offset)){var q=W.createRange();q.setStart(D.node,D.offset),X.removeAllRanges(),pe>Le?(X.addRange(q),X.extend(A.node,A.offset)):(q.setEnd(A.node,A.offset),X.addRange(q))}}}}for(W=[],X=y;X=X.parentNode;)X.nodeType===1&&W.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<W.length;y++){var K=W[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Lr=!!cc,dc=cc=null}finally{Ae=r,m.p=n,c.T=i}}e.current=t,at=2}}function cm(){if(at===2){at=0;var e=Fa,t=an,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=c.T,c.T=null;var n=m.p;m.p=2;var r=Ae;Ae|=4;try{_f(e,t.alternate,t)}finally{Ae=r,m.p=n,c.T=i}}at=3}}function dm(){if(at===4||at===3){at=0,ds();var e=Fa,t=an,i=wa,n=Kf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,an=Fa=null,um(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Xa=null),ps(i),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Nn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=c.T,r=m.p,m.p=2,c.T=null;try{for(var s=e.onRecoverableError,h=0;h<n.length;h++){var y=n[h];s(y.value,{componentStack:y.stack})}}finally{c.T=t,m.p=r}}(wa&3)!==0&&Sr(),ia(e),r=e.pendingLanes,(i&261930)!==0&&(r&42)!==0?e===Ko?il++:(il=0,Ko=e):il=0,nl(0)}}function um(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Un(t)))}function Sr(){return om(),cm(),dm(),fm()}function fm(){if(at!==5)return!1;var e=Fa,t=Qo;Qo=0;var i=ps(wa),n=c.T,r=m.p;try{m.p=32>i?32:i,c.T=null,i=Zo,Zo=null;var s=Fa,h=wa;if(at=0,an=Fa=null,wa=0,(Ae&6)!==0)throw Error(d(331));var y=Ae;if(Ae|=4,$f(s.current),Pf(s,s.current,h,i),Ae=y,nl(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Nn,s)}catch{}return!0}finally{m.p=r,c.T=n,um(e,t)}}function mm(e,t,i){t=qt(i,t),t=Eo(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Sn(e,2),ia(e))}function De(e,t,i){if(e.tag===3)mm(e,e,i);else for(;t!==null;){if(t.tag===3){mm(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Xa===null||!Xa.has(n))){e=qt(i,e),i=hf(2),n=Ha(t,i,2),n!==null&&(pf(i,n,t,e),Sn(n,2),ia(n));break}}t=t.return}}function Io(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new u0;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(i)||(Xo=!0,r.add(i),e=g0.bind(null,e,t,i),t.then(e,e))}function g0(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ue===e&&(Se&i)===i&&($e===4||$e===3&&(Se&62914560)===Se&&300>pt()-br?(Ae&2)===0&&nn(e,0):Fo|=i,tn===Se&&(tn=0)),ia(e)}function hm(e,t){t===0&&(t=sd()),e=si(e,t),e!==null&&(Sn(e,t),ia(e))}function x0(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),hm(e,i)}function b0(e,t){var i=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),hm(e,i)}function y0(e,t){return yn(e,t)}var kr=null,rn=null,ec=!1,Cr=!1,tc=!1,Qa=0;function ia(e){e!==rn&&e.next===null&&(rn===null?kr=rn=e:rn=rn.next=e),Cr=!0,ec||(ec=!0,j0())}function nl(e,t){if(!tc&&Cr){tc=!0;do for(var i=!1,n=kr;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var s=0;else{var h=n.suspendedLanes,y=n.pingedLanes;s=(1<<31-Et(42|e)+1)-1,s&=r&~(h&~y),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(i=!0,bm(n,s))}else s=Se,s=Al(n,n===Ue?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||wn(n,s)||(i=!0,bm(n,s));n=n.next}while(i);tc=!1}}function v0(){pm()}function pm(){Cr=ec=!1;var e=0;Qa!==0&&R0()&&(e=Qa);for(var t=pt(),i=null,n=kr;n!==null;){var r=n.next,s=gm(n,t);s===0?(n.next=null,i===null?kr=r:i.next=r,r===null&&(rn=i)):(i=n,(e!==0||(s&3)!==0)&&(Cr=!0)),n=r}at!==0&&at!==5||nl(e),Qa!==0&&(Qa=0)}function gm(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-Et(s),y=1<<h,C=r[h];C===-1?((y&i)===0||(y&n)!==0)&&(r[h]=$p(y,t)):C<=t&&(e.expiredLanes|=y),s&=~y}if(t=Ue,i=Se,i=Al(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,i===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&vn(n),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||wn(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(n!==null&&vn(n),ps(i)){case 2:case 8:i=st;break;case 32:i=Ct;break;case 268435456:i=Cl;break;default:i=Ct}return n=xm.bind(null,e),i=yn(i,n),e.callbackPriority=t,e.callbackNode=i,t}return n!==null&&n!==null&&vn(n),e.callbackPriority=2,e.callbackNode=null,2}function xm(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Sr()&&e.callbackNode!==i)return null;var n=Se;return n=Al(e,e===Ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Wf(e,n,t),gm(e,pt()),e.callbackNode!=null&&e.callbackNode===i?xm.bind(null,e):null)}function bm(e,t){if(Sr())return null;Wf(e,t,!0)}function j0(){D0(function(){(Ae&6)!==0?yn(ie,v0):pm()})}function ac(){if(Qa===0){var e=Pi;e===0&&(e=zl,zl<<=1,(zl&261888)===0&&(zl=256)),Qa=e}return Qa}function ym(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bl(""+e)}function vm(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function N0(e,t,i,n,r){if(t==="submit"&&i&&i.stateNode===r){var s=ym((r[xt]||null).action),h=n.submitter;h&&(t=(t=h[xt]||null)?ym(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var y=new Ul("action","action",null,n,r);e.push({event:y,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Qa!==0){var C=h?vm(r,h):new FormData(r);No(i,{pending:!0,data:C,method:r.method,action:s},null,C)}}else typeof s=="function"&&(y.preventDefault(),C=h?vm(r,h):new FormData(r),No(i,{pending:!0,data:C,method:r.method,action:s},s,C))},currentTarget:r}]})}}for(var ic=0;ic<Us.length;ic++){var nc=Us[ic],w0=nc.toLowerCase(),S0=nc[0].toUpperCase()+nc.slice(1);Kt(w0,"on"+S0)}Kt(Kd,"onAnimationEnd"),Kt(Jd,"onAnimationIteration"),Kt(Wd,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(qg,"onTransitionRun"),Kt(Yg,"onTransitionStart"),Kt(Gg,"onTransitionCancel"),Kt(Id,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function jm(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],r=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var h=n.length-1;0<=h;h--){var y=n[h],C=y.instance,Y=y.currentTarget;if(y=y.listener,C!==s&&r.isPropagationStopped())break e;s=y,r.currentTarget=Y;try{s(r)}catch($){Yl($)}r.currentTarget=null,s=C}else for(h=0;h<n.length;h++){if(y=n[h],C=y.instance,Y=y.currentTarget,y=y.listener,C!==s&&r.isPropagationStopped())break e;s=y,r.currentTarget=Y;try{s(r)}catch($){Yl($)}r.currentTarget=null,s=C}}}}function we(e,t){var i=t[gs];i===void 0&&(i=t[gs]=new Set);var n=e+"__bubble";i.has(n)||(Nm(t,e,2,!1),i.add(n))}function lc(e,t,i){var n=0;t&&(n|=4),Nm(i,e,n,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function rc(e){if(!e[zr]){e[zr]=!0,hd.forEach(function(i){i!=="selectionchange"&&(k0.has(i)||lc(i,!1,e),lc(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,lc("selectionchange",!1,t))}}function Nm(e,t,i,n){switch(Jm(t)){case 2:var r=I0;break;case 8:r=ex;break;default:r=jc}i=r.bind(null,t,i,e),r=void 0,!ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,i,{capture:!0,passive:r}):e.addEventListener(t,i,!0):r!==void 0?e.addEventListener(t,i,{passive:r}):e.addEventListener(t,i,!1)}function sc(e,t,i,n,r){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var h=n.tag;if(h===3||h===4){var y=n.stateNode.containerInfo;if(y===r)break;if(h===4)for(h=n.return;h!==null;){var C=h.tag;if((C===3||C===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;y!==null;){if(h=zi(y),h===null)return;if(C=h.tag,C===5||C===6||C===26||C===27){n=s=h;continue e}y=y.parentNode}}n=n.return}Cd(function(){var Y=s,$=ws(i),W=[];e:{var G=eu.get(e);if(G!==void 0){var X=Ul,de=e;switch(e){case"keypress":if(Ll(i)===0)break e;case"keydown":case"keyup":X=bg;break;case"focusin":de="focus",X=Ts;break;case"focusout":de="blur",X=Ts;break;case"beforeblur":case"afterblur":X=Ts;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=jg;break;case Kd:case Jd:case Wd:X=cg;break;case Id:X=wg;break;case"scroll":case"scrollend":X=ng;break;case"wheel":X=kg;break;case"copy":case"cut":case"paste":X=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Rd;break;case"toggle":case"beforetoggle":X=zg}var pe=(t&4)!==0,Le=!pe&&(e==="scroll"||e==="scrollend"),D=pe?G!==null?G+"Capture":null:G;pe=[];for(var A=Y,q;A!==null;){var K=A;if(q=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||q===null||D===null||(K=zn(A,D),K!=null&&pe.push(rl(A,K,q))),Le)break;A=A.return}0<pe.length&&(G=new X(G,de,null,i,$),W.push({event:G,listeners:pe}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",G&&i!==Ns&&(de=i.relatedTarget||i.fromElement)&&(zi(de)||de[Ci]))break e;if((X||G)&&(G=$.window===$?$:(G=$.ownerDocument)?G.defaultView||G.parentWindow:window,X?(de=i.relatedTarget||i.toElement,X=Y,de=de?zi(de):null,de!==null&&(Le=p(de),pe=de.tag,de!==Le||pe!==5&&pe!==27&&pe!==6)&&(de=null)):(X=null,de=Y),X!==de)){if(pe=Td,K="onMouseLeave",D="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Rd,K="onPointerLeave",D="onPointerEnter",A="pointer"),Le=X==null?G:Cn(X),q=de==null?G:Cn(de),G=new pe(K,A+"leave",X,i,$),G.target=Le,G.relatedTarget=q,K=null,zi($)===Y&&(pe=new pe(D,A+"enter",de,i,$),pe.target=q,pe.relatedTarget=Le,K=pe),Le=K,X&&de)t:{for(pe=C0,D=X,A=de,q=0,K=D;K;K=pe(K))q++;K=0;for(var he=A;he;he=pe(he))K++;for(;0<q-K;)D=pe(D),q--;for(;0<K-q;)A=pe(A),K--;for(;q--;){if(D===A||A!==null&&D===A.alternate){pe=D;break t}D=pe(D),A=pe(A)}pe=null}else pe=null;X!==null&&wm(W,G,X,pe,!1),de!==null&&Le!==null&&wm(W,Le,de,pe,!0)}}e:{if(G=Y?Cn(Y):window,X=G.nodeName&&G.nodeName.toLowerCase(),X==="select"||X==="input"&&G.type==="file")var Ee=Hd;else if(_d(G))if(qd)Ee=_g;else{Ee=Mg;var fe=Bg}else X=G.nodeName,!X||X.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Y&&js(Y.elementType)&&(Ee=Hd):Ee=Lg;if(Ee&&(Ee=Ee(e,Y))){Ud(W,Ee,i,$);break e}fe&&fe(e,G,Y),e==="focusout"&&Y&&G.type==="number"&&Y.memoizedProps.value!=null&&vs(G,"number",G.value)}switch(fe=Y?Cn(Y):window,e){case"focusin":(_d(fe)||fe.contentEditable==="true")&&(Li=fe,Ms=Y,Mn=null);break;case"focusout":Mn=Ms=Li=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Qd(W,i,$);break;case"selectionchange":if(Hg)break;case"keydown":case"keyup":Qd(W,i,$)}var je;if(Rs)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Mi?Md(e,i)&&(ke="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ke="onCompositionStart");ke&&(Od&&i.locale!=="ko"&&(Mi||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Mi&&(je=zd()):(Oa=$,Cs="value"in Oa?Oa.value:Oa.textContent,Mi=!0)),fe=Er(Y,ke),0<fe.length&&(ke=new Ad(ke,e,null,i,$),W.push({event:ke,listeners:fe}),je?ke.data=je:(je=Ld(i),je!==null&&(ke.data=je)))),(je=Tg?Ag(e,i):Rg(e,i))&&(ke=Er(Y,"onBeforeInput"),0<ke.length&&(fe=new Ad("onBeforeInput","beforeinput",null,i,$),W.push({event:fe,listeners:ke}),fe.data=je)),N0(W,e,Y,i,$)}jm(W,t)})}function rl(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Er(e,t){for(var i=t+"Capture",n=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=zn(e,i),r!=null&&n.unshift(rl(e,r,s)),r=zn(e,t),r!=null&&n.push(rl(e,r,s))),e.tag===3)return n;e=e.return}return[]}function C0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wm(e,t,i,n,r){for(var s=t._reactName,h=[];i!==null&&i!==n;){var y=i,C=y.alternate,Y=y.stateNode;if(y=y.tag,C!==null&&C===n)break;y!==5&&y!==26&&y!==27||Y===null||(C=Y,r?(Y=zn(i,s),Y!=null&&h.unshift(rl(i,Y,C))):r||(Y=zn(i,s),Y!=null&&h.push(rl(i,Y,C)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var z0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function Sm(e){return(typeof e=="string"?e:""+e).replace(z0,`
`).replace(E0,"")}function km(e,t){return t=Sm(t),Sm(e)===t}function Me(e,t,i,n,r,s){switch(i){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Oi(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Oi(e,""+n);break;case"className":Ol(e,"class",n);break;case"tabIndex":Ol(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ol(e,i,n);break;case"style":Sd(e,n,s);break;case"data":if(t!=="object"){Ol(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=Bl(""+n),e.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(i==="formAction"?(t!=="input"&&Me(e,t,"name",r.name,r,null),Me(e,t,"formEncType",r.formEncType,r,null),Me(e,t,"formMethod",r.formMethod,r,null),Me(e,t,"formTarget",r.formTarget,r,null)):(Me(e,t,"encType",r.encType,r,null),Me(e,t,"method",r.method,r,null),Me(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=Bl(""+n),e.setAttribute(i,n);break;case"onClick":n!=null&&(e.onclick=oa);break;case"onScroll":n!=null&&we("scroll",e);break;case"onScrollEnd":n!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(i=n.__html,i!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=i}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}i=Bl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""+n):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":n===!0?e.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,n):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(i,n):e.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(i):e.setAttribute(i,n);break;case"popover":we("beforetoggle",e),we("toggle",e),Rl(e,"popover",n);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Rl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ag.get(i)||i,Rl(e,i,n))}}function oc(e,t,i,n,r,s){switch(i){case"style":Sd(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(i=n.__html,i!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=i}}break;case"children":typeof n=="string"?Oi(e,n):(typeof n=="number"||typeof n=="bigint")&&Oi(e,""+n);break;case"onScroll":n!=null&&we("scroll",e);break;case"onScrollEnd":n!=null&&we("scrollend",e);break;case"onClick":n!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pd.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(r=i.endsWith("Capture"),t=i.slice(2,r?i.length-7:void 0),s=e[xt]||null,s=s!=null?s[i]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof n=="function")){typeof s!="function"&&s!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,n,r);break e}i in e?e[i]=n:n===!0?e.setAttribute(i,""):Rl(e,i,n)}}}function ft(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var n=!1,r=!1,s;for(s in i)if(i.hasOwnProperty(s)){var h=i[s];if(h!=null)switch(s){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Me(e,t,s,h,i,null)}}r&&Me(e,t,"srcSet",i.srcSet,i,null),n&&Me(e,t,"src",i.src,i,null);return;case"input":we("invalid",e);var y=s=h=r=null,C=null,Y=null;for(n in i)if(i.hasOwnProperty(n)){var $=i[n];if($!=null)switch(n){case"name":r=$;break;case"type":h=$;break;case"checked":C=$;break;case"defaultChecked":Y=$;break;case"value":s=$;break;case"defaultValue":y=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(d(137,t));break;default:Me(e,t,n,$,i,null)}}vd(e,s,y,C,Y,h,r,!1);return;case"select":we("invalid",e),n=h=s=null;for(r in i)if(i.hasOwnProperty(r)&&(y=i[r],y!=null))switch(r){case"value":s=y;break;case"defaultValue":h=y;break;case"multiple":n=y;default:Me(e,t,r,y,i,null)}t=s,i=h,e.multiple=!!n,t!=null?Ri(e,!!n,t,!1):i!=null&&Ri(e,!!n,i,!0);return;case"textarea":we("invalid",e),s=r=n=null;for(h in i)if(i.hasOwnProperty(h)&&(y=i[h],y!=null))switch(h){case"value":n=y;break;case"defaultValue":r=y;break;case"children":s=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(91));break;default:Me(e,t,h,y,i,null)}Nd(e,n,r,s);return;case"option":for(C in i)i.hasOwnProperty(C)&&(n=i[C],n!=null)&&(C==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Me(e,t,C,n,i,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(n=0;n<ll.length;n++)we(ll[n],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(n=i[Y],n!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Me(e,t,Y,n,i,null)}return;default:if(js(t)){for($ in i)i.hasOwnProperty($)&&(n=i[$],n!==void 0&&oc(e,t,$,n,i,void 0));return}}for(y in i)i.hasOwnProperty(y)&&(n=i[y],n!=null&&Me(e,t,y,n,i,null))}function T0(e,t,i,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,h=null,y=null,C=null,Y=null,$=null;for(X in i){var W=i[X];if(i.hasOwnProperty(X)&&W!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":C=W;default:n.hasOwnProperty(X)||Me(e,t,X,null,n,W)}}for(var G in n){var X=n[G];if(W=i[G],n.hasOwnProperty(G)&&(X!=null||W!=null))switch(G){case"type":s=X;break;case"name":r=X;break;case"checked":Y=X;break;case"defaultChecked":$=X;break;case"value":h=X;break;case"defaultValue":y=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(d(137,t));break;default:X!==W&&Me(e,t,G,X,n,W)}}ys(e,h,y,C,Y,$,s,r);return;case"select":X=h=y=G=null;for(s in i)if(C=i[s],i.hasOwnProperty(s)&&C!=null)switch(s){case"value":break;case"multiple":X=C;default:n.hasOwnProperty(s)||Me(e,t,s,null,n,C)}for(r in n)if(s=n[r],C=i[r],n.hasOwnProperty(r)&&(s!=null||C!=null))switch(r){case"value":G=s;break;case"defaultValue":y=s;break;case"multiple":h=s;default:s!==C&&Me(e,t,r,s,n,C)}t=y,i=h,n=X,G!=null?Ri(e,!!i,G,!1):!!n!=!!i&&(t!=null?Ri(e,!!i,t,!0):Ri(e,!!i,i?[]:"",!1));return;case"textarea":X=G=null;for(y in i)if(r=i[y],i.hasOwnProperty(y)&&r!=null&&!n.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Me(e,t,y,null,n,r)}for(h in n)if(r=n[h],s=i[h],n.hasOwnProperty(h)&&(r!=null||s!=null))switch(h){case"value":G=r;break;case"defaultValue":X=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==s&&Me(e,t,h,r,n,s)}jd(e,G,X);return;case"option":for(var de in i)G=i[de],i.hasOwnProperty(de)&&G!=null&&!n.hasOwnProperty(de)&&(de==="selected"?e.selected=!1:Me(e,t,de,null,n,G));for(C in n)G=n[C],X=i[C],n.hasOwnProperty(C)&&G!==X&&(G!=null||X!=null)&&(C==="selected"?e.selected=G&&typeof G!="function"&&typeof G!="symbol":Me(e,t,C,G,n,X));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in i)G=i[pe],i.hasOwnProperty(pe)&&G!=null&&!n.hasOwnProperty(pe)&&Me(e,t,pe,null,n,G);for(Y in n)if(G=n[Y],X=i[Y],n.hasOwnProperty(Y)&&G!==X&&(G!=null||X!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(d(137,t));break;default:Me(e,t,Y,G,n,X)}return;default:if(js(t)){for(var Le in i)G=i[Le],i.hasOwnProperty(Le)&&G!==void 0&&!n.hasOwnProperty(Le)&&oc(e,t,Le,void 0,n,G);for($ in n)G=n[$],X=i[$],!n.hasOwnProperty($)||G===X||G===void 0&&X===void 0||oc(e,t,$,G,n,X);return}}for(var D in i)G=i[D],i.hasOwnProperty(D)&&G!=null&&!n.hasOwnProperty(D)&&Me(e,t,D,null,n,G);for(W in n)G=n[W],X=i[W],!n.hasOwnProperty(W)||G===X||G==null&&X==null||Me(e,t,W,G,n,X)}function Cm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function A0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var r=i[n],s=r.transferSize,h=r.initiatorType,y=r.duration;if(s&&y&&Cm(h)){for(h=0,y=r.responseEnd,n+=1;n<i.length;n++){var C=i[n],Y=C.startTime;if(Y>y)break;var $=C.transferSize,W=C.initiatorType;$&&Cm(W)&&(C=C.responseEnd,h+=$*(C<y?1:(y-Y)/(C-Y)))}if(--n,t+=8*(s+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cc=null,dc=null;function Tr(e){return e.nodeType===9?e:e.ownerDocument}function zm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function R0(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var Tm=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(B0)}:Tm;function B0(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Rm(e,t){var i=t,n=0;do{var r=i.nextSibling;if(e.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"||i==="/&"){if(n===0){e.removeChild(r),dn(t);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")sl(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,sl(i);for(var s=i.firstChild;s;){var h=s.nextSibling,y=s.nodeName;s[kn]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&s.rel.toLowerCase()==="stylesheet"||i.removeChild(s),s=h}}else i==="body"&&sl(e.ownerDocument.body);i=r}while(i);dn(t)}function Om(e,t){var i=e;e=0;do{var n=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=n}while(i)}function mc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":mc(i),xs(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function M0(e,t,i,n){for(;e.nodeType===1;){var r=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function L0(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Xt(e.nextSibling),e===null))return null;return e}function Dm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _0(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var n=function(){t(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gc=null;function Bm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Xt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Lm(e,t,i){switch(t=Tr(i),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function sl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xs(e)}var Ft=new Map,_m=new Set;function Ar(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=m.d;m.d={f:U0,r:H0,D:q0,C:Y0,L:G0,m:V0,X:X0,S:P0,M:F0};function U0(){var e=Sa.f(),t=jr();return e||t}function H0(e){var t=Ei(e);t!==null&&t.tag===5&&t.type==="form"?Iu(t):Sa.r(e)}var sn=typeof document>"u"?null:document;function Um(e,t,i){var n=sn;if(n&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof i=="string"&&(r+='[crossorigin="'+i+'"]'),_m.has(r)||(_m.add(r),e={rel:e,crossOrigin:i,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),ft(t,"link",e),nt(t),n.head.appendChild(t)))}}function q0(e){Sa.D(e),Um("dns-prefetch",e,null)}function Y0(e,t){Sa.C(e,t),Um("preconnect",e,t)}function G0(e,t,i){Sa.L(e,t,i);var n=sn;if(n&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&i&&i.imageSrcSet?(r+='[imagesrcset="'+Ut(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(r+='[imagesizes="'+Ut(i.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var s=r;switch(t){case"style":s=on(e);break;case"script":s=cn(e)}Ft.has(s)||(e=N({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Ft.set(s,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(ol(s))||t==="script"&&n.querySelector(cl(s))||(t=n.createElement("link"),ft(t,"link",e),nt(t),n.head.appendChild(t)))}}function V0(e,t){Sa.m(e,t);var i=sn;if(i&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(n)+'"][href="'+Ut(e)+'"]',s=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=cn(e)}if(!Ft.has(s)&&(e=N({rel:"modulepreload",href:e},t),Ft.set(s,e),i.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(cl(s)))return}n=i.createElement("link"),ft(n,"link",e),nt(n),i.head.appendChild(n)}}}function P0(e,t,i){Sa.S(e,t,i);var n=sn;if(n&&e){var r=Ti(n).hoistableStyles,s=on(e);t=t||"default";var h=r.get(s);if(!h){var y={loading:0,preload:null};if(h=n.querySelector(ol(s)))y.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Ft.get(s))&&xc(e,i);var C=h=n.createElement("link");nt(C),ft(C,"link",e),C._p=new Promise(function(Y,$){C.onload=Y,C.onerror=$}),C.addEventListener("load",function(){y.loading|=1}),C.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Rr(h,t,n)}h={type:"stylesheet",instance:h,count:1,state:y},r.set(s,h)}}}function X0(e,t){Sa.X(e,t);var i=sn;if(i&&e){var n=Ti(i).hoistableScripts,r=cn(e),s=n.get(r);s||(s=i.querySelector(cl(r)),s||(e=N({src:e,async:!0},t),(t=Ft.get(r))&&bc(e,t),s=i.createElement("script"),nt(s),ft(s,"link",e),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(r,s))}}function F0(e,t){Sa.M(e,t);var i=sn;if(i&&e){var n=Ti(i).hoistableScripts,r=cn(e),s=n.get(r);s||(s=i.querySelector(cl(r)),s||(e=N({src:e,async:!0,type:"module"},t),(t=Ft.get(r))&&bc(e,t),s=i.createElement("script"),nt(s),ft(s,"link",e),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(r,s))}}function Hm(e,t,i,n){var r=(r=te.current)?Ar(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=on(i.href),i=Ti(r).hoistableStyles,n=i.get(t),n||(n={type:"style",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=on(i.href);var s=Ti(r).hoistableStyles,h=s.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=r.querySelector(ol(e)))&&!s._p&&(h.instance=s,h.state.loading=5),Ft.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ft.set(e,i),s||$0(r,e,i,h.state))),t&&n===null)throw Error(d(528,""));return h}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cn(i),i=Ti(r).hoistableScripts,n=i.get(t),n||(n={type:"script",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function on(e){return'href="'+Ut(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function qm(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function $0(e,t,i,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ft(t,"link",i),nt(t),e.head.appendChild(t))}function cn(e){return'[src="'+Ut(e)+'"]'}function cl(e){return"script[async]"+e}function Ym(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ut(i.href)+'"]');if(n)return t.instance=n,nt(n),n;var r=N({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),nt(n),ft(n,"style",r),Rr(n,i.precedence,e),t.instance=n;case"stylesheet":r=on(i.href);var s=e.querySelector(ol(r));if(s)return t.state.loading|=4,t.instance=s,nt(s),s;n=qm(i),(r=Ft.get(r))&&xc(n,r),s=(e.ownerDocument||e).createElement("link"),nt(s);var h=s;return h._p=new Promise(function(y,C){h.onload=y,h.onerror=C}),ft(s,"link",n),t.state.loading|=4,Rr(s,i.precedence,e),t.instance=s;case"script":return s=cn(i.src),(r=e.querySelector(cl(s)))?(t.instance=r,nt(r),r):(n=i,(r=Ft.get(s))&&(n=N({},i),bc(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),nt(r),ft(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rr(n,i.precedence,e));return t.instance}function Rr(e,t,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,s=r,h=0;h<n.length;h++){var y=n[h];if(y.dataset.precedence===t)s=y;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function Gm(e,t,i){if(Or===null){var n=new Map,r=Or=new Map;r.set(i,n)}else r=Or,n=r.get(i),n||(n=new Map,r.set(i,n));if(n.has(e))return n;for(n.set(e,null),i=i.getElementsByTagName(e),r=0;r<i.length;r++){var s=i[r];if(!(s[kn]||s[ot]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var y=n.get(h);y?y.push(s):n.set(h,[s])}}return n}function Vm(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Q0(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Z0(e,t,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var r=on(n.href),s=t.querySelector(ol(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Dr.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=s,nt(s);return}s=t.ownerDocument||t,n=qm(n),(r=Ft.get(r))&&xc(n,r),s=s.createElement("link"),nt(s);var h=s;h._p=new Promise(function(y,C){h.onload=y,h.onerror=C}),ft(s,"link",n),i.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Dr.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var yc=0;function K0(e,t){return e.stylesheets&&e.count===0&&Mr(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var n=setTimeout(function(){if(e.stylesheets&&Mr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&yc===0&&(yc=62500*A0());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>yc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function Dr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Br=null;function Mr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Br=new Map,t.forEach(J0,e),Br=null,Dr.call(e))}function J0(e,t){if(!(t.state.loading&4)){var i=Br.get(e);if(i)var n=i.get(null);else{i=new Map,Br.set(e,i);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var h=r[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(i.set(h.dataset.precedence,h),n=h)}n&&i.set(null,n)}r=t.instance,h=r.getAttribute("data-precedence"),s=i.get(h)||n,s===n&&i.set(null,r),i.set(h,r),this.count++,n=Dr.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var dl={$$typeof:P,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function W0(e,t,i,n,r,s,h,y,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.hiddenUpdates=ms(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Xm(e,t,i,n,r,s,h,y,C,Y,$,W){return e=new W0(e,t,i,h,C,Y,$,W,y),t=1,s===!0&&(t|=24),s=At(3,null,null,t),e.current=s,s.stateNode=e,t=Js(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:i,cache:t},to(s),e}function Fm(e){return e?(e=Hi,e):Hi}function $m(e,t,i,n,r,s){r=Fm(r),n.context===null?n.context=r:n.pendingContext=r,n=Ua(t),n.payload={element:i},s=s===void 0?null:s,s!==null&&(n.callback=s),i=Ha(e,n,t),i!==null&&(wt(i,e,t),Gn(i,e,t))}function Qm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function vc(e,t){Qm(e,t),(e=e.alternate)&&Qm(e,t)}function Zm(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&wt(t,e,67108864),vc(e,67108864)}}function Km(e){if(e.tag===13||e.tag===31){var t=Mt();t=hs(t);var i=si(e,t);i!==null&&wt(i,e,t),vc(e,t)}}var Lr=!0;function I0(e,t,i,n){var r=c.T;c.T=null;var s=m.p;try{m.p=2,jc(e,t,i,n)}finally{m.p=s,c.T=r}}function ex(e,t,i,n){var r=c.T;c.T=null;var s=m.p;try{m.p=8,jc(e,t,i,n)}finally{m.p=s,c.T=r}}function jc(e,t,i,n){if(Lr){var r=Nc(n);if(r===null)sc(e,t,n,_r,i),Wm(e,n);else if(ax(r,e,t,i,n))n.stopPropagation();else if(Wm(e,n),t&4&&-1<tx.indexOf(e)){for(;r!==null;){var s=Ei(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=ai(s.pendingLanes);if(h!==0){var y=s;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var C=1<<31-Et(h);y.entanglements[1]|=C,h&=~C}ia(s),(Ae&6)===0&&(yr=pt()+500,nl(0))}}break;case 31:case 13:y=si(s,2),y!==null&&wt(y,s,2),jr(),vc(s,2)}if(s=Nc(n),s===null&&sc(e,t,n,_r,i),s===r)break;r=s}r!==null&&n.stopPropagation()}else sc(e,t,n,null,i)}}function Nc(e){return e=ws(e),wc(e)}var _r=null;function wc(e){if(_r=null,e=zi(e),e!==null){var t=p(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=g(t),e!==null)return e;e=null}else if(i===31){if(e=b(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _r=e,null}function Jm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(us()){case ie:return 2;case st:return 8;case Ct:case fs:return 32;case Cl:return 268435456;default:return 32}default:return 32}}var Sc=!1,Ka=null,Ja=null,Wa=null,ul=new Map,fl=new Map,Ia=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wm(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(t.pointerId)}}function ml(e,t,i,n,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ei(t),t!==null&&Zm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ax(e,t,i,n,r){switch(t){case"focusin":return Ka=ml(Ka,e,t,i,n,r),!0;case"dragenter":return Ja=ml(Ja,e,t,i,n,r),!0;case"mouseover":return Wa=ml(Wa,e,t,i,n,r),!0;case"pointerover":var s=r.pointerId;return ul.set(s,ml(ul.get(s)||null,e,t,i,n,r)),!0;case"gotpointercapture":return s=r.pointerId,fl.set(s,ml(fl.get(s)||null,e,t,i,n,r)),!0}return!1}function Im(e){var t=zi(e.target);if(t!==null){var i=p(t);if(i!==null){if(t=i.tag,t===13){if(t=g(i),t!==null){e.blockedOn=t,fd(e.priority,function(){Km(i)});return}}else if(t===31){if(t=b(i),t!==null){e.blockedOn=t,fd(e.priority,function(){Km(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Nc(e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);Ns=n,i.target.dispatchEvent(n),Ns=null}else return t=Ei(i),t!==null&&Zm(t),e.blockedOn=i,!1;t.shift()}return!0}function eh(e,t,i){Ur(e)&&i.delete(t)}function ix(){Sc=!1,Ka!==null&&Ur(Ka)&&(Ka=null),Ja!==null&&Ur(Ja)&&(Ja=null),Wa!==null&&Ur(Wa)&&(Wa=null),ul.forEach(eh),fl.forEach(eh)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sc||(Sc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ix)))}var qr=null;function th(e){qr!==e&&(qr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){qr===e&&(qr=null);for(var t=0;t<e.length;t+=3){var i=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(wc(n||i)===null)continue;break}var s=Ei(i);s!==null&&(e.splice(t,3),t-=3,No(s,{pending:!0,data:r,method:i.method,action:n},n,r))}}))}function dn(e){function t(C){return Hr(C,e)}Ka!==null&&Hr(Ka,e),Ja!==null&&Hr(Ja,e),Wa!==null&&Hr(Wa,e),ul.forEach(t),fl.forEach(t);for(var i=0;i<Ia.length;i++){var n=Ia[i];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ia.length&&(i=Ia[0],i.blockedOn===null);)Im(i),i.blockedOn===null&&Ia.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var r=i[n],s=i[n+1],h=r[xt]||null;if(typeof s=="function")h||th(i);else if(h){var y=null;if(s&&s.hasAttribute("formAction")){if(r=s,h=s[xt]||null)y=h.formAction;else if(wc(r)!==null)continue}else y=h.action;typeof y=="function"?i[n+1]=y:(i.splice(n,3),n-=3),th(i)}}}function ah(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function kc(e){this._internalRoot=e}Yr.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var i=t.current,n=Mt();$m(i,n,e,t,null,null)},Yr.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$m(e.current,2,null,e,null,null),jr(),t[Ci]=null}};function Yr(e){this._internalRoot=e}Yr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Ia.length&&t!==0&&t<Ia[i].priority;i++);Ia.splice(i,0,e),i===0&&Im(e)}};var ih=o.version;if(ih!=="19.2.3")throw Error(d(527,ih,"19.2.3"));m.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var nx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:c,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{Nn=Gr.inject(nx),zt=Gr}catch{}}return pl.createRoot=function(e,t){if(!f(e))throw Error(d(299));var i=!1,n="",r=df,s=uf,h=ff;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Xm(e,1,!1,null,null,i,n,null,r,s,h,ah),e[Ci]=t.current,rc(e),new kc(t)},pl.hydrateRoot=function(e,t,i){if(!f(e))throw Error(d(299));var n=!1,r="",s=df,h=uf,y=ff,C=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onUncaughtError!==void 0&&(s=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError),i.formState!==void 0&&(C=i.formState)),t=Xm(e,1,!0,t,i??null,n,r,C,s,h,y,ah),t.context=Fm(null),i=t.current,n=Mt(),n=hs(n),r=Ua(n),r.callback=null,Ha(i,r,n),i=n,t.current.lanes=i,Sn(t,i),ia(t),e[Ci]=t.current,rc(e),new Yr(t)},pl.version="19.2.3",pl}var mh;function hx(){if(mh)return Ec.exports;mh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Ec.exports=mx(),Ec.exports}var px=hx();const gx=Fh(px);var hh="popstate";function xx(l={}){function o(d,f){let{pathname:p,search:g,hash:b}=d.location;return Vc("",{pathname:p,search:g,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(d,f){return typeof f=="string"?f:bl(f)}return yx(o,u,null,l)}function Xe(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function $t(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function bx(){return Math.random().toString(36).substring(2,10)}function ph(l,o){return{usr:l.state,key:l.key,idx:o}}function Vc(l,o,u=null,d){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?fn(o):o,state:u,key:o&&o.key||d||bx()}}function bl({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function fn(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let d=l.indexOf("?");d>=0&&(o.search=l.substring(d),l=l.substring(0,d)),l&&(o.pathname=l)}return o}function yx(l,o,u,d={}){let{window:f=document.defaultView,v5Compat:p=!1}=d,g=f.history,b="POP",j=null,v=w();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function w(){return(g.state||{idx:null}).idx}function N(){b="POP";let B=w(),J=B==null?null:B-v;v=B,j&&j({action:b,location:L.location,delta:J})}function T(B,J){b="PUSH";let _=Vc(L.location,B,J);v=w()+1;let P=ph(_,v),le=L.createHref(_);try{g.pushState(P,"",le)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;f.location.assign(le)}p&&j&&j({action:b,location:L.location,delta:1})}function M(B,J){b="REPLACE";let _=Vc(L.location,B,J);v=w();let P=ph(_,v),le=L.createHref(_);g.replaceState(P,"",le),p&&j&&j({action:b,location:L.location,delta:0})}function O(B){return vx(B)}let L={get action(){return b},get location(){return l(f,g)},listen(B){if(j)throw new Error("A history only accepts one active listener");return f.addEventListener(hh,N),j=B,()=>{f.removeEventListener(hh,N),j=null}},createHref(B){return o(f,B)},createURL:O,encodeLocation(B){let J=O(B);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:T,replace:M,go(B){return g.go(B)}};return L}function vx(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(u,"No window.location.(origin|href) available to create URL");let d=typeof l=="string"?l:bl(l);return d=d.replace(/ $/,"%20"),!o&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function $h(l,o,u="/"){return jx(l,o,u,!1)}function jx(l,o,u,d){let f=typeof o=="string"?fn(o):o,p=Ca(f.pathname||"/",u);if(p==null)return null;let g=Qh(l);Nx(g);let b=null;for(let j=0;b==null&&j<g.length;++j){let v=Dx(p);b=Rx(g[j],v,d)}return b}function Qh(l,o=[],u=[],d="",f=!1){let p=(g,b,j=f,v)=>{let w={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(d)&&j)return;Xe(w.relativePath.startsWith(d),`Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(d.length)}let N=ka([d,w.relativePath]),T=u.concat(w);g.children&&g.children.length>0&&(Xe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Qh(g.children,o,T,N,j)),!(g.path==null&&!g.index)&&o.push({path:N,score:Tx(N,g.index),routesMeta:T})};return l.forEach((g,b)=>{if(g.path===""||!g.path?.includes("?"))p(g,b);else for(let j of Zh(g.path))p(g,b,!0,j)}),o}function Zh(l){let o=l.split("/");if(o.length===0)return[];let[u,...d]=o,f=u.endsWith("?"),p=u.replace(/\?$/,"");if(d.length===0)return f?[p,""]:[p];let g=Zh(d.join("/")),b=[];return b.push(...g.map(j=>j===""?p:[p,j].join("/"))),f&&b.push(...g),b.map(j=>l.startsWith("/")&&j===""?"/":j)}function Nx(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:Ax(o.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var wx=/^:[\w-]+$/,Sx=3,kx=2,Cx=1,zx=10,Ex=-2,gh=l=>l==="*";function Tx(l,o){let u=l.split("/"),d=u.length;return u.some(gh)&&(d+=Ex),o&&(d+=kx),u.filter(f=>!gh(f)).reduce((f,p)=>f+(wx.test(p)?Sx:p===""?Cx:zx),d)}function Ax(l,o){return l.length===o.length&&l.slice(0,-1).every((d,f)=>d===o[f])?l[l.length-1]-o[o.length-1]:0}function Rx(l,o,u=!1){let{routesMeta:d}=l,f={},p="/",g=[];for(let b=0;b<d.length;++b){let j=d[b],v=b===d.length-1,w=p==="/"?o:o.slice(p.length)||"/",N=Wr({path:j.relativePath,caseSensitive:j.caseSensitive,end:v},w),T=j.route;if(!N&&v&&u&&!d[d.length-1].route.index&&(N=Wr({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},w)),!N)return null;Object.assign(f,N.params),g.push({params:f,pathname:ka([p,N.pathname]),pathnameBase:_x(ka([p,N.pathnameBase])),route:T}),N.pathnameBase!=="/"&&(p=ka([p,N.pathnameBase]))}return g}function Wr(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,d]=Ox(l.path,l.caseSensitive,l.end),f=o.match(u);if(!f)return null;let p=f[0],g=p.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:d.reduce((v,{paramName:w,isOptional:N},T)=>{if(w==="*"){let O=b[T]||"";g=p.slice(0,p.length-O.length).replace(/(.)\/+$/,"$1")}const M=b[T];return N&&!M?v[w]=void 0:v[w]=(M||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:g,pattern:l}}function Ox(l,o=!1,u=!0){$t(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let d=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,j)=>(d.push({paramName:b,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(d.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),d]}function Dx(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return $t(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function Ca(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,d=l.charAt(u);return d&&d!=="/"?null:l.slice(u)||"/"}var Kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bx=l=>Kh.test(l);function Mx(l,o="/"){let{pathname:u,search:d="",hash:f=""}=typeof l=="string"?fn(l):l,p;if(u)if(Bx(u))p=u;else{if(u.includes("//")){let g=u;u=u.replace(/\/\/+/g,"/"),$t(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${u}`)}u.startsWith("/")?p=xh(u.substring(1),"/"):p=xh(u,o)}else p=o;return{pathname:p,search:Ux(d),hash:Hx(f)}}function xh(l,o){let u=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Oc(l,o,u,d){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lx(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Jh(l){let o=Lx(l);return o.map((u,d)=>d===o.length-1?u.pathname:u.pathnameBase)}function Wh(l,o,u,d=!1){let f;typeof l=="string"?f=fn(l):(f={...l},Xe(!f.pathname||!f.pathname.includes("?"),Oc("?","pathname","search",f)),Xe(!f.pathname||!f.pathname.includes("#"),Oc("#","pathname","hash",f)),Xe(!f.search||!f.search.includes("#"),Oc("#","search","hash",f)));let p=l===""||f.pathname==="",g=p?"/":f.pathname,b;if(g==null)b=u;else{let N=o.length-1;if(!d&&g.startsWith("..")){let T=g.split("/");for(;T[0]==="..";)T.shift(),N-=1;f.pathname=T.join("/")}b=N>=0?o[N]:"/"}let j=Mx(f,b),v=g&&g!=="/"&&g.endsWith("/"),w=(p||g===".")&&u.endsWith("/");return!j.pathname.endsWith("/")&&(v||w)&&(j.pathname+="/"),j}var ka=l=>l.join("/").replace(/\/\/+/g,"/"),_x=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ux=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Hx=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,qx=class{constructor(l,o,u,d=!1){this.status=l,this.statusText=o||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Yx(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Gx(l){return l.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ep(l,o){let u=l;if(typeof u!="string"||!Kh.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,f=!1;if(Ih)try{let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),b=Ca(g.pathname,o);g.origin===p.origin&&b!=null?u=b+g.search+g.hash:f=!0}catch{$t(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var tp=["POST","PUT","PATCH","DELETE"];new Set(tp);var Vx=["GET",...tp];new Set(Vx);var mn=x.createContext(null);mn.displayName="DataRouter";var as=x.createContext(null);as.displayName="DataRouterState";var Px=x.createContext(!1),ap=x.createContext({isTransitioning:!1});ap.displayName="ViewTransition";var Xx=x.createContext(new Map);Xx.displayName="Fetchers";var Fx=x.createContext(null);Fx.displayName="Await";var Qt=x.createContext(null);Qt.displayName="Navigation";var yl=x.createContext(null);yl.displayName="Location";var ra=x.createContext({outlet:null,matches:[],isDataRoute:!1});ra.displayName="Route";var Jc=x.createContext(null);Jc.displayName="RouteError";var ip="REACT_ROUTER_ERROR",$x="REDIRECT",Qx="ROUTE_ERROR_RESPONSE";function Zx(l){if(l.startsWith(`${ip}:${$x}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Kx(l){if(l.startsWith(`${ip}:${Qx}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new qx(o.status,o.statusText,o.data)}catch{}}function Jx(l,{relative:o}={}){Xe(vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=x.useContext(Qt),{hash:f,pathname:p,search:g}=jl(l,{relative:o}),b=p;return u!=="/"&&(b=p==="/"?u:ka([u,p])),d.createHref({pathname:b,search:g,hash:f})}function vl(){return x.useContext(yl)!=null}function za(){return Xe(vl(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(yl).location}var np="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lp(l){x.useContext(Qt).static||x.useLayoutEffect(l)}function Wc(){let{isDataRoute:l}=x.useContext(ra);return l?f1():Wx()}function Wx(){Xe(vl(),"useNavigate() may be used only in the context of a <Router> component.");let l=x.useContext(mn),{basename:o,navigator:u}=x.useContext(Qt),{matches:d}=x.useContext(ra),{pathname:f}=za(),p=JSON.stringify(Jh(d)),g=x.useRef(!1);return lp(()=>{g.current=!0}),x.useCallback((j,v={})=>{if($t(g.current,np),!g.current)return;if(typeof j=="number"){u.go(j);return}let w=Wh(j,JSON.parse(p),f,v.relative==="path");l==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:ka([o,w.pathname])),(v.replace?u.replace:u.push)(w,v.state,v)},[o,u,p,f,l])}var Ix=x.createContext(null);function e1(l){let o=x.useContext(ra).outlet;return x.useMemo(()=>o&&x.createElement(Ix.Provider,{value:l},o),[o,l])}function jl(l,{relative:o}={}){let{matches:u}=x.useContext(ra),{pathname:d}=za(),f=JSON.stringify(Jh(u));return x.useMemo(()=>Wh(l,JSON.parse(f),d,o==="path"),[l,f,d,o])}function t1(l,o){return rp(l,o)}function rp(l,o,u,d,f){Xe(vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=x.useContext(Qt),{matches:g}=x.useContext(ra),b=g[g.length-1],j=b?b.params:{},v=b?b.pathname:"/",w=b?b.pathnameBase:"/",N=b&&b.route;{let _=N&&N.path||"";op(v,!N||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let T=za(),M;if(o){let _=typeof o=="string"?fn(o):o;Xe(w==="/"||_.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${_.pathname}" was given in the \`location\` prop.`),M=_}else M=T;let O=M.pathname||"/",L=O;if(w!=="/"){let _=w.replace(/^\//,"").split("/");L="/"+O.replace(/^\//,"").split("/").slice(_.length).join("/")}let B=$h(l,{pathname:L});$t(N||B!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),$t(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=r1(B&&B.map(_=>Object.assign({},_,{params:Object.assign({},j,_.params),pathname:ka([w,p.encodeLocation?p.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?w:ka([w,p.encodeLocation?p.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),g,u,d,f);return o&&J?x.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},J):J}function a1(){let l=u1(),o=Yx(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},p={padding:"2px 4px",backgroundColor:d},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:p},"ErrorBoundary")," or"," ",x.createElement("code",{style:p},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},o),u?x.createElement("pre",{style:f},u):null,g)}var i1=x.createElement(a1,null),sp=class extends x.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=Kx(l.digest);u&&(l=u)}let o=l!==void 0?x.createElement(ra.Provider,{value:this.props.routeContext},x.createElement(Jc.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?x.createElement(n1,{error:l},o):o}};sp.contextType=Px;var Dc=new WeakMap;function n1({children:l,error:o}){let{basename:u}=x.useContext(Qt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let d=Zx(o.digest);if(d){let f=Dc.get(o);if(f)throw f;let p=ep(d.location,u);if(Ih&&!Dc.get(o))if(p.isExternal||d.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:d.replace}));throw Dc.set(o,g),g}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return l}function l1({routeContext:l,match:o,children:u}){let d=x.useContext(mn);return d&&d.static&&d.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=o.route.id),x.createElement(ra.Provider,{value:l},u)}function r1(l,o=[],u=null,d=null,f=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let p=l,g=u?.errors;if(g!=null){let w=p.findIndex(N=>N.route.id&&g?.[N.route.id]!==void 0);Xe(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),p=p.slice(0,Math.min(p.length,w+1))}let b=!1,j=-1;if(u)for(let w=0;w<p.length;w++){let N=p[w];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(j=w),N.route.id){let{loaderData:T,errors:M}=u,O=N.route.loader&&!T.hasOwnProperty(N.route.id)&&(!M||M[N.route.id]===void 0);if(N.route.lazy||O){b=!0,j>=0?p=p.slice(0,j+1):p=[p[0]];break}}}let v=u&&d?(w,N)=>{d(w,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:Gx(u.matches),errorInfo:N})}:void 0;return p.reduceRight((w,N,T)=>{let M,O=!1,L=null,B=null;u&&(M=g&&N.route.id?g[N.route.id]:void 0,L=N.route.errorElement||i1,b&&(j<0&&T===0?(op("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,B=null):j===T&&(O=!0,B=N.route.hydrateFallbackElement||null)));let J=o.concat(p.slice(0,T+1)),_=()=>{let P;return M?P=L:O?P=B:N.route.Component?P=x.createElement(N.route.Component,null):N.route.element?P=N.route.element:P=w,x.createElement(l1,{match:N,routeContext:{outlet:w,matches:J,isDataRoute:u!=null},children:P})};return u&&(N.route.ErrorBoundary||N.route.errorElement||T===0)?x.createElement(sp,{location:u.location,revalidation:u.revalidation,component:L,error:M,children:_(),routeContext:{outlet:null,matches:J,isDataRoute:!0},onError:v}):_()},null)}function Ic(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s1(l){let o=x.useContext(mn);return Xe(o,Ic(l)),o}function o1(l){let o=x.useContext(as);return Xe(o,Ic(l)),o}function c1(l){let o=x.useContext(ra);return Xe(o,Ic(l)),o}function ed(l){let o=c1(l),u=o.matches[o.matches.length-1];return Xe(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function d1(){return ed("useRouteId")}function u1(){let l=x.useContext(Jc),o=o1("useRouteError"),u=ed("useRouteError");return l!==void 0?l:o.errors?.[u]}function f1(){let{router:l}=s1("useNavigate"),o=ed("useNavigate"),u=x.useRef(!1);return lp(()=>{u.current=!0}),x.useCallback(async(f,p={})=>{$t(u.current,np),u.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:o,...p}))},[l,o])}var bh={};function op(l,o,u){!o&&!bh[l]&&(bh[l]=!0,$t(!1,u))}x.memo(m1);function m1({routes:l,future:o,state:u,onError:d}){return rp(l,void 0,u,d,o)}function h1(l){return e1(l.context)}function _e(l){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function p1({basename:l="/",children:o=null,location:u,navigationType:d="POP",navigator:f,static:p=!1,unstable_useTransitions:g}){Xe(!vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),j=x.useMemo(()=>({basename:b,navigator:f,static:p,unstable_useTransitions:g,future:{}}),[b,f,p,g]);typeof u=="string"&&(u=fn(u));let{pathname:v="/",search:w="",hash:N="",state:T=null,key:M="default"}=u,O=x.useMemo(()=>{let L=Ca(v,b);return L==null?null:{location:{pathname:L,search:w,hash:N,state:T,key:M},navigationType:d}},[b,v,w,N,T,M,d]);return $t(O!=null,`<Router basename="${b}"> is not able to match the URL "${v}${w}${N}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:x.createElement(Qt.Provider,{value:j},x.createElement(yl.Provider,{children:o,value:O}))}function g1({children:l,location:o}){return t1(Pc(l),o)}function Pc(l,o=[]){let u=[];return x.Children.forEach(l,(d,f)=>{if(!x.isValidElement(d))return;let p=[...o,f];if(d.type===x.Fragment){u.push.apply(u,Pc(d.props.children,p));return}Xe(d.type===_e,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!d.props.index||!d.props.children,"An index route cannot have child routes.");let g={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=Pc(d.props.children,p)),u.push(g)}),u}var $r="get",Qr="application/x-www-form-urlencoded";function is(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function x1(l){return is(l)&&l.tagName.toLowerCase()==="button"}function b1(l){return is(l)&&l.tagName.toLowerCase()==="form"}function y1(l){return is(l)&&l.tagName.toLowerCase()==="input"}function v1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function j1(l,o){return l.button===0&&(!o||o==="_self")&&!v1(l)}function Xc(l=""){return new URLSearchParams(typeof l=="string"||Array.isArray(l)||l instanceof URLSearchParams?l:Object.keys(l).reduce((o,u)=>{let d=l[u];return o.concat(Array.isArray(d)?d.map(f=>[u,f]):[[u,d]])},[]))}function N1(l,o){let u=Xc(l);return o&&o.forEach((d,f)=>{u.has(f)||o.getAll(f).forEach(p=>{u.append(f,p)})}),u}var Vr=null;function w1(){if(Vr===null)try{new FormData(document.createElement("form"),0),Vr=!1}catch{Vr=!0}return Vr}var S1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bc(l){return l!=null&&!S1.has(l)?($t(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qr}"`),null):l}function k1(l,o){let u,d,f,p,g;if(b1(l)){let b=l.getAttribute("action");d=b?Ca(b,o):null,u=l.getAttribute("method")||$r,f=Bc(l.getAttribute("enctype"))||Qr,p=new FormData(l)}else if(x1(l)||y1(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=l.getAttribute("formaction")||b.getAttribute("action");if(d=j?Ca(j,o):null,u=l.getAttribute("formmethod")||b.getAttribute("method")||$r,f=Bc(l.getAttribute("formenctype"))||Bc(b.getAttribute("enctype"))||Qr,p=new FormData(b,l),!w1()){let{name:v,type:w,value:N}=l;if(w==="image"){let T=v?`${v}.`:"";p.append(`${T}x`,"0"),p.append(`${T}y`,"0")}else v&&p.append(v,N)}}else{if(is(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=$r,d=null,f=Qr,g=l}return p&&f==="text/plain"&&(g=p,p=void 0),{action:d,method:u.toLowerCase(),encType:f,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function td(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function C1(l,o,u,d){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:o&&Ca(f.pathname,o)==="/"?f.pathname=`${o.replace(/\/$/,"")}/_root.${d}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${d}`,f}async function z1(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function E1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function T1(l,o,u){let d=await Promise.all(l.map(async f=>{let p=o.routes[f.route.id];if(p){let g=await z1(p,u);return g.links?g.links():[]}return[]}));return D1(d.flat(1).filter(E1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function yh(l,o,u,d,f,p){let g=(j,v)=>u[v]?j.route.id!==u[v].route.id:!0,b=(j,v)=>u[v].pathname!==j.pathname||u[v].route.path?.endsWith("*")&&u[v].params["*"]!==j.params["*"];return p==="assets"?o.filter((j,v)=>g(j,v)||b(j,v)):p==="data"?o.filter((j,v)=>{let w=d.routes[j.route.id];if(!w||!w.hasLoader)return!1;if(g(j,v)||b(j,v))return!0;if(j.route.shouldRevalidate){let N=j.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function A1(l,o,{includeHydrateFallback:u}={}){return R1(l.map(d=>{let f=o.routes[d.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function R1(l){return[...new Set(l)]}function O1(l){let o={},u=Object.keys(l).sort();for(let d of u)o[d]=l[d];return o}function D1(l,o){let u=new Set;return new Set(o),l.reduce((d,f)=>{let p=JSON.stringify(O1(f));return u.has(p)||(u.add(p),d.push({key:p,link:f})),d},[])}function cp(){let l=x.useContext(mn);return td(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function B1(){let l=x.useContext(as);return td(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var ad=x.createContext(void 0);ad.displayName="FrameworkContext";function dp(){let l=x.useContext(ad);return td(l,"You must render this element inside a <HydratedRouter> element"),l}function M1(l,o){let u=x.useContext(ad),[d,f]=x.useState(!1),[p,g]=x.useState(!1),{onFocus:b,onBlur:j,onMouseEnter:v,onMouseLeave:w,onTouchStart:N}=o,T=x.useRef(null);x.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let L=J=>{J.forEach(_=>{g(_.isIntersecting)})},B=new IntersectionObserver(L,{threshold:.5});return T.current&&B.observe(T.current),()=>{B.disconnect()}}},[l]),x.useEffect(()=>{if(d){let L=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(L)}}},[d]);let M=()=>{f(!0)},O=()=>{f(!1),g(!1)};return u?l!=="intent"?[p,T,{}]:[p,T,{onFocus:gl(b,M),onBlur:gl(j,O),onMouseEnter:gl(v,M),onMouseLeave:gl(w,O),onTouchStart:gl(N,M)}]:[!1,T,{}]}function gl(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function L1({page:l,...o}){let{router:u}=cp(),d=x.useMemo(()=>$h(u.routes,l,u.basename),[u.routes,l,u.basename]);return d?x.createElement(U1,{page:l,matches:d,...o}):null}function _1(l){let{manifest:o,routeModules:u}=dp(),[d,f]=x.useState([]);return x.useEffect(()=>{let p=!1;return T1(l,o,u).then(g=>{p||f(g)}),()=>{p=!0}},[l,o,u]),d}function U1({page:l,matches:o,...u}){let d=za(),{future:f,manifest:p,routeModules:g}=dp(),{basename:b}=cp(),{loaderData:j,matches:v}=B1(),w=x.useMemo(()=>yh(l,o,v,p,d,"data"),[l,o,v,p,d]),N=x.useMemo(()=>yh(l,o,v,p,d,"assets"),[l,o,v,p,d]),T=x.useMemo(()=>{if(l===d.pathname+d.search+d.hash)return[];let L=new Set,B=!1;if(o.forEach(_=>{let P=p.routes[_.route.id];!P||!P.hasLoader||(!w.some(le=>le.route.id===_.route.id)&&_.route.id in j&&g[_.route.id]?.shouldRevalidate||P.hasClientLoader?B=!0:L.add(_.route.id))}),L.size===0)return[];let J=C1(l,b,f.unstable_trailingSlashAwareDataRequests,"data");return B&&L.size>0&&J.searchParams.set("_routes",o.filter(_=>L.has(_.route.id)).map(_=>_.route.id).join(",")),[J.pathname+J.search]},[b,f.unstable_trailingSlashAwareDataRequests,j,d,p,w,o,l,g]),M=x.useMemo(()=>A1(N,p),[N,p]),O=_1(N);return x.createElement(x.Fragment,null,T.map(L=>x.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...u})),M.map(L=>x.createElement("link",{key:L,rel:"modulepreload",href:L,...u})),O.map(({key:L,link:B})=>x.createElement("link",{key:L,nonce:u.nonce,...B})))}function H1(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{q1&&(window.__reactRouterVersion="7.12.0")}catch{}function Y1({basename:l,children:o,unstable_useTransitions:u,window:d}){let f=x.useRef();f.current==null&&(f.current=xx({window:d,v5Compat:!0}));let p=f.current,[g,b]=x.useState({action:p.action,location:p.location}),j=x.useCallback(v=>{u===!1?b(v):x.startTransition(()=>b(v))},[u]);return x.useLayoutEffect(()=>p.listen(j),[p,j]),x.createElement(p1,{basename:l,children:o,location:g.location,navigationType:g.action,navigator:p,unstable_useTransitions:u})}var up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,la=x.forwardRef(function({onClick:o,discover:u="render",prefetch:d="none",relative:f,reloadDocument:p,replace:g,state:b,target:j,to:v,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:T,...M},O){let{basename:L,unstable_useTransitions:B}=x.useContext(Qt),J=typeof v=="string"&&up.test(v),_=ep(v,L);v=_.to;let P=Jx(v,{relative:f}),[le,H,I]=M1(d,M),E=X1(v,{replace:g,state:b,target:j,preventScrollReset:w,relative:f,viewTransition:N,unstable_defaultShouldRevalidate:T,unstable_useTransitions:B});function re(ce){o&&o(ce),ce.defaultPrevented||E(ce)}let Q=x.createElement("a",{...M,...I,href:_.absoluteURL||P,onClick:_.isExternal||p?o:re,ref:H1(O,H),target:j,"data-discover":!J&&u==="render"?"true":void 0});return le&&!J?x.createElement(x.Fragment,null,Q,x.createElement(L1,{page:P})):Q});la.displayName="Link";var G1=x.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:d="",end:f=!1,style:p,to:g,viewTransition:b,children:j,...v},w){let N=jl(g,{relative:v.relative}),T=za(),M=x.useContext(as),{navigator:O,basename:L}=x.useContext(Qt),B=M!=null&&K1(N)&&b===!0,J=O.encodeLocation?O.encodeLocation(N).pathname:N.pathname,_=T.pathname,P=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;u||(_=_.toLowerCase(),P=P?P.toLowerCase():null,J=J.toLowerCase()),P&&L&&(P=Ca(P,L)||P);const le=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let H=_===J||!f&&_.startsWith(J)&&_.charAt(le)==="/",I=P!=null&&(P===J||!f&&P.startsWith(J)&&P.charAt(J.length)==="/"),E={isActive:H,isPending:I,isTransitioning:B},re=H?o:void 0,Q;typeof d=="function"?Q=d(E):Q=[d,H?"active":null,I?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ce=typeof p=="function"?p(E):p;return x.createElement(la,{...v,"aria-current":re,className:Q,ref:w,style:ce,to:g,viewTransition:b},typeof j=="function"?j(E):j)});G1.displayName="NavLink";var V1=x.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:d,replace:f,state:p,method:g=$r,action:b,onSubmit:j,relative:v,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:T,...M},O)=>{let{unstable_useTransitions:L}=x.useContext(Qt),B=Q1(),J=Z1(b,{relative:v}),_=g.toLowerCase()==="get"?"get":"post",P=typeof b=="string"&&up.test(b),le=H=>{if(j&&j(H),H.defaultPrevented)return;H.preventDefault();let I=H.nativeEvent.submitter,E=I?.getAttribute("formmethod")||g,re=()=>B(I||H.currentTarget,{fetcherKey:o,method:E,navigate:u,replace:f,state:p,relative:v,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:T});L&&u!==!1?x.startTransition(()=>re()):re()};return x.createElement("form",{ref:O,method:_,action:J,onSubmit:d?j:le,...M,"data-discover":!P&&l==="render"?"true":void 0})});V1.displayName="Form";function P1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fp(l){let o=x.useContext(mn);return Xe(o,P1(l)),o}function X1(l,{target:o,replace:u,state:d,preventScrollReset:f,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:b,unstable_useTransitions:j}={}){let v=Wc(),w=za(),N=jl(l,{relative:p});return x.useCallback(T=>{if(j1(T,o)){T.preventDefault();let M=u!==void 0?u:bl(w)===bl(N),O=()=>v(l,{replace:M,state:d,preventScrollReset:f,relative:p,viewTransition:g,unstable_defaultShouldRevalidate:b});j?x.startTransition(()=>O()):O()}},[w,v,N,u,d,o,l,f,p,g,b,j])}function C2(l){$t(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=x.useRef(Xc(l)),u=x.useRef(!1),d=za(),f=x.useMemo(()=>N1(d.search,u.current?null:o.current),[d.search]),p=Wc(),g=x.useCallback((b,j)=>{const v=Xc(typeof b=="function"?b(new URLSearchParams(f)):b);u.current=!0,p("?"+v,j)},[p,f]);return[f,g]}var F1=0,$1=()=>`__${String(++F1)}__`;function Q1(){let{router:l}=fp("useSubmit"),{basename:o}=x.useContext(Qt),u=d1(),d=l.fetch,f=l.navigate;return x.useCallback(async(p,g={})=>{let{action:b,method:j,encType:v,formData:w,body:N}=k1(p,o);if(g.navigate===!1){let T=g.fetcherKey||$1();await d(T,u,g.action||b,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:w,body:N,formMethod:g.method||j,formEncType:g.encType||v,flushSync:g.flushSync})}else await f(g.action||b,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:w,body:N,formMethod:g.method||j,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[d,f,o,u])}function Z1(l,{relative:o}={}){let{basename:u}=x.useContext(Qt),d=x.useContext(ra);Xe(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),p={...jl(l||".",{relative:o})},g=za();if(l==null){p.search=g.search;let b=new URLSearchParams(p.search),j=b.getAll("index");if(j.some(w=>w==="")){b.delete("index"),j.filter(N=>N).forEach(N=>b.append("index",N));let w=b.toString();p.search=w?`?${w}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:ka([u,p.pathname])),bl(p)}function K1(l,{relative:o}={}){let u=x.useContext(ap);Xe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=fp("useViewTransitionState"),f=jl(l,{relative:o});if(!u.isTransitioning)return!1;let p=Ca(u.currentLocation.pathname,d)||u.currentLocation.pathname,g=Ca(u.nextLocation.pathname,d)||u.nextLocation.pathname;return Wr(f.pathname,g)!=null||Wr(f.pathname,p)!=null}const rt=x.createContext(),J1=({children:l})=>{const[o,u]=x.useState(null),[d,f]=x.useState(localStorage.getItem("token")||null),p=j=>{u(v=>({...v,...j}))};x.useEffect(()=>{const j=localStorage.getItem("token"),v=localStorage.getItem("user");if(j&&v&&v!=="undefined"){const w=JSON.parse(v);u(w),console.log("parsedUser",w),f(j)}},[]);const g=(j,v)=>{if(!j._id){console.error("Login failed: userData must include _id from backend");return}localStorage.setItem("user",JSON.stringify(j)),localStorage.setItem("token",v),u(j),f(v),console.log("userdata",j)},b=()=>{u(null),f(null),localStorage.removeItem("token"),localStorage.removeItem("user")};return a.jsx(rt.Provider,{value:{user:o,token:d,login:g,logout:b,updateUser:p},children:l})},W1="modulepreload",I1=function(l){return"/"+l},vh={},Ea=function(o,u,d){let f=Promise.resolve();if(u&&u.length>0){let j=function(v){return Promise.all(v.map(w=>Promise.resolve(w).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),b=g?.nonce||g?.getAttribute("nonce");f=j(u.map(v=>{if(v=I1(v),v in vh)return;vh[v]=!0;const w=v.endsWith(".css"),N=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${N}`))return;const T=document.createElement("link");if(T.rel=w?"stylesheet":W1,w||(T.as="script"),T.crossOrigin="",T.href=v,b&&T.setAttribute("nonce",b),document.head.appendChild(T),w)return new Promise((M,O)=>{T.addEventListener("load",M),T.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${v}`)))})}))}function p(g){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=g,window.dispatchEvent(b),!b.defaultPrevented)throw g}return f.then(g=>{for(const b of g||[])b.status==="rejected"&&p(b.reason);return o().catch(p)})};function mp(l,o){return function(){return l.apply(o,arguments)}}const{toString:eb}=Object.prototype,{getPrototypeOf:id}=Object,{iterator:ns,toStringTag:hp}=Symbol,ls=(l=>o=>{const u=eb.call(o);return l[u]||(l[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),It=l=>(l=l.toLowerCase(),o=>ls(o)===l),rs=l=>o=>typeof o===l,{isArray:hn}=Array,un=rs("undefined");function Nl(l){return l!==null&&!un(l)&&l.constructor!==null&&!un(l.constructor)&&St(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const pp=It("ArrayBuffer");function tb(l){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(l):o=l&&l.buffer&&pp(l.buffer),o}const ab=rs("string"),St=rs("function"),gp=rs("number"),wl=l=>l!==null&&typeof l=="object",ib=l=>l===!0||l===!1,Zr=l=>{if(ls(l)!=="object")return!1;const o=id(l);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(hp in l)&&!(ns in l)},nb=l=>{if(!wl(l)||Nl(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},lb=It("Date"),rb=It("File"),sb=It("Blob"),ob=It("FileList"),cb=l=>wl(l)&&St(l.pipe),db=l=>{let o;return l&&(typeof FormData=="function"&&l instanceof FormData||St(l.append)&&((o=ls(l))==="formdata"||o==="object"&&St(l.toString)&&l.toString()==="[object FormData]"))},ub=It("URLSearchParams"),[fb,mb,hb,pb]=["ReadableStream","Request","Response","Headers"].map(It),gb=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sl(l,o,{allOwnKeys:u=!1}={}){if(l===null||typeof l>"u")return;let d,f;if(typeof l!="object"&&(l=[l]),hn(l))for(d=0,f=l.length;d<f;d++)o.call(null,l[d],d,l);else{if(Nl(l))return;const p=u?Object.getOwnPropertyNames(l):Object.keys(l),g=p.length;let b;for(d=0;d<g;d++)b=p[d],o.call(null,l[b],b,l)}}function xp(l,o){if(Nl(l))return null;o=o.toLowerCase();const u=Object.keys(l);let d=u.length,f;for(;d-- >0;)if(f=u[d],o===f.toLowerCase())return f;return null}const vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,bp=l=>!un(l)&&l!==vi;function Fc(){const{caseless:l,skipUndefined:o}=bp(this)&&this||{},u={},d=(f,p)=>{const g=l&&xp(u,p)||p;Zr(u[g])&&Zr(f)?u[g]=Fc(u[g],f):Zr(f)?u[g]=Fc({},f):hn(f)?u[g]=f.slice():(!o||!un(f))&&(u[g]=f)};for(let f=0,p=arguments.length;f<p;f++)arguments[f]&&Sl(arguments[f],d);return u}const xb=(l,o,u,{allOwnKeys:d}={})=>(Sl(o,(f,p)=>{u&&St(f)?l[p]=mp(f,u):l[p]=f},{allOwnKeys:d}),l),bb=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),yb=(l,o,u,d)=>{l.prototype=Object.create(o.prototype,d),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:o.prototype}),u&&Object.assign(l.prototype,u)},vb=(l,o,u,d)=>{let f,p,g;const b={};if(o=o||{},l==null)return o;do{for(f=Object.getOwnPropertyNames(l),p=f.length;p-- >0;)g=f[p],(!d||d(g,l,o))&&!b[g]&&(o[g]=l[g],b[g]=!0);l=u!==!1&&id(l)}while(l&&(!u||u(l,o))&&l!==Object.prototype);return o},jb=(l,o,u)=>{l=String(l),(u===void 0||u>l.length)&&(u=l.length),u-=o.length;const d=l.indexOf(o,u);return d!==-1&&d===u},Nb=l=>{if(!l)return null;if(hn(l))return l;let o=l.length;if(!gp(o))return null;const u=new Array(o);for(;o-- >0;)u[o]=l[o];return u},wb=(l=>o=>l&&o instanceof l)(typeof Uint8Array<"u"&&id(Uint8Array)),Sb=(l,o)=>{const d=(l&&l[ns]).call(l);let f;for(;(f=d.next())&&!f.done;){const p=f.value;o.call(l,p[0],p[1])}},kb=(l,o)=>{let u;const d=[];for(;(u=l.exec(o))!==null;)d.push(u);return d},Cb=It("HTMLFormElement"),zb=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,d,f){return d.toUpperCase()+f}),jh=(({hasOwnProperty:l})=>(o,u)=>l.call(o,u))(Object.prototype),Eb=It("RegExp"),yp=(l,o)=>{const u=Object.getOwnPropertyDescriptors(l),d={};Sl(u,(f,p)=>{let g;(g=o(f,p,l))!==!1&&(d[p]=g||f)}),Object.defineProperties(l,d)},Tb=l=>{yp(l,(o,u)=>{if(St(l)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const d=l[u];if(St(d)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},Ab=(l,o)=>{const u={},d=f=>{f.forEach(p=>{u[p]=!0})};return hn(l)?d(l):d(String(l).split(o)),u},Rb=()=>{},Ob=(l,o)=>l!=null&&Number.isFinite(l=+l)?l:o;function Db(l){return!!(l&&St(l.append)&&l[hp]==="FormData"&&l[ns])}const Bb=l=>{const o=new Array(10),u=(d,f)=>{if(wl(d)){if(o.indexOf(d)>=0)return;if(Nl(d))return d;if(!("toJSON"in d)){o[f]=d;const p=hn(d)?[]:{};return Sl(d,(g,b)=>{const j=u(g,f+1);!un(j)&&(p[b]=j)}),o[f]=void 0,p}}return d};return u(l,0)},Mb=It("AsyncFunction"),Lb=l=>l&&(wl(l)||St(l))&&St(l.then)&&St(l.catch),vp=((l,o)=>l?setImmediate:o?((u,d)=>(vi.addEventListener("message",({source:f,data:p})=>{f===vi&&p===u&&d.length&&d.shift()()},!1),f=>{d.push(f),vi.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",St(vi.postMessage)),_b=typeof queueMicrotask<"u"?queueMicrotask.bind(vi):typeof process<"u"&&process.nextTick||vp,Ub=l=>l!=null&&St(l[ns]),V={isArray:hn,isArrayBuffer:pp,isBuffer:Nl,isFormData:db,isArrayBufferView:tb,isString:ab,isNumber:gp,isBoolean:ib,isObject:wl,isPlainObject:Zr,isEmptyObject:nb,isReadableStream:fb,isRequest:mb,isResponse:hb,isHeaders:pb,isUndefined:un,isDate:lb,isFile:rb,isBlob:sb,isRegExp:Eb,isFunction:St,isStream:cb,isURLSearchParams:ub,isTypedArray:wb,isFileList:ob,forEach:Sl,merge:Fc,extend:xb,trim:gb,stripBOM:bb,inherits:yb,toFlatObject:vb,kindOf:ls,kindOfTest:It,endsWith:jb,toArray:Nb,forEachEntry:Sb,matchAll:kb,isHTMLForm:Cb,hasOwnProperty:jh,hasOwnProp:jh,reduceDescriptors:yp,freezeMethods:Tb,toObjectSet:Ab,toCamelCase:zb,noop:Rb,toFiniteNumber:Ob,findKey:xp,global:vi,isContextDefined:bp,isSpecCompliantForm:Db,toJSONObject:Bb,isAsyncFn:Mb,isThenable:Lb,setImmediate:vp,asap:_b,isIterable:Ub};function ve(l,o,u,d,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",o&&(this.code=o),u&&(this.config=u),d&&(this.request=d),f&&(this.response=f,this.status=f.status?f.status:null)}V.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.status}}});const jp=ve.prototype,Np={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{Np[l]={value:l}});Object.defineProperties(ve,Np);Object.defineProperty(jp,"isAxiosError",{value:!0});ve.from=(l,o,u,d,f,p)=>{const g=Object.create(jp);V.toFlatObject(l,g,function(w){return w!==Error.prototype},v=>v!=="isAxiosError");const b=l&&l.message?l.message:"Error",j=o==null&&l?l.code:o;return ve.call(g,b,j,u,d,f),l&&g.cause==null&&Object.defineProperty(g,"cause",{value:l,configurable:!0}),g.name=l&&l.name||"Error",p&&Object.assign(g,p),g};const Hb=null;function $c(l){return V.isPlainObject(l)||V.isArray(l)}function wp(l){return V.endsWith(l,"[]")?l.slice(0,-2):l}function Nh(l,o,u){return l?l.concat(o).map(function(f,p){return f=wp(f),!u&&p?"["+f+"]":f}).join(u?".":""):o}function qb(l){return V.isArray(l)&&!l.some($c)}const Yb=V.toFlatObject(V,{},null,function(o){return/^is[A-Z]/.test(o)});function ss(l,o,u){if(!V.isObject(l))throw new TypeError("target must be an object");o=o||new FormData,u=V.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(L,B){return!V.isUndefined(B[L])});const d=u.metaTokens,f=u.visitor||w,p=u.dots,g=u.indexes,j=(u.Blob||typeof Blob<"u"&&Blob)&&V.isSpecCompliantForm(o);if(!V.isFunction(f))throw new TypeError("visitor must be a function");function v(O){if(O===null)return"";if(V.isDate(O))return O.toISOString();if(V.isBoolean(O))return O.toString();if(!j&&V.isBlob(O))throw new ve("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(O)||V.isTypedArray(O)?j&&typeof Blob=="function"?new Blob([O]):Buffer.from(O):O}function w(O,L,B){let J=O;if(O&&!B&&typeof O=="object"){if(V.endsWith(L,"{}"))L=d?L:L.slice(0,-2),O=JSON.stringify(O);else if(V.isArray(O)&&qb(O)||(V.isFileList(O)||V.endsWith(L,"[]"))&&(J=V.toArray(O)))return L=wp(L),J.forEach(function(P,le){!(V.isUndefined(P)||P===null)&&o.append(g===!0?Nh([L],le,p):g===null?L:L+"[]",v(P))}),!1}return $c(O)?!0:(o.append(Nh(B,L,p),v(O)),!1)}const N=[],T=Object.assign(Yb,{defaultVisitor:w,convertValue:v,isVisitable:$c});function M(O,L){if(!V.isUndefined(O)){if(N.indexOf(O)!==-1)throw Error("Circular reference detected in "+L.join("."));N.push(O),V.forEach(O,function(J,_){(!(V.isUndefined(J)||J===null)&&f.call(o,J,V.isString(_)?_.trim():_,L,T))===!0&&M(J,L?L.concat(_):[_])}),N.pop()}}if(!V.isObject(l))throw new TypeError("data must be an object");return M(l),o}function wh(l){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(d){return o[d]})}function nd(l,o){this._pairs=[],l&&ss(l,this,o)}const Sp=nd.prototype;Sp.append=function(o,u){this._pairs.push([o,u])};Sp.toString=function(o){const u=o?function(d){return o.call(this,d,wh)}:wh;return this._pairs.map(function(f){return u(f[0])+"="+u(f[1])},"").join("&")};function Gb(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function kp(l,o,u){if(!o)return l;const d=u&&u.encode||Gb;V.isFunction(u)&&(u={serialize:u});const f=u&&u.serialize;let p;if(f?p=f(o,u):p=V.isURLSearchParams(o)?o.toString():new nd(o,u).toString(d),p){const g=l.indexOf("#");g!==-1&&(l=l.slice(0,g)),l+=(l.indexOf("?")===-1?"?":"&")+p}return l}class Sh{constructor(){this.handlers=[]}use(o,u,d){return this.handlers.push({fulfilled:o,rejected:u,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){V.forEach(this.handlers,function(d){d!==null&&o(d)})}}const Cp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vb=typeof URLSearchParams<"u"?URLSearchParams:nd,Pb=typeof FormData<"u"?FormData:null,Xb=typeof Blob<"u"?Blob:null,Fb={isBrowser:!0,classes:{URLSearchParams:Vb,FormData:Pb,Blob:Xb},protocols:["http","https","file","blob","url","data"]},ld=typeof window<"u"&&typeof document<"u",Qc=typeof navigator=="object"&&navigator||void 0,$b=ld&&(!Qc||["ReactNative","NativeScript","NS"].indexOf(Qc.product)<0),Qb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Zb=ld&&window.location.href||"http://localhost",Kb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ld,hasStandardBrowserEnv:$b,hasStandardBrowserWebWorkerEnv:Qb,navigator:Qc,origin:Zb},Symbol.toStringTag,{value:"Module"})),ht={...Kb,...Fb};function Jb(l,o){return ss(l,new ht.classes.URLSearchParams,{visitor:function(u,d,f,p){return ht.isNode&&V.isBuffer(u)?(this.append(d,u.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...o})}function Wb(l){return V.matchAll(/\w+|\[(\w*)]/g,l).map(o=>o[0]==="[]"?"":o[1]||o[0])}function Ib(l){const o={},u=Object.keys(l);let d;const f=u.length;let p;for(d=0;d<f;d++)p=u[d],o[p]=l[p];return o}function zp(l){function o(u,d,f,p){let g=u[p++];if(g==="__proto__")return!0;const b=Number.isFinite(+g),j=p>=u.length;return g=!g&&V.isArray(f)?f.length:g,j?(V.hasOwnProp(f,g)?f[g]=[f[g],d]:f[g]=d,!b):((!f[g]||!V.isObject(f[g]))&&(f[g]=[]),o(u,d,f[g],p)&&V.isArray(f[g])&&(f[g]=Ib(f[g])),!b)}if(V.isFormData(l)&&V.isFunction(l.entries)){const u={};return V.forEachEntry(l,(d,f)=>{o(Wb(d),f,u,0)}),u}return null}function ey(l,o,u){if(V.isString(l))try{return(o||JSON.parse)(l),V.trim(l)}catch(d){if(d.name!=="SyntaxError")throw d}return(u||JSON.stringify)(l)}const kl={transitional:Cp,adapter:["xhr","http","fetch"],transformRequest:[function(o,u){const d=u.getContentType()||"",f=d.indexOf("application/json")>-1,p=V.isObject(o);if(p&&V.isHTMLForm(o)&&(o=new FormData(o)),V.isFormData(o))return f?JSON.stringify(zp(o)):o;if(V.isArrayBuffer(o)||V.isBuffer(o)||V.isStream(o)||V.isFile(o)||V.isBlob(o)||V.isReadableStream(o))return o;if(V.isArrayBufferView(o))return o.buffer;if(V.isURLSearchParams(o))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let b;if(p){if(d.indexOf("application/x-www-form-urlencoded")>-1)return Jb(o,this.formSerializer).toString();if((b=V.isFileList(o))||d.indexOf("multipart/form-data")>-1){const j=this.env&&this.env.FormData;return ss(b?{"files[]":o}:o,j&&new j,this.formSerializer)}}return p||f?(u.setContentType("application/json",!1),ey(o)):o}],transformResponse:[function(o){const u=this.transitional||kl.transitional,d=u&&u.forcedJSONParsing,f=this.responseType==="json";if(V.isResponse(o)||V.isReadableStream(o))return o;if(o&&V.isString(o)&&(d&&!this.responseType||f)){const g=!(u&&u.silentJSONParsing)&&f;try{return JSON.parse(o,this.parseReviver)}catch(b){if(g)throw b.name==="SyntaxError"?ve.from(b,ve.ERR_BAD_RESPONSE,this,null,this.response):b}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],l=>{kl.headers[l]={}});const ty=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ay=l=>{const o={};let u,d,f;return l&&l.split(`
`).forEach(function(g){f=g.indexOf(":"),u=g.substring(0,f).trim().toLowerCase(),d=g.substring(f+1).trim(),!(!u||o[u]&&ty[u])&&(u==="set-cookie"?o[u]?o[u].push(d):o[u]=[d]:o[u]=o[u]?o[u]+", "+d:d)}),o},kh=Symbol("internals");function xl(l){return l&&String(l).trim().toLowerCase()}function Kr(l){return l===!1||l==null?l:V.isArray(l)?l.map(Kr):String(l)}function iy(l){const o=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=u.exec(l);)o[d[1]]=d[2];return o}const ny=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Mc(l,o,u,d,f){if(V.isFunction(d))return d.call(this,o,u);if(f&&(o=u),!!V.isString(o)){if(V.isString(d))return o.indexOf(d)!==-1;if(V.isRegExp(d))return d.test(o)}}function ly(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,u,d)=>u.toUpperCase()+d)}function ry(l,o){const u=V.toCamelCase(" "+o);["get","set","has"].forEach(d=>{Object.defineProperty(l,d+u,{value:function(f,p,g){return this[d].call(this,o,f,p,g)},configurable:!0})})}let kt=class{constructor(o){o&&this.set(o)}set(o,u,d){const f=this;function p(b,j,v){const w=xl(j);if(!w)throw new Error("header name must be a non-empty string");const N=V.findKey(f,w);(!N||f[N]===void 0||v===!0||v===void 0&&f[N]!==!1)&&(f[N||j]=Kr(b))}const g=(b,j)=>V.forEach(b,(v,w)=>p(v,w,j));if(V.isPlainObject(o)||o instanceof this.constructor)g(o,u);else if(V.isString(o)&&(o=o.trim())&&!ny(o))g(ay(o),u);else if(V.isObject(o)&&V.isIterable(o)){let b={},j,v;for(const w of o){if(!V.isArray(w))throw TypeError("Object iterator must return a key-value pair");b[v=w[0]]=(j=b[v])?V.isArray(j)?[...j,w[1]]:[j,w[1]]:w[1]}g(b,u)}else o!=null&&p(u,o,d);return this}get(o,u){if(o=xl(o),o){const d=V.findKey(this,o);if(d){const f=this[d];if(!u)return f;if(u===!0)return iy(f);if(V.isFunction(u))return u.call(this,f,d);if(V.isRegExp(u))return u.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,u){if(o=xl(o),o){const d=V.findKey(this,o);return!!(d&&this[d]!==void 0&&(!u||Mc(this,this[d],d,u)))}return!1}delete(o,u){const d=this;let f=!1;function p(g){if(g=xl(g),g){const b=V.findKey(d,g);b&&(!u||Mc(d,d[b],b,u))&&(delete d[b],f=!0)}}return V.isArray(o)?o.forEach(p):p(o),f}clear(o){const u=Object.keys(this);let d=u.length,f=!1;for(;d--;){const p=u[d];(!o||Mc(this,this[p],p,o,!0))&&(delete this[p],f=!0)}return f}normalize(o){const u=this,d={};return V.forEach(this,(f,p)=>{const g=V.findKey(d,p);if(g){u[g]=Kr(f),delete u[p];return}const b=o?ly(p):String(p).trim();b!==p&&delete u[p],u[b]=Kr(f),d[b]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const u=Object.create(null);return V.forEach(this,(d,f)=>{d!=null&&d!==!1&&(u[f]=o&&V.isArray(d)?d.join(", "):d)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,u])=>o+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...u){const d=new this(o);return u.forEach(f=>d.set(f)),d}static accessor(o){const d=(this[kh]=this[kh]={accessors:{}}).accessors,f=this.prototype;function p(g){const b=xl(g);d[b]||(ry(f,g),d[b]=!0)}return V.isArray(o)?o.forEach(p):p(o),this}};kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);V.reduceDescriptors(kt.prototype,({value:l},o)=>{let u=o[0].toUpperCase()+o.slice(1);return{get:()=>l,set(d){this[u]=d}}});V.freezeMethods(kt);function Lc(l,o){const u=this||kl,d=o||u,f=kt.from(d.headers);let p=d.data;return V.forEach(l,function(b){p=b.call(u,p,f.normalize(),o?o.status:void 0)}),f.normalize(),p}function Ep(l){return!!(l&&l.__CANCEL__)}function pn(l,o,u){ve.call(this,l??"canceled",ve.ERR_CANCELED,o,u),this.name="CanceledError"}V.inherits(pn,ve,{__CANCEL__:!0});function Tp(l,o,u){const d=u.config.validateStatus;!u.status||!d||d(u.status)?l(u):o(new ve("Request failed with status code "+u.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function sy(l){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return o&&o[1]||""}function oy(l,o){l=l||10;const u=new Array(l),d=new Array(l);let f=0,p=0,g;return o=o!==void 0?o:1e3,function(j){const v=Date.now(),w=d[p];g||(g=v),u[f]=j,d[f]=v;let N=p,T=0;for(;N!==f;)T+=u[N++],N=N%l;if(f=(f+1)%l,f===p&&(p=(p+1)%l),v-g<o)return;const M=w&&v-w;return M?Math.round(T*1e3/M):void 0}}function cy(l,o){let u=0,d=1e3/o,f,p;const g=(v,w=Date.now())=>{u=w,f=null,p&&(clearTimeout(p),p=null),l(...v)};return[(...v)=>{const w=Date.now(),N=w-u;N>=d?g(v,w):(f=v,p||(p=setTimeout(()=>{p=null,g(f)},d-N)))},()=>f&&g(f)]}const Ir=(l,o,u=3)=>{let d=0;const f=oy(50,250);return cy(p=>{const g=p.loaded,b=p.lengthComputable?p.total:void 0,j=g-d,v=f(j),w=g<=b;d=g;const N={loaded:g,total:b,progress:b?g/b:void 0,bytes:j,rate:v||void 0,estimated:v&&b&&w?(b-g)/v:void 0,event:p,lengthComputable:b!=null,[o?"download":"upload"]:!0};l(N)},u)},Ch=(l,o)=>{const u=l!=null;return[d=>o[0]({lengthComputable:u,total:l,loaded:d}),o[1]]},zh=l=>(...o)=>V.asap(()=>l(...o)),dy=ht.hasStandardBrowserEnv?((l,o)=>u=>(u=new URL(u,ht.origin),l.protocol===u.protocol&&l.host===u.host&&(o||l.port===u.port)))(new URL(ht.origin),ht.navigator&&/(msie|trident)/i.test(ht.navigator.userAgent)):()=>!0,uy=ht.hasStandardBrowserEnv?{write(l,o,u,d,f,p,g){if(typeof document>"u")return;const b=[`${l}=${encodeURIComponent(o)}`];V.isNumber(u)&&b.push(`expires=${new Date(u).toUTCString()}`),V.isString(d)&&b.push(`path=${d}`),V.isString(f)&&b.push(`domain=${f}`),p===!0&&b.push("secure"),V.isString(g)&&b.push(`SameSite=${g}`),document.cookie=b.join("; ")},read(l){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fy(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function my(l,o){return o?l.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):l}function Ap(l,o,u){let d=!fy(o);return l&&(d||u==!1)?my(l,o):o}const Eh=l=>l instanceof kt?{...l}:l;function Ni(l,o){o=o||{};const u={};function d(v,w,N,T){return V.isPlainObject(v)&&V.isPlainObject(w)?V.merge.call({caseless:T},v,w):V.isPlainObject(w)?V.merge({},w):V.isArray(w)?w.slice():w}function f(v,w,N,T){if(V.isUndefined(w)){if(!V.isUndefined(v))return d(void 0,v,N,T)}else return d(v,w,N,T)}function p(v,w){if(!V.isUndefined(w))return d(void 0,w)}function g(v,w){if(V.isUndefined(w)){if(!V.isUndefined(v))return d(void 0,v)}else return d(void 0,w)}function b(v,w,N){if(N in o)return d(v,w);if(N in l)return d(void 0,v)}const j={url:p,method:p,data:p,baseURL:g,transformRequest:g,transformResponse:g,paramsSerializer:g,timeout:g,timeoutMessage:g,withCredentials:g,withXSRFToken:g,adapter:g,responseType:g,xsrfCookieName:g,xsrfHeaderName:g,onUploadProgress:g,onDownloadProgress:g,decompress:g,maxContentLength:g,maxBodyLength:g,beforeRedirect:g,transport:g,httpAgent:g,httpsAgent:g,cancelToken:g,socketPath:g,responseEncoding:g,validateStatus:b,headers:(v,w,N)=>f(Eh(v),Eh(w),N,!0)};return V.forEach(Object.keys({...l,...o}),function(w){const N=j[w]||f,T=N(l[w],o[w],w);V.isUndefined(T)&&N!==b||(u[w]=T)}),u}const Rp=l=>{const o=Ni({},l);let{data:u,withXSRFToken:d,xsrfHeaderName:f,xsrfCookieName:p,headers:g,auth:b}=o;if(o.headers=g=kt.from(g),o.url=kp(Ap(o.baseURL,o.url,o.allowAbsoluteUrls),l.params,l.paramsSerializer),b&&g.set("Authorization","Basic "+btoa((b.username||"")+":"+(b.password?unescape(encodeURIComponent(b.password)):""))),V.isFormData(u)){if(ht.hasStandardBrowserEnv||ht.hasStandardBrowserWebWorkerEnv)g.setContentType(void 0);else if(V.isFunction(u.getHeaders)){const j=u.getHeaders(),v=["content-type","content-length"];Object.entries(j).forEach(([w,N])=>{v.includes(w.toLowerCase())&&g.set(w,N)})}}if(ht.hasStandardBrowserEnv&&(d&&V.isFunction(d)&&(d=d(o)),d||d!==!1&&dy(o.url))){const j=f&&p&&uy.read(p);j&&g.set(f,j)}return o},hy=typeof XMLHttpRequest<"u",py=hy&&function(l){return new Promise(function(u,d){const f=Rp(l);let p=f.data;const g=kt.from(f.headers).normalize();let{responseType:b,onUploadProgress:j,onDownloadProgress:v}=f,w,N,T,M,O;function L(){M&&M(),O&&O(),f.cancelToken&&f.cancelToken.unsubscribe(w),f.signal&&f.signal.removeEventListener("abort",w)}let B=new XMLHttpRequest;B.open(f.method.toUpperCase(),f.url,!0),B.timeout=f.timeout;function J(){if(!B)return;const P=kt.from("getAllResponseHeaders"in B&&B.getAllResponseHeaders()),H={data:!b||b==="text"||b==="json"?B.responseText:B.response,status:B.status,statusText:B.statusText,headers:P,config:l,request:B};Tp(function(E){u(E),L()},function(E){d(E),L()},H),B=null}"onloadend"in B?B.onloadend=J:B.onreadystatechange=function(){!B||B.readyState!==4||B.status===0&&!(B.responseURL&&B.responseURL.indexOf("file:")===0)||setTimeout(J)},B.onabort=function(){B&&(d(new ve("Request aborted",ve.ECONNABORTED,l,B)),B=null)},B.onerror=function(le){const H=le&&le.message?le.message:"Network Error",I=new ve(H,ve.ERR_NETWORK,l,B);I.event=le||null,d(I),B=null},B.ontimeout=function(){let le=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const H=f.transitional||Cp;f.timeoutErrorMessage&&(le=f.timeoutErrorMessage),d(new ve(le,H.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,l,B)),B=null},p===void 0&&g.setContentType(null),"setRequestHeader"in B&&V.forEach(g.toJSON(),function(le,H){B.setRequestHeader(H,le)}),V.isUndefined(f.withCredentials)||(B.withCredentials=!!f.withCredentials),b&&b!=="json"&&(B.responseType=f.responseType),v&&([T,O]=Ir(v,!0),B.addEventListener("progress",T)),j&&B.upload&&([N,M]=Ir(j),B.upload.addEventListener("progress",N),B.upload.addEventListener("loadend",M)),(f.cancelToken||f.signal)&&(w=P=>{B&&(d(!P||P.type?new pn(null,l,B):P),B.abort(),B=null)},f.cancelToken&&f.cancelToken.subscribe(w),f.signal&&(f.signal.aborted?w():f.signal.addEventListener("abort",w)));const _=sy(f.url);if(_&&ht.protocols.indexOf(_)===-1){d(new ve("Unsupported protocol "+_+":",ve.ERR_BAD_REQUEST,l));return}B.send(p||null)})},gy=(l,o)=>{const{length:u}=l=l?l.filter(Boolean):[];if(o||u){let d=new AbortController,f;const p=function(v){if(!f){f=!0,b();const w=v instanceof Error?v:this.reason;d.abort(w instanceof ve?w:new pn(w instanceof Error?w.message:w))}};let g=o&&setTimeout(()=>{g=null,p(new ve(`timeout ${o} of ms exceeded`,ve.ETIMEDOUT))},o);const b=()=>{l&&(g&&clearTimeout(g),g=null,l.forEach(v=>{v.unsubscribe?v.unsubscribe(p):v.removeEventListener("abort",p)}),l=null)};l.forEach(v=>v.addEventListener("abort",p));const{signal:j}=d;return j.unsubscribe=()=>V.asap(b),j}},xy=function*(l,o){let u=l.byteLength;if(u<o){yield l;return}let d=0,f;for(;d<u;)f=d+o,yield l.slice(d,f),d=f},by=async function*(l,o){for await(const u of yy(l))yield*xy(u,o)},yy=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const o=l.getReader();try{for(;;){const{done:u,value:d}=await o.read();if(u)break;yield d}}finally{await o.cancel()}},Th=(l,o,u,d)=>{const f=by(l,o);let p=0,g,b=j=>{g||(g=!0,d&&d(j))};return new ReadableStream({async pull(j){try{const{done:v,value:w}=await f.next();if(v){b(),j.close();return}let N=w.byteLength;if(u){let T=p+=N;u(T)}j.enqueue(new Uint8Array(w))}catch(v){throw b(v),v}},cancel(j){return b(j),f.return()}},{highWaterMark:2})},Ah=64*1024,{isFunction:Pr}=V,vy=(({Request:l,Response:o})=>({Request:l,Response:o}))(V.global),{ReadableStream:Rh,TextEncoder:Oh}=V.global,Dh=(l,...o)=>{try{return!!l(...o)}catch{return!1}},jy=l=>{l=V.merge.call({skipUndefined:!0},vy,l);const{fetch:o,Request:u,Response:d}=l,f=o?Pr(o):typeof fetch=="function",p=Pr(u),g=Pr(d);if(!f)return!1;const b=f&&Pr(Rh),j=f&&(typeof Oh=="function"?(O=>L=>O.encode(L))(new Oh):async O=>new Uint8Array(await new u(O).arrayBuffer())),v=p&&b&&Dh(()=>{let O=!1;const L=new u(ht.origin,{body:new Rh,method:"POST",get duplex(){return O=!0,"half"}}).headers.has("Content-Type");return O&&!L}),w=g&&b&&Dh(()=>V.isReadableStream(new d("").body)),N={stream:w&&(O=>O.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(O=>{!N[O]&&(N[O]=(L,B)=>{let J=L&&L[O];if(J)return J.call(L);throw new ve(`Response type '${O}' is not supported`,ve.ERR_NOT_SUPPORT,B)})});const T=async O=>{if(O==null)return 0;if(V.isBlob(O))return O.size;if(V.isSpecCompliantForm(O))return(await new u(ht.origin,{method:"POST",body:O}).arrayBuffer()).byteLength;if(V.isArrayBufferView(O)||V.isArrayBuffer(O))return O.byteLength;if(V.isURLSearchParams(O)&&(O=O+""),V.isString(O))return(await j(O)).byteLength},M=async(O,L)=>{const B=V.toFiniteNumber(O.getContentLength());return B??T(L)};return async O=>{let{url:L,method:B,data:J,signal:_,cancelToken:P,timeout:le,onDownloadProgress:H,onUploadProgress:I,responseType:E,headers:re,withCredentials:Q="same-origin",fetchOptions:ce}=Rp(O),xe=o||fetch;E=E?(E+"").toLowerCase():"text";let se=gy([_,P&&P.toAbortSignal()],le),Re=null;const ee=se&&se.unsubscribe&&(()=>{se.unsubscribe()});let ae;try{if(I&&v&&B!=="get"&&B!=="head"&&(ae=await M(re,J))!==0){let S=new u(L,{method:"POST",body:J,duplex:"half"}),U;if(V.isFormData(J)&&(U=S.headers.get("content-type"))&&re.setContentType(U),S.body){const[ne,oe]=Ch(ae,Ir(zh(I)));J=Th(S.body,Ah,ne,oe)}}V.isString(Q)||(Q=Q?"include":"omit");const c=p&&"credentials"in u.prototype,m={...ce,signal:se,method:B.toUpperCase(),headers:re.normalize().toJSON(),body:J,duplex:"half",credentials:c?Q:void 0};Re=p&&new u(L,m);let z=await(p?xe(Re,ce):xe(L,m));const Z=w&&(E==="stream"||E==="response");if(w&&(H||Z&&ee)){const S={};["status","statusText","headers"].forEach(k=>{S[k]=z[k]});const U=V.toFiniteNumber(z.headers.get("content-length")),[ne,oe]=H&&Ch(U,Ir(zh(H),!0))||[];z=new d(Th(z.body,Ah,ne,()=>{oe&&oe(),ee&&ee()}),S)}E=E||"text";let R=await N[V.findKey(N,E)||"text"](z,O);return!Z&&ee&&ee(),await new Promise((S,U)=>{Tp(S,U,{data:R,headers:kt.from(z.headers),status:z.status,statusText:z.statusText,config:O,request:Re})})}catch(c){throw ee&&ee(),c&&c.name==="TypeError"&&/Load failed|fetch/i.test(c.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,O,Re),{cause:c.cause||c}):ve.from(c,c&&c.code,O,Re)}}},Ny=new Map,Op=l=>{let o=l&&l.env||{};const{fetch:u,Request:d,Response:f}=o,p=[d,f,u];let g=p.length,b=g,j,v,w=Ny;for(;b--;)j=p[b],v=w.get(j),v===void 0&&w.set(j,v=b?new Map:jy(o)),w=v;return v};Op();const rd={http:Hb,xhr:py,fetch:{get:Op}};V.forEach(rd,(l,o)=>{if(l){try{Object.defineProperty(l,"name",{value:o})}catch{}Object.defineProperty(l,"adapterName",{value:o})}});const Bh=l=>`- ${l}`,wy=l=>V.isFunction(l)||l===null||l===!1;function Sy(l,o){l=V.isArray(l)?l:[l];const{length:u}=l;let d,f;const p={};for(let g=0;g<u;g++){d=l[g];let b;if(f=d,!wy(d)&&(f=rd[(b=String(d)).toLowerCase()],f===void 0))throw new ve(`Unknown adapter '${b}'`);if(f&&(V.isFunction(f)||(f=f.get(o))))break;p[b||"#"+g]=f}if(!f){const g=Object.entries(p).map(([j,v])=>`adapter ${j} `+(v===!1?"is not supported by the environment":"is not available in the build"));let b=u?g.length>1?`since :
`+g.map(Bh).join(`
`):" "+Bh(g[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+b,"ERR_NOT_SUPPORT")}return f}const Dp={getAdapter:Sy,adapters:rd};function _c(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new pn(null,l)}function Mh(l){return _c(l),l.headers=kt.from(l.headers),l.data=Lc.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Dp.getAdapter(l.adapter||kl.adapter,l)(l).then(function(d){return _c(l),d.data=Lc.call(l,l.transformResponse,d),d.headers=kt.from(d.headers),d},function(d){return Ep(d)||(_c(l),d&&d.response&&(d.response.data=Lc.call(l,l.transformResponse,d.response),d.response.headers=kt.from(d.response.headers))),Promise.reject(d)})}const Bp="1.13.2",os={};["object","boolean","number","function","string","symbol"].forEach((l,o)=>{os[l]=function(d){return typeof d===l||"a"+(o<1?"n ":" ")+l}});const Lh={};os.transitional=function(o,u,d){function f(p,g){return"[Axios v"+Bp+"] Transitional option '"+p+"'"+g+(d?". "+d:"")}return(p,g,b)=>{if(o===!1)throw new ve(f(g," has been removed"+(u?" in "+u:"")),ve.ERR_DEPRECATED);return u&&!Lh[g]&&(Lh[g]=!0,console.warn(f(g," has been deprecated since v"+u+" and will be removed in the near future"))),o?o(p,g,b):!0}};os.spelling=function(o){return(u,d)=>(console.warn(`${d} is likely a misspelling of ${o}`),!0)};function ky(l,o,u){if(typeof l!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const d=Object.keys(l);let f=d.length;for(;f-- >0;){const p=d[f],g=o[p];if(g){const b=l[p],j=b===void 0||g(b,p,l);if(j!==!0)throw new ve("option "+p+" must be "+j,ve.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new ve("Unknown option "+p,ve.ERR_BAD_OPTION)}}const Jr={assertOptions:ky,validators:os},na=Jr.validators;let ji=class{constructor(o){this.defaults=o||{},this.interceptors={request:new Sh,response:new Sh}}async request(o,u){try{return await this._request(o,u)}catch(d){if(d instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const p=f.stack?f.stack.replace(/^.+\n/,""):"";try{d.stack?p&&!String(d.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(d.stack+=`
`+p):d.stack=p}catch{}}throw d}}_request(o,u){typeof o=="string"?(u=u||{},u.url=o):u=o||{},u=Ni(this.defaults,u);const{transitional:d,paramsSerializer:f,headers:p}=u;d!==void 0&&Jr.assertOptions(d,{silentJSONParsing:na.transitional(na.boolean),forcedJSONParsing:na.transitional(na.boolean),clarifyTimeoutError:na.transitional(na.boolean)},!1),f!=null&&(V.isFunction(f)?u.paramsSerializer={serialize:f}:Jr.assertOptions(f,{encode:na.function,serialize:na.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),Jr.assertOptions(u,{baseUrl:na.spelling("baseURL"),withXsrfToken:na.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let g=p&&V.merge(p.common,p[u.method]);p&&V.forEach(["delete","get","head","post","put","patch","common"],O=>{delete p[O]}),u.headers=kt.concat(g,p);const b=[];let j=!0;this.interceptors.request.forEach(function(L){typeof L.runWhen=="function"&&L.runWhen(u)===!1||(j=j&&L.synchronous,b.unshift(L.fulfilled,L.rejected))});const v=[];this.interceptors.response.forEach(function(L){v.push(L.fulfilled,L.rejected)});let w,N=0,T;if(!j){const O=[Mh.bind(this),void 0];for(O.unshift(...b),O.push(...v),T=O.length,w=Promise.resolve(u);N<T;)w=w.then(O[N++],O[N++]);return w}T=b.length;let M=u;for(;N<T;){const O=b[N++],L=b[N++];try{M=O(M)}catch(B){L.call(this,B);break}}try{w=Mh.call(this,M)}catch(O){return Promise.reject(O)}for(N=0,T=v.length;N<T;)w=w.then(v[N++],v[N++]);return w}getUri(o){o=Ni(this.defaults,o);const u=Ap(o.baseURL,o.url,o.allowAbsoluteUrls);return kp(u,o.params,o.paramsSerializer)}};V.forEach(["delete","get","head","options"],function(o){ji.prototype[o]=function(u,d){return this.request(Ni(d||{},{method:o,url:u,data:(d||{}).data}))}});V.forEach(["post","put","patch"],function(o){function u(d){return function(p,g,b){return this.request(Ni(b||{},{method:o,headers:d?{"Content-Type":"multipart/form-data"}:{},url:p,data:g}))}}ji.prototype[o]=u(),ji.prototype[o+"Form"]=u(!0)});let Cy=class Mp{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(p){u=p});const d=this;this.promise.then(f=>{if(!d._listeners)return;let p=d._listeners.length;for(;p-- >0;)d._listeners[p](f);d._listeners=null}),this.promise.then=f=>{let p;const g=new Promise(b=>{d.subscribe(b),p=b}).then(f);return g.cancel=function(){d.unsubscribe(p)},g},o(function(p,g,b){d.reason||(d.reason=new pn(p,g,b),u(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const u=this._listeners.indexOf(o);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const o=new AbortController,u=d=>{o.abort(d)};return this.subscribe(u),o.signal.unsubscribe=()=>this.unsubscribe(u),o.signal}static source(){let o;return{token:new Mp(function(f){o=f}),cancel:o}}};function zy(l){return function(u){return l.apply(null,u)}}function Ey(l){return V.isObject(l)&&l.isAxiosError===!0}const Zc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Zc).forEach(([l,o])=>{Zc[o]=l});function Lp(l){const o=new ji(l),u=mp(ji.prototype.request,o);return V.extend(u,ji.prototype,o,{allOwnKeys:!0}),V.extend(u,o,null,{allOwnKeys:!0}),u.create=function(f){return Lp(Ni(l,f))},u}const Pe=Lp(kl);Pe.Axios=ji;Pe.CanceledError=pn;Pe.CancelToken=Cy;Pe.isCancel=Ep;Pe.VERSION=Bp;Pe.toFormData=ss;Pe.AxiosError=ve;Pe.Cancel=Pe.CanceledError;Pe.all=function(o){return Promise.all(o)};Pe.spread=zy;Pe.isAxiosError=Ey;Pe.mergeConfig=Ni;Pe.AxiosHeaders=kt;Pe.formToJSON=l=>zp(V.isHTMLForm(l)?new FormData(l):l);Pe.getAdapter=Dp.getAdapter;Pe.HttpStatusCode=Zc;Pe.default=Pe;const{Axios:T2,AxiosError:A2,CanceledError:R2,isCancel:O2,CancelToken:D2,VERSION:B2,all:M2,Cancel:L2,isAxiosError:_2,spread:U2,toFormData:H2,AxiosHeaders:q2,HttpStatusCode:Y2,formToJSON:G2,getAdapter:V2,mergeConfig:P2}=Pe,He=Pe.create({baseURL:"https://my-travel-app-backend-6.onrender.com/api",withCredentials:!0});He.interceptors.request.use(l=>{const o=localStorage.getItem("token");return o&&(l.headers.Authorization=`Bearer ${o}`),l},l=>Promise.reject(l));function Qe({onClose:l,openRegister:o}){const{login:u}=x.useContext(rt),d=x.useRef(),[f,p]=x.useState(!1),[g,b]=x.useState("password"),[j,v]=x.useState({email:"",password:"",otp:""}),[w,N]=x.useState({}),[T,M]=x.useState(""),[O,L]=x.useState(""),[B,J]=x.useState(!1),[_,P]=x.useState(!1),[le,H]=x.useState(""),[I,E]=x.useState(!1),re=ae=>{d.current&&ae.target===d.current&&Q()},Q=()=>{p(!0),setTimeout(()=>{l(),p(!1),v({email:"",password:"",otp:""}),N({}),L(""),J(!1)},300)},ce=ae=>{v({...j,[ae.target.name]:ae.target.value}),N({...w,[ae.target.name]:""})},xe=()=>{const ae={};return j.email.trim()?/\S+@\S+\.\S+/.test(j.email)||(ae.email="Email is invalid"):ae.email="Email is required",g==="password"&&!j.password.trim()&&(ae.password="Password is required"),g==="otp"&&B&&!j.otp.trim()&&(ae.otp="OTP is required"),ae},se=async()=>{if(N({}),M(""),!j.email.trim()){N({email:"Email is required to send OTP"});return}try{P(!0);const ae=await He.post("/users/generate-login-otp",{email:j.email});ae.data.success&&(alert(`Your OTP is: ${ae.data.otp}`),J(!0),L("OTP sent successfully!"),H(ae.data.otp),setMessage(ae.data.message),E(!0),setTimeout(()=>L(""),3e3))}catch(ae){const c=ae.response?.data;c?.message?M(c.message):M(res.data.message||"Failed to send OTP")}finally{P(!1)}},Re=async ae=>{ae.preventDefault(),N({}),M(""),L("");const c=xe();if(Object.keys(c).length>0){N(c);return}try{let m;g==="password"?m=await He.post("/users/login",{email:j.email,password:j.password}):m=await He.post("/users/login",{email:j.email,otp:j.otp});const{token:z,user:Z}=m.data;localStorage.setItem("token",z),localStorage.setItem("user",JSON.stringify(Z)),u(m.data.user,z),console.log("User logged in:",Z),console.log("User ID saved:",Z._id),L("Login successful!"),setTimeout(()=>Q(),1e3)}catch(m){const z=m.response?.data;z?.message?M(z.message):M("Something went wrong")}},ee=()=>{b(ae=>ae==="password"?"otp":"password"),N({}),M(""),L(""),J(!1)};return a.jsx("div",{ref:d,style:Ve.overlay,onClick:re,className:`fade-in ${f?"fade-out":""}`,children:a.jsxs("div",{style:Ve.popup,className:`slide-up ${f?"slide-down":""}`,children:[a.jsx("h2",{style:Ve.popupTitle,children:"Login"}),a.jsxs("div",{style:Ve.toggleContainer,children:[a.jsx("button",{style:{...Ve.toggleBtn,...g==="password"?Ve.activeToggleBtn:{}},onClick:()=>ee(),type:"button",children:"Password"}),a.jsx("button",{style:{...Ve.toggleBtn,...g==="otp"?Ve.activeToggleBtn:{}},onClick:()=>ee(),type:"button",children:"OTP"})]}),a.jsxs("form",{style:Ve.form,onSubmit:Re,noValidate:!0,children:[a.jsx("input",{type:"email",name:"email",placeholder:"Email",value:j.email,onChange:ce,style:Ve.input,disabled:B&&g==="otp"}),w.email&&a.jsx("p",{style:Ve.error,children:w.email}),g==="password"?a.jsxs(a.Fragment,{children:[a.jsx("input",{type:"password",name:"password",placeholder:"Password",value:j.password,onChange:ce,style:Ve.input}),w.password&&a.jsx("p",{style:Ve.error,children:w.password})]}):a.jsx(a.Fragment,{children:B?a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:Ve.otpContainer,children:[a.jsx("input",{type:"text",name:"otp",placeholder:"Enter OTP",value:j.otp,onChange:ce,style:Ve.otpInput,maxLength:"6"}),a.jsx("button",{type:"button",onClick:se,style:Ve.resendOtpBtn,disabled:_,children:_?"Sending...":"Resend OTP"})]}),w.otp&&a.jsx("p",{style:Ve.error,children:w.otp})]}):a.jsx("button",{type:"button",onClick:se,style:Ve.sendOtpBtn,disabled:_,children:_?"Sending OTP...":"Send OTP"})}),a.jsx("button",{type:"submit",style:Ve.submitBtn,children:g==="password"?"Login":"Verify OTP"}),O&&a.jsx("p",{style:Ve.success,children:O}),T&&a.jsx("p",{style:Ve.error,children:T}),a.jsxs("p",{style:Ve.switchContainer,children:["Don't have an account?"," ",a.jsx("button",{type:"button",style:Ve.switchBtn,onClick:()=>{Q(),setTimeout(o,350)},children:"Register"})]}),I&&le&&a.jsxs("p",{style:{color:"green"},children:["Generated OTP (for testing): ",le]}),a.jsx("button",{type:"button",style:Ve.closeBtn,onClick:Q,children:"Close"})]}),a.jsx("style",{children:Ty})]})})}const Ty=`
  .fade-in { animation: fadeIn 0.3s ease-out forwards; }
  .fade-out { animation: fadeOut 0.3s ease-out forwards; }
  .slide-up { animation: slideUp 0.3s ease-out forwards; }
  .slide-down { animation: slideDown 0.3s ease-out forwards; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  @keyframes slideDown { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }
`,Ve={overlay:{position:"fixed",top:0,left:0,height:"100vh",width:"100vw",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1500,padding:"10px"},popup:{backgroundColor:"white",padding:"30px 35px",borderRadius:"10px",width:"400px",maxWidth:"100%",boxShadow:"0 8px 25px rgba(0,0,0,0.25)",display:"flex",flexDirection:"column"},popupTitle:{marginBottom:"20px",textAlign:"center",fontSize:"2rem",fontWeight:"700",color:"white",backgroundColor:"gray",fontFamily:"Times New Roman",padding:"10px 0",borderRadius:"15px"},toggleContainer:{display:"flex",justifyContent:"center",marginBottom:"20px",gap:"10px"},toggleBtn:{padding:"8px 16px",borderRadius:"20px",border:"1px solid #ccc",background:"white",cursor:"pointer",transition:"all 0.3s ease"},activeToggleBtn:{background:"#007bff",color:"white",borderColor:"#007bff"},form:{display:"flex",flexDirection:"column"},input:{marginTop:"8px",padding:"10px 14px",fontSize:"1rem",borderRadius:"6px",border:"1.8px solid #ccc",transition:"border-color 0.3s ease"},otpContainer:{display:"flex",gap:"10px",marginTop:"8px"},otpInput:{flex:1,padding:"10px 14px",fontSize:"1rem",borderRadius:"6px",border:"1.8px solid #ccc"},sendOtpBtn:{padding:"10px",background:"#28a745",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",marginTop:"8px"},resendOtpBtn:{padding:"10px",background:"#6c757d",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",whiteSpace:"nowrap"},submitBtn:{marginTop:"15px",padding:"14px",fontSize:"1.1rem",borderRadius:"8px",border:"none",backgroundColor:"#007bff",color:"white",fontWeight:"700",cursor:"pointer",transition:"background-color 0.3s ease"},switchContainer:{marginTop:"18px",textAlign:"center",fontSize:"1rem"},switchBtn:{background:"none",border:"none",color:"#007bff",cursor:"pointer",fontWeight:"600",textDecoration:"underline",padding:0,marginLeft:"6px"},closeBtn:{marginTop:"25px",padding:"12px 24px",fontSize:"1rem",backgroundColor:"#dc3545",border:"none",borderRadius:"6px",color:"white",cursor:"pointer",fontWeight:"600"},error:{color:"#dc3545",marginTop:"6px",fontSize:"0.9rem",fontWeight:"600"},success:{marginTop:"18px",color:"#28a745",fontWeight:"700",textAlign:"center",fontSize:"1.05rem"}};function _p({onClose:l,openLogin:o}){const u=x.useRef(),[d,f]=x.useState(!1),[p,g]=x.useState({name:"",email:"",password:"",mobile:"",city:""}),[b,j]=x.useState({}),[v,w]=x.useState(""),[N,T]=x.useState(""),[M,O]=x.useState(!1),[L,B]=x.useState({width:window.innerWidth,height:window.innerHeight});x.useEffect(()=>{const Q=()=>{B({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]),x.useEffect(()=>{const Q=ce=>{ce.key==="Escape"&&_()};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[]);const J=Q=>{u.current&&Q.target===u.current&&_()},_=()=>{f(!0),setTimeout(()=>{l(),f(!1),g({name:"",email:"",password:"",mobile:"",city:""}),j({}),w("")},300)},P=Q=>{g({...p,[Q.target.name]:Q.target.value}),j({...b,[Q.target.name]:""}),w("")},le=()=>{const Q={};return p.name.trim()||(Q.name="Name is required"),p.email.trim()?/\S+@\S+\.\S+/.test(p.email)||(Q.email="Email is invalid"):Q.email="Email is required",p.password.trim()||(Q.password="Password is required"),p.mobile.trim()||(Q.mobile="Mobile is required"),p.city.trim()||(Q.city="City is required"),Q},H=async Q=>{Q.preventDefault(),j({}),T("");const ce=le();if(Object.keys(ce).length>0){j(ce);return}try{const xe=await He.post("/users/register",p);console.log("User Registered:",xe.data),O(!0),localStorage.setItem("token",xe.data.token),f(!0),w(xe.data.message),setTimeout(()=>{I()},1500),g({name:"",email:"",password:"",mobile:"",city:""}),alert("Registration successful!")}catch(xe){const se=xe.response?.data;se?.message?T(se.message):T("Something went wrong")}};b&&(Array.isArray(b)||typeof b=="object"&&Object.values(b));const I=()=>{O(!0),_(),setTimeout(()=>{o(!0)},350)},re=(()=>{const Q=L.width<768,ce=L.width<541;return{overlay:{position:"fixed",top:0,left:0,height:"100vh",width:"100vw",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:Q?"flex-start":"center",zIndex:1500,padding:Q?"20px 10px":"5px",overflowY:"auto"},popup:{backgroundColor:"white",padding:ce?"15px 20px":"20px 25px",borderRadius:"10px",width:ce?"100%":Q?"80%":"500px",maxWidth:"100%",boxShadow:"0 8px 25px rgba(0,0,0,0.25)",display:"flex",flexDirection:"column",marginTop:Q?"20px":0,marginBottom:Q?"20px":0},popupTitle:{marginBottom:"10px",textAlign:"center",fontFamily:"Times New Roman",fontSize:ce?"1.5rem":"2rem",fontWeight:"700",color:"white",letterSpacing:"1px",backgroundColor:"gray",padding:"8px 0",borderRadius:"15px"},form:{display:"flex",flexDirection:"column"},label:{marginBottom:"8px",fontSize:ce?"0.9rem":"1.1rem",color:"#444",fontWeight:"600",display:"flex",flexDirection:"column"},row:{display:"flex",flexDirection:ce?"column":"row",gap:"20px",justifyContent:"space-between"},halfLabel:{flex:1},input:{marginTop:"8px",padding:ce?"8px 12px":"10px 14px",fontSize:ce?"0.9rem":"1rem",borderRadius:"6px",border:"1.8px solid #ccc",transition:"border-color 0.3s ease"},submitBtn:{marginTop:"10px",padding:ce?"12px":"14px",fontSize:ce?"1rem":"1.1rem",borderRadius:"8px",border:"none",backgroundColor:"#007bff",color:"white",fontWeight:"700",cursor:"pointer",transition:"background-color 0.3s ease"},switchContainer:{marginTop:"8px",textAlign:"center",fontSize:ce?"0.9rem":"1rem"},switchBtn:{background:"none",border:"none",color:"#007bff",cursor:"pointer",fontWeight:"600",textDecoration:"underline",padding:0,marginLeft:"6px"},closeBtnContainer:{display:"flex",justifyContent:"flex-end"},closeBtn:{marginTop:"-10px",marginBottom:"-10px",padding:ce?"10px 20px":"10px 24px",fontSize:ce?"0.9rem":"1rem",backgroundColor:"#dc3545",border:"none",borderRadius:"6px",color:"white",cursor:"pointer",fontWeight:"600"},error:{color:"#dc3545",marginTop:"6px",fontSize:ce?"0.8rem":"0.9rem",fontWeight:"600"},success:{marginTop:"18px",color:"#28a745",fontWeight:"700",textAlign:"center",fontSize:ce?"0.95rem":"1.05rem"}}})();return a.jsx("div",{ref:u,style:re.overlay,onClick:J,className:`fade-in ${d?"fade-out":""}`,children:a.jsxs("div",{style:re.popup,className:`slide-up ${d?"slide-down":""}`,children:[N&&a.jsx("p",{style:{color:"red",marginBottom:"10px"},children:N}),a.jsx("h2",{style:re.popupTitle,children:"Register"}),a.jsxs("form",{style:re.form,onSubmit:H,noValidate:!0,children:[a.jsxs("label",{style:re.label,children:["Name",a.jsx("input",{type:"text",name:"name",placeholder:"Enter your Full Name",value:p.name,onChange:P,style:re.input,require:!0}),b.name&&a.jsx("p",{style:{color:"red"},children:b.name})]}),a.jsxs("label",{style:re.label,children:[" Email",a.jsx("input",{type:"email",name:"email",placeholder:"Enter your Valid Email",value:p.email,onChange:P,style:re.input,require:!0}),b.email&&a.jsx("p",{style:{color:"red"},children:b.email})]}),a.jsxs("label",{style:re.label,children:[" Password",a.jsx("input",{type:"password",name:"password",placeholder:"Enter your Password",value:p.password,onChange:P,style:re.input,require:!0}),b.password&&a.jsx("p",{style:{color:"red"},children:b.password})]}),a.jsxs("div",{style:re.row,children:[a.jsxs("label",{style:{...re.label,...re.halfLabel},children:[" Mobile",a.jsx("input",{type:"tel",name:"mobile",value:p.mobile,onChange:P,style:re.input,required:!0,pattern:"[0-9]{10}",placeholder:"10-digit phone number"}),b.mobile&&a.jsx("p",{style:re.error,children:b.mobile})]}),a.jsxs("label",{style:{...re.label,...re.halfLabel},children:[" Which city are you from?",a.jsx("input",{type:"text",name:"city",value:p.city,onChange:P,style:re.input,require:!0}),b.city&&a.jsx("p",{style:re.error,children:b.city})]})]}),a.jsx("button",{type:"submit",style:re.submitBtn,children:" Submit"}),v&&a.jsx("p",{style:re.success,children:v}),M&&a.jsx(Qe,{onClose:()=>O(!1)}),a.jsx("div",{style:re.switchContainer,children:a.jsxs("p",{children:["Already have an account?"," ",a.jsx("button",{type:"button",style:re.switchBtn,onClick:I,children:"Login"})]})}),a.jsx("div",{style:re.closeBtnContainer,children:a.jsx("button",{type:"button",onClick:_,style:re.closeBtn,children:"Close"})})]}),a.jsx("style",{children:Ay})]})})}const Ay=`
    .fade-in { animation: fadeIn 0.3s ease-out forwards; }
    .fade-out { animation: fadeOut 0.3s ease-out forwards; }
    .slide-up { animation: slideUp 0.3s ease-out forwards; }
    .slide-down { animation: slideDown 0.3s ease-out forwards; }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes slideDown { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }
  `,Up=()=>{const{user:l,token:o}=x.useContext(rt),[u,d]=x.useState("bookings"),[f,p]=x.useState(""),[g,b]=x.useState("all"),[j,v]=x.useState(new Set),[w,N]=x.useState([]),[T,M]=x.useState(""),[O,L]=x.useState(!0),B=async()=>{try{if(!l)return;const H=localStorage.getItem("token");if(!H){M("Token missing, please login again.");return}L(!0);const I=l?.isAdmin?"/bookings":"/bookings/confirmed-user",{data:E}=await He.get(I,{headers:{Authorization:`Bearer ${H}`}});E.success?(N(E.bookings||[]),console.log("Confirmed bookings loaded:",E.bookings)):(N([]),M(E.message||"Failed to fetch confirmed bookings"))}catch(H){console.error(H),N([]),M(H.response?.data?.message||"Failed to fetch confirmed bookings")}finally{L(!1)}};if(x.useEffect(()=>{B()},[l]),O)return a.jsx("p",{children:"Loading..."});if(T)return a.jsx("p",{style:{color:"red"},children:T});const J=H=>{window.confirm("Are you sure you want to delete this booking?")&&N(I=>I.filter(E=>E._id!==H))};Array.isArray(w)&&w.filter(H=>{const I=H.fullName?.toLowerCase().includes(f.toLowerCase())||H.email?.toLowerCase().includes(f.toLowerCase())||H.location?.toLowerCase().includes(f.toLowerCase())||H.packageId?.toLowerCase().includes(f.toLowerCase()),E=g==="all"||H.status===g;return I&&E});const _=H=>{switch(H){case"confirmed":return{background:"#d4edda",color:"#155724"};case"pending":return{background:"#fff3cd",color:"#856404"};case"cancelled":return{background:"#f8d7da",color:"#721c24"};default:return{background:"#f8f9fa",color:"#6c757d"}}},P=H=>{v(I=>{const E=new Set(I);return E.has(H)?E.delete(H):E.add(H),E})};if(O)return a.jsx("p",{children:"Loading bookings..."});const le=H=>{console.log("BOOKING RECEIVED:",H),console.log(" confiemedAT:",H.confirmedAt);const I=window.open("","_blank");I.document.write(`
<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8" />
<title>Travel Itinerary - Booking #${H?._id}</title>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Playfair+Display:wght@400;500&display=swap');

  :root {
    --primary: #1a73e8;
    --primary-light: #e8f0fe;
    --secondary: #ff6b35;
    --dark: #2d3748;
    --light: #f8fafc;
    --border: #e2e8f0;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #fff;
    color: var(--dark);
    line-height: 1.6;
    padding: 20px;
  }

  .itinerary-container {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  /* Header with Logo */
  .itinerary-header {
    background: linear-gradient(135deg, var(--primary) 0%, #1557b0 100%);
    color: white;
    padding: 10px 20px;
    position: relative;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .logo-container {
    display: flex;
    align-items: left;
    gap: 15px;
    margin-Top: -10px;
  }

  .logo {
    height: 170px;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .company-info h1 {
    font-family: 'Fraunces', serif;
    font-size: 32px;
    font-weight: 600;
    margin-Top: 15px;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
    .company-info span {
    font-family: Space Grotesk
    }

  .company-info .tagline {
    font-size: 14px;
    opacity: 0.9;
  }

  .booking-badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 12px 20px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
  }

  .booking-id {
    font-size: 18px;
    font-weight: 600;
  }

  .reference {
    font-size: 12px;
    opacity: 0.9;
  }

  /* Passenger Info */
  .passenger-section {
    padding: 25px 40px;
    background: var(--light);
    border-bottom: 2px solid var(--border);
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: var(--primary);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-title i {
    font-size: 22px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .info-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  .info-label {
    font-size: 12px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }

  .info-value {
    font-size: 16px;
    font-weight: 500;
  }

  /* Itinerary Details */
  .itinerary-details {
    padding: 25px 40px;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 20px;
  }

  .detail-card {
    text-align: center;
    padding: 20px;
    background: var(--light);
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .detail-card:hover {
    transform: translateY(-5px);
  }

  .detail-icon {
    font-size: 28px;
    color: var(--primary);
    margin-bottom: 10px;
  }

  .detail-label {
    font-size: 13px;
    color: #666;
    margin-bottom: 8px;
  }

  .detail-value {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark);
  }

  .price-highlight {
    font-size: 24px;
    color: var(--secondary);
    font-weight: 700;
  }

  /* Status Badge */
  .status-container {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .status-confirmed {
    background: var(--primary-light);
    color: var(--primary);
  }

  .status-pending {
    background: #fef3c7;
    color: #d97706;
  }

  .status-cancelled {
    background: #fee2e2;
    color: var(--danger);
  }

  /* Special Requests */
  .requests-section {
    padding: 25px 40px;
    background: var(--light);
    margin: 20px 40px;
    border-radius: 10px;
    border-left: 4px solid var(--secondary);
  }

  /* Footer */
  .itinerary-footer {
    padding: 30px 40px;
    background: var(--dark);
    color: white;
    text-align: center;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
    font-size: 14px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .terms {
    font-size: 12px;
    opacity: 0.7;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Print Button */
  .print-actions {
    padding: 20px 40px;
    text-align: center;
  }

  .print-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
  }

  .print-btn:hover {
    background: #1557b0;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(26, 115, 232, 0.3);
  }

  /* Print Styles */
  @media print {
    body {
      padding: 0;
      background: white;
    }
    
    .itinerary-container {
      box-shadow: none;
      border-radius: 0;
    }
    
    .print-btn {
      display: none;
    }
    
    .itinerary-header {
      background: #1a73e8 !important;
      -webkit-print-color-adjust: exact;
    }
    
    .detail-card:hover {
      transform: none;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .header-top {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }
    
    .details-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .contact-info {
      flex-direction: column;
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    .itinerary-header,
    .passenger-section,
    .itinerary-details {
      padding: 20px;
    }
    
    .details-grid {
      grid-template-columns: 1fr;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>
<div class="itinerary-container">

  <!-- Header with Logo -->
  <div class="itinerary-header">
    <div class="header-top">
      <div class="logo-container">
        <img src="logo.png" alt="Elite Travel Agency" class="logo">
        <div class="company-info">
          <h1>DESIVDESI</h1>
          <span>Tours & Travel</span>
          <p class="tagline">Crafting Extraordinary Journeys Since 2005</p>
        </div>
      </div>
      
      <div class="booking-badge">
        <div class="booking-id">ITINERARY #${H._id}</div>
        <div class="reference">Reference: ${H._id.slice(-8).toUpperCase()}</div>
      </div>
    </div>
    <p style="font-size: 14px; opacity: 0.9; margin-top: -15px;">
      <i class="fas fa-calendar-alt"></i> Generated on ${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}
    </p>
  </div>

  <!-- Passenger Information -->
  <div class="passenger-section">
    <div class="section-title">
      <i class="fas fa-user-circle"></i>
      <span>Passenger Information</span>
    </div>
    <div class="info-grid">
      <div class="info-card">
        <div class="info-label">Full Name</div>
        <div class="info-value">${H.fullName}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Email Address</div>
        <div class="info-value">${H.email}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Mobile Number</div>
        <div class="info-value">${H.mobile}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Location</div>
        <div class="info-value">${H.destination}</div>
      </div>
    </div>
  </div>

  <!-- Itinerary Details -->
  <div class="itinerary-details">
    <div class="section-title">
      <i class="fas fa-route"></i>
      <span>Travel Itinerary Details</span>
    </div>
    
    <div class="details-grid">
      <div class="detail-card">
        <div class="detail-icon">
          <i class="fas fa-calendar-day"></i>
        </div>
        <div class="detail-label">Start Date</div>
        <div class="detail-value">
          ${new Date(H.startDate).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
        </div>
      </div>
      
      <div class="detail-card">
        <div class="detail-icon">
          <i class="fas fa-clock"></i>
        </div>
        <div class="detail-label">Duration</div>
        <div class="detail-value">${H.duration} Days</div>
      </div>
      
      <div class="detail-card">
        <div class="detail-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="detail-label">Travelers</div>
        <div class="detail-value">${H.adults} Adults, ${H.children} Children</div>
      </div>
      
      <div class="detail-card">
        <div class="detail-icon">
          <i class="fas fa-box"></i>
        </div>
        <div class="detail-label">Package ID</div>
        <div class="detail-value">${H.packageId}</div>
      </div>
      
      <div class="detail-card">
        <div class="detail-icon">
          <i class="fas fa-wallet"></i>
        </div>
        <div class="detail-label">Total Price</div>
        <div class="detail-value price-highlight">
          ₹${H.quotedPrice||"TBD"}
        </div>
      </div>
      
      <div class="detail-card">
        <div class="detail-icon">
          <i class="fas fa-flag"></i>
        </div>
        <div class="detail-label">Booking Status</div>
        <div class="status-container status-${H.status}">
          <i class="fas fa-circle" style="font-size: 8px;"></i>
          ${H.status.toUpperCase()}
        </div>
      </div>
    </div>
    
   <div style="
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
">

  <!-- Created date (always show) -->
  ${H.status==="Confirmed"&&H.createdAt?`
  <div style="margin-top: 15px; display: flex; align-items: center; gap: 8px;">
    <i class="fas fa-calendar-plus"></i>
    Booking Created on ${new Date(H.createdAt).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
  </div>
  `:""}>

  <!-- Confirmed date (show only if confirmed) -->
   ${H.status==="Confirmed"&&H.updatedAt?`
  <div style="margin-top: 15px; display: flex; align-items: center; gap: 8px;">
    <i class="fas fa-check-circle" style="color: green;"></i>
    Booking Confirmed on ${new Date(H.updatedAt).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
  </div>
  `:""}




  </div>

  <!-- Special Requests -->
  ${H.notes?`
  <div class="requests-section">
    <div class="section-title">
      <i class="fas fa-sticky-note"></i>
      <span>Special Requests & Notes</span>
    </div>
    <div style="background: white; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.8;">
      ${H.notes}
    </div>
  </div>
  `:""}

  <!-- Footer -->
  <div class="itinerary-footer">
    <h3 style="margin-bottom: 15px; font-weight: 500; font-size: 1.8rem;">DESIVDESI <span style="font-weight: 250;font-size: 1rem;">Tours & Travel</span></h3>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>tours.desivdesi@gmail</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+91 7888251550</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>123 Plot No.24 Amar society-N8 cidco  Chh.Sambhajinagar</span>
      </div>
    </div>
    <p style="font-size: 13px; opacity: 0.9; margin-top: 15px;">
      Creating unforgettable travel experiences with passion and professionalism
    </p>
    <div class="terms">
      <p>This document serves as your official travel itinerary. Please present it during check-in.</p>
      <p style="margin-top: 5px;">© ${new Date().getFullYear()} DESIVDESI tours & travel. All rights reserved.</p>
    </div>
  </div>

  <!-- Print Button -->
  <div class="print-actions">
    <button class="print-btn" onclick="window.print()">
      <i class="fas fa-print"></i>
      Print Itinerary
    </button>
    <p style="font-size: 12px; color: #666; margin-top: 10px;">
      For best results, use landscape orientation when printing
    </p>
  </div>

</div>

<script>
  // Auto-print option (uncomment if needed)
  // window.onload = () => window.print();
<\/script>
</body>
</html>
  `),I.document.close()};return a.jsxs("div",{style:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundColor:"#f8f9fa",minHeight:"100vh",color:"#333",lineHeight:"1.6"},children:[a.jsx("header",{style:{background:"white",borderBottom:"1px solid #e9ecef",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",padding:"20px 0"},children:a.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"2rem",color:"#2c3e50",marginBottom:"5px",margin:"0 0 5px 0"},children:"Booking Management"}),a.jsx("p",{style:{color:"#6c757d",fontSize:"0.9rem",margin:0},children:"Manage your travel bookings and reservations"})]}),a.jsx("div",{style:{display:"flex",gap:"10px"},children:a.jsxs("button",{style:{padding:"10px 20px",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",fontFamily:"inherit",background:u==="bookings"?"#007bff":"#f8f9fa",color:u==="bookings"?"white":"#495057"},onClick:()=>d("bookings"),children:[a.jsx("span",{children:"👁️"})," Total Bookings (",Array.isArray(w)?w.length:0,")"]})})]})})}),a.jsx("main",{style:{padding:"30px 0"},children:a.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},children:u==="bookings"?a.jsxs("div",{children:[a.jsx("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",marginBottom:"30px"},children:a.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{style:{flex:"1",position:"relative",minWidth:"250px"},children:[a.jsx("span",{style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#6c757d"},children:"🔍"}),a.jsx("input",{type:"text",placeholder:"Search bookings...",value:f,onChange:H=>p(H.target.value),style:{width:"100%",padding:"12px 12px 12px 40px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none"}})]}),a.jsx("div",{children:a.jsxs("select",{value:g,onChange:H=>b(H.target.value),style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",background:"white",cursor:"pointer",fontSize:"0.9rem",fontFamily:"inherit"},children:[a.jsx("option",{value:"all",children:"All Status"}),a.jsx("option",{value:"confirmed",children:"Confirmed"}),a.jsx("option",{value:"pending",children:"Pending"}),a.jsx("option",{value:"cancelled",children:"Cancelled"})]})})]})}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))",gap:"25px"},children:w.map(H=>{const I=j.has(H._id);return H.user,a.jsxs("div",{style:{background:"white",borderRadius:"12px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)",overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"20px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"15px"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"700",color:"#2c3e50",marginBottom:"5px",display:"flex"},children:H.packageName||"Untitled Package"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",color:"#6c757d",fontSize:"0.9rem"},children:[a.jsx("span",{children:"📍"}),H?.destination]}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#28a745",fontWeight:"600",gap:"4px"},children:["👤 Generated by: ",H.fullName||"Unknown"]})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"5px"},children:a.jsx("span",{style:{padding:"5px 12px",borderRadius:"20px",fontSize:"0.8rem",fontWeight:"600",textTransform:"uppercase",..._(H.status)},children:H.status.charAt(0).toUpperCase()+H.status.slice(1)})})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"15px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem",color:"#495057"},children:[a.jsx("span",{children:"📧"}),a.jsx("span",{children:H.email||"NA"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.9rem",color:"#495057"},children:[a.jsx("span",{children:"📞"}),a.jsx("span",{children:H.mobile})]})]}),I&&a.jsxs("div",{style:{borderTop:"1px solid #f8f9fa",marginTop:"15px",paddingTop:"15px"},children:[a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#2c3e50",marginBottom:"10px"},children:"Booking Information"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"15px"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Package ID"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:H.packageId})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:[a.jsx("span",{children:"📞"})," Alternate Contact"]}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:H.alternateMobile||"NA"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Booking ID"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:H.bookingId})]})]})]}),a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#2c3e50",marginBottom:"10px"},children:"Travel Details"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"15px"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Start Date"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:new Date(H.startDate).toLocaleDateString()})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Duration"}),a.jsxs("div",{style:{fontWeight:"600",color:"#2c3e50"},children:[H.duration," days"]})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Travelers"}),a.jsxs("div",{style:{fontWeight:"600",color:"#2c3e50"},children:[H.adults," Adults + ",H.children," Children"]})]}),H.quotedPrice&&a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Price"}),a.jsxs("div",{style:{fontWeight:"600",color:"#28a745"},children:["$",H.quotedPrice]})]})]})]}),H.notes&&a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#2c3e50",marginBottom:"10px"},children:"Special Requests"}),a.jsx("div",{style:{background:"#f8f9fa",padding:"15px",borderRadius:"8px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[a.jsx("span",{children:"📝"}),a.jsx("p",{style:{margin:"0",color:"#495057",fontSize:"0.9rem"},children:H.notes})]})})]}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#6c757d",textAlign:"center",paddingTop:"15px",borderTop:"1px solid #f8f9fa"},children:["Booking created: ",new Date(H.createdAt).toLocaleDateString()]})]})]}),a.jsxs("div",{style:{padding:"15px 20px",background:"#f8f9fa",display:"flex",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("button",{onClick:()=>P(H._id),style:{padding:"8px 12px",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",fontSize:"0.8rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",fontFamily:"inherit",background:"#007bff",color:"white",flex:"1"},children:[a.jsx("span",{children:I?"⬆️":"⬇️"}),I?"Less":"More"]}),a.jsxs("button",{onClick:()=>le(H),style:{padding:"8px 12px",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",fontSize:"0.8rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",fontFamily:"inherit",background:"#6c757d",color:"white"},children:[a.jsx("span",{children:"🖨️"}),"Print"]}),a.jsxs("button",{onClick:()=>J(H._id),style:{padding:"8px 12px",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",fontSize:"0.8rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",fontFamily:"inherit",background:"#dc3545",color:"white"},children:[a.jsx("span",{children:"🗑️"}),"Delete"]})]})]},H._id)})})]}):a.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#6c757d"},children:[a.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"10px",color:"#2c3e50"},children:"No bookings found"}),a.jsx("p",{children:"Try adjusting your search or filter criteria"})]})})}),a.jsx("footer",{style:{background:"white",borderTop:"1px solid #e9ecef",padding:"20px 0",textAlign:"center",color:"#6c757d",fontSize:"0.9rem"},children:a.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px"},children:a.jsxs("p",{style:{margin:0},children:["© ",new Date().getFullYear()," Booking Management System. All rights reserved."]})})}),a.jsx("style",{jsx:!0,children:`
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
            background-color: #f8f9fa;
        }
        .print-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 30px;
        }
        .company-header {
            text-align: center;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 20px;
            margin-bottom: 25px;
        }
        .company-name {
            font-size: 28px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .company-tagline {
            font-size: 16px;
            color: #7f8c8d;
            margin-bottom: 5px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 25px;
        }
        .booking-title {
            font-size: 24px;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .generated-date {
            color: #7f8c8d;
            font-size: 14px;
        }
        .section {
            margin: 25px 0;
            padding-bottom: 15px;
            border-bottom: 1px solid #ecf0f1;
        }
        .section h3 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
            margin-bottom: 15px;
            font-size: 18px;
        }
        .booking-info p {
            margin: 10px 0;
            display: flex;
        }
        .label {
            font-weight: bold;
            min-width: 150px;
            color: #2c3e50;
        }
        .status {
            padding: 5px 12px;
            border-radius: 20px;
            display: inline-block;
            font-weight: bold;
            font-size: 12px;
        }
        .confirmed { background-color: #d4edda; color: #155724; }
        .pending { background-color: #fff3cd; color: #856404; }
        .cancelled { background-color: #f8d7da; color: #721c24; }
        .notes {
            background-color: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #3498db;
            border-radius: 4px;
            margin-top: 10px;
        }
        .company-footer {
            margin-top: 40px;
            text-align: center;
            padding-top: 20px;
            border-top: 2px solid #2c3e50;
            color: #7f8c8d;
        }
        .website {
            font-size: 16px;
            color: #3498db;
            font-weight: bold;
            margin: 10px 0;
            text-decoration: none;
            display: inline-block;
        }
        .contact-info {
            font-size: 14px;
            margin: 5px 0;
        }
        .print-btn {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 20px auto;
            display: block;
            transition: background-color 0.3s;
        }
        .print-btn:hover {
            background-color: #2980b9;
        }
        @media print {
            body {
                background-color: white;
                padding: 0;
            }
            .print-container {
                box-shadow: none;
                padding: 0;
            }
            .print-btn {
                display: none;
            }
        `})]})},Ry=()=>{const[l,o]=x.useState([]),[u,d]=x.useState(!1),[f,p]=x.useState(""),{user:g}=x.useContext(rt);x.useEffect(()=>{(async()=>{d(!0);try{const N=await He.get(`/favourites/${g._id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});o(N.data)}catch(N){console.error("Failed to fetch favourites",N),o([]),p("Could not load favourites.")}finally{d(!1)}})()},[g._id]);const b=Array.isArray(l),j=b.length,v=w=>`$${w.toLocaleString()}`;return a.jsxs("div",{className:"favorites-page",children:[a.jsx("div",{className:"p-6 relative",children:f&&a.jsx("p",{className:"text-red-500",children:f})}),a.jsxs("section",{className:"favorites-hero mt-5",children:[a.jsx("div",{className:"hero-overlay"}),a.jsx("div",{className:"container position-relative",children:a.jsx("div",{className:"row align-items-center min-vh-50",children:a.jsx("div",{className:"col-lg-8 mx-auto text-center",children:a.jsxs("div",{className:"hero-content",children:[a.jsx("div",{className:"favorites-icon mb-4",children:a.jsx("i",{className:"bi bi-heart-fill"})}),a.jsxs("h1",{className:"hero-title",children:["Your Favorite ",a.jsx("span",{className:"text-warning",children:"Destinations"})]}),a.jsx("p",{className:"hero-subtitle",children:"Your handpicked collection of dream destinations and unforgettable experiences"}),a.jsxs("div",{className:"hero-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-number",children:j}),a.jsx("div",{className:"stat-label",children:"Saved Packages"})]}),a.jsx("div",{className:"stat-card",children:a.jsx("div",{className:"stat-label",children:"Total Days"})}),a.jsx("div",{className:"stat-card",children:a.jsx("div",{className:"stat-label",children:"Total Value"})})]})]})})})})]}),a.jsx("section",{className:"packages-section",children:a.jsx("div",{className:"container",children:u?a.jsx("p",{children:"Loading favourites..."}):b.length>0?a.jsx("div",{className:"packages-grid grid-view",children:b.map((w,N)=>a.jsxs("div",{className:"package-card",children:[a.jsx("img",{src:w.img,alt:w.title}),a.jsx("h5",{children:w.title}),a.jsx("p",{children:w.category}),a.jsxs("p",{children:["Rating: ",w.rating," ⭐"]}),a.jsxs("p",{children:["Duration: ",w.duration," days"]}),a.jsxs("p",{children:["Price: ",v(w.price)]})]},w._id))}):a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"🏝️"}),a.jsx("h3",{children:"No favorite destinations found"}),a.jsx("p",{children:"Start exploring and save your dream destinations by clicking the heart icon."})]})})}),"export default MyFavourite;",a.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
        }

        /* Layout */
        .favorites-page {
          background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
        }

        /* Hero Section */
        .favorites-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
        }

        .min-vh-50 {
          min-height: 50vh;
        }

        .favorites-icon {
          font-size: 4rem;
          color: #fbbf24;
          animation: heartBeat 2s ease-in-out infinite;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05); }
          75% { transform: scale(0.95); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          text-align: center;
          color: white;
          min-width: 140px;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fbbf24;
          display: block;
        }

        .stat-label {
          font-size: 0.95rem;
          opacity: 0.9;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        /* Controls Section */
        .controls-section {
          padding: 2rem 0;
          margin-top: -60px;
          position: relative;
          z-index: 10;
        }

        .controls-card {
          background: white;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* Search */
        .search-box {
          position: relative;
        }

        .search-input {
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 1rem 3rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
        }

        .search-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          background: white;
        }

        .search-icon {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 1.1rem;
        }

        .search-clear {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          background: #ef4444;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .search-clear:hover {
          background: #dc2626;
          transform: translateY(-50%) scale(1.1);
        }

        /* Filter Tabs */
        .filter-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-tab {
          background: #f1f5f9;
          border: 2px solid transparent;
          padding: 0.9rem 1.4rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .filter-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .filter-tab:hover::before {
          left: 100%;
        }

        .filter-tab:hover {
          background: #e2e8f0;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-color: #667eea;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3);
        }

        .category-emoji {
          font-size: 1.1rem;
        }

        /* Advanced Filters */
        .filter-panel {
          background: #f8fafc;
          border-radius: 16px;
          padding: 2rem;
          margin-top: 1.5rem;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tag-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag-filter {
          background: white;
          border: 2px solid #e2e8f0;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #64748b;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tag-filter:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }

        .tag-filter.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .price-range input[type="range"] {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e2e8f0;
          outline: none;
          -webkit-appearance: none;
        }

        .price-range input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #667eea;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        /* Sort & View Controls */
        .sort-select {
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          padding: 0.8rem 1rem;
          background: white;
          font-weight: 500;
          min-width: 180px;
        }

        .view-toggle {
          display: flex;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          background: white;
        }

        .view-btn {
          background: transparent;
          border: none;
          padding: 0.8rem 1rem;
          color: #64748b;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 48px;
        }

        .view-btn:hover {
          background: #f1f5f9;
        }

        .view-btn.active {
          background: #667eea;
          color: white;
        }

        /* Compare Bar */
        .compare-bar {
          background: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          animation: slideDown 0.3s ease;
        }

        /* Packages Grid */
        .packages-section {
          padding: 4rem 0;
        }

        .packages-grid {
          display: grid;
          gap: 2.5rem;
        }

        .packages-grid.grid-view {
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }

        .packages-grid.list-view {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        /* Package Cards */
        .package-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
          transform: translateY(30px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .package-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        /* Package Images */
        .package-image-wrapper {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .package-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .package-card:hover .package-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.4) 0%,
            transparent 30%,
            transparent 70%,
            rgba(0,0,0,0.6) 100%
          );
        }

        /* Badges */
        .package-badges {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .difficulty-badge,
        .discount-badge,
        .availability-badge {
          padding: 0.4rem 1rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          backdrop-filter: blur(10px);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .discount-badge {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        /* Action Buttons */
        .image-actions {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .action-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.95);
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .action-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .favorite-btn.active {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          animation: heartPulse 0.6s ease;
        }

        .compare-btn.active {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
        }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        /* Package Content */
        .package-content {
          padding: 2.5rem;
        }

        .package-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .package-location {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #64748b;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .package-location i {
          color: #ef4444;
          font-size: 1.1rem;
        }

        /* Meta Information */
        .package-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        .meta-item i {
          color: #667eea;
          font-size: 1rem;
        }

        /* Highlights */
        .package-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .highlight-tag {
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          color: #059669;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid #a7f3d0;
        }

        .highlight-tag i {
          font-size: 0.75rem;
        }

        .more-highlights {
          background: #f1f5f9;
          color: #64748b;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid #e2e8f0;
        }

        /* Package Features */
        .package-features {
          margin-bottom: 1.5rem;
        }

        .feature-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Rating */
        .package-rating {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding: 1.25rem;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .stars i {
          color: #fbbf24;
          font-size: 1rem;
        }

        .rating-text {
          margin-left: 0.6rem;
          font-weight: 700;
          color: #1e293b;
          font-size: 1.05rem;
        }

        .review-count {
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Package Footer */
        .package-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f1f5f9;
        }

        .price-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .current-price {
          font-size: 2rem;
          font-weight: 800;
          color: #059669;
          line-height: 1;
        }

        .original-price {
          font-size: 1.1rem;
          color: #94a3b8;
          text-decoration: line-through;
          font-weight: 500;
        }

        .price-per {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .action-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .action-buttons .btn {
          border-radius: 12px;
          font-weight: 600;
          padding: 0.75rem 1.25rem;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .action-buttons .btn:hover {
          transform: translateY(-2px);
        }

        .added-date {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #64748b;
          padding-top: 1.5rem;
          border-top: 1px solid #f1f5f9;
          font-weight: 500;
        }

        .added-date i {
          color: #ef4444;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 5rem 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .empty-icon {
          font-size: 6rem;
          margin-bottom: 2rem;
          opacity: 0.8;
        }

        .empty-state h3 {
          color: #1e293b;
          margin-bottom: 1.5rem;
          font-size: 2rem;
          font-weight: 700;
        }

        .empty-state p {
          color: #64748b;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .empty-actions {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .empty-actions .btn {
          border-radius: 14px;
          font-weight: 600;
          padding: 1rem 2rem;
        }

        /* Compare Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .compare-modal {
          background: white;
          border-radius: 24px;
          max-width: 90vw;
          max-height: 90vh;
          overflow: auto;
          animation: modalSlide 0.3s ease;
        }

        @keyframes modalSlide {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .modal-header {
          padding: 2rem 2.5rem 1rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #64748b;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #f1f5f9;
          color: #1e293b;
        }

        .modal-body {
          padding: 2rem 2.5rem;
        }

        .compare-table {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .compare-column {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          background: #fafafa;
        }

        .compare-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .compare-column h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .compare-details {
          space-y: 0.75rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.9rem;
        }

        .detail-row strong {
          color: #374151;
        }

        /* Loading Animation */
        .travel-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .loading-container {
          position: relative;
        }

        .travel-loader {
          position: relative;
          width: 250px;
          height: 120px;
          margin: 0 auto 2rem;
        }

        .plane {
          position: absolute;
          font-size: 2.5rem;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          animation: fly 3s ease-in-out infinite;
        }

        .cloud {
          position: absolute;
          font-size: 1.8rem;
          opacity: 0.7;
          animation: float 4s ease-in-out infinite;
        }

        .cloud1 {
          top: 15%;
          left: 25%;
          animation-delay: -1s;
        }

        .cloud2 {
          top: 65%;
          left: 55%;
          animation-delay: -2s;
        }

        .cloud3 {
          top: 5%;
          right: 15%;
          animation-delay: -0.5s;
        }

        @keyframes fly {
          0%, 100% { 
            left: 0;
            transform: translateY(-50%) rotate(0deg);
          }
          50% { 
            left: calc(100% - 50px);
            transform: translateY(-50%) rotate(5deg);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-15px) scale(1.1);
            opacity: 1;
          }
        }

        /* List View Styles */
        .packages-grid.list-view .package-card {
          display: flex;
          flex-direction: row;
          height: auto;
          max-height: 320px;
        }

        .packages-grid.list-view .package-image-wrapper {
          width: 350px;
          height: auto;
          flex-shrink: 0;
        }

        .packages-grid.list-view .package-content {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .packages-grid.list-view .package-footer {
          margin-top: auto;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .packages-grid.grid-view {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            gap: 1.5rem;
          }

          .stat-card {
            min-width: 120px;
            padding: 1.5rem 1rem;
          }

          .controls-card {
            padding: 2rem;
          }

          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .filter-tabs::-webkit-scrollbar {
            display: none;
          }

          .packages-grid.grid-view {
            grid-template-columns: 1fr;
          }

          .packages-grid.list-view .package-card {
            flex-direction: column;
            max-height: none;
          }

          .packages-grid.list-view .package-image-wrapper {
            width: 100%;
            height: 250px;
          }

          .package-meta {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .package-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
          }

          .action-buttons {
            width: 100%;
            justify-content: center;
          }

          .compare-table {
            grid-template-columns: 1fr;
          }

          .modal-body {
            padding: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }

          .packages-grid {
            gap: 1.5rem;
          }

          .package-content {
            padding: 2rem 1.5rem;
          }

          .controls-card {
            padding: 1.5rem;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .stat-card {
            min-width: 200px;
          }
        }

        /* Button Variants */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #5a67d8, #6b46c1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-outline-primary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-outline-primary:hover {
          background: #667eea;
          color: white;
        }

        .btn-warning {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: white;
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        }

        .btn-warning:hover {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }

        .btn-outline-secondary {
          background: transparent;
          color: #64748b;
          border: 2px solid #e2e8f0;
        }

        .btn-outline-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .btn-sm {
          padding: 0.6rem 1.2rem;
          font-size: 0.875rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        /* Utility Classes */
        .text-success { color: #059669 !important; }
        .text-warning { color: #d97706 !important; }
        .text-danger { color: #dc2626 !important; }
        .bg-success { background-color: #10b981 !important; }
        .bg-warning { background-color: #f59e0b !important; }
        .bg-danger { background-color: #ef4444 !important; }

        /* Animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Focus styles */
        .btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
        }

        input:focus,
        select:focus {
          outline: none;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `})]})},Oy=void 0,Dy=({onClose:l})=>{const{user:o,token:u}=x.useContext(rt),[d,f]=x.useState([]),[p,g]=x.useState("enquiries"),[b,j]=x.useState(""),[v,w]=x.useState("all"),[N,T]=x.useState(new Set),[M,O]=x.useState(!1),[L,B]=x.useState(!0),[J,_]=x.useState(null),[P,le]=x.useState(!1),[H,I]=x.useState([]),[E,re]=x.useState({packageName:"",destination:"",enquiryType:"Package Enquiry",message:"",startDate:"",Message:"",duration:1,adults:1,children:0,seniors:0,budget:"",generatedBy:{fullName:o?.name||"",email:o?.email||"",phone:""}}),[Q,ce]=x.useState({});x.useEffect(()=>{xe()},[o]);const xe=async()=>{try{if(!o){le("User not logged in");return}const k=localStorage.getItem("token");if(!k){le("Token missing, please login again.");return}B(!0);const te=o.isAdmin?"/bookings":`/bookings/user/${o._id}`,{data:ue}=await He.get(te,{headers:{Authorization:`Bearer ${k}`}});ue.success?I(ue.bookings):le(ue.message||"Failed to fetch enquiries")}catch(k){console.error(k),se("Failed to load enquiries","error")}finally{B(!1)}};v==="all"||d.filter(k=>k.status===v);const se=(k,te="success")=>{_({message:k,type:te}),setTimeout(()=>_(null),5e3)},Re=async(k,te)=>{if(o.isAdmin)try{(await He.put(`/bookings/update-status/${k}`,{status:te},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}})).data.success&&(I(me=>me.map(ge=>ge._id===k?{...ge,status:te}:ge)),se(`Booking status updated to ${te}`))}catch(ue){console.error(ue),se("Failed to update status","error")}},ee=k=>{const{name:te,value:ue}=k.target;if(te.startsWith("generatedBy.")){const me=te.split(".")[1];re(ge=>({...ge,generatedBy:{...ge.generatedBy,[me]:ue}})),Q.generatedBy?.[me]&&ce(ge=>({...ge,generatedBy:{...ge.generatedBy,[me]:""}}))}else re(me=>({...me,[te]:ue})),Q[te]&&ce(me=>({...me,[te]:""}))},ae=()=>{const k={generatedBy:{}};E.packageName.trim()||(k.packageName="Package name required"),E.destination.trim()||(k.destination="Destination required"),E.duration||(k.duration="Duration is required"),E.generatedBy.fullName.trim()||(k.generatedBy.fullName="Full name required"),E.generatedBy.email.trim()||(k.generatedBy.email="Email required"),E.generatedBy.phone.trim()||(k.generatedBy.phone="Phone required");const te=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;E.generatedBy.email&&!te.test(E.generatedBy.email)&&(k.generatedBy.email="Enter a valid email");const ue=/^[+]?[0-9]{10,15}$/;return E.generatedBy.phone&&!ue.test(E.generatedBy.phone.replace(/\s/g,""))&&(k.generatedBy.phone="Enter a valid phone number"),Object.keys(k.generatedBy).length===0&&delete k.generatedBy,ce(k),Object.keys(k).length===0},c=async k=>{if(k.preventDefault(),!!ae()){O(!0);try{const te={...E,userId:o._id,fullName:E.generatedBy.fullName,email:E.generatedBy.email,mobile:E.generatedBy.phone,Message:E.message,duration:Number(E.duration),adults:Number(E.adults)||0,children:Number(E.children)||0,seniors:Number(E.seniors)||0,startdate:Date.parse(E.startDate)||null},ue=await He.post("/bookings/create",te,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`}});ue.data.success&&(I(me=>[ue.data.booking,...me]),m(),g("enquiries"),se("Enquiry submitted successfully"))}catch(te){console.error(te),se("Failed to submit enquiry","error")}finally{O(!1)}}},m=()=>{re({packageName:"",destination:"",enquiryType:"Package Enquiry",message:"",startDate:"",duration:1,adults:1,children:0,seniors:0,budget:"",generatedBy:{fullName:o?.name||"",email:o?.email||"",phone:""}}),ce({})},z=k=>{T(te=>{const ue=new Set(te);return ue.has(k)?ue.delete(k):ue.add(k),ue})},Z=async k=>{if(window.confirm("Are you sure you want to delete this enquiry?"))try{(await Pe.delete(`${Oy}/bookings/delete/${k}`)).data.success&&(I(ue=>ue.filter(me=>me._id!==k)),se("Enquiry deleted successfully"))}catch(te){console.error(te),se("Failed to delete enquiry","error")}},R=k=>{const te=(k.adults||0)+(k.children||0)+(k.seniors||0),ue=[k.adults>0&&`${k.adults} adult${k.adults>1?"s":""}`,k.children>0&&`${k.children} child${k.children>1?"ren":""}`,k.seniors>0&&`${k.seniors} senior${k.seniors>1?"s":""}`].filter(Boolean).join(", ");return{total:te,breakdown:ue}},S=k=>{switch((k||"").toLowerCase()){case"pending":return{background:"#fff3cd",color:"#856404"};case"responded":return{background:"#d4edda",color:"#155724"};case"closed":return{background:"#f8d7da",color:"#721c24"};case"confirmed":return{background:"#d1ecf1",color:"#0c5460"};default:return{background:"#e2e3e5",color:"#383d41"}}},U=k=>{if(!k)return"N/A";const te=new Date(k);return isNaN(te.getTime())?"Invalid date":te.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},ne={pending:H.filter(k=>k.status?.toLowerCase()==="pending").length,responded:H.filter(k=>k.status?.toLowerCase()==="responded").length,confirmed:H.filter(k=>k.status?.toLowerCase()==="confirmed").length,closed:H.filter(k=>k.status?.toLowerCase()==="closed").length},oe=H.filter(k=>{const te=b.toLowerCase().trim(),ue=k?.packageName?.toLowerCase().includes(te)||k?.destination?.toLowerCase().includes(te)||k?.enquiryType?.toLowerCase().includes(te)||k?.message?.toLowerCase().includes(te)||k?.name?.toLowerCase().includes(te)||k?.fullName?.toLowerCase().includes(te)||k?.bookingId?.toLowerCase().includes(te),me=v==="all"||k?.status?.toLowerCase()===v.toLowerCase();return ue&&me});return L?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"400px",background:"white",borderRadius:"12px"},children:a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{width:"50px",height:"50px",border:"4px solid #f3f3f3",borderTop:"4px solid #007bff",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 20px"}}),a.jsx("p",{style:{color:"#6c757d",fontSize:"1.1rem"},children:"Loading your enquiries..."})]})}):a.jsxs("div",{style:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundColor:"#f8f9fa",minHeight:"60vh",color:"#333",lineHeight:"1.6",borderRadius:"8px",overflow:"hidden",position:"relative",boxShadow:"0 10px 40px rgba(0,0,0,0.2)",maxHeight:"95vh",display:"flex",flexDirection:"column"},children:[a.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}),J&&a.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",padding:"15px 20px",borderRadius:"8px",color:"white",fontWeight:"600",zIndex:10001,animation:"slideIn 0.3s ease",background:J.type==="error"?"#dc3545":"#28a745",boxShadow:"0 4px 15px rgba(0,0,0,0.3)",maxWidth:"300px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{children:J.type==="error"?"❌":"✅"}),J.message]}),a.jsx("button",{onClick:()=>_(null),style:{position:"absolute",top:"5px",right:"8px",background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"20px",lineHeight:"1"},children:"×"})]}),a.jsx("header",{style:{background:"linear-gradient(135deg, #007bff, #0056b3)",color:"white",padding:"20px 30px",flexShrink:0},children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.8rem",margin:"0 0 5px 0"},children:"My Travel Enquiries"}),a.jsxs("p",{style:{margin:0,opacity:.9,fontSize:"0.9rem"},children:["Track and manage your travel enquiries • Welcome, ",o?.name||"Guest"]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("button",{style:{padding:"10px 20px",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"8px",cursor:"pointer",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",fontFamily:"inherit",fontSize:"0.9rem",background:p==="enquiries"?"rgba(255,255,255,0.2)":"transparent",color:"white",transition:"all 0.2s ease"},onClick:()=>g("enquiries"),onMouseEnter:k=>k.target.style.background="rgba(255,255,255,0.2)",onMouseLeave:k=>k.target.style.background=p==="enquiries"?"rgba(255,255,255,0.2)":"transparent",children:["📋 View Enquiries (",H.length,")"]}),a.jsx("button",{style:{padding:"10px 20px",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"8px",cursor:"pointer",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",fontFamily:"inherit",fontSize:"0.9rem",background:p==="new-enquiry"?"rgba(255,255,255,0.2)":"transparent",color:"white",transition:"all 0.2s ease"},onClick:()=>g("new-enquiry"),onMouseEnter:k=>k.target.style.background="rgba(255,255,255,0.2)",onMouseLeave:k=>k.target.style.background=p==="new-enquiry"?"rgba(255,255,255,0.2)":"transparent",children:"➕ New Enquiry"}),l&&a.jsx("button",{style:{padding:"10px 15px",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontFamily:"inherit",fontSize:"0.9rem",background:"transparent",color:"white",transition:"all 0.2s ease"},onClick:l,onMouseEnter:k=>k.target.style.background="rgba(255,255,255,0.2)",onMouseLeave:k=>k.target.style.background="transparent",children:"✕"})]})]})}),a.jsx("main",{style:{padding:"30px",overflow:"auto",flex:1},children:p==="enquiries"?a.jsxs("div",{children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"20px",marginBottom:"30px"},children:[a.jsxs("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",textAlign:"center",transition:"transform 0.2s ease",cursor:"pointer"},onMouseEnter:k=>k.currentTarget.style.transform="translateY(-2px)",onMouseLeave:k=>k.currentTarget.style.transform="translateY(0)",children:[a.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"#007bff"},children:H.length}),a.jsx("div",{style:{color:"#6c757d",fontSize:"0.9rem"},children:"Total Enquiries"})]}),a.jsxs("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",textAlign:"center",transition:"transform 0.2s ease",cursor:"pointer"},onMouseEnter:k=>k.currentTarget.style.transform="translateY(-2px)",onMouseLeave:k=>k.currentTarget.style.transform="translateY(0)",children:[a.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"#856404"},children:ne.pending||0}),a.jsx("div",{style:{color:"#6c757d",fontSize:"0.9rem"},children:"Pending"})]}),a.jsxs("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",textAlign:"center",transition:"transform 0.2s ease",cursor:"pointer"},onMouseEnter:k=>k.currentTarget.style.transform="translateY(-2px)",onMouseLeave:k=>k.currentTarget.style.transform="translateY(0)",children:[a.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"#0c5460"},children:ne.confirmed||0}),a.jsx("div",{style:{color:"#6c757d",fontSize:"0.9rem"},children:"Confirmed"})]}),a.jsxs("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",textAlign:"center",transition:"transform 0.2s ease",cursor:"pointer"},onMouseEnter:k=>k.currentTarget.style.transform="translateY(-2px)",onMouseLeave:k=>k.currentTarget.style.transform="translateY(0)",children:[a.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"#155724"},children:ne.responded||0}),a.jsx("div",{style:{color:"#6c757d",fontSize:"0.9rem"},children:"Responded"})]}),a.jsxs("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",textAlign:"center",transition:"transform 0.2s ease",cursor:"pointer"},onMouseEnter:k=>k.currentTarget.style.transform="translateY(-2px)",onMouseLeave:k=>k.currentTarget.style.transform="translateY(0)",children:[a.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"#721c24"},children:ne.closed||0}),a.jsx("div",{style:{color:"#6c757d",fontSize:"0.9rem"},children:"Closed"})]})]}),a.jsx("div",{style:{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",marginBottom:"30px"},children:a.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{style:{flex:"1",position:"relative",minWidth:"250px"},children:[a.jsx("input",{type:"text",placeholder:"Search by package, destination, Name, BookingId...",value:b,onChange:k=>j(k.target.value),style:{width:"100%",padding:"12px 15px 12px 40px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease",boxSizing:"border-box"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef"}),a.jsx("span",{style:{position:"absolute",left:"15px",top:"50%",transform:"translateY(-50%)",color:"#6c757d"},children:"🔍"})]}),a.jsx("div",{children:a.jsxs("select",{value:v,onChange:k=>w(k.target.value),style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",background:"white",cursor:"pointer",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef",children:[a.jsx("option",{value:"all",children:"All Statuses"}),a.jsx("option",{value:"pending",children:"Pending"}),a.jsx("option",{value:"confirmed",children:"Confirmed"}),a.jsx("option",{value:"responded",children:"Responded"}),a.jsx("option",{value:"closed",children:"Closed"})]})})]})}),oe.length>0?a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))",gap:"25px"},children:oe.map(k=>{const te=N.has(k._id),ue=R(k);return a.jsxs("div",{style:{background:"white",borderRadius:"12px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)",overflow:"hidden",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onMouseEnter:me=>{me.currentTarget.style.transform="translateY(-2px)",me.currentTarget.style.boxShadow="0 8px 25px rgba(0,0,0,0.15)"},onMouseLeave:me=>{me.currentTarget.style.transform="translateY(0)",me.currentTarget.style.boxShadow="0 4px 15px rgba(0,0,0,0.1)"},children:[a.jsxs("div",{style:{padding:"20px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"15px"},children:[a.jsxs("div",{style:{flex:1},children:[a.jsxs("div",{style:{fontSize:"1.2rem",fontWeight:"700",color:"#2c3e50",marginBottom:"5px"},children:["📦 ",k.packageName||"Untitled Package"]}),a.jsxs("div",{style:{color:"#6c757d",fontSize:"0.9rem",marginBottom:"5px"},children:["📍 ",k.destination||"No destination"]}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#007bff",fontWeight:"600",marginBottom:"8px"},children:k.enquiryType}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#28a745",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:["👤 Generated by: ",k.fullName||"Unknown"]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"8px"},children:[o?.isAdmin?a.jsxs("select",{value:k.status,onChange:me=>Re(k._id,me.target.value),onClick:me=>me.stopPropagation(),style:{padding:"5px 10px",borderRadius:"20px",fontSize:"0.8rem",fontWeight:"600",textTransform:"uppercase",border:"none",cursor:"pointer",...S(k.status)},children:[a.jsx("option",{value:"Pending",children:"Pending"}),a.jsx("option",{value:"Responded",children:"Responded"}),a.jsx("option",{value:"Confirmed",children:"Confirmed"}),a.jsx("option",{value:"Closed",children:"Closed"})]}):a.jsx("span",{style:{padding:"5px 12px",borderRadius:"20px",fontSize:"0.8rem",fontWeight:"600",textTransform:"uppercase",...S(k.status)},children:k.status}),o?.isAdmin&&a.jsx("button",{onClick:me=>{me.stopPropagation(),Z(k._id)},style:{background:"#dc3545",color:"white",border:"none",borderRadius:"4px",padding:"4px 8px",fontSize:"0.7rem",cursor:"pointer",transition:"background 0.2s ease"},onMouseEnter:me=>me.target.style.background="#c82333",onMouseLeave:me=>me.target.style.background="#dc3545",children:"🗑️ Delete"})]})]}),a.jsx("div",{style:{marginBottom:"15px"},children:a.jsx("p",{style:{margin:"0",fontSize:"0.9rem",color:"#495057",lineHeight:"1.5",display:"-webkit-box",WebkitLineClamp:te?"unset":2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:k.message||"No message provided"})}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(100px, 1fr))",gap:"15px",marginBottom:"15px",padding:"15px",background:"#f8f9fa",borderRadius:"8px"},children:[a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"BOOKING ID"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50",fontSize:"0.85rem"},children:k.bookingId||"N/A"})]}),a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Duration"}),a.jsxs("div",{style:{fontWeight:"600",color:"#2c3e50"},children:[k.duration," days"]})]}),a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Travelers"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:ue.total}),a.jsx("div",{style:{fontSize:"0.7rem",color:"#6c757d"},children:ue.breakdown})]}),a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Budget"}),a.jsxs("div",{style:{fontWeight:"600",color:"#28a745"},children:["₹",k.budget||"N/A"]})]})]}),te&&a.jsxs("div",{style:{borderTop:"1px solid #f8f9fa",marginTop:"15px",paddingTop:"15px",animation:"fadeIn 0.3s ease"},children:[a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#2c3e50",marginBottom:"10px"},children:"Generated By"}),a.jsx("div",{style:{background:"#e8f5e8",padding:"15px",borderRadius:"8px",borderLeft:"4px solid #28a745"},children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"15px"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#155724",fontWeight:"600"},children:"Full Name"}),a.jsx("div",{style:{color:"#155724"},children:k.fullName||"Unknown"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#155724",fontWeight:"600"},children:"Email"}),a.jsx("div",{style:{color:"#155724",wordBreak:"break-word"},children:k.email||"N/A"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#155724",fontWeight:"600"},children:"Phone"}),a.jsx("div",{style:{color:"#155724"},children:k.mobile||"N/A"})]})]})})]}),a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#2c3e50",marginBottom:"10px"},children:"Travel Details"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"15px"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Package ID"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:k.packageId||"N/A"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Start Date"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:k.startDate?new Date(k.startDate).toLocaleDateString():"Not specified"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Adults"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:k.adults||1})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Children"}),a.jsx("div",{style:{fontWeight:"600",color:"#2c3e50"},children:k.children||0})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",textTransform:"uppercase"},children:"Senior Citizens"}),a.jsx("div",{style:{fontWeight:"600",color:"#dc3545"},children:k.seniors||0})]})]})]}),k.seniors>0&&a.jsxs("div",{style:{background:"#fff3cd",border:"1px solid #ffeaa7",borderRadius:"8px",padding:"12px",marginBottom:"15px",display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("span",{style:{fontSize:"1.2rem"},children:"👴"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#856404"},children:"Special Assistance Required"}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"#856404"},children:["This group includes ",k.seniors," senior citizen",k.seniors>1?"s":""," who may need special assistance"]})]})]}),k.response&&a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",color:"#2c3e50",marginBottom:"10px"},children:"Our Response"}),a.jsx("div",{style:{background:"#e8f4fd",padding:"15px",borderRadius:"8px",borderLeft:"4px solid #007bff"},children:a.jsx("p",{style:{margin:"0",color:"#495057",fontSize:"0.9rem",lineHeight:"1.5"},children:k.response})})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",color:"#6c757d",paddingTop:"15px",borderTop:"1px solid #f8f9fa",flexWrap:"wrap",gap:"10px"},children:[a.jsxs("div",{children:["Created: ",U(k.createdAt)]}),k.updatedAt!==k.createdAt&&a.jsxs("div",{children:["Updated: ",U(k.updatedAt)]})]})]})]}),a.jsx("div",{style:{padding:"15px 20px",background:"#f8f9fa",display:"flex",justifyContent:"center"},children:a.jsx("button",{onClick:me=>{me.stopPropagation(),z(k._id)},style:{padding:"8px 20px",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",fontSize:"0.9rem",fontFamily:"inherit",background:"#007bff",color:"white",transition:"background-color 0.2s ease"},onMouseEnter:me=>me.target.style.background="#0056b3",onMouseLeave:me=>me.target.style.background="#007bff",children:te?"👆 Show Less":"👇 Show More"})})]},k._id)})}):a.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"#6c757d",background:"white",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)"},children:[a.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🔍"}),a.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"10px",color:"#2c3e50"},children:"No enquiries found"}),a.jsx("p",{children:"Try adjusting your search or filter criteria"}),a.jsx("button",{onClick:()=>g("new-enquiry"),style:{padding:"12px 25px",background:"#007bff",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",marginTop:"15px",transition:"background 0.2s ease"},onMouseEnter:k=>k.target.style.background="#0056b3",onMouseLeave:k=>k.target.style.background="#007bff",children:"Create New Enquiry"})]})]}):a.jsx("div",{children:a.jsxs("div",{style:{background:"white",borderRadius:"12px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)",overflow:"hidden"},children:[a.jsxs("form",{onSubmit:c,style:{padding:"30px"},children:[a.jsxs("div",{style:{marginBottom:"30px"},children:[a.jsx("h3",{style:{fontSize:"1.2rem",color:"#2c3e50",marginBottom:"20px",paddingBottom:"10px",borderBottom:"2px solid #f8f9fa",display:"flex",alignItems:"center",gap:"8px"},children:"👤 Contact Information"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Full Name *"}),a.jsx("input",{type:"text",name:"generatedBy.fullName",value:E.generatedBy.fullName,onChange:ee,style:{padding:"12px 15px",border:`2px solid ${Q.generatedBy?.fullName?"#dc3545":"#e9ecef"}`,borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},placeholder:"Enter your full name",required:!0,onFocus:k=>!Q.generatedBy?.fullName&&(k.target.style.borderColor="#007bff"),onBlur:k=>!Q.generatedBy?.fullName&&(k.target.style.borderColor="#e9ecef")}),Q.generatedBy?.fullName&&a.jsx("span",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"},children:Q.generatedBy.fullName})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Email Address *"}),a.jsx("input",{type:"email",name:"generatedBy.email",value:E.generatedBy.email,onChange:ee,style:{padding:"12px 15px",border:`2px solid ${Q.generatedBy?.email?"#dc3545":"#e9ecef"}`,borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},placeholder:"Enter your email address",required:!0,onFocus:k=>!Q.generatedBy?.email&&(k.target.style.borderColor="#007bff"),onBlur:k=>!Q.generatedBy?.email&&(k.target.style.borderColor="#e9ecef")}),Q.generatedBy?.email&&a.jsx("span",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"},children:Q.generatedBy.email})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Phone Number *"}),a.jsx("input",{type:"tel",name:"generatedBy.phone",value:E.generatedBy.phone,onChange:ee,style:{padding:"12px 15px",border:`2px solid ${Q.generatedBy?.phone?"#dc3545":"#e9ecef"}`,borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},placeholder:"Enter your phone number",required:!0,onFocus:k=>!Q.generatedBy?.phone&&(k.target.style.borderColor="#007bff"),onBlur:k=>!Q.generatedBy?.phone&&(k.target.style.borderColor="#e9ecef")}),Q.generatedBy?.phone&&a.jsx("span",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"},children:Q.generatedBy.phone})]})]})]}),a.jsxs("div",{style:{marginBottom:"30px"},children:[a.jsx("h3",{style:{fontSize:"1.2rem",color:"#2c3e50",marginBottom:"20px",paddingBottom:"10px",borderBottom:"2px solid #f8f9fa",display:"flex",alignItems:"center",gap:"8px"},children:"📦 Package Information"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Start Date (Tentetive)"}),a.jsx("input",{type:"date",name:"startDate",value:E.startDate,onChange:ee,min:"0",max:"20",style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Package Name *"}),a.jsxs("select",{name:"packageName",value:E.packageName,onChange:ee,style:{padding:"12px 15px",border:`2px solid ${Q.packageName?"#dc3545":"#e9ecef"}`,borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease",backgroundColor:"#fff",cursor:"pointer"},required:!0,onFocus:k=>!Q.packageName&&(k.target.style.borderColor="#007bff"),onBlur:k=>!Q.packageName&&(k.target.style.borderColor="#e9ecef"),children:[a.jsx("option",{value:"",disabled:!0,children:"Select package type"}),a.jsx("option",{value:"CUSTOM",children:"CUSTOM"}),a.jsx("option",{value:"FAMILY",children:"FAMILY"}),a.jsx("option",{value:"GROUP",children:"GROUP"}),a.jsx("option",{value:"CITY",children:"CITY"}),a.jsx("option",{value:"ADVENTURE",children:"ADVENTURE"})]}),Q.packageName&&a.jsx("span",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"},children:Q.packageName})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Destination *"}),a.jsx("input",{type:"text",name:"destination",value:E.destination,onChange:ee,style:{padding:"12px 15px",border:`2px solid ${Q.destination?"#dc3545":"#e9ecef"}`,borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},placeholder:"Enter destination",required:!0,onFocus:k=>!Q.destination&&(k.target.style.borderColor="#007bff"),onBlur:k=>!Q.destination&&(k.target.style.borderColor="#e9ecef")}),Q.destination&&a.jsx("span",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"},children:Q.destination})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Enquiry Type"}),a.jsxs("select",{name:"enquiryType",value:E.enquiryType,onChange:ee,style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",background:"white",transition:"border-color 0.2s ease",cursor:"pointer"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef",children:[a.jsx("option",{value:"Package Enquiry",children:"Package Enquiry"}),a.jsx("option",{value:"Custom Request",children:"Custom Request"}),a.jsx("option",{value:"Price Enquiry",children:"Price Enquiry"}),a.jsx("option",{value:"Availability Check",children:"Availability Check"}),a.jsx("option",{value:"General Query",children:"General Query"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Adults"}),a.jsx("input",{type:"number",name:"adults",value:E.adults,onChange:ee,min:"0",max:"20",style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Children (2-17 years)"}),a.jsx("input",{type:"number",name:"children",value:E.children,onChange:ee,min:"0",max:"20",style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Senior Citizens (60+ years)"}),a.jsx("input",{type:"number",name:"seniors",value:E.seniors,onChange:ee,min:"0",max:"20",style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef"}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",marginTop:"4px"},children:"Special assistance may be provided"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Budget (₹)"}),a.jsx("input",{type:"number",name:"budget",value:E.budget,onChange:ee,min:"0",step:"1000",style:{padding:"12px 15px",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",transition:"border-color 0.2s ease"},placeholder:"Enter your budget",onFocus:k=>k.target.style.borderColor="#007bff",onBlur:k=>k.target.style.borderColor="#e9ecef"})]})]}),(E.adults>0||E.children>0||E.seniors>0)&&a.jsxs("div",{style:{marginTop:"20px",padding:"15px",background:"#f8f9fa",borderRadius:"8px",border:"2px solid #e9ecef"},children:[a.jsx("div",{style:{fontWeight:"600",marginBottom:"8px",color:"#2c3e50"},children:"Travelers Summary:"}),a.jsxs("div",{style:{color:"#495057"},children:["Total ",Number(E.adults)+Number(E.children)+Number(E.seniors)," travelers",E.adults>0&&` • ${E.adults} Adult${E.adults>1?"s":""}`,E.children>0&&` • ${E.children} Child${E.children>1?"ren":""}`,E.seniors>0&&` • ${E.seniors} Senior Citizen${E.seniors>1?"s":""}`]}),E.seniors>0&&a.jsx("div",{style:{marginTop:"8px",padding:"8px",background:"#fff3cd",borderRadius:"4px",fontSize:"0.9rem",color:"#856404"},children:"ℹ️ Note: Senior citizens in your group may receive special assistance and discounts"})]})]}),a.jsxs("div",{style:{marginBottom:"30px"},children:[a.jsx("h3",{style:{fontSize:"1.2rem",color:"#2c3e50",marginBottom:"20px",paddingBottom:"10px",borderBottom:"2px solid #f8f9fa",display:"flex",alignItems:"center",gap:"8px"},children:"💬 Your Message"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("label",{style:{fontWeight:"600",color:"#2c3e50",marginBottom:"8px",fontSize:"0.9rem"},children:"Detailed Message *"}),a.jsx("textarea",{name:"message",value:E.message,onChange:ee,rows:"6",style:{padding:"15px",border:`2px solid ${Q.message?"#dc3545":"#e9ecef"}`,borderRadius:"8px",fontSize:"0.9rem",fontFamily:"inherit",outline:"none",resize:"vertical",minHeight:"150px",transition:"border-color 0.2s ease"},placeholder:"Please describe your requirements, questions, or any specific requests. If you have senior citizens, mention any special needs or accessibility requirements...",required:!0,onFocus:k=>!Q.message&&(k.target.style.borderColor="#007bff"),onBlur:k=>!Q.message&&(k.target.style.borderColor="#e9ecef")}),Q.message&&a.jsx("span",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"4px"},children:Q.message}),a.jsx("div",{style:{fontSize:"0.8rem",color:"#6c757d",marginTop:"8px"},children:"Be as specific as possible to help us provide the best assistance. Mention any special requirements for senior citizens or accessibility needs."})]})]}),a.jsxs("div",{style:{display:"flex",gap:"15px",justifyContent:"flex-end",paddingTop:"20px",borderTop:"1px solid #f8f9fa",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",onClick:m,disabled:M,style:{padding:"12px 25px",border:"2px solid #6c757d",borderRadius:"8px",cursor:M?"not-allowed":"pointer",fontWeight:"600",fontSize:"0.9rem",fontFamily:"inherit",background:"white",color:"#6c757d",transition:"all 0.2s ease",opacity:M?.6:1},onMouseEnter:k=>!M&&(k.target.style.background="#6c757d",k.target.style.color="white"),onMouseLeave:k=>!M&&(k.target.style.background="white",k.target.style.color="#6c757d"),children:"🔄 Reset Form"}),a.jsx("button",{type:"button",onClick:()=>g("enquiries"),disabled:M,style:{padding:"12px 25px",border:"2px solid #ffc107",borderRadius:"8px",cursor:M?"not-allowed":"pointer",fontWeight:"600",fontSize:"0.9rem",fontFamily:"inherit",background:"white",color:"#ffc107",transition:"all 0.2s ease",opacity:M?.6:1},onMouseEnter:k=>!M&&(k.target.style.background="#ffc107",k.target.style.color="white"),onMouseLeave:k=>!M&&(k.target.style.background="white",k.target.style.color="#ffc107"),children:"👁️ View Enquiries"}),a.jsx("button",{type:"submit",disabled:M,style:{padding:"12px 25px",border:"none",borderRadius:"8px",cursor:M?"not-allowed":"pointer",fontWeight:"600",fontSize:"0.9rem",fontFamily:"inherit",background:M?"#6c757d":"#28a745",color:"white",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"8px",minWidth:"140px",justifyContent:"center"},onMouseEnter:k=>!M&&(k.target.style.background="#218838"),onMouseLeave:k=>!M&&(k.target.style.background="#28a745"),children:M?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #ffffff40",borderTop:"2px solid #ffffff",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"Submitting..."]}):a.jsx(a.Fragment,{children:"📤 Submit Enquiry"})})]})]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, #e3f2fd, #f8f9fa)",padding:"25px 30px",borderTop:"1px solid #e9ecef"},children:[a.jsx("h4",{style:{color:"#2c3e50",marginBottom:"15px",fontSize:"1.1rem",display:"flex",alignItems:"center",gap:"8px"},children:"💡 Need Help?"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[a.jsxs("div",{style:{padding:"15px",background:"white",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[a.jsx("h5",{style:{color:"#007bff",marginBottom:"8px",fontSize:"0.9rem"},children:"📞 Call Us"}),a.jsxs("p",{style:{margin:0,fontSize:"0.9rem",color:"#495057"},children:["Speak with our travel experts",a.jsx("br",{}),a.jsx("strong",{children:"+91 1800-XXX-XXXX"}),a.jsx("br",{}),a.jsx("small",{children:"Mon-Fri 9AM-6PM"})]})]}),a.jsxs("div",{style:{padding:"15px",background:"white",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[a.jsx("h5",{style:{color:"#28a745",marginBottom:"8px",fontSize:"0.9rem"},children:"💬 Live Chat"}),a.jsxs("p",{style:{margin:0,fontSize:"0.9rem",color:"#495057"},children:["Get instant help from our team",a.jsx("br",{}),a.jsx("strong",{children:"Available 24/7"}),a.jsx("br",{}),a.jsx("small",{children:"Average response: 2 mins"})]})]}),a.jsxs("div",{style:{padding:"15px",background:"white",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[a.jsx("h5",{style:{color:"#ffc107",marginBottom:"8px",fontSize:"0.9rem"},children:"📧 Email Support"}),a.jsxs("p",{style:{margin:0,fontSize:"0.9rem",color:"#495057"},children:["Send us detailed queries",a.jsx("br",{}),a.jsx("strong",{children:"support@travelapp.com"}),a.jsx("br",{}),a.jsx("small",{children:"Response within 4 hours"})]})]})]}),a.jsx("div",{style:{marginTop:"20px",padding:"15px",background:"rgba(255, 193, 7, 0.1)",borderRadius:"8px",borderLeft:"4px solid #ffc107"},children:a.jsxs("p",{style:{margin:0,fontSize:"0.9rem",color:"#495057",lineHeight:"1.5"},children:[a.jsx("strong",{children:"💡 Pro Tip:"})," For faster processing, please include your travel dates, number of travelers, and specific requirements in your enquiry. If you have senior citizens in your group, mention any special assistance needs."]})})]})]})})})]})},By="https://my-travel-app-backend-6.onrender.com/api",My=()=>{const{user:l,logout:o,updateUser:u,token:d}=x.useContext(rt),[f,p]=x.useState(!1),[g,b]=x.useState(!1),[j,v]=x.useState(!1),[w,N]=x.useState(!1),[T,M]=x.useState(!1),O=x.useRef(null),L=()=>p(_=>!_);x.useEffect(()=>{const _=P=>{O.current&&!O.current.contains(P.target)&&p(!1)};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),x.useEffect(()=>{(j||w||T)&&p(!1)},[j,w,T]);const B=async _=>{const P=_.target.files[0];if(!P)return;const le=new FormData;le.append("avatar",P),b(!0);try{const H=await He.post(`${By}/api/users/me/avatar`,le,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${d}`,withCredentials:!0}});u({avatarUrl:`/api/users/${l._id}/avatar?t=${Date.now()}`})}catch(H){console.error("Upload failed:",H)}finally{b(!1)}},J=_=>{p(!1),setTimeout(()=>_(),100)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{ref:O,style:{position:"relative"},children:[a.jsxs("div",{onClick:L,style:{width:"44px",height:"44px",borderRadius:"50%",cursor:"pointer",border:"2px solid #070000ff",boxShadow:"0 2px 8px rgba(255, 46, 46, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"",backgroundColor:"#10d2d5ff",transition:"transform 0.2s ease"},onMouseOver:_=>_.currentTarget.style.transform="scale(1.05)",onMouseOut:_=>_.currentTarget.style.transform="scale(1)",children:[l?.avatarUrl?a.jsx("img",{src:`${l.avatarUrl}?t=${Date.now()}`,alt:`${l.name||"User"}'s profile`,style:{width:"100%",height:"100%",objectFit:"cover"},onError:_=>{_.target.src="/default-avatar.png"}}):a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"18px",fontWeight:"600",color:"#6c757d",backgroundColor:"#e9ecef"},children:l?.name?.charAt(0)?.toUpperCase()||"U"}),g&&a.jsx("div",{style:{position:"absolute",bottom:"-20px",fontSize:"12px",color:"#6c757d"},children:"Uploading..."})]}),f&&a.jsxs("div",{style:{position:"absolute",top:"55px",right:"0",backgroundColor:"#fff",border:"1px solid #e9ecef",borderRadius:"12px",width:"220px",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",padding:"0",zIndex:1e3,overflow:"hidden",animation:"fadeInDown 0.2s ease-out"},children:[a.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #f8f9fa",textAlign:"center"},children:[a.jsxs("div",{style:{position:"relative",display:"inline-block",marginBottom:"10px"},children:[a.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",overflow:"hidden",border:"3px solid #e9ecef",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f8f9fa",margin:"0 auto"},children:l?.avatar?a.jsx("img",{src:l.avatar,alt:`${l.name||"User"}'s profile`,style:{width:"100%",height:"100%",objectFit:"cover"}}):a.jsx("div",{style:{fontSize:"24px",fontWeight:"600",color:"#6c757d"},children:l?.name?.charAt(0)?.toUpperCase()||"U"})}),a.jsx("label",{htmlFor:"avatar-upload",style:{position:"absolute",bottom:"-5px",right:"-5px",width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#007bff",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"12px",border:"2px solid white",transition:"background-color 0.2s ease"},onMouseOver:_=>_.target.style.backgroundColor="#0056b3",onMouseOut:_=>_.target.style.backgroundColor="#007bff",title:"Change avatar",children:g?"...":"📷"}),a.jsx("input",{id:"avatar-upload",type:"file",accept:"image/jpeg,image/png,image/gif,image/webp",style:{display:"none"},onChange:B,disabled:g})]}),a.jsx("div",{style:{fontWeight:"600",fontSize:"14px",color:"#2c3e50",marginBottom:"4px"},children:l?.name||"User"}),l?.email&&a.jsx("div",{style:{fontSize:"12px",color:"#6c757d",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.email})]}),a.jsxs("div",{style:{padding:"8px 0"},children:[a.jsxs("button",{className:"dropdown-item",onClick:()=>J(()=>N(!0)),style:Xr,onMouseOver:_=>_.target.style.backgroundColor="#f8f9fa",onMouseOut:_=>_.target.style.backgroundColor="transparent",children:[a.jsx("span",{style:{marginRight:"12px"},children:"📋"}),"Your Enquiries"]}),a.jsxs("button",{className:"dropdown-item",onClick:()=>J(()=>v(!0)),style:Xr,onMouseOver:_=>_.target.style.backgroundColor="#f8f9fa",onMouseOut:_=>_.target.style.backgroundColor="transparent",children:[a.jsx("span",{style:{marginRight:"12px"},children:"📅"}),"Your Bookings"]}),a.jsxs("button",{className:"dropdown-item",onClick:()=>J(()=>M(!0)),style:Xr,onMouseOver:_=>_.target.style.backgroundColor="#f8f9fa",onMouseOut:_=>_.target.style.backgroundColor="transparent",children:[a.jsx("span",{style:{marginRight:"12px"},children:"❤️"}),"My Favourites"]}),a.jsx("hr",{style:{margin:"8px 12px",border:"none",borderTop:"1px solid #e9ecef"}}),a.jsxs("button",{className:"dropdown-item",onClick:()=>J(o),style:{...Xr,color:"#dc3545"},onMouseOver:_=>{_.target.style.backgroundColor="#fff5f5",_.target.style.color="#c82333"},onMouseOut:_=>{_.target.style.backgroundColor="transparent",_.target.style.color="#dc3545"},children:[a.jsx("span",{style:{marginRight:"12px"},children:"🚪"}),"Logout"]})]})]})]}),j&&a.jsx("div",{style:Uc,children:a.jsxs("div",{style:Hc,children:[a.jsx("button",{style:qc,onClick:()=>v(!1),"aria-label":"Close bookings",children:"✕"}),a.jsx(Up,{onClose:()=>v(!1)})]})}),w&&a.jsx("div",{style:Uc,children:a.jsxs("div",{style:Hc,children:[a.jsx("button",{style:qc,onClick:()=>N(!1),"aria-label":"Close enquiries",children:"✕"}),a.jsx(Dy,{onClose:()=>N(!1)})]})}),T&&a.jsx("div",{style:Uc,children:a.jsxs("div",{style:Hc,children:[a.jsx("button",{style:qc,onClick:()=>M(!1),"aria-label":"Close favourites",children:"✕"}),a.jsx(Ry,{onClose:()=>M(!1)})]})}),a.jsx("style",{jsx:!0,children:`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})},Xr={width:"100%",padding:"12px 16px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer",fontSize:"14px",color:"#495057",display:"flex",alignItems:"center",transition:"all 0.2s ease",fontFamily:"inherit"},Uc={position:"fixed",top:0,left:0,right:0,bottom:0,height:"100vh",onfocus:"100vw",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"flex-start",overflowY:"auto"},Hc={width:"100%",minHeight:"100vh",backgroundColor:"#fff",padding:"20px",boxSizing:"border-box",position:"relative"},qc={position:"absolute",top:"15px",right:"15px",background:"transparent",border:"none",fontSize:"24px",cursor:"pointer",padding:"5px"};var Hp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_h=ti.createContext&&ti.createContext(Hp),Ly=["attr","size","title"];function _y(l,o){if(l==null)return{};var u=Uy(l,o),d,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(f=0;f<p.length;f++)d=p[f],!(o.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(l,d)&&(u[d]=l[d])}return u}function Uy(l,o){if(l==null)return{};var u={};for(var d in l)if(Object.prototype.hasOwnProperty.call(l,d)){if(o.indexOf(d)>=0)continue;u[d]=l[d]}return u}function es(){return es=Object.assign?Object.assign.bind():function(l){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])}return l},es.apply(this,arguments)}function Uh(l,o){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);o&&(d=d.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),u.push.apply(u,d)}return u}function ts(l){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?Uh(Object(u),!0).forEach(function(d){Hy(l,d,u[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):Uh(Object(u)).forEach(function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(u,d))})}return l}function Hy(l,o,u){return o=qy(o),o in l?Object.defineProperty(l,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[o]=u,l}function qy(l){var o=Yy(l,"string");return typeof o=="symbol"?o:o+""}function Yy(l,o){if(typeof l!="object"||!l)return l;var u=l[Symbol.toPrimitive];if(u!==void 0){var d=u.call(l,o);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(l)}function qp(l){return l&&l.map((o,u)=>ti.createElement(o.tag,ts({key:u},o.attr),qp(o.child)))}function ze(l){return o=>ti.createElement(Gy,es({attr:ts({},l.attr)},o),qp(l.child))}function Gy(l){var o=u=>{var{attr:d,size:f,title:p}=l,g=_y(l,Ly),b=f||u.size||"1em",j;return u.className&&(j=u.className),l.className&&(j=(j?j+" ":"")+l.className),ti.createElement("svg",es({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,d,g,{className:j,style:ts(ts({color:l.color||u.color},u.style),l.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),p&&ti.createElement("title",null,p),l.children)};return _h!==void 0?ti.createElement(_h.Consumer,null,u=>o(u)):o(Hp)}function Vy(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"13",r:"4"},child:[]}]})(l)}function Py(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(l)}function Xy(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(l)}function Fy(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(l)}function $y(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(l)}function Qy(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(l)}function Zy(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"},child:[]},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"},child:[]},{tag:"polyline",attr:{points:"7 3 7 8 15 8"},child:[]}]})(l)}function Ky(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(l)}function Jy(l){return ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(l)}const Yp=({user:l,onClose:o,onSave:u})=>{const[d,f]=x.useState(!1),[p,g]=x.useState({name:l?.name||"",email:l?.email||"",phone:l?.phone||"",address:l?.address||""}),[b,j]=x.useState(l?.avatar||""),v=x.useRef(null),w=O=>{const{name:L,value:B}=O.target;g(J=>({...J,[L]:B}))},N=O=>{const L=O.target.files[0];if(L){const B=new FileReader;B.onloadend=()=>{j(B.result)},B.readAsDataURL(L)}},T=()=>{v.current.click()},M=()=>{u({...p,avatar:b}),f(!1)};return a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:a.jsxs("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md animate-fade-in",children:[a.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-600 p-6 relative",children:[a.jsx("button",{onClick:o,className:"absolute top-4 right-4 text-white hover:text-blue-200 transition-colors",children:a.jsx(Jy,{size:24})}),a.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"My Profile"})]}),a.jsxs("div",{className:"p-6",children:[a.jsxs("div",{className:"flex flex-col items-center mb-6",children:[a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg",children:b?a.jsx("img",{src:b,alt:"Profile",className:"w-full h-full object-cover"}):a.jsx("div",{className:"w-full h-full bg-blue-100 flex items-center justify-center",children:a.jsx(Ky,{className:"text-blue-500",size:36})})}),d&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:T,className:"absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all shadow-md",children:a.jsx(Vy,{size:16})}),a.jsx("input",{type:"file",ref:v,onChange:N,accept:"image/*",className:"hidden"})]})]}),d?a.jsx("input",{type:"text",name:"name",value:p.name,onChange:w,className:"mt-4 text-xl font-semibold text-center bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none"}):a.jsx("h3",{className:"mt-4 text-xl font-semibold text-gray-800",children:p.name})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx(Yc,{icon:a.jsx(Fy,{}),label:"Email",name:"email",value:p.email,isEditing:d,onChange:w,type:"email"}),a.jsx(Yc,{icon:a.jsx(Qy,{}),label:"Phone",name:"phone",value:p.phone,isEditing:d,onChange:w,type:"tel"}),a.jsx(Yc,{icon:a.jsx($y,{}),label:"Address",name:"address",value:p.address,isEditing:d,onChange:w,type:"textarea"})]}),a.jsx("div",{className:"mt-8 flex justify-end space-x-3",children:d?a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{f(!1),g({name:l?.name||"",email:l?.email||"",phone:l?.phone||"",address:l?.address||""}),j(l?.avatar||"")},className:"px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",children:"Cancel"}),a.jsxs("button",{onClick:M,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center",children:[a.jsx(Zy,{className:"mr-2"}),"Save"]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:()=>f(!0),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center",children:[a.jsx(Py,{className:"mr-2"}),"Edit Profile"]}),a.jsxs("button",{onClick:o,className:"px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors flex items-center",children:[a.jsx(Xy,{className:"mr-2"}),"Logout"]})]})})]})]})})},Yc=({icon:l,label:o,name:u,value:d,isEditing:f,onChange:p,type:g="text"})=>a.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[a.jsxs("div",{className:"flex items-center text-gray-500 mb-1",children:[a.jsx("span",{className:"mr-2",children:l}),a.jsx("span",{className:"text-sm",children:o})]}),f?g==="textarea"?a.jsx("textarea",{name:u,value:d,onChange:p,rows:"3",className:"w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent"}):a.jsx("input",{type:g,name:u,value:d,onChange:p,className:"w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent"}):a.jsx("p",{className:"text-gray-800 whitespace-pre-line",children:d||"Not provided"})]}),Gp=()=>{const{user:l}=x.useContext(rt),o=Wc(),u=za(),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!1),[v,w]=x.useState(!1),[N,T]=x.useState(!1);x.useEffect(()=>{const P=()=>w(window.scrollY>30);return window.addEventListener("scroll",P),()=>window.removeEventListener("scroll",P)},[]);const M=()=>{if(u.pathname==="/"){const P=document.getElementById("about-us");P&&P.scrollIntoView({behavior:"smooth"})}else o("/",{state:{scrollToAbout:!0}})},O=()=>{if(u.pathname==="/"){const P=document.getElementById("footer");P&&P.scrollIntoView({behavior:"smooth"})}else o("/",{state:{scrollToContact:!0}})},L=()=>{g(!1),f(!0)},B=()=>{f(!1),g(!0)},J=[{name:"Maharashtra",path:"/Maharashtra"},{name:"Goa",path:"/goa"},{name:"Kerala",path:"/kerala"},{name:"Rajasthan",path:"/rajasthan"},{name:"Uttarakhand",path:"/uttarakhand"}],_=[{name:"Dubai",path:"/dubai"},{name:"Maldives",path:"/maldives"},{name:"Thailand",path:"/thailand"},{name:"Bali",path:"/bali"},{name:"Europe",path:"/europe"}];return a.jsxs(a.Fragment,{children:[a.jsx("header",{className:`modern-header ${v?"scrolled":""} w-full`,children:a.jsxs("div",{className:"nav-container bg-white bg-opacity-70",children:[a.jsxs(la,{to:"/",className:"logo",children:[a.jsx("img",{src:"/logo.png",alt:"Travel Logo"}),a.jsx("span",{style:{color:"black",fontFamily:"-moz-initial"},children:"DesiVDesi"})]}),a.jsxs("button",{className:`hamburger ${N?"active":""}`,onClick:()=>T(!N),children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("nav",{className:`nav-links text-black ${N?"open":""}`,style:{fontFamily:"Times New Roman",fontSize:"25px"},children:[a.jsx(la,{to:"/",style:{color:"black"},children:"Home"}),a.jsx("a",{onClick:M,children:"About"}),a.jsx(la,{to:"/services",style:{color:"black"},children:"Services"}),a.jsx(la,{to:"/career",style:{color:"black"},children:"Career"}),a.jsx("a",{onClick:O,children:"Contact"}),a.jsxs("div",{className:"dropdown",children:[a.jsx("span",{style:{color:"black",fontFamily:"Times New Roman",fontSize:"20px"},children:" Domestic ▾"}),a.jsx("div",{className:"dropdown-content",children:J.map((P,le)=>a.jsx(la,{to:P.path,style:{fontFamily:"Times New Roman",fontSize:"20px"},children:P.name},le))})]}),a.jsxs("div",{className:"dropdown",children:[a.jsx("span",{style:{color:"black",fontFamily:"Times New Roman",fontSize:"20px"},children:"International ▾"}),a.jsx("div",{className:"dropdown-content",children:_.map((P,le)=>a.jsx(la,{to:P.path,children:P.name},le))})]})]}),a.jsx("div",{className:"auth-buttons",children:l?a.jsx(My,{}):a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:B,className:"btn login-btn",children:"Login"}),a.jsx("button",{onClick:L,className:"btn register-btn",children:"Sign Up"})]})})]})}),d&&a.jsx(_p,{onClose:()=>f(!1)}),p&&a.jsx(Qe,{onClose:()=>g(!1)}),b&&a.jsx(Yp,{onClose:()=>j(!1)}),a.jsx("style",{jsx:!0,children:`
        .modern-header {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 5;
          backdrop-filter: blur(15px);
          background: rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }

        .modern-header.scrolled {
          background: rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .nav-container {
          max-width: 90%;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-weight: 700;
          font-size: 1.4rem;
          text-decoration: none;
          letter-spacing: 1px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4);
        }

        .logo img {
          height: 105px;
          width: 150px;
          margin: -20px;
          margin-left: 30px;
          background: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links a,
        .nav-links span {
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after,
        .nav-links span::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #00f5d4;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links span:hover::after {
          width: 100%;
          height: 5px;
          margin-top: 10px;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 10px;
          display: none;
          flex-direction: column;
          min-width: 180px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.3s ease;
        }

        .dropdown-content a {
          color: #333;
          padding: 10px 15px;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .dropdown-content a:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
        }

        .dropdown:hover .dropdown-content {
          display: flex;
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .login-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          border: 2px solid #fff;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4);
        }

        .register-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          box-shadow: 0 4px 15px rgba(118, 75, 162, 0.3);
        }

        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4);
        }

        /* Hamburger (mobile) */
        .hamburger {
        color: 'black',
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          border: none;
          background: black;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 1000;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 992px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            right: 0;
            flex-direction: column;
            width: 100%;
            background: rgba(102, 126, 234, 0.95);
            backdrop-filter: blur(20px);
            padding: 1rem 0;
            border-radius: 0 0 15px 15px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .nav-links.open {
            max-height: 500px;
          }
          .nav-links a {
            padding: 0.75rem 1rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})};function Wy(){const l=[{id:1,title:"Custom-Tours",link:"custom-Tours",duration:"Highlights",itinerary:[{activities:["✅ Tailor-Made Itineraries"]},{activities:["✅ Flexible Scheduling"]},{activities:["✅ Exclusive Experiences"]},{activities:["✅ Handpicked Stays & Activities"]},{activities:["✅  Local Expertise"]},{activities:["✅ Your Budget, Your Way"]},{activities:["✅ Perfect for All Types of Travelers"]}],addOns:["Your Trip, Your Rules! 🌍 Craft a travel story that's uniquely YOU!"],Tagline:["No templates — Only tailored travel."]},{id:2,title:"Adventure-Tours",link:"Adventure-Tours",duration:"Highlights",itinerary:[{activities:["✅ Thrilling Outdoor Activities"]},{activities:["✅ Professional Safety Gear & Instructors"]},{activities:["✅ Stunning Natural Landscapes"]},{activities:["✅ Challenging Yet Rewarding Trails"]},{activities:["✅ Group Adventures & Solo Options"]},{activities:["✅ All-Inclusive Adventure Packages"]}],addOns:["Feel the Rush! ⛰️ Dare to explore the wild side of life!"],Tagline:["Not just a trip — it's an adrenaline journey..!"]},{id:3,title:"Family-Tours",link:"Family-Tours",duration:"Highlights",itinerary:[{activities:["✅ Customized Itineraries"]},{activities:["✅ Comfortable Accommodations"]},{activities:["✅ Safe and Secure Travel"]},{activities:["✅ Kid-Friendly Activities"]},{activities:["✅ Guided Sightseeing"]},{activities:["✅ Meal Plans for Everyone"]},{activities:["✅ Group Games & Entertainment"]},{activities:["✅ Memory-Making Moments"]},{activities:["✅ 24x7 Travel Assistance"]}],addOns:["Great for Solo, Couple & Family Travelers"],Tagline:["Together we travel — together we grow!"]},{id:4,title:"Gorup-Tours",link:"Group-Tours",duration:"Highlights",itinerary:[{activities:["✅ Fun With Friends & Family"]},{activities:["✅ Pre-Planned Itineraries"]},{activities:["✅ Great Discounts & Value"]},{activities:["✅ Team Bonding & Icebreakers"]},{activities:["✅ Comfortable Group Transport"]},{activities:["✅ Dedicated Tour Manager"]},{activities:["✅ Perfect for Schools, Colleges, Corporates & Families"]}],addOns:["More People, More Fun! 🚌 Travel together, laugh louder, bond stronger!"],Tagline:["Because the best memories are made in groups..!"]},{id:5,title:"City-Tours",link:"City-Tours",duration:"Highlights",itinerary:[{activities:["✅ Explore Iconic Landmarks"]},{activities:["✅ Local Street Food & Culture"]},{activities:["✅  Shopping Hotspots"]},{activities:["✅ Guided Tours Available"]},{activities:["✅ Flexible Timings"]},{activities:["✅  Photo Stops at Famous Spots"]},{activities:["✅ Great for Solo, Couple & Family Travelers"]}],addOns:["Discover the City's Soul! 🏙️ Dive into culture, taste, and charm — one street at a time!"],Tagline:["Explore — Experience — Enjoy."]}],o=[{code:"USD",symbol:"$",name:"US Dollar",flag:"🇺🇸"},{code:"EUR",symbol:"€",name:"Euro",flag:"🇪🇺"},{code:"GBP",symbol:"£",name:"British Pound",flag:"🇬🇧"},{code:"JPY",symbol:"¥",name:"Japanese Yen",flag:"🇯🇵"},{code:"INR",symbol:"₹",name:"Indian Rupee",flag:"🇮🇳"}],u=[{img:"services2.jpg",alt:"Malaysia",placeholder:"Search Places in Malaysia",title:"Explore Malaysia with",packageDis:"50+ New Packages"},{img:"services1.jpg",alt:"",placeholder:"Search Places ",title:"Explore  with",packageDis:"45+ New Packages"},{img:"services3.jpg",alt:"",placeholder:"Search Places ",title:"Explore  with",packageDis:"54+ New Packages"},{img:"Jaisalmaire.jpg",alt:"",placeholder:"Search Places ",title:"Explore  with",packageDis:"28+ New Packages"},{img:"services4.jpg",alt:"",placeholder:"Search Places ",title:"Explore  with",packageDis:"28+ New Packages"}],d=[{title:"Custom Tours",img:"https://cdn.neamb.com/-/media/images/neamb/products/nea-travel-guided-tours/nea_travel_guided_tours_1464461781_1200x630.jpg",link:"/custom-Tours",description:a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Explore Your Way with Our Custom Travel Packages!"}),a.jsx("p",{children:"Your journey, your rules! Whether you crave thrilling adventures, romantic escapes, family getaways, or cultural discoveries — we design packages tailored just for you."}),a.jsx("h3",{children:"You Dream it, We Plan it...!"})]})},{title:"Adventure Tours",link:"/Adventure-Tours",img:"https://akap.ca/wp-content/uploads/2020/12/ISO-20611-Adventure-tourism.jpeg",description:a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Embark on the Adventure of a Lifetime"}),a.jsx("p",{children:"Unleash your inner explorer with our exhilarating adventure tours that take you beyond the ordinary. Traverse rugged terrains, navigate through lush forests, and conquer thrilling challenges that await at every turn. Whether you're scaling majestic peaks, rafting down roaring rivers, or camping under a canopy of stars, each moment is crafted to ignite your spirit of adventure."}),a.jsx("h3",{children:"Join us for an unforgettable journey where every step is a story, and every destination, a discovery...!"})]})},{title:"family-tours",link:"/Family-Tours",img:"https://i.pinimg.com/736x/09/5a/5e/095a5e10d51cfc90f6adb17c159846c1.jpg",description:a.jsxs(a.Fragment,{children:[a.jsxs("h2",{children:["Discover the joy of traveling with your loved ones on our specially crafted ",a.jsx("strong",{children:"Family Tour Packages"}),"."]}),a.jsx("p",{children:"Enjoy safe, comfortable, and hassle-free journeys with kid-friendly activities, family-sized accommodations, and flexible itineraries. Explore popular attractions, cultural experiences, amusement parks, and scenic destinations with guided support and personalized touches."}),a.jsx("h3",{children:"Entertained—from kids to grandparents."})]})},{title:"group-tours",link:"/Group-Tours",img:"https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1339/Group%20Tour%202.jpg",description:a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Discover the Joy of Group Travel!"}),a.jsx("p",{children:"Embark on an unforgettable journey where camaraderie meets adventure. Our group tours are crafted to bring like-minded travelers together, offering shared experiences that turn strangers into friends. Whether you're exploring ancient ruins, savoring local cuisines, or witnessing breathtaking landscapes, every moment is enriched by the company of fellow explorers."}),a.jsx("h3",{children:"Create lasting memories with new friends as you explore together...!"})]})},{title:"city-tours",link:"/City-Tours",img:"https://wallpapers.com/images/hd/4k-computer-cityscape-nkcvws18wd5lvw8o.jpg",description:a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Discover the Heartbeat of the City!"}),a.jsx("p",{children:"Embark on an unforgettable journey through the city's vibrant streets, where history meets modernity at every corner. Our expertly guided city tours offer an immersive experience, unveiling hidden gems, iconic landmarks, and the rich tapestry of cultures that define the urban landscape. Whether you're a first-time visitor or a seasoned traveler, each step reveals a new story waiting to be discovered."}),a.jsx("h3",{children:" Experience the City Like Never Before...!"})]})}];return a.jsxs(a.Fragment,{children:[a.jsx(Gp,{}),a.jsx("style",{children:`
        /* Prevent horizontal scrolling */
        * {
          box-sizing: border-box;
        }
        
        body, html {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Highlights Section Responsive Only */
        
        /* Tablet specific - 2 cards per row */
        @media (min-width: 768px) and (max-width: 1024px) {
          .highlights-section .col-md-4 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        /* Mobile - highlights cards responsive */
        @media (max-width: 767px) {
          .highlights-section .col-md-4 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 1rem;
          }

          .highlights-section .card-body h4 {
            font-size: 1.1rem;
          }

          .highlights-section .card-body h3 {
            font-size: 1rem;
          }

          .highlights-section .card-body h6 {
            font-size: 0.9rem;
          }

          .highlights-section .card-body p {
            font-size: 12px;
          }

          .highlights-section .card-body li {
            font-size: 12px;
          }

          .highlights-section .btn {
            font-size: 12px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .highlights-section .card-body {
            padding: 10px;
          }

          .highlights-section .card-body h4 {
            font-size: 1rem;
          }

          .highlights-section .card-body h3 {
            font-size: 0.9rem;
          }

          .highlights-section .card-body h6 {
            font-size: 0.8rem;
          }

          .highlights-section .card-body p {
            font-size: 11px;
          }

          .highlights-section .card-body li {
            font-size: 11px;
          }

          .highlights-section .btn {
            font-size: 11px;
            padding: 5px 10px;
          }
        }
          
.zigzag-services {
  padding: 40px 20px;
}

.zigzag-row {
  display: flex;
  align-items: center;
  margin: 40px 0;
  gap: 60px;
  flex-wrap: wrap;
}

.zigzag-row.reverse {
  flex-direction: row-reverse;
}

.zigzag-image img {
  width: 500px;
  height: auto;
   transform: scale(1.02);
  border-radius: 10px;
  
}

.zigzag-description {
  flex: 1;
  max-width: 500px;
}

.zigzag-description h3 {
  margin-bottom: 10px;
  color: #333;
}

.zigzag-description p {
  color: #555;
  line-height: 1.6;
}

.btn {
  margin-top: 10px;
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 20px;
}
.zigzag-description a:hover{
    color:purple ;
     transform: scale(1.02);
    
}
.zigzag-description a{
    color: #333;
}
.services-header {
  /* background: linear-gradient(135deg, #f8f9fa, #e9ecef); */
  padding: 60px 20px;
  /* border-radius: 5px; */
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease;
}

.services-header:hover {
  transform: scale(1.02);
}

.services-header h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #6f0568;
  font-family: fantasy;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(13, 110, 253, 0.2);
}

.services-header p {
  font-size: 1.25rem;
  color: #6c757d;
  font-style: italic;
}



@media (max-width: 768px) {
  .zigzag-row {
    flex-direction: column !important;
    text-align: center;
  }

  .zigzag-image img {
    width: 100%;
    max-width: 300px;
  }

  .zigzag-description {
    max-width: 100%;
  }
}


.services-dashboard {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.breadcrumb {
  font-weight: bold;
}

.header-right select,
.login-btn {
  margin-left: 10px;
  padding: 5px 10px;
}

.carousel .slide img {
  height: 300px;
  object-fit: cover;
}

.search-bar {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.search-bar input {
  padding: 10px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 15px;
}

.sub-heading {
  text-align: center;
  font-size: 24px;
  margin: 30px 0 10px;
}

.description {
  text-align: center;
  color: #666;
  margin-bottom: 30px; 
}

/* {currency picker} */
  .currency {
    float: right;
    margin-top: -650px;
    margin-right: 15px;
    color:white; 
}  
 .dropdown-toggle{
    background-color: transparent; 
    text-decoration: none; 
    border: none; 
    color: rgb(0, 4, 6);
    font-family:'Times New Roman', Times, serif;
} */

.log {
  
  margin-top: -1080px;
  padding: 7px 8px;
  
  margin-right: -80px;


}

/* .log.btn:hover {
  background-color: transparent;
  color: #0d6efd;
} */
/* .login{
  display: flex;
  justify-content:flex-end; 
  width:5%;               
  padding: -4PX;
   float: right;
   margin-left: 25px;
    margin-top: -650px;   
    background-color: transparent; 
    color: #fff; 
    border: none;        
    text-decoration: none;
    font-family:'Times New Roman', Times, serif;
} */

.login a{
   float: right;
    margin-top: -650px;
    text-decoration: none;
    color: #fff;
    
  
}
.login a:hover {
  color: #0d6efd;
  border: 2px solid black;
  border-radius: 5px;
}

.currency-select-wrapper {
  width: 350px;
  margin-bottom: 1rem;
}

.custom-dropdown {
  cursor: pointer;
  position: relative;
}

.dropdown-options {
  display: flex;
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 100;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  float: right;
 
}

.flex-container  div {
  background-color: #f1f1f1;
  /* width: auto; */
  margin-top: -600px;
  /* text-align: center; */
  /* line-height: 40px;
  font-size: 30px; */ 
 
  height: 10px;

}
.currency-piker{
  float: right;
}
option{
  width: 100px;
}
      `}),a.jsxs("div",{id:"demo",className:"carousel slide","data-bs-ride":"carousel",children:[a.jsx("div",{className:"carousel-indicators",children:u.map((f,p)=>a.jsx("button",{type:"button","data-bs-target":"#demo","data-bs-slide-to":p,className:p===0?"active":"","aria-label":`Slide ${p+1}`},p))}),a.jsx("div",{className:"carousel-inner",children:u.map((f,p)=>a.jsxs("div",{className:`carousel-item ${p===0?"active":""}`,children:[a.jsx("img",{src:`/${f.img}`,alt:f.alt,loading:"lazy",className:"d-block w-100",style:{height:"550px",objectFit:"cover"}}),a.jsxs("div",{className:"carousel-caption d-md-block",children:[a.jsx("div",{className:"flex-container",children:a.jsx("div",{className:"currency-picker",children:a.jsx("label",{htmlFor:"currency",className:"form-label",children:a.jsx("select",{id:"currency",className:"form-select",children:o.map(g=>a.jsxs("option",{value:g.code,children:[g.flag," ",g.symbol]},g.code))})})})}),a.jsxs("p",{className:"mt-3 mb-0",children:[f.title," ",a.jsx("a",{href:"#",children:f.packageDis})]})]})]},p))}),a.jsx("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#demo","data-bs-slide":"prev",children:a.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"})}),a.jsx("button",{className:"carousel-control-next",type:"button","data-bs-target":"#demo","data-bs-slide":"next",children:a.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"})})]}),a.jsxs("div",{className:"container zigzag-services",children:[a.jsxs("div",{className:"services-header text-center my-5",children:[a.jsx("h2",{className:"display-4 fw-bold",children:"Our Premium Services"}),a.jsx("p",{className:"lead text-secondary",children:"Plan Your Journey with Confidence"})]}),d.map((f,p)=>a.jsxs("div",{className:`zigzag-row ${p%2===0?"normal":"reverse"}`,children:[a.jsx("div",{className:"zigzag-image",children:a.jsx(la,{to:f.link,children:a.jsx("img",{src:f.img,alt:f.title})})}),a.jsx("div",{className:"zigzag-description",children:a.jsx("div",{children:a.jsxs(a.Fragment,{children:[a.jsx("h3",{style:{fontFamily:"cursive"},children:a.jsx("a",{href:f.link,children:f.title})}),a.jsx("p",{children:f.description}),a.jsx("a",{href:f.link,className:"btn btn-outline-primary",children:"Learn More"})]})})})]},p))]}),a.jsx("div",{className:"container highlights-section",children:a.jsx("div",{className:" row m-5",children:l.map((f,p)=>a.jsx("div",{className:"col-md-4 mb-4",children:a.jsxs("div",{className:"card h-100 shadow",children:[a.jsxs("div",{className:"card-body ",style:{background:"linear-gradient(to right,rgba(211, 220, 212, 1))",color:"Black",textAlign:"left"},children:[a.jsx("h4",{className:" bg-white text-center  p-1 ",children:f.title}),a.jsx("h3",{className:"text-center",children:f.duration}),a.jsx("h6",{children:"Itinerary:"}),a.jsx("ul",{children:f.itinerary.map((g,b)=>a.jsx("li",{children:g.activities},b))}),a.jsxs("p",{children:[a.jsx("strong",{children:f.addOns})," "]}),a.jsx("p",{className:"text-center ",style:{opacity:"0.5"},children:a.jsx("em",{children:f.Tagline})})]}),a.jsx("div",{className:"card-footer text-center bg-secondary text-Dark w-30",children:a.jsx(la,{to:`/${f.link}`,children:a.jsx("button",{className:"btn btn-secondary m-auto w-40",children:"Book Now"})})})]})},p))})})]})}function X2(l){return ze({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M14 325.3c2.3-4.2 5.2-4.9 9.7-2.5 10.4 5.6 20.6 11.4 31.2 16.7a595.88 595.88 0 0 0 127.4 46.3 616.61 616.61 0 0 0 63.2 11.8 603.33 603.33 0 0 0 95 5.2c17.4-.4 34.8-1.8 52.1-3.8a603.66 603.66 0 0 0 163.3-42.8c2.9-1.2 5.9-2 9.1-1.2 6.7 1.8 9 9 4.1 13.9a70 70 0 0 1-9.6 7.4c-30.7 21.1-64.2 36.4-99.6 47.9a473.31 473.31 0 0 1-75.1 17.6 431 431 0 0 1-53.2 4.8 21.3 21.3 0 0 0-2.5.3H308a21.3 21.3 0 0 0-2.5-.3c-3.6-.2-7.2-.3-10.7-.4a426.3 426.3 0 0 1-50.4-5.3A448.4 448.4 0 0 1 164 420a443.33 443.33 0 0 1-145.6-87c-1.8-1.6-3-3.8-4.4-5.7zM172 65.1l-4.3.6a80.92 80.92 0 0 0-38 15.1c-2.4 1.7-4.6 3.5-7.1 5.4a4.29 4.29 0 0 1-.4-1.4c-.4-2.7-.8-5.5-1.3-8.2-.7-4.6-3-6.6-7.6-6.6h-11.5c-6.9 0-8.2 1.3-8.2 8.2v209.3c0 1 0 2 .1 3 .2 3 2 4.9 4.9 5 7 .1 14.1.1 21.1 0 2.9 0 4.7-2 5-5 .1-1 .1-2 .1-3v-72.4c1.1.9 1.7 1.4 2.2 1.9 17.9 14.9 38.5 19.8 61 15.4 20.4-4 34.6-16.5 43.8-34.9 7-13.9 9.9-28.7 10.3-44.1.5-17.1-1.2-33.9-8.1-49.8-8.5-19.6-22.6-32.5-43.9-36.9-3.2-.7-6.5-1-9.8-1.5-2.8-.1-5.5-.1-8.3-.1zM124.6 107a3.48 3.48 0 0 1 1.7-3.3c13.7-9.5 28.8-14.5 45.6-13.2 14.9 1.1 27.1 8.4 33.5 25.9 3.9 10.7 4.9 21.8 4.9 33 0 10.4-.8 20.6-4 30.6-6.8 21.3-22.4 29.4-42.6 28.5-14-.6-26.2-6-37.4-13.9a3.57 3.57 0 0 1-1.7-3.3c.1-14.1 0-28.1 0-42.2s.1-28 0-42.1zm205.7-41.9c-1 .1-2 .3-2.9.4a148 148 0 0 0-28.9 4.1c-6.1 1.6-12 3.8-17.9 5.8-3.6 1.2-5.4 3.8-5.3 7.7.1 3.3-.1 6.6 0 9.9.1 4.8 2.1 6.1 6.8 4.9 7.8-2 15.6-4.2 23.5-5.7 12.3-2.3 24.7-3.3 37.2-1.4 6.5 1 12.6 2.9 16.8 8.4 3.7 4.8 5.1 10.5 5.3 16.4.3 8.3.2 16.6.3 24.9a7.84 7.84 0 0 1-.2 1.4c-.5-.1-.9 0-1.3-.1a180.56 180.56 0 0 0-32-4.9c-11.3-.6-22.5.1-33.3 3.9-12.9 4.5-23.3 12.3-29.4 24.9-4.7 9.8-5.4 20.2-3.9 30.7 2 14 9 24.8 21.4 31.7 11.9 6.6 24.8 7.4 37.9 5.4 15.1-2.3 28.5-8.7 40.3-18.4a7.36 7.36 0 0 1 1.6-1.1c.6 3.8 1.1 7.4 1.8 11 .6 3.1 2.5 5.1 5.4 5.2 5.4.1 10.9.1 16.3 0a4.84 4.84 0 0 0 4.8-4.7 26.2 26.2 0 0 0 .1-2.8v-106a80 80 0 0 0-.9-12.9c-1.9-12.9-7.4-23.5-19-30.4-6.7-4-14.1-6-21.8-7.1-3.6-.5-7.2-.8-10.8-1.3-3.9.1-7.9.1-11.9.1zm35 127.7a3.33 3.33 0 0 1-1.5 3c-11.2 8.1-23.5 13.5-37.4 14.9-5.7.6-11.4.4-16.8-1.8a20.08 20.08 0 0 1-12.4-13.3 32.9 32.9 0 0 1-.1-19.4c2.5-8.3 8.4-13 16.4-15.6a61.33 61.33 0 0 1 24.8-2.2c8.4.7 16.6 2.3 25 3.4 1.6.2 2.1 1 2.1 2.6-.1 4.8 0 9.5 0 14.3s-.2 9.4-.1 14.1zm259.9 129.4c-1-5-4.8-6.9-9.1-8.3a88.42 88.42 0 0 0-21-3.9 147.32 147.32 0 0 0-39.2 1.9c-14.3 2.7-27.9 7.3-40 15.6a13.75 13.75 0 0 0-3.7 3.5 5.11 5.11 0 0 0-.5 4c.4 1.5 2.1 1.9 3.6 1.8a16.2 16.2 0 0 0 2.2-.1c7.8-.8 15.5-1.7 23.3-2.5 11.4-1.1 22.9-1.8 34.3-.9a71.64 71.64 0 0 1 14.4 2.7c5.1 1.4 7.4 5.2 7.6 10.4.4 8-1.4 15.7-3.5 23.3-4.1 15.4-10 30.3-15.8 45.1a17.6 17.6 0 0 0-1 3c-.5 2.9 1.2 4.8 4.1 4.1a10.56 10.56 0 0 0 4.8-2.5 145.91 145.91 0 0 0 12.7-13.4c12.8-16.4 20.3-35.3 24.7-55.6.8-3.6 1.4-7.3 2.1-10.9v-17.3zM493.1 199q-19.35-53.55-38.7-107.2c-2-5.7-4.2-11.3-6.3-16.9-1.1-2.9-3.2-4.8-6.4-4.8-7.6-.1-15.2-.2-22.9-.1-2.5 0-3.7 2-3.2 4.5a43.1 43.1 0 0 0 1.9 6.1q29.4 72.75 59.1 145.5c1.7 4.1 2.1 7.6.2 11.8-3.3 7.3-5.9 15-9.3 22.3-3 6.5-8 11.4-15.2 13.3a42.13 42.13 0 0 1-15.4 1.1c-2.5-.2-5-.8-7.5-1-3.4-.2-5.1 1.3-5.2 4.8q-.15 5 0 9.9c.1 5.5 2 8 7.4 8.9a108.18 108.18 0 0 0 16.9 2c17.1.4 30.7-6.5 39.5-21.4a131.63 131.63 0 0 0 9.2-18.4q35.55-89.7 70.6-179.6a26.62 26.62 0 0 0 1.6-5.5c.4-2.8-.9-4.4-3.7-4.4-6.6-.1-13.3 0-19.9 0a7.54 7.54 0 0 0-7.7 5.2c-.5 1.4-1.1 2.7-1.6 4.1l-34.8 100c-2.5 7.2-5.1 14.5-7.7 22.2-.4-1.1-.6-1.7-.9-2.4z"},child:[]}]})(l)}function F2(l){return ze({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z"},child:[]}]})(l)}function $2(l){return ze({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"},child:[]}]})(l)}function Q2(l){return ze({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(l)}function Z2(l){return ze({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M105.72,215v41.25h57.1a49.66,49.66,0,0,1-21.14,32.6c-9.54,6.55-21.72,10.28-36,10.28-27.6,0-50.93-18.91-59.3-44.22a65.61,65.61,0,0,1,0-41l0,0c8.37-25.46,31.7-44.37,59.3-44.37a56.43,56.43,0,0,1,40.51,16.08L176.47,155a101.24,101.24,0,0,0-70.75-27.84,105.55,105.55,0,0,0-94.38,59.11,107.64,107.64,0,0,0,0,96.18v.15a105.41,105.41,0,0,0,94.38,59c28.47,0,52.55-9.53,70-25.91,20-18.61,31.41-46.15,31.41-78.91A133.76,133.76,0,0,0,205.38,215Zm389.41-4c-10.13-9.38-23.93-14.14-41.39-14.14-22.46,0-39.34,8.34-50.5,24.86l20.85,13.26q11.45-17,31.26-17a34.05,34.05,0,0,1,22.75,8.79A28.14,28.14,0,0,1,487.79,248v5.51c-9.1-5.07-20.55-7.75-34.64-7.75-16.44,0-29.65,3.88-39.49,11.77s-14.82,18.31-14.82,31.56a39.74,39.74,0,0,0,13.94,31.27c9.25,8.34,21,12.51,34.79,12.51,16.29,0,29.21-7.3,39-21.89h1v17.72h22.61V250C510.25,233.45,505.26,220.34,495.13,211ZM475.9,300.3a37.32,37.32,0,0,1-26.57,11.16A28.61,28.61,0,0,1,431,305.21a19.41,19.41,0,0,1-7.77-15.63c0-7,3.22-12.81,9.54-17.42s14.53-7,24.07-7C470,265,480.3,268,487.64,273.94,487.64,284.07,483.68,292.85,475.9,300.3Zm-93.65-142A55.71,55.71,0,0,0,341.74,142H279.07V328.74H302.7V253.1h39c16,0,29.5-5.36,40.51-15.93.88-.89,1.76-1.79,2.65-2.68A54.45,54.45,0,0,0,382.25,158.26Zm-16.58,62.23a30.65,30.65,0,0,1-23.34,9.68H302.7V165h39.63a32,32,0,0,1,22.6,9.23A33.18,33.18,0,0,1,365.67,220.49ZM614.31,201,577.77,292.7h-.45L539.9,201H514.21L566,320.55l-29.35,64.32H561L640,201Z"},child:[]}]})(l)}function K2(l){return ze({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function J2(l){return ze({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"},child:[]}]})(l)}function W2(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(l)}function I2(l){return ze({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}function ev(l){return ze({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(l)}function Hh(l){return ze({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(l)}function Gc(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(l)}function Iy(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function e2(l){return ze({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z"},child:[]}]})(l)}function qh(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(l)}function tv(l){return ze({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}function av(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function Yh(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(l)}function Gh(l){return ze({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"},child:[]}]})(l)}function t2(l){return ze({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"},child:[]}]})(l)}function a2(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(l)}function Vh(l){return ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(l)}function i2(l){return ze({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(l)}function Fr(l){return ze({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(l)}const n2=()=>{const[l,o]=x.useState(!1),[u,d]=x.useState();x.useEffect(()=>{const p=setTimeout(()=>{d("BKG-12504C38"),o(!0)},1500);return()=>clearTimeout(p)},[]);const f=()=>{o(!1)};return a.jsxs("div",{className:"booking-demo-container",children:[a.jsxs("div",{className:"page-content",children:[a.jsx("h1",{children:"Travel Booking App"}),a.jsx("p",{children:"Your booking has been processed successfully."})]}),l&&a.jsx("div",{className:"popup-overlay",children:a.jsxs("div",{className:"popup-content",children:[a.jsxs("div",{className:"confirmation-header",children:[a.jsxs("div",{className:"unique-animation",children:[a.jsx("div",{className:"orbit"}),a.jsx("div",{className:"orbit"}),a.jsx("div",{className:"orbit"}),a.jsx("div",{className:"central-icon",children:a.jsx("i",{className:"fas fa-check"})})]}),a.jsxs("h2",{className:"unique-title",children:[a.jsx("span",{className:"success-text",children:"Successfully"})," Created!"]}),a.jsxs("p",{className:"booking-id",children:["Booking ID: ",a.jsx("strong",{children:u})]}),a.jsx("p",{className:"confirmation-message",children:"We will reach out to you very soon"})]}),a.jsxs("div",{className:"profile-suggestion",children:[a.jsx("i",{className:"fas fa-user-circle"}),a.jsxs("p",{children:["You can check your enquiry status in your profile section under ",a.jsx("strong",{children:"My Enquiries"})]})]}),a.jsx("div",{className:"action-buttons",children:a.jsx("button",{className:"btn unique-primary",onClick:f,children:"OK"})})]})}),a.jsx("style",{jsx:!0,children:`
      /* Unique Color Scheme & Styles */
.booking-demo-container {
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-content {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.page-content h1 {
  color: #5a4b81;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 2.2rem;
}

.page-content p {
  color: #6c757d;
  font-size: 18px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  border-radius: 20px;
  width: 90%;
  max-width: 450px;
  padding: 35px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.8);
  overflow: hidden;
}

.popup-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b, #ff7e5f);
  background-size: 200% 200%;
  animation: gradientMove 3s ease infinite;
}

.confirmation-header {
  text-align: center;
  margin-bottom: 25px;
  position: relative;
}

.unique-animation {
  margin: 0 auto 25px;
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: orbit 3s linear infinite;
}

.orbit:nth-child(1) {
  width: 80px;
  height: 80px;
  border-top-color: #ff7e5f;
  animation-duration: 4s;
}

.orbit:nth-child(2) {
  width: 90px;
  height: 90px;
  border-right-color: #feb47b;
  animation-duration: 5s;
  animation-direction: reverse;
}

.orbit:nth-child(3) {
  width: 70px;
  height: 70px;
  border-bottom-color: #6a6ef6;
  animation-duration: 3.5s;
}

.central-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  box-shadow: 0 5px 15px rgba(255, 126, 95, 0.4);
  z-index: 2;
}

.unique-title {
  color: #5a4b81;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.success-text {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.success-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  border-radius: 3px;
}

.booking-id {
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px 15px;
  border-radius: 10px;
  display: inline-block;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.confirmation-message {
  color: #6a6ef6;
  font-weight: 600;
  font-size: 16px;
  margin-top: 15px;
  font-style: italic;
}

.profile-suggestion {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 18px;
  margin: 25px 0;
  display: flex;
  align-items: center;
  text-align: left;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.profile-suggestion i {
  font-size: 26px;
  color: #6a6ef6;
  margin-right: 15px;
  flex-shrink: 0;
}

.profile-suggestion p {
  margin: 0;
  color: #5a4b81;
  font-size: 15px;
  line-height: 1.5;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  padding: 14px 35px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  min-width: 140px;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.btn.unique-primary {
  background: linear-gradient(135deg, #6a6ef6, #8a64eb);
  color: white;
  box-shadow: 0 5px 15px rgba(106, 110, 246, 0.4);
}

.btn.unique-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(106, 110, 246, 0.6);
}

.btn.unique-primary:active {
  transform: translateY(1px);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsive design */
@media (max-width: 600px) {
  .popup-content {
    width: 95%;
    padding: 25px;
  }
  
  .profile-suggestion {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-suggestion i {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .unique-title {
    font-size: 24px;
  }
}
 
      `})]})};function Je({onClose:l,packageId:o,packageCode:u,basePricePerDay:d=2e3}){const{user:f}=x.useContext(rt),p=x.useRef(),[g,b]=x.useState(!1),[j,v]=x.useState(!1),[w,N]=x.useState(!1),[T,M]=x.useState({fullName:f?.name||"",email:f?.email||"",mobile:"",alternateMobile:"",destination:"",startDate:"",duration:"",adults:2,children:0,seniors:0,packageCode:u||"",accommodationPreference:"Standard",travelMode:"flight",paymentMethod:"",acceptTerms:!1}),[O,L]=x.useState(!1),[B,J]=x.useState(!1),[_,P]=x.useState(""),[le,H]=x.useState(""),[I,E]=x.useState(!1),[re,Q]=x.useState(!1),[ce,xe]=x.useState(0),[se,Re]=x.useState(0),[ee,ae]=x.useState(!1),[c,m]=x.useState(!1),[z,Z]=x.useState(0),[R,S]=x.useState(0),[U,ne]=x.useState(""),[oe,k]=x.useState(""),[te,ue]=x.useState({}),[me,ge]=x.useState(""),[Ta,Lt]=x.useState(""),wi=()=>{const ie=Number(T.adults)+Number(T.children)*.6+Number(T.seniors)*.8,st=d*Number(T.duration),Ct=Math.max(0,ie-2)*200;return st+Ct},gn=(ie,st=1)=>{if(!ie)return"";const Ct=new Date(ie);return isNaN(Ct.getTime())?(console.error("Invalid start date:",ie),""):(Ct.setDate(Ct.getDate()+st),Ct.toISOString().split("T")[0])},[Zt,xn]=x.useState(wi());x.useEffect(()=>{Si()},[]),x.useEffect(()=>{xn(wi())},[T.duration,T.startDate,T.adults,T.children,T.seniors,d]),x.useEffect(()=>{let ie;return ce>0&&(ie=setTimeout(()=>xe(ce-1),1e3)),()=>clearTimeout(ie)},[ce]),x.useEffect(()=>{let ie;return se>0&&(ie=setTimeout(()=>Re(se-1),1e3)),()=>clearTimeout(ie)},[se]);const Si=()=>{Z(Math.floor(Math.random()*9)+1),S(Math.floor(Math.random()*9)+1),ne(""),k("")},ki=()=>{b(!0),setTimeout(()=>{l?.(),b(!1)},260)},it=ie=>{const{name:st,value:Ct,type:fs,checked:Cl}=ie.target;M(jn=>({...jn,[st]:fs==="checkbox"?Cl:Ct})),ue(jn=>({...jn,[st]:""})),ge(""),Lt("")},bn=()=>{const ie={};return T.fullName.trim()||(ie.fullName="Full name is required"),T.email.trim()?/\S+@\S+\.\S+/.test(T.email)||(ie.email="Invalid email"):ie.email="Email is required",T.mobile.trim()?/^[6-9]\d{9}$/.test(T.mobile)||(ie.mobile="Enter valid 10-digit Indian mobile"):ie.mobile="Mobile is required",T.destination||(ie.destination="Destination is required"),T.startDate||(ie.startDate="Start date is required"),T.duration<1&&(ie.duration="Duration must be at least 1 day"),T.adults<1&&(ie.adults="At least 1 adult required"),T.acceptTerms||(ie.acceptTerms="You must accept terms & conditions"),ie},yn=async()=>{if(!T.email||!/\S+@\S+\.\S+/.test(T.email)){ue(ie=>({...ie,email:"Please enter a valid email"}));return}ae(!0),ge("");try{const ie=await He.post("/bookings/sendemailOtp",{email:T.email,purpose:"booking_verification"});ie.data.success?(alert(`Your Booking Email OTP is: ${ie.data.otp}`),L(!0),xe(60),Lt("OTP sent to your email!")):ge(ie.data.message||"Failed to send OTP")}catch(ie){const st=ie.response?.data?.message||ie.message||"Failed to send email OTP";ge(st)}finally{ae(!1)}},vn=async()=>{if(!T.mobile||!/^[6-9]\d{9}$/.test(T.mobile)){ue(ie=>({...ie,mobile:"Please enter valid 10-digit Indian mobile"}));return}m(!0),ge("");try{const ie=await He.post("/bookings/sendmobileOtp",{mobile:`${T.mobile}`,purpose:"booking_verification"});ie.data.success?(alert(`Your Booking Mobile OTP is: ${ie.data.otp}`),J(!0),Re(60),Lt("OTP sent to your mobile!")):ge(ie.data.message||"Failed to send OTP")}catch(ie){const st=ie.response?.data?.message||ie.message||"Failed to send mobile OTP";ge(st)}finally{m(!1)}},cs=async()=>{if(!_||_.length<4){ge("Please enter a valid OTP");return}try{const ie=await He.post("/bookings/verify",{email:T.email,otp:_,purpose:"booking_verification"});ie.data.success?(E(!0),Lt("Email verified successfully!")):ge(ie.data.message||"Invalid OTP")}catch(ie){ge(ie.response?.data?.message||"Verification failed")}},ds=async()=>{if(!le||le.length<4){ge("Please enter a valid OTP");return}try{const ie=await He.post("/bookings/verify",{mobile:`${T.mobile}`,otp:le,purpose:"booking_verification"});ie.data.success?(Q(!0),Lt("Mobile verified successfully!")):ge(ie.data.message||"Invalid OTP")}catch(ie){ge(ie.response?.data?.message||"Verification failed")}},pt=async ie=>{ie.preventDefault(),ge(""),Lt("");const st=bn();if(Object.keys(st).length)return ue(st);if(Number(U)!==z+R)return k("Captcha incorrect");if(!I||!re)return ge("Please verify both email and mobile via OTP.");v(!0)},us=async()=>{try{const ie=localStorage.getItem("token");if(!ie){ge("You must be logged in to confirm a booking");return}(await He.post("/bookings/create",{packageId:o,...T,endDate:gn(),quotedPrice:Zt},{headers:{Authorization:`Bearer ${ie}`}})).data.success&&(Lt("Booking confirmed! We've sent details to your email."),N(!0),setTimeout(()=>ki(),5e3))}catch(ie){ge(ie.response?.data?.message||"Booking failed. Please try again.")}finally{v(!1)}};return a.jsx("div",{ref:p,style:F.overlay,className:`fade-in ${g?"fade-out":""}`,onClick:ie=>ie.target===p.current&&ki(),children:a.jsxs("div",{style:F.popup,className:`slide-up ${g?"slide-down":""}`,children:[a.jsxs("div",{style:F.header,children:[a.jsx("h2",{style:F.title,children:"Tour Package Booking"}),a.jsx("button",{onClick:ki,style:F.closeButton,onMouseOver:ie=>ie.currentTarget.style.backgroundColor="#f1f1f1",onMouseOut:ie=>ie.currentTarget.style.backgroundColor="transparent",children:a.jsx(i2,{})})]}),me&&a.jsxs("div",{style:F.alertError,children:[a.jsx(qh,{style:{marginRight:8}}),me]}),Ta&&a.jsxs("div",{style:F.alertSuccess,children:[a.jsx(Gc,{style:{marginRight:8}}),Ta]}),a.jsxs("form",{style:F.form,onSubmit:pt,noValidate:!0,children:[a.jsxs("div",{style:F.section,children:[a.jsxs("div",{style:F.sectionHeader,children:[a.jsx("div",{style:F.sectionNumber,children:"1"}),a.jsx("h3",{style:F.sectionTitle,children:"Personal Details"})]}),a.jsxs("div",{style:F.grid,children:[a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Fr,{style:F.icon}),"Full Name*"]}),a.jsx("input",{style:te.fullName?F.inputError:F.input,name:"fullName",value:T.fullName,onChange:it,placeholder:"Your full name"}),te.fullName&&a.jsx("span",{style:F.errorText,children:te.fullName})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Iy,{style:F.icon}),"Email ID*"]}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("input",{style:{...te.email?F.inputError:F.input,flex:1},name:"email",value:T.email,onChange:it,placeholder:"your@email.com"}),a.jsx("button",{type:"button",onClick:yn,style:ce>0||ee?F.otpButtonDisabled:F.otpButton,disabled:ce>0||I||ee,children:I?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[a.jsx(Gc,{})," Verified"]}):ee?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[a.jsx(Vh,{className:"spin"})," Sending..."]}):ce>0?`${ce}s`:"Send OTP"})]}),te.email&&a.jsx("span",{style:F.errorText,children:te.email}),O&&!I&&a.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[a.jsx("input",{style:{...F.input,flex:1},value:_,onChange:ie=>P(ie.target.value),placeholder:"Enter email OTP",maxLength:6}),a.jsx("button",{type:"button",onClick:cs,style:F.verifyButton,children:"Verify"})]})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Yh,{style:F.icon}),"Mobile No.*"]}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("input",{style:{...te.mobile?F.inputError:F.input,flex:1},name:"mobile",value:T.mobile,onChange:it,placeholder:"10-digit mobile number",maxLength:10}),a.jsx("button",{type:"button",onClick:vn,style:se>0||c?F.otpButtonDisabled:F.otpButton,disabled:se>0||re||c,children:re?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[a.jsx(Gc,{})," Verified"]}):c?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[a.jsx(Vh,{className:"spin"})," Sending..."]}):se>0?`${se}s`:"Send OTP"})]}),te.mobile&&a.jsx("span",{style:F.errorText,children:te.mobile}),B&&!re&&a.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[a.jsx("input",{style:{...F.input,flex:1},value:le,onChange:ie=>H(ie.target.value),placeholder:"Enter mobile OTP",maxLength:6}),a.jsx("button",{type:"button",onClick:ds,style:F.verifyButton,children:"Verify"})]})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Yh,{style:F.icon}),"Alternate Mobile No."]}),a.jsx("input",{style:F.input,name:"alternateMobile",value:T.alternateMobile,onChange:it,placeholder:"Optional alternate number",maxLength:10})]})]})]}),a.jsxs("div",{style:F.section,children:[a.jsxs("div",{style:F.sectionHeader,children:[a.jsx("div",{style:F.sectionNumber,children:"2"}),a.jsx("h3",{style:F.sectionTitle,children:"Travel Details"})]}),a.jsxs("div",{style:F.grid,children:[a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Gh,{style:F.icon}),"Destination*"]}),a.jsx("input",{style:te.destination?F.inputError:F.input,name:"destination",value:T.destination,onChange:it,placeholder:"Where are you traveling?"}),te.destination&&a.jsx("span",{style:F.errorText,children:te.destination})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Hh,{style:F.icon}),"Start Date*"]}),a.jsx("input",{type:"date",style:te.startDate?F.inputError:F.input,name:"startDate",value:T.startDate,onChange:it,min:new Date().toISOString().split("T")[0]}),te.startDate&&a.jsx("span",{style:F.errorText,children:te.startDate})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Hh,{style:F.icon}),"Duration (Days)*"]}),a.jsx("select",{style:te.duration?F.inputError:F.input,name:"duration",value:T.duration,onChange:it,children:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(ie=>a.jsx("option",{value:ie,children:ie},ie))}),te.duration&&a.jsx("span",{style:F.errorText,children:te.duration})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Fr,{style:F.icon}),"Adults (12+ yrs)*"]}),a.jsx("select",{style:te.adults?F.inputError:F.input,name:"adults",value:T.adults,onChange:it,children:[1,2,3,4,5,6,7,8].map(ie=>a.jsx("option",{value:ie,children:ie},ie))}),te.adults&&a.jsx("span",{style:F.errorText,children:te.adults})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Fr,{style:F.icon}),"Children (5-12 yrs)"]}),a.jsx("select",{style:F.input,name:"children",value:T.children,onChange:it,children:[0,1,2,3,4,5].map(ie=>a.jsx("option",{value:ie,children:ie},ie))})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Fr,{style:F.icon}),"Senior Citizens (60+ yrs)"]}),a.jsx("select",{style:F.input,name:"seniors",value:T.seniors,onChange:it,children:[0,1,2,3,4].map(ie=>a.jsx("option",{value:ie,children:ie},ie))})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(qh,{style:F.icon}),"Package/Tour Code"]}),a.jsx("input",{style:F.input,name:"packageCode",value:T.packageCode,onChange:it,placeholder:"If you have a package code"})]})]})]}),a.jsxs("div",{style:F.section,children:[a.jsxs("div",{style:F.sectionHeader,children:[a.jsx("div",{style:F.sectionNumber,children:"3"}),a.jsx("h3",{style:F.sectionTitle,children:"Accommodation Preferences"})]}),a.jsxs("div",{style:F.grid,children:[a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(e2,{style:F.icon}),"Hotel Type"]}),a.jsxs("select",{style:F.input,name:"accommodationPreference",value:T.accommodationPreference,onChange:it,children:[a.jsx("option",{value:"budget",children:"Budget"}),a.jsx("option",{value:"standard",children:"Standard"}),a.jsx("option",{value:"Luxury",children:"Luxury"}),a.jsx("option",{value:"Deluxe",children:"Deluxe"}),a.jsx("option",{value:"Homestay",children:"Homestay"})]})]}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(Gh,{style:F.icon}),"Travel Mode"]}),a.jsxs("select",{style:F.input,name:"travelMode",value:T.travelMode,onChange:it,children:[a.jsx("option",{value:"flight",children:"Flight"}),a.jsx("option",{value:"train",children:"Train"}),a.jsx("option",{value:"bus",children:"Bus"}),a.jsx("option",{value:"self",children:"Self Arranged"})]})]})]})]}),a.jsxs("div",{style:F.section,children:[a.jsxs("div",{style:F.sectionHeader,children:[a.jsx("div",{style:F.sectionNumber,children:"4"}),a.jsx("h3",{style:F.sectionTitle,children:"Payment Details"})]}),a.jsx("div",{style:F.grid,children:a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.label,children:[a.jsx(t2,{style:F.icon}),"Payment Method"]}),a.jsxs("select",{style:F.input,name:"paymentMethod",value:T.paymentMethod,onChange:it,children:[a.jsx("option",{value:"",children:"Select payment method"}),a.jsx("option",{value:"credit_card",children:"Credit Card"}),a.jsx("option",{value:"debit_card",children:"Debit Card"}),a.jsx("option",{value:"net_banking",children:"Net Banking"}),a.jsx("option",{value:"upi",children:"UPI"}),a.jsx("option",{value:"wallet",children:"Wallet"})]})]})}),a.jsx("div",{style:F.quoteBox,children:a.jsxs("div",{style:F.quoteContent,children:[a.jsx("div",{style:F.quoteTitle,children:"Estimated Quotation"}),a.jsxs("div",{style:F.quotePrice,children:["₹ ",Zt.toLocaleString("en-IN")]}),a.jsxs("div",{style:F.quoteBreakdown,children:[T.duration," ",T.duration===1?"day":"days"," × ₹",d,"/day + travelers adjustment"]}),T.startDate&&a.jsxs("div",{style:F.quoteDates,children:[T.startDate," to ",gn(T.startDate)]})]})}),a.jsxs("div",{style:F.formGroup,children:[a.jsxs("label",{style:F.checkboxLabel,children:[a.jsx("input",{type:"checkbox",name:"acceptTerms",checked:T.acceptTerms,onChange:it,style:F.checkboxInput}),"I agree to the Terms & Conditions and Privacy Policy*"]}),te.acceptTerms&&a.jsx("span",{style:F.errorText,children:te.acceptTerms})]}),a.jsxs("div",{style:F.captchaContainer,children:[a.jsx("div",{style:F.captchaLabel,children:"Human Verification:"}),a.jsxs("div",{style:F.captchaBox,children:[a.jsxs("div",{style:F.captchaQuestion,children:[z," + ",R," ="]}),a.jsx("input",{style:F.captchaInput,value:U,onChange:ie=>ne(ie.target.value),placeholder:"Your answer"}),a.jsx("button",{type:"button",style:F.captchaRefresh,onClick:Si,title:"Refresh captcha",children:a.jsx(a2,{})})]}),oe&&a.jsx("div",{style:F.errorText,children:oe})]})]}),a.jsxs("div",{style:F.buttonGroup,children:[a.jsx("button",{type:"submit",style:F.submitButton,children:"Proceed to Booking"}),a.jsx("button",{type:"button",onClick:ki,style:F.cancelButton,children:"Cancel"})]})]}),j&&a.jsx("div",{style:F.confirmationOverlay,children:a.jsxs("div",{style:F.confirmationModal,children:[a.jsx("h3",{style:F.confirmationTitle,children:"Confirm Booking"}),a.jsxs("p",{style:F.confirmationText,children:["Are you sure you want to proceed with this booking for ",a.jsx("strong",{children:T.destination})," from ",a.jsx("strong",{children:T.startDate})," for ",a.jsxs("strong",{children:[T.duration," ",T.duration===1?"day":"days"]}),"?"]}),a.jsxs("p",{style:F.confirmationPrice,children:["Total: ₹ ",Zt.toLocaleString("en-IN")]}),a.jsxs("div",{style:F.confirmationButtons,children:[a.jsx("button",{onClick:us,style:F.confirmButton,children:"Confirm & Book"}),a.jsx("button",{onClick:()=>{v(!1)},style:F.cancelButton,children:"Go Back"})]})]})}),w&&a.jsx(n2,{}),a.jsx("style",{children:`
          .fade-in { animation: fadeIn .25s ease-out forwards; }
          .fade-out { animation: fadeOut .25s ease-out forwards; }
          .slide-up { animation: slideUp .25s ease-out forwards; }
          .slide-down { animation: slideDown .25s ease-out forwards; }
          @keyframes fadeIn { from{opacity:0} to{opacity:1} }
          @keyframes fadeOut { from{opacity:1} to{opacity:0} }
          @keyframes slideUp { from{transform:translateY(14px);opacity:.0} to{transform:translateY(0);opacity:1} }
          @keyframes slideDown { from{transform:translateY(0);opacity:1} to{transform:translateY(14px);opacity:0} }
          .spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]})})}const F={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1500,padding:10,backdropFilter:"blur(4px)"},popup:{background:"#fff",width:"800px",maxWidth:"96%",borderRadius:12,boxShadow:"0 10px 28px rgba(0,0,0,.25)",padding:"20px 22px",maxHeight:"90vh",overflowY:"auto"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px",position:"relative"},title:{fontWeight:700,fontSize:"1.6rem",color:"#2c3e50",margin:0},closeButton:{background:"none",border:"none",fontSize:"1.5rem",color:"#7f8c8d",cursor:"pointer",padding:"4px 8px",borderRadius:"50%",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36},form:{display:"flex",flexDirection:"column",gap:16},section:{border:"1px solid #e0e0e0",borderRadius:10,padding:"16px 20px",marginBottom:16},sectionHeader:{display:"flex",alignItems:"center",marginBottom:16,borderBottom:"1px solid #eee",paddingBottom:12},sectionNumber:{backgroundColor:"#3498db",color:"white",borderRadius:"50%",width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",marginRight:12,fontSize:"0.9rem",fontWeight:"bold"},sectionTitle:{margin:0,fontSize:"1.2rem",color:"#2c3e50"},grid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},formGroup:{marginBottom:12},label:{display:"flex",alignItems:"center",gap:8,fontWeight:600,color:"#34495e",fontSize:"0.9rem",marginBottom:6},icon:{color:"#7f8c8d",fontSize:"0.9rem"},input:{padding:"10px 12px",border:"1.5px solid #ddd",borderRadius:8,fontSize:"0.95rem",width:"100%",boxSizing:"border-box",transition:"all 0.2s",appearance:"none",":focus":{borderColor:"#3498db",boxShadow:"0 0 0 2px rgba(52,152,219,0.2)",outline:"none"}},inputError:{padding:"10px 12px",border:"1.5px solid #e74c3c",borderRadius:8,fontSize:"0.95rem",width:"100%",boxSizing:"border-box",transition:"all 0.2s",":focus":{borderColor:"#e74c3c",boxShadow:"0 0 0 2px rgba(231,76,60,0.2)",outline:"none"}},errorText:{color:"#e74c3c",fontSize:"0.8rem",marginTop:4,display:"block"},alertError:{backgroundColor:"#fdecea",color:"#d32f2f",padding:"12px 16px",borderRadius:8,marginBottom:16,display:"flex",alignItems:"center",fontSize:"0.9rem",fontWeight:500},alertSuccess:{backgroundColor:"#e8f5e9",color:"#2e7d32",padding:"12px 16px",borderRadius:8,marginBottom:16,display:"flex",alignItems:"center",fontSize:"0.9rem",fontWeight:500},otpButton:{whiteSpace:"nowrap",padding:"10px 12px",border:"none",borderRadius:8,background:"#3498db",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:"0.85rem",transition:"all 0.2s",minWidth:60,":hover":{background:"#2980b9"}},otpButtonDisabled:{whiteSpace:"nowrap",padding:"10px 12px",border:"none",borderRadius:8,background:"#bdc3c7",color:"#7f8c8d",fontWeight:600,cursor:"not-allowed",fontSize:"0.85rem",minWidth:60},verifyButton:{whiteSpace:"nowrap",padding:"10px 12px",border:"none",borderRadius:8,background:"#2ecc71",color:"#fff",fontWeight:600,cursor:"pointer",fontSize:"0.85rem",transition:"all 0.2s",":hover":{background:"#27ae60"}},quoteBox:{margin:"16px 0",padding:"16px",border:"1px dashed #95a5a6",borderRadius:10,background:"#f8f9fa"},quoteContent:{display:"flex",flexDirection:"column",gap:4},quoteTitle:{fontSize:"0.9rem",fontWeight:600,color:"#7f8c8d"},quotePrice:{fontSize:"1.6rem",fontWeight:800,color:"#2c3e50"},quoteBreakdown:{fontSize:"0.8rem",color:"#95a5a6"},quoteDates:{fontSize:"0.8rem",color:"#95a5a6",marginTop:4},captchaContainer:{display:"flex",flexDirection:"column",gap:8,margin:"12px 0"},captchaLabel:{fontSize:"0.9rem",fontWeight:600,color:"#34495e"},captchaBox:{display:"flex",alignItems:"center",gap:8},captchaQuestion:{padding:"8px 12px",border:"1px solid #ddd",borderRadius:8,background:"#f8f9fa",fontWeight:700,fontSize:"1.1rem",minWidth:60,textAlign:"center"},captchaInput:{padding:"10px 12px",border:"1.5px solid #ddd",borderRadius:8,fontSize:"1rem",width:100,":focus":{borderColor:"#3498db",boxShadow:"0 0 0 2px rgba(52,152,219,0.2)"}},captchaRefresh:{background:"#ecf0f1",border:"none",borderRadius:8,padding:"8px 10px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",":hover":{background:"#bdc3c7"}},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:"0.9rem",color:"#34495e",cursor:"pointer"},checkboxInput:{width:16,height:16,accentColor:"#3498db"},buttonGroup:{display:"flex",gap:12,marginTop:16},submitButton:{flex:1,padding:"14px",border:"none",borderRadius:8,background:"#3498db",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:"1rem",transition:"all 0.2s",":hover":{background:"#2980b9"}},cancelButton:{flex:1,padding:"14px",border:"1.5px solid #bdc3c7",borderRadius:8,background:"transparent",color:"#7f8c8d",fontWeight:700,cursor:"pointer",fontSize:"1rem",transition:"all 0.2s",":hover":{background:"#f1f1f1"}},confirmationOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},confirmationModal:{backgroundColor:"white",padding:"24px",borderRadius:"12px",maxWidth:"500px",width:"90%",boxShadow:"0 5px 20px rgba(0,0,0,0.2)"},confirmationTitle:{marginTop:0,color:"#2c3e50",fontSize:"1.4rem"},confirmationText:{margin:"16px 0",fontSize:"1rem",color:"#34495e",lineHeight:1.5},confirmationPrice:{fontSize:"1.2rem",fontWeight:"bold",color:"#27ae60",margin:"16px 0"},confirmationButtons:{display:"flex",gap:"12px",marginTop:"24px"},confirmButton:{flex:1,padding:"12px",backgroundColor:"#27ae60",color:"white",border:"none",borderRadius:"8px",fontWeight:"bold",cursor:"pointer",transition:"background-color 0.2s",":hover":{backgroundColor:"#219653"}}};function l2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/kerala/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Kerla Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Kerla?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Kerla Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function r2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/rajasthan/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Rajasthan Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Rajasthan?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Rajasthan Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function s2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/sikkim/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Sikkim Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Sikkim?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Sikkim Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function o2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/kashmir/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Kashmir  Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Kashmir?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Kashmir Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function c2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/rishikesh/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Rishikesh Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Rishikesh?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Rishikesh Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function d2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/andman/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Andaman Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Andaman?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Andaman Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
          overlay: none;
          
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function u2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/agra/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Agra Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Agra?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Agra Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function f2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/udaipur/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Udaipur Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Udaipur?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Udaipur Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function m2(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/manali/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Manali Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Manali?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Manali Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function Ph(){const[l,o]=x.useState({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricing:{currency:"₹",original:"",discounted:""}}),{user:u}=x.useContext(rt),[d,f]=x.useState(!1),[p,g]=x.useState(!1),[b,j]=x.useState(!0),[v,w]=x.useState(!1),[N,T]=x.useState([]),[M,O]=x.useState([]),[L,B]=x.useState(!1),[J,_]=x.useState(!1),P=()=>{u?f(!0):(_(!0),B(!0))},le=()=>{_(!1),g(!0)},H=c=>{setUser(c),g(!1),L&&(f(!0),B(!1))},I=[{id:1,name:"3D/2N",axiosEndpoint:"/axios/packages/3d2n"},{id:2,name:"4D/3N",axiosEndpoint:"/axios/packages/4d3n"},{id:3,name:"5D/4N",axiosEndpoint:"/axios/packages/5d4n"},{id:4,name:"7D/6N",axiosEndpoint:"/axios/packages/7d6n"}],[E,re]=x.useState(1);x.useEffect(()=>{(async()=>{j(!0);try{const m=await He.get("/explore-packages/ooty/getallpackage");if(!m.data||!Array.isArray(m.data.data)){console.error("Invalid axios response:",m.data),j(!1);return}const z=m.data.data.map(R=>{const U=R.normalizedPricing||(Array.isArray(R.pricing)&&R.pricing.length>0?R.pricing[0]:R.pricing&&typeof R.pricing=="object"?R.pricing:{currency:"₹",original:"",discounted:""});return{...R,pricingObj:{currency:U.currency||"₹",original:U.original||"",discounted:U.discounted||""}}});O(z);const Z=Q(z,E);Z?o(Z):z.length>0&&o(z[0]),console.log("Fetched packages:",z)}catch(m){console.error("Error fetching package data:",m)}finally{j(!1)}})()},[]);const Q=(c,m)=>{if(!Array.isArray(c))return null;let z="";if(typeof m=="number"){const R=I.find(S=>S.id===m);if(!R)return null;z=R.name}else if(typeof m=="string")z=m;else return null;return c.find(R=>(R.duration||"").toString().trim().toLowerCase()===z.toLowerCase())||null};x.useEffect(()=>{if(M.length>0){const c=Q(M,E);c?(console.log("Setting package data:",c),o(c)):(console.log(`No package found for category ${E}`),o({name:"",category:"",highlights:[],itinerary:[],gallery:[],testimonials:[],pricingObj:{currency:"₹",original:"",discounted:""}}))}},[E,M]);const ce=c=>{re(c)},xe=()=>{const c=M.map(m=>({name:m.duration||m.name||"Unknown Package",pricing:m.pricingObj||null,price:m.price||null,rating:m.testimonials&&m.testimonials.length>0?m.testimonials[0].rating:null,highlights:m.highlights||[]}));T(c),w(!0)},se=()=>w(!1),ee=(c=>c?c.pricingObj?c.pricingObj:Array.isArray(c.pricing)&&c.pricing.length>0?c.pricing[0]:c.pricing&&typeof c.pricing=="object"?c.pricing:{currency:"₹",original:"",discounted:""}:{currency:"₹",original:"",discounted:""})(l),ae={alertOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},alertBox:{backgroundColor:"#fff",padding:"20px 30px",borderRadius:"10px",width:"350px",height:"120px",textAlign:"center",boxShadow:"0 0 10px rgba(0,0,0,0.3)"},alertButton:{marginTop:"15px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},categoryPanel:{zIndex:1}};return a.jsxs("div",{className:"goa-package",children:[a.jsxs("div",{className:"hero-section text-center text-white position-relative",children:[a.jsxs("div",{className:"package-tag",children:[I.find(c=>c.id===E)?.name," PREMIUM EXPERIENCE"]}),a.jsxs("div",{className:"container position-relative z-index-1 py-5",children:[a.jsx("h1",{className:"display-3 fw-bold mb-3",children:"Ooty Golden Escape"}),a.jsx("p",{className:"lead fs-2 mb-4",children:"Where Every Moment Shines Brighter"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsxs("button",{className:"btn btn-light btn-lg px-4 fw-bold book-now-btn",onClick:P,children:["Book Now @ ",ee?.currency||"₹",ee?.discounted||"--"]}),a.jsx("button",{className:"btn btn-outline-light btn-lg ml-2 px-4",children:"Watch Video"})]})]}),a.jsx("div",{className:"hero-overlay"})]}),a.jsx("div",{className:"container my-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-4",children:l.highlights?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"highlight-card p-3 text-center h-100",children:[a.jsx("div",{className:"highlight-icon fs-1 mb-2",children:c.icon}),a.jsx("p",{className:"mb-0 fw-medium",children:c.text})]})},m))})}),a.jsx("div",{className:"container-fluid",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-lg-9",children:a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Your Curated Itinerary"}),a.jsx("p",{className:"lead",children:"Every Hour Planned for Maximum Enjoyment"}),a.jsx("div",{className:"header-divider"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"itinerary-timeline",children:l.itinerary?.map((c,m)=>a.jsxs("div",{className:"timeline-day",children:[a.jsx("div",{className:"timeline-badge",children:a.jsx("span",{className:"day-icon",children:c.icon})}),a.jsxs("div",{className:"timeline-content",children:[a.jsx("h3",{children:c.day}),a.jsx("ul",{className:"activity-list",children:c.activities.map((z,Z)=>{const[R,S]=z.split(" - ");return a.jsxs("li",{children:[a.jsx("span",{className:"activity-time",children:R}),a.jsx("span",{className:"activity-desc",children:S})]},Z)})})]})]},m))})]})}),a.jsx("div",{className:"col-lg-3",style:ae.categoryPanel,children:a.jsx("div",{className:"category-sidebar",children:a.jsxs("div",{className:"category-panel p-4 sticky-top",children:[a.jsx("h4",{className:"mb-4",children:"Package Duration"}),a.jsx("ul",{className:"category-list",children:I.map(c=>a.jsxs("li",{className:E===c.id?"active":"",onClick:()=>ce(c.id),children:[c.name,E===c.id&&a.jsx("span",{className:"category-badge",children:"Most Popular"})]},c.id))}),a.jsxs("div",{className:"category-info mt-4",children:[a.jsx("p",{children:"Select duration to see itinerary and pricing details."}),a.jsx("button",{className:"btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary",onClick:xe,children:"Compare All"})]})]})})})]})}),a.jsxs("div",{className:"container-fluid px-0 my-5",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Visual Journey"}),a.jsx("p",{className:"lead",children:"Moments You'll Cherish Forever"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row g-0",children:l.gallery?.map((c,m)=>a.jsx("div",{className:"col-md-4 col-6",children:a.jsxs("div",{className:"gallery-item",children:[a.jsx("img",{src:c.img||`https://via.placeholder.com/800x600?text=Goa+${m+1}`,alt:c.caption||`Gallery image ${m+1}`,className:"img-fluid",loading:"lazy"}),a.jsx("div",{className:"gallery-caption",children:a.jsx("p",{children:c.caption||`Image ${m+1}`})})]})},m))})]}),a.jsx("div",{className:"container my-5 py-5",children:b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"pricing-card p-5 rounded-4 shadow-lg",children:a.jsxs("div",{className:"row align-items-center",children:[a.jsxs("div",{className:"col-lg-7",children:[a.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Ready to Experience Ooty?"}),a.jsxs("p",{className:"lead mb-4",children:["Limited slots available for our premium"," ",I.find(c=>c.id===E)?.name," package"]}),a.jsx("ul",{className:"package-features",children:l.highlights?.slice(0,4).map((c,m)=>a.jsxs("li",{children:["✅ ",c.text]},m))})]}),a.jsx("div",{className:"col-lg-5",children:a.jsxs("div",{className:"price-box text-center p-4",children:[a.jsxs("div",{className:"price-original text-decoration-line-through",children:[ee.currency||"₹",ee.original||"--"]}),a.jsxs("div",{className:"price-discounted display-4 fw-bold",children:[ee.currency||"₹",ee.discounted||"--"]}),a.jsx("div",{className:"price-note mb-3",children:"Per person (Double occupancy)"}),a.jsx("button",{className:"btn btn-primary btn-lg w-100 mb-2",onClick:P,children:"Book Now"}),a.jsx("div",{className:"d-flex justify-content-center gap-3",children:a.jsx("span",{className:"badge",children:"Free Cancellation"})})]})})]})})}),a.jsxs("div",{className:"container my-5 py-4",children:[a.jsxs("div",{className:"section-header mb-5 text-center",children:[a.jsx("h2",{className:"display-5 fw-bold",children:"Traveler Stories"}),a.jsx("p",{className:"lead",children:"Don't just take our word for it"})]}),b?a.jsx("div",{className:"text-center py-5",children:a.jsx("div",{className:"spinner-border text-primary",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):a.jsx("div",{className:"row",children:l.testimonials?.map((c,m)=>a.jsx("div",{className:"col-md-6 mb-4",children:a.jsxs("div",{className:"testimonial-card h-100 p-4",children:[a.jsxs("div",{className:"testimonial-header mb-3",children:[a.jsx("span",{className:"testimonial-avatar fs-1",children:c.avatar||"👤"}),a.jsxs("div",{children:[a.jsxs("div",{className:"testimonial-rating",children:["★".repeat(c.rating||0),"☆".repeat(5-(c.rating||0))]}),a.jsx("div",{className:"testimonial-author",children:c.author||"Anonymous"})]})]}),a.jsxs("blockquote",{className:"testimonial-quote",children:['"',c.quote||"Great experience!",'"']})]})},m))})]}),a.jsx("div",{className:"container-fluid final-cta py-5 mb-0",children:a.jsxs("div",{className:"container text-center",children:[a.jsx("h2",{className:"display-5 fw-bold text-white mb-4",children:"Your Ooty Adventure Awaits"}),a.jsx("p",{className:"lead text-white mb-5",children:"Limited slots available for next month. Reserve yours today!"}),a.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[a.jsx("button",{className:"btn btn-light btn-lg px-5 fw-bold",onClick:P,children:"Book Now"}),J&&a.jsx("div",{style:ae.alertOverlay,children:a.jsxs("div",{style:ae.alertBox,children:[a.jsx("p",{children:"Please login first to book"}),a.jsx("button",{onClick:le,style:ae.alertButton,children:"OK"})]})}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{user:u,onClose:()=>f(!1)}),a.jsx("button",{className:"btn btn-outline-light ml-2 btn-lg px-5",children:"Get Brochure"})]})]})}),v&&a.jsxs("div",{className:"comparison-modal",children:[a.jsx("div",{className:"modal-overlay",onClick:se}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:"Compare All Packages"}),a.jsx("button",{className:"close-btn",onClick:se,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsx("div",{className:"table-responsive comparison-table-container",children:a.jsxs("table",{className:"table comparison-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"sticky-header",children:"Features"}),N.map((c,m)=>a.jsx("th",{className:"sticky-header",children:c.name||"Unknown Package"},m))]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Price"}),N.map((c,m)=>a.jsx("td",{children:c.pricing?`${c.pricing.currency}${c.pricing.discounted}`:c.price?`₹${c.price}`:"-"},`${m}-price`))]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Rating"}),N.map((c,m)=>a.jsx("td",{children:c.rating?`${c.rating} ★`:"-"},`${m}-rating`))]}),[...Array(Math.max(...N.map(c=>c.highlights?.length||0)))].map((c,m)=>a.jsxs("tr",{children:[a.jsx("td",{children:m===0?"Highlights":""}),N.map((z,Z)=>a.jsx("td",{children:z.highlights?.[m]?`${z.highlights[m].text}`:"-"},`${Z}-highlight-${m}`))]},`highlight-${m}`))]})]})})}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-primary",onClick:se,children:"Close"}),p&&a.jsx(Qe,{onClose:()=>g(!1),onLoginSuccess:H}),d&&a.jsx(Je,{onClose:()=>f(!1)})]})]})]}),a.jsx("style",{jsx:!0,children:`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `})]})}function h2(){return a.jsx("div",{style:{textAlign:"center",marginTop:"100px"},children:a.jsxs("div",{className:"container text-center mt-5 mt-5",children:[a.jsx("h1",{className:"display-4 text-danger fw-bold mt-5",children:"404 - Page Not Found"}),a.jsx("p",{className:"text-secondary fs-5 mt-",children:"Oops! The page you are looking for doesn’t exist or has been moved."})]})})}const Xh="https://my-travel-app-backend-6.onrender.com";function p2(){const[l,o]=x.useState([]),[u,d]=x.useState([]),[f,p]=x.useState(null),[g,b]=x.useState([]),[j,v]=x.useState([]),[w,N]=x.useState(!1);x.useEffect(()=>{(async()=>{try{const L=await Pe.get(`${Xh}/api/titles`);L.data.success&&(o(L.data.titles1),d(L.data.titles2))}catch(L){console.error("Failed to fetch titles:",L)}})()},[]);const T=O=>{const L=Array.from(O.target.files);b(L),v(L.map(B=>URL.createObjectURL(B)))},M=async()=>{if(!f){alert("Please select a title first");return}if(g.length===0){alert("Please select at least one image");return}const O=new FormData;O.append("image",g[0]);try{N(!0);const L=await Pe.post(`${Xh}/api/upload/${f}`,O,{headers:{"Content-Type":"multipart/form-data"}});alert("Image uploaded successfully!"),console.log(L.data)}catch(L){console.error("Upload error:",L.response?.data||L.message),alert("Error uploading image.")}finally{N(!1)}};return a.jsxs("div",{style:{padding:"20px",maxWidth:"500px",margin:"auto"},children:[a.jsx("h3",{children:"Update Images by Title"}),a.jsx("label",{style:{display:"block",marginBottom:"6px"},children:"Select Title:"}),a.jsxs("select",{value:f,onChange:O=>p(O.target.value),style:{width:"100%",padding:"8px",borderRadius:"5px",border:"1px solid #ccc",marginBottom:"15px"},children:[a.jsx("option",{value:"",children:"-- Choose Title --"}),l&&u&&[...l,...u].map((O,L)=>a.jsx("option",{value:O.title,children:O.title},L))]}),a.jsx("input",{type:"file",onChange:T,accept:"image/*"}),a.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"10px",flexWrap:"wrap"},children:j.map((O,L)=>a.jsx("img",{src:O,alt:"preview",width:100,height:100,style:{borderRadius:"10px",objectFit:"cover"}},L))}),a.jsx("button",{onClick:M,disabled:w,style:{marginTop:"15px",background:w?"#888":"#007bff",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"},children:w?"Uploading...":"Upload Image"})]})}const g2=x.lazy(()=>Ea(()=>import("./Start-BADUjwQc.js"),__vite__mapDeps([0,1]))),x2=x.lazy(()=>Ea(()=>import("./CustomTourP-0Vvz1RIV.js"),[])),b2=x.lazy(()=>Ea(()=>import("./AdventureTourP-C6xD5KVT.js"),__vite__mapDeps([2,3]))),y2=x.lazy(()=>Ea(()=>import("./FamilyTourP-Uxwg8H1N.js"),[])),v2=x.lazy(()=>Ea(()=>import("./GroupTourP-8rBIi6Sw.js"),[])),j2=x.lazy(()=>Ea(()=>import("./CityTourP-CrN2659U.js"),[])),N2=x.lazy(()=>Ea(()=>import("./Manali-qcA_-M51.js"),[])),w2=x.lazy(()=>Ea(()=>import("./Goa-QcibDBYX.js"),[])),S2=x.lazy(()=>Ea(()=>import("./Maharashtra-CPGUj-K6.js"),[])),k2=()=>a.jsxs(a.Fragment,{children:[a.jsx(Gp,{}),a.jsx(x.Suspense,{fallback:a.jsx("div",{className:"loading",children:"Loading..."}),children:a.jsxs(g1,{children:[a.jsx(_e,{path:"/register",element:a.jsx(_p,{})}),a.jsx(_e,{path:"services",element:a.jsx(Wy,{})}),a.jsx(_e,{path:"",element:a.jsx(g2,{})}),a.jsx(_e,{path:"/custom-tours",element:a.jsx(x2,{})}),a.jsx(_e,{path:"/Adventure-tours",element:a.jsx(b2,{})}),a.jsx(_e,{path:"/family-tours",element:a.jsx(y2,{})}),a.jsx(_e,{path:"/group-tours",element:a.jsx(v2,{})}),a.jsx(_e,{path:"/city-tours",element:a.jsx(j2,{})}),a.jsx(_e,{path:"/update",element:a.jsx(p2,{})}),a.jsx(_e,{path:"/manali-Packages",element:a.jsx(N2,{})}),a.jsx(_e,{path:"/goa-Packages",element:a.jsx(w2,{})}),a.jsx(_e,{path:"/kerala-Packages",element:a.jsx(l2,{})}),a.jsx(_e,{path:"/rajasthan-Packages",element:a.jsx(r2,{})}),a.jsx(_e,{path:"/sikkim-Packages",element:a.jsx(s2,{})}),a.jsx(_e,{path:"/kashmir-Packages",element:a.jsx(o2,{})}),a.jsx(_e,{path:"/rishikesh-Packages",element:a.jsx(c2,{})}),a.jsx(_e,{path:"/andaman-Packages",element:a.jsx(d2,{})}),a.jsx(_e,{path:"/agra-Packages",element:a.jsx(u2,{})}),a.jsx(_e,{path:"/Udaipur-Packages",element:a.jsx(f2,{})}),a.jsx(_e,{path:"/ladakh-Packages",element:a.jsx(m2,{})}),a.jsx(_e,{path:"/Ooty-Packages",element:a.jsx(Ph,{})}),a.jsx(_e,{path:"/ladakh-Packages",element:a.jsx(Ph,{})}),a.jsx(_e,{path:"/booking/:packageId",element:a.jsx(Je,{})}),a.jsx(_e,{path:"/my-bookings",element:a.jsx(Up,{})}),a.jsx(_e,{path:"/my-profile",element:a.jsx(Yp,{})}),a.jsx(_e,{path:"/Maharashtra",element:a.jsx(S2,{})}),a.jsx(_e,{path:"*",element:a.jsx(h2,{})})]})}),a.jsx(h1,{})]});gx.createRoot(document.getElementById("root")).render(a.jsx(ti.StrictMode,{children:a.jsx(Y1,{children:a.jsx(J1,{children:a.jsx(k2,{})})})}));export{rt as A,Je as B,Q2 as F,la as L,h1 as O,Ea as _,K2 as a,W2 as b,I2 as c,ev as d,tv as e,av as f,Fh as g,Iy as h,Z2 as i,a as j,F2 as k,$2 as l,X2 as m,J2 as n,x as o,He as p,Qe as q,Kc as r,Wc as s,C2 as t,za as u,Pe as v};
