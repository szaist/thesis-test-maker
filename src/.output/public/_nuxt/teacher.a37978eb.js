import{I as o,J as r}from"./entry.ebb06466.js";import{R as a}from"./Roles.a23a7a2f.js";import{u}from"./auth.0e1747a1.js";const f=o(()=>{var e;const t=u();if(t.token){if(a.TEACHER!==((e=t.authUser)==null?void 0:e.role))return r({path:"/"})}else return r({path:"/auth/login"})});export{f as default};