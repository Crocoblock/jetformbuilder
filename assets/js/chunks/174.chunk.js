"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[174],{5174:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:()=>at});var i=JetFBComponents.BaseAction,a=[o(o({},JSON.parse(JSON.stringify(new i))),{},{settings:{send_email:{subject:"New order on website",content:"Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%"}}})],c=window.JetFormEditorData.actionConditionSettings,u=JetFBComponents.ActionModal,s=JetFBHooks,p=s.useCurrentAction,m=s.useActionCallback,f=s.useUpdateCurrentAction,d=s.useUpdateCurrentActionMeta,b=wp.data.useSelect;const w=function(){var e=b((function(e){return e("jet-forms/actions").isSettingsModal()})),t=m(),n=d(),r=f(),o=r.setTypeSettings,l=r.clearCurrent,i=p(),a=i.currentAction,c=i.currentSettings;return e?wp.element.createElement(u,{classNames:["width-60"],title:"Edit Action",onRequestClose:l,onCancelClick:l,onUpdateClick:function(){n({settings:a.settings}),l()}},t&&wp.element.createElement(t,{settings:c,actionId:a.id,onChange:function(e){return o(e)}})):null};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=JetFBComponents,E=h.FieldWithPreset,C=h.DynamicPreset,P=h.RepeaterItemContext,A=h.Repeater,S=h.RepeaterAddNew,k=h.SafeDeleteToggle,_=h.RepeaterState,D=h.BaseHelp,F=JetFBHooks,x=F.useRequestEvents,T=F.useCurrentAction,B=F.useUpdateCurrentAction,N=JetFBActions.getFormFieldsBlocks,J=wp.components,R=J.SelectControl,M=J.TextareaControl,I=J.ToggleControl,H=J.FormTokenField,U=(J.BaseControl,J.TabPanel),L=wp.i18n.__,q=wp.data.useSelect,z=wp.element,W=z.useEffect,$=z.useState,G=z.useContext,V=z.RawHTML,K=[{value:"and",label:L("AND (ALL conditions must be met)","jet-form-builder")},{value:"or",label:L("OR (at least ONE condition must be met)","jet-form-builder")}];function Q(e,t){var n=c[e].find((function(e){return e.value===t}));return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n&&n[e]||t}}function X(e){var t=e.formFields,n=G(P),r=n.currentItem,o=n.changeCurrentItem,l=L("To fulfill this condition, the result of the check must be","jet-form-builder")+" ";l+=r.execute?"TRUE":"FALSE";var i=Q("compare_value_formats",r.compare_value_format),a=Q("operators",r.operator);return wp.element.createElement(React.Fragment,null,wp.element.createElement(I,{label:l,checked:r.execute,onChange:function(e){o({execute:e})}}),wp.element.createElement(R,{label:"Operator",labelPosition:"side",help:a("help"),value:r.operator,options:c.operators,onChange:function(e){return o({operator:e})}}),wp.element.createElement(R,{label:"Field",labelPosition:"side",value:r.field,options:t,onChange:function(e){return o({field:e})}}),wp.element.createElement(R,{label:L("Type transform comparing value","jet-form-builder"),labelPosition:"side",value:r.compare_value_format,options:c.compare_value_formats,onChange:function(e){o({compare_value_format:e})}}),i("help").length>0&&wp.element.createElement("p",{className:"components-base-control__help",style:{marginTop:"0px",color:"rgb(117, 117, 117)"},dangerouslySetInnerHTML:{__html:i("help")}}),wp.element.createElement(E,{baseControlProps:{label:"Value to Compare"},ModalEditor:function(e){var t=e.actionClick,n=e.onRequestClose;return wp.element.createElement(C,{value:r.default,isSaveAction:t,onSavePreset:function(e){o({default:e})},excludeSources:["query_var"],onUnMount:n})},triggerClasses:["trigger__textarea"]},wp.element.createElement(M,{className:"jet-control-clear jet-user-fields-map__list",value:r.default,help:a("need_explode")?c.help_for_exploding_compare:"",onChange:function(e){o({default:e})}})))}function Y(e){var t,n=e.events,r=T().currentAction,o=B().setCurrentAction,l=O($(!1),2),i=l[0],a=l[1],c=q((function(e){return e("jet-forms/events").getHelpMap()}));return wp.element.createElement(React.Fragment,null,wp.element.createElement(H,{label:L("Add event","jet-form-builder"),value:null!==(t=r.events)&&void 0!==t?t:[],suggestions:n,onChange:function(e){return o(y(y({},r),{},{events:e}))},tokenizeOnSpace:!0,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:""}),wp.element.createElement(D,null,L("Separate with commas or the Enter key.")+" ",wp.element.createElement("a",{href:"javascript:void(0)",onClick:function(){return a((function(e){return!e}))}},L(i?"Hide":"Details","jet-form-builder"))),i&&wp.element.createElement("ul",{className:"jet-fb-ul-revert-layer"},n.map((function(e){return wp.element.createElement("li",null,wp.element.createElement("b",null,e),": ",wp.element.createElement(V,null,c[e]))}))))}function Z(){var e,t=O($([]),2),n=t[0],r=t[1];W((function(){r(N([],"--"))}),[]);var o=T().currentAction,l=B(),i=l.setCurrentAction,a=l.updateCurrentConditions;return wp.element.createElement(React.Fragment,null,wp.element.createElement(R,{key:"SelectControl-operator",label:L("Condition Operator","jet-form-builder"),labelPosition:"side",value:o.condition_operator||"and",options:K,onChange:function(e){return i(y(y({},o),{},{condition_operator:e}))}}),wp.element.createElement(_,{state:a},wp.element.createElement(k,null,wp.element.createElement(A,{items:null!==(e=o.conditions)&&void 0!==e?e:[]},wp.element.createElement(X,{formFields:n}))),wp.element.createElement(S,{item:{execute:!0}},L("Add New Condition","jet-form-builder"))))}const ee=function(){var e=x();return 1===e.length?wp.element.createElement(Z,null):wp.element.createElement(React.Fragment,null,wp.element.createElement(U,{className:"jfb-conditions-tab-panel",initialTabName:"fields",tabs:[{name:"fields",title:L("Fields comparison","jet-form-builder"),edit:wp.element.createElement(Z,null)},{name:"events",title:L("Events match","jet-form-builder"),edit:wp.element.createElement(Y,{events:e})}]},(function(e){return e.edit})))};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=wp.i18n.__,oe=JetFBComponents.ActionModal,le=JetFBHooks,ie=le.useRequestEvents,ae=le.useUpdateCurrentActionMeta,ce=le.useCurrentAction,ue=wp.data,se=ue.useDispatch,pe=ue.useSelect;const me=function(){var e=pe((function(e){return e("jet-forms/actions").isConditionalModal()})),t=se("jet-forms/actions",[]).clearCurrent,n=ae(),r=ce().currentAction,o=ie();if(!e)return null;var l=["width-60"];return 1!==o.length&&l.push("without-margin"),wp.element.createElement(oe,{classNames:l,title:re("Edit Action Conditions & Events","jet-form-builder"),onRequestClose:t,onCancelClick:t,onUpdateClick:function(){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r)),t()}},wp.element.createElement(ee,null))};function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be=wp.data,we=(be.useDispatch,be.useSelect),ve=wp.element.useContext,ye=JetFBComponents.ActionListItemContext,je=JetFBHooks.useActionsEdit,Oe=wp.i18n.__;function ge(e){var t,n,r=e.slug,o=e.index,l=ve(ye).action,i=we((function(e){return e("jet-forms/events").getType(r)})),a=je().updateActionObj,c=[null!==(t=null==i?void 0:i.title)&&void 0!==t?t:"",Oe("(Click to delete)","jet-form-builder")].join(" ");return wp.element.createElement("button",{type:"button",className:"jfb-events-item",title:c,onClick:function(){l.events.splice(o,1),a(l.id,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l))}},null!==(n=null==i?void 0:i.value)&&void 0!==n?n:r)}const he=function(e){var t=e.events;return(void 0===t?[]:t).map((function(e,t){return wp.element.createElement(ge,{key:e,slug:e,index:t})}))};function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){Pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae=wp.data,Se=Ae.useDispatch,ke=Ae.useSelect,_e=wp.hooks.applyFilters,De=wp.i18n.__,Fe=wp.components,xe=Fe.SelectControl,Te=Fe.Button,Be=Fe.Card,Ne=Fe.CardBody,Je=Fe.CardHeader,Re=Fe.CardFooter,Me=Fe.DropdownMenu,Ie=Fe.Flex,He=JetFBComponents,Ue=He.ActionListItemContext,Le=He.MacrosButtonTemplate,qe=JetFBHooks,ze=qe.useActionCallback,We=qe.useActionsEdit,$e=qe.useActionDetail,Ge=window.jetFormActionTypes.map((function(e){return{value:e.id,label:e.name,disabled:e.disabled}}));const Ve=function(e){var t,n,r,o=e.action,l=e.index,i=We(),a=i.moveAction,c=i.deleteAction,u=i.actions,s=i.updateActionObj,p=i.toggleExecute,m=ze(o.type),f=$e(o.type),d=Se("jet-forms/actions",[]),b=d.setCurrentAction,w=d.setMeta,v=ke((function(e){return e("jet-forms/actions").getCurrentAction()})),y=_e("jet.fb.section.actions.header.".concat(o.type),null,o),j=null!=o&&null!==(t=o.conditions)&&void 0!==t&&t.length?wp.element.createElement("span",{className:"dashicon dashicons dashicons-randomize","data-count":null==o?void 0:o.conditions.length}):wp.element.createElement("span",{className:"dashicon dashicons dashicons-randomize"}),O=["jet-form-action"],g=null===(n=o.is_execute)||void 0===n||n;return g||O.push("is-disabled"),(null==v?void 0:v.id)===o.id&&O.push("is-current"),wp.element.createElement(Be,{elevation:2,key:o.id,size:"extraSmall",className:O},y&&wp.element.createElement(Je,null,y),wp.element.createElement(Ne,null,wp.element.createElement(xe,{value:o.type,options:Ge,onChange:function(e){return s(o.id,{type:e})}},Ge.map((function(e){return wp.element.createElement("option",{key:o.id+"__"+e.value,value:e.value,disabled:e.disabled,dangerouslySetInnerHTML:{__html:e.label}})}))),_e("jet.fb.section.actions.afterSelect.".concat(o.type),null,o,u),wp.element.createElement(Ie,{style:{marginTop:"0.5em"},justify:"space-around"},wp.element.createElement(Te,{disabled:!m,icon:"edit",label:De("Edit Action","jet-form-builder"),onClick:function(){b(Ce(Ce({},o),{},{index:l})),w({index:l,modalType:"settings"})}}),wp.element.createElement(Te,{className:"jet-fb-button",icon:j,label:De("Edit Conditions & Events","jet-form-builder"),onClick:function(){b(Ce(Ce({},o),{},{index:l})),w({index:l,modalType:"conditions"})}}),wp.element.createElement((function(){return wp.element.createElement(Me,{icon:"ellipsis",label:"Edit, move or delete",controls:[{title:De("Up","jet-form-builder"),icon:"arrow-up",disabled:0===l,onClick:function(){a(l,l-1)}},{title:De("Down","jet-form-builder"),icon:"arrow-down",disabled:u.length-1===l,onClick:function(){a(l,l+1)}},{title:De("Delete","jet-form-builder"),icon:"trash",onClick:function(){c(l)}},{title:De(g?"Turn off":"Turn on","jet-form-builder"),icon:g?"no-alt":"yes",onClick:function(){p(o)}}]})}),null),wp.element.createElement(Le,{variant:null,isSmall:!1,icon:"editor-help",label:De("Show details about selected action","jet-form-builder")},wp.element.createElement("div",{className:"jet-fb p-06em flex flex-dir-column gap-default"},wp.element.createElement("div",{"data-title":De("ID:","jet-form-builder")},wp.element.createElement("b",null,o.id)),f&&wp.element.createElement(f,null))))),Boolean(null===(r=o.events)||void 0===r?void 0:r.length)&&wp.element.createElement(Re,{style:{flexWrap:"wrap",rowGap:"0.5em"}},wp.element.createElement(Ue.Provider,{value:{index:l,action:o}},wp.element.createElement(he,{events:o.events}))))};function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(n),!0).forEach((function(t){Xe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ze=wp.element,et=Ze.useEffect,tt=Ze.Children,nt=Ze.cloneElement,rt=wp.components.Button,ot=wp.i18n.__,lt=JetFBComponents.BaseAction,it=JetFBHooks.useActionsEdit;const at=function(){var e=it(),t=e.actions,n=e.setActions;et((function(){0===t.length&&n(a)}),[]);var r=t.map((function(e,t){return wp.element.createElement(Ve,{action:e,index:t})}));return wp.element.createElement(React.Fragment,null,tt.map(r,nt),wp.element.createElement("div",{className:"jet-fb flex jc-space-between"},wp.element.createElement(rt,{isPrimary:!0,onClick:function(){var e;n([].concat(function(e){if(Array.isArray(e))return Ye(e)}(e=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ye(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[Qe({},new lt)]))}},ot("+ New Action","jet-form-builder")),!JetFormEditorData.isActivePro&&wp.element.createElement(rt,{href:JetFormEditorData.utmLinks.allProActions,variant:"link"},ot("All PRO Actions","jet-form-builder"))),wp.element.createElement(w,null),wp.element.createElement(me,null))}}}]);