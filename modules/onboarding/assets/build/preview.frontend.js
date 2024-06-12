(()=>{"use strict";var e={996:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(168),o=r.n(n),a=r(433),i=r.n(a)()(o());i.push([e.id,"header.page-header,header.entry-header{align-items:center;display:flex;justify-content:flex-start;flex-wrap:wrap;gap:2em}header.page-header h1,header.entry-header h1{flex:0;text-wrap:nowrap}header.page-header .jfb-use-form-wrapper,header.entry-header .jfb-use-form-wrapper{flex:1}",""]);const s=i},433:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},168:e=>{e.exports=function(e){return e[1]}},673:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},262:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},357:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},657:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},598:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},626:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{const e=window.React,t=window.wp.element,n=window.wp.components,o=window.wp.i18n,a=window.wp.primitives,i=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(a.Path,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})),s=window.jfb.useForm,c=window.wp.url,u=window.wp.data,d=+(0,c.getQueryArg)(window.location.href,"p"),l=document.createElement("div");l.classList.add("jfb-use-form-wrapper"),(0,t.createRoot)(l).render((0,e.createElement)((function(){const[r,a]=(0,t.useState)(!1),c=(0,u.useSelect)((e=>{const t=e("core").getEntityRecord("postType","jet-form-builder",d);return t?.meta?JSON.parse(t.meta._jf_args):{}}),[]);return(0,e.createElement)(n.SlotFillProvider,null,(0,e.createElement)(n.Button,{variant:"secondary",icon:i,onClick:()=>a(!0)},(0,o.__)("Use the form","jet-form-builder")),r&&(0,e.createElement)(s.ResponsiveModal,{title:(0,o.__)("Use the form","jet-form-builder"),onRequestClose:()=>a(!1)},(0,e.createElement)(s.FormAttributesContext.Provider,{value:{formId:d,args:c,shouldUpdateForm:!1}},(0,e.createElement)(s.UseFormRoot,null))))}),null));var p=r(673),f=r.n(p),m=r(598),v=r.n(m),h=r(262),w=r.n(h),y=r(657),g=r.n(y),b=r(357),x=r.n(b),E=r(626),j=r.n(E),A=r(996),S={};S.styleTagTransform=j(),S.setAttributes=g(),S.insert=w().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=x(),f()(A.A,S),A.A&&A.A.locals&&A.A.locals;const{addAction:C}=JetPlugins.hooks;C("jet.fb.observe.after","jet-form-builder/use-form",(function(e){const t=e.rootNode.ownerDocument.querySelector("header.page-header, header.entry-header");t?t.append(l):e.rootNode.parentElement.insertBefore(l,e.rootNode)}))})()})();