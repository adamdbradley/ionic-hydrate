import{r as i,c as t,d as s,h as o,e as r,H as e}from"./p-32280026.js";import"./p-1074393c.js";class n{constructor(s){i(this,s),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.ionImgWillLoad=t(this,"ionImgWillLoad",7),this.ionImgDidLoad=t(this,"ionImgDidLoad",7),this.ionError=t(this,"ionError",7)}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}hostData(){return{class:{[s(this)]:!0}}}__stencil_render(){return o("img",{src:this.loadSrc,alt:this.alt,decoding:"async",onLoad:this.onLoad,onError:this.loadError})}get el(){return r(this)}static get watchers(){return{src:["srcChanged"]}}render(){return o(e,this.hostData(),this.__stencil_render())}static get style(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}export{n as ion_img};