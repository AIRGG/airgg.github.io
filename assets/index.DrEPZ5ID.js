import{aj as U,r as D,ak as N,V as K,al as G,O as F,w as Y,e as Q,am as W,$ as l,Q as Z,B as V,K as z,Z as J,an as X,d as A,ao as ee,aa as te,o as u,C as L,v as M,l as o,k as h,m as g,a0 as C,a1 as $,q as B,x as se,D as ae,ap as ne,j as oe,aq as re,Y as T,ar as E,as as O,a4 as ie}from"./entry.BqaQ-FR_.js";import{h as ce}from"./index.DvDH6DOc.js";const le=s=>s==="defer"||s===!1;function R(...s){var q;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[a,r,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=Q(),f=r,v=()=>null,j=()=>t.isHydrating?t.payload.data[a]:t.static.data[a];e.server=e.server??!0,e.default=e.default??v,e.getCachedData=e.getCachedData??j,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??U.deep,e.dedupe=e.dedupe??"cancel";const w=()=>![null,void 0].includes(e.getCachedData(a));if(!t._asyncData[a]||!e.immediate){(q=t.payload._errors)[a]??(q[a]=null);const _=e.deep?D:N;t._asyncData[a]={data:_(e.getCachedData(a)??e.default()),pending:D(!w()),error:K(t.payload._errors,a),status:D("idle")}}const i={...t._asyncData[a]};i.refresh=i.execute=(_={})=>{if(t._asyncDataPromises[a]){if(le(_.dedupe??e.dedupe))return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if((_._initial||t.isHydrating&&_._initial!==!1)&&w())return Promise.resolve(e.getCachedData(a));i.pending.value=!0,i.status.value="pending";const b=new Promise((d,m)=>{try{d(f(t))}catch(P){m(P)}}).then(d=>{if(b.cancelled)return t._asyncDataPromises[a];let m=d;e.transform&&(m=e.transform(d)),e.pick&&(m=ue(m,e.pick)),t.payload.data[a]=m,i.data.value=m,i.error.value=null,i.status.value="success"}).catch(d=>{if(b.cancelled)return t._asyncDataPromises[a];i.error.value=W(d),i.data.value=l(e.default()),i.status.value="error"}).finally(()=>{b.cancelled||(i.pending.value=!1,delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=b,t._asyncDataPromises[a]};const y=()=>i.refresh({_initial:!0}),p=e.server!==!1&&t.payload.serverRendered;{const _=Z();if(_&&!_._nuxtOnBeforeMountCbs){_._nuxtOnBeforeMountCbs=[];const d=_._nuxtOnBeforeMountCbs;_&&(G(()=>{d.forEach(m=>{m()}),d.splice(0,d.length)}),F(()=>d.splice(0,d.length)))}p&&t.isHydrating&&(i.error.value||w())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):_&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?_._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&Y(e.watch,()=>i.refresh());const b=t.hook("app:data:refresh",async d=>{(!d||d.includes(a))&&await i.refresh()});_&&F(b)}const c=Promise.resolve(t._asyncDataPromises[a]).then(()=>i);return Object.assign(c,i),c}function ue(s,n){const a={};for(const r of n)a[r]=s[r];return a}function de(s,n,a){const[r={},e]=typeof n=="string"?[{},n]:[n,a],t=V(()=>{let k=s;return typeof k=="function"&&(k=k()),z(k)}),f=r.key||ce([e,typeof t.value=="string"?t.value:"",...fe(r)]);if(!f||typeof f!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+f);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const v=f===e?"$f"+f:f;if(!r.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:j,lazy:w,default:i,transform:y,pick:p,watch:c,immediate:q,getCachedData:_,deep:b,dedupe:d,...m}=r,P=J({...X,...m,cache:typeof r.cache=="boolean"?void 0:r.cache}),S={server:j,lazy:w,default:i,transform:y,pick:p,immediate:q,getCachedData:_,deep:b,dedupe:d,watch:c===!1?[]:[P,t,...c||[]]};let x;return R(v,()=>{var H;(H=x==null?void 0:x.abort)==null||H.call(x),x=typeof AbortController<"u"?new AbortController:{};const k=z(r.timeout);return k&&setTimeout(()=>x.abort(),k),(r.$fetch||globalThis.$fetch)(t.value,{signal:x.signal,...P})},S)}function _e(s,n,a){const[r={},e]=typeof n=="string"?[{},n]:[n,a];return de(s,{...r,lazy:!0},e)}function fe(s){var a;const n=[((a=z(s.method))==null?void 0:a.toUpperCase())||"GET",z(s.baseURL)];for(const r of[s.params||s.query]){const e=z(r);if(!e)continue;const t={};for(const[f,v]of Object.entries(e))t[z(f)]=z(v);n.push(t)}return n}const pe="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let he=(s=21)=>{let n="",a=crypto.getRandomValues(new Uint8Array(s));for(;s--;)n+=pe[a[s]&63];return n};function I(){return he}const ye=["id","innerHTML"],me=["id","innerHTML"],ve=A({__name:"Icones",props:{icon:{},showPopup:{}},setup(s){const n=s;let a="https://api.iconify.design",r=D("");function e(p){return p.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase())}let t=V(()=>{if(!n.icon)return"";let p=n.icon.split("-");return r.value=e(p[2]),`${a}/${p[1]}:${p.slice(2).join("-")}.svg`}),f=D("");D(null);const{data:v,pending:j,error:w,refresh:i}=_e(t,"$UB6NxKHDVy"),y=I()();return ee(async()=>{if(v.value){let p=await v.value.text();f.value=p.replace(/(width|height)="[^"]*"/g,'$1="100%"'),setTimeout(()=>{for(;;){const c=document.getElementById(y);if(c==null||c.replaceWith(...c.children),document.getElementById(y)===void 0||document.getElementById(y)===null)break}console.log("divid removed:",y)},100)}}),(p,c)=>{const q=te("tippy");return n.showPopup?(u(),L(q,{key:0,content:l(r)},{default:M(()=>[o("div",{id:l(y),innerHTML:l(f)},null,8,ye)]),_:1},8,["content"])):(u(),h("div",{key:1,id:l(y),innerHTML:l(f)},null,8,me))}}}),ge={class:"yfssiir cutfdaz idgkemh ysrfsw- jajrblc a-agkcn"},we={class:"yfssiir d-ezthh uubxipb"},be={class:"uuwghkq wo_reym"},xe={class:"dfhvstj"},ke={class:"yfssiir cutfdaz ahll___"},ze=o("span",{class:"s-rx_bg msgazrd edztqpo vaqfcte"},null,-1),je={class:"rzcdcw_"},qe={class:"_bic-pz yfssiir rpaaw-d ajeu_e_"},De={class:"acekkel xkveo-_"},Ce=["href"],$e={class:"msgazrd edztqpo vaqfcte"},Pe={class:"dywjhjp d-ezthh uubxipb vldbgig"},Le={class:"yfssiir cutfdaz bclqolz"},Be={class:"otnfesj"},Ee={class:"poybqct vljvekm yes_vsj ung_z_y vddekmp"},Oe=["src"],Te=A({__name:"HeaderProfile",props:{profile:{}},setup(s){const n=s;return(a,r)=>{const e=ve;return u(),h("div",ge,[o("div",we,[o("h1",be,g(n.profile.name),1),o("p",xe,g(n.profile.description),1),o("div",ke,[ze,o("div",je,g(n.profile.city)+", "+g(n.profile.country),1)]),o("div",qe,[(u(!0),h(C,null,$(n.profile.mediaSocial,t=>(u(),h("div",De,[o("a",{class:"xy-beap -ektirx uxhhaph olgdrwo msgazrd iyz_tph bzi-yxc otnfesj pvloftj tfatsnx gobixhs qjrmwvr _fn-fpf a-dj-lb csbgfqd cdmidby tokgcgt kivxbmn bnmqegj ulwxarj fcwukbk aios_jt hotsaaa serwumv ze--xpl bbcaeuf xkveo-_ cutfdaz",href:t.value,rel:"noopener noreferrer",target:"_blank"},[o("span",$e,[B(e,{icon:t.icon},null,8,["icon"])]),se(" "+g(t.title),1)],8,Ce)]))),256))])]),o("div",Pe,[(u(!0),h(C,null,$(n.profile.mediaSocial,t=>(u(),h("div",Le,[o("span",{class:ae([t.icon,"_jvbwiv"])},null,2),o("div",Be,g(t.valuePrint),1)]))),256))]),o("div",Ee,[o("img",{src:n.profile.photo,class:"fqgjjaj eq__fvm",alt:"View AIRGG's full-sized avatar",loading:"eager"},null,8,Oe)])])}}}),Ae=E(()=>O(()=>import("./HeaderBody.DOSmBObe.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(s=>s.default||s)),He=E(()=>O(()=>import("./BodySection.uradW46_.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(s=>s.default||s)),Fe=E(()=>O(()=>import("./client-only.DtctXnm_.js"),__vite__mapDeps([5,1,2]),import.meta.url).then(s=>s.default||s)),Ve=E(()=>O(()=>import("./FixedBottom.D60jshNG.js"),__vite__mapDeps([6,7,1,2]),import.meta.url).then(s=>s.default||s)),Me={class:""},Re={key:0},Ie={class:"yfssiir d-ezthh pgvvdim h_rpvsl"},Se={class:"grids-cols-1 xihi-lv ugehqvx nxywrak rzvugmb ngnufj-"},Ue={key:2,class:"yfssiir cutfdaz a-agkcn hkskqje hvfinsn jrpe_iq ct_gg_a"},Ne={class:"fhmociw"},Ke=["href"],Ge={class:"yfssiir d-ezthh cutfdaz ajeu_e_ fw_kfim"},Ye={class:"yfssiir r_c_ect cutfdaz ajeu_e_ mujslfv xm-qzuj"},Qe=["href"],We=ie('<span class="osjdmxe xkecolp bqnrspy wazbgrv zrrlqzt wkogkwu -fuou-w fqgjjaj xqf_hal dclxvcn"></span><span class="osjdmxe vlorffe slqak_l oukrugs vzamhow"><svg xmlns="http://www.w3.org/2000/svg" class="bszyqkm oukrugs mbzfkbh object-stretch" viewBox="0 0 487 487"><path fill-opacity=".1" fill-rule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path></svg></span><span class="osjdmxe k_w_iag dauhvrq yxrmqqw oukrugs ehrzht-"><svg xmlns="http://www.w3.org/2000/svg" class="zziqbac dhgazfa oukrugs" viewBox="0 0 487 487"><path fill-opacity=".1" fill-rule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"></path></svg></span><span class="osjdmxe _twbobj dhgazfa oukrugs bggrydt xnsrpzw ndgjxps mqontqk puwgc-q qesyajv gtpnljh"></span>',4),Ze={class:"acekkel fhmociw"},Je=o("span",{class:"iccayce ci-sbbv"},null,-1),Xe={key:0,class:"acekkel yfssiir hqfrlaj cutfdaz dhgazfa nnqyhxw"},et=o("div",{class:"gvfqfnb wulng-x egzacvd _eyqchs"},null,-1),tt=["innerHTML"],st=o("div",{class:"gvfqfnb wulng-x egzacvd _eyqchs"},null,-1),at={class:"mjumcqi mmcybvb fioudtt ajeu_e_ exxmbno lbsww_u"},nt=A({__name:"index",async setup(s){let n,a;const{status:r,data:e}=([n,a]=ne(()=>R("profile",()=>$fetch("/my.json"))),n=await n,a(),n);oe({title:"Profile - AIRGG (Airlangga Yudiatama)"});const t=I();return(f,v)=>{const j=Te,w=Ae,i=He,y=Fe,p=Ve;return u(),h("div",Me,[l(r)==="pending"?(u(),h("div",Re,"Loading...")):(u(),L(re,{key:1},[o("div",null,[o("div",Ie,[B(j,{profile:l(e).header},null,8,["profile"])]),o("div",Se,[(u(!0),h(C,null,$(l(e).header.body,c=>(u(),L(w,{key:l(t)(),profileBody:c},null,8,["profileBody"]))),128))]),B(y,null,{default:M(()=>[(u(!0),h(C,null,$(l(e).body,c=>(u(),L(i,{title:c.title,items:c.items,key:l(t)()},null,8,["title","items"]))),128))]),_:1})])],1024)),l(r)!=="pending"?(u(),h("div",Ue,[o("span",Ne,g(l(e).footer.certificate.text),1),o("a",{href:l(e).footer.certificate.link,target:"_blank",class:"-jzrcgz"},g(l(e).footer.certificate.link_text),9,Ke)])):T("",!0),o("div",Ge,[o("div",Ye,[l(r)!=="pending"?(u(!0),h(C,{key:0},$(l(e).footer.button,c=>(u(),h("a",{href:c.link,target:"_blank",class:"fhmociw er_fbzu acekkel xkveo-_ cutfdaz r_c_ect y-fsyag cvznklv rynbjur jrjrmwz gymusxm jrfzhin bzi-yxc phytrdg"},[We,o("span",Ze,g(c.text),1),Je],8,Qe))),256)):T("",!0)]),l(r)!=="pending"?(u(),h("div",Xe,[et,o("span",{class:"-vbgc_n naepaex otnfesj",innerHTML:l(e).footer.copyright},null,8,tt),st])):T("",!0)]),o("div",at,[B(p)])])}}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));export{ve as _,lt as i,I as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./HeaderBody.DOSmBObe.js","./entry.BqaQ-FR_.js","./entry.3UmgzBf2.css","./index.DvDH6DOc.js","./BodySection.uradW46_.js","./client-only.DtctXnm_.js","./FixedBottom.D60jshNG.js","./composables.fq1WAPhh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
