import{d as j,b as z,u as F,k as d,p as L,c as m,o as t,e as p,f as S,w as b,q as U,h as e,t as a,i as o,F as k,n as I,l as _,m as D,x as C,y as E,z as G}from"./entry.be0c2818.js";const Q={class:"max-w-5xl w-full mx-auto mt-4"},$={class:"text-3xl mb-4 text-center"},M={class:"flex flex-row justify-between"},H=e("h2",null,"Leadott válaszaid",-1),J={class:"flex items-center justify-center mb-4"},K={class:"flex justify-between flex-1"},O={class:"ml-2"},Y=j({__name:"[upcomingTestId]",setup(W){const v=z(U),T=F(),V=G(),f=d(!0),x=d(!1),w=T.params.upcomingTestId,y=d(),r=d(),R=async()=>{const c=await v.listStudentGivenAnswers(Number(w));y.value=c},B=async()=>{const c=await v.getTestInfo(Number(w));r.value=c};return L(()=>{R(),B()}),(c,u)=>{const A=m("Image"),h=m("RadioButton"),N=m("Panel"),P=m("Card");return t(),p("div",Q,[S(P,null,{title:b(()=>{var s,i,n;return[e("h1",$,a((s=o(r))==null?void 0:s.upComingTest.test.title),1),e("div",M,[H,e("p",null,a((i=o(r))==null?void 0:i.reachedPoints)+" / "+a((n=o(r))==null?void 0:n.maxPoints)+" pont",1)])]}),content:b(()=>[(t(!0),p(k,null,I(o(y),(s,i)=>(t(),_(N,{key:i,class:"mb-4",header:s.text},{default:b(()=>{var n;return[e("div",J,[s.QuestionImage?(t(),_(A,{key:0,src:`${o(V).public.API_BASE_URL}question/image/${(n=s.QuestionImage)==null?void 0:n.source}`,width:"500"},null,8,["src"])):D("",!0)]),(t(!0),p(k,null,I(s.answers,l=>(t(),p("div",{key:l.id,class:"w-auto"},[e("div",{class:E(["border-2 p-2 rounded-sm flex flex-row mb-2",[l.point>0?"border-green-500":"border-red-500"]])},[l.point>0?(t(),_(h,{key:0,modelValue:o(f),"onUpdate:modelValue":u[0]||(u[0]=g=>C(f)?f.value=g:null),disabled:"",value:!0},null,8,["modelValue"])):(t(),_(h,{key:1,modelValue:o(x),"onUpdate:modelValue":u[1]||(u[1]=g=>C(x)?x.value=g:null),disabled:""},null,8,["modelValue"])),e("div",K,[e("label",O,a(l.text),1),e("p",null,a(l.point)+" pont",1)])],2)]))),128))]}),_:2},1032,["header"]))),128))]),_:1})])}}});export{Y as default};
