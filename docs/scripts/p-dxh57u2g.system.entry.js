var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r["throw"](t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-d356a5a5.system.js","./p-45890bdd.system.js","./p-8dca3b40.system.js","./p-94417ec5.system.js","./p-395e62d3.system.js"],function(t){"use strict";var e,n,r,i,o,s,a,u,c,l,d,f,h;return{setters:[function(t){e=t.r;n=t.d;r=t.c;i=t.h;o=t.e;s=t.H},function(){},function(t){a=t.d;u=t.e;c=t.f;l=t.i},function(t){d=t.c;f=t.g},function(t){h=t.s}],execute:function(){function p(t,e,n){var r=new t;var i=new t;var o=e.host||e;var s=e.querySelector(".toast-wrapper");i.addElement(s);var a="calc(-10px - var(--ion-safe-area-bottom, 0px))";var u="calc(10px + var(--ion-safe-area-top, 0px))";switch(n){case"top":i.fromTo("translateY","-100%",u);break;case"middle":var c=Math.floor(o.clientHeight/2-s.clientHeight/2);s.style.top=c+"px";i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%",a);break}return Promise.resolve(r.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function v(t,e,n){var r=new t;var i=new t;var o=e.host||e;var s=e.querySelector(".toast-wrapper");i.addElement(s);var a="calc(-10px - var(--ion-safe-area-bottom, 0px))";var u="calc(10px + var(--ion-safe-area-top, 0px))";switch(n){case"top":i.fromTo("translateY",u,"-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY",a,"100%");break}return Promise.resolve(r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function m(t,e,n){var r=new t;var i=new t;var o=e.host||e;var s=e.querySelector(".toast-wrapper");i.addElement(s);var a="calc(8px + var(--ion-safe-area-bottom, 0px))";var u="calc(8px + var(--ion-safe-area-top, 0px))";switch(n){case"top":s.style.top=u;i.fromTo("opacity",.01,1);break;case"middle":var c=Math.floor(o.clientHeight/2-s.clientHeight/2);s.style.top=c+"px";i.fromTo("opacity",.01,1);break;default:s.style.bottom=a;i.fromTo("opacity",.01,1);break}return Promise.resolve(r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function b(t,e){var n=new t;var r=new t;var i=e.host||e;var o=e.querySelector(".toast-wrapper");r.addElement(o);r.fromTo("opacity",.99,0);return Promise.resolve(n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))}var y=function(){function t(t){e(this,t);this.presented=false;this.mode=n(this);this.duration=0;this.keyboardClose=false;this.position="bottom";this.showCloseButton=false;this.translucent=false;this.animated=true;this.didPresent=r(this,"ionToastDidPresent",7);this.willPresent=r(this,"ionToastWillPresent",7);this.willDismiss=r(this,"ionToastWillDismiss",7);this.didDismiss=r(this,"ionToastDidDismiss",7)}t.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return[4,a(this,"toastEnter",p,m,this.position)];case 1:e.sent();if(this.duration>0){this.durationTimeout=setTimeout(function(){return t.dismiss(undefined,"timeout")},this.duration)}return[2]}})})};t.prototype.dismiss=function(t,e){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return u(this,t,e,"toastLeave",v,b,this.position)};t.prototype.onDidDismiss=function(){return c(this.el,"ionToastDidDismiss")};t.prototype.onWillDismiss=function(){return c(this.el,"ionToastWillDismiss")};t.prototype.getButtons=function(){var t=this;var e=this.buttons?this.buttons.map(function(t){return typeof t==="string"?{text:t}:t}):[];if(this.showCloseButton){e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(undefined,"cancel")}})}return e};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:e=t.role;if(l(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:n=r.sent();if(n){return[2,this.dismiss(undefined,t.role)]}return[2,Promise.resolve()]}})})};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:if(!(t&&t.handler))return[3,4];r.label=1;case 1:r.trys.push([1,3,,4]);return[4,t.handler()];case 2:e=r.sent();if(e===false){return[2,false]}return[3,4];case 3:n=r.sent();console.error(n);return[3,4];case 4:return[2,true]}})})};t.prototype.hostData=function(){var t;var e=n(this);return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign((t={},t[e]=true,t),d(this.color),f(this.cssClass),{"toast-translucent":this.translucent})}};t.prototype.renderButtons=function(t,e){var r;var o=this;if(t.length===0){return}var s=n(this);var a=(r={"toast-button-group":true},r["toast-button-group-"+e]=true,r);return i("div",{class:a},t.map(function(t){return i("button",{type:"button",class:w(t),tabIndex:0,onClick:function(){return o.buttonClick(t)}},i("div",{class:"toast-button-inner"},t.icon&&i("ion-icon",{name:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-icon"}),t.text),s==="md"&&i("ion-ripple-effect",{type:t.icon!==undefined&&t.text===undefined?"unbounded":"bounded"}))}))};t.prototype.__stencil_render=function(){var t;var e=this.getButtons();var n=e.filter(function(t){return t.side==="start"});var r=e.filter(function(t){return t.side!=="start"});var o=(t={"toast-wrapper":true},t["toast-"+this.position]=true,t);return i("div",{class:o},i("div",{class:"toast-container"},this.renderButtons(n,"start"),i("div",{class:"toast-content"},this.header!==undefined&&i("div",{class:"toast-header"},this.header),this.message!==undefined&&i("div",{class:"toast-message",innerHTML:h(this.message)})),this.renderButtons(r,"end")))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});t.prototype.render=function(){return i(s,this.hostData(),this.__stencil_render())};Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}\@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:true,configurable:true});return t}();t("ion_toast",y);function w(t){var e;return Object.assign((e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-"+t.role]=t.role!==undefined,e["ion-focusable"]=true,e["ion-activatable"]=true,e),f(t.cssClass))}}}});