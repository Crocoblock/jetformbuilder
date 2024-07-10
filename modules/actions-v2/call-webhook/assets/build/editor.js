(()=>{"use strict";const e=window.React,t=window.wp.compose,o=window.jfb.components,r=window.wp.i18n,n=window.wp.components;var l=function(){const e=Array.prototype.slice.call(arguments).filter(Boolean),t={},o=[];e.forEach((e=>{(e?e.split(" "):[]).forEach((e=>{if(e.startsWith("atm_")){const[,o]=e.split("_");t[o]=e}else o.push(e)}))}));const r=[];for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(t[e]);return r.push(...o),r.join(" ")};const i=window.jfb.actions,{PresetButton:c,MacrosFields:a}=JetFBComponents,s=function({settings:s,onChangeSettingObj:u}){const{hasError:w,setShowError:h}=(0,i.useActionValidatorProvider)({isSupported:e=>"webhook_url"===e?.property}),p=(0,t.useInstanceId)(o.RowControl,"jfb-control");return(0,e.createElement)(o.RowControl,{createId:!1},(0,e.createElement)(o.LabelWithActions,null,(0,e.createElement)(o.RequiredLabel,{htmlFor:p},(0,r.__)("Webhook URL","jet-form-builder")),(0,e.createElement)(c,{value:s.webhook_url,onChange:e=>u({webhook_url:e})}),(0,e.createElement)(a,{onClick:e=>{var t;return u({webhook_url:(null!==(t=s.webhook_url)&&void 0!==t?t:"")+e})},withCurrent:!0})),(0,e.createElement)(n.Flex,{className:l(o.RowControlEndStyle,w&&o.ControlWithErrorStyle),direction:"column"},w&&(0,e.createElement)(o.IconText,null,(0,r.__)("Please fill this required field","jet-form-builder")),(0,e.createElement)(n.TextControl,{id:p,value:s.webhook_url,onChange:e=>u({webhook_url:e}),onBlur:()=>h(!0),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))},u=window.wp.primitives,w=(0,e.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(u.Path,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"})),h={type:"call_webhook",label:(0,r.__)("Call Webhook","jet-form-builder"),edit:function({settings:t,onChangeSettingObj:o}){return(0,e.createElement)(s,{settings:t,onChangeSettingObj:o})},icon:w,docHref:"https://jetformbuilder.com/features/call-webhook/",category:"advanced",validators:[({settings:e})=>!e?.webhook_url&&{type:"empty",property:"webhook_url"}]};(0,i.registerAction)(h)})();