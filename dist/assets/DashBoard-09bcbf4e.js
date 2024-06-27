import{o as W,a as X}from"./firebase-c87023ff.js";import{p as I,m as Y,g as T,a as Z,b as _,d as $,t as g,c as t,S as M,F as y,T as ee,R,A as N,Q as te,v as ae,y as le,_ as G,B as v,C as U,D as a,E as d,L as f,G as u,I as E,N as S,z as se}from"./index-7c7db64b.js";import{V as w}from"./VContainer-c72e344e.js";import{V as b,c as ne,a as ie}from"./VCard-10989986.js";import{V as oe,b as D,c as A}from"./VList-416dc98f.js";import{V as j}from"./VRow-0c1ec9b7.js";import{V as x}from"./VCol-20c80595.js";import{m as B,a as z,u as L,R as de,e as F,j as h,c as ce,d as re,g as ue,h as pe}from"./VAvatar-04a00f10.js";import{c as me,a as fe,m as xe,b as ve}from"./group-059c7191.js";import{V as he}from"./index-53c4966a.js";import{m as H,u as _e}from"./lazy-4eee2d09.js";import{V as ge,a as ye}from"./VApp-faab2c2e.js";/* empty css              */import"./ssrBoot-f28015f9.js";const k=Symbol.for("vuetify:v-expansion-panel"),be=["default","accordion","inset","popout"],Ve=I({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>be.includes(e)},readonly:Boolean,...B(),...me(),...z(),...Y()},"VExpansionPanels"),V=T()({name:"VExpansionPanels",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;fe(e,k);const{themeClasses:l}=Z(e),i=_(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return $({VExpansionPanel:{color:g(e,"color"),readonly:g(e,"readonly")},VExpansionPanelTitle:{focusable:g(e,"focusable"),static:g(e,"static")}}),L(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},l.value,i.value,e.class],style:e.style},s)),{}}}),Ce=I({...B(),...H()},"VExpansionPanelText"),ke=T()({name:"VExpansionPanelText",props:Ce(),setup(e,n){let{slots:s}=n;const l=M(k);if(!l)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:c}=_e(e,l.isSelected);return L(()=>t(he,{onAfterLeave:c},{default:()=>{var o;return[y(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[s.default&&i.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(o=s.default)==null?void 0:o.call(s)])]),[[ee,l.isSelected.value]])]}})),{}}}),O=I({color:String,expandIcon:{type:R,default:"$expand"},collapseIcon:{type:R,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...B()},"VExpansionPanelTitle"),Pe=T()({name:"VExpansionPanelTitle",directives:{Ripple:de},props:O(),setup(e,n){let{slots:s}=n;const l=M(k);if(!l)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:c}=F(e,"color"),o=_(()=>({collapseIcon:e.collapseIcon,disabled:l.disabled.value,expanded:l.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return L(()=>{var p;return y(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":l.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[c.value,e.style],type:"button",tabindex:l.disabled.value?-1:void 0,disabled:l.disabled.value,"aria-expanded":l.isSelected.value,onClick:e.readonly?void 0:l.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(p=s.default)==null?void 0:p.call(s,o.value),!e.hideActions&&t("span",{class:"v-expansion-panel-title__icon"},[s.actions?s.actions(o.value):t(h,{icon:l.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[N("ripple"),e.ripple]])}),{}}}),Ee=I({title:String,text:String,bgColor:String,...B(),...ce(),...xe(),...H(),...re(),...z(),...O()},"VExpansionPanel"),C=T()({name:"VExpansionPanel",props:Ee(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:s}=n;const l=ve(e,k),{backgroundColorClasses:i,backgroundColorStyles:c}=F(e,"bgColor"),{elevationClasses:o}=ue(e),{roundedClasses:p}=pe(e),Q=_(()=>(l==null?void 0:l.disabled.value)||e.disabled),q=_(()=>l.group.items.value.reduce((m,r,P)=>(l.group.selected.value.includes(r.id)&&m.push(P),m),[])),J=_(()=>{const m=l.group.items.value.findIndex(r=>r.id===l.id);return!l.isSelected.value&&q.value.some(r=>r-m===1)}),K=_(()=>{const m=l.group.items.value.findIndex(r=>r.id===l.id);return!l.isSelected.value&&q.value.some(r=>r-m===-1)});return te(k,l),$({VExpansionPanelText:{eager:g(e,"eager")},VExpansionPanelTitle:{readonly:g(e,"readonly")}}),L(()=>{const m=!!(s.text||e.text),r=!!(s.title||e.title);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":l.isSelected.value,"v-expansion-panel--before-active":J.value,"v-expansion-panel--after-active":K.value,"v-expansion-panel--disabled":Q.value},p.value,i.value,e.class],style:[c.value,e.style]},{default:()=>{var P;return[t("div",{class:["v-expansion-panel__shadow",...o.value]},null),r&&t(Pe,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[s.title?s.title():e.title]}),m&&t(ke,{key:"text"},{default:()=>[s.text?s.text():e.text]}),(P=s.default)==null?void 0:P.call(s)]}})}),{}}}),Se={name:"DashBoardMain",data(){return{user:{},isCollapsed:{payments:!1,shipments:!1,receipts:!1,list:!1},itemText:{one:"您還沒有商品 購物去",two:"目前無商品待出貨",three:"目前無商品待收貨",four:"查無歷史購物清單"}}},methods:{checkUserAuth(){W(X,e=>{if(e!==null){const s=new Date(e.metadata.creationTime).toLocaleDateString();this.user={name:e.displayName,email:e.email,uid:e.uid,created:s},this.setUser(this.user),this.setLoginState(!0)}else this.user={},this.setLoginState(!1)})},toggleCollapse(e){for(let n in this.isCollapsed)n!==e&&(this.isCollapsed[n]=!1);this.isCollapsed[e]=!this.isCollapsed[e]},...ae("user",["setUser","setLoginState"])},mounted(){this.$nextTick(()=>{this.checkUserAuth()})},computed:{...le("user",["userInfo","loginState"])}},Ie={key:0,class:""},Te={key:1},Be={key:2},Le={key:3},we=u("hr",null,null,-1),De=u("br",{class:"mb-12"},null,-1),Ae={class:"text-h6 mb-2 d-flex align-center",style:{color:"#000"}},qe=u("p",{class:"text-h6 mb-2 d-flex align-center",style:{color:"#000"}},"訂購與運送",-1),Re=u("p",{class:"text-h6 d-flex align-center",style:{color:"#000"}},"服務項目",-1);function je(e,n,s,l,i,c){const o=N("expand-transition");return v(),U(ye,{style:{background:"linear-gradient(to right, #e2e2e2, #d7f0e5)"}},{default:a(()=>[t(ge,{class:"pb-16 pt-16"},{default:a(()=>[t(w,null,{default:a(()=>[t(b,{class:"mb-4"},{default:a(()=>[t(ne,null,{default:a(()=>[d("用戶信息")]),_:1}),t(ie,null,{default:a(()=>[t(oe,null,{default:a(()=>[t(D,null,{default:a(()=>[t(A,null,{default:a(()=>[d("用戶名 : "+f(e.userInfo.name),1)]),_:1})]),_:1}),t(D,null,{default:a(()=>[t(A,null,{default:a(()=>[d("電子郵件 : "+f(e.userInfo.email),1)]),_:1})]),_:1}),t(D,null,{default:a(()=>[t(A,null,{default:a(()=>[d("建立日期 : "+f(e.userInfo.created),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(j,{cols:"12",block:"",class:"mb-5 mt-5"},{default:a(()=>[t(x,{cols:"3"},{default:a(()=>[u("div",{class:"side text-center",onClick:n[0]||(n[0]=p=>c.toggleCollapse("payments"))},"待付款")]),_:1}),t(x,{cols:"3"},{default:a(()=>[u("div",{class:"side text-center",onClick:n[1]||(n[1]=p=>c.toggleCollapse("shipments"))},"待出貨")]),_:1}),t(x,{cols:"3"},{default:a(()=>[u("div",{class:"side text-center",onClick:n[2]||(n[2]=p=>c.toggleCollapse("receipts"))},"待收貨")]),_:1}),t(x,{cols:"3"},{default:a(()=>[u("div",{class:"side text-center",onClick:n[3]||(n[3]=p=>c.toggleCollapse("list"))},"歷史清單")]),_:1}),t(w,null,{default:a(()=>[i.isCollapsed.payments?y((v(),E("div",Ie,[t(b,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(h,null,{default:a(()=>[d("mdi-shopping-outline")]),_:1}),d(f(i.itemText.one),1)]),_:1})])),[[o]]):S("",!0),i.isCollapsed.shipments?y((v(),E("div",Te,[t(b,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(h,null,{default:a(()=>[d("mdi-truck-delivery")]),_:1}),d(" "+f(i.itemText.two),1)]),_:1})])),[[o]]):S("",!0),i.isCollapsed.receipts?y((v(),E("div",Be,[t(b,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(h,null,{default:a(()=>[d("mdi-truck-delivery")]),_:1}),d(f(i.itemText.three),1)]),_:1})])),[[o]]):S("",!0),i.isCollapsed.list?y((v(),E("div",Le,[t(b,{cols:"12",class:"mt-2 d-flex justify-center align-center text-h7",height:"250px",style:{color:"gray"}},{default:a(()=>[t(h,null,{default:a(()=>[d("mdi-account-search")]),_:1}),d(f(i.itemText.four),1)]),_:1})])),[[o]]):S("",!0)]),_:1})]),_:1})]),_:1}),t(w,{class:"mb-12 pl-12 pr-12"},{default:a(()=>[we,De,t(j,{cols:"12"},{default:a(()=>[t(x,{cols:"5"},{default:a(()=>[u("p",Ae,[t(h,{class:"text-h6 pr-2",style:{color:"#808836"}},{default:a(()=>[d("mdi-watch-export")]),_:1}),d("Henlex's 手錶保養方式")]),qe,Re]),_:1}),t(x,{cols:"7"},{default:a(()=>[t(V,{variant:"Item"},{default:a(()=>[t(C,{title:"注意事項",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(V,{variant:"Item"},{default:a(()=>[t(C,{title:"優惠券使用方法",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(V,{variant:"Item"},{default:a(()=>[t(C,{title:"會員制度相關說明",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(V,{variant:"Item"},{default:a(()=>[t(C,{title:"產品保養與維修",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1}),t(V,{variant:"Item"},{default:a(()=>[t(C,{title:"售後服務",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const $e=G(Se,[["render",je]]),Me={name:"DashBoard",components:{DashBoardMain:$e}};function Ne(e,n,s,l,i,c){const o=se("DashBoard-Main");return v(),U(o)}const tt=G(Me,[["render",Ne]]);export{tt as default};
