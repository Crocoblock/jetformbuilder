(()=>{"use strict";const e=window.wp.data,t=window.React,n=window.wp.components,l=window.wp.primitives,i=(0,t.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(l.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"})),o=window.wp.i18n,{BuilderHelpSlotFill:r}=JetFBComponents,{usePluginUseSettings:a}=JetFBHooks,c={name:"bricks",view:function({name:e}){const[l,c]=a(),d=e===l.builder;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.Button,{onClick:()=>c({builder:e}),icon:i,variant:d?"primary":"secondary"},(0,o.__)("Bricks Element","jet-form-builder")),d&&(0,t.createElement)(r.Fill,null,(0,t.createElement)("p",null,(0,o.__)("The form will be automatically added to the end of the selected page","jet-form-builder"))))}};(0,e.dispatch)("jet-forms/use-form").registerBuilders([c])})();