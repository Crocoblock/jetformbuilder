(()=>{var e={4521:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(994),o=t.n(r),i=t(3476),s=t.n(i)()(o());s.push([e.id,".jfb-row-wrapper{display:flex;gap:2em;align-items:end}.jfb-row-wrapper-item:nth-child(1){flex:1}.jfb-row-wrapper-item:nth-child(2){flex:3}.jfb-row-wrapper--loading{opacity:.5}.jfb-row-wrapper .cx-vui-component{padding:unset}.jfb-row-wrapper .cx-vui-select{background-color:#fff}.jfb-row-wrapper .jfb-list-components{display:flex;gap:2em;align-items:end;padding:1em}.jfb-row-wrapper .jfb-list-components-item{flex:0 0 30%}.jfb-row-wrapper .jfb-list-components-item .cx-vui-component__control{flex:1}.jfb-row-wrapper .jfb-list-components-item .cx-vui-component__control select{width:100%}","",{version:3,sources:["webpack://./admin/pages/jfb-records/ActionsWithFilters.vue"],names:[],mappings:"AAmFA,iBACC,YAAA,CACA,OAAA,CACA,eAAA,CACA,mCACC,MAAA,CAED,mCACC,MAAA,CAED,0BACC,UAAA,CAED,mCACC,aAAA,CAED,gCACC,qBAAA,CAED,sCACC,YAAA,CACA,OAAA,CACA,eAAA,CACA,WAAA,CACA,2CACC,YAAA,CACA,sEACC,MAAA,CACA,6EACC,UAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-row-wrapper {\r\n\tdisplay: flex;\r\n\tgap: 2em;\r\n\talign-items: end;\r\n\t&-item:nth-child(1) {\r\n\t\tflex: 1;\r\n\t}\r\n\t&-item:nth-child(2) {\r\n\t\tflex: 3;\r\n\t}\r\n\t&--loading {\r\n\t\topacity: 0.5;\r\n\t}\r\n\t.cx-vui-component {\r\n\t\tpadding: unset;\r\n\t}\r\n\t.cx-vui-select {\r\n\t\tbackground-color: white;\r\n\t}\r\n\t.jfb-list-components {\r\n\t\tdisplay: flex;\r\n\t\tgap: 2em;\r\n\t\talign-items: end;\r\n\t\tpadding: 1em;\r\n\t\t&-item {\r\n\t\t\tflex: 0 0 30%;\r\n\t\t\t.cx-vui-component__control {\r\n\t\t\t\tflex: 1;\r\n\t\t\t\tselect {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],sourceRoot:""}]);const a=s},1146:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(994),o=t.n(r),i=t(3476),s=t.n(i)()(o());s.push([e.id,".cx-vui-panel-table-wrapper{margin-bottom:unset}.cx-vue-list-table .cell--id.cell--id{flex:.3}.cx-vue-list-table .list-table-item{background-color:#fff}.cx-vue-list-table .list-table-item:not(:last-child){border-bottom:1px solid #ececec}.cx-vue-list-table .list-table-item--not-viewed{background-color:#f7fdff}.cx-vue-list-table .list-table-item:hover{background-color:#e3f6fd}","",{version:3,sources:["webpack://./admin/pages/jfb-records/Records.vue"],names:[],mappings:"AAyMA,4BACC,mBAAA,CAIA,sCACC,OAAA,CAGD,oCACC,qBAAA,CAEA,qDACC,+BAAA,CAGD,gDACC,wBAAA,CAGD,0CACC,wBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.cx-vui-panel-table-wrapper {\r\n\tmargin-bottom: unset;\r\n}\r\n\r\n.cx-vue-list-table {\r\n\t.cell--id.cell--id {\r\n\t\tflex: 0.3;\r\n\t}\r\n\r\n\t.list-table-item {\r\n\t\tbackground-color: #ffffff;\r\n\r\n\t\t&:not(:last-child) {\r\n\t\t\tborder-bottom: 1px solid #ececec;\r\n\t\t}\r\n\r\n\t\t&--not-viewed {\r\n\t\t\tbackground-color: #f7fdff;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground-color: #e3f6fd;\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\n"],sourceRoot:""}]);const a=s},3725:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(994),o=t.n(r),i=t(3476),s=t.n(i)()(o());s.push([e.id,".cx-vui-component[data-v-9e418906]{padding:unset}","",{version:3,sources:["webpack://./admin/pages/jfb-records/filters/FormFilter.vue"],names:[],mappings:"AAsCA,mCACC,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.cx-vui-component {\r\n\tpadding: unset;\r\n}\r\n"],sourceRoot:""}]);const a=s},3476:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},994:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==t.return||t.return()}finally{if(a)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if(!s)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),l="/*# ".concat(c," */"),p=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(p).concat([l]).join("\n")}return[i].join("\n")}},1717:(e,n,t)=>{var r=t(4521);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,t(9441).Z)("b6adc37a",r,!1,{})},5557:(e,n,t)=>{var r=t(1146);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,t(9441).Z)("6cafb981",r,!1,{})},2932:(e,n,t)=>{var r=t(3725);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,t(9441).Z)("376ac4e4",r,!1,{})},9441:(e,n,t)=>{"use strict";function r(e,n){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}t.d(n,{Z:()=>m});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,p=function(){},u=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,n,t,o){l=t,u=o||{};var s=r(e,n);return h(s),function(n){for(var t=[],o=0;o<s.length;o++){var a=s[o];(c=i[a.id]).refs--,t.push(c)}for(n?h(s=r(e,n)):s=[],o=0;o<t.length;o++){var c;if(0===(c=t[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function h(e){for(var n=0;n<e.length;n++){var t=e[n],r=i[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(b(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var s=[];for(o=0;o<t.parts.length;o++)s.push(b(t.parts[o]));i[t.id]={id:t.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function b(e){var n,t,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(l)return p;r.parentNode.removeChild(r)}if(f){var o=c++;r=a||(a=v()),n=C.bind(null,r,o,!1),t=C.bind(null,r,o,!0)}else r=v(),n=y.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}var A,g=(A=[],function(e,n){return A[e]=n,A.filter(Boolean).join("\n")});function C(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function y(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(d,n.id),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{wrap:!0,"jet-form-builder-page":!0,"jet-form-builder-page--records":!0}},[t("h1",{staticClass:"cs-vui-title"},[e._v(e._s(e.__("JetFormBuilder Form Records","jet-form-builder")))]),e._v(" "),t("ActionsWithFilters"),e._v(" "),t("TablePagination"),e._v(" "),t("EntriesTable"),e._v(" "),t("TablePagination")],1)};e._withStripped=!0;var n=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.wrapperClass},[t("div",{staticClass:"jfb-row-wrapper-item"},[t("ChooseAction")],1),e._v(" "),t("div",{staticClass:"jfb-row-wrapper-item"},[e.hasFilters?t("ListComponents",{attrs:{components:e.filtersComponents}},[t("ClearFiltersButton",{attrs:{label:e.__("Clear Filters","jet-form-builder")}})],1):e._e()],1)])};n._withStripped=!0;var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v(e._s(e.messages.filter_form_title))]),e._v(" "),t("cx-vui-select",{attrs:{"options-list":e.filter.options||[],"wrapper-css":["equalwidth"],value:e.filter.selected,placeholder:e.messages.filter_form},on:{input:e.onChangeFilter}})],1)};r._withStripped=!0;var o=Vuex,i=(o.mapState,o.mapGetters,o.mapMutations,o.mapActions,JetFBMixins);const s={name:"FormFilter",data:function(){return{filter_id:"form"}},mixins:[i.GetIncomingMessages,i.FilterMixin]};function a(e,n,t,r,o,i,s,a){var c,l="function"==typeof e?e.options:e;if(n&&(l.render=n,l.staticRenderFns=t,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(e,n){return c.call(n),p(e,n)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}t(2932);var c=a(s,r,[],!1,null,"9e418906",null);c.options.__file="admin/pages/jfb-records/filters/FormFilter.vue";const l=c.exports;function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=JetFBComponents,m=f.ChooseAction,h=f.ListComponents,v=f.ClearFiltersButton,b=JetFBMixins,A=b.GetIncoming,g=b.i18n,C=b.ScopeStoreMixin,y=Vuex,w=(y.mapMutations,y.mapActions,y.mapState,y.mapGetters),j=(0,wp.hooks.applyFilters)("jet.fb.records.page.filters",[l]);const O={name:"ActionsWithFilters",components:{ChooseAction:m,ListComponents:h,ClearFiltersButton:v},mixins:[A,g,C],data:function(){return{filtersComponents:j}},computed:u(u({},w(["isDoing"])),{},{hasFilters:function(){return this.getter("hasFilters")},wrapperClass:function(){return{"jfb-row-wrapper":!0,"jfb-row-wrapper--loading":this.isDoing}}}),created:function(){var e=this.getIncoming().filters_endpoint;this.dispatch("maybeFetchFilters",e)}};t(1717);var _=a(O,n,[],!1,null,null,null);_.options.__file="admin/pages/jfb-records/ActionsWithFilters.vue";const x=_.exports;function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E=JetFBComponents,M=E.TablePagination,B=E.EntriesTable,D=JetFBMixins,T=D.i18n,R=D.PromiseWrapper,I=D.GetIncomingMessages,L=JetFBConst,U=L.CHOOSE_ACTION,W=L.CLICK_ACTION,N=wp.apiFetch,G=Vuex,J=G.mapMutations,V=(G.mapState,G.mapActions);const $={name:"jfb-records",components:{TablePagination:M,EntriesTable:B,ActionsWithFilters:x},data:function(){return{isFooterVisible:!0}},mixins:[T,R,I],created:function(){this.setActionPromises({action:"delete",context:U,promise:this.promiseWrapper(this.deleteChecked.bind(this))}),this.setActionPromises({action:"delete",context:W,promise:this.promiseWrapper(this.deleteClicked.bind(this))}),this.setActionPromises({action:"mark_viewed",context:U,promise:this.promiseWrapper(this.viewChecked.bind(this))}),this.setActionPromises({action:"mark_viewed",context:W,promise:this.promiseWrapper(this.viewClicked.bind(this))}),this.setActionPromises({action:"mark_not_viewed",context:U,promise:this.promiseWrapper(this.viewChecked.bind(this))}),this.setActionPromises({action:"mark_not_viewed",context:W,promise:this.promiseWrapper(this.notViewClicked.bind(this))})},computed:k({},(0,G.mapGetters)("scope-default",["getAction","getCurrentAction","fetchListOptions","getChecked"])),methods:k(k(k(k({},J(["toggleDoingAction"])),J("scope-default",["setList","setActionsList","setActionPromises","toggleLoading"])),V("scope-default",["fetch","updateList"])),{},{beforeRunFetch:function(){var e,n,t;if(!this.getChecked.length)throw new Error(null===(n=this.messages)||void 0===n?void 0:n.empty_checked);if(null===(e=this.getCurrentAction)||void 0===e||!e.endpoint)throw new Error(null===(t=this.messages)||void 0===t?void 0:t.empty_action)},onCheckedOptions:function(){var e;return k(k({},this.fetchListOptions(null===(e=this.getCurrentAction)||void 0===e?void 0:e.endpoint)),{},{data:{checked:this.getChecked}})},getOptionsStatic:function(e,n){var t,r,o,i=(r=n,o=1,function(e){if(Array.isArray(e))return e}(r)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==t.return||t.return()}finally{if(a)throw o}}return i}}(r,o)||function(e,n){if(e){if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,n):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return k(k({},this.fetchListOptions(null===(t=this.getAction(e))||void 0===t?void 0:t.endpoint)),{},{data:{checked:[i]}})},deleteAction:function(e){var n=this,t=e.resolve,r=e.reject,o=e.options;N(o).then((function(e){n.updateList(e),t(e.message)})).catch(r)},deleteChecked:function(e){var n=e.resolve,t=e.reject;this.beforeRunFetch(),this.deleteAction({resolve:n,reject:t,options:this.onCheckedOptions()})},deleteClicked:function(e){for(var n=e.resolve,t=e.reject,r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];this.deleteAction({resolve:n,reject:t,options:this.getOptionsStatic("delete",o)})},viewAction:function(e){var n=this,t=e.resolve,r=e.reject,o=e.options;N(o).then((function(e){n.setList(e.list),t(e.message)})).catch(r)},viewChecked:function(e){var n=e.resolve,t=e.reject;this.beforeRunFetch(),this.viewAction({resolve:n,reject:t,options:this.onCheckedOptions()})},viewClicked:function(e){for(var n=e.resolve,t=e.reject,r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];this.viewAction({resolve:n,reject:t,options:this.getOptionsStatic("mark_viewed",o)})},notViewClicked:function(e){for(var n=e.resolve,t=e.reject,r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];this.viewAction({resolve:n,reject:t,options:this.getOptionsStatic("mark_not_viewed",o)})}})};t(5557);var q=a($,e,[],!1,null,null,null);q.options.__file="admin/pages/jfb-records/Records.vue";const Z=q.exports;function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(t),!0).forEach((function(n){H(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function H(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var K=JetFBStore,z=K.BaseStore,Q=K.TableModulePlugin,ee=K.TableSeedPlugin,ne=window.JetFBActions.renderCurrentPage;Vue.use(Vuex),ne(Z,{store:new Vuex.Store(X(X({},z),{},{plugins:[Q(),ee()]}))})})()})();
//# sourceMappingURL=jfb-records.js.map