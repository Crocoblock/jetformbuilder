/*! For license information please see multi.step.js.LICENSE.txt */
(()=>{"use strict";var t=JetFormBuilderAbstract.ConditionItem;function e(){t.call(this),this.isSupported=function(t){var e;return!(null==t||null===(e=t.page_state)||void 0===e||!e.length)},this.setOptions=function(t){var e=t.page_state;this.pageState=e},this.isPassed=function(){var t,e=null===(t=this.list)||void 0===t||null===(t=t.block)||void 0===t||null===(t=t.page)||void 0===t||null===(t=t.canSwitch)||void 0===t?void 0:t.current;return"active"===this.pageState&&!e}}e.prototype=Object.create(t.prototype);const n=e;function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),s=new F(r||[]);return a(i,"_invoke",{value:I(t,n,s)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function b(){}function w(){}function S(){}var j={};f(j,u,(function(){return this}));var x=Object.getPrototypeOf,A=x&&x(x(N([])));A&&A!==n&&i.call(A,u)&&(j=A);var L=S.prototype=b.prototype=Object.create(j);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,s,u){var c=d(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function I(e,n,r){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=O(s,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=d(e,n,r);if("normal"===c.type){if(o=r.done?g:v,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(i.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=S,a(L,"constructor",{value:S,configurable:!0}),a(S,"constructor",{value:w,configurable:!0}),w.displayName=f(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},P(k.prototype),f(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(L),f(L,l,"Generator"),f(L,u,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,u,"next",t)}function u(t){i(a,r,o,s,u,"throw",t)}s(void 0)}))}}function s(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=JetFormBuilderAbstract,l=c.ReactiveVar,f=c.createConditionalBlock,h=(c.InputData,JetFormBuilderFunctions),d=h.validateInputs,p=h.getOffsetTop,v=h.focusOnInvalidInput,y=h.populateInputs,g=JetPlugins.hooks,m=g.addAction,b=g.doAction;function w(t,e){var n;this.node=t,this.index=+t.dataset.page,this.offset=+t.dataset.pageOffset,this.state=e,this.inputs=[],this.canSwitch=new l(null),this.isShow=new l(1===this.index),this.autoFocus=null===(n=window.JetFormBuilderSettings)||void 0===n?void 0:n.auto_focus,this.initialObserveState=!1}w.prototype.observe=function(){var t=this;this.isLast()||this.observeInputs(),this.canSwitch.make(),this.isShow.make(),this.isShow.watch((function(){t.isShow.current?t.onShow():t.onHide()})),this.addButtonsListeners(),this.isFirst()&&(this.initialObserveState=!0,this.updateStateAsync().then((function(){})).catch((function(){}))),this.updateOffsetByProgress(),m("jet.fb.observe.input.manual","jet-form-builder/page-state",(function(e){return t.observeInput(e.nodes[0])})),b("jet.fb.multistep.page.init",this)},w.prototype.observeInputs=function(){var t,e=s(this.node.querySelectorAll("[data-jfb-sync]"));try{for(e.s();!(t=e.n()).done;){var n=t.value,r=this.observeInput(n);r&&b("jet.fb.multistep.page.observed.input",r,this)}}catch(t){e.e(t)}finally{e.f()}},w.prototype.observeInput=function(t){var e=this;if(!this.isNodeBelongThis(t)||!t.hasOwnProperty("jfbSync")||t.jfbSync.hasParent())return!1;var n=t.jfbSync;return this.handleInputEnter(n),n.loading.watch((function(){n.loading.current?e.canSwitch.current=!1:e.updateState()})),n.reporting.restrictions.length?(this.inputs.push(n),n.watchValidity((function(){return e.updateState()})),n):n},w.prototype.observeConditionalBlocks=function(){var t=this;if(!this.isLast()){var e,r=s(this.node.querySelectorAll("[data-jfb-conditional]"));try{var o=function(){var r=e.value;if(!t.isNodeBelongThis(r))return 1;var o,i=f(r,t.state.getRoot()),a=s(i.list.getConditions());try{for(a.s();!(o=a.n()).done;)if(o.value instanceof n){i.page=t,t.canSwitch.watch((function(){return i.list.onChangeRelated()}));break}}catch(t){a.e(t)}finally{a.f()}};for(r.s();!(e=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}}},w.prototype.onShow=function(){this.node.classList.remove("jet-form-builder-page--hidden"),this.initialObserveState||(this.initialObserveState=!0,this.updateStateAsync().then((function(){})).catch((function(){})))},w.prototype.onHide=function(){this.node.classList.add("jet-form-builder-page--hidden")},w.prototype.updateState=function(){var t,e=s(this.getInputs());try{for(e.s();!(t=e.n()).done;){var n=t.value;if(!n.reporting.validityState.current&&null!==n.reporting.validityState.current)return void(this.canSwitch.current=!1)}}catch(t){e.e(t)}finally{e.f()}this.canSwitch.current=!0},w.prototype.updateStateAsync=a(o().mark((function t(){var e,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.prev=1,t.next=4,d(this.getInputs(),e);case 4:this.canSwitch.current=!0,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.canSwitch.current=!1;case 10:case"end":return t.stop()}}),t,this,[[1,7]])}))),w.prototype.addButtonsListeners=function(){var t,e=this,n=s(this.node.querySelectorAll(".jet-form-builder__next-page, .jet-form-builder__prev-page"));try{var r=function(){var n=t.value;if(!e.isNodeBelongThis(n))return 1;var r=n.classList.contains("jet-form-builder__prev-page");n.addEventListener("click",(function(){return e.changePage(r)}))};for(n.s();!(t=n.n()).done;)r()}catch(t){n.e(t)}finally{n.f()}},w.prototype.changePage=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return this.state.index.current=this.index-1,t.abrupt("return");case 3:if(!this.getLockState().current){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.updateStateAsync(!1);case 7:if(!this.canSwitch.current){t.next=10;break}return this.state.index.current=this.index+1,t.abrupt("return");case 10:this.autoFocus&&v(this.getInputs());case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),w.prototype.isNodeBelongThis=function(t){var e=t.closest(".jet-form-builder-page");return!!e&&e.isEqualNode(this.node)},w.prototype.getInputs=function(){return y(this.inputs)},w.prototype.getLockState=function(){var t,e,n=this.state.getRoot();return(null!==(t=null==n||null===(e=n.parent)||void 0===e||null===(e=e.root)||void 0===e?void 0:e.form)&&void 0!==t?t:n.form).lockState},w.prototype.isLast=function(){return this.state.isLastPage(this)},w.prototype.isFirst=function(){return this.state.isFirstPage(this)},w.prototype.handleInputEnter=function(t){var e,n=this;null==t||null===(e=t.enterKey)||void 0===e||e.addFilter((function(t){return n.changePage().then((function(){})).catch((function(){})),!1}))},w.prototype.getOffsetTop=function(){return p(this.node)-this.offset},w.prototype.updateOffsetByProgress=function(){var t;null!==(t=this.state)&&void 0!==t&&null!==(t=t.progress)&&void 0!==t&&t.node&&(this.offset+=+this.state.progress.node.clientHeight)};const S=w;function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const x=function(t,e){var n=this;this.node=t,this.state=e,this.state.index.watch((function(){return n.updateItems()})),this.updateItems=function(){var t,e=this.state.index.current,n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(this.node.children);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=+r.dataset.page;o<e?this.makePassed(r):e===o?this.makeActive(r):this.makeNotPassed(r)}}catch(t){n.e(t)}finally{n.f()}},this.makeActive=function(t){t.classList.remove("passed-page"),t.classList.add("active-page")},this.makePassed=function(t){t.classList.add("passed-page"),t.classList.remove("active-page")},this.makeNotPassed=function(t){t.classList.remove("active-page","passed-page")}};function A(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return L(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var P=JetFormBuilderAbstract,k=P.ConditionalBlock,I=P.ReactiveVar,O=JetPlugins.hooks.doAction;const E=function(){this.root=null,this.block=null,this.index=null,this.elements=[],this.setScope=function(t){t instanceof k?this.block=t:this.root=t},this.setProgress=function(){this.index=new I(1),this.index.make(),this.index.watch(this.onChangeIndex.bind(this));var t,e=A(this.getScopeNode().children);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.matches(".jet-form-builder-progress-pages")&&(this.progress=new x(n,this))}}catch(t){e.e(t)}finally{e.f()}},this.setPages=function(t){var e=this;this.elements=t.map((function(t){return new S(t,e)})),this.elements.forEach((function(t){return t.observe()})),this.elements.forEach((function(t){return t.observeConditionalBlocks()}));var n=this.getRoot().getSubmit().submitter;n.hasOwnProperty("status")&&n.watchReset((function(){e.index.current=1}))},this.onChangeIndex=function(){var t,e,n=A(this.getPages());try{for(n.s();!(e=n.n()).done;){var r=e.value;r.isShow.current=r.index===this.index.current}}catch(t){n.e(t)}finally{n.f()}null===(t=window)||void 0===t||null===(t=t.jQuery(document))||void 0===t||t.trigger("jet-form-builder/switch-page")},this.getCurrentPage=function(){var t,e=A(this.getPages());try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.isShow.current)return n}}catch(t){e.e(t)}finally{e.f()}return!1},this.getPages=function(){return this.elements},this.getScopeNode=function(){var t,e;return null!==(t=null===(e=this.block)||void 0===e?void 0:e.node)&&void 0!==t?t:this.root.rootNode},this.getRoot=function(){var t,e;return null!==(t=null===(e=this.block)||void 0===e?void 0:e.root)&&void 0!==t?t:this.root},this.isLastPage=function(t){return this.elements.at(-1)===t},this.isFirstPage=function(t){return this.elements[0]===t},this.onReady=function(){O("jet.fb.multistep.init",this)}};function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F(t){var e=new E;e.setScope(t);var n,r=[],o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(e.getScopeNode().childNodes);try{for(o.s();!(n=o.n()).done;){var i,a=n.value;null!=a&&null!==(i=a.classList)&&void 0!==i&&i.contains("jet-form-builder-page")&&r.push(a)}}catch(t){o.e(t)}finally{o.f()}return r.length?(e.setProgress(),e.setPages(r),e):e}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var B=JetPlugins.hooks,T=B.addAction,C=B.addFilter,R=JetFormBuilderFunctions.getScrollParent;T("jet.fb.observe.after","jet-form-builder/multi-step",(function(t){var e,n=F(t);null!==(e=n.getPages())&&void 0!==e&&e.length&&(t.multistep=n,n.onReady())}),15),T("jet.fb.conditional.init","jet-form-builder/multi-step",(function(t){var e,n=F(t);null!==(e=n.getPages())&&void 0!==e&&e.length&&(t.multistep=n,n.onReady())})),C("jet.fb.conditional.types","jet-form-builder/multi-step",(function(t){return[n].concat(function(t){if(Array.isArray(t))return N(t)}(e=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var e})),T("jet.fb.multistep.init","jet-form-builder/multi-step/autoscroll",(function(t){var e;null!==(e=window)&&void 0!==e&&null!==(e=e.JetFormBuilderSettings)&&void 0!==e&&e.scroll_on_next&&t.index.watch((function(){var e,n=t.getCurrentPage(),r=R(n.node),o=n.getOffsetTop();null==r||null===(e=r.scrollTo)||void 0===e||e.call(r,{top:o,behavior:"smooth"})}))}))})();