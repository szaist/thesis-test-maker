import{d as z,b as F,u as S,k as m,p as U,c as p,o as n,e as f,f as D,w as g,q as E,h as e,t as a,i as t,F as C,n as T,l as _,m as G,x as N,y as L,z as Q}from"./entry.be0c2818.js";const $={class:"max-w-5xl w-full mx-auto mt-4"},M={class:"text-3xl mb-4 text-center"},H={class:"flex flex-row justify-between"},J={class:"flex items-center justify-center mb-4"},K={class:"flex justify-between flex-1"},O={class:"ml-2"},Y=z({__name:"[userId]",setup(W){const w=F(E),h=S(),V=Q(),x=m(!0),b=m(!1),v=h.params.upcomingTestId,y=h.params.userId,I=m(),l=m(),R=async()=>{const c=await w.listTeacherGetStudentsAnswer(Number(v),Number(y));I.value=c},B=async()=>{const c=await w.getTeacherTestInfo(Number(v),Number(y));l.value=c};return U(()=>{R(),B()}),(c,i)=>{const A=p("Image"),k=p("RadioButton"),P=p("Panel"),j=p("Card");return n(),f("div",$,[D(j,null,{title:g(()=>{var o,d,u,s,r;return[e("h1",M,a((o=t(l))==null?void 0:o.upComingTest.test.title),1),e("div",H,[e("h2",null,a((d=t(l))==null?void 0:d.user.firstName)+" "+a((u=t(l))==null?void 0:u.user.lastName)+" válaszai",1),e("p",null,a((s=t(l))==null?void 0:s.reachedPoints)+" / "+a((r=t(l))==null?void 0:r.maxPoints)+" pont",1)])]}),content:g(()=>[(n(!0),f(C,null,T(t(I),(o,d)=>(n(),_(P,{key:d,class:"mb-4",header:o.text},{default:g(()=>{var u;return[e("div",J,[o.QuestionImage?(n(),_(A,{key:0,src:`${t(V).public.API_BASE_URL}question/image/${(u=o.QuestionImage)==null?void 0:u.source}`,width:"500"},null,8,["src"])):G("",!0)]),(n(!0),f(C,null,T(o.answers,s=>(n(),f("div",{key:s.id,class:"w-auto"},[e("div",{class:L(["border-2 p-2 rounded-sm flex flex-row mb-2",[s.point>0?"border-green-500":"border-red-500"]])},[s.point>0?(n(),_(k,{key:0,modelValue:t(x),"onUpdate:modelValue":i[0]||(i[0]=r=>N(x)?x.value=r:null),disabled:"",value:!0},null,8,["modelValue"])):(n(),_(k,{key:1,modelValue:t(b),"onUpdate:modelValue":i[1]||(i[1]=r=>N(b)?b.value=r:null),disabled:""},null,8,["modelValue"])),e("div",K,[e("label",O,a(s.text),1),e("p",null,a(s.point)+" pont",1)])],2)]))),128))]}),_:2},1032,["header"]))),128))]),_:1})])}}});export{Y as default};
