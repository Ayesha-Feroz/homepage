import{c as v,a as V,d as $,e as k}from"./chunks/theme.C-s1rg-6.js";import{d as P,_ as g,o as c,c as m,F as A,C as L,n as b,j as u,a0 as B,t as x,p as S,h as w,B as i,G as n,w as p,a as C}from"./chunks/framework.DTD4QSDX.js";import{d as y}from"./chunks/team.data.lCGKefVW.js";var s=(e=>(e.ALL="all",e.TBI="tbi",e.ABI="abi",e))(s||{});const I=P({props:{group:{type:String,required:!0,default:`${s.ALL}`}},emits:["picked"],setup(e,{emit:a}){return{items:[{id:s.ALL,value:"All"},{id:s.ABI,value:"ABI"},{id:s.TBI,value:"TBI"}],pick:t=>{a("picked",t)}}}}),K={class:"d-flex flex-row gap-2"},M={class:"mb-0"},N=["onClick"];function O(e,a,o,l,t,_){return c(),m("div",K,[(c(!0),m(A,null,L(e.items,(r,d)=>(c(),m("div",{key:d,class:b(["entity-card w-100 ratio-1x1 text-center",{active:e.group===r.id}])},[u("h3",M,[u("a",{href:"",class:"stretched-link",onClick:B(f=>e.pick(r.id),["prevent"])},x(r.value),9,N)])],2))),128))])}const j=g(I,[["render",O]]),z=P({components:{KTeamSwitch:j,VPTeamPage:v,VPTeamPageTitle:V,VPTeamMembers:$,VPTeamPageSection:k},setup(){const e=S(s.ALL),a=t=>{e.value=t},o=y,l=w(()=>o.filter(([,t])=>e.value===s.ALL?!0:(Array.isArray(t.team)?t.team:[t.team]).indexOf(e.value)!==-1).map(([,t])=>t));return{group:e,handlePicked:a,items:l}}}),F={class:"container mb-3"},q={class:"mt-3 m-auto"};function E(e,a,o,l,t,_){const r=i("VPTeamPageTitle"),d=i("KTeamSwitch"),f=i("VPTeamMembers"),T=i("VPTeamPageSection"),h=i("VPTeamPage");return c(),m("div",F,[n(r,null,{title:p(()=>a[0]||(a[0]=[C(" Team ")])),_:1}),u("div",q,[n(d,{group:e.group,onPicked:e.handlePicked},null,8,["group","onPicked"])]),n(h,null,{default:p(()=>[n(T,null,{members:p(()=>[n(f,{size:"small",members:e.items},null,8,["members"])]),_:1})]),_:1})])}const G=g(z,[["render",E],["__scopeId","data-v-3e3f1123"]]),R=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"team/index.md","filePath":"team/index.md"}'),J={name:"team/index.md"},U=Object.assign(J,{setup(e){return(a,o)=>(c(),m("div",null,[n(G)]))}});export{R as __pageData,U as default};