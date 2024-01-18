import{u as p,q as k,M as ne,N as De,O,P as W,C as c,Q as U,R as Me,U as Ee,V as jt,W as Ot,X as Gt,J as q,m as Ht,H as I,I as j,D as ae,x as A,G as ie,Y as Dt,L as T,Z as Mt,$ as Wt,a as r,a0 as We,T as he,S as Ue,y as B,A as R,a1 as Ut,a2 as qt,z as se,g as G,K as be,F as Z,a3 as qe,a4 as Le,a5 as Ft,s as pe,a6 as Yt,a7 as Te,a8 as Fe,a9 as Kt,aa as $e,ab as Ye,ac as le,ad as F,ae as Xt,E as Jt,af as Qt,ag as Zt,ah as en,ai as tn,aj as oe,ak as nn,al as Ae,am as an}from"./index-afee8f74.js";const P=p({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Ke(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return k()({name:n??ne(De(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...P()},setup(t,i){let{slots:s}=i;return()=>{var l;return O(t.tag,{class:[e,t.class],style:t.style},(l=s.default)==null?void 0:l.call(s))}}})}function $(e){const a=W("useRender");a.render=e}function Se(e){return Me(()=>{const a=[],n={};if(e.value.background)if(Ee(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&jt(e.value.background)){const t=Ot(e.value.background);if(t.a==null||t.a===1){const i=Gt(t);n.color=i,n.caretColor=i}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(Ee(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function sn(e,a){const n=c(()=>({text:U(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=Se(n);return{textColorClasses:t,textColorStyles:i}}function Xe(e,a){const n=c(()=>({background:U(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=Se(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}const ln=["x-small","small","default","large","x-large"],Je=p({size:{type:[String,Number],default:"default"}},"size");function Qe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return Me(()=>{let n,t;return Ht(ln,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:I(e.size),height:I(e.size)}),{sizeClasses:n,sizeStyles:t}})}const N=p({tag:{type:String,default:"div"}},"tag"),on=p({color:String,start:Boolean,end:Boolean,icon:j,...P(),...Je(),...N({tag:"i"}),...ae()},"VIcon"),ee=k()({name:"VIcon",props:on(),setup(e,a){let{attrs:n,slots:t}=a;const i=A(),{themeClasses:s}=ie(e),{iconData:l}=Dt(c(()=>i.value||e.icon)),{sizeClasses:o}=Qe(e),{textColorClasses:d,textColorStyles:m}=sn(T(e,"color"));return $(()=>{var g,u;const f=(g=t.default)==null?void 0:g.call(t);return f&&(i.value=(u=Mt(f).filter(v=>v.type===Wt&&v.children&&typeof v.children=="string")[0])==null?void 0:u.children),r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,o.value,d.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},m.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[f]})}),{}}});const Ze=p({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function et(e){return{dimensionStyles:c(()=>({height:I(e.height),maxHeight:I(e.maxHeight),maxWidth:I(e.maxWidth),minHeight:I(e.minHeight),minWidth:I(e.minWidth),width:I(e.width)}))}}function rn(e){return{aspectStyles:c(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const tt=p({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...P(),...Ze()},"VResponsive"),Be=k()({name:"VResponsive",props:tt(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=rn(e),{dimensionStyles:i}=et(e);return $(()=>{var s;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[r("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),un=p({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Q=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:i,...s}=e,{component:l=he,...o}=typeof t=="object"?t:{};return O(l,We(typeof t=="string"?{name:i?"":t}:o,s,{disabled:i}),n)};function cn(e,a){if(!Ue)return;const n=a.modifiers||{},t=a.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const m=(g=e._observe)==null?void 0:g[a.instance.$.uid];if(!m)return;const f=o.some(u=>u.isIntersecting);i&&(!n.quiet||m.init)&&(!n.once||f||m.init)&&i(f,o,d),f&&n.once?nt(e,a):m.init=!0},s);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function nt(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const dn={mounted:cn,unmounted:nt},vn=dn,fn=p({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...tt(),...P(),...un()},"VImg"),mn=k()({name:"VImg",directives:{intersect:vn},props:fn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const i=W("VImg"),s=B(""),l=A(),o=B(e.eager?"loading":"idle"),d=B(),m=B(),f=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=c(()=>f.value.aspect||d.value/m.value||0);R(()=>e.src,()=>{u(o.value!=="idle")}),R(g,(b,C)=>{!b&&C&&l.value&&S(l.value)}),Ut(()=>u());function u(b){if(!(e.eager&&b)&&!(Ue&&!b&&!e.eager)){if(o.value="loading",f.value.lazySrc){const C=new Image;C.src=f.value.lazySrc,S(C,null)}f.value.src&&qt(()=>{var C;n("loadstart",((C=l.value)==null?void 0:C.currentSrc)||f.value.src),setTimeout(()=>{var L;if(!i.isUnmounted)if((L=l.value)!=null&&L.complete){if(l.value.naturalWidth||y(),o.value==="error")return;g.value||S(l.value,null),o.value==="loading"&&v()}else g.value||S(l.value),h()})})}}function v(){var b;i.isUnmounted||(h(),S(l.value),o.value="loaded",n("load",((b=l.value)==null?void 0:b.currentSrc)||f.value.src))}function y(){var b;i.isUnmounted||(o.value="error",n("error",((b=l.value)==null?void 0:b.currentSrc)||f.value.src))}function h(){const b=l.value;b&&(s.value=b.currentSrc||b.src)}let _=-1;se(()=>{clearTimeout(_)});function S(b){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const L=()=>{if(clearTimeout(_),i.isUnmounted)return;const{naturalHeight:K,naturalWidth:X}=b;K||X?(d.value=X,m.value=K):!b.complete&&o.value==="loading"&&C!=null?_=window.setTimeout(L,C):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,m.value=1)};L()}const z=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),re=()=>{var L;if(!f.value.src||o.value==="idle")return null;const b=r("img",{class:["v-img__img",z.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:v,onError:y},null),C=(L=t.sources)==null?void 0:L.call(t);return r(Q,{transition:e.transition,appear:!0},{default:()=>[G(C?r("picture",{class:"v-img__picture"},[C,b]):b,[[qe,o.value==="loaded"]])]})},ue=()=>r(Q,{transition:e.transition},{default:()=>[f.value.lazySrc&&o.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",z.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),ce=()=>t.placeholder?r(Q,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,de=()=>t.error?r(Q,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,ve=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,Y=B(!1);{const b=R(g,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Y.value=!0})}),b())})}return $(()=>{const b=Be.filterProps(e);return G(r(Be,We({class:["v-img",{"v-img--booting":!Y.value},e.class],style:[{width:I(e.width==="auto"?d.value:e.width)},e.style]},b,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Z,null,[r(re,null,null),r(ue,null,null),r(ve,null,null),r(ce,null,null),r(de,null,null)]),default:t.default}),[[be("intersect"),{handler:u,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:l,state:o,naturalWidth:d,naturalHeight:m}}}),gn=[null,"default","comfortable","compact"],at=p({density:{type:String,default:"default",validator:e=>gn.includes(e)}},"density");function it(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return{densityClasses:c(()=>`${a}--density-${e.density}`)}}const xe=p({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ce(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return{roundedClasses:c(()=>{const t=U(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`rounded-${s}`);return i})}}const yn=["elevated","flat","tonal","outlined","text","plain"];function st(e,a){return r(Z,null,[e&&r("span",{key:"overlay",class:`${a}__overlay`},null),r("span",{key:"underlay",class:`${a}__underlay`},null)])}const lt=p({color:String,variant:{type:String,default:"elevated",validator:e=>yn.includes(e)}},"variant");function ot(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();const n=c(()=>{const{variant:s}=Le(e);return`${a}--variant-${s}`}),{colorClasses:t,colorStyles:i}=Se(c(()=>{const{variant:s,color:l}=Le(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:i,variantClasses:n}}const hn=p({start:Boolean,end:Boolean,icon:j,image:String,text:String,...P(),...at(),...xe(),...Je(),...N(),...ae(),...lt({variant:"flat"})},"VAvatar"),Ne=k()({name:"VAvatar",props:hn(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=ie(e),{colorClasses:i,colorStyles:s,variantClasses:l}=ot(e),{densityClasses:o}=it(e),{roundedClasses:d}=Ce(e),{sizeClasses:m,sizeStyles:f}=Qe(e);return $(()=>r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,o.value,d.value,m.value,l.value,e.class],style:[s.value,f.value,e.style]},{default:()=>{var g;return[e.image?r(mn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(ee,{key:"icon",icon:e.icon},null):((g=n.default)==null?void 0:g.call(n))??e.text,st(!1,"v-avatar")]}})),{}}}),bn=p({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ze=k(!1)({name:"VDefaultsProvider",props:bn(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:i,reset:s,root:l,scoped:o}=Ft(e);return pe(t,{reset:s,root:l,scoped:o,disabled:i}),()=>{var d;return(d=n.default)==null?void 0:d.call(n)}}}),pn=p({border:[Boolean,Number,String]},"border");function Sn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return{borderClasses:c(()=>{const t=U(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}const rt=p({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function ut(e){return{elevationClasses:c(()=>{const n=U(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}function xn(){const e=W("useRoute");return c(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function Cn(e,a){const n=Yt("RouterLink"),t=c(()=>!!(e.href||e.to)),i=c(()=>(t==null?void 0:t.value)||Te(a,"click")||Te(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:i,href:T(e,"href")};const s=e.to?n.useLink(e):void 0,l=xn();return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var o,d,m;return e.exact?l.value?((m=s.isExactActive)==null?void 0:m.value)&&Fe(s.route.value.query,l.value.query):(d=s.isExactActive)==null?void 0:d.value:(o=s.isActive)==null?void 0:o.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const _n=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const ge=Symbol("rippleStop"),kn=80;function Re(e,a){e.style.transform=a,e.style.webkitTransform=a}function ye(e){return e.constructor.name==="TouchEvent"}function ct(e){return e.constructor.name==="KeyboardEvent"}const wn=function(e,a){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!ct(e)){const u=a.getBoundingClientRect(),v=ye(e)?e.touches[e.touches.length-1]:e;t=v.clientX-u.left,i=v.clientY-u.top}let s=0,l=.3;(g=a._ripple)!=null&&g.circle?(l=.15,s=a.clientWidth/2,s=n.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-s*2)/2}px`,d=`${(a.clientHeight-s*2)/2}px`,m=n.center?o:`${t-s}px`,f=n.center?d:`${i-s}px`;return{radius:s,scale:l,x:m,y:f,centerX:o,centerY:d}},te={show(e,a){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=a==null?void 0:a._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:s,scale:l,x:o,y:d,centerX:m,centerY:f}=wn(e,a,n),g=`${s*2}px`;i.className="v-ripple__animation",i.style.width=g,i.style.height=g,a.appendChild(t);const u=window.getComputedStyle(a);u&&u.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Re(i,`translate(${o}, ${d}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Re(i,`translate(${m}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function dt(e){return typeof e>"u"||!!e}function H(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ge])){if(e[ge]=!0,ye(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||ct(e),n._ripple.class&&(a.class=n._ripple.class),ye(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{te.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},kn)}else te.show(e,n,a)}}function je(e){e[ge]=!0}function w(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),te.hide(a)}}function vt(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let D=!1;function ft(e){!D&&(e.keyCode===$e.enter||e.keyCode===$e.space)&&(D=!0,H(e))}function mt(e){D=!1,w(e)}function gt(e){D&&(D=!1,w(e))}function yt(e,a,n){const{value:t,modifiers:i}=a,s=dt(t);if(s||te.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,Kt(t)&&t.class&&(e._ripple.class=t.class),s&&!n){if(i.stop){e.addEventListener("touchstart",je,{passive:!0}),e.addEventListener("mousedown",je);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",vt,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",H),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",ft),e.addEventListener("keyup",mt),e.addEventListener("blur",gt),e.addEventListener("dragstart",w,{passive:!0})}else!s&&n&&ht(e)}function ht(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",vt),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",ft),e.removeEventListener("keyup",mt),e.removeEventListener("dragstart",w),e.removeEventListener("blur",gt)}function Vn(e,a){yt(e,a,!1)}function In(e){delete e._ripple,ht(e)}function Pn(e,a){if(a.value===a.oldValue)return;const n=dt(a.oldValue);yt(e,a,n)}const bt={mounted:Vn,unmounted:In,updated:Pn};const En=p({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ln=p({value:null,disabled:Boolean,selectedClass:String},"group-item");function Tn(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=W("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ye();le(Symbol.for(`${a.description}:id`),i);const s=F(a,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const l=T(e,"value"),o=c(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:o},t),se(()=>{s.unregister(i)});const d=c(()=>s.isSelected(i)),m=c(()=>d.value&&[s.selectedClass.value,e.selectedClass]);return R(d,f=>{t.emit("group:selected",{value:f})}),{id:i,isSelected:d,toggle:()=>s.select(i,!d.value),select:f=>s.select(i,f),selectedClass:m,value:l,disabled:o,group:s}}function $n(e,a){let n=!1;const t=Xt([]),i=Jt(e,"modelValue",[],u=>u==null?[]:pt(t,en(u)),u=>{const v=Bn(t,u);return e.multiple?v:v[0]}),s=W("useGroup");function l(u,v){const y=u,h=Symbol.for(`${a.description}:id`),S=Zt(h,s==null?void 0:s.vnode).indexOf(v);S>-1?t.splice(S,0,y):t.push(y)}function o(u){if(n)return;d();const v=t.findIndex(y=>y.id===u);t.splice(v,1)}function d(){const u=t.find(v=>!v.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}Qt(()=>{d()}),se(()=>{n=!0});function m(u,v){const y=t.find(h=>h.id===u);if(!(v&&(y!=null&&y.disabled)))if(e.multiple){const h=i.value.slice(),_=h.findIndex(z=>z===u),S=~_;if(v=v??!S,S&&e.mandatory&&h.length<=1||!S&&e.max!=null&&h.length+1>e.max)return;_<0&&v?h.push(u):_>=0&&!v&&h.splice(_,1),i.value=h}else{const h=i.value.includes(u);if(e.mandatory&&h)return;i.value=v??!h?[u]:[]}}function f(u){if(e.multiple,i.value.length){const v=i.value[0],y=t.findIndex(S=>S.id===v);let h=(y+u)%t.length,_=t[h];for(;_.disabled&&h!==y;)h=(h+u)%t.length,_=t[h];if(_.disabled)return;i.value=[t[h].id]}else{const v=t.find(y=>!y.disabled);v&&(i.value=[v.id])}}const g={register:l,unregister:o,selected:i,select:m,disabled:T(e,"disabled"),prev:()=>f(t.length-1),next:()=>f(1),isSelected:u=>i.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>t),getItemIndex:u=>An(t,u)};return le(a,g),g}function An(e,a){const n=pt(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function pt(e,a){const n=[];return a.forEach(t=>{const i=e.find(l=>Fe(t,l.value)),s=e[t];(i==null?void 0:i.value)!=null?n.push(i.id):s!=null&&n.push(s.id)}),n}function Bn(e,a){const n=[];return a.forEach(t=>{const i=e.findIndex(s=>s.id===t);if(~i){const s=e[i];n.push(s.value!=null?s.value:i)}}),n}const M=Symbol.for("vuetify:v-expansion-panel"),Nn=["default","accordion","inset","popout"],zn=p({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>Nn.includes(e)},readonly:Boolean,...P(),...En(),...N(),...ae()},"VExpansionPanels"),oa=k()({name:"VExpansionPanels",props:zn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;$n(e,M);const{themeClasses:t}=ie(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return pe({VExpansionPanel:{color:T(e,"color"),readonly:T(e,"readonly"),static:T(e,"static")}}),$(()=>r(e.tag,{class:["v-expansion-panels",t.value,i.value,e.class],style:e.style},n)),{}}}),Rn=p({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function V(e,a,n){return k()({name:e,props:Rn({mode:n,origin:a}),setup(t,i){let{slots:s}=i;const l={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:d,offsetLeft:m,offsetWidth:f,offsetHeight:g}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${d}px`,o.style.left=`${m}px`,o.style.width=`${f}px`,o.style.height=`${g}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:d,top:m,left:f,width:g,height:u}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=d||"",o.style.top=m||"",o.style.left=f||"",o.style.width=g||"",o.style.height=u||""}}};return()=>{const o=t.group?tn:he;return O(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:l},s.default)}}})}function St(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return k()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,i){let{slots:s}=i;return()=>O(he,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},s.default)}})}function xt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=De(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const o=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const d=`${l[t]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=o.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=d})},onAfterEnter:s,onEnterCancelled:s,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(l){e&&l._parent&&l._parent.classList.remove(e),s(l)}function s(l){const o=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,o!=null&&(l.style[n]=o),delete l._initialStyle}}V("fab-transition","center center","out-in");V("dialog-bottom-transition");V("dialog-top-transition");V("fade-transition");V("scale-transition");V("scroll-x-transition");V("scroll-x-reverse-transition");V("scroll-y-transition");V("scroll-y-reverse-transition");V("slide-x-transition");V("slide-x-reverse-transition");V("slide-y-transition");V("slide-y-reverse-transition");const jn=St("expand-transition",xt());St("expand-x-transition",xt("",!0));const Ct=p({eager:Boolean},"lazy");function On(e,a){const n=B(!1),t=c(()=>n.value||e.eager||a.value);R(a,()=>n.value=!0);function i(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:t,onAfterLeave:i}}const Gn=p({...P(),...Ct()},"VExpansionPanelText"),Hn=k()({name:"VExpansionPanelText",props:Gn(),setup(e,a){let{slots:n}=a;const t=F(M);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:s}=On(e,t.isSelected);return $(()=>r(jn,{onAfterLeave:s},{default:()=>{var l;return[G(r("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&r("div",{class:"v-expansion-panel-text__wrapper"},[(l=n.default)==null?void 0:l.call(n)])]),[[qe,t.isSelected.value]])]}})),{}}}),_t=p({color:String,expandIcon:{type:j,default:"$expand"},collapseIcon:{type:j,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...P()},"VExpansionPanelTitle"),Dn=k()({name:"VExpansionPanelTitle",directives:{Ripple:bt},props:_t(),setup(e,a){let{slots:n}=a;const t=F(M);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:s}=Xe(e,"color"),l=c(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return $(()=>{var o;return G(r("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[s.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[r("span",{class:"v-expansion-panel-title__overlay"},null),(o=n.default)==null?void 0:o.call(n,l.value),!e.hideActions&&r("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(l.value):r(ee,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[be("ripple"),e.ripple]])}),{}}}),Mn=p({title:String,text:String,bgColor:String,...P(),...rt(),...Ln(),...Ct(),...xe(),...N(),..._t()},"VExpansionPanel"),ra=k()({name:"VExpansionPanel",props:Mn(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const t=Tn(e,M),{backgroundColorClasses:i,backgroundColorStyles:s}=Xe(e,"bgColor"),{elevationClasses:l}=ut(e),{roundedClasses:o}=Ce(e),d=c(()=>(t==null?void 0:t.disabled.value)||e.disabled),m=c(()=>t.group.items.value.reduce((u,v,y)=>(t.group.selected.value.includes(v.id)&&u.push(y),u),[])),f=c(()=>{const u=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&m.value.some(v=>v-u===1)}),g=c(()=>{const u=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&m.value.some(v=>v-u===-1)});return le(M,t),pe({VExpansionPanelText:{eager:T(e,"eager")},VExpansionPanelTitle:{readonly:T(e,"readonly")}}),$(()=>{const u=!!(n.text||e.text),v=!!(n.title||e.title);return r(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":f.value,"v-expansion-panel--after-active":g.value,"v-expansion-panel--disabled":d.value},o.value,i.value,e.class],style:[s.value,e.style]},{default:()=>{var y;return[r("div",{class:["v-expansion-panel__shadow",...l.value]},null),v&&r(Dn,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),u&&r(Hn,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(y=n.default)==null?void 0:y.call(n)]}})}),{}}});const kt=(()=>oe.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),wt=(()=>oe.reduce((e,a)=>{const n="offset"+ne(a);return e[n]={type:[String,Number],default:null},e},{}))(),Vt=(()=>oe.reduce((e,a)=>{const n="order"+ne(a);return e[n]={type:[String,Number],default:null},e},{}))(),Oe={col:Object.keys(kt),offset:Object.keys(wt),order:Object.keys(Vt)};function Wn(e,a,n){let t=e;if(!(n==null||n===!1)){if(a){const i=a.replace(e,"");t+=`-${i}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const Un=["auto","start","end","center","baseline","stretch"],qn=p({cols:{type:[Boolean,String,Number],default:!1},...kt,offset:{type:[String,Number],default:null},...wt,order:{type:[String,Number],default:null},...Vt,alignSelf:{type:String,default:null,validator:e=>Un.includes(e)},...P(),...N()},"VCol"),ua=k()({name:"VCol",props:qn(),setup(e,a){let{slots:n}=a;const t=c(()=>{const i=[];let s;for(s in Oe)Oe[s].forEach(o=>{const d=e[o],m=Wn(s,o,d);m&&i.push(m)});const l=i.some(o=>o.startsWith("v-col-"));return i.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),i});return()=>{var i;return O(e.tag,{class:[t.value,e.class],style:e.style},(i=n.default)==null?void 0:i.call(n))}}}),_e=["start","end","center"],It=["space-between","space-around","space-evenly"];function ke(e,a){return oe.reduce((n,t)=>{const i=e+ne(t);return n[i]=a(),n},{})}const Fn=[..._e,"baseline","stretch"],Pt=e=>Fn.includes(e),Et=ke("align",()=>({type:String,default:null,validator:Pt})),Yn=[..._e,...It],Lt=e=>Yn.includes(e),Tt=ke("justify",()=>({type:String,default:null,validator:Lt})),Kn=[..._e,...It,"stretch"],$t=e=>Kn.includes(e),At=ke("alignContent",()=>({type:String,default:null,validator:$t})),Ge={align:Object.keys(Et),justify:Object.keys(Tt),alignContent:Object.keys(At)},Xn={align:"align",justify:"justify",alignContent:"align-content"};function Jn(e,a,n){let t=Xn[e];if(n!=null){if(a){const i=a.replace(e,"");t+=`-${i}`}return t+=`-${n}`,t.toLowerCase()}}const Qn=p({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Pt},...Et,justify:{type:String,default:null,validator:Lt},...Tt,alignContent:{type:String,default:null,validator:$t},...At,...P(),...N()},"VRow"),ca=k()({name:"VRow",props:Qn(),setup(e,a){let{slots:n}=a;const t=c(()=>{const i=[];let s;for(s in Ge)Ge[s].forEach(l=>{const o=e[l],d=Jn(s,l,o);d&&i.push(d)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return O(e.tag,{class:["v-row",t.value,e.class],style:e.style},(i=n.default)==null?void 0:i.call(n))}}}),Zn=Symbol.for("vuetify:list");function ea(){return F(Zn,null)}const He=Symbol.for("vuetify:nested"),ta={id:B(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},na=(e,a)=>{const n=F(He,ta),t=Symbol(Ye()),i=c(()=>e.value!==void 0?e.value:t),s={...n,id:i,open:(l,o)=>n.root.open(i.value,l,o),openOnSelect:(l,o)=>n.root.openOnSelect(i.value,l,o),isOpen:c(()=>n.root.opened.value.has(i.value)),parent:c(()=>n.root.parents.value.get(i.value)),select:(l,o)=>n.root.select(i.value,l,o),isSelected:c(()=>n.root.selected.value.get(nn(i.value))==="on"),isIndeterminate:c(()=>n.root.selected.value.get(i.value)==="indeterminate"),isLeaf:c(()=>!n.root.children.value.get(i.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(i.value,n.id.value,a),se(()=>{!n.isGroupActivator&&n.root.unregister(i.value)}),a&&le(He,s),s};const aa=Ke("v-list-item-subtitle"),ia=Ke("v-list-item-title"),sa=p({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Ae(),onClickOnce:Ae(),...pn(),...P(),...at(),...Ze(),...rt(),...xe(),..._n(),...N(),...ae(),...lt({variant:"text"})},"VListItem"),da=k()({name:"VListItem",directives:{Ripple:bt},props:sa(),emits:{click:e=>!0},setup(e,a){let{attrs:n,slots:t,emit:i}=a;const s=Cn(e,n),l=c(()=>e.value===void 0?s.href.value:e.value),{select:o,isSelected:d,isIndeterminate:m,isGroupActivator:f,root:g,parent:u,openOnSelect:v}=na(l,!1),y=ea(),h=c(()=>{var x;return e.active!==!1&&(e.active||((x=s.isActive)==null?void 0:x.value)||d.value)}),_=c(()=>e.link!==!1&&s.isLink.value),S=c(()=>!e.disabled&&e.link!==!1&&(e.link||s.isClickable.value||e.value!=null&&!!y)),z=c(()=>e.rounded||e.nav),re=c(()=>e.color??e.activeColor),ue=c(()=>({color:h.value?re.value??e.baseColor:e.baseColor,variant:e.variant}));R(()=>{var x;return(x=s.isActive)==null?void 0:x.value},x=>{x&&u.value!=null&&g.open(u.value,!0),x&&v(x)},{immediate:!0});const{themeClasses:ce}=ie(e),{borderClasses:de}=Sn(e),{colorClasses:ve,colorStyles:Y,variantClasses:b}=ot(ue),{densityClasses:C}=it(e),{dimensionStyles:L}=et(e),{elevationClasses:K}=ut(e),{roundedClasses:X}=Ce(z),Bt=c(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),fe=c(()=>({isActive:h.value,select:o,isSelected:d.value,isIndeterminate:m.value}));function we(x){var J;i("click",x),!(f||!S.value)&&((J=s.navigate)==null||J.call(s,x),e.value!=null&&o(!d.value,x))}function Nt(x){(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),we(x))}return $(()=>{const x=_.value?"a":e.tag,J=t.title||e.title!=null,zt=t.subtitle||e.subtitle!=null,Ve=!!(e.appendAvatar||e.appendIcon),Rt=!!(Ve||t.append),Ie=!!(e.prependAvatar||e.prependIcon),me=!!(Ie||t.prepend);return y==null||y.updateHasPrepend(me),e.activeColor&&an("active-color",["color","base-color"]),G(r(x,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":S.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!me&&(y==null?void 0:y.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},ce.value,de.value,ve.value,C.value,K.value,Bt.value,X.value,b.value,e.class],style:[Y.value,L.value,e.style],href:s.href.value,tabindex:S.value?y?-2:0:void 0,onClick:we,onKeydown:S.value&&!_.value&&Nt},{default:()=>{var Pe;return[st(S.value||h.value,"v-list-item"),me&&r("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?r(ze,{key:"prepend-defaults",disabled:!Ie,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var E;return[(E=t.prepend)==null?void 0:E.call(t,fe.value)]}}):r(Z,null,[e.prependAvatar&&r(Ne,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(ee,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),r("div",{class:"v-list-item__spacer"},null)]),r("div",{class:"v-list-item__content","data-no-activator":""},[J&&r(ia,{key:"title"},{default:()=>{var E;return[((E=t.title)==null?void 0:E.call(t,{title:e.title}))??e.title]}}),zt&&r(aa,{key:"subtitle"},{default:()=>{var E;return[((E=t.subtitle)==null?void 0:E.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(Pe=t.default)==null?void 0:Pe.call(t,fe.value)]),Rt&&r("div",{key:"append",class:"v-list-item__append"},[t.append?r(ze,{key:"append-defaults",disabled:!Ve,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var E;return[(E=t.append)==null?void 0:E.call(t,fe.value)]}}):r(Z,null,[e.appendIcon&&r(ee,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(Ne,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),r("div",{class:"v-list-item__spacer"},null)])]}}),[[be("ripple"),S.value&&e.ripple]])}),{}}});export{it as A,et as B,ut as C,Cn as D,st as E,bt as R,ca as V,ua as a,ra as b,Hn as c,da as d,ia as e,aa as f,oa as g,mn as h,Ke as i,at as j,Ne as k,ze as l,P as m,xe as n,N as o,sn as p,Xe as q,Ce as r,pn as s,Ze as t,$ as u,rt as v,_n as w,lt as x,Sn as y,ot as z};
