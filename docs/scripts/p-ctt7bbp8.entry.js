import{r as e,d as t,c as o,h as s,e as i,H as r}from"./p-32280026.js";import"./p-1074393c.js";import"./p-94c4865f.js";import{B as n,d as l,e as a,f as p}from"./p-3d4c81d7.js";import{g as d}from"./p-9d21e8e5.js";import{a as c,d as m}from"./p-25340090.js";import{d as h}from"./p-6a8665f4.js";function u(e,t,o){let s="top",i="left";const r=t.querySelector(".popover-content"),n=r.getBoundingClientRect(),l=n.width,a=n.height,p=t.ownerDocument.defaultView.innerWidth,d=t.ownerDocument.defaultView.innerHeight,c=o&&o.target&&o.target.getBoundingClientRect(),m=null!=c&&"top"in c?c.top:d/2-a/2,h=null!=c&&"left"in c?c.left:p/2,u=c&&c.width||0,v=c&&c.height||0,w=t.querySelector(".popover-arrow"),y=w.getBoundingClientRect(),g=y.width,D=y.height;null==c&&(w.style.display="none");const E={top:m+v,left:h+u/2-g/2},b={top:m+v+(D-1),left:h+u/2-l/2};let P=!1,S=!1;b.left<f+25?(P=!0,b.left=f):l+f+b.left+25>p&&(S=!0,b.left=p-l-f,i="right"),m+v+a>d&&m-a>0?(E.top=m-(D+1),b.top=m-a-(D-1),t.className=t.className+" popover-bottom",s="bottom"):m+v+a>d&&(r.style.bottom=f+"%"),w.style.top=E.top+"px",w.style.left=E.left+"px",r.style.top=b.top+"px",r.style.left=b.left+"px",P&&(r.style.left=`calc(${b.left}px + var(--ion-safe-area-left, 0px))`),S&&(r.style.left=`calc(${b.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=s+" "+i;const q=new e,x=new e;x.addElement(t.querySelector("ion-backdrop")),x.fromTo("opacity",.01,.08);const T=new e;return T.addElement(t.querySelector(".popover-wrapper")),T.fromTo("opacity",.01,1),Promise.resolve(q.addElement(t).easing("ease").duration(100).add(x).add(T))}const f=5;function v(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),s.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(s).add(i))}function w(e,t,o){const s=t.ownerDocument,i="rtl"===s.dir;let r="top",n=i?"right":"left";const l=t.querySelector(".popover-content"),a=l.getBoundingClientRect(),p=a.width,d=a.height,c=s.defaultView.innerWidth,m=s.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),u=null!=h&&"bottom"in h?h.bottom:m/2-d/2,f=h&&h.height||0,v={top:u,left:null!=h&&"left"in h?i?h.left-p+h.width:h.left:c/2-p/2};v.left<y?(v.left=y,n="left"):p+y+v.left>c&&(v.left=c-p-y,n="right"),u+f+d>m&&u-d>0?(v.top=u-d-f,t.className=t.className+" popover-bottom",r="bottom"):u+f+d>m&&(l.style.bottom=y+"px"),l.style.top=v.top+"px",l.style.left=v.left+"px",l.style.transformOrigin=r+" "+n;const w=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);const D=new e;D.addElement(t.querySelector(".popover-wrapper")),D.fromTo("opacity",.01,1);const E=new e;E.addElement(t.querySelector(".popover-content")),E.fromTo("scale",.001,1);const b=new e;return b.addElement(t.querySelector(".popover-viewport")),b.fromTo("opacity",.01,1),Promise.resolve(w.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(D).add(E).add(b))}const y=12;function g(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),s.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(s).add(i))}class D{constructor(s){e(this,s),this.presented=!1,this.mode=t(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=o(this,"ionPopoverDidPresent",7),this.willPresent=o(this,"ionPopoverWillPresent",7),this.willDismiss=o(this,"ionPopoverWillDismiss",7),this.didDismiss=o(this,"ionPopoverDidDismiss",7)}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,n)}lifecycle(e){const t=this.usersElement,o=E[e.type];if(t&&o){const s=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(s)}}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign({},this.componentProps,{popover:this.el});return this.usersElement=await c(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t),await h(this.usersElement),l(this,"popoverEnter",u,w,this.event)}async dismiss(e,t){const o=await a(this,e,t,"popoverLeave",v,g,this.event);return o&&await m(this.delegate,this.usersElement),o}onDidDismiss(){return p(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return p(this.el,"ionPopoverWillDismiss")}hostData(){const e=t(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},d(this.cssClass),{[e]:!0,"popover-translucent":this.translucent})}}__stencil_render(){return[s("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),s("div",{class:"popover-wrapper"},s("div",{class:"popover-arrow"}),s("div",{class:"popover-content"}))]}get el(){return i(this)}render(){return s(r,this.hostData(),this.__stencil_render())}static get style(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}"}}const E={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};export{D as ion_popover};