"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{3612:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(862),c=t(2784),a=t(7336),l=t(2009);const u=function(e){let{snippets:n=[],groupId:t,queryString:r}=e;if(0===n.length)return null;if(1===n.length){const e=n[0].component;return c.createElement(e,null)}return c.createElement(a.Z,{groupId:t,queryString:r},n.map((e=>{const n=e.component;return c.createElement(l.Z,{key:e.label,value:e.label,label:e.label},c.createElement(n,null))})))};var o=t(7267),s=t(9741);function m(e){let{cmd:n}=e,t=window.localStorage["docusaurus.tab.package-manager"];const r=(0,o.TH)();if(!t)if(r&&r.search&&r.search.includes("current-package-manager")){t=new URLSearchParams(r.search).get("current-package-manager")}else t="npm";const a=`${t} ${n}`;return c.createElement("code",null,a)}function i(e){let{cmd:n}=e;const t=`npm ${n}`;return c.createElement("code",null,t)}const p=function(e){let{cmd:n}=e;return(0,s.Z)()?c.createElement(m,{cmd:n}):c.createElement(i,{cmd:n})},d={...r.Z,CodeSnippets:u,SyncCommand:p}}}]);