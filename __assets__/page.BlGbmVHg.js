import{d as K,p as H,s as A,P as b,h as c,r as O,i as k,L as j,u as S,w as T,g as v,a as R,b as L,_ as N,c as I,S as _,n as w,T as B,R as C,e as q,t as E,f as F}from"./entry.BQIaT2S8.js";const V=K({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const i=e.renderKey,n=e.route,a={};for(const r in e.route)Object.defineProperty(a,r,{get:()=>i===e.renderKey?e.route[r]:n[r]});return H(b,A(a)),()=>c(e.vnode,{ref:e.vnodeRef})}}),M=K({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:i,expose:n}){const a=q(),r=O(),o=k(b,null);let u;n({pageRef:r});const d=k(j,null);let s;const f=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",f);S().beforeEach(t)}return e.pageKey&&T(()=>e.pageKey,(t,g)=>{t!==g&&a.callHook("page:loading:start")}),()=>c(C,{name:e.name,route:e.route,...i},{default:t=>{const g=D(o,t.route,t.Component),m=o&&o.matched.length===t.route.matched.length;if(!t.Component){if(s&&!m)return s;f();return}if(s&&d&&!d.isCurrent(t.route))return s;if(g&&o&&(!d||d!=null&&d.isCurrent(o)))return m?s:null;const l=v(t,e.pageKey);!a.isHydrating&&!G(o,t.route,t.Component)&&u===l&&a.callHook("page:loading:end"),u=l;const y=!!(e.transition??t.route.meta.pageTransition??R),x=y&&z([e.transition,t.route.meta.pageTransition,R,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),h=e.keepalive??t.route.meta.keepalive??L;return s=N(B,y&&x,I(h,c(_,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{w(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(f))}},{default:()=>{const p=c(V,{key:l||void 0,vnode:t.Component,route:t.route,renderKey:l||void 0,trackRootNodes:y,vnodeRef:r});return h&&(p.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),p}}))).default(),s}})}});function z(e){const i=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?E(n.onAfterLeave):void 0}));return F(...i)}function D(e,i,n){if(!e)return!1;const a=i.matched.findIndex(r=>{var o;return((o=r.components)==null?void 0:o.default)===(n==null?void 0:n.type)});return!a||a===-1?!1:i.matched.slice(0,a).some((r,o)=>{var u,d,s;return((u=r.components)==null?void 0:u.default)!==((s=(d=e.matched[o])==null?void 0:d.components)==null?void 0:s.default)})||n&&v({route:i,Component:n})!==v({route:e,Component:n})}function G(e,i,n){return e?i.matched.findIndex(r=>{var o;return((o=r.components)==null?void 0:o.default)===(n==null?void 0:n.type)})<i.matched.length-1:!1}export{M as default};
