import{r as t,c as e,d as i,h as s,H as c,e as h}from"./p-32280026.js";import"./p-1074393c.js";import{c as o,h as n}from"./p-9d21e8e5.js";import{f as a,r as l}from"./p-d102c9d1.js";class d{constructor(i){t(this,i),this.inputId=`ion-cb-${r++}`,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=e(this,"ionChange",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}componentWillLoad(){this.emitStyle()}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,indeterminate:e,disabled:h,checked:d,value:r,color:u,el:b}=this,m=t+"-lbl",k=i(this),p=a(b);p&&(p.id=m),l(!0,b,this.name,d?r:"",h);let g=s("path",e?{d:"M6 12L18 12"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===k&&(g=s("path",e?{d:"M2 12H22"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),s(c,{onClick:this.onClick,role:"checkbox","aria-disabled":h?"true":null,"aria-checked":`${d}`,"aria-labelledby":m,class:Object.assign({},o(u),{[k]:!0,"in-item":n("ion-item",b),"checkbox-checked":d,"checkbox-disabled":h,"checkbox-indeterminate":e,interactive:!0})},s("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},g),s("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return h(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["emitStyle"]}}static get style(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(0,0,0,0.54);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}}let r=0;export{d as ion_checkbox};