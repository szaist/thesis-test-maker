import{I as r,J as o}from"./entry.ebb06466.js";import{R as a}from"./Roles.a23a7a2f.js";import{u}from"./auth.0e1747a1.js";const f=r(()=>{var e;const t=u();if(t.token){if(a.STUDENT!==((e=t.authUser)==null?void 0:e.role))return o({path:"/"})}else return o({path:"/auth/login"})});export{f as default};