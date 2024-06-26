import{A as b,y as w,ab as ne,ac as Me,ad as j,S as G,G as d,ae as U,P as We,af as Le,ag as Gt,ah as Ht,ai as Dt,aa as q,a8 as Mt,H as E,L as O,B as ae,m as A,C as se,aj as Wt,E as T,ak as Ut,al as qt,a as r,z as Ue,T as pe,a9 as qe,W as B,s as R,am as Ft,K as Fe,q as ie,g as H,M as be,F as Z,a4 as Ke,an as Te,ao as Kt,D as Se,ap as Yt,aq as $e,ar as Ye,I as Xt,O as Jt,as as Qt,at as Ae,au as Xe,$ as le,U as F,Z as Zt,a1 as en,Y as tn,av as nn,aw as an,ax as sn,ay as oe,a0 as ln,az as Be,aA as on}from"./index-54b8ed82.js";const V=b({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Je(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return w()({name:n??ne(Me(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...V()},setup(t,s){let{slots:i}=s;return()=>{var l;return j(t.tag,{class:[e,t.class],style:t.style},(l=i.default)==null?void 0:l.call(i))}}})}function $(e){const a=G("useRender");a.render=e}function xe(e){return We(()=>{const a=[],n={};if(e.value.background)if(Le(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Gt(e.value.background)){const t=Ht(e.value.background);if(t.a==null||t.a===1){const s=Dt(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(Le(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function rn(e,a){const n=d(()=>({text:U(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=xe(n);return{textColorClasses:t,textColorStyles:s}}function Qe(e,a){const n=d(()=>({background:U(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=xe(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const un=["x-small","small","default","large","x-large"],Ze=b({size:{type:[String,Number],default:"default"}},"size");function et(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return We(()=>{let n,t;return Mt(un,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:E(e.size),height:E(e.size)}),{sizeClasses:n,sizeStyles:t}})}const N=b({tag:{type:String,default:"div"}},"tag"),cn=b({color:String,start:Boolean,end:Boolean,icon:O,...V(),...Ze(),...N({tag:"i"}),...ae()},"VIcon"),ee=w()({name:"VIcon",props:cn(),setup(e,a){let{attrs:n,slots:t}=a;const s=A(),{themeClasses:i}=se(e),{iconData:l}=Wt(d(()=>s.value||e.icon)),{sizeClasses:o}=et(e),{textColorClasses:c,textColorStyles:m}=rn(T(e,"color"));return $(()=>{var g,u;const f=(g=t.default)==null?void 0:g.call(t);return f&&(s.value=(u=Ut(f).filter(v=>v.type===qt&&v.children&&typeof v.children=="string")[0])==null?void 0:u.children),r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,o.value,c.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:E(e.size),height:E(e.size),width:E(e.size)},m.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[f]})}),{}}});const tt=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function nt(e){return{dimensionStyles:d(()=>({height:E(e.height),maxHeight:E(e.maxHeight),maxWidth:E(e.maxWidth),minHeight:E(e.minHeight),minWidth:E(e.minWidth),width:E(e.width)}))}}function dn(e){return{aspectStyles:d(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const at=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...tt()},"VResponsive"),Ne=w()({name:"VResponsive",props:at(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=dn(e),{dimensionStyles:s}=nt(e);return $(()=>{var i;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[r("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),vn=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Q=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,...i}=e,{component:l=pe,...o}=typeof t=="object"?t:{};return j(l,Ue(typeof t=="string"?{name:s?"":t}:o,i,{disabled:s}),n)};function fn(e,a){if(!qe)return;const n=a.modifiers||{},t=a.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const m=(g=e._observe)==null?void 0:g[a.instance.$.uid];if(!m)return;const f=o.some(u=>u.isIntersecting);s&&(!n.quiet||m.init)&&(!n.once||f||m.init)&&s(f,o,c),f&&n.once?st(e,a):m.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function st(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const mn={mounted:fn,unmounted:st},gn=mn,yn=b({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...at(),...V(),...vn()},"VImg"),hn=w()({name:"VImg",directives:{intersect:gn},props:yn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=G("VImg"),i=B(""),l=A(),o=B(e.eager?"loading":"idle"),c=B(),m=B(),f=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=d(()=>f.value.aspect||c.value/m.value||0);R(()=>e.src,()=>{u(o.value!=="idle")}),R(g,(p,C)=>{!p&&C&&l.value&&S(l.value)}),Ft(()=>u());function u(p){if(!(e.eager&&p)&&!(qe&&!p&&!e.eager)){if(o.value="loading",f.value.lazySrc){const C=new Image;C.src=f.value.lazySrc,S(C,null)}f.value.src&&Fe(()=>{var C;n("loadstart",((C=l.value)==null?void 0:C.currentSrc)||f.value.src),setTimeout(()=>{var L;if(!s.isUnmounted)if((L=l.value)!=null&&L.complete){if(l.value.naturalWidth||y(),o.value==="error")return;g.value||S(l.value,null),o.value==="loading"&&v()}else g.value||S(l.value),h()})})}}function v(){var p;s.isUnmounted||(h(),S(l.value),o.value="loaded",n("load",((p=l.value)==null?void 0:p.currentSrc)||f.value.src))}function y(){var p;s.isUnmounted||(o.value="error",n("error",((p=l.value)==null?void 0:p.currentSrc)||f.value.src))}function h(){const p=l.value;p&&(i.value=p.currentSrc||p.src)}let _=-1;ie(()=>{clearTimeout(_)});function S(p){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const L=()=>{if(clearTimeout(_),s.isUnmounted)return;const{naturalHeight:Y,naturalWidth:X}=p;Y||X?(c.value=X,m.value=Y):!p.complete&&o.value==="loading"&&C!=null?_=window.setTimeout(L,C):(p.currentSrc.endsWith(".svg")||p.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,m.value=1)};L()}const z=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),re=()=>{var L;if(!f.value.src||o.value==="idle")return null;const p=r("img",{class:["v-img__img",z.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:v,onError:y},null),C=(L=t.sources)==null?void 0:L.call(t);return r(Q,{transition:e.transition,appear:!0},{default:()=>[H(C?r("picture",{class:"v-img__picture"},[C,p]):p,[[Ke,o.value==="loaded"]])]})},ue=()=>r(Q,{transition:e.transition},{default:()=>[f.value.lazySrc&&o.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",z.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),ce=()=>t.placeholder?r(Q,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,de=()=>t.error?r(Q,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,ve=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,K=B(!1);{const p=R(g,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{K.value=!0})}),p())})}return $(()=>{const p=Ne.filterProps(e);return H(r(Ne,Ue({class:["v-img",{"v-img--booting":!K.value},e.class],style:[{width:E(e.width==="auto"?c.value:e.width)},e.style]},p,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Z,null,[r(re,null,null),r(ue,null,null),r(ve,null,null),r(ce,null,null),r(de,null,null)]),default:t.default}),[[be("intersect"),{handler:u,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:l,state:o,naturalWidth:c,naturalHeight:m}}}),pn=[null,"default","comfortable","compact"],it=b({density:{type:String,default:"default",validator:e=>pn.includes(e)}},"density");function lt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return{densityClasses:d(()=>`${a}--density-${e.density}`)}}const Ce=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function _e(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return{roundedClasses:d(()=>{const t=U(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`rounded-${i}`);return s})}}const bn=["elevated","flat","tonal","outlined","text","plain"];function ot(e,a){return r(Z,null,[e&&r("span",{key:"overlay",class:`${a}__overlay`},null),r("span",{key:"underlay",class:`${a}__underlay`},null)])}const rt=b({color:String,variant:{type:String,default:"elevated",validator:e=>bn.includes(e)}},"variant");function ut(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();const n=d(()=>{const{variant:i}=Te(e);return`${a}--variant-${i}`}),{colorClasses:t,colorStyles:s}=xe(d(()=>{const{variant:i,color:l}=Te(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:s,variantClasses:n}}const Sn=b({start:Boolean,end:Boolean,icon:O,image:String,text:String,...V(),...it(),...Ce(),...Ze(),...N(),...ae(),...rt({variant:"flat"})},"VAvatar"),ze=w()({name:"VAvatar",props:Sn(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=se(e),{colorClasses:s,colorStyles:i,variantClasses:l}=ut(e),{densityClasses:o}=lt(e),{roundedClasses:c}=_e(e),{sizeClasses:m,sizeStyles:f}=et(e);return $(()=>r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,c.value,m.value,l.value,e.class],style:[i.value,f.value,e.style]},{default:()=>{var g;return[e.image?r(hn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(ee,{key:"icon",icon:e.icon},null):((g=n.default)==null?void 0:g.call(n))??e.text,ot(!1,"v-avatar")]}})),{}}}),xn=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Re=w(!1)({name:"VDefaultsProvider",props:xn(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:i,root:l,scoped:o}=Kt(e);return Se(t,{reset:i,root:l,scoped:o,disabled:s}),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}}),Cn=b({border:[Boolean,Number,String]},"border");function _n(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q();return{borderClasses:d(()=>{const t=U(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}const ct=b({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function dt(e){return{elevationClasses:d(()=>{const n=U(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}function wn(){const e=G("useRoute");return d(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function ca(){var e,a;return(a=(e=G("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function kn(e,a){const n=Yt("RouterLink"),t=d(()=>!!(e.href||e.to)),s=d(()=>(t==null?void 0:t.value)||$e(a,"click")||$e(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:s,href:T(e,"href")};const i=e.to?n.useLink(e):void 0,l=wn();return{isLink:t,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&d(()=>{var o,c,m;return e.exact?l.value?((m=i.isExactActive)==null?void 0:m.value)&&Ye(i.route.value.query,l.value.query):(c=i.isExactActive)==null?void 0:c.value:(o=i.isActive)==null?void 0:o.value}),href:d(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const In=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ge=!1;function da(e,a){let n=!1,t,s;Xt&&(Fe(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((l,o,c)=>{ge?n?a(c):c():setTimeout(()=>n?a(c):c()),ge=!0}),s=e==null?void 0:e.afterEach(()=>{ge=!1})}),Jt(()=>{window.removeEventListener("popstate",i),t==null||t(),s==null||s()}));function i(l){var o;(o=l.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const ye=Symbol("rippleStop"),En=80;function Oe(e,a){e.style.transform=a,e.style.webkitTransform=a}function he(e){return e.constructor.name==="TouchEvent"}function vt(e){return e.constructor.name==="KeyboardEvent"}const Vn=function(e,a){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!vt(e)){const u=a.getBoundingClientRect(),v=he(e)?e.touches[e.touches.length-1]:e;t=v.clientX-u.left,s=v.clientY-u.top}let i=0,l=.3;(g=a._ripple)!=null&&g.circle?(l=.15,i=a.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-i*2)/2}px`,c=`${(a.clientHeight-i*2)/2}px`,m=n.center?o:`${t-i}px`,f=n.center?c:`${s-i}px`;return{radius:i,scale:l,x:m,y:f,centerX:o,centerY:c}},te={show(e,a){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=a==null?void 0:a._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:l,x:o,y:c,centerX:m,centerY:f}=Vn(e,a,n),g=`${i*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,a.appendChild(t);const u=window.getComputedStyle(a);u&&u.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Oe(s,`translate(${o}, ${c}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Oe(s,`translate(${m}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function ft(e){return typeof e>"u"||!!e}function D(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ye])){if(e[ye]=!0,he(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||vt(e),n._ripple.class&&(a.class=n._ripple.class),he(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{te.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},En)}else te.show(e,n,a)}}function je(e){e[ye]=!0}function k(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{k(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),te.hide(a)}}function mt(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let M=!1;function gt(e){!M&&(e.keyCode===Ae.enter||e.keyCode===Ae.space)&&(M=!0,D(e))}function yt(e){M=!1,k(e)}function ht(e){M&&(M=!1,k(e))}function pt(e,a,n){const{value:t,modifiers:s}=a,i=ft(t);if(i||te.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Qt(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(s.stop){e.addEventListener("touchstart",je,{passive:!0}),e.addEventListener("mousedown",je);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",k,{passive:!0}),e.addEventListener("touchmove",mt,{passive:!0}),e.addEventListener("touchcancel",k),e.addEventListener("mousedown",D),e.addEventListener("mouseup",k),e.addEventListener("mouseleave",k),e.addEventListener("keydown",gt),e.addEventListener("keyup",yt),e.addEventListener("blur",ht),e.addEventListener("dragstart",k,{passive:!0})}else!i&&n&&bt(e)}function bt(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",k),e.removeEventListener("touchmove",mt),e.removeEventListener("touchcancel",k),e.removeEventListener("mouseup",k),e.removeEventListener("mouseleave",k),e.removeEventListener("keydown",gt),e.removeEventListener("keyup",yt),e.removeEventListener("dragstart",k),e.removeEventListener("blur",ht)}function Pn(e,a){pt(e,a,!1)}function Ln(e){delete e._ripple,bt(e)}function Tn(e,a){if(a.value===a.oldValue)return;const n=ft(a.oldValue);pt(e,a,n)}const St={mounted:Pn,unmounted:Ln,updated:Tn};const $n=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),An=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function Bn(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=G("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Xe();le(Symbol.for(`${a.description}:id`),s);const i=F(a,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const l=T(e,"value"),o=d(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:l,disabled:o},t),ie(()=>{i.unregister(s)});const c=d(()=>i.isSelected(s)),m=d(()=>c.value&&[i.selectedClass.value,e.selectedClass]);return R(c,f=>{t.emit("group:selected",{value:f})}),{id:s,isSelected:c,toggle:()=>i.select(s,!c.value),select:f=>i.select(s,f),selectedClass:m,value:l,disabled:o,group:i}}function Nn(e,a){let n=!1;const t=Zt([]),s=en(e,"modelValue",[],u=>u==null?[]:xt(t,nn(u)),u=>{const v=Rn(t,u);return e.multiple?v:v[0]}),i=G("useGroup");function l(u,v){const y=u,h=Symbol.for(`${a.description}:id`),S=an(h,i==null?void 0:i.vnode).indexOf(v);S>-1?t.splice(S,0,y):t.push(y)}function o(u){if(n)return;c();const v=t.findIndex(y=>y.id===u);t.splice(v,1)}function c(){const u=t.find(v=>!v.disabled);u&&e.mandatory==="force"&&!s.value.length&&(s.value=[u.id])}tn(()=>{c()}),ie(()=>{n=!0});function m(u,v){const y=t.find(h=>h.id===u);if(!(v&&(y!=null&&y.disabled)))if(e.multiple){const h=s.value.slice(),_=h.findIndex(z=>z===u),S=~_;if(v=v??!S,S&&e.mandatory&&h.length<=1||!S&&e.max!=null&&h.length+1>e.max)return;_<0&&v?h.push(u):_>=0&&!v&&h.splice(_,1),s.value=h}else{const h=s.value.includes(u);if(e.mandatory&&h)return;s.value=v??!h?[u]:[]}}function f(u){if(e.multiple,s.value.length){const v=s.value[0],y=t.findIndex(S=>S.id===v);let h=(y+u)%t.length,_=t[h];for(;_.disabled&&h!==y;)h=(h+u)%t.length,_=t[h];if(_.disabled)return;s.value=[t[h].id]}else{const v=t.find(y=>!y.disabled);v&&(s.value=[v.id])}}const g={register:l,unregister:o,selected:s,select:m,disabled:T(e,"disabled"),prev:()=>f(t.length-1),next:()=>f(1),isSelected:u=>s.value.includes(u),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:u=>zn(t,u)};return le(a,g),g}function zn(e,a){const n=xt(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function xt(e,a){const n=[];return a.forEach(t=>{const s=e.find(l=>Ye(t,l.value)),i=e[t];(s==null?void 0:s.value)!=null?n.push(s.id):i!=null&&n.push(i.id)}),n}function Rn(e,a){const n=[];return a.forEach(t=>{const s=e.findIndex(i=>i.id===t);if(~s){const i=e[s];n.push(i.value!=null?i.value:s)}}),n}const W=Symbol.for("vuetify:v-expansion-panel"),On=["default","accordion","inset","popout"],jn=b({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>On.includes(e)},readonly:Boolean,...V(),...$n(),...N(),...ae()},"VExpansionPanels"),va=w()({name:"VExpansionPanels",props:jn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;Nn(e,W);const{themeClasses:t}=se(e),s=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Se({VExpansionPanel:{color:T(e,"color"),readonly:T(e,"readonly"),static:T(e,"static")}}),$(()=>r(e.tag,{class:["v-expansion-panels",t.value,s.value,e.class],style:e.style},n)),{}}}),Gn=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function I(e,a,n){return w()({name:e,props:Gn({mode:n,origin:a}),setup(t,s){let{slots:i}=s;const l={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:m,offsetWidth:f,offsetHeight:g}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${m}px`,o.style.width=`${f}px`,o.style.height=`${g}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:c,top:m,left:f,width:g,height:u}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=m||"",o.style.left=f||"",o.style.width=g||"",o.style.height=u||""}}};return()=>{const o=t.group?sn:pe;return j(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:l},i.default)}}})}function Ct(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return w()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,s){let{slots:i}=s;return()=>j(pe,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},i.default)}})}function _t(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Me(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const o=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const c=`${l[t]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=o.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=c})},onAfterEnter:i,onEnterCancelled:i,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(l){e&&l._parent&&l._parent.classList.remove(e),i(l)}function i(l){const o=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,o!=null&&(l.style[n]=o),delete l._initialStyle}}I("fab-transition","center center","out-in");I("dialog-bottom-transition");I("dialog-top-transition");I("fade-transition");I("scale-transition");I("scroll-x-transition");I("scroll-x-reverse-transition");I("scroll-y-transition");I("scroll-y-reverse-transition");I("slide-x-transition");I("slide-x-reverse-transition");I("slide-y-transition");I("slide-y-reverse-transition");const Hn=Ct("expand-transition",_t());Ct("expand-x-transition",_t("",!0));const wt=b({eager:Boolean},"lazy");function Dn(e,a){const n=B(!1),t=d(()=>n.value||e.eager||a.value);R(a,()=>n.value=!0);function s(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:t,onAfterLeave:s}}const Mn=b({...V(),...wt()},"VExpansionPanelText"),Wn=w()({name:"VExpansionPanelText",props:Mn(),setup(e,a){let{slots:n}=a;const t=F(W);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:i}=Dn(e,t.isSelected);return $(()=>r(Hn,{onAfterLeave:i},{default:()=>{var l;return[H(r("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&s.value&&r("div",{class:"v-expansion-panel-text__wrapper"},[(l=n.default)==null?void 0:l.call(n)])]),[[Ke,t.isSelected.value]])]}})),{}}}),kt=b({color:String,expandIcon:{type:O,default:"$expand"},collapseIcon:{type:O,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...V()},"VExpansionPanelTitle"),Un=w()({name:"VExpansionPanelTitle",directives:{Ripple:St},props:kt(),setup(e,a){let{slots:n}=a;const t=F(W);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:i}=Qe(e,"color"),l=d(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return $(()=>{var o;return H(r("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[i.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[r("span",{class:"v-expansion-panel-title__overlay"},null),(o=n.default)==null?void 0:o.call(n,l.value),!e.hideActions&&r("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(l.value):r(ee,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[be("ripple"),e.ripple]])}),{}}}),qn=b({title:String,text:String,bgColor:String,...V(),...ct(),...An(),...wt(),...Ce(),...N(),...kt()},"VExpansionPanel"),fa=w()({name:"VExpansionPanel",props:qn(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const t=Bn(e,W),{backgroundColorClasses:s,backgroundColorStyles:i}=Qe(e,"bgColor"),{elevationClasses:l}=dt(e),{roundedClasses:o}=_e(e),c=d(()=>(t==null?void 0:t.disabled.value)||e.disabled),m=d(()=>t.group.items.value.reduce((u,v,y)=>(t.group.selected.value.includes(v.id)&&u.push(y),u),[])),f=d(()=>{const u=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&m.value.some(v=>v-u===1)}),g=d(()=>{const u=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&m.value.some(v=>v-u===-1)});return le(W,t),Se({VExpansionPanelText:{eager:T(e,"eager")},VExpansionPanelTitle:{readonly:T(e,"readonly")}}),$(()=>{const u=!!(n.text||e.text),v=!!(n.title||e.title);return r(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":f.value,"v-expansion-panel--after-active":g.value,"v-expansion-panel--disabled":c.value},o.value,s.value,e.class],style:[i.value,e.style]},{default:()=>{var y;return[r("div",{class:["v-expansion-panel__shadow",...l.value]},null),v&&r(Un,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),u&&r(Wn,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(y=n.default)==null?void 0:y.call(n)]}})}),{}}});const It=(()=>oe.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),Et=(()=>oe.reduce((e,a)=>{const n="offset"+ne(a);return e[n]={type:[String,Number],default:null},e},{}))(),Vt=(()=>oe.reduce((e,a)=>{const n="order"+ne(a);return e[n]={type:[String,Number],default:null},e},{}))(),Ge={col:Object.keys(It),offset:Object.keys(Et),order:Object.keys(Vt)};function Fn(e,a,n){let t=e;if(!(n==null||n===!1)){if(a){const s=a.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const Kn=["auto","start","end","center","baseline","stretch"],Yn=b({cols:{type:[Boolean,String,Number],default:!1},...It,offset:{type:[String,Number],default:null},...Et,order:{type:[String,Number],default:null},...Vt,alignSelf:{type:String,default:null,validator:e=>Kn.includes(e)},...V(),...N()},"VCol"),ma=w()({name:"VCol",props:Yn(),setup(e,a){let{slots:n}=a;const t=d(()=>{const s=[];let i;for(i in Ge)Ge[i].forEach(o=>{const c=e[o],m=Fn(i,o,c);m&&s.push(m)});const l=s.some(o=>o.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return j(e.tag,{class:[t.value,e.class],style:e.style},(s=n.default)==null?void 0:s.call(n))}}}),we=["start","end","center"],Pt=["space-between","space-around","space-evenly"];function ke(e,a){return oe.reduce((n,t)=>{const s=e+ne(t);return n[s]=a(),n},{})}const Xn=[...we,"baseline","stretch"],Lt=e=>Xn.includes(e),Tt=ke("align",()=>({type:String,default:null,validator:Lt})),Jn=[...we,...Pt],$t=e=>Jn.includes(e),At=ke("justify",()=>({type:String,default:null,validator:$t})),Qn=[...we,...Pt,"stretch"],Bt=e=>Qn.includes(e),Nt=ke("alignContent",()=>({type:String,default:null,validator:Bt})),He={align:Object.keys(Tt),justify:Object.keys(At),alignContent:Object.keys(Nt)},Zn={align:"align",justify:"justify",alignContent:"align-content"};function ea(e,a,n){let t=Zn[e];if(n!=null){if(a){const s=a.replace(e,"");t+=`-${s}`}return t+=`-${n}`,t.toLowerCase()}}const ta=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Lt},...Tt,justify:{type:String,default:null,validator:$t},...At,alignContent:{type:String,default:null,validator:Bt},...Nt,...V(),...N()},"VRow"),ga=w()({name:"VRow",props:ta(),setup(e,a){let{slots:n}=a;const t=d(()=>{const s=[];let i;for(i in He)He[i].forEach(l=>{const o=e[l],c=ea(i,l,o);c&&s.push(c)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return j(e.tag,{class:["v-row",t.value,e.class],style:e.style},(s=n.default)==null?void 0:s.call(n))}}}),na=Symbol.for("vuetify:list");function aa(){return F(na,null)}const De=Symbol.for("vuetify:nested"),sa={id:B(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},ia=(e,a)=>{const n=F(De,sa),t=Symbol(Xe()),s=d(()=>e.value!==void 0?e.value:t),i={...n,id:s,open:(l,o)=>n.root.open(s.value,l,o),openOnSelect:(l,o)=>n.root.openOnSelect(s.value,l,o),isOpen:d(()=>n.root.opened.value.has(s.value)),parent:d(()=>n.root.parents.value.get(s.value)),select:(l,o)=>n.root.select(s.value,l,o),isSelected:d(()=>n.root.selected.value.get(ln(s.value))==="on"),isIndeterminate:d(()=>n.root.selected.value.get(s.value)==="indeterminate"),isLeaf:d(()=>!n.root.children.value.get(s.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(s.value,n.id.value,a),ie(()=>{!n.isGroupActivator&&n.root.unregister(s.value)}),a&&le(De,i),i};const la=Je("v-list-item-subtitle"),oa=Je("v-list-item-title"),ra=b({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:Be(),onClickOnce:Be(),...Cn(),...V(),...it(),...tt(),...ct(),...Ce(),...In(),...N(),...ae(),...rt({variant:"text"})},"VListItem"),ya=w()({name:"VListItem",directives:{Ripple:St},props:ra(),emits:{click:e=>!0},setup(e,a){let{attrs:n,slots:t,emit:s}=a;const i=kn(e,n),l=d(()=>e.value===void 0?i.href.value:e.value),{select:o,isSelected:c,isIndeterminate:m,isGroupActivator:f,root:g,parent:u,openOnSelect:v}=ia(l,!1),y=aa(),h=d(()=>{var x;return e.active!==!1&&(e.active||((x=i.isActive)==null?void 0:x.value)||c.value)}),_=d(()=>e.link!==!1&&i.isLink.value),S=d(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value||e.value!=null&&!!y)),z=d(()=>e.rounded||e.nav),re=d(()=>e.color??e.activeColor),ue=d(()=>({color:h.value?re.value??e.baseColor:e.baseColor,variant:e.variant}));R(()=>{var x;return(x=i.isActive)==null?void 0:x.value},x=>{x&&u.value!=null&&g.open(u.value,!0),x&&v(x)},{immediate:!0});const{themeClasses:ce}=se(e),{borderClasses:de}=_n(e),{colorClasses:ve,colorStyles:K,variantClasses:p}=ut(ue),{densityClasses:C}=lt(e),{dimensionStyles:L}=nt(e),{elevationClasses:Y}=dt(e),{roundedClasses:X}=_e(z),zt=d(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),fe=d(()=>({isActive:h.value,select:o,isSelected:c.value,isIndeterminate:m.value}));function Ie(x){var J;s("click",x),!(f||!S.value)&&((J=i.navigate)==null||J.call(i,x),e.value!=null&&o(!c.value,x))}function Rt(x){(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),Ie(x))}return $(()=>{const x=_.value?"a":e.tag,J=t.title||e.title!=null,Ot=t.subtitle||e.subtitle!=null,Ee=!!(e.appendAvatar||e.appendIcon),jt=!!(Ee||t.append),Ve=!!(e.prependAvatar||e.prependIcon),me=!!(Ve||t.prepend);return y==null||y.updateHasPrepend(me),e.activeColor&&on("active-color",["color","base-color"]),H(r(x,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":S.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!me&&(y==null?void 0:y.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},ce.value,de.value,ve.value,C.value,Y.value,zt.value,X.value,p.value,e.class],style:[K.value,L.value,e.style],href:i.href.value,tabindex:S.value?y?-2:0:void 0,onClick:Ie,onKeydown:S.value&&!_.value&&Rt},{default:()=>{var Pe;return[ot(S.value||h.value,"v-list-item"),me&&r("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?r(Re,{key:"prepend-defaults",disabled:!Ve,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=t.prepend)==null?void 0:P.call(t,fe.value)]}}):r(Z,null,[e.prependAvatar&&r(ze,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(ee,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),r("div",{class:"v-list-item__spacer"},null)]),r("div",{class:"v-list-item__content","data-no-activator":""},[J&&r(oa,{key:"title"},{default:()=>{var P;return[((P=t.title)==null?void 0:P.call(t,{title:e.title}))??e.title]}}),Ot&&r(la,{key:"subtitle"},{default:()=>{var P;return[((P=t.subtitle)==null?void 0:P.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(Pe=t.default)==null?void 0:Pe.call(t,fe.value)]),jt&&r("div",{key:"append",class:"v-list-item__append"},[t.append?r(Re,{key:"append-defaults",disabled:!Ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=t.append)==null?void 0:P.call(t,fe.value)]}}):r(Z,null,[e.appendIcon&&r(ee,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(ze,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),r("div",{class:"v-list-item__spacer"},null)])]}}),[[be("ripple"),S.value&&e.ripple]])}),{}}});export{An as A,In as B,ut as C,nt as D,Bn as E,kn as F,ot as G,ee as H,Re as I,wt as J,vn as K,Dn as L,Qe as M,ca as N,Q as O,da as P,Je as Q,St as R,ze as S,ga as V,ma as a,fa as b,Wn as c,ya as d,oa as e,la as f,va as g,hn as h,V as i,it as j,ct as k,Ce as l,Cn as m,N as n,rt as o,_n as p,dt as q,_e as r,$ as s,$n as t,lt as u,Nn as v,Ze as w,et as x,rn as y,tt as z};
