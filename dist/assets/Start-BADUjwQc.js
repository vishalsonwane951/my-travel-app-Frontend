const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Domestic-DlrkgYQz.js","assets/index-BS50Ti_m.js","assets/index-CaMI6Vo0.css","assets/International-CW8CMBXn.js"])))=>i.map(i=>d[i]);
import{r as W,g as Ie,j as e,F as Ne,a as Pe,b as Re,c as Me,d as te,e as Ee,f as _e,h as ke,i as De,k as Ae,l as Oe,m as Le,n as We,o as R,A as Fe,u as Ve,B as ze,p as ie,_ as ye}from"./index-BS50Ti_m.js";var V={},O={},I={},X={},oe;function J(){return oe||(oe=1,(function(f){function b(l,s,d){var S=s.slidesToShow,T=s.currentSlide;return d.length>2*S?l+2*S:T>=d.length?d.length+l:l}function p(l,s){if(s.length>2*l){for(var d={},S=s.length-2*l,T=s.length-S,a=S,o=0;o<T;o++)d[o]=a,a++;var i=s.length+T,t=i+s.slice(0,2*l).length,r=0;for(o=i;o<=t;o++)d[o]=r,r++;var n=i,h=0;for(o=T;o<n;o++)d[o]=h,h++;return d}d={};var g=3*s.length,v=0;for(o=0;o<g;o++)d[o]=v,++v===s.length&&(v=0);return d}function u(l,s){return s.length<l?s:s.length>2*l?s.slice(s.length-2*l,s.length).concat(s,s.slice(0,2*l)):s.concat(s,s)}function c(l,s){return s.length>2*l?2*l:s.length}function m(l,s,d){var S,T=l.currentSlide,a=l.slidesToShow,o=l.itemWidth,i=l.totalItems,t=0,r=0,n=T===0,h=s.length-(s.length-2*a);return s.length<a?(r=t=0,n=S=!1):s.length>2*a?((S=T>=h+s.length)&&(r=-o*(t=T-s.length)),n&&(r=-o*(t=h+(s.length-2*a)))):((S=T>=2*s.length)&&(r=-o*(t=T-s.length)),n&&(r=d.showDots?-o*(t=s.length):-o*(t=i/3))),{isReachingTheEnd:S,isReachingTheStart:n,nextSlide:t,nextPosition:r}}Object.defineProperty(f,"__esModule",{value:!0}),f.getOriginalCounterPart=b,f.getOriginalIndexLookupTableByClones=p,f.getClones=u,f.getInitialSlideInInfiniteMode=c,f.checkClonesPosition=m})(X)),X}var L={},re;function Se(){if(re)return L;re=1,Object.defineProperty(L,"__esModule",{value:!0});function f(u,c,m,l){var s=0,d=l||m;return c&&d&&(s=u[d].partialVisibilityGutter||u[d].paritialVisibilityGutter),s}function b(u,c){var m;return c[u]&&(m=(100/c[u].items).toFixed(1)),m}function p(u,c,m){return Math.round(m/(c+(u.centerMode?1:0)))}return L.getPartialVisibilityGutter=f,L.getWidthFromDeviceType=b,L.getItemClientSideWidth=p,L}var M={},se;function D(){if(se)return M;se=1,Object.defineProperty(M,"__esModule",{value:!0});var f=Se();function b(a){var o=a.slidesToShow;return a.totalItems<o}function p(a,o){var i,t=a.domLoaded,r=a.slidesToShow,n=a.containerWidth,h=a.itemWidth,g=o.deviceType,v=o.responsive,y=o.ssr,w=o.partialVisbile,C=o.partialVisible,N=!!(t&&r&&n&&h);y&&g&&!N&&(i=f.getWidthFromDeviceType(g,v));var x=!!(y&&g&&!N&&i);return{shouldRenderOnSSR:x,flexBisis:i,domFullyLoaded:N,partialVisibilityGutter:f.getPartialVisibilityGutter(v,w||C,g,a.deviceType),shouldRenderAtAll:x||N}}function u(a,o){var i=o.currentSlide,t=o.slidesToShow;return i<=a&&a<i+t}function c(a,o,i){var t=i||a.transform;return!o.infinite&&a.currentSlide===0||b(a)?t:t+a.itemWidth/2}function m(a){return!(0<a.currentSlide)}function l(a){var o=a.currentSlide,i=a.totalItems;return!(o+a.slidesToShow<i)}function s(a,o,i,t){o===void 0&&(o=0);var r=a.currentSlide,n=a.slidesToShow,h=l(a),g=!i.infinite&&h,v=t||a.transform;if(b(a))return v;var y=v+r*o;return g?y+(a.containerWidth-(a.itemWidth-o)*n):y}function d(a,o){return a.rtl?-1*o:o}function S(a,o,i){var t=o.partialVisbile,r=o.partialVisible,n=o.responsive,h=o.deviceType,g=o.centerMode,v=i||a.transform,y=f.getPartialVisibilityGutter(n,t||r,h,a.deviceType);return d(o,r||t?s(a,y,o,i):g?c(a,o,i):v)}function T(a,o){var i=a.domLoaded,t=a.slidesToShow,r=a.containerWidth,n=a.itemWidth,h=o.deviceType,g=o.responsive,v=o.slidesToSlide||1,y=!!(i&&t&&r&&n);return o.ssr&&o.deviceType&&!y&&Object.keys(g).forEach(function(w){var C=g[w].slidesToSlide;h===w&&C&&(v=C)}),y&&Object.keys(g).forEach(function(w){var C=g[w],N=C.breakpoint,x=C.slidesToSlide,j=N.max,P=N.min;x&&window.innerWidth>=P&&window.innerWidth<=j&&(v=x)}),v}return M.notEnoughChildren=b,M.getInitialState=p,M.getIfSlideIsVisbile=u,M.getTransformForCenterMode=c,M.isInLeftEnd=m,M.isInRightEnd=l,M.getTransformForPartialVsibile=s,M.parsePosition=d,M.getTransform=S,M.getSlidesToSlide=T,M}var z={},ne;function qe(){if(ne)return z;ne=1,Object.defineProperty(z,"__esModule",{value:!0});var f=function(b,p,u){var c;return function(){var m=arguments;c||(b.apply(this,m),c=!0,typeof u=="function"&&u(!0),setTimeout(function(){c=!1,typeof u=="function"&&u(!1)},p))}};return z.default=f,z}var K={},ae;function Be(){return ae||(ae=1,(function(f){function b(p,u){var c=u.partialVisbile,m=u.partialVisible,l=u.centerMode,s=u.ssr,d=u.responsive;if((c||m)&&l)throw new Error("center mode can not be used at the same time with partialVisible");if(!d)throw s?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(d&&typeof d!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(f,"__esModule",{value:!0}),f.default=b})(K)),K}var q={},le;function Ge(){if(le)return q;le=1,Object.defineProperty(q,"__esModule",{value:!0});var f=D();function b(p,u,c){c===void 0&&(c=0);var m,l,s=p.slidesToShow,d=p.currentSlide,S=p.itemWidth,T=p.totalItems,a=f.getSlidesToSlide(p,u),o=d+1+c+s+(0<c?0:a);return l=o<=T?-S*(m=d+c+(0<c?0:a)):T<o&&d!==T-s?-S*(m=T-s):m=void 0,{nextSlides:m,nextPosition:l}}return q.populateNextSlides=b,q}var B={},ce;function Ue(){if(ce)return B;ce=1,Object.defineProperty(B,"__esModule",{value:!0});var f=W(),b=D(),p=D();function u(c,m,l){l===void 0&&(l=0);var s,d,S=c.currentSlide,T=c.itemWidth,a=c.slidesToShow,o=m.children,i=m.showDots,t=m.infinite,r=b.getSlidesToSlide(c,m),n=S-l-(0<l?0:r),h=(f.Children.toArray(o).length-a)%r;return d=0<=n?(s=n,i&&!t&&0<h&&p.isInRightEnd(c)&&(s=S-h),-T*s):s=n<0&&S!==0?0:void 0,{nextSlides:s,nextPosition:d}}return B.populatePreviousSlides=u,B}var H={},de;function Ye(){return de||(de=1,(function(f){function b(p,u,c,m,l,s){var d,S,T=p.itemWidth,a=p.slidesToShow,o=p.totalItems,i=p.currentSlide,t=u.infinite,r=!1,n=Math.round((c-m)/T),h=Math.round((m-c)/T),g=c<l;if(l<c&&n<=a){d="right";var v=Math.abs(-T*(o-a)),y=s-(m-l),w=i===o-a;(Math.abs(y)<=v||w&&t)&&(S=y,r=!0)}return g&&h<=a&&(d="left",((y=s+(l-m))<=0||i===0&&t)&&(r=!0,S=y)),{direction:d,nextPosition:S,canContinue:r}}Object.defineProperty(f,"__esModule",{value:!0}),f.populateSlidesOnMouseTouchMove=b})(H)),H}var ue;function we(){if(ue)return I;ue=1,Object.defineProperty(I,"__esModule",{value:!0});var f=J();I.getOriginalCounterPart=f.getOriginalCounterPart,I.getClones=f.getClones,I.checkClonesPosition=f.checkClonesPosition,I.getInitialSlideInInfiniteMode=f.getInitialSlideInInfiniteMode;var b=Se();I.getWidthFromDeviceType=b.getWidthFromDeviceType,I.getPartialVisibilityGutter=b.getPartialVisibilityGutter,I.getItemClientSideWidth=b.getItemClientSideWidth;var p=D();I.getInitialState=p.getInitialState,I.getIfSlideIsVisbile=p.getIfSlideIsVisbile,I.getTransformForCenterMode=p.getTransformForCenterMode,I.getTransformForPartialVsibile=p.getTransformForPartialVsibile,I.isInLeftEnd=p.isInLeftEnd,I.isInRightEnd=p.isInRightEnd,I.notEnoughChildren=p.notEnoughChildren,I.getSlidesToSlide=p.getSlidesToSlide;var u=qe();I.throttle=u.default;var c=Be();I.throwError=c.default;var m=Ge();I.populateNextSlides=m.populateNextSlides;var l=Ue();I.populatePreviousSlides=l.populatePreviousSlides;var s=Ye();return I.populateSlidesOnMouseTouchMove=s.populateSlidesOnMouseTouchMove,I}var k={},he;function Xe(){if(he)return k;he=1;var f=k&&k.__extends||(function(){var c=function(m,l){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,d){s.__proto__=d}||function(s,d){for(var S in d)d.hasOwnProperty(S)&&(s[S]=d[S])})(m,l)};return function(m,l){function s(){this.constructor=m}c(m,l),m.prototype=l===null?Object.create(l):(s.prototype=l.prototype,new s)}})();Object.defineProperty(k,"__esModule",{value:!0});var b=W();function p(c){return"clientY"in c}k.isMouseMoveEvent=p;var u=(function(c){function m(){return c!==null&&c.apply(this,arguments)||this}return f(m,c),m})(b.Component);return k.default=u,k}var G={},U={},pe;function Ke(){if(pe)return U;pe=1,Object.defineProperty(U,"__esModule",{value:!0});var f=J(),b=D();function p(u,c,m,l){var s={},d=b.getSlidesToSlide(c,m);return Array(u).fill(0).forEach(function(S,T){var a=f.getOriginalCounterPart(T,c,l);if(T===0)s[0]=a;else{var o=s[T-1]+d;s[T]=o}}),s}return U.getLookupTableForNextSlides=p,U}var me;function He(){if(me)return G;me=1,Object.defineProperty(G,"__esModule",{value:!0});var f=W(),b=J(),p=Ke(),u=D(),c=function(m){var l=m.props,s=m.state,d=m.goToSlide,S=m.getState,T=l.showDots,a=l.customDot,o=l.dotListClass,i=l.infinite,t=l.children;if(!T||u.notEnoughChildren(s))return null;var r,n=s.currentSlide,h=s.slidesToShow,g=u.getSlidesToSlide(s,l),v=f.Children.toArray(t);r=i?Math.ceil(v.length/g):Math.ceil((v.length-h)/g)+1;var y=p.getLookupTableForNextSlides(r,s,l,v),w=b.getOriginalIndexLookupTableByClones(h,v),C=w[n];return f.createElement("ul",{className:"react-multi-carousel-dot-list "+o},Array(r).fill(0).map(function(N,x){var j,P;if(i){P=y[x];var E=w[P];j=C===E||E<=C&&C<E+g}else{var A=v.length-h,_=x*g;j=(P=A<_?A:_)===n||P<n&&n<P+g&&n<v.length-h}return a?f.cloneElement(a,{index:x,active:j,key:x,onClick:function(){return d(P)},carouselState:S()}):f.createElement("li",{"data-index":x,key:x,className:"react-multi-carousel-dot "+(j?"react-multi-carousel-dot--active":"")},f.createElement("button",{"aria-label":"Go to slide "+(x+1),onClick:function(){return d(P)}}))}))};return G.default=c,G}var F={},fe;function $e(){if(fe)return F;fe=1,Object.defineProperty(F,"__esModule",{value:!0});var f=W(),b=function(u){var c=u.customLeftArrow,m=u.getState,l=u.previous,s=u.disabled,d=u.rtl;if(c)return f.cloneElement(c,{onClick:function(){return l()},carouselState:m(),disabled:s,rtl:d});var S=d?"rtl":"";return f.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+S,onClick:function(){return l()},type:"button",disabled:s})};F.LeftArrow=b;var p=function(u){var c=u.customRightArrow,m=u.getState,l=u.next,s=u.disabled,d=u.rtl;if(c)return f.cloneElement(c,{onClick:function(){return l()},carouselState:m(),disabled:s,rtl:d});var S=d?"rtl":"";return f.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+S,onClick:function(){return l()},type:"button",disabled:s})};return F.RightArrow=p,F}var Y={},ge;function Je(){if(ge)return Y;ge=1,Object.defineProperty(Y,"__esModule",{value:!0});var f=W(),b=we(),p=function(u){var c=u.props,m=u.state,l=u.goToSlide,s=u.clones,d=u.notEnoughChildren,S=m.itemWidth,T=c.children,a=c.infinite,o=c.itemClass,i=c.itemAriaLabel,t=c.partialVisbile,r=c.partialVisible,n=b.getInitialState(m,c),h=n.flexBisis,g=n.shouldRenderOnSSR,v=n.domFullyLoaded,y=n.partialVisibilityGutter;return n.shouldRenderAtAll?(t&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),f.createElement(f.Fragment,null,(a?s:f.Children.toArray(T)).map(function(w,C){return f.createElement("li",{key:C,"data-index":C,onClick:function(){c.focusOnSelect&&l(C)},"aria-hidden":b.getIfSlideIsVisbile(C,m)?"false":"true","aria-label":i||(w.props.ariaLabel?w.props.ariaLabel:null),style:{flex:g?"1 0 "+h+"%":"auto",position:"relative",width:v?((t||r)&&y&&!d?S-y:S)+"px":"auto"},className:"react-multi-carousel-item "+(b.getIfSlideIsVisbile(C,m)?"react-multi-carousel-item--active":"")+" "+o},w)}))):null};return Y.default=p,Y}var ve;function Qe(){if(ve)return O;ve=1;var f=O&&O.__extends||(function(){var a=function(o,i){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(o,i)};return function(o,i){function t(){this.constructor=o}a(o,i),o.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}})();Object.defineProperty(O,"__esModule",{value:!0});var b=W(),p=we(),u=Xe(),c=He(),m=$e(),l=Je(),s=D(),d=400,S="transform 400ms ease-in-out",T=(function(a){function o(i){var t=a.call(this,i)||this;return t.containerRef=b.createRef(),t.listRef=b.createRef(),t.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:b.Children.count(i.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},t.onResize=t.onResize.bind(t),t.handleDown=t.handleDown.bind(t),t.handleMove=t.handleMove.bind(t),t.handleOut=t.handleOut.bind(t),t.onKeyUp=t.onKeyUp.bind(t),t.handleEnter=t.handleEnter.bind(t),t.setIsInThrottle=t.setIsInThrottle.bind(t),t.next=p.throttle(t.next.bind(t),i.transitionDuration||d,t.setIsInThrottle),t.previous=p.throttle(t.previous.bind(t),i.transitionDuration||d,t.setIsInThrottle),t.goToSlide=p.throttle(t.goToSlide.bind(t),i.transitionDuration||d,t.setIsInThrottle),t.onMove=!1,t.initialX=0,t.lastX=0,t.isAnimationAllowed=!1,t.direction="",t.initialY=0,t.isInThrottle=!1,t.transformPlaceHolder=0,t}return f(o,a),o.prototype.resetTotalItems=function(){var i=this,t=b.Children.count(this.props.children),r=p.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,t));this.setState({totalItems:t,currentSlide:r},function(){i.setContainerAndItemWidth(i.state.slidesToShow,!0)})},o.prototype.setIsInThrottle=function(i){i===void 0&&(i=!1),this.isInThrottle=i},o.prototype.setTransformDirectly=function(i,t){var r=this.props.additionalTransfrom;this.transformPlaceHolder=i;var n=s.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(t),this.listRef.current.style.transform="translate3d("+(n+r)+"px,0,0)")},o.prototype.setAnimationDirectly=function(i){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=i?this.props.customTransition||S:"none")},o.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},o.prototype.setClones=function(i,t,r,n){var h=this;n===void 0&&(n=!1),this.isAnimationAllowed=!1;var g=b.Children.toArray(this.props.children),v=p.getInitialSlideInInfiniteMode(i||this.state.slidesToShow,g),y=p.getClones(this.state.slidesToShow,g),w=g.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:y.length,currentSlide:r&&!n?w:v},function(){h.correctItemsPosition(t||h.state.itemWidth)})},o.prototype.setItemsToShow=function(i,t){var r=this,n=this.props.responsive;Object.keys(n).forEach(function(h){var g=n[h],v=g.breakpoint,y=g.items,w=v.max,C=v.min,N=[window.innerWidth];window.screen&&window.screen.width&&N.push(window.screen.width);var x=Math.min.apply(Math,N);C<=x&&x<=w&&(r.setState({slidesToShow:y,deviceType:h}),r.setContainerAndItemWidth(y,i,t))})},o.prototype.setContainerAndItemWidth=function(i,t,r){var n=this;if(this.containerRef&&this.containerRef.current){var h=this.containerRef.current.offsetWidth,g=p.getItemClientSideWidth(this.props,i,h);this.setState({containerWidth:h,itemWidth:g},function(){n.props.infinite&&n.setClones(i,g,t,r)}),t&&this.correctItemsPosition(g)}},o.prototype.correctItemsPosition=function(i,t,r){t&&(this.isAnimationAllowed=!0),!t&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var n=this.state.totalItems<this.state.slidesToShow?0:-i*this.state.currentSlide;r&&this.setTransformDirectly(n,!0),this.setState({transform:n})},o.prototype.onResize=function(i){var t;t=!!this.props.infinite&&(typeof i!="boolean"||!i),this.setItemsToShow(t)},o.prototype.componentDidUpdate=function(i,t){var r=this,n=i.keyBoardControl,h=i.autoPlay,g=i.children,v=t.containerWidth,y=t.domLoaded,w=t.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==v&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){r.setItemsToShow(!0)},this.props.transitionDuration||d)),n&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!n&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),h&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),h||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),g.length!==this.props.children.length?o.clonesTimeout=setTimeout(function(){r.props.infinite?r.setClones(r.state.slidesToShow,r.state.itemWidth,!0,!0):r.resetTotalItems()},this.props.transitionDuration||d):this.props.infinite&&this.state.currentSlide!==w&&this.correctClonesPosition({domLoaded:y}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&p.isInRightEnd(this.state)){var C=this.props.transitionDuration||d;o.isInThrottleTimeout=setTimeout(function(){r.setIsInThrottle(!1),r.resetAutoplayInterval(),r.goToSlide(0,void 0,!!r.props.rewindWithAnimation)},C+this.props.autoPlaySpeed)}},o.prototype.correctClonesPosition=function(i){var t=this,r=i.domLoaded,n=b.Children.toArray(this.props.children),h=p.checkClonesPosition(this.state,n,this.props),g=h.isReachingTheEnd,v=h.isReachingTheStart,y=h.nextSlide,w=h.nextPosition;this.state.domLoaded&&r&&(g||v)&&(this.isAnimationAllowed=!1,o.transformTimeout=setTimeout(function(){t.setState({transform:w,currentSlide:y})},this.props.transitionDuration||d))},o.prototype.next=function(i){var t=this;i===void 0&&(i=0);var r=this.props,n=r.afterChange,h=r.beforeChange;if(!p.notEnoughChildren(this.state)){var g=p.populateNextSlides(this.state,this.props,i),v=g.nextSlides,y=g.nextPosition,w=this.state.currentSlide;v!==void 0&&y!==void 0&&(typeof h=="function"&&h(v,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:y,currentSlide:v},function(){typeof n=="function"&&(o.afterChangeTimeout=setTimeout(function(){n(w,t.getState())},t.props.transitionDuration||d))}))}},o.prototype.previous=function(i){var t=this;i===void 0&&(i=0);var r=this.props,n=r.afterChange,h=r.beforeChange;if(!p.notEnoughChildren(this.state)){var g=p.populatePreviousSlides(this.state,this.props,i),v=g.nextSlides,y=g.nextPosition;if(v!==void 0&&y!==void 0){var w=this.state.currentSlide;typeof h=="function"&&h(v,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:y,currentSlide:v},function(){typeof n=="function"&&(o.afterChangeTimeout2=setTimeout(function(){n(w,t.getState())},t.props.transitionDuration||d))})}}},o.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},o.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),o.clonesTimeout&&clearTimeout(o.clonesTimeout),o.isInThrottleTimeout&&clearTimeout(o.isInThrottleTimeout),o.transformTimeout&&clearTimeout(o.transformTimeout),o.afterChangeTimeout&&clearTimeout(o.afterChangeTimeout),o.afterChangeTimeout2&&clearTimeout(o.afterChangeTimeout2),o.afterChangeTimeout3&&clearTimeout(o.afterChangeTimeout3)},o.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},o.prototype.getCords=function(i){var t=i.clientX,r=i.clientY;return{clientX:s.parsePosition(this.props,t),clientY:s.parsePosition(this.props,r)}},o.prototype.handleDown=function(i){if(!(!u.isMouseMoveEvent(i)&&!this.props.swipeable||u.isMouseMoveEvent(i)&&!this.props.draggable||this.isInThrottle)){var t=this.getCords(u.isMouseMoveEvent(i)?i:i.touches[0]),r=t.clientX,n=t.clientY;this.onMove=!0,this.initialX=r,this.initialY=n,this.lastX=r,this.isAnimationAllowed=!1}},o.prototype.handleMove=function(i){if(!(!u.isMouseMoveEvent(i)&&!this.props.swipeable||u.isMouseMoveEvent(i)&&!this.props.draggable||p.notEnoughChildren(this.state))){var t=this.getCords(u.isMouseMoveEvent(i)?i:i.touches[0]),r=t.clientX,n=t.clientY,h=this.initialX-r,g=this.initialY-n;if(this.onMove){if(!(Math.abs(h)>Math.abs(g)))return;var v=p.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,r,this.transformPlaceHolder),y=v.direction,w=v.nextPosition,C=v.canContinue;y&&(this.direction=y,C&&w!==void 0&&this.setTransformDirectly(w)),this.lastX=r}}},o.prototype.handleOut=function(i){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var t=i.type==="touchend"&&!this.props.swipeable,r=(i.type==="mouseleave"||i.type==="mouseup")&&!this.props.draggable;if(!t&&!r&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var n=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(n)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(n=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(n)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},o.prototype.isInViewport=function(i){var t=i.getBoundingClientRect(),r=t.top,n=r===void 0?0:r,h=t.left,g=h===void 0?0:h,v=t.bottom,y=v===void 0?0:v,w=t.right,C=w===void 0?0:w;return 0<=n&&0<=g&&y<=(window.innerHeight||document.documentElement.clientHeight)&&C<=(window.innerWidth||document.documentElement.clientWidth)},o.prototype.isChildOfCarousel=function(i){return!!(i instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(i)},o.prototype.onKeyUp=function(i){var t=i.target;switch(i.keyCode){case 37:if(this.isChildOfCarousel(t))return this.previous();break;case 39:if(this.isChildOfCarousel(t))return this.next();break;case 9:if(this.isChildOfCarousel(t)&&t instanceof HTMLInputElement&&this.isInViewport(t))return this.next()}},o.prototype.handleEnter=function(i){u.isMouseMoveEvent(i)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},o.prototype.goToSlide=function(i,t,r){var n=this;if(r===void 0&&(r=!0),!this.isInThrottle){var h=this.state.itemWidth,g=this.props,v=g.afterChange,y=g.beforeChange,w=this.state.currentSlide;typeof y!="function"||t&&(typeof t!="object"||t.skipBeforeChange)||y(i,this.getState()),this.isAnimationAllowed=r,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:i,transform:-h*i},function(){n.props.infinite&&n.correctClonesPosition({domLoaded:!0}),typeof v!="function"||t&&(typeof t!="object"||t.skipAfterChange)||(o.afterChangeTimeout3=setTimeout(function(){v(w,n.getState())},n.props.transitionDuration||d))})}},o.prototype.getState=function(){return this.state},o.prototype.renderLeftArrow=function(i){var t=this,r=this.props,n=r.customLeftArrow,h=r.rtl;return b.createElement(m.LeftArrow,{customLeftArrow:n,getState:function(){return t.getState()},previous:this.previous,disabled:i,rtl:h})},o.prototype.renderRightArrow=function(i){var t=this,r=this.props,n=r.customRightArrow,h=r.rtl;return b.createElement(m.RightArrow,{customRightArrow:n,getState:function(){return t.getState()},next:this.next,disabled:i,rtl:h})},o.prototype.renderButtonGroups=function(){var i=this,t=this.props.customButtonGroup;return t?b.cloneElement(t,{previous:function(){return i.previous()},next:function(){return i.next()},goToSlide:function(r,n){return i.goToSlide(r,n)},carouselState:this.getState()}):null},o.prototype.renderDotsList=function(){var i=this;return b.createElement(c.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return i.getState()}})},o.prototype.renderCarouselItems=function(){var i=[];if(this.props.infinite){var t=b.Children.toArray(this.props.children);i=p.getClones(this.state.slidesToShow,t)}return b.createElement(l.default,{clones:i,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:p.notEnoughChildren(this.state),props:this.props})},o.prototype.render=function(){var i=this.props,t=i.deviceType,r=i.arrows,n=i.renderArrowsWhenDisabled,h=i.removeArrowOnDeviceType,g=i.infinite,v=i.containerClass,y=i.sliderClass,w=i.customTransition,C=i.additionalTransfrom,N=i.renderDotsOutside,x=i.renderButtonGroupOutside,j=i.className,P=i.rtl,E=p.getInitialState(this.state,this.props),A=E.shouldRenderOnSSR,_=E.shouldRenderAtAll,Te=p.isInLeftEnd(this.state),je=p.isInRightEnd(this.state),Q=r&&!(h&&(t&&-1<h.indexOf(t)||this.state.deviceType&&-1<h.indexOf(this.state.deviceType)))&&!p.notEnoughChildren(this.state)&&_,Z=!g&&Te,ee=!g&&je,Ce=s.getTransform(this.state,this.props);return b.createElement(b.Fragment,null,b.createElement("div",{className:"react-multi-carousel-list "+v+" "+j,dir:P?"rtl":"ltr",ref:this.containerRef},b.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+y,style:{transition:this.isAnimationAllowed?w||S:"none",overflow:A?"hidden":"unset",transform:"translate3d("+(Ce+C)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),Q&&(!Z||n)&&this.renderLeftArrow(Z),Q&&(!ee||n)&&this.renderRightArrow(ee),_&&!x&&this.renderButtonGroups(),_&&!N&&this.renderDotsList()),_&&N&&this.renderDotsList(),_&&x&&this.renderButtonGroups())},o.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},o})(b.Component);return O.default=T,O}var xe;function Ze(){if(xe)return V;xe=1,Object.defineProperty(V,"__esModule",{value:!0});var f=Qe();return V.default=f.default,V}var $,be;function et(){return be||(be=1,$=Ze()),$}var tt=et();const it=Ie(tt),ot=()=>e.jsxs("footer",{className:"footer",children:[e.jsx("div",{className:"footer-top-border"}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-section brand-section",children:[e.jsxs("div",{className:"footer-logo",children:[e.jsx("img",{src:"/logo.png",alt:"Desi VDESI Travel",className:"logo-img"}),e.jsxs("h3",{className:"brand-name",children:[e.jsx("span",{className:"gradient-text",children:"DESI VDESI"})," TOUR'S"]})]}),e.jsx("p",{className:"brand-tagline",children:"Crafting unforgettable journeys through India's hidden gems and cultural wonders."}),e.jsxs("div",{className:"social-links",children:[e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Facebook",children:[e.jsx(Ne,{}),e.jsx("span",{className:"social-tooltip",children:"Facebook"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Instagram",children:[e.jsx(Pe,{}),e.jsx("span",{className:"social-tooltip",children:"Instagram"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Twitter",children:[e.jsx(Re,{}),e.jsx("span",{className:"social-tooltip",children:"Twitter"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"YouTube",children:[e.jsx(Me,{}),e.jsx("span",{className:"social-tooltip",children:"YouTube"})]})]})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h4",{className:"section-title",children:e.jsx("span",{className:"title-underline",children:"Explore"})}),e.jsx("ul",{className:"footer-links",children:["Home","Destinations","Tour Packages","Special Offers","Group Tours","Custom Itineraries"].map(f=>e.jsx("li",{className:"link-item",children:e.jsxs("a",{href:`/${f.toLowerCase().replace(" ","-")}`,children:[e.jsx(te,{className:"link-icon"}),f]})},f))})]}),e.jsxs("div",{className:"footer-section",children:[e.jsx("h4",{className:"section-title",children:e.jsx("span",{className:"title-underline",children:"Contact Us"})}),e.jsxs("ul",{className:"contact-info",children:[e.jsxs("li",{className:"contact-item",children:[e.jsx("div",{className:"contact-icon",children:e.jsx(Ee,{})}),e.jsx("div",{children:e.jsxs("h5",{children:["Our Office :",e.jsx("p",{children:"123 Travel Street, Mumbai, Maharashtra 400001"})]})})]}),e.jsxs("li",{className:"contact-item",children:[e.jsx("div",{className:"contact-icon",children:e.jsx(_e,{})}),e.jsx("div",{children:e.jsxs("h5",{children:["Call Us :  ",e.jsx("p",{children:"+91 7888251550"})]})})]}),e.jsxs("li",{className:"contact-item",children:[e.jsx("div",{className:"contact-icon",children:e.jsx(ke,{})}),e.jsx("div",{children:e.jsxs("h5",{children:["Email Us: ",e.jsx("a",{href:"mailto:tours.desivdesi@gmail.com",children:"tours.desivdesi@gmail.com"})]})})]})]})]}),e.jsxs("div",{className:"footer-section newsletter-section",children:[e.jsx("h4",{className:"section-title",children:e.jsx("span",{className:"title-underline",children:"Stay Updated"})}),e.jsx("p",{className:"newsletter-text",children:"Subscribe to our newsletter for exclusive travel deals and insider tips!"}),e.jsx("form",{className:"newsletter-form",children:e.jsxs("div",{className:"input-group",style:{width:"300px"},children:[e.jsx("input",{type:"email",placeholder:"Your email address",className:"newsletter-input",required:!0}),e.jsxs("button",{type:"submit",className:"subscribe-btn",children:[e.jsx("span",{children:"Subscribe"}),e.jsx("div",{className:"arrow-wrapper",children:e.jsx(te,{})})]})]})}),e.jsxs("div",{className:"payment-methods",children:[e.jsx("p",{children:"We accept:"}),e.jsxs("div",{className:"payment-icons",children:[e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Google Pay",children:[e.jsx(De,{}),e.jsx("span",{className:"social-tooltip",children:"Google Pay"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Mastercard",children:[e.jsx(Ae,{}),e.jsx("span",{className:"social-tooltip",children:"Mastercard"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Visa",children:[e.jsx(Oe,{}),e.jsx("span",{className:"social-tooltip",children:"Visa"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"Amazon Pay",children:[e.jsx(Le,{}),e.jsx("span",{className:"social-tooltip",children:"Amazon Pay"})]}),e.jsxs("a",{href:"#",className:"social-icon","aria-label":"PayPal",children:[e.jsx(We,{}),e.jsx("span",{className:"social-tooltip",children:"PayPal"})]})]})]})]})]}),e.jsx("div",{className:"footer-bottom",children:e.jsxs("div",{className:"footer-bottom-content",children:[e.jsxs("p",{className:"copyright",children:["© ",new Date().getFullYear()," Desi V Desi Travel. All rights reserved."]}),e.jsxs("div",{className:"legal-links",children:[e.jsx("a",{href:"/privacy-policy",children:"Privacy Policy"}),e.jsx("a",{href:"/terms",children:"Terms of Service"}),e.jsx("a",{href:"/cookies",children:"Cookie Policy"}),e.jsx("a",{href:"/sitemap",children:"Sitemap"})]})]})})]}),rt=R.lazy(()=>ye(()=>import("./Domestic-DlrkgYQz.js"),__vite__mapDeps([0,1,2]))),st=R.lazy(()=>ye(()=>import("./International-CW8CMBXn.js"),__vite__mapDeps([3,1,2])));function at(){const{user:f}=R.useContext(Fe),[b,p]=R.useState(!1),[u,c]=R.useState(0),[m,l]=R.useState([]),[s,d]=R.useState(null),[S,T]=R.useState({}),[a,o]=R.useState(),[i,t]=R.useState(!1);Ve();const r=[`"The best travel experience I've ever had! Highly recommended." – Priya S.`,'"Desi V Desi made our family trip unforgettable and smooth." – Rajesh K.','"Excellent service and amazing tours, will book again!" – Anjali M.','"From booking to the end, everything was seamless. Five stars!" – Sunil T.'],n=()=>{f?t(!0):(setShowAlert(!0),setPendingBooking(!0))};R.useEffect(()=>{const x=setInterval(()=>{c(j=>(j+1)%r.length)},3e3);return()=>clearInterval(x)},[]);const h=[{id:1,img:"Malaysia.png",alt:"Malaysia",placeholder:"Search Places in Malaysia",title:"Explore Malaysia with",packageDis:"50+ New Packages"},{id:2,img:"005.png",alt:"Assam",placeholder:"Search Places in Assam",title:"Explore Assam with",packageDis:"45+ New Packages"},{id:3,img:"006.png",alt:"Dubai",placeholder:"Search Places in Dubai",title:"Explore Dubai with",packageDis:"54+ New Packages"},{id:4,img:"007.png",alt:"Assam",placeholder:"Search Places in Assam",title:"Explore Assam with",packageDis:"28+ New Packages"}],g={desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},v=[{img:"https://i.pinimg.com/736x/5a/db/60/5adb6045c7f5e7701638fa12a5d367ef.jpg",title:"Haryana"},{img:"https://i.pinimg.com/736x/97/36/b6/9736b63fdfd6e297d767dd1cc53f8201.jpg",title:"Jammu & Kashmir"},{img:"https://i.pinimg.com/736x/19/1a/8f/191a8fc4ea0445877c0f774b9c6778e5.jpg",title:"Punjab"},{img:"https://i.pinimg.com/736x/bb/14/be/bb14be40be2c68bd959490d4e483e9f9.jpg",title:"Rajasthan"},{img:"https://i.pinimg.com/1200x/35/29/bd/3529bde46e2ecb90db33bfe2854ca6a3.jpg",title:"Uttar Pradesh"},{img:"https://i.pinimg.com/1200x/85/0c/7a/850c7a1be03a931dbaa443301bc0dcbc.jpg",title:"Himachal Pradesh"},{img:"https://i.pinimg.com/1200x/48/e5/1a/48e51a0e4f798832e10ff0c43f925e64.jpg",title:"Delhi-The Caxiostal State Of INDIA"},{img:"https://i.pinimg.com/1200x/7c/46/c5/7c46c5bdbe8f89364e4da64610e60c45.jpg",title:"Ladakh"}];R.useEffect(()=>{const x=()=>{window.scrollY>300?p(!0):p(!1)};return window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}},[]);const y=()=>{window.scrollTo({top:0,behavior:"smooth"})},w={button:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"50%",width:"40px",height:"40px",fontSize:"18px",cursor:"pointer",boxShadow:"0 4px 6px rgba(0,0,0,0.2)",zIndex:999}};R.useEffect(()=>{(async()=>{try{const{data:j}=await ie.get("/favourites/getCards");o(j)}catch(j){console.error("Failed to fetch tours",j)}})()},[]);const C=async x=>{try{const j=await ie.put(`/favourites/${x}/toggle`,{},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),{status:P}=j.data;l(E=>P==="like"?[...E,x]:E.filter(A=>A!==x))}catch(j){console.error("Failed to toggle favourite",j)}},N=(x,j)=>{T(P=>({...P,[x]:j}))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"demo",className:"carousel slide","data-bs-ride":"carousel",children:[e.jsx("div",{className:"carousel-indicators",children:h.map((x,j)=>e.jsx("button",{type:"button","data-bs-target":"#demo","data-bs-slide-to":j,className:j===0?"active":"","aria-label":`Slide ${j+1}`},j))}),e.jsx("div",{className:"carousel-inner",children:h.map((x,j)=>e.jsxs("div",{className:`carousel-item ${j===0?"active":""}`,children:[e.jsx("img",{src:x.img,alt:x.alt,loading:"lazy",className:"d-block w-100"}),e.jsxs("div",{className:"carousel-caption d-none d-md-block",children:[e.jsx("input",{type:"search",placeholder:x.placeholder,className:"form-control m-auto text-primary"}),e.jsxs("p",{className:"mt-4 mb-0",children:[x.title," ",e.jsx("a",{href:"#",children:x.packageDis})]})]})]},j))}),e.jsx("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#demo","data-bs-slide":"prev",children:e.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"})}),e.jsx("button",{className:"carousel-control-next",type:"button","data-bs-target":"#demo","data-bs-slide":"next",children:e.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"})})]}),e.jsxs("div",{className:"container text-center my-5",children:[e.jsxs("h1",{className:"font",children:["Let us plan you a ",e.jsx("br",{}),"perfect ",e.jsx("strong",{style:{color:"red"},children:"India Holiday"})]}),e.jsx("h5",{children:"Custom‑Crafted Tour Packages for Unforgettable Holiday Experiences in India."}),e.jsx(it,{responsive:g,infinite:!1,arrows:!0,keyBoardControl:!0,itemClass:"px-2",containerClass:"py-4",showDots:!1,children:a?.length>0?a.map(x=>e.jsxs("div",{style:{background:"white",borderRadius:"12px",overflow:"hidden",boxShadow:"0 2px 6px rgba(0,0,0,0.1)"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("img",{src:x.img,alt:x.title,loading:"lazy",style:{width:"100%",height:"200px",objectFit:"cover",borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}),e.jsxs("div",{onClick:()=>C(x._id),onMouseEnter:()=>d(x._id),onMouseLeave:()=>d(null),style:{position:"absolute",top:"10px",left:"10px",cursor:"pointer",zIndex:10,pointerEvents:"auto"},children:[s===x._id&&e.jsx("div",{style:{position:"absolute",top:"32px",left:"0",minWidth:"max-content",background:"black",color:"white",fontSize:"12px",padding:"4px 8px",borderRadius:"6px",whiteSpace:"nowrap",opacity:.9,zIndex:20},children:m.includes(x._id)?"Remove from Favourite":"Add to Favourite"}),e.jsx("span",{style:{display:"inline-block",transition:"transform 0.2s ease, box-shadow 0.2s ease",transform:s===x._id?"scale(1.2)":"scale(1)",transformOrigin:"center center"},children:m.includes(x._id)?"❤":"🤍"})]}),e.jsx("div",{style:{position:"absolute",bottom:"10px",left:"10px",background:"#00af87",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"6px",fontWeight:"bold"},children:"2025"})]}),e.jsxs("div",{style:{padding:"12px"},children:[e.jsx("h5",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"6px"},children:x.title}),e.jsx("div",{style:{display:"flex",cursor:"pointer"},children:[1,2,3,4,5].map(j=>e.jsx("span",{onClick:()=>N(x._id,j),style:{color:j<=(S[x._id]||0)?"#FFD700":"#ccc",fontSize:"22px",marginRight:"2px",transition:"color 0.2s"},children:"★"},j))}),e.jsx("p",{style:{color:"#555",fontSize:"14px",marginBottom:0},children:x.category})]})]},x._id)):e.jsx("p",{className:"center",style:{textAlign:"center",marginTop:"2rem"},children:"⏳ Loading..."})})]}),e.jsx(R.Suspense,{fallback:e.jsx("div",{className:"loader-container",children:e.jsx("div",{className:"spinner"})}),children:e.jsx(rt,{})}),e.jsx(R.Suspense,{fallback:e.jsx("div",{className:"loader-container",children:e.jsx("div",{className:"spinner"})}),children:e.jsx(st,{})}),e.jsxs("div",{className:"container text-center text-uppercase text-muted my-5",children:[e.jsx("h1",{children:"States in North India"}),e.jsx("div",{className:"row mt-4",children:v.map((x,j)=>e.jsxs("div",{className:"col-md-4",children:[e.jsx("img",{src:x.img,alt:`img${j+1}`,loading:"lazy",className:"card-img-top mb-2",style:{maxHeight:"200px",objectFit:"cover"}}),e.jsx("p",{children:e.jsx("a",{href:"#",className:"text-decoration-none",children:x.title})})]},j))})]}),e.jsxs("div",{id:"about-us",children:[e.jsx("div",{className:"hero-section m-5",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("p",{className:"section-subtitle",children:"~About Us"}),e.jsxs("h1",{className:"hero-title",children:["WELCOME TO ",e.jsx("br",{}),e.jsx("span",{className:"highlight",children:"DESI VDESI"})," ",e.jsx("br",{}),"TOUR'S"]})]})}),e.jsxs("div",{className:"about-container",children:[e.jsxs("div",{className:"about-content",children:[e.jsx("div",{className:"about-text",children:e.jsxs("div",{className:"founder-section",children:[e.jsx("img",{src:"/photo2.jpg",alt:"Founder",loading:"lazy",className:"founder-image"}),e.jsx("p",{className:"founder-quote",children:`We are one of the leading tour operators in Maharashtra for last 36 years & are known as experts in field of Domestic as well as International tours. Currently company is transporting around 15000 + satisfied tourists around the year through group as well as customized tours. With Domestic and international packages we also provide services like Air-tickets, visa, travel insurance, foreign exchange also and are known as "One stop Solution for all of one's tourist needs."`}),e.jsx("p",{className:"founder-signature",children:"~MR.SONWANE"})]})}),e.jsxs("div",{className:"about-image testimonial-wrapper",children:[e.jsx("div",{className:"testimonial-box",children:e.jsxs("p",{className:"testimonial-text",children:["“",r[u],"”"]})},u),e.jsx("button",{className:"cta-button",onClick:n,children:"Book Your Tour Now"})]})]}),i&&e.jsx(ze,{user:f,onClose:()=>t(!1)}),e.jsxs("div",{className:"about-footer",children:[e.jsx("hr",{className:"separator"}),e.jsx("p",{className:"footer-text",children:"Join thousands of happy travelers and explore the world with Desi V Desi Tours — Your trusted travel partner for 36+ years."})]})]}),b&&e.jsx("button",{onClick:y,style:w.button,children:"⬆"}),e.jsx("style",{jsx:"true",children:`
        @import url('https://fonts.googleaxioss.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@700&display=swap');

        /* General Styles */
        #about-us {
          font-family: 'Merriweather', serif;
          color: #2c2c2c;
          background-color: #faf9f6;
          line-height: 1.7;
          padding-bottom: 4rem;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(rgba(44, 44, 44, 0.75), rgba(44, 44, 44, 0.75)),
        url('/travel-bg.jpg') center/cover no-repeat;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #f3e6d9;
          padding: 0 20px;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.7);
          border-bottom: 4px solid #bfa76f;
        }

        .hero-content {
          max-width: 850px;
        }

        .section-subtitle {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          letter-spacing: 6px;
          margin-bottom: 1.2rem;
          color: #bfa76f;
          text-transform: uppercase;
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.8rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.8rem;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
        }

        .highlight {
          color: #bfa76f;
          letter-spacing: 3px;
        }

        /* About Content */
        .about-container {
          max-width: 1100px;
          margin: 5rem auto 0 auto;
          padding: 0 30px;
        }

        .about-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3.5rem;
          align-items: flex-start;
          justify-content: center;
        }

        /* Left side */
        .about-text {
          flex: 1;
          min-width: 320px;
        }

        .founder-section {
          margin-bottom: 3.5rem;
          background-color: #fff;
          padding: 2rem 2.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(191, 167, 111, 0.15);
          border: 1.5px solid #bfa76f;
        }

        .founder-image {
          float: left;
          shape-outside: circle(50%);
          border-radius: 50%;
          width: 180px;
          height: 180px;
          object-fit: cover;
          margin-right: 2.5rem;
          margin-bottom: 1.5rem;
          border: 4px solid #bfa76f;
          box-shadow: 0 4px 15px rgba(191, 167, 111, 0.3);
          transition: transform 0.3s ease;
          cursor: default;
        }
        .founder-image:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(191, 167, 111, 0.5);
        }

        .founder-quote {
          font-size: 1.15rem;
          margin-bottom: 1.8rem;
          text-align: justify;
          color: #4b4b4b;
          font-style: italic;
          letter-spacing: 0.02em;
          line-height: 1.75;
        }

        .founder-signature {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: #bfa76f;
          font-style: italic;
          text-align: right;
          font-size: 1.4rem;
          letter-spacing: 0.06em;
          user-select: none;
          text-shadow: 1px 1px 3px rgba(191, 167, 111, 0.6);
        }

        /* Right side */
        .about-image {
          flex: 1;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .testimonial-wrapper {
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .testimonial-box {
          background: #f9f4e6;
          border: 2px solid #bfa76f;
          padding: 3rem 2rem;
          border-radius: 12px;
          font-style: italic;
          color: #4b4b4b;
          font-family: 'Merriweather', serif;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
          box-shadow: 0 10px 25px rgba(191, 167, 111, 0.2);
          user-select: none;
          transition: opacity 0.5s ease-in-out;
          text-align: center;
        }

        .testimonial-text {
          max-width: 350px;
          margin: 0 auto;
        }

        /* CTA Button */
        .cta-button {
          background-color: #bfa76f;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 0.8rem 2.5rem;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(191, 167, 111, 0.4);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }
        .cta-button:hover {
          background-color: #a68f4f;
          box-shadow: 0 8px 20px rgba(166, 143, 79, 0.7);
        }
        .cta-button:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* Bottom message under both sides */
        .about-footer {
          margin-top: 4rem;
          text-align: center;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
          color: #6a5f3c;
          font-family: 'Merriweather', serif;
          font-style: italic;
          font-size: 1.15rem;
          user-select: none;
        }

        .separator {
          width: 120px;
          margin: 0 auto 1.2rem auto;
          border: 0;
          border-top: 3px solid #bfa76f;
          border-radius: 2px;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.3rem;
          }
          
          .founder-image {
            float: none;
            display: block;
            margin: 0 auto 2.5rem auto;
          }
          
          .about-content {
            flex-direction: column;
            gap: 3rem;
          }

          .founder-section {
            padding: 1.5rem 1.8rem;
          }

          .testimonial-box {
            max-width: 100%;
            min-height: auto;
            padding: 2rem 1.5rem;
            font-size: 1.1rem;
          }

          .about-footer {
            font-size: 1rem;
          }
        }
      `})]}),e.jsx("div",{id:"footer",children:e.jsx(ot,{})})]})}export{at as default};
