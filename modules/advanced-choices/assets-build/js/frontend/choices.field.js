(()=>{"use strict";function t(t){var e;return null==t||null===(e=t.classList)||void 0===e?void 0:e.contains("jet-form-builder-choice")}function e(t){return t.closest(".jet-form-builder-choice--item")}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,a,u=[],l=!0,s=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(t){s=!0,i=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return u}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}function i(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=JetFormBuilderAbstract,u=a.InputData,l=a.ReactiveSet,s=a.ReactiveHook,c=JetFormBuilderFunctions.getParsedName;function f(){u.call(this),this.isSupported=t,this.setNode=function(t){t.jfbSync=this,this.nodes=Array.from(t.querySelectorAll(".jet-form-builder-choice--item input")),this.rawName=this.nodes[0].name,this.name=c(this.rawName),this.inputType="choice"},this.setValue=function(){this.value.current=this.isArray()?this.getMultipleValue():this.getSingleValue()},this.addListeners=function(){var t,e=this,n=r(this.nodes);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.addEventListener("change",(function(){return e.setValue()})),this.addListenerForChoice(i)}}catch(t){n.e(t)}finally{n.f()}this.isArray()&&this.sanitize((function(t){return Array.isArray(t)?t:[t]}))},this.getMultipleValue=function(){return Array.from(this.nodes).filter((function(t){return t.checked})).map((function(t){return t.value}))},this.getSingleValue=function(){var t,e=r(this.nodes);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.checked)return n.value}}catch(t){e.e(t)}finally{e.f()}return""},this.addListenerForChoice=function(t){var n=this,r=e(t);r.addEventListener("click",(function(e){return n.toggleChoice(t,e)})),this.enterKey=new s,this.isNativeControl(t)?t.addEventListener("keydown",this.handleEnterKey.bind(this)):r.addEventListener("keydown",(function(e){n.handleEnterKey(e),n.handleSpaceKey(e,t),n.handleNextKey(e,t),n.handlePrevKey(e,t)}))},this.toggleChoice=function(t,e){var n;"LABEL"!==(null==e||null===(n=e.target)||void 0===n?void 0:n.nodeName)&&(this.isArray()?this.value.toggle(t.value):this.value.current!==t.value?this.value.current=t.value:this.onClear())},this.hasAutoScroll=function(){return this.isNativeControl(this.nodes[0])},this.focusRaw=function(){var t=n(this.nodes,1)[0];this.isNativeControl(t)?u.prototype.focusRaw.call(this):e(t).focus({preventScroll:!0})}}f.prototype=Object.create(u.prototype),f.prototype.getReactive=function(){return new l},f.prototype.isNativeControl=function(t){return t.classList.contains("jet-form-builder-choice--item-control-input")},f.prototype.handleNextKey=function(t,e){if(["ArrowRight","ArrowDown"].includes(t.key)){t.preventDefault();var n=this.nextNode(e);this.switchChoice(n)}},f.prototype.handlePrevKey=function(t,e){if(["ArrowUp","ArrowLeft"].includes(t.key)){t.preventDefault();var n=this.prevNode(e);this.switchChoice(n)}},f.prototype.handleSpaceKey=function(t,e){["Spacebar"," "].includes(t.key)&&(t.preventDefault(),this.toggleChoice(e))},f.prototype.switchChoice=function(t){var n=e(t);this.toggleChoice(t),n.focus({preventScroll:!0})},f.prototype.nextNode=function(t){var e,i=r(this.nodes.entries());try{for(i.s();!(e=i.n()).done;){var o=n(e.value,2),a=o[0];if(o[1]===t)return this.nodes.hasOwnProperty(+a+1)?this.nodes[+a+1]:this.nodes[0]}}catch(t){i.e(t)}finally{i.f()}},f.prototype.prevNode=function(t){var e,i=r(this.nodes.entries());try{for(i.s();!(e=i.n()).done;){var o=n(e.value,2),a=o[0];if(o[1]===t)return this.nodes.at(a-1)}}catch(t){i.e(t)}finally{i.f()}};const h=f;function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=JetFormBuilderAbstract.BaseSignal,p=JetFormBuilderFunctions.isEmpty;function m(){v.call(this),this.isRadio=null,this.indexedFirst=!1,this.isSupported=function(t,n){return!!e(t)},this.runSignal=function(){this.input.calcValue=0,this.indexedFirst=!1;var t,n=d(this.input.nodes);try{for(n.s();!(t=n.n()).done;){var r,i,o,a=t.value;a.checked=this.isRadio?this.input.value.current===a.value:null===(r=this.input.value.current)||void 0===r?void 0:r.includes(a.value);var u=e(a);this.toggleTabIndex(a,u),u.classList.toggle("is-checked",a.checked),u.ariaChecked=a.checked,this.toggleImageControl(u,a.checked),a.checked&&(this.input.calcValue+=parseFloat(null!==(i=null===(o=a.dataset)||void 0===o?void 0:o.calculate)&&void 0!==i?i:a.value))}}catch(t){n.e(t)}finally{n.f()}},this.setInput=function(t){v.prototype.setInput.call(this,t),this.isRadio=!this.input.isArray()}}m.prototype=Object.create(v.prototype),m.prototype.toggleImageControl=function(t,e){var n,r=d(t.querySelectorAll(".jet-form-builder-choice--item-control-img"));try{for(r.s();!(n=r.n()).done;){var i=n.value;i.style.display=e?i.classList.contains("checked")?"":"none":i.classList.contains("checked")?"none":""}}catch(t){r.e(t)}finally{r.f()}},m.prototype.toggleTabIndex=function(t,e){if(this.isRadio&&!this.input.isNativeControl(t)){if(p(this.input.value.current))return this.setRawTabIndex(e,this.indexedFirst?-1:0),void(this.indexedFirst=!0);this.setRawTabIndex(e,t.checked?0:-1)}},m.prototype.setRawTabIndex=function(t,e){e!==t.tabIndex&&(t.tabIndex=e)};const b=m;function g(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var w=JetPlugins.hooks.addFilter;w("jet.fb.inputs","jet-form-builder/choices-field",(function(t){return[h].concat(g(t))})),w("jet.fb.signals","jet-form-builder/choices-field",(function(t){return[b].concat(g(t))}))})();