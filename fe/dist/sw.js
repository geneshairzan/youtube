if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),c={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.16bc322d.js",revision:null},{url:"assets/index.43f34bde.css",revision:null},{url:"assets/vendor_moment.f03b3577.js",revision:null},{url:"assets/vendor_mui.dd880bb1.js",revision:null},{url:"index.html",revision:"08cf24842d29afe5f691fcda5dcc1831"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"service-worker.js",revision:"5d45548f9bc47e44c82be2f374fd181d"},{url:"logo64.png",revision:"a307ff2963cd616b1f1a8309bc1c5752"},{url:"logo192.png",revision:"929ec4fc4b33109c245a00155cad1f74"},{url:"logo512.png",revision:"16fa37581543d12fba4c9902e77f1848"},{url:"manifest.webmanifest",revision:"8a031801b21b1ac77c1614759f5692b8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
