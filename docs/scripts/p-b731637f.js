import{f as n,w as t}from"./p-32280026.js";import"./p-1074393c.js";function o(){const o=window;o.addEventListener("statusTap",()=>{n(()=>{const n=document.elementFromPoint(o.innerWidth/2,o.innerHeight/2);if(!n)return;const e=n.closest("ion-content");e&&e.componentOnReady().then(()=>{t(()=>e.scrollToTop(300))})})})}export{o as startStatusTap};