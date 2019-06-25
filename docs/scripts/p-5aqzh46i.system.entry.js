System.register(["./p-d356a5a5.system.js","./p-45890bdd.system.js","./p-94417ec5.system.js","./p-78563a64.system.js"],function(e){"use strict";var t,i,o,n,r,a,s,d,l;return{setters:[function(e){t=e.r;i=e.c;o=e.d;n=e.h;r=e.H;a=e.e},function(){},function(e){s=e.c;d=e.h},function(e){l=e.f}],execute:function(){var u=function(){function e(e){var o=this;t(this,e);this.inputId="ion-rb-"+c++;this.name=this.inputId;this.disabled=false;this.checked=false;this.onFocus=function(){o.ionFocus.emit()};this.onBlur=function(){o.ionBlur.emit()};this.onClick=function(){if(o.checked){o.ionDeselect.emit()}else{o.checked=true}};this.ionRadioDidLoad=i(this,"ionRadioDidLoad",7);this.ionRadioDidUnload=i(this,"ionRadioDidUnload",7);this.ionStyle=i(this,"ionStyle",7);this.ionSelect=i(this,"ionSelect",7);this.ionDeselect=i(this,"ionDeselect",7);this.ionFocus=i(this,"ionFocus",7);this.ionBlur=i(this,"ionBlur",7)}e.prototype.colorChanged=function(){this.emitStyle()};e.prototype.checkedChanged=function(e){if(e){this.ionSelect.emit({checked:true,value:this.value})}this.emitStyle()};e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.componentWillLoad=function(){if(this.value===undefined){this.value=this.inputId}this.emitStyle()};e.prototype.componentDidLoad=function(){this.ionRadioDidLoad.emit()};e.prototype.componentDidUnload=function(){this.ionRadioDidUnload.emit()};e.prototype.emitStyle=function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this,i=t.inputId,a=t.disabled,u=t.checked,c=t.color,h=t.el;var f=o(this);var p=i+"-lbl";var y=l(h);if(y){y.id=p}return n(r,{onClick:this.onClick,role:"radio","aria-disabled":a?"true":null,"aria-checked":""+u,"aria-labelledby":p,class:Object.assign({},s(c),(e={},e[f]=true,e["in-item"]=d("ion-item",h),e["interactive"]=true,e["radio-checked"]=u,e["radio-disabled"]=a,e))},n("div",{class:"radio-icon"},n("div",{class:"radio-inner"})),n("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"},enumerable:true,configurable:true});return e}();e("ion_radio",u);var c=0;var h=function(){function e(e){t(this,e);this.inputId="ion-rg-"+f++;this.labelId=this.inputId+"-lbl";this.radios=[];this.allowEmptySelection=false;this.name=this.inputId;this.ionChange=i(this,"ionChange",7)}e.prototype.valueChanged=function(e){this.updateRadios();this.ionChange.emit({value:e})};e.prototype.onRadioDidLoad=function(e){var t=e.target;t.name=this.name;this.radios.push(t);if(this.value==null&&t.checked){this.value=t.value}else{this.updateRadios()}};e.prototype.onRadioDidUnload=function(e){var t=this.radios.indexOf(e.target);if(t>-1){this.radios.splice(t,1)}};e.prototype.onRadioSelect=function(e){var t=e.target;if(t){this.value=t.value}};e.prototype.onRadioDeselect=function(e){if(this.allowEmptySelection){var t=e.target;if(t){t.checked=false;this.value=undefined}}};e.prototype.componentDidLoad=function(){var e=this.el.querySelector("ion-list-header");if(!e){e=this.el.querySelector("ion-item-divider")}if(e){var t=e.querySelector("ion-label");if(t){this.labelId=t.id=this.name+"-lbl"}}this.updateRadios()};e.prototype.updateRadios=function(){var e=this.value;var t=false;for(var i=0,o=this.radios;i<o.length;i++){var n=o[i];if(!t&&n.value===e){t=true;n.checked=true}else{n.checked=false}}};e.prototype.hostData=function(){var e;var t=o(this);return{role:"radiogroup","aria-labelledby":this.labelId,class:(e={},e[t]=true,e)}};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:true,configurable:true});e.prototype.render=function(){return n(r,this.hostData())};return e}();e("ion_radio_group",h);var f=0}}});