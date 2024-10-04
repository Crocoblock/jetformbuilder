(()=>{"use strict";var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const{Restriction:e,CalculatedFormula:r}=window.JetFormBuilderAbstract;function i(){e.call(this),this.message="",this.formula=null,this.watchedAttrs=[]}i.prototype=Object.create(e.prototype),i.prototype.message="",i.prototype.formula=null,i.prototype.watchedAttrs=[],i.prototype.isServerSide=function(){return!1},i.prototype.getMessage=function(){return this.message},i.prototype.getRawMessage=function(){return"Error"},i.prototype.getMessageBySlug=function(t){return function(t,e){var r,i,s,n;const{reporting:o}=t,a=null!==(r=o.messages[e])&&void 0!==r?r:"";if(a)return a;const u=null!==(i=window?.JetFormsValidation)&&void 0!==i&&i;if(!1===u)return"";const c=o.input.getSubmit(),{messages:l}=null!==(s=u[c.getFormId()])&&void 0!==s?s:{};return null!==(n=l[e])&&void 0!==n?n:""}(this,t)},i.prototype.onReady=function(){this.formula=new r(this.reporting.input),this.formula.observe(this.getRawMessage()),this.formula.setResult=()=>{this.message=this.formula.calculateString()},this.formula.setResult(),this.watchedAttrs.length&&(this.reporting.watchAttrs=[...new Set([...this.reporting.watchAttrs,...this.watchedAttrs])])};const s=i;function n(){s.call(this),this.watchedAttrs.push("max"),this.isSupported=function(t,e){const{max:r=!1}=e.input.attrs;return!1!==r&&["number","range"].includes(t.type)},this.validate=function(){const t=this.getValue(),{max:e}=this.reporting.input.attrs;return!t||+t<=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("number_max")}}n.prototype=Object.create(s.prototype);const o=n;function a(){s.call(this),this.watchedAttrs.push("min"),this.isSupported=function(t,e){const{min:r=!1}=e.input.attrs;return!1!==r&&["number","range"].includes(t.type)},this.validate=function(){const t=this.getValue(),{min:e}=this.reporting.input.attrs;return!t||+t>=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("number_min")}}a.prototype=Object.create(s.prototype);const u=a;function c(){s.call(this),this.isSupported=function(t){return"url"===t.type},this.validate=function(){const t=this.getValue();return!t||/((mailto\:|(news|(ht|f)tp(s?))\:\/\/)\S+)/.test(t)},this.getRawMessage=function(){return this.getMessageBySlug("url")}}c.prototype=Object.create(s.prototype);const l=c;function p(){s.call(this),this.isSupported=function(t){return"email"===t.type},this.validate=function(){const t=this.getValue();return!t||/^[\w-\.\+]+@([\w-]+\.)+[\w-]{1,6}$/.test(t)},this.getRawMessage=function(){return this.getMessageBySlug("email")}}p.prototype=Object.create(s.prototype);const h=p;function d(){s.call(this),this.watchedAttrs.push("minLength"),this.isSupported=function(t,e){const{minLength:r=!1}=e.input.attrs;return!1!==r},this.validate=function(){const t=this.getValue()?.length,{minLength:e}=this.reporting.input.attrs;return!t||t>=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("char_min")}}d.prototype=Object.create(s.prototype);const g=d;function f(){s.call(this),this.watchedAttrs.push("maxLength"),this.isSupported=function(t,e){const{maxLength:r=!1}=e.input.attrs;return!1!==r},this.validate=function(){const t=this.getValue()?.length,{maxLength:e}=this.reporting.input.attrs;return!t||t<=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("char_max")}}f.prototype=Object.create(s.prototype);const y=f,{isEmpty:m}=JetFormBuilderFunctions;function v(){s.call(this),this.type="required"}v.prototype=Object.create(s.prototype),v.prototype.isSupported=function(t,e){return e.input.isRequired},v.prototype.validate=function(){const t=this.getValue();return!m(t)},v.prototype.getRawMessage=function(){return this.getMessageBySlug("empty")};const S=v;function b(){s.call(this),this.isSupported=function(t){return t.classList.contains("jet-form-builder__masked-field")&&jQuery.fn.inputmask},this.validate=function(){const t=this.getValue(),e=this.reporting.getNode();return!t||e.inputmask.isComplete()},this.getRawMessage=function(){return this.getMessageBySlug("inputmask")}}b.prototype=Object.create(s.prototype);const w=b;function j(){s.call(this),this.isSupported=function(t,e){var r;const i=t.closest(".jet-form-builder-row"),s=JSON.parse(null!==(r=i.dataset?.validationRules)&&void 0!==r?r:"[]");return!!Boolean(s.length)&&(e.restrictions=[...e.restrictions,...X(s,e)],!1)}}j.prototype=Object.create(s.prototype);const R=j;function A(){s.call(this),this.attrs={}}A.prototype=Object.create(s.prototype),A.prototype.attrs={},A.prototype.setAttrs=function(t){this.attrs=t},A.prototype.getSlug=function(){throw new Error("you need to return slug of rule")},A.prototype.getRawMessage=function(){var t;return null!==(t=this.attrs?.message)&&void 0!==t?t:""};const _=A;function O(){_.call(this),this.getSlug=function(){return"contain"}}O.prototype=Object.create(_.prototype),O.prototype.setAttrs=function(t){_.prototype.setAttrs.call(this,t),Z.call(this)},O.prototype.validate=function(){const t=this.getValue();return!t||t.includes(this.attrs.value)};const B=O;function M(){B.call(this),this.getSlug=function(){return"contain_not"},this.validate=function(){return!this.getValue()||!B.prototype.validate.call(this)}}M.prototype=Object.create(B.prototype);const P=M;function F(){_.call(this),this.getSlug=function(){return"regexp"}}F.prototype=Object.create(_.prototype),F.prototype.setAttrs=function(t){_.prototype.setAttrs.call(this,t),Z.call(this)},F.prototype.validate=function(){const t=this.getValue();return!t||new RegExp(this.attrs.value,"g").test(t)};const x=F;function V(){x.call(this),this.getSlug=function(){return"regexp_not"},this.validate=function(){return!this.getValue()||!x.prototype.validate.call(this)}}V.prototype=Object.create(x.prototype);const k=V,N=window.wp.apiFetch;var J=t.n(N);function L(){_.call(this),this.getSlug=function(){return"ssr"},this.isServerSide=function(){return!0},this.validatePromise=async function(t=null){if(!this.getValue())return Promise.resolve();const e=this.getFormData();try{const r=await J()({path:"/jet-form-builder/v1/validate-field",method:"POST",body:e,signal:t});return r?.result?Promise.resolve():Promise.reject()}catch(t){throw t}},this.getFormData=function(){const{input:t}=this.reporting,{rootNode:e}=t.getRoot(),r=new FormData(e);r.delete("_wpnonce"),r.set("_jfb_validation_rule_index",this.attrs.index);for(const e of t.path)r.append("_jfb_validation_path[]",e);return r}}L.prototype=Object.create(_.prototype);const E=L;function q(){_.call(this),this.getSlug=function(){return"equal"},this.validate=function(){const t=this.getValue();return!t||t===this.attrs.value}}q.prototype=Object.create(_.prototype),q.prototype.setAttrs=function(t){_.prototype.setAttrs.call(this,t),Z.call(this)};const C=q,{getTimestamp:I}=JetFormBuilderFunctions;function T(){s.call(this),this.watchedAttrs.push("min"),this.isSupported=function(t,e){const{min:r=!1}=e.input.attrs;return!1!==r&&["time","date","datetime-local"].includes(t.type)},this.validate=function(){const t=this.getValue();if(!t)return!0;const{min:e}=this.reporting.input.attrs,{time:r}=I(t),{time:i}=I(e.value.current);return r>=i},this.getRawMessage=function(){return this.getMessageBySlug("date_min")}}T.prototype=Object.create(s.prototype);const D=T,{getTimestamp:H}=JetFormBuilderFunctions;function Q(){s.call(this),this.watchedAttrs.push("max"),this.isSupported=function(t,e){const{max:r=!1}=e.input.attrs;return!1!==r&&["time","date","datetime-local"].includes(t.type)},this.validate=function(){const t=this.getValue();if(!t)return!0;const{max:e}=this.reporting.input.attrs,{time:r}=H(t),{time:i}=H(e.value.current);return r<=i},this.getRawMessage=function(){return this.getMessageBySlug("date_max")}}Q.prototype=Object.create(s.prototype);const $=Q,{applyFilters:z}=JetPlugins.hooks,{isEmpty:G}=JetFormBuilderFunctions,K=()=>z("jet.fb.advanced.rules",[B,P,x,k,E,C]);let U=[],W=[];function X(t,e){const r=[];U.length||(U=K());for(const[i,s]of Object.entries(t))for(const t of U){const n=new t;if(s.type===n.getSlug()){delete s.type,n.setReporting(e),n.setAttrs({...s,index:i}),n.onReady(),r.push(n);break}}return r}function Y(t){return t.closest(".jet-form-builder-row")}function Z(){if(!this.attrs?.field)return;const{root:t}=this.reporting.input,e=t.getInput(this.attrs.field);e.watch((()=>{this.attrs.value=e.value.current,this.reporting.valuePrev=null,this.reporting.validateOnChange()})),G(e.value.current)||(this.attrs.value=e.value.current)}function tt(t){for(const e of t.children)if(e.classList.contains("error-message"))return e;const e=t.querySelector(".jet-form-builder-col__end");return!!e&&tt(e)}const{ReportingInterface:et}=JetFormBuilderAbstract,{allRejected:rt}=JetFormBuilderFunctions;function it(){et.call(this),this.type="inherit",this.messages={},this.skipServerSide=!0,this.watchAttrs=[],this.queue=[]}it.prototype=Object.create(et.prototype),it.prototype.skipServerSide=!0,it.prototype.hasServerSide=!1,it.prototype.isProcess=null,it.prototype.queue=[],it.prototype.setRestrictions=function(){!function(t){W.length||(W=z("jet.fb.restrictions",[D,$,o,u,l,h,w,g,y,S,R]));for(const e of W){const r=new e;r.isSupported(t.getNode(),t)&&(r.setReporting(t),r.onReady(),t.restrictions.push(r))}}(this)},it.prototype.isSupported=function(t,e){this.type=function(t){var e;const r=Y(t),{validationType:i=""}=null!==(e=r?.dataset)&&void 0!==e?e:{};return i}(t);const r="inherit"===this.type?function(t){var e,r;const i=null!==(e=window?.JetFormsValidation)&&void 0!==e&&e;if(!1===i)return"";const s=t.getSubmit().getFormId(),{type:n=""}=null!==(r=i[s])&&void 0!==r?r:{};return n}(e):this.type;return!!r?.length},it.prototype.getErrorsRaw=async function(t,e=null){let r=await rt(t);return this.valuePrev=this.input.getValue(),e?.aborted&&(r=[]),r},it.prototype.reportRaw=function(t){let e="";for(const r of t)if(e=r.getMessage(),e?.length)break;e?this.insertError(e):this.clearReport()},it.prototype.setInput=function(t){this.messages=function(t){var e;const r=Y(t),{validationMessages:i="{}"}=null!==(e=r?.dataset)&&void 0!==e?e:{};return JSON.parse(i)}(t.nodes[0]),et.prototype.setInput.call(this,t)},it.prototype.observeAttrs=function(){for(const t of this.watchAttrs)this.input.attrs.hasOwnProperty(t)&&this.input.attrs[t].value.watch((()=>{this.valuePrev=null,this.validateOnBlur()}))},it.prototype.clearReport=function(){(()=>{const t=Y(this.getNode());if(!t)return;t.classList.remove("field-has-error");const e=tt(t);e&&e.remove()})(),this.makeValid()},it.prototype.insertError=function(t){(()=>{const e=Y(this.getNode()),r=this.createError(e,t);if(e.classList.add("field-has-error"),r.isConnected)return;const i=e.querySelector(".jet-form-builder-col__end");i?i.appendChild(r):e.appendChild(r)})(),this.makeInvalid()},it.prototype.createError=function(t,e){const r=tt(t);if(r)return r.innerHTML=e,r;const i=this.getNode(),s=document.createElement("div");return s.classList.add("error-message"),s.innerHTML=e,s.id=i.id+"__error",s},it.prototype.makeInvalid=function(){var t;const e=tt(Y(this.getNode()));this.getNode().setAttribute("aria-invalid","true"),this.getNode().setAttribute("aria-describedby",null!==(t=e?.id)&&void 0!==t&&t)},it.prototype.makeValid=function(){this.getNode().removeAttribute("aria-invalid"),this.getNode().removeAttribute("aria-describedby")},it.prototype.validateOnChange=function(t=!1){this.switchButtonsState(!0);const e=()=>{this.input.getContext().setSilence(!1),this.validate().then((()=>{})).catch((()=>{})).finally((()=>{this.isProcess=null;const t=[...this.queue];this.queue=[],t.length&&(this.valuePrev=null,t.forEach((t=>t())))}))};t&&this.isProcess&&(this.queue=[e]),this.isProcess||(this.isProcess=!0,e())},it.prototype.validateOnBlur=function(t=null){this.isProcess||(this.isProcess=!0,this.skipServerSide=!1,this.input.getContext().setSilence(!1),this.validate(t).then((()=>{})).catch((()=>{})).finally((()=>{this.skipServerSide=!0,this.hasServerSide=!1,this.isProcess=null,this.switchButtonsState()})))},it.prototype.switchButtonsState=function(t=!1){const e=this.input.root.rootNode.querySelectorAll(".jet-form-builder__next-page, .jet-form-builder__prev-page, .jet-form-builder__action-button");for(const r of e)(r.classList.contains("jet-form-builder__submit")||this.isNodeBelongThis(r))&&(r.disabled=!0===t||this.errors.length>0)},it.prototype.isNodeBelongThis=function(t){const e=t.closest(".jet-form-builder-page");return!!e&&!e.classList.contains("jet-form-builder-page--hidden")},it.prototype.validateOnChangeState=function(){return this.isProcess?Promise.resolve():(this.switchButtonsState(!0),this.input.getContext().setSilence(!1),this.isProcess=!0,this.skipServerSide=!1,new Promise(((t,e)=>{this.validate().then(t).catch(e).finally((()=>{this.skipServerSide=!0,this.hasServerSide=!1,this.isProcess=null,this.switchButtonsState()}))})))},it.prototype.canProcessRestriction=function(t){return!this.skipServerSide||!t.isServerSide()},it.prototype.beforeProcessRestriction=function(t){this.hasServerSide=!!t.isServerSide()||this.hasServerSide};const st=it;var nt;const{addFilter:ot,addAction:at}=JetPlugins.hooks;at("jet.fb.observe.after","jet-form-builder/observe-dynamic-attrs",(function(t){t.getInputs().forEach((t=>{t.reporting instanceof st&&t.reporting.observeAttrs()}))}),11),ot("jet.fb.reporting","jet-form-builder/advanced-reporting",(function(t){return[st,...t]})),window.JetFormBuilderAbstract={...null!==(nt=window.JetFormBuilderAbstract)&&void 0!==nt?nt:{},AdvancedRestriction:s,NotEmptyRestriction:S}})();