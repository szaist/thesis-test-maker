import{I as r,J as o}from"./entry.be0c2818.js";import{R as a}from"./Roles.a23a7a2f.js";import{u}from"./auth.53e3255c.js";const f=r(()=>{var e;const t=u();if(t.token){if(a.STUDENT!==((e=t.authUser)==null?void 0:e.role))return o({path:"/"})}else return o({path:"/auth/login"})});export{f as default};