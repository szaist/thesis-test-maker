import{d as $,k as i,B as z,s as Q,c as d,o,l as I,w as k,g as D,t as U,i as t,h as _,m as N,f as C,e as g,n as F,x as L,F as B,z as S,D as j,u as M,a as O,b as E,p as G,q as H,T as J,E as K}from"./entry.ebb06466.js";import{Q as P}from"./QuestionTypes.2471fd4d.js";const W={class:"flex items-center justify-center mb-4"},X={class:"flex flex-col gap-2"},Y={class:"ml-4"},Z=$({__name:"AppFillCheckbox",props:{modelValue:{}},emits:["update:answer","update:modelValue"],setup(R,{emit:h}){const f=S(),w=h,a=R,x=i(a.modelValue.text),m=i(a.modelValue.Answers),e=i([]),p=()=>{j(()=>{w("update:answer",y.value)})};z(e,()=>p());const y=Q(()=>({answerIds:e.value}));return(A,r)=>{const T=d("Image"),v=d("Checkbox"),b=d("Panel"),s=d("Card");return o(),I(s,null,{title:k(()=>[D(U(t(x)),1)]),content:k(()=>{var l;return[_("div",W,[a.modelValue.QuestionImage?(o(),I(T,{key:0,src:`${t(f).public.API_BASE_URL}question/image/${(l=a.modelValue.QuestionImage)==null?void 0:l.source}`,width:"500"},null,8,["src"])):N("",!0)]),C(b,{header:"Válaszok"},{default:k(()=>[_("div",X,[(o(!0),g(B,null,F(t(m),(c,n)=>(o(),g("div",{key:n,class:"flex items-center"},[C(v,{modelValue:t(e),"onUpdate:modelValue":r[0]||(r[0]=u=>L(e)?e.value=u:null),value:c.id,onChange:p},null,8,["modelValue","value"]),_("label",Y,U(t(m)[n].text),1)]))),128))])]),_:1})]}),_:1})}}}),q={class:"flex items-center justify-center mb-4"},ee={class:"flex flex-col gap-2"},te={class:"ml-4"},se=$({__name:"AppFillRadio",props:{modelValue:{}},emits:["update:answer","update:modelValue"],setup(R,{emit:h}){const f=S(),w=h,a=R,x=i(a.modelValue.text),m=i(a.modelValue.Answers),e=i(-1),p=()=>{j(()=>{w("update:answer",y.value)})};z(e,()=>p());const y=Q(()=>({answerIds:[e.value]}));return(A,r)=>{const T=d("Image"),v=d("RadioButton"),b=d("Panel"),s=d("Card");return o(),I(s,null,{title:k(()=>[D(U(t(x)),1)]),content:k(()=>{var l;return[_("div",q,[a.modelValue.QuestionImage?(o(),I(T,{key:0,src:`${t(f).public.API_BASE_URL}question/image/${(l=a.modelValue.QuestionImage)==null?void 0:l.source}`,width:"500"},null,8,["src"])):N("",!0)]),C(b,{header:"Válaszok"},{default:k(()=>[_("div",ee,[(o(!0),g(B,null,F(t(m),(c,n)=>(o(),g("div",{key:n,class:"flex items-center"},[C(v,{modelValue:t(e),"onUpdate:modelValue":r[0]||(r[0]=u=>L(e)?e.value=u:null),value:c.id,onChange:p},null,8,["modelValue","value"]),_("label",te,U(t(m)[n].text),1)]))),128))])]),_:1})]}),_:1})}}}),oe={class:"flex justify-center mt-2"},ne={class:"max-w-5xl w-full flex flex-col gap-4"},ce=$({__name:"[testId]",setup(R){const h=M(),f=O(),w=E(H),a=E(J),x=E(K),m=i(),e=Q(()=>{var s;return((s=m.value)==null?void 0:s.Questions)??[]}),p=Number(h.params.filledId),y=Number(h.params.testId),A=i(-1),r=i([]),T=async()=>{try{(await w.filledFindById(p)).submitted&&f.back();const l=await x.findById(y),c=await a.findById(l.test.id);A.value=l.test.id,m.value=c}catch{f.replace({path:"/upcoming-test"})}},v=(s,l)=>{r.value=r.value.filter(c=>c.questionId!==s),l.forEach(c=>{r.value.push({answerId:c,questionId:s,upcomingTestId:y})})},b=async()=>{try{for(const s of r.value)await w.submitAnswer(s);await w.endTest(p),f.push({path:"/upcoming-test"})}catch{}};return G(()=>{T()}),(s,l)=>{const c=d("Button");return o(),g("div",oe,[_("div",ne,[(o(!0),g(B,null,F(t(e),(n,u)=>(o(),g(B,{key:u},[(n==null?void 0:n.type)===t(P).SELECT_MORE?(o(),I(Z,{key:0,modelValue:t(e)[u],"onUpdate:modelValue":V=>t(e)[u]=V,"onUpdate:answer":V=>v(t(e)[u].id,V.answerIds)},null,8,["modelValue","onUpdate:modelValue","onUpdate:answer"])):(n==null?void 0:n.type)===t(P).SELECT_ONE?(o(),I(se,{key:1,modelValue:t(e)[u],"onUpdate:modelValue":V=>t(e)[u]=V,"onUpdate:answer":V=>v(t(e)[u].id,V.answerIds)},null,8,["modelValue","onUpdate:modelValue","onUpdate:answer"])):N("",!0)],64))),128)),_("div",null,[C(c,{label:"Teszt befejezése",onClick:b})])])])}}});export{ce as default};