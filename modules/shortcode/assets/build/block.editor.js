(()=>{"use strict";var e={560:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(168),o=r.n(n),a=r(433),i=r.n(a)()(o());i.push([e.id,".s1vim7hv{overflow-x:auto;text-wrap:nowrap;padding:3px 5px 2px;background:rgba(0,0,0,.07);font-size:13px;font-family:Consolas,Monaco,monospace;}\n",""]);const s=i},433:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},168:e=>{e.exports=function(e){return e[1]}},952:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(673),o=r.n(n),a=r(598),i=r.n(a),s=r(262),l=r.n(s),c=r(657),d=r.n(c),u=r(357),p=r.n(u),f=r(626),m=r.n(f),h=r(560),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=l().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),o()(h.A,y);const v=h.A&&h.A.locals?h.A.locals:void 0},673:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=r(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var l=n(e,o),c=0;c<a.length;c++){var d=r(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},262:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},357:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},657:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},598:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},626:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,(()=>{const e=window.wp.data,t=window.React,n=window.wp.components,o=window.wp.primitives,a=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"})),i=window.wp.i18n,s=window.wp.compose,l=window.wp.element,c=window.jfb.useForm;function d(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=d((function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=function(){const e=Array.prototype.slice.call(arguments).filter(Boolean),t={},r=[];e.forEach((e=>{(e?e.split(" "):[]).forEach((e=>{if(e.startsWith("atm_")){const[,r]=e.split("_");t[r]=e}else r.push(e)}))}));const n=[];for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(t[e]);return n.push(...r),n.join(" ")},m=(e,t)=>{const r={};return Object.keys(e).filter((e=>t=>-1===e.indexOf(t))(t)).forEach((t=>{r[t]=e[t]})),r};const h=function(e){let r="";return n=>{const o=(o,a)=>{const{as:i=e,class:s=r}=o;var l;const c=function(e,t,r){const n=m(t,["as","class"]);if(!e){const e="function"==typeof p?{default:p}:p;Object.keys(n).forEach((t=>{e.default(t)||delete n[t]}))}return n}(void 0===n.propsAsIs?!("string"==typeof i&&-1===i.indexOf("-")&&(l=i[0],l.toUpperCase()!==l)):n.propsAsIs,o);c.ref=a,c.className=n.atomic?f(n.class,c.className||s):f(c.className||s,n.class);const{vars:d}=n;if(d){const e={};for(const t in d){const r=d[t],a=r[0],i=r[1]||"",s="function"==typeof a?a(o):a;n.name,e[`--${t}`]=`${s}${i}`}const t=c.style||{},r=Object.keys(t);r.length>0&&r.forEach((r=>{e[r]=t[r]})),c.style=e}return e.__wyw_meta&&e!==i?(c.as=i,t.createElement(e,c)):t.createElement(i,c)},a=t.forwardRef?t.forwardRef(o):e=>{const t=m(e,["innerRef"]);return o(t,e.innerRef)};return a.displayName=n.name,a.__wyw_meta={className:n.class||r,extends:e},a}}("code")({name:"ShortCode",class:"s1vim7hv",propsAsIs:!1});r(952);const y={name:"shortcode",view:function({name:r}){const[o,d]=(0,c.usePluginUseSettings)(),u=r===o.builder,p=`[jet_fb_form ${function(){var e,t,r,n,o,a;const{formId:i,args:s}=(0,l.useContext)(c.FormAttributesContext);return Object.entries({form_id:i,submit_type:null!==(e=s?.submit_type)&&void 0!==e?e:"reload",required_mark:null!==(t=s?.required_mark)&&void 0!==t?t:"*",fields_layout:null!==(r=s?.fields_layout)&&void 0!==r?r:"column",fields_label_tag:null!==(n=s?.fields_label_tag)&&void 0!==n?n:"div",enable_progress:Number(null!==(o=s?.enable_progress)&&void 0!==o?o:""),clear:Number(null!==(a=s?.clear)&&void 0!==a?a:"")}).map((([e,t])=>e+'="'+t+'"')).join(" ")}()}]`,{createNotice:f}=(0,e.useDispatch)("core/notices"),m=(0,s.useCopyToClipboard)(p,(()=>{f("info",(0,i.__)("Copied shortcode to clipboard.","jet-form-builder"),{isDismissible:!0,type:"snackbar"})}));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.Button,{onClick:()=>d({builder:r}),icon:a,variant:u?"primary":"secondary"},(0,i.__)("Shortcode to use anywhere","jet-form-builder")),u&&(0,t.createElement)(c.BuilderHelpSlotFill.Fill,null,(0,t.createElement)(c.Description,null,(0,t.createElement)("b",null,(0,i.__)("Copy the shortcode and paste it where you need on the selected page:","jet-form-builder"))),(0,t.createElement)(n.Flex,{justify:"flex-start"},(0,t.createElement)(h,null,p),(0,t.createElement)(n.Button,{ref:m,variant:"tertiary"},(0,i.__)("Copy","jet-form-builder")))))}};(0,e.dispatch)("jet-forms/use-form").registerBuilders([y])})()})();