"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[481],{3481:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function l(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}n.r(t),n.d(t,{default:()=>L});var s=wp.components,c=s.Button,p=s.TextControl,f=wp.i18n.__;const m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(d,wp.element.Component);var t,n,r,s,m=(r=d,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(r);if(s){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=m.call(this,e)).addNewOption=t.addNewOption.bind(i(t)),t}return t=d,(n=[{key:"getDefaultMeta",value:function(){return this.props.defaultMeta?Array.from(this.props.defaultMeta):[]}},{key:"addNewOption",value:function(){var e=this.getDefaultMeta();e.push({key:"",value:""}),this.props.onChange(e)}},{key:"removeOption",value:function(e){var t=this.getDefaultMeta();t.splice(e,1),this.props.onChange(t)}},{key:"onChangeValue",value:function(e){var t=e.value,n=e.name,r=e.id,o=Array.from(this.props.defaultMeta);o[r][n]=t,this.props.onChange(o)}},{key:"render",value:function(){var e=this;return wp.element.createElement("div",{className:"jet-user-fields-map__list"},this.getDefaultMeta().map((function(t,n){return wp.element.createElement("div",{className:"jet-user-meta__row",key:"jet-form-builder-repeater-item-"+n},wp.element.createElement("div",{className:"repeater-item-column jet-margin-bottom-wrapper"},wp.element.createElement(p,{key:"meta_key",label:f("Meta Key","jet-form-builder"),value:t.key,onChange:function(t){e.onChangeValue({value:t,name:"key",id:n})}}),wp.element.createElement(p,{key:"meta_value",label:f("Meta Value","jet-form-builder"),value:t.value,onChange:function(t){e.onChangeValue({value:t,name:"value",id:n})}})),wp.element.createElement("div",{className:"repeater-item-column"},wp.element.createElement(c,{icon:"dismiss",label:"Remove",onClick:function(){return e.removeOption(n)}})))})),wp.element.createElement(c,{className:"button-add-option",isSecondary:!0,onClick:this.addNewOption},f("Add New Option")))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),d}();var d=wp.components,y=d.SelectControl,v=d.TextControl,b=wp.element.useContext,h=JetFBComponents,w=h.CurrentActionEditContext,_=h.ActionFieldsMapContext,g=h.CurrentPropertyMapContext;const C=function(){var e=b(g),t=e.FieldSelect,n=e.property,r=b(w),o=r.source,a=r.setMapField,l=r.getMapField,i=b(_),u=i.name,s=i.index;switch(n){case"meta_input":return wp.element.createElement("div",{className:"components-base-control jet-margin-bottom-wrapper"},t,wp.element.createElement(v,{key:u+s+"_text",value:l({name:u}),onChange:function(e){return a({nameField:u,value:e})}}));case"post_terms":return wp.element.createElement("div",{className:"components-base-control jet-margin-bottom-wrapper"},t,wp.element.createElement(y,{key:u+s+"_select",value:l({name:u}),onChange:function(e){return a({nameField:u,value:e})},options:o.taxonomies}));default:return t}};function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=JetFBActions,O=(j.addAction,j.getFormFieldsBlocks),F=j.convertListToFieldsMap,M=JetFBComponents,A=M.ActionFieldsMap,x=M.WrapperRequiredControl,N=M.DynamicPropertySelect,P=JetFBHooks,R=P.withRequestFields,B=P.useSanitizeFieldsMap,T=wp.components,D=T.BaseControl,q=T.SelectControl,I=(wp.i18n.__,wp.element),V=I.useState,J=I.useEffect,z=wp.data.withSelect,H=(0,wp.hooks.applyFilters)("jet.fb.insert.post.modifiers",[{id:"product",isSupported:function(e){return"product"===e.post_type}},{id:"all",isSupported:function(e){return!0}}]),K=function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=k(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw a}}}}(H);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.isSupported(e))return r.id}}catch(e){n.e(e)}finally{n.f()}};const L=z(R)((function(e){var t=e.settings,n=e.onChangeSettingObj,r=e.source,o=e.help,a=e.label,l=e.requestFields,i=E(V([]),2),u=i[0],s=i[1],c=E(V((function(){var e,n=K(t);return null!==(e=r.properties[n])&&void 0!==e?e:[]})),2),p=c[0],f=c[1];return J((function(){var e;null!==(e=t.requestFields)&&void 0!==e&&e.length&&n({requestFields:null}),s(F(O(),l))}),[]),J((function(){var e,n=K(t);f(null!==(e=r.properties[n])&&void 0!==e?e:[])}),[t.post_type]),B(),wp.element.createElement(React.Fragment,null,wp.element.createElement(q,{key:"post_type",className:"full-width",labelPosition:"side",value:t.post_type,options:r.postTypes,label:a("post_type"),help:o("post_type"),onChange:function(e){return n({post_type:e})}}),wp.element.createElement(q,{key:"post_status",className:"full-width",labelPosition:"side",value:t.post_status,options:r.postStatuses,label:a("post_status"),help:o("post_status"),onChange:function(e){return n({post_status:e})}}),wp.element.createElement(A,{label:a("fields_map"),key:"user_fields_map",fields:u},wp.element.createElement(x,null,wp.element.createElement(N,{dynamic:["meta_input","post_terms"],properties:p,parseValue:function(e){return e.includes("jet_tax__")?"post_terms":"meta_input"}},wp.element.createElement(C,null)))),wp.element.createElement(D,{label:a("default_meta"),key:"default_meta"},wp.element.createElement(m,{defaultMeta:t.default_meta,onChange:function(e){return n({default_meta:e})}})))}))}}]);