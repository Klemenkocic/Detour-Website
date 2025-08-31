"use strict";(()=>{var e={};e.id=436,e.ids=[436],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9993:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>d,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>u});var o={};r.r(o),r.d(o,{GET:()=>n});var a=r(9303),i=r(8716),s=r(670);async function n(){let e=process.env.NEXT_PUBLIC_BASE_URL||"https://detour.example";return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${e}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${e}/docs</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${e}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`,{headers:{"Content-Type":"application/xml"}})}let p=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/sitemap/route",pathname:"/api/sitemap",filename:"route",bundlePath:"app/api/sitemap/route"},resolvedPagePath:"/Users/klemenkocic/Desktop/Detour/app/api/sitemap/route.ts",nextConfigOutput:"export",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:u,serverHooks:c}=p,d="/api/sitemap/route";function m(){return(0,s.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:u})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948],()=>r(9993));module.exports=o})();