(()=>{var n={3324:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});var a=e(994),i=e.n(a),o=e(3476),s=e.n(o)()(i());s.push([n.id,".proccesing-state{opacity:.5;pointer-events:none}.jfb-addons-page__inner{padding:30px;height:100%}.jfb-addons-page__header{margin-bottom:30px}.jfb-addons-page__header-controls{display:flex;justify-content:flex-end;align-items:center;padding-bottom:15px;border-bottom:1px solid #dcdcdd}.jfb-addons-page__header-controls>.cx-vui-button{margin-left:10px}.jfb-addons-page .cx-vui-button{font-size:13px;font-weight:400;background-color:transparent}.jfb-addons-page .cx-vui-button .button-icon{margin-right:5px}.jfb-addons-page .cx-vui-button--style-accent{color:#007cba;box-shadow:inset 0 0 0 1px #007cba}.jfb-addons-page .cx-vui-button--style-accent:hover{background-color:#007cba12}.jfb-addons-page .cx-vui-button--style-accent .button-icon path{fill:#007cba}.jfb-addons-page .cx-vui-button--style-danger{color:#d6336c;box-shadow:inset 0 0 0 1px #d6336c}.jfb-addons-page .cx-vui-button--style-danger:hover{background-color:#d6336c12}.jfb-addons-page .cx-vui-button--style-danger .button-icon path{fill:#d6336c}.jfb-addons-page .cx-vui-button__content>span{display:flex;justify-content:center;align-items:center}.jfb-addons-page .cx-vui-popup__header{padding-bottom:15px;border-bottom:1px solid #dcdcdd;margin-bottom:30px}.jfb-addons-page .cx-vui-popup__header-title{font-weight:500;font-size:24px;line-height:36px;color:#23282d}.jfb-addons-page__license-form{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch}.jfb-addons-page__license-form>span{margin-bottom:10px}.jfb-addons-page__license-input{margin-bottom:10px}.jfb-addons-page .go-pro-banner{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px 0;border-bottom:1px solid #dcdcdd}.jfb-addons-page .go-pro-banner__subtitle{font-size:18px;line-height:1.25;font-weight:500;color:#007cba;margin-bottom:5px}.jfb-addons-page .go-pro-banner__title{font-size:24px;line-height:1.25;font-weight:500;color:#23282d;margin-bottom:20px}.jfb-addons-page .go-pro-banner__button{color:#fff;background-color:#007cba}","",{version:3,sources:["webpack://./admin/pages/jfb-addons/AddonsPage.vue"],names:[],mappings:"AA6ZA,kBACC,UAAA,CACA,mBAAA,CAKA,wBACC,YAAA,CACA,WAAA,CAGD,yBACC,kBAAA,CAGD,kCACC,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,mBAAA,CACA,+BAAA,CAEA,iDACC,gBAAA,CAIF,gCACC,cAAA,CACA,eAAA,CACA,4BAAA,CAEA,6CACC,gBAAA,CAGD,8CACC,aAAA,CACA,kCAAA,CAEA,oDACC,0BAAA,CAIA,gEACC,YAAA,CAKH,8CACC,aAAA,CACA,kCAAA,CAEA,oDACC,0BAAA,CAIA,gEACC,YAAA,CAMF,8CACC,YAAA,CACA,sBAAA,CACA,kBAAA,CAMF,uCACC,mBAAA,CACA,+BAAA,CACA,kBAAA,CAGD,6CACC,eAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CAQF,+BACC,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,mBAAA,CAEA,oCACC,kBAAA,CAIF,gCACC,kBAAA,CAGD,gCACC,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,+BAAA,CAEA,0CACC,cAAA,CACA,gBAAA,CACA,eAAA,CACA,aAAA,CACA,iBAAA,CAGD,uCACC,cAAA,CACA,gBAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CAGD,wCACC,UAAA,CACA,wBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.proccesing-state {\r\n\topacity: 0.5;\r\n\tpointer-events: none;\r\n}\r\n\r\n.jfb-addons-page {\r\n\r\n\t&__inner {\r\n\t\tpadding: 30px;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\r\n\t&__header-controls {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-end;\r\n\t\talign-items: center;\r\n\t\tpadding-bottom: 15px;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t> .cx-vui-button {\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-button {\r\n\t\tfont-size: 13px;\r\n\t\tfont-weight: 400;\r\n\t\tbackground-color: transparent;\r\n\r\n\t\t.button-icon {\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\r\n\t\t&--style-accent {\r\n\t\t\tcolor: #007cba;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #007cba12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #007cba;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--style-danger {\r\n\t\t\tcolor: #d6336c;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #d6336c12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #d6336c;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\t> span {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-popup {\r\n\t\t&__header {\r\n\t\t\tpadding-bottom: 15px;\r\n\t\t\tborder-bottom: 1px solid #DCDCDD;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t}\r\n\r\n\t\t&__header-title {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 36px;\r\n\t\t\tcolor: #23282D;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-popup {\r\n\r\n\t}\r\n\r\n\t&__license-form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: stretch;\r\n\r\n\t\t> span {\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-input {\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.go-pro-banner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tpadding: 24px 0;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t&__subtitle {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #007CBA;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t}\r\n\r\n\t\t&__title {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #23282D;\r\n\t\t\tmargin-bottom: 20px;\r\n\t\t}\r\n\r\n\t\t&__button {\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #007CBA;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],sourceRoot:""}]);const r=s},9002:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});var a=e(994),i=e.n(a),o=e(3476),s=e.n(o)()(i());s.push([n.id,".jfb-addons{margin-bottom:50px}.jfb-addons:last-child{margin-bottom:0}.jfb-addons a{color:#007cba}.jfb-addons__header{margin-bottom:20px}.jfb-addons__list{display:grid;grid-template-columns:repeat(4, 1fr);gap:40px}@media(max-width: 1140px){.jfb-addons__list{grid-template-columns:repeat(2, 1fr)}}.jfb-addons__item{transition:box-shadow .3s ease-out;border-radius:10px}.jfb-addons__item:hover{box-shadow:0px 4px 28px rgba(15,23,42,.1)}.jfb-addons__item.activated .jfb-addons__item-info{background-color:#fff}.jfb-addons__item.update-avaliable .jfb-addons__item-name .version{background-color:#d6336c}.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version{color:#fff;background-color:#46b450;padding:2px 8px;border-radius:4px}.jfb-addons__item-inner{display:flex;flex-direction:column;align-items:stretch;height:100%}.jfb-addons__item-thumb{border-radius:10px 10px 0 0;line-height:0;overflow:hidden;position:relative}.jfb-addons__item-thumb .pro-badge{position:absolute;top:12px;left:12px}.jfb-addons__item-thumb img{width:100%;height:auto}.jfb-addons__item-info{display:flex;flex-direction:column;align-items:stretch;flex:1 1 auto;padding:20px;border-radius:0 0 10px 10px;border-width:0 1px 1px 1px;border-color:#dcdcdd;border-style:solid;background-color:#fff}.jfb-addons__item-name{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.jfb-addons__item-name .label{font-size:20px;font-weight:700;line-height:1.25}.jfb-addons__item-name .version{padding:1px 8px;border-radius:4px;color:#fff;background-color:#46b450;margin-left:10px}.jfb-addons__item-update{color:#7b7e81;margin-bottom:10px}.jfb-addons__item-license{margin-bottom:10px;color:#7b7e81}.jfb-addons__item-license .cx-vui-button{margin-left:3px}.jfb-addons__item-desc{flex:1 1 auto}.jfb-addons__item-desc a{text-decoration:none}.jfb-addons__item-actions{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;margin-top:20px}.jfb-addons__item-actions:empty{display:none}.jfb-addons__item-actions .cx-vui-button{margin-right:20px}","",{version:3,sources:["webpack://./admin/pages/jfb-addons/components/AddonItem.vue"],names:[],mappings:"AAqRA,YACC,kBAAA,CAEA,uBACC,eAAA,CAGD,cACC,aAAA,CAGD,oBACC,kBAAA,CAGD,kBACC,YAAA,CACA,oCAAA,CACA,QAAA,CAEA,0BALD,kBAME,oCAAA,CAAA,CAIF,kBACC,kCAAA,CACA,kBAAA,CAEA,wBACC,yCAAA,CAIA,mDACC,qBAAA,CAMA,mEACC,wBAAA,CAID,4EACC,UAAA,CACA,wBAAA,CACA,eAAA,CACA,iBAAA,CAMJ,wBACC,YAAA,CACA,qBAAA,CACA,mBAAA,CACA,WAAA,CAGD,wBACC,2BAAA,CACA,aAAA,CACA,eAAA,CACA,iBAAA,CAEA,mCACC,iBAAA,CACA,QAAA,CACA,SAAA,CAGD,4BACC,UAAA,CACA,WAAA,CAIF,uBACC,YAAA,CACA,qBAAA,CACA,mBAAA,CACA,aAAA,CACA,YAAA,CACA,2BAAA,CACA,0BAAA,CACA,oBAAA,CACA,kBAAA,CACA,qBAAA,CAGD,uBACC,YAAA,CACA,6BAAA,CACA,sBAAA,CACA,kBAAA,CAEA,8BACC,cAAA,CACA,eAAA,CACA,gBAAA,CAGD,gCACC,eAAA,CACA,iBAAA,CACA,UAAA,CACA,wBAAA,CACA,gBAAA,CAIF,yBACC,aAAA,CACA,kBAAA,CAGD,0BACC,kBAAA,CACA,aAAA,CAEA,yCACC,eAAA,CAIF,uBACC,aAAA,CAEA,yBACC,oBAAA,CAIF,0BACC,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CAEA,gCACC,YAAA,CAGD,yCACC,iBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-addons {\r\n\tmargin-bottom: 50px;\r\n\r\n\t&:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: #007cba;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\tgap: 40px;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t}\r\n\t}\r\n\r\n\t&__item {\r\n\t\ttransition: box-shadow .3s ease-out;\r\n\t\tborder-radius: 10px;\r\n\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\r\n\t\t}\r\n\r\n\t\t&.activated {\r\n\t\t\t.jfb-addons__item-info {\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.update-avaliable {\r\n\t\t\t.jfb-addons__item-name {\r\n\t\t\t\t.version {\r\n\t\t\t\t\tbackground-color: #D6336C;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.jfb-addons__item-update {\r\n\t\t\t\t.latest-version {\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tbackground-color: #46B450;\r\n\t\t\t\t\tpadding: 2px 8px;\r\n\t\t\t\t\tborder-radius: 4px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-inner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__item-thumb {\r\n\t\tborder-radius: 10px 10px 0 0;\r\n\t\tline-height: 0;\r\n\t\toverflow: hidden;\r\n\t\tposition: relative;\r\n\r\n\t\t.pro-badge {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 12px;\r\n\t\t\tleft: 12px;\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-info {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\tflex: 1 1 auto;\r\n\t\tpadding: 20px;\r\n\t\tborder-radius: 0 0 10px 10px;\r\n\t\tborder-width: 0 1px 1px 1px;\r\n\t\tborder-color: #DCDCDD;\r\n\t\tborder-style: solid;\r\n\t\tbackground-color: white;\r\n\t}\r\n\r\n\t&__item-name {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-bottom: 10px;\r\n\r\n\t\t.label {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.25;\r\n\t\t}\r\n\r\n\t\t.version {\r\n\t\t\tpadding: 1px 8px;\r\n\t\t\tborder-radius: 4px;\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #46B450;\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-update {\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t&__item-license {\r\n\t\tmargin-bottom: 10px;\r\n\t\tcolor: #7b7e81;\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-left: 3px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-desc {\r\n\t\tflex: 1 1 auto;\r\n\r\n\t\ta {\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-actions {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: 20px;\r\n\r\n\t\t&:empty {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-right: 20px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n"],sourceRoot:""}]);const r=s},3476:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,a){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var r=0;r<n.length;r++){var c=[].concat(n[r]);a&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},994:n=>{"use strict";function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}n.exports=function(n){var e,a,i=(a=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,t){var e=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=e){var a,i,o=[],s=!0,r=!1;try{for(e=e.call(n);!(s=(a=e.next()).done)&&(o.push(a.value),!t||o.length!==t);s=!0);}catch(n){r=!0,i=n}finally{try{s||null==e.return||e.return()}finally{if(r)throw i}}return o}}(e,a)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var a=Object.prototype.toString.call(n).slice(8,-1);return"Object"===a&&n.constructor&&(a=n.constructor.name),"Map"===a||"Set"===a?Array.from(n):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(n,e):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],s=i[3];if(!s)return o;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),d="/*# ".concat(c," */"),l=s.sources.map((function(n){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(n," */")}));return[o].concat(l).concat([d]).join("\n")}return[o].join("\n")}},1953:(n,t,e)=>{var a=e(3324);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals),(0,e(9441).Z)("725dd87a",a,!1,{})},1213:(n,t,e)=>{var a=e(9002);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals),(0,e(9441).Z)("e6fbf942",a,!1,{})},9441:(n,t,e)=>{"use strict";function a(n,t){for(var e=[],a={},i=0;i<t.length;i++){var o=t[i],s=o[0],r={id:n+":"+i,css:o[1],media:o[2],sourceMap:o[3]};a[s]?a[s].parts.push(r):e.push(a[s]={id:s,parts:[r]})}return e}e.d(t,{Z:()=>C});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,d=!1,l=function(){},A=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function C(n,t,e,i){d=e,A=i||{};var s=a(n,t);return f(s),function(t){for(var e=[],i=0;i<s.length;i++){var r=s[i];(c=o[r.id]).refs--,e.push(c)}for(t?f(s=a(n,t)):s=[],i=0;i<e.length;i++){var c;if(0===(c=e[i]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete o[c.id]}}}}function f(n){for(var t=0;t<n.length;t++){var e=n[t],a=o[e.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](e.parts[i]);for(;i<e.parts.length;i++)a.parts.push(g(e.parts[i]));a.parts.length>e.parts.length&&(a.parts.length=e.parts.length)}else{var s=[];for(i=0;i<e.parts.length;i++)s.push(g(e.parts[i]));o[e.id]={id:e.id,refs:1,parts:s}}}}function b(){var n=document.createElement("style");return n.type="text/css",s.appendChild(n),n}function g(n){var t,e,a=document.querySelector("style["+u+'~="'+n.id+'"]');if(a){if(d)return l;a.parentNode.removeChild(a)}if(p){var i=c++;a=r||(r=b()),t=m.bind(null,a,i,!1),e=m.bind(null,a,i,!0)}else a=b(),t=h.bind(null,a),e=function(){a.parentNode.removeChild(a)};return t(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap)return;t(n=a)}else e()}}var v,_=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function m(n,t,e,a){var i=e?"":a.css;if(n.styleSheet)n.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(o,s[t]):n.appendChild(o)}}function h(n,t){var e=t.css,a=t.media,i=t.sourceMap;if(a&&n.setAttribute("media",a),A.ssrId&&n.setAttribute(u,t.id),i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},t={};function e(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return n[a](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{"use strict";var n=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"jfb-addons-page wrap",class:{"proccesing-state":n.proccesingState}},[e("h1",{staticClass:"cs-vui-title"},[n._v(n._s("JetFormBuilder Addons"))]),n._v(" "),e("div",{staticClass:"jfb-addons-page__inner cx-vui-panel"},[e("div",{staticClass:"jfb-addons-page__header"},[n.isLicenseMode?e("div",{staticClass:"jfb-addons-page__header-controls"},[e("cx-vui-button",{attrs:{"button-style":"accent",size:"mini",loading:n.checkUpdatesProcessed},on:{click:n.checkPluginsUpdate}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("svg",{staticClass:"button-icon",attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11.7085 2.29171C10.5001 1.08337 8.8418 0.333374 7.00013 0.333374C3.3168 0.333374 0.341797 3.31671 0.341797 7.00004C0.341797 10.6834 3.3168 13.6667 7.00013 13.6667C10.1085 13.6667 12.7001 11.5417 13.4418 8.66671H11.7085C11.0251 10.6084 9.17513 12 7.00013 12C4.2418 12 2.00013 9.75837 2.00013 7.00004C2.00013 4.24171 4.2418 2.00004 7.00013 2.00004C8.38346 2.00004 9.6168 2.57504 10.5168 3.48337L7.83346 6.16671H13.6668V0.333374L11.7085 2.29171Z",fill:"#007CBA"}})]),n._v(" "),e("span",[n._v("Check For Updates")])])]),n._v(" "),e("cx-vui-button",{class:[n.isLicenseActivated?"cx-vui-button--style-danger":"cx-vui-button--style-accent"],attrs:{size:"mini"},on:{click:n.showLicensePopup}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("svg",{staticClass:"button-icon",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.4985 0H12.4897C12.4166 0 12.3487 0.0156709 12.286 0.0470127C12.2338 0.0679073 12.1867 0.104473 12.145 0.156709L5.7669 6.47209C5.62063 6.44074 5.46392 6.41463 5.29677 6.39373C5.12961 6.37284 4.96768 6.36239 4.81097 6.36239C4.16324 6.36239 3.54685 6.48776 2.9618 6.73849C2.37675 6.97878 1.85961 7.32354 1.41038 7.77277C0.961149 8.222 0.611166 8.73914 0.360431 9.32419C0.120144 9.90924 0 10.5309 0 11.189C0 11.8368 0.120144 12.4532 0.360431 13.0382C0.611166 13.6232 0.961149 14.1404 1.41038 14.5896C1.85961 15.0389 2.37675 15.3836 2.9618 15.6239C3.54685 15.8746 4.16324 16 4.81097 16C5.46915 16 6.09076 15.8746 6.67581 15.6239C7.26086 15.3836 7.778 15.0389 8.22723 14.5896C8.80183 14.015 9.19882 13.3464 9.41822 12.5837C9.64806 11.8211 9.68462 11.0375 9.52791 10.2331L10.8913 8.86974C10.9331 8.82795 10.9644 8.78093 10.9853 8.7287C11.0167 8.66601 11.0323 8.59811 11.0323 8.52498V7.02057H12.5367C12.6934 7.02057 12.8136 6.97356 12.8972 6.87953C12.9912 6.7855 13.0382 6.66536 13.0382 6.5191V5.01469H14.5426C14.6157 5.01469 14.6784 5.00424 14.7307 4.98335C14.7933 4.95201 14.8508 4.91022 14.903 4.85798L15.906 3.85504C15.9269 3.81326 15.9478 3.76624 15.9687 3.71401C15.9896 3.65132 16 3.58342 16 3.51028V0.501469C16 0.355207 15.953 0.235064 15.859 0.141038C15.7649 0.0470127 15.6448 0 15.4985 0ZM4.96768 12.7875C4.79008 12.9651 4.5968 13.0957 4.38786 13.1792C4.18936 13.2524 3.96474 13.2889 3.71401 13.2889C3.46327 13.2889 3.23343 13.2419 3.02449 13.1479C2.82599 13.0539 2.63794 12.9337 2.46033 12.7875C2.28273 12.6099 2.15214 12.4218 2.06856 12.2233C1.99543 12.0144 1.95886 11.7845 1.95886 11.5338C1.95886 11.2831 2.00588 11.0584 2.0999 10.8599C2.19393 10.651 2.31407 10.4577 2.46033 10.2801C2.7842 9.95625 3.19164 9.79432 3.68266 9.79432C4.18413 9.79432 4.5968 9.95625 4.92067 10.2801C5.09827 10.4577 5.22364 10.651 5.29677 10.8599C5.38035 11.0584 5.42214 11.2831 5.42214 11.5338C5.42214 11.7845 5.38035 12.0144 5.29677 12.2233C5.22364 12.4218 5.11394 12.6099 4.96768 12.7875Z",fill:"#D3D3D3"}})]),n._v(" "),n.isLicenseActivated?n._e():e("span",[n._v("Activate License")]),n._v(" "),n.isLicenseActivated?e("span",[n._v("Deactivate License")]):n._e()])])],1):n._e(),n._v(" "),n.isLicenseActivated?n._e():e("div",{staticClass:"go-pro-banner"},[e("div",{staticClass:"go-pro-banner__subtitle"},[n._v("Features & Integrations ")]),n._v(" "),e("div",{staticClass:"go-pro-banner__title"},[n._v("Extend functionality with PRO Addons")]),n._v(" "),e("cx-vui-button",{staticClass:"go-pro-banner__button",attrs:{"button-style":"default",size:"mini",url:n.goProLink,"tag-name":"a",target:"_blank"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("span",[n._v("Go Pro")])])])],1)]),n._v(" "),0!==Object.keys(n.installedAddonList).length?e("div",{staticClass:"jfb-addons"},[n._m(0),n._v(" "),e("div",{staticClass:"jfb-addons__list"},n._l(n.installedAddonList,(function(n,t){return e("AddonItem",{key:t,attrs:{"addon-data":n}})})),1)]):n._e(),n._v(" "),0!==Object.keys(n.availableAddonList).length?e("div",{staticClass:"jfb-addons"},[n._m(1),n._v(" "),e("div",{staticClass:"jfb-addons__list"},n._l(n.availableAddonList,(function(n,t){return e("AddonItem",{key:t,attrs:{"addon-data":n}})})),1)]):n._e()]),n._v(" "),e("cx-vui-popup",{staticClass:"jfb-addons-page__license-popup",attrs:{footer:!1,"body-width":"540px"},model:{value:n.licensePopupVisible,callback:function(t){n.licensePopupVisible=t},expression:"licensePopupVisible"}},[e("div",{staticClass:"cx-vui-popup__header-title",attrs:{slot:"title"},slot:"title"},[n.isLicenseActivated?n._e():e("span",[n._v("Activate License")]),n._v(" "),n.isLicenseActivated?e("span",[n._v("Deactivate License")]):n._e()]),n._v(" "),e("div",{staticClass:"jfb-addons-page__license-form",attrs:{slot:"content"},slot:"content"},[n.isLicenseActivated?n._e():e("span",[n._v("Activate license for automatic updates and awesome support")]),n._v(" "),n.isLicenseActivated?e("span",[n._v("By deactivating the license you will not be able to update the addons")]):n._e(),n._v(" "),e("cx-vui-input",{staticClass:"jfb-addons-page__license-input",attrs:{size:"fullwidth",type:"password",autofocus:!0,"prevent-wrap":!0,placeholder:"Just paste it here"},model:{value:n.licenseKey,callback:function(t){n.licenseKey=t},expression:"licenseKey"}}),n._v(" "),e("cx-vui-button",{staticClass:"jfb-addons-page__license-action",attrs:{"button-style":"accent",size:"mini",loading:n.licenseProccesingState},on:{click:n.licenseAction}},[e("span",{attrs:{slot:"label"},slot:"label"},[n.isLicenseActivated?n._e():e("span",[n._v("Activate")]),n._v(" "),n.isLicenseActivated?e("span",[n._v("Deactivate")]):n._e()])])],1)])],1)};n._withStripped=!0;var t=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"jfb-addons__item",class:{activated:n.addonData.isActivated,"update-avaliable":n.updateAvaliable}},[e("div",{staticClass:"jfb-addons__item-inner",class:{"proccesing-state":n.proccesingState}},[e("div",{staticClass:"jfb-addons__item-thumb"},[n.addonData.isInstalled?n._e():e("div",{staticClass:"pro-badge"},[e("svg",{attrs:{width:"40",height:"20",viewBox:"0 0 40 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"40",height:"20",rx:"4",fill:"#EE7B16"}}),n._v(" "),e("path",{attrs:{d:"M10.625 10.8301V14H9.14258V5.46875H12.4062C13.3594 5.46875 14.1152 5.7168 14.6738 6.21289C15.2363 6.70898 15.5176 7.36523 15.5176 8.18164C15.5176 9.01758 15.2422 9.66797 14.6914 10.1328C14.1445 10.5977 13.377 10.8301 12.3887 10.8301H10.625ZM10.625 9.64062H12.4062C12.9336 9.64062 13.3359 9.51758 13.6133 9.27148C13.8906 9.02148 14.0293 8.66211 14.0293 8.19336C14.0293 7.73242 13.8887 7.36523 13.6074 7.0918C13.3262 6.81445 12.9395 6.67188 12.4473 6.66406H10.625V9.64062ZM19.9531 10.7129H18.3008V14H16.8184V5.46875H19.8184C20.8027 5.46875 21.5625 5.68945 22.0977 6.13086C22.6328 6.57227 22.9004 7.21094 22.9004 8.04688C22.9004 8.61719 22.7617 9.0957 22.4844 9.48242C22.2109 9.86523 21.8281 10.1602 21.3359 10.3672L23.252 13.9238V14H21.6641L19.9531 10.7129ZM18.3008 9.52344H19.8242C20.3242 9.52344 20.7148 9.39844 20.9961 9.14844C21.2773 8.89453 21.418 8.54883 21.418 8.11133C21.418 7.6543 21.2871 7.30078 21.0254 7.05078C20.7676 6.80078 20.3809 6.67188 19.8652 6.66406H18.3008V9.52344ZM31.1152 9.95703C31.1152 10.793 30.9707 11.5273 30.6816 12.1602C30.3926 12.7891 29.9785 13.2734 29.4395 13.6133C28.9043 13.9492 28.2871 14.1172 27.5879 14.1172C26.8965 14.1172 26.2793 13.9492 25.7363 13.6133C25.1973 13.2734 24.7793 12.791 24.4824 12.166C24.1895 11.541 24.041 10.8203 24.0371 10.0039V9.52344C24.0371 8.69141 24.1836 7.95703 24.4766 7.32031C24.7734 6.68359 25.1895 6.19727 25.7246 5.86133C26.2637 5.52148 26.8809 5.35156 27.5762 5.35156C28.2715 5.35156 28.8867 5.51953 29.4219 5.85547C29.9609 6.1875 30.377 6.66797 30.6699 7.29688C30.9629 7.92188 31.1113 8.65039 31.1152 9.48242V9.95703ZM29.6328 9.51172C29.6328 8.56641 29.4531 7.8418 29.0938 7.33789C28.7383 6.83398 28.2324 6.58203 27.5762 6.58203C26.9355 6.58203 26.4336 6.83398 26.0703 7.33789C25.7109 7.83789 25.5273 8.54688 25.5195 9.46484V9.95703C25.5195 10.8945 25.7012 11.6191 26.0645 12.1309C26.4316 12.6426 26.9395 12.8984 27.5879 12.8984C28.2441 12.8984 28.748 12.6484 29.0996 12.1484C29.4551 11.6484 29.6328 10.918 29.6328 9.95703V9.51172Z",fill:"white"}})])]),n._v(" "),e("img",{attrs:{src:n.addonData.thumb,alt:""}})]),n._v(" "),e("div",{staticClass:"jfb-addons__item-info"},[e("div",{staticClass:"jfb-addons__item-name"},[e("span",{staticClass:"label"},[n._v(n._s(n.addonData.name))]),n._v(" "),e("span",{staticClass:"version"},[n._v(n._s(n.addonData.currentVersion))])]),n._v(" "),e("div",{staticClass:"jfb-addons__item-update"},[n.updateAvaliable?n._e():e("div",[n._v("Your plugin is up to date")]),n._v(" "),n.updateAvaliable?e("div",[n._v("\n\t\t\t\t\tVersion "),e("span",{staticClass:"latest-version"},[n._v(n._s(n.addonData.version))]),n._v(" available\n\t\t\t\t\t"),!n.activateLicenceActionAvaliable&&n.isLicenseMode?e("cx-vui-button",{attrs:{"button-style":"link-accent",size:"link",loading:n.updatePluginProcessed},on:{click:n.updatePlugin}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("span",[n._v("Update Now")])])]):n._e()],1):n._e()]),n._v(" "),n.activateLicenceActionAvaliable?e("div",{staticClass:"jfb-addons__item-license"},[e("span",[n._v("License not activated")]),n._v(" "),e("cx-vui-button",{attrs:{"button-style":"link-accent",size:"link"},on:{click:n.activateLicense}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("span",[n._v("Activate Now")])])])],1):n._e(),n._v(" "),e("div",{staticClass:"jfb-addons__item-desc"},[e("span",{domProps:{innerHTML:n._s(n.addonData.desc)}}),n._v(" "),e("a",{attrs:{href:n.learnMoreUrl,target:"_blank"}},[n._v("Learn More")])]),n._v(" "),e("div",{staticClass:"jfb-addons__item-actions"},[n.installActionAvaliable?e("cx-vui-button",{attrs:{"button-style":"link-accent",size:"link",loading:n.actionPluginProcessed},on:{click:n.installPlugin}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("span",[n._v("Install Addon")])])]):n._e(),n._v(" "),n.activateActionAvaliable?e("cx-vui-button",{attrs:{"button-style":"link-accent",size:"link",loading:n.actionPluginProcessed},on:{click:n.activatePlugin}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("span",[n._v("Activate Addon")])])]):n._e(),n._v(" "),n.deactivateActionAvaliable?e("cx-vui-button",{attrs:{"button-style":"link-error",size:"link",loading:n.actionPluginProcessed},on:{click:n.deactivatePlugin}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("span",[n._v("Deactivate Addon")])])]):n._e()],1)])])])};t._withStripped=!0;const a={name:"addon-item",props:{addonData:Object},data:function(){return{actionPlugin:!1,actionPluginRequest:null,actionPluginProcessed:!1,updatePluginProcessed:!1}},computed:{classList:function(){return["jfb-addons__item",!!this.updateAvaliable&&"update-avaliable",!!this.activateAvaliable&&"activate-avaliable"]},learnMoreAvaliable:function(){return!this.$parent.isLicenseActivated},activateLicenceActionAvaliable:function(){return!(this.$parent.isLicenseActivated||!this.$parent.isLicenseMode)},installActionAvaliable:function(){return!(this.addonData.isInstalled||!this.$parent.isLicenseActivated)},activateActionAvaliable:function(){return!(!this.addonData.isInstalled||this.addonData.isActivated)},deactivateActionAvaliable:function(){return!(!this.addonData.isInstalled||!this.addonData.isActivated)},updateAvaliable:function(){return!!this.addonData.updateAvaliable},isLicenseMode:function(){return this.$parent.isLicenseMode},proccesingState:function(){return this.actionPluginProcessed||this.updatePluginProcessed},learnMoreUrl:function(){var n=this.addonData.demo,t=this.$parent.getUtmParamsString({utm_source:"dashboard/jet-form-builder-addons-page",utm_medium:"crocoblock-license/".concat(this.$parent.themeInfo.theme),utm_campaign:"addon-learn-more"});return"".concat(n,"?").concat(t)}},methods:{activateLicense:function(){window.jfbEventBus.$emit("showLicensePopup")},installPlugin:function(){this.actionPlugin="install",this.pluginAction()},deactivatePlugin:function(){this.actionPlugin="deactivate",this.pluginAction()},activatePlugin:function(){this.actionPlugin="activate",this.pluginAction()},updatePlugin:function(){this.updateAvaliable&&(this.actionPlugin="update",this.pluginAction())},pluginAction:function(){var n=this;n.actionPluginRequest=jQuery.ajax({type:"POST",url:window.JetFBPageConfig.ajaxUrl,dataType:"json",data:{action:"jfb_addon_".concat(n.actionPlugin,"_action"),data:{plugin:n.addonData.slug}},beforeSend:function(t,e){switch(null!==n.actionPluginRequest&&n.actionPluginRequest.abort(),n.actionPlugin){case"install":case"activate":case"deactivate":n.actionPluginProcessed=!0;break;case"update":n.updatePluginProcessed=!0}},success:function(t,e,a){switch(n.actionPlugin){case"install":case"activate":case"deactivate":n.actionPluginProcessed=!1;break;case"update":n.updatePluginProcessed=!1}t.success?(n.$CXNotice.add({message:t.message,type:"success",duration:4e3}),window.jfbEventBus.$emit("updateAddonData",{slug:n.addonData.slug,addonData:t.data,action:n.actionPlugin})):n.$CXNotice.add({message:t.message,type:"error",duration:4e3})}})}}};function i(n,t,e,a,i,o,s,r){var c,d="function"==typeof n?n.options:n;if(t&&(d.render=t,d.staticRenderFns=e,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),s?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),i&&i.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(s)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(n,t){return c.call(t),l(n,t)}}else{var A=d.beforeCreate;d.beforeCreate=A?[].concat(A,c):[c]}return{exports:n,options:d}}e(1213);var o=i(a,t,[],!1,null,null,null);o.options.__file="admin/pages/jfb-addons/components/AddonItem.vue";const s=o.exports;var r=wp.hooks;r.applyFilters,r.doAction,window.jfbEventBus=new Vue;const c={name:"jfb-addons",components:{AddonItem:s},data:function(){return{allAddons:window.JetFBPageConfig.allAddons||{},licenseList:window.JetFBPageConfig.licenseList||[],licenseKey:window.JetFBPageConfig.licenseKey||"",themeInfo:window.JetFBPageConfig.themeInfo||!1,miscInfo:window.JetFBPageConfig.miscInfo||!1,licenseActivated:!1,licensePopupVisible:!1,licenseProccesingState:!1,licenseAjaxAction:null,checkUpdatesAction:null,checkUpdatesProcessed:!1,proccesingState:!1}},mounted:function(){window.jfbEventBus.$on("updateAddonData",this.updateAddonData),window.jfbEventBus.$on("showLicensePopup",this.showLicensePopup)},computed:{isLicenseMode:function(){return""!==window.JetFBPageConfig.licenseMode},isLicenseActivated:function(){return 0!==this.licenseList.length},licenseActionType:function(){return this.isLicenseActivated?"deactivate_license":"activate_license"},installedAddonList:function(){var n={};for(var t in this.allAddons)this.allAddons[t].isInstalled&&(n[t]=this.allAddons[t]);return n},availableAddonList:function(){var n={};for(var t in this.allAddons)this.allAddons[t].isInstalled||(n[t]=this.allAddons[t]);return n},goProLink:function(){var n=this.miscInfo.pricingPageUrl,t=this.getUtmParamsString({utm_source:"dashboard/jet-form-builder-addons-page",utm_medium:"crocoblock-license/".concat(this.themeInfo.theme),utm_campaign:"go-pro-button"});return"".concat(n,"?").concat(t)}},methods:{showLicensePopup:function(){this.licensePopupVisible=!0},updateAddonData:function(n){var t=n.slug,e=n.addonData,a=n.action;this.allAddons[t]=Object.assign({},this.allAddons[t],e),["activate","deactivate","update"].includes(a)&&(this.proccesingState=!0,setTimeout((function(){window.location.reload()}),1e3))},licenseAction:function(){var n=this;if(""===this.licenseKey)return n.$CXNotice.add({message:"License key is missing",type:"error",duration:4e3}),!1;this.licenseProccesingState=!0,n.licenseAjaxAction=jQuery.ajax({type:"POST",url:window.JetFBPageConfig.ajaxUrl,dataType:"json",data:{action:"jfb_license_action",data:{license:n.licenseKey,action:n.licenseActionType}},beforeSend:function(t,e){null!==n.licenseAjaxAction&&n.licenseAjaxAction.abort()},success:function(t,e,a){if(n.licenseProccesingState=!1,t.success){n.$CXNotice.add({message:t.message,type:"success",duration:4e3});var i=t.data;switch(i.license_key=n.licenseKey,n.licenseActionType){case"activate_license":n.licenseList.push(i);break;case"deactivate_license":n.licenseList=n.licenseList.filter((function(t){return n.licenseKey!==t.license_key})),n.licenseKey=""}n.licensePopupVisible=!1}else n.$CXNotice.add({message:t.message,type:"error",duration:4e3})}})},checkPluginsUpdate:function(){var n=this;n.checkUpdatesAction=jQuery.ajax({type:"POST",url:window.JetFBPageConfig.ajaxUrl,dataType:"json",data:{action:"jfb_license_service_action",data:{action:"check-plugin-update"}},beforeSend:function(t,e){null!==n.checkUpdatesAction&&n.checkUpdatesAction.abort(),n.checkUpdatesProcessed=!0},success:function(t,e,a){n.checkUpdatesProcessed=!1,t.success?(n.$CXNotice.add({message:t.message,type:"success",duration:4e3}),n.proccesingState=!0,setTimeout((function(){window.location.reload()}),1e3)):n.$CXNotice.add({message:t.message,type:"error",duration:4e3})}})},addLicense:function(n){this.licenseList.push(n),self.proccesingState=!0,setTimeout((function(){window.location.reload()}),3e3)},removeLicense:function(n){var t=!1;for(var e in this.licenseList)if(this.licenseList[e].licenseKey===n){t=e;break}t&&this.licenseList.splice(t,1),this.licensePopupVisible=!1,setTimeout((function(){window.location.reload()}),500)},getUtmParamsString:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1;return 0===Object.keys(n).length?t:t=Object.keys(n).map((function(t){return[t,n[t]].map(encodeURIComponent).join("=")})).join("&")}}};e(1953);var d=i(c,n,[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"jfb-addons__header"},[e("span",{staticClass:"cx-vui-subtitle"},[n._v("Your Installed Addons")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"jfb-addons__header"},[e("span",{staticClass:"cx-vui-subtitle"},[n._v("All Available Addons")])])}],!1,null,null,null);d.options.__file="admin/pages/jfb-addons/AddonsPage.vue";const l=d.exports;(0,window.JetFBActions.renderCurrentPage)(l)})()})();
//# sourceMappingURL=jfb-addons.js.map