var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,s){function o(t){try{u(i.next(t))}catch(t){s(t)}}function a(t){try{u(i["throw"](t))}catch(t){s(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(o,a)}u((i=i.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];r=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-d356a5a5.system.js","./p-45890bdd.system.js","./p-94417ec5.system.js","./p-78563a64.system.js","./p-a736411a.system.js"],function(t,e){"use strict";var n,i,r,s,o,a,u,c,l,h,d,f;return{setters:[function(t){n=t.r;i=t.d;r=t.c;s=t.k;o=t.h;a=t.e;u=t.H},function(t){c=t.b},function(t){l=t.c},function(t){h=t.i;d=t.b},function(t){f=t.GESTURE_CONTROLLER}],execute:function(){var p=function(){function t(t){n(this,t);this.lastOnEnd=0;this.blocker=f.createBlocker({disableScroll:true});this.mode=i(this);this.isAnimating=false;this._isOpen=false;this.isPaneVisible=false;this.isEndSide=false;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50;this.ionWillOpen=r(this,"ionWillOpen",7);this.ionWillClose=r(this,"ionWillClose",7);this.ionDidOpen=r(this,"ionDidOpen",7);this.ionDidClose=r(this,"ionDidClose",7);this.ionMenuChange=r(this,"ionMenuChange",7);this.lazyMenuCtrl=s(this,"ion-menu-controller")}t.prototype.typeChanged=function(t,e){var n=this.contentEl;if(n){if(e!==undefined){n.classList.remove("menu-content-"+e)}n.classList.add("menu-content-"+t);n.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=h(this.side)};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,n,i,r,s,o;var a=this;return __generator(this,function(u){switch(u.label){case 0:if(this.type===undefined){this.type=c.get("menuType",this.mode==="ios"?"reveal":"overlay")}n=this;return[4,this.lazyMenuCtrl.componentOnReady().then(function(t){return t._getInstance()})];case 1:t=n.menuCtrl=u.sent();i=this.el;r=i.parentNode;s=this.contentId!==undefined?document.getElementById(this.contentId):r&&r.querySelector&&r.querySelector("[main]");if(!s||!s.tagName){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}this.contentEl=s;s.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();t._register(this);o=this;return[4,e.import("./p-a736411a.system.js")];case 2:o.gesture=u.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return a.canStart(t)},onWillStart:function(){return a.onWillStart()},onStart:function(){return a.onStart()},onMove:function(t){return a.onMove(t)},onEnd:function(t){return a.onEnd(t)}});this.updateState();return[2]}})})};t.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.componentDidUnload=function(){this.blocker.destroy();this.menuCtrl._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=this.backdropEl=this.menuInnerEl=undefined};t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el);this.updateState()};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return this.menuCtrl._setOpen(this,t,e)};t.prototype._setOpen=function(t,e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:n.sent();return[4,this.startAnimation(t,e)];case 2:n.sent();this.afterAnimation(t);return[2,true]}})})};t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:t=this.menuInnerEl.offsetWidth;if(t===this.width&&this.animation!==undefined){return[2]}this.width=t;if(this.animation){this.animation.destroy();this.animation=undefined}e=this;return[4,this.menuCtrl._createAnimation(this.type,this)];case 1:e.animation=n.sent();return[2]}})})};t.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:n=this.animation.reverse(!t);if(!e)return[3,2];return[4,n.playAsync()];case 1:i.sent();return[3,3];case 2:n.playSync();i.label=3;case 3:return[2]}})})};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){if(!this.canSwipe()){return false}if(this._isOpen){return true}else if(this.menuCtrl.getOpenSync()){return false}return v(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){d(false,"isAnimating has to be true");return}this.animation.reverse(this._isOpen).progressStart()};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){d(false,"isAnimating has to be true");return}var e=m(t.deltaX,this._isOpen,this.isEndSide);var n=e/this.width;this.animation.progressStep(n)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){d(false,"isAnimating has to be true");return}var n=this._isOpen;var i=this.isEndSide;var r=m(t.deltaX,n,i);var s=this.width;var o=r/s;var a=t.velocityX;var u=s/2;var c=a>=0&&(a>.2||t.deltaX>u);var l=a<=0&&(a<-.2||t.deltaX<-u);var h=n?i?c:l:i?l:c;var f=!n&&h;if(n&&!h){f=true}var p=h?1-o:o;var v=p*s;var _=0;if(v>5){var g=v/Math.abs(a);_=Math.min(g,300)}this.lastOnEnd=t.timeStamp;this.animation.onFinish(function(){return e.afterAnimation(f)},{clearExistingCallbacks:true,oneTimeCallback:true}).progressEnd(h,o,_)};t.prototype.beforeAnimation=function(t){d(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(_);if(this.backdropEl){this.backdropEl.classList.add(g)}this.blocker.block();this.isAnimating=true;if(t){this.ionWillOpen.emit()}else{this.ionWillClose.emit()}};t.prototype.afterAnimation=function(t){d(this.isAnimating,"_before() should be called while animating");this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){if(this.contentEl){this.contentEl.classList.add(y)}this.ionDidOpen.emit()}else{this.el.classList.remove(_);if(this.contentEl){this.contentEl.classList.remove(y)}if(this.backdropEl){this.backdropEl.classList.remove(g)}this.ionDidClose.emit()}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.setDisabled(!t||!this.swipeGesture)}if(!t&&this._isOpen){this.forceClosing()}if(!this.disabled&&this.menuCtrl){this.menuCtrl._setActiveMenu(this)}d(!this.isAnimating,"can not be animating")};t.prototype.forceClosing=function(){d(this._isOpen,"menu cannot be closed");this.isAnimating=true;var t=this.animation.reverse(true);t.playSync();this.afterAnimation(false)};t.prototype.hostData=function(){var t;var e=this,n=e.isEndSide,i=e.type,r=e.disabled,s=e.isPaneVisible;return{role:"navigation",class:(t={},t[""+this.mode]=true,t["menu-type-"+i]=true,t["menu-enabled"]=!r,t["menu-side-end"]=n,t["menu-side-start"]=!n,t["menu-pane-visible"]=s,t)}};t.prototype.__stencil_render=function(){var t=this;return[o("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},o("slot",null)),o("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:false,stopPropagation:false})]};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:true,configurable:true});t.prototype.render=function(){return o(u,this.hostData(),this.__stencil_render())};Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:true,configurable:true});return t}();t("ion_menu",p);function m(t,e,n){return Math.max(0,e!==n?-t:t)}function v(t,e,n,i){if(n){return e>=t.innerWidth-i}else{return e<=i}}var _="show-menu";var g="show-backdrop";var y="menu-content-open";var b=function(){function t(t){n(this,t);this.disabled=false;this.autoHide=true;this.type="button"}t.prototype.hostData=function(){var t;var e=i(this);var n=this,r=n.color,s=n.disabled;return{"aria-disabled":s?"true":null,class:Object.assign({},l(r),(t={},t[e]=true,t["button"]=true,t["menu-button-disabled"]=s,t["ion-activatable"]=true,t["ion-focusable"]=true,t))}};t.prototype.__stencil_render=function(){var t=i(this);var e=c.get("menuIcon","menu");var n={type:this.type};return o("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},o("button",Object.assign({},n,{disabled:this.disabled,class:"button-native"}),o("slot",null,o("ion-icon",{icon:e,mode:t,lazy:false})),t==="md"&&o("ion-ripple-effect",{type:"unbounded"})))};t.prototype.render=function(){return o(u,this.hostData(),this.__stencil_render())};Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px}ion-icon{font-size:24px}\@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"},enumerable:true,configurable:true});return t}();t("ion_menu_button",b);function w(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var E=8;function O(t,e,n){var i;var r;var s=n.width+E;if(n.isEndSide){i=s+"px";r="0px"}else{i=-s+"px";r="0px"}var o=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,r);var a=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return w(t).then(function(t){return t.add(o).add(a)})}function A(t,e,n){var i;var r;var s=n.width;if(n.isEndSide){i=-s+"px";r=s+"px"}else{i=s+"px";r=-s+"px"}var o=(new t).addElement(n.menuInnerEl).fromTo("translateX",r,"0px");var a=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);var u=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return w(t).then(function(t){return t.add(o).add(u).add(a)})}function S(t,e,n){var i=n.width*(n.isEndSide?-1:1)+"px";var r=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return w(t).then(function(t){return t.add(r)})}var C=function(){function t(t){n(this,t);this.menus=[];this.menuAnimations=new Map;this.registerAnimation("reveal",S);this.registerAnimation("push",A);this.registerAnimation("overlay",O)}t.prototype.open=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:e=n.sent();if(e){return[2,e.open()]}return[2,false]}})})};t.prototype.close=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,t!==undefined?this.get(t):this.getOpen()];case 1:e=n.sent();if(e!==undefined){return[2,e.close()]}return[2,false]}})})};t.prototype.toggle=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:e=n.sent();if(e){return[2,e.toggle()]}return[2,false]}})})};t.prototype.enable=function(t,e){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:n=i.sent();if(n){n.disabled=!t}return[2,n]}})})};t.prototype.swipeGesture=function(t,e){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:n=i.sent();if(n){n.swipeGesture=t}return[2,n]}})})};t.prototype.isOpen=function(t){return __awaiter(this,void 0,void 0,function(){var e,e;return __generator(this,function(n){switch(n.label){case 0:if(!(t!=null))return[3,2];return[4,this.get(t)];case 1:e=n.sent();return[2,e!==undefined&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:e=n.sent();return[2,e!==undefined]}})})};t.prototype.isEnabled=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:e=n.sent();if(e){return[2,!e.disabled]}return[2,false]}})})};t.prototype.get=function(t){return __awaiter(this,void 0,void 0,function(){var e,n;return __generator(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:i.sent();if(t==="start"||t==="end"){e=this.find(function(e){return e.side===t&&!e.disabled});if(e){return[2,e]}return[2,this.find(function(e){return e.side===t})]}else if(t!=null){return[2,this.find(function(e){return e.menuId===t})]}n=this.find(function(t){return!t.disabled});if(n){return[2,n]}return[2,this.menus.length>0?this.menus[0].el:undefined]}})})};t.prototype.getOpen=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:t.sent();return[2,this.getOpenSync()]}})})};t.prototype.getMenus=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:t.sent();return[2,this.getMenusSync()]}})})};t.prototype.isAnimating=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:t.sent();return[2,this.isAnimatingSync()]}})})};t.prototype.registerAnimation=function(t,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){this.menuAnimations.set(t,e);return[2]})})};t.prototype._getInstance=function(){return Promise.resolve(this)};t.prototype._register=function(t){var e=this.menus;if(e.indexOf(t)<0){if(!t.disabled){this._setActiveMenu(t)}e.push(t)}};t.prototype._unregister=function(t){var e=this.menus.indexOf(t);if(e>-1){this.menus.splice(e,1)}};t.prototype._setActiveMenu=function(t){var e=t.side;this.menus.filter(function(n){return n.side===e&&n!==t}).forEach(function(t){return t.disabled=true})};t.prototype._setOpen=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var i;return __generator(this,function(r){switch(r.label){case 0:if(this.isAnimatingSync()){return[2,false]}if(!e)return[3,3];return[4,this.getOpen()];case 1:i=r.sent();if(!(i&&t.el!==i))return[3,3];return[4,i.setOpen(false,false)];case 2:r.sent();r.label=3;case 3:return[2,t._setOpen(e,n)]}})})};t.prototype._createAnimation=function(t,n){return __awaiter(this,void 0,void 0,function(){var i,r;return __generator(this,function(s){switch(s.label){case 0:i=this.menuAnimations.get(t);if(!i){throw new Error("animation not registered")}return[4,e.import("./p-92a1505a.system.js").then(function(t){return t.create(i,null,n)})];case 1:r=s.sent();if(!c.getBoolean("animated",true)){r.duration(0)}return[2,r]}})})};t.prototype.getOpenSync=function(){return this.find(function(t){return t._isOpen})};t.prototype.getMenusSync=function(){return this.menus.map(function(t){return t.el})};t.prototype.isAnimatingSync=function(){return this.menus.some(function(t){return t.isAnimating})};t.prototype.find=function(t){var e=this.menus.find(t);if(e!==undefined){return e.el}return undefined};t.prototype.waitUntilReady=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(t){return t.componentOnReady()}))};Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:true,configurable:true});return t}();t("ion_menu_controller",C);var k=function(){function t(t){var e=this;n(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return __awaiter(e,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,P(document)];case 1:t=n.sent();if(!t)return[3,3];return[4,t.get(this.menu)];case 2:e=n.sent();if(e){t.toggle(this.menu)}n.label=3;case 3:return[2]}})})}}t.prototype.componentDidLoad=function(){return this.updateVisibility()};t.prototype.updateVisibility=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n;return __generator(this,function(i){switch(i.label){case 0:return[4,P(document)];case 1:t=i.sent();if(!t)return[3,5];return[4,t.get(this.menu)];case 2:e=i.sent();n=e;if(!n)return[3,4];return[4,e.isActive()];case 3:n=i.sent();i.label=4;case 4:if(n){this.visible=true;return[2]}i.label=5;case 5:this.visible=false;return[2]}})})};t.prototype.render=function(){var t;var e=i(this);var n=this.autoHide&&!this.visible;return o(u,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},t[e]=true,t["menu-toggle-hidden"]=n,t)},o("slot",null))};Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:true,configurable:true});return t}();t("ion_menu_toggle",k);function P(t){var e=t.querySelector("ion-menu-controller");if(!e){return Promise.resolve(undefined)}return e.componentOnReady()}}}});