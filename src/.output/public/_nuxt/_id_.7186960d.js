import{d as S,b as h,u as T,k as y,s as B,p as D,c as m,o as R,e as $,f as s,w as a,C as E,U,g as d,t as _,i as f}from"./entry.be0c2818.js";const V={class:"max-w-5xl w-full mx-auto mt-4"},M=S({__name:"[id]",setup(F){const c=h(E),x=h(U),b=T(),l=Number(b.params.id),v=y(),r=y(),p=y(),w=B(()=>{var e;return(e=p.value)==null?void 0:e.filter(i=>{var t;return((t=r.value)==null?void 0:t.findIndex(o=>o.id===i.id))===-1})}),N=async()=>{const e=await c.findById(l);v.value=e},C=async()=>{const e=await c.listUsersInCourse(l);r.value=e},g=async()=>{const e=await x.getStudents();p.value=e},I=async e=>{await c.disconnect(l,e),C()},z=async e=>{var t,o;await c.connect(l,e);const i=(t=p.value)==null?void 0:t.find(u=>u.id===e);i&&((o=r.value)==null||o.push(i))};return D(()=>{N(),C(),g()}),(e,i)=>{const t=m("Column"),o=m("Button"),u=m("DataTable"),k=m("Card");return R(),$("div",V,[s(k,null,{title:a(()=>{var n;return[d("Kurzus: "+_((n=f(v))==null?void 0:n.name),1)]}),content:a(()=>[s(u,{value:f(r),"data-key":"id"},{empty:a(()=>[d(" Nincsennek diákok hozzárendelve ehhez a kurzushoz. ")]),default:a(()=>[s(t,{field:"email",header:"Email"}),s(t,{header:"Név"},{body:a(n=>[d(_(`${n.data.firstName??""} ${n.data.lastName??""}`),1)]),_:1}),s(t,{"header-style":"width: 5rem; text-align: center","body-style":"text-align: center; overflow: visible"},{body:a(n=>[s(o,{text:"",icon:"pi pi-minus text-red-500",rounded:"",pt:{label:{class:"hidden"}},onClick:()=>I(n.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),_:1}),s(k,{class:"mt-4"},{title:a(()=>[d("Diákok")]),content:a(()=>[s(u,{value:f(w),"data-key":"id"},{empty:a(()=>[d(" Nincsennek diákok.")]),default:a(()=>[s(t,{field:"email",header:"Email"}),s(t,{header:"Név"},{body:a(n=>[d(_(`${n.data.firstName??""} ${n.data.lastName??""}`),1)]),_:1}),s(t,{"header-style":"width: 5rem; text-align: center","body-style":"text-align: center; overflow: visible"},{body:a(n=>[s(o,{text:"",icon:"pi pi-plus",rounded:"",pt:{label:{class:"hidden"}},onClick:()=>z(n.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),_:1})])}}});export{M as default};
