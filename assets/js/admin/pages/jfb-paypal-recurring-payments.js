/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@innologica/vue-dropdown-menu/dist/vue-dropdown-menu.umd.min.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@innologica/vue-dropdown-menu/dist/vue-dropdown-menu.umd.min.js ***!
  \***************************************************************************************/
/***/ (function(module) {

(function(t,e){ true?module.exports=e():0})("undefined"!==typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),i=n("8e60"),u=n("63b6"),c=n("9138"),f=n("ebfd").KEY,a=n("294c"),s=n("dbdb"),p=n("45f2"),l=n("62a0"),d=n("5168"),v=n("ccb9"),h=n("6718"),y=n("47ee"),b=n("9003"),m=n("e4ae"),g=n("f772"),x=n("241e"),w=n("36c3"),O=n("1bc3"),_=n("aebd"),S=n("a159"),j=n("0395"),E=n("bf0b"),T=n("9aa9"),P=n("d9f6"),M=n("c3a1"),N=E.f,I=P.f,L=j.f,k=r.Symbol,C=r.JSON,F=C&&C.stringify,A="prototype",R=d("_hidden"),$=d("toPrimitive"),V={}.propertyIsEnumerable,G=s("symbol-registry"),D=s("symbols"),B=s("op-symbols"),W=Object[A],U="function"==typeof k&&!!T.f,H=r.QObject,z=!H||!H[A]||!H[A].findChild,J=i&&a(function(){return 7!=S(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=N(W,e);r&&delete W[e],I(t,e,n),r&&t!==W&&I(W,e,r)}:I,X=function(t){var e=D[t]=S(k[A]);return e._k=t,e},Y=U&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},K=function(t,e,n){return t===W&&K(B,e,n),m(t),e=O(e,!0),m(n),o(D,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=S(n,{enumerable:_(0,!1)})):(o(t,R)||I(t,R,_(1,{})),t[R][e]=!0),J(t,e,n)):I(t,e,n)},q=function(t,e){m(t);var n,r=y(e=w(e)),o=0,i=r.length;while(i>o)K(t,n=r[o++],e[n]);return t},Q=function(t,e){return void 0===e?S(t):q(S(t),e)},Z=function(t){var e=V.call(this,t=O(t,!0));return!(this===W&&o(D,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,R)&&this[R][t])||e)},tt=function(t,e){if(t=w(t),e=O(e,!0),t!==W||!o(D,e)||o(B,e)){var n=N(t,e);return!n||!o(D,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},et=function(t){var e,n=L(w(t)),r=[],i=0;while(n.length>i)o(D,e=n[i++])||e==R||e==f||r.push(e);return r},nt=function(t){var e,n=t===W,r=L(n?B:w(t)),i=[],u=0;while(r.length>u)!o(D,e=r[u++])||n&&!o(W,e)||i.push(D[e]);return i};U||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===W&&e.call(B,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),J(this,t,_(1,n))};return i&&z&&J(W,t,{configurable:!0,set:e}),X(t)},c(k[A],"toString",function(){return this._k}),E.f=tt,P.f=K,n("6abf").f=j.f=et,n("355d").f=Z,T.f=nt,i&&!n("b8e3")&&c(W,"propertyIsEnumerable",Z,!0),v.f=function(t){return X(d(t))}),u(u.G+u.W+u.F*!U,{Symbol:k});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)d(rt[ot++]);for(var it=M(d.store),ut=0;it.length>ut;)h(it[ut++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=k(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!U,"Object",{create:Q,defineProperty:K,defineProperties:q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ct=a(function(){T.f(1)});u(u.S+u.F*ct,"Object",{getOwnPropertySymbols:function(t){return T.f(x(t))}}),C&&u(u.S+u.F*(!U||a(function(){var t=k();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Y(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,F.apply(C,r)}}),k[A][$]||n("35e8")(k[A],$,k[A].valueOf),p(k,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),u=n("6a99"),c=n("69a8"),f=n("c69a"),a=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?a:function(t,e){if(t=i(t),e=u(e,!0),f)try{return a(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,u=i(e),c=u.length,f=0;while(c>f)r.f(t,n=u[f++],e[n]);return t}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),u=n("ca5a")("src"),c=n("fa5b"),f="toString",a=(""+c).split(f);n("8378").inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var f="function"==typeof n;f&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(f&&(i(n,u)||o(n,u,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,f,function(){return"function"==typeof this&&this[u]||c.call(this)})},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),u=n("613b")("IE_PROTO"),c=function(){},f="prototype",a=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",u=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;while(r--)delete a[f][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[f]=r(t),n=new c,c[f]=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),o=n("63b6"),i=n("9138"),u=n("35e8"),c=n("481b"),f=n("8f60"),a=n("45f2"),s=n("53e2"),p=n("5168")("iterator"),l=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",h="values",y=function(){return this};t.exports=function(t,e,n,b,m,g,x){f(n,e,b);var w,O,_,S=function(t){if(!l&&t in P)return P[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",E=m==h,T=!1,P=t.prototype,M=P[p]||P[d]||m&&P[m],N=M||S(m),I=m?E?S("entries"):N:void 0,L="Array"==e&&P.entries||M;if(L&&(_=s(L.call(new t)),_!==Object.prototype&&_.next&&(a(_,j,!0),r||"function"==typeof _[p]||u(_,p,y))),E&&M&&M.name!==h&&(T=!0,N=function(){return M.call(this)}),r&&!x||!l&&!T&&P[p]||u(P,p,N),c[e]=N,c[j]=y,m)if(w={values:E?N:S(h),keys:g?N:S(v),entries:I},x)for(O in w)O in P||i(P,O,w[O]);else o(o.P+o.F*(l||T),e,w);return w}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var u,c=n(t),f=i.f,a=0;while(c.length>a)f.call(t,u=c[a++])&&e.push(u)}return e}},"481b":function(t,e){t.exports={}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"53e2":function(t,e,n){var r=n("07e3"),o=n("241e"),i=n("5559")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",u=o[i]||(o[i]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,u){var c,f=r(e),a=o(f.length),s=i(u,a);if(t&&n!=n){while(a>s)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}}},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),u=n("2aba"),c=n("9b43"),f="prototype",a=function(t,e,n){var s,p,l,d,v=t&a.F,h=t&a.G,y=t&a.S,b=t&a.P,m=t&a.B,g=h?r:y?r[e]||(r[e]={}):(r[e]||{})[f],x=h?o:o[e]||(o[e]={}),w=x[f]||(x[f]={});for(s in h&&(n=e),n)p=!v&&g&&void 0!==g[s],l=(p?g:n)[s],d=m&&p?c(l,r):b&&"function"==typeof l?c(Function.call,l):l,g&&u(g,s,l,t&a.U),x[s]!=l&&i(x,s,d),b&&w[s]!=l&&(w[s]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},"5d58":function(t,e,n){t.exports=n("d8d6")},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,u=e.constructor;return u!==n&&"function"==typeof u&&(i=u.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),u=n("35e8"),c=n("07e3"),f="prototype",a=function(t,e,n){var s,p,l,d=t&a.F,v=t&a.G,h=t&a.S,y=t&a.P,b=t&a.B,m=t&a.W,g=v?o:o[e]||(o[e]={}),x=g[f],w=v?r:h?r[e]:(r[e]||{})[f];for(s in v&&(n=e),n)p=!d&&w&&void 0!==w[s],p&&c(g,s)||(l=p?w[s]:n[s],g[s]=v&&"function"!=typeof w[s]?n[s]:b&&p?i(l,r):m&&w[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[f]=t[f],e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[s]=l,t&a.R&&x&&!x[s]&&u(x,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),u=n("ccb9"),c=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},"67bb":function(t,e,n){t.exports=n("f921")},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"69d3":function(t,e,n){n("6718")("asyncIterator")},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),o=n("35e8"),i=n("481b"),u=n("5168")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=r[a],p=s&&s.prototype;p&&!p[u]&&o(p,u,a),i[a]=i.Array}},"71c1":function(t,e,n){var r=n("3a38"),o=n("25eb");t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},"765d":function(t,e,n){n("6718")("observable")},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,u=i(e),c=u.length,f=0;while(c>f)r.f(t,n=u[f++],e[n]);return t}},8378:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},8436:function(t,e){t.exports=function(){}},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),u=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8f60":function(t,e,n){"use strict";var r=n("a159"),o=n("aebd"),i=n("45f2"),u={};n("35e8")(u,n("5168")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},9138:function(t,e,n){t.exports=n("35e8")},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),u=n("5559")("IE_PROTO"),c=function(){},f="prototype",a=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",u=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;while(r--)delete a[f][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[f]=r(t),n=new c,c[f]=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),i=n("79e5"),u=n("fdef"),c="["+u+"]",f="​",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),p=function(t,e,n){var o={},c=i(function(){return!!u[t]()||f[t]()!=f}),a=o[t]=c?e(l):u[t];n&&(o[n]=a),r(r.P+r.F*c,"String",o)},l=p.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(s,"")),t};t.exports=p},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),u=n("1bc3"),c=n("07e3"),f=n("794b"),a=Object.getOwnPropertyDescriptor;e.f=n("8e60")?a:function(t,e){if(t=i(t),e=u(e,!0),f)try{return a(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},c207:function(t,e){},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,u){var c,f=r(e),a=o(f.length),s=i(u,a);if(t&&n!=n){while(a>s)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}}},c367:function(t,e,n){"use strict";var r=n("8436"),o=n("50ed"),i=n("481b"),u=n("36c3");t.exports=n("30f1")(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("2d95"),u=n("5dbc"),c=n("6a99"),f=n("79e5"),a=n("9093").f,s=n("11e9").f,p=n("86cc").f,l=n("aa77").trim,d="Number",v=r[d],h=v,y=v.prototype,b=i(n("2aeb")(y))==d,m="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():l(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var u,f=e.slice(2),a=0,s=f.length;a<s;a++)if(u=f.charCodeAt(a),u<48||u>o)return NaN;return parseInt(f,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(b?f(function(){y.valueOf.call(n)}):i(n)!=d)?u(new h(g(e)),n,v):g(e)};for(var x,w=n("9e1e")?a(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;w.length>O;O++)o(h,x=w[O])&&!o(v,x)&&p(v,x,s(h,x));v.prototype=y,y.constructor=v,n("2aba")(r,d,v)}},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")(function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ccb9:function(t,e,n){e.f=n("5168")},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),u=n("613b")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);while(e.length>f)r(c,n=e[f++])&&(~i(a,n)||a.push(n));return a}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),u=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",u=o[i]||(o[i]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),u=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);while(e.length>f)r(c,n=e[f++])&&(~i(a,n)||a.push(n));return a}},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),u=n("d9f6").f,c=0,f=Object.isExtensible||function(){return!0},a=!n("294c")(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},p=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},l=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return a&&v.NEED&&f(t)&&!i(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:p,getWeak:l,onFreeze:d}},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{dropup:t.top},on:{mouseleave:t.mouseLeave,mouseover:t.mouseOver,mouseenter:t.mouseEnter,click:t.toggleMenu}},[t._t("default"),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],ref:"dropdown",staticClass:"dropdown-menu show",class:{"dropdown-menu-right":t.right},style:t.styles,on:{mouseleave:t.startTimer,mouseenter:t.stopTimer,click:function(t){t.stopPropagation()}}},[t._t("dropdown")],2)])],2)},i=[],u=n("5d58"),c=n.n(u),f=n("67bb"),a=n.n(f);function s(t){return s="function"===typeof a.a&&"symbol"===typeof c.a?function(t){return typeof t}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t},s(t)}function p(t){return p="function"===typeof a.a&&"symbol"===s(c.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":s(t)},p(t)}n("c5f6");var l={props:{value:Boolean,right:Boolean,hover:Boolean,hover_time:{type:Number,default:100},hover_timeout:{type:Number,default:500},styles:{type:Object,default:function(){return{}}},interactive:{type:Boolean,default:!1},transition:{type:String,default:""},closeOnClickOutside:{type:Boolean,default:!0}},data:function(){return{hovering:!1,top:!1}},destroyed:function(){document.body.removeEventListener("click",this.closeMenu)},methods:{mouseEnter:function(){var t=this;this.stopTimer(),this.hover&&this.hover_time>0&&!this.value&&(this.hoverOpenTimer=setTimeout(function(){t.$emit("input",!0),t.hovering=!0,setTimeout(function(){t.hovering=!1},t.hover_timeout)},this.hover_time)),this.hover&&!this.value&&0===this.hover_time&&(this.hovering=!0,setTimeout(function(){t.hovering=!1},this.hover_timeout),this.$emit("input",!0))},mouseLeave:function(){this.hoverTimer||this.startTimer(),this.hover_time>0&&this.hover&&clearTimeout(this.hoverOpenTimer)},mouseOver:function(){this.stopTimer()},closeMenu:function(t){t&&this.$el.contains(t.target)||this.value&&this.closeOnClickOutside&&this.$emit("input",!1)},toggleMenu:function(){this.hovering||this.value&&this.hover||this.$emit("input",!this.value)},stopTimer:function(){clearTimeout(this.hoverTimer),this.hoverTimer=null},startTimer:function(){this.interactive||(this.hoverTimer=setTimeout(this.closeMenu,this.hover_timeout))}},watch:{value:function(t){var e=this;if(t){var n=this;this.top=!1,this.$nextTick(function(){var t=n.$refs.dropdown.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight;e.top=t.bottom>r&&t.top>=t.height})}},interactive:{handler:function(t){"object"===("undefined"===typeof document?"undefined":p(document))&&(t?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu))},immediate:!0}}},d=l;function v(t,e,n,r,o,i,u,c){var f,a="function"===typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,e){return f.call(e),s(t,e)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:a}}var h=v(d,o,i,!1,null,null,null),y=h.exports,b=function(t){t.component("DropdownMenu",y)};"undefined"!==typeof window&&window.Vue&&b(window.Vue);e["default"]=y},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}})});
//# sourceMappingURL=vue-dropdown-menu.umd.min.js.map

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scss_admin_default_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../scss/admin/default.scss */ "../scss/admin/default.scss");
/* harmony import */ var _scss_admin_default_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_default_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paypal_subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../paypal/subscriber */ "./admin/paypal/subscriber/index.js");
/* harmony import */ var _paypal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../paypal/actions */ "./admin/paypal/actions/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.config.devtools = true;
var applyFilters = wp.hooks.applyFilters;
var _window$JetFBMixins = window.JetFBMixins,
    GetIncoming = _window$JetFBMixins.GetIncoming,
    i18n = _window$JetFBMixins.i18n;
var _window$JetFBComponen = window.JetFBComponents,
    EntriesTable = _window$JetFBComponen.EntriesTable,
    DetailsTableWithStore = _window$JetFBComponen.DetailsTableWithStore;
var columnsComponents = applyFilters('jet.fb.register.paypal.recurring-payments.columns', [_paypal_subscriber__WEBPACK_IMPORTED_MODULE_1__, _paypal_actions__WEBPACK_IMPORTED_MODULE_2__]);
window.jfbEventBus = window.jfbEventBus || new Vue();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'jfb-paypal-recurring-payments',
  components: {
    DetailsTableWithStore: DetailsTableWithStore,
    EntriesTable: EntriesTable
  },
  data: function data() {
    return {
      list: [],
      current: {},
      currentPayload: {},
      settings: {},
      actions: {},
      columnsComponents: columnsComponents,
      isShowPopup: false
    };
  },
  mixins: [GetIncoming, i18n],
  created: function created() {
    var _this$getIncoming = this.getIncoming(),
        _this$getIncoming$lis = _this$getIncoming.list,
        list = _this$getIncoming$lis === void 0 ? [] : _this$getIncoming$lis,
        _this$getIncoming$col = _this$getIncoming.columns,
        columns = _this$getIncoming$col === void 0 ? {} : _this$getIncoming$col,
        _this$getIncoming$act = _this$getIncoming.actions,
        actions = _this$getIncoming$act === void 0 ? {} : _this$getIncoming$act;

    this.list = JSON.parse(JSON.stringify(list));
    this.actions = JSON.parse(JSON.stringify(actions));
    this.$store.commit('setColumns', JSON.parse(JSON.stringify(columns)));
    jfbEventBus.$on('click-refund', this.refund.bind(this));
  },
  computed: {
    columnsFromStore: function columnsFromStore() {
      return this.$store.getters.getColumns;
    }
  },
  methods: {
    refund: function refund(payload, entry) {
      this.current = entry;
      this.currentPayload = payload;
      this.openPopup();
    },
    openPopup: function openPopup() {
      this.isShowPopup = true;
    },
    closePopup: function closePopup() {
      this.isShowPopup = false;
      this.current = {};
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _innologica_vue_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @innologica/vue-dropdown-menu */ "../node_modules/@innologica/vue-dropdown-menu/dist/vue-dropdown-menu.umd.min.js");
/* harmony import */ var _innologica_vue_dropdown_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_innologica_vue_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParseIncomingValueMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ParseIncomingValueMixin */ "./admin/paypal/ParseIncomingValueMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


window.jfbEventBus = window.jfbEventBus || new Vue();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'actions--item',
  props: ['value', 'full-entry'],
  components: {
    DropdownMenu: (_innologica_vue_dropdown_menu__WEBPACK_IMPORTED_MODULE_0___default())
  },
  mixins: [_ParseIncomingValueMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    run: function run(actionID) {
      var _this$parsedJson$acti;

      jfbEventBus.$emit("click-".concat(actionID), ((_this$parsedJson$acti = this.parsedJson[actionID]) === null || _this$parsedJson$acti === void 0 ? void 0 : _this$parsedJson$acti.payload) || {}, this.fullEntry || {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ParseIncomingValueMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ParseIncomingValueMixin */ "./admin/paypal/ParseIncomingValueMixin.js");
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'subscriber--item',
  mixins: [_ParseIncomingValueMixin__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./admin/paypal/ParseIncomingValueMixin.js":
/*!*************************************************!*\
  !*** ./admin/paypal/ParseIncomingValueMixin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['value', 'full-entry'],
  data: function data() {
    return {
      parsedJson: {}
    };
  },
  created: function created() {
    this.parsedJson = JSON.parse(JSON.stringify(this.value));
  }
});

/***/ }),

/***/ "./admin/paypal/actions/index.js":
/*!***************************************!*\
  !*** ./admin/paypal/actions/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "item": () => (/* binding */ item)
/* harmony export */ });
/* harmony import */ var _ActionsItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsItem */ "./admin/paypal/actions/ActionsItem.vue");

var item = _ActionsItem__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./admin/paypal/subscriber/index.js":
/*!******************************************!*\
  !*** ./admin/paypal/subscriber/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "item": () => (/* binding */ item)
/* harmony export */ });
/* harmony import */ var _SubscriberInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriberInfo */ "./admin/paypal/subscriber/SubscriberInfo.vue");

var item = _SubscriberInfo__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../scss/admin/default.scss":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../scss/admin/default.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jet-form-builder-page p.fb-description {\n  font-size: 13px;\n  color: #7b7e81;\n  margin: 0 0 1.5rem 0;\n}", "",{"version":3,"sources":["webpack://./../scss/admin/default.scss"],"names":[],"mappings":"AACC;EACC,eAAA;EACA,cAAA;EACA,oBAAA;AAAF","sourcesContent":[".jet-form-builder-page {\r\n\tp.fb-description {\r\n\t\tfont-size: 13px;\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin: 0 0 1.5rem 0;\r\n\t}\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cx-vue-list-table .list-table-item__cell {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cx-vue-list-table .cell--date {\n  width: 20%;\n}\n.cx-vue-list-table .cell--status {\n  width: 20%;\n}\n.cx-vue-list-table .cell--subscriber {\n  width: 20%;\n}\n.cx-vue-list-table .cell--gross {\n  width: 20%;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue","webpack://./../RecurringPayments.vue"],"names":[],"mappings":"AAkIC;EACC,mBAAA;EACA,gBAAA;ACjIF;ADoIC;EACC,UAAA;AClIF;ADqIC;EACC,UAAA;ACnIF;ADsIC;EACC,UAAA;ACpIF;ADuIC;EACC,UAAA;ACrIF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.cx-vue-list-table {\r\n\r\n\t.list-table-item__cell {\r\n\t\twhite-space: nowrap;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t.cell--date {\r\n\t\twidth: 20%;\r\n\t}\r\n\r\n\t.cell--status {\r\n\t\twidth: 20%;\r\n\t}\r\n\r\n\t.cell--subscriber {\r\n\t\twidth: 20%;\r\n\t}\r\n\r\n\t.cell--gross {\r\n\t\twidth: 20%;\r\n\t}\r\n}\r\n",".cx-vue-list-table .list-table-item__cell {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cx-vue-list-table .cell--date {\n  width: 20%;\n}\n.cx-vue-list-table .cell--status {\n  width: 20%;\n}\n.cx-vue-list-table .cell--subscriber {\n  width: 20%;\n}\n.cx-vue-list-table .cell--gross {\n  width: 20%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-dropdown {\n  position: absolute;\n  display: flex;\n  padding: 0.6em 0;\n  background-color: aliceblue;\n  flex-direction: column;\n  border-radius: 4px;\n  font-size: 1.2em;\n  border: 1px solid #ccc;\n}\n.jfb-dropdown-item {\n  display: block;\n  padding: 0.5em 0.3em;\n  text-decoration: none;\n}\n.jfb-dropdown-item:hover {\n  background-color: #FFFFFF;\n}\n.jfb-dropdown-item:not(:first-child) {\n  border-top: 1px solid #f5f5f5;\n}", "",{"version":3,"sources":["webpack://./admin/paypal/actions/ActionsItem.vue","webpack://./../ActionsItem.vue"],"names":[],"mappings":"AAqDA;EACC,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,2BAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;ACpDD;ADsDC;EACC,cAAA;EACA,oBAAA;EACA,qBAAA;ACpDF;ADsDE;EACC,yBAAA;ACpDH;ADuDE;EACC,6BAAA;ACrDH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-dropdown {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\tpadding: 0.6em 0;\r\n\tbackground-color: aliceblue;\r\n\tflex-direction: column;\r\n\tborder-radius: 4px;\r\n\tfont-size: 1.2em;\r\n\tborder: 1px solid #ccc;\r\n\r\n\t&-item {\r\n\t\tdisplay: block;\r\n\t\tpadding: 0.5em 0.3em;\r\n\t\ttext-decoration: none;\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground-color: #FFFFFF;\r\n\t\t}\r\n\r\n\t\t&:not(:first-child) {\r\n\t\t\tborder-top: 1px solid #f5f5f5;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jfb-dropdown {\n  position: absolute;\n  display: flex;\n  padding: 0.6em 0;\n  background-color: aliceblue;\n  flex-direction: column;\n  border-radius: 4px;\n  font-size: 1.2em;\n  border: 1px solid #ccc;\n}\n.jfb-dropdown-item {\n  display: block;\n  padding: 0.5em 0.3em;\n  text-decoration: none;\n}\n.jfb-dropdown-item:hover {\n  background-color: #FFFFFF;\n}\n.jfb-dropdown-item:not(:first-child) {\n  border-top: 1px solid #f5f5f5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue":
/*!*************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecurringPayments_vue_vue_type_template_id_12f6b262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecurringPayments.vue?vue&type=template&id=12f6b262& */ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=template&id=12f6b262&");
/* harmony import */ var _RecurringPayments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecurringPayments.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=script&lang=js&");
/* harmony import */ var _RecurringPayments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecurringPayments.vue?vue&type=style&index=0&lang=scss& */ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecurringPayments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecurringPayments_vue_vue_type_template_id_12f6b262___WEBPACK_IMPORTED_MODULE_0__.render,
  _RecurringPayments_vue_vue_type_template_id_12f6b262___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/paypal/actions/ActionsItem.vue":
/*!**********************************************!*\
  !*** ./admin/paypal/actions/ActionsItem.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionsItem_vue_vue_type_template_id_23f0ffb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsItem.vue?vue&type=template&id=23f0ffb0& */ "./admin/paypal/actions/ActionsItem.vue?vue&type=template&id=23f0ffb0&");
/* harmony import */ var _ActionsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionsItem.vue?vue&type=script&lang=js& */ "./admin/paypal/actions/ActionsItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _ActionsItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionsItem.vue?vue&type=style&index=0&lang=scss& */ "./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ActionsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionsItem_vue_vue_type_template_id_23f0ffb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActionsItem_vue_vue_type_template_id_23f0ffb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/paypal/actions/ActionsItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/paypal/subscriber/SubscriberInfo.vue":
/*!****************************************************!*\
  !*** ./admin/paypal/subscriber/SubscriberInfo.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubscriberInfo_vue_vue_type_template_id_a968f1e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriberInfo.vue?vue&type=template&id=a968f1e2& */ "./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=template&id=a968f1e2&");
/* harmony import */ var _SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriberInfo.vue?vue&type=script&lang=js& */ "./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubscriberInfo_vue_vue_type_template_id_a968f1e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubscriberInfo_vue_vue_type_template_id_a968f1e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/paypal/subscriber/SubscriberInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringPayments.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/paypal/actions/ActionsItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./admin/paypal/actions/ActionsItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsItem.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriberInfo.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=template&id=12f6b262&":
/*!********************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=template&id=12f6b262& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_template_id_12f6b262___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_template_id_12f6b262___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_template_id_12f6b262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringPayments.vue?vue&type=template&id=12f6b262& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=template&id=12f6b262&");


/***/ }),

/***/ "./admin/paypal/actions/ActionsItem.vue?vue&type=template&id=23f0ffb0&":
/*!*****************************************************************************!*\
  !*** ./admin/paypal/actions/ActionsItem.vue?vue&type=template&id=23f0ffb0& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_template_id_23f0ffb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_template_id_23f0ffb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_template_id_23f0ffb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsItem.vue?vue&type=template&id=23f0ffb0& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=template&id=23f0ffb0&");


/***/ }),

/***/ "./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=template&id=a968f1e2&":
/*!***********************************************************************************!*\
  !*** ./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=template&id=a968f1e2& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_template_id_a968f1e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_template_id_a968f1e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_template_id_a968f1e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriberInfo.vue?vue&type=template&id=a968f1e2& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=template&id=a968f1e2&");


/***/ }),

/***/ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringPayments.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringPayments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsItem.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=template&id=12f6b262&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=template&id=12f6b262& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        wrap: true,
        "jet-form-builder-page": true,
        "jet-form-builder-page--paypal-recurring-payments": true,
      },
    },
    [
      _c("h1", { staticClass: "cs-vui-title" }, [
        _vm._v(
          _vm._s(
            _vm.__(
              "JetFormBuilder Paypal Recurring Payments",
              "jet-form-builder"
            )
          )
        ),
      ]),
      _vm._v(" "),
      _c("EntriesTable", {
        attrs: {
          "entries-list": _vm.list,
          columns: _vm.columnsFromStore,
          "columns-components": _vm.columnsComponents,
        },
      }),
      _vm._v(" "),
      _c("cx-vui-popup", {
        attrs: { "body-width": "60vw", footer: false },
        on: { "on-cancel": _vm.closePopup },
        scopedSlots: _vm._u([
          {
            key: "content",
            fn: function () {
              return [
                _c("h3", [
                  _vm._v(_vm._s(_vm.__("Issue Refund", "jet-form-builder"))),
                ]),
                _vm._v(" "),
                _c("cx-vui-input", {
                  attrs: {
                    label: _vm.currentPayload.contact_name.label,
                    "wrapper-css": ["equalwidth"],
                    value:
                      _vm.current.subscriber.value.name.given_name +
                      " " +
                      _vm.current.subscriber.value.name.surname,
                    size: "fullwidth",
                    disabled: "",
                  },
                }),
                _vm._v(" "),
                _c("cx-vui-input", {
                  attrs: {
                    label: _vm.currentPayload.contact_email.label,
                    "wrapper-css": ["equalwidth"],
                    value: _vm.current.subscriber.value.email_address,
                    size: "fullwidth",
                    disabled: "",
                  },
                }),
                _vm._v(" "),
                _c("cx-vui-input", {
                  attrs: {
                    label: _vm.currentPayload.amount.label,
                    "wrapper-css": ["equalwidth"],
                    value: _vm.current.gross.value,
                    size: "fullwidth",
                    disabled: "",
                  },
                }),
                _vm._v(" "),
                _c("cx-vui-input", {
                  attrs: {
                    label: _vm.currentPayload.invoice_id.label,
                    "wrapper-css": ["equalwidth"],
                    size: "fullwidth",
                  },
                  model: {
                    value: _vm.currentPayload.invoice_id.value,
                    callback: function ($$v) {
                      _vm.$set(_vm.currentPayload.invoice_id, "value", $$v)
                    },
                    expression: "currentPayload.invoice_id.value",
                  },
                }),
                _vm._v(" "),
                _c("cx-vui-input", {
                  attrs: {
                    label: _vm.currentPayload.note_to_payer.label,
                    "wrapper-css": ["equalwidth"],
                    size: "fullwidth",
                  },
                  model: {
                    value: _vm.currentPayload.note_to_payer.value,
                    callback: function ($$v) {
                      _vm.$set(_vm.currentPayload.note_to_payer, "value", $$v)
                    },
                    expression: "currentPayload.note_to_payer.value",
                  },
                }),
              ]
            },
            proxy: true,
          },
        ]),
        model: {
          value: _vm.isShowPopup,
          callback: function ($$v) {
            _vm.isShowPopup = $$v
          },
          expression: "isShowPopup",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=template&id=23f0ffb0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=template&id=23f0ffb0& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "DropdownMenu",
    {
      attrs: { interactive: true },
      scopedSlots: _vm._u([
        {
          key: "dropdown",
          fn: function () {
            return [
              _c(
                "div",
                { staticClass: "jfb-dropdown" },
                _vm._l(_vm.parsedJson, function (action, actionID) {
                  return _c(
                    "a",
                    {
                      staticClass: "jfb-dropdown-item",
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function ($event) {
                          return _vm.run(actionID)
                        },
                      },
                    },
                    [_vm._v("\n\t\t\t\t" + _vm._s(action.label) + "\n\t\t\t")]
                  )
                }),
                0
              ),
            ]
          },
          proxy: true,
        },
      ]),
      model: {
        value: _vm.showDropdown,
        callback: function ($$v) {
          _vm.showDropdown = $$v
        },
        expression: "showDropdown",
      },
    },
    [_c("span", { staticClass: "dashicons dashicons-ellipsis" })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=template&id=a968f1e2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/subscriber/SubscriberInfo.vue?vue&type=template&id=a968f1e2& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm._v(
      _vm._s(_vm.parsedJson.name.given_name + " " + _vm.parsedJson.name.surname)
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../scss/admin/default.scss":
/*!**********************************!*\
  !*** ../scss/admin/default.scss ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./default.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../scss/admin/default.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("3468b97e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringPayments.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("017148c6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsItem.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/paypal/actions/ActionsItem.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("a8dcedf4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/lib/addStylesClient.js":
/*!***************************************************************!*\
  !*** ../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "../node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "../node_modules/vue-style-loader/lib/listToStyles.js":
/*!************************************************************!*\
  !*** ../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************************!*\
  !*** ./admin/pages/jfb-paypal-recurring-payments/index.js ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecurringPayments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecurringPayments */ "./admin/pages/jfb-paypal-recurring-payments/RecurringPayments.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


Vue.use(Vuex);
var options = {
  store: new Vuex.Store({
    state: {
      columns: {}
    },
    getters: {
      isChecked: function isChecked(state) {
        return function (id) {
          return state.checked.includes(id);
        };
      },
      getCurrent: function getCurrent(state) {
        return state.currentPopupData;
      },
      getColumns: function getColumns(state) {
        return state.columns;
      }
    },
    mutations: {
      setColumns: function setColumns(state, columns) {
        state.columns = columns;
      },
      setCurrent: function setCurrent(state, current) {
        state.currentPopupData = current;
      },
      clearCurrent: function clearCurrent(state) {
        state.currentPopupData = {};
      },
      addToStore: function addToStore(state, _ref) {
        var id = _ref.id;
        state.idList.push(id);
      },
      addChecked: function addChecked(state, _ref2) {
        var id = _ref2.id;
        state.checked.push(id);
      },
      removeAll: function removeAll(state) {
        state.checked = [];
      },
      activeAll: function activeAll(state) {
        state.checked = _toConsumableArray(state.idList);
      },
      removeChecked: function removeChecked(state, _ref3) {
        var id = _ref3.id;
        state.checked = state.checked.filter(function (checked) {
          return checked !== id;
        });
      }
    },
    actions: {
      changeChecked: function changeChecked(_ref4, _ref5) {
        var commit = _ref4.commit;
        var id = _ref5.id,
            active = _ref5.active;

        if (active) {
          commit('addChecked', {
            id: id
          });
        } else {
          commit('removeChecked', {
            id: id
          });
        }
      }
    }
  })
};
var renderCurrentPage = window.JetFBActions.renderCurrentPage;
renderCurrentPage(_RecurringPayments__WEBPACK_IMPORTED_MODULE_0__["default"], options);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXBheXBhbC1yZWN1cnJpbmctcGF5bWVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwREE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQTlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBS0E7QUFQQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUExQkE7QUE0QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBM0NBO0FBREE7QUF3REE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGlubm9sb2dpY2EvdnVlLWRyb3Bkb3duLW1lbnUvZGlzdC92dWUtZHJvcGRvd24tbWVudS51bWQubWluLmpzIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLXJlY3VycmluZy1wYXltZW50cy9SZWN1cnJpbmdQYXltZW50cy52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BheXBhbC9hY3Rpb25zL0FjdGlvbnNJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGF5cGFsL3N1YnNjcmliZXIvU3Vic2NyaWJlckluZm8udnVlIiwid2VicGFjazovLy8uL2FkbWluL3BheXBhbC9QYXJzZUluY29taW5nVmFsdWVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYXlwYWwvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYXlwYWwvc3Vic2NyaWJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9hZG1pbi9kZWZhdWx0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1yZWN1cnJpbmctcGF5bWVudHMvUmVjdXJyaW5nUGF5bWVudHMudnVlPzE0NTkiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGF5cGFsL2FjdGlvbnMvQWN0aW9uc0l0ZW0udnVlPzczNjIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzL1JlY3VycmluZ1BheW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYXlwYWwvYWN0aW9ucy9BY3Rpb25zSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGF5cGFsL3N1YnNjcmliZXIvU3Vic2NyaWJlckluZm8udnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzL1JlY3VycmluZ1BheW1lbnRzLnZ1ZT9hYzE5Iiwid2VicGFjazovLy8uL2FkbWluL3BheXBhbC9hY3Rpb25zL0FjdGlvbnNJdGVtLnZ1ZT81ZTdlIiwid2VicGFjazovLy8uL2FkbWluL3BheXBhbC9zdWJzY3JpYmVyL1N1YnNjcmliZXJJbmZvLnZ1ZT9iYjFkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzL1JlY3VycmluZ1BheW1lbnRzLnZ1ZT8zMmVkIiwid2VicGFjazovLy8uL2FkbWluL3BheXBhbC9hY3Rpb25zL0FjdGlvbnNJdGVtLnZ1ZT8xYzA0Iiwid2VicGFjazovLy8uL2FkbWluL3BheXBhbC9zdWJzY3JpYmVyL1N1YnNjcmliZXJJbmZvLnZ1ZT85NTZiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9zY3NzL2FkbWluL2RlZmF1bHQuc2Nzcz8yMDkxIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzL1JlY3VycmluZ1BheW1lbnRzLnZ1ZT8zZmNmIiwid2VicGFjazovLy8uL2FkbWluL3BheXBhbC9hY3Rpb25zL0FjdGlvbnNJdGVtLnZ1ZT9kMDdlIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLXJlY3VycmluZy1wYXltZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcInZ1ZS1kcm9wZG93bi1tZW51XCJdPWUoKTp0W1widnVlLWRyb3Bkb3duLW1lbnVcIl09ZSgpfSkoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHRbXCJkZWZhdWx0XCJdfTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz1cImZiMTVcIil9KHtcIjAxNGJcIjpmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bihcImU1M2RcIiksbz1uKFwiMDdlM1wiKSxpPW4oXCI4ZTYwXCIpLHU9bihcIjYzYjZcIiksYz1uKFwiOTEzOFwiKSxmPW4oXCJlYmZkXCIpLktFWSxhPW4oXCIyOTRjXCIpLHM9bihcImRiZGJcIikscD1uKFwiNDVmMlwiKSxsPW4oXCI2MmEwXCIpLGQ9bihcIjUxNjhcIiksdj1uKFwiY2NiOVwiKSxoPW4oXCI2NzE4XCIpLHk9bihcIjQ3ZWVcIiksYj1uKFwiOTAwM1wiKSxtPW4oXCJlNGFlXCIpLGc9bihcImY3NzJcIikseD1uKFwiMjQxZVwiKSx3PW4oXCIzNmMzXCIpLE89bihcIjFiYzNcIiksXz1uKFwiYWViZFwiKSxTPW4oXCJhMTU5XCIpLGo9bihcIjAzOTVcIiksRT1uKFwiYmYwYlwiKSxUPW4oXCI5YWE5XCIpLFA9bihcImQ5ZjZcIiksTT1uKFwiYzNhMVwiKSxOPUUuZixJPVAuZixMPWouZixrPXIuU3ltYm9sLEM9ci5KU09OLEY9QyYmQy5zdHJpbmdpZnksQT1cInByb3RvdHlwZVwiLFI9ZChcIl9oaWRkZW5cIiksJD1kKFwidG9QcmltaXRpdmVcIiksVj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxHPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksRD1zKFwic3ltYm9sc1wiKSxCPXMoXCJvcC1zeW1ib2xzXCIpLFc9T2JqZWN0W0FdLFU9XCJmdW5jdGlvblwiPT10eXBlb2YgayYmISFULmYsSD1yLlFPYmplY3Qsej0hSHx8IUhbQV18fCFIW0FdLmZpbmRDaGlsZCxKPWkmJmEoZnVuY3Rpb24oKXtyZXR1cm4gNyE9UyhJKHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gSSh0aGlzLFwiYVwiLHt2YWx1ZTo3fSkuYX19KSkuYX0pP2Z1bmN0aW9uKHQsZSxuKXt2YXIgcj1OKFcsZSk7ciYmZGVsZXRlIFdbZV0sSSh0LGUsbiksciYmdCE9PVcmJkkoVyxlLHIpfTpJLFg9ZnVuY3Rpb24odCl7dmFyIGU9RFt0XT1TKGtbQV0pO3JldHVybiBlLl9rPXQsZX0sWT1VJiZcInN5bWJvbFwiPT10eXBlb2Ygay5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBrfSxLPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdD09PVcmJksoQixlLG4pLG0odCksZT1PKGUsITApLG0obiksbyhELGUpPyhuLmVudW1lcmFibGU/KG8odCxSKSYmdFtSXVtlXSYmKHRbUl1bZV09ITEpLG49UyhuLHtlbnVtZXJhYmxlOl8oMCwhMSl9KSk6KG8odCxSKXx8SSh0LFIsXygxLHt9KSksdFtSXVtlXT0hMCksSih0LGUsbikpOkkodCxlLG4pfSxxPWZ1bmN0aW9uKHQsZSl7bSh0KTt2YXIgbixyPXkoZT13KGUpKSxvPTAsaT1yLmxlbmd0aDt3aGlsZShpPm8pSyh0LG49cltvKytdLGVbbl0pO3JldHVybiB0fSxRPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PWU/Uyh0KTpxKFModCksZSl9LFo9ZnVuY3Rpb24odCl7dmFyIGU9Vi5jYWxsKHRoaXMsdD1PKHQsITApKTtyZXR1cm4hKHRoaXM9PT1XJiZvKEQsdCkmJiFvKEIsdCkpJiYoIShlfHwhbyh0aGlzLHQpfHwhbyhELHQpfHxvKHRoaXMsUikmJnRoaXNbUl1bdF0pfHxlKX0sdHQ9ZnVuY3Rpb24odCxlKXtpZih0PXcodCksZT1PKGUsITApLHQhPT1XfHwhbyhELGUpfHxvKEIsZSkpe3ZhciBuPU4odCxlKTtyZXR1cm4hbnx8IW8oRCxlKXx8byh0LFIpJiZ0W1JdW2VdfHwobi5lbnVtZXJhYmxlPSEwKSxufX0sZXQ9ZnVuY3Rpb24odCl7dmFyIGUsbj1MKHcodCkpLHI9W10saT0wO3doaWxlKG4ubGVuZ3RoPmkpbyhELGU9bltpKytdKXx8ZT09Unx8ZT09Znx8ci5wdXNoKGUpO3JldHVybiByfSxudD1mdW5jdGlvbih0KXt2YXIgZSxuPXQ9PT1XLHI9TChuP0I6dyh0KSksaT1bXSx1PTA7d2hpbGUoci5sZW5ndGg+dSkhbyhELGU9clt1KytdKXx8biYmIW8oVyxlKXx8aS5wdXNoKERbZV0pO3JldHVybiBpfTtVfHwoaz1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBrKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9bChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksZT1mdW5jdGlvbihuKXt0aGlzPT09VyYmZS5jYWxsKEIsbiksbyh0aGlzLFIpJiZvKHRoaXNbUl0sdCkmJih0aGlzW1JdW3RdPSExKSxKKHRoaXMsdCxfKDEsbikpfTtyZXR1cm4gaSYmeiYmSihXLHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6ZX0pLFgodCl9LGMoa1tBXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLEUuZj10dCxQLmY9SyxuKFwiNmFiZlwiKS5mPWouZj1ldCxuKFwiMzU1ZFwiKS5mPVosVC5mPW50LGkmJiFuKFwiYjhlM1wiKSYmYyhXLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixaLCEwKSx2LmY9ZnVuY3Rpb24odCl7cmV0dXJuIFgoZCh0KSl9KSx1KHUuRyt1LlcrdS5GKiFVLHtTeW1ib2w6a30pO2Zvcih2YXIgcnQ9XCJoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlc1wiLnNwbGl0KFwiLFwiKSxvdD0wO3J0Lmxlbmd0aD5vdDspZChydFtvdCsrXSk7Zm9yKHZhciBpdD1NKGQuc3RvcmUpLHV0PTA7aXQubGVuZ3RoPnV0OyloKGl0W3V0KytdKTt1KHUuUyt1LkYqIVUsXCJTeW1ib2xcIix7Zm9yOmZ1bmN0aW9uKHQpe3JldHVybiBvKEcsdCs9XCJcIik/R1t0XTpHW3RdPWsodCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZighWSh0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpO2Zvcih2YXIgZSBpbiBHKWlmKEdbZV09PT10KXJldHVybiBlfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXt6PSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXt6PSExfX0pLHUodS5TK3UuRiohVSxcIk9iamVjdFwiLHtjcmVhdGU6USxkZWZpbmVQcm9wZXJ0eTpLLGRlZmluZVByb3BlcnRpZXM6cSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6dHQsZ2V0T3duUHJvcGVydHlOYW1lczpldCxnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6bnR9KTt2YXIgY3Q9YShmdW5jdGlvbigpe1QuZigxKX0pO3UodS5TK3UuRipjdCxcIk9iamVjdFwiLHtnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ZnVuY3Rpb24odCl7cmV0dXJuIFQuZih4KHQpKX19KSxDJiZ1KHUuUyt1LkYqKCFVfHxhKGZ1bmN0aW9uKCl7dmFyIHQ9aygpO3JldHVyblwiW251bGxdXCIhPUYoW3RdKXx8XCJ7fVwiIT1GKHthOnR9KXx8XCJ7fVwiIT1GKE9iamVjdCh0KSl9KSksXCJKU09OXCIse3N0cmluZ2lmeTpmdW5jdGlvbih0KXt2YXIgZSxuLHI9W3RdLG89MTt3aGlsZShhcmd1bWVudHMubGVuZ3RoPm8pci5wdXNoKGFyZ3VtZW50c1tvKytdKTtpZihuPWU9clsxXSwoZyhlKXx8dm9pZCAwIT09dCkmJiFZKHQpKXJldHVybiBiKGUpfHwoZT1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihlPW4uY2FsbCh0aGlzLHQsZSkpLCFZKGUpKXJldHVybiBlfSksclsxXT1lLEYuYXBwbHkoQyxyKX19KSxrW0FdWyRdfHxuKFwiMzVlOFwiKShrW0FdLCQsa1tBXS52YWx1ZU9mKSxwKGssXCJTeW1ib2xcIikscChNYXRoLFwiTWF0aFwiLCEwKSxwKHIuSlNPTixcIkpTT05cIiwhMCl9LFwiMDM5NVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiMzZjM1wiKSxvPW4oXCI2YWJmXCIpLmYsaT17fS50b1N0cmluZyx1PVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM/T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KTpbXSxjPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gbyh0KX1jYXRjaChlKXtyZXR1cm4gdS5zbGljZSgpfX07dC5leHBvcnRzLmY9ZnVuY3Rpb24odCl7cmV0dXJuIHUmJlwiW29iamVjdCBXaW5kb3ddXCI9PWkuY2FsbCh0KT9jKHQpOm8ocih0KSl9fSxcIjA3ZTNcIjpmdW5jdGlvbih0LGUpe3ZhciBuPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBuLmNhbGwodCxlKX19LFwiMGQ1OFwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiY2UxMFwiKSxvPW4oXCJlMTFlXCIpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LFwiMGZjOVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiM2EzOFwiKSxvPU1hdGgubWF4LGk9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9cih0KSx0PDA/byh0K2UsMCk6aSh0LGUpfX0sXCIxMWU5XCI6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCI1MmE3XCIpLG89bihcIjQ2MzBcIiksaT1uKFwiNjgyMVwiKSx1PW4oXCI2YTk5XCIpLGM9bihcIjY5YThcIiksZj1uKFwiYzY5YVwiKSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7ZS5mPW4oXCI5ZTFlXCIpP2E6ZnVuY3Rpb24odCxlKXtpZih0PWkodCksZT11KGUsITApLGYpdHJ5e3JldHVybiBhKHQsZSl9Y2F0Y2gobil7fWlmKGModCxlKSlyZXR1cm4gbyghci5mLmNhbGwodCxlKSx0W2VdKX19LDE0OTU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCI4NmNjXCIpLG89bihcImNiN2NcIiksaT1uKFwiMGQ1OFwiKTt0LmV4cG9ydHM9bihcIjllMWVcIik/T2JqZWN0LmRlZmluZVByb3BlcnRpZXM6ZnVuY3Rpb24odCxlKXtvKHQpO3ZhciBuLHU9aShlKSxjPXUubGVuZ3RoLGY9MDt3aGlsZShjPmYpci5mKHQsbj11W2YrK10sZVtuXSk7cmV0dXJuIHR9fSwxNjU0OmZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKFwiNzFjMVwiKSghMCk7bihcIjMwZjFcIikoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24odCl7dGhpcy5fdD1TdHJpbmcodCksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5fdCxuPXRoaXMuX2k7cmV0dXJuIG4+PWUubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KHQ9cihlLG4pLHRoaXMuX2krPXQubGVuZ3RoLHt2YWx1ZTp0LGRvbmU6ITF9KX0pfSwxNjkxOmZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSxcIjFiYzNcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImY3NzJcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIG4sbztpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQudG9TdHJpbmcpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2Yobj10LnZhbHVlT2YpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoIWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG49dC50b1N0cmluZykmJiFyKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxcIjFlYzlcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImY3NzJcIiksbz1uKFwiZTUzZFwiKS5kb2N1bWVudCxpPXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGk/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sXCIyMzBlXCI6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCJkM2Y0XCIpLG89bihcIjc3MjZcIikuZG9jdW1lbnQsaT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpP28uY3JlYXRlRWxlbWVudCh0KTp7fX19LFwiMjQxZVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiMjVlYlwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChyKHQpKX19LFwiMjVlYlwiOmZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxcIjI5NGNcIjpmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2goZSl7cmV0dXJuITB9fX0sXCIyYWJhXCI6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCI3NzI2XCIpLG89bihcIjMyZTlcIiksaT1uKFwiNjlhOFwiKSx1PW4oXCJjYTVhXCIpKFwic3JjXCIpLGM9bihcImZhNWJcIiksZj1cInRvU3RyaW5nXCIsYT0oXCJcIitjKS5zcGxpdChmKTtuKFwiODM3OFwiKS5pbnNwZWN0U291cmNlPWZ1bmN0aW9uKHQpe3JldHVybiBjLmNhbGwodCl9LCh0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4sYyl7dmFyIGY9XCJmdW5jdGlvblwiPT10eXBlb2YgbjtmJiYoaShuLFwibmFtZVwiKXx8byhuLFwibmFtZVwiLGUpKSx0W2VdIT09biYmKGYmJihpKG4sdSl8fG8obix1LHRbZV0/XCJcIit0W2VdOmEuam9pbihTdHJpbmcoZSkpKSksdD09PXI/dFtlXT1uOmM/dFtlXT90W2VdPW46byh0LGUsbik6KGRlbGV0ZSB0W2VdLG8odCxlLG4pKSl9KShGdW5jdGlvbi5wcm90b3R5cGUsZixmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJnRoaXNbdV18fGMuY2FsbCh0aGlzKX0pfSxcIjJhZWJcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImNiN2NcIiksbz1uKFwiMTQ5NVwiKSxpPW4oXCJlMTFlXCIpLHU9bihcIjYxM2JcIikoXCJJRV9QUk9UT1wiKSxjPWZ1bmN0aW9uKCl7fSxmPVwicHJvdG90eXBlXCIsYT1mdW5jdGlvbigpe3ZhciB0LGU9bihcIjIzMGVcIikoXCJpZnJhbWVcIikscj1pLmxlbmd0aCxvPVwiPFwiLHU9XCI+XCI7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLG4oXCJmYWIyXCIpLmFwcGVuZENoaWxkKGUpLGUuc3JjPVwiamF2YXNjcmlwdDpcIix0PWUuY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKG8rXCJzY3JpcHRcIit1K1wiZG9jdW1lbnQuRj1PYmplY3RcIitvK1wiL3NjcmlwdFwiK3UpLHQuY2xvc2UoKSxhPXQuRjt3aGlsZShyLS0pZGVsZXRlIGFbZl1baVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsZSl7dmFyIG47cmV0dXJuIG51bGwhPT10PyhjW2ZdPXIodCksbj1uZXcgYyxjW2ZdPW51bGwsblt1XT10KTpuPWEoKSx2b2lkIDA9PT1lP246byhuLGUpfX0sXCIyZDAwXCI6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ITF9LFwiMmQ5NVwiOmZ1bmN0aW9uKHQsZSl7dmFyIG49e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBuLmNhbGwodCkuc2xpY2UoOCwtMSl9fSxcIjMwZjFcIjpmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bihcImI4ZTNcIiksbz1uKFwiNjNiNlwiKSxpPW4oXCI5MTM4XCIpLHU9bihcIjM1ZThcIiksYz1uKFwiNDgxYlwiKSxmPW4oXCI4ZjYwXCIpLGE9bihcIjQ1ZjJcIikscz1uKFwiNTNlMlwiKSxwPW4oXCI1MTY4XCIpKFwiaXRlcmF0b3JcIiksbD0hKFtdLmtleXMmJlwibmV4dFwiaW5bXS5rZXlzKCkpLGQ9XCJAQGl0ZXJhdG9yXCIsdj1cImtleXNcIixoPVwidmFsdWVzXCIseT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4sYixtLGcseCl7ZihuLGUsYik7dmFyIHcsTyxfLFM9ZnVuY3Rpb24odCl7aWYoIWwmJnQgaW4gUClyZXR1cm4gUFt0XTtzd2l0Y2godCl7Y2FzZSB2OnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgbih0aGlzLHQpfTtjYXNlIGg6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKHRoaXMsdCl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgbih0aGlzLHQpfX0saj1lK1wiIEl0ZXJhdG9yXCIsRT1tPT1oLFQ9ITEsUD10LnByb3RvdHlwZSxNPVBbcF18fFBbZF18fG0mJlBbbV0sTj1NfHxTKG0pLEk9bT9FP1MoXCJlbnRyaWVzXCIpOk46dm9pZCAwLEw9XCJBcnJheVwiPT1lJiZQLmVudHJpZXN8fE07aWYoTCYmKF89cyhMLmNhbGwobmV3IHQpKSxfIT09T2JqZWN0LnByb3RvdHlwZSYmXy5uZXh0JiYoYShfLGosITApLHJ8fFwiZnVuY3Rpb25cIj09dHlwZW9mIF9bcF18fHUoXyxwLHkpKSksRSYmTSYmTS5uYW1lIT09aCYmKFQ9ITAsTj1mdW5jdGlvbigpe3JldHVybiBNLmNhbGwodGhpcyl9KSxyJiYheHx8IWwmJiFUJiZQW3BdfHx1KFAscCxOKSxjW2VdPU4sY1tqXT15LG0paWYodz17dmFsdWVzOkU/TjpTKGgpLGtleXM6Zz9OOlModiksZW50cmllczpJfSx4KWZvcihPIGluIHcpTyBpbiBQfHxpKFAsTyx3W09dKTtlbHNlIG8oby5QK28uRioobHx8VCksZSx3KTtyZXR1cm4gd319LFwiMzJlOVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiODZjY1wiKSxvPW4oXCI0NjMwXCIpO3QuZXhwb3J0cz1uKFwiOWUxZVwiKT9mdW5jdGlvbih0LGUsbil7cmV0dXJuIHIuZih0LGUsbygxLG4pKX06ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0W2VdPW4sdH19LFwiMzJmY1wiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiZTUzZFwiKS5kb2N1bWVudDt0LmV4cG9ydHM9ciYmci5kb2N1bWVudEVsZW1lbnR9LFwiMzM1Y1wiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiNmI0Y1wiKTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LFwiMzU1ZFwiOmZ1bmN0aW9uKHQsZSl7ZS5mPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlfSxcIjM1ZThcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImQ5ZjZcIiksbz1uKFwiYWViZFwiKTt0LmV4cG9ydHM9bihcIjhlNjBcIik/ZnVuY3Rpb24odCxlLG4pe3JldHVybiByLmYodCxlLG8oMSxuKSl9OmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdFtlXT1uLHR9fSxcIjM2YzNcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjMzNWNcIiksbz1uKFwiMjVlYlwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxcIjNhMzhcIjpmdW5jdGlvbih0LGUpe3ZhciBuPU1hdGguY2VpbCxyPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpc05hTih0PSt0KT8wOih0PjA/cjpuKSh0KX19LDQ1ODg6ZnVuY3Rpb24odCxlKXt2YXIgbj1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6bikodCl9fSxcIjQ1ZjJcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImQ5ZjZcIikuZixvPW4oXCIwN2UzXCIpLGk9bihcIjUxNjhcIikoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3QmJiFvKHQ9bj90OnQucHJvdG90eXBlLGkpJiZyKHQsaSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOmV9KX19LDQ2MzA6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6ZX19fSxcIjQ3ZWVcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImMzYTFcIiksbz1uKFwiOWFhOVwiKSxpPW4oXCIzNTVkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1yKHQpLG49by5mO2lmKG4pe3ZhciB1LGM9bih0KSxmPWkuZixhPTA7d2hpbGUoYy5sZW5ndGg+YSlmLmNhbGwodCx1PWNbYSsrXSkmJmUucHVzaCh1KX1yZXR1cm4gZX19LFwiNDgxYlwiOmZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPXt9fSxcIjUwZWRcIjpmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybnt2YWx1ZTplLGRvbmU6ISF0fX19LDUxNjg6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCJkYmRiXCIpKFwid2tzXCIpLG89bihcIjYyYTBcIiksaT1uKFwiZTUzZFwiKS5TeW1ib2wsdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLGM9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT11JiZpW3RdfHwodT9pOm8pKFwiU3ltYm9sLlwiK3QpKX07Yy5zdG9yZT1yfSxcIjUyYTdcIjpmdW5jdGlvbih0LGUpe2UuZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sXCI1M2UyXCI6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCIwN2UzXCIpLG89bihcIjI0MWVcIiksaT1uKFwiNTU1OVwiKShcIklFX1BST1RPXCIpLHU9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCxpKT90W2ldOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/dTpudWxsfX0sNTUzNzpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjgzNzhcIiksbz1uKFwiNzcyNlwiKSxpPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsdT1vW2ldfHwob1tpXT17fSk7KHQuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB1W3RdfHwodVt0XT12b2lkIDAhPT1lP2U6e30pfSkoXCJ2ZXJzaW9uc1wiLFtdKS5wdXNoKHt2ZXJzaW9uOnIudmVyc2lvbixtb2RlOm4oXCIyZDAwXCIpP1wicHVyZVwiOlwiZ2xvYmFsXCIsY29weXJpZ2h0OlwiwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KVwifSl9LDU1NTk6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCJkYmRiXCIpKFwia2V5c1wiKSxvPW4oXCI2MmEwXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gclt0XXx8KHJbdF09byh0KSl9fSxcIjU4NGFcIjpmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNi45XCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9bil9LFwiNWI0ZVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiMzZjM1wiKSxvPW4oXCJiNDQ3XCIpLGk9bihcIjBmYzlcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4sdSl7dmFyIGMsZj1yKGUpLGE9byhmLmxlbmd0aCkscz1pKHUsYSk7aWYodCYmbiE9bil7d2hpbGUoYT5zKWlmKGM9ZltzKytdLGMhPWMpcmV0dXJuITB9ZWxzZSBmb3IoO2E+cztzKyspaWYoKHR8fHMgaW4gZikmJmZbc109PT1uKXJldHVybiB0fHxzfHwwO3JldHVybiF0JiYtMX19fSxcIjVjYTFcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjc3MjZcIiksbz1uKFwiODM3OFwiKSxpPW4oXCIzMmU5XCIpLHU9bihcIjJhYmFcIiksYz1uKFwiOWI0M1wiKSxmPVwicHJvdG90eXBlXCIsYT1mdW5jdGlvbih0LGUsbil7dmFyIHMscCxsLGQsdj10JmEuRixoPXQmYS5HLHk9dCZhLlMsYj10JmEuUCxtPXQmYS5CLGc9aD9yOnk/cltlXXx8KHJbZV09e30pOihyW2VdfHx7fSlbZl0seD1oP286b1tlXXx8KG9bZV09e30pLHc9eFtmXXx8KHhbZl09e30pO2ZvcihzIGluIGgmJihuPWUpLG4pcD0hdiYmZyYmdm9pZCAwIT09Z1tzXSxsPShwP2c6bilbc10sZD1tJiZwP2MobCxyKTpiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2MoRnVuY3Rpb24uY2FsbCxsKTpsLGcmJnUoZyxzLGwsdCZhLlUpLHhbc10hPWwmJmkoeCxzLGQpLGImJndbc10hPWwmJih3W3NdPWwpfTtyLmNvcmU9byxhLkY9MSxhLkc9MixhLlM9NCxhLlA9OCxhLkI9MTYsYS5XPTMyLGEuVT02NCxhLlI9MTI4LHQuZXhwb3J0cz1hfSxcIjVkNThcIjpmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oXCJkOGQ2XCIpfSxcIjVkYmNcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImQzZjRcIiksbz1uKFwiOGI5N1wiKS5zZXQ7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaSx1PWUuY29uc3RydWN0b3I7cmV0dXJuIHUhPT1uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB1JiYoaT11LnByb3RvdHlwZSkhPT1uLnByb3RvdHlwZSYmcihpKSYmbyYmbyh0LGkpLHR9fSxcIjYxM2JcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjU1MzdcIikoXCJrZXlzXCIpLG89bihcImNhNWFcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LFwiNjI2YVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiMmQ5NVwiKTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LFwiNjJhMFwiOmZ1bmN0aW9uKHQsZSl7dmFyIG49MCxyPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrbityKS50b1N0cmluZygzNikpfX0sXCI2M2I2XCI6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCJlNTNkXCIpLG89bihcIjU4NGFcIiksaT1uKFwiZDg2NFwiKSx1PW4oXCIzNWU4XCIpLGM9bihcIjA3ZTNcIiksZj1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24odCxlLG4pe3ZhciBzLHAsbCxkPXQmYS5GLHY9dCZhLkcsaD10JmEuUyx5PXQmYS5QLGI9dCZhLkIsbT10JmEuVyxnPXY/bzpvW2VdfHwob1tlXT17fSkseD1nW2ZdLHc9dj9yOmg/cltlXToocltlXXx8e30pW2ZdO2ZvcihzIGluIHYmJihuPWUpLG4pcD0hZCYmdyYmdm9pZCAwIT09d1tzXSxwJiZjKGcscyl8fChsPXA/d1tzXTpuW3NdLGdbc109diYmXCJmdW5jdGlvblwiIT10eXBlb2Ygd1tzXT9uW3NdOmImJnA/aShsLHIpOm0mJndbc109PWw/ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24oZSxuLHIpe2lmKHRoaXMgaW5zdGFuY2VvZiB0KXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KGUpO2Nhc2UgMjpyZXR1cm4gbmV3IHQoZSxuKX1yZXR1cm4gbmV3IHQoZSxuLHIpfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIGVbZl09dFtmXSxlfShsKTp5JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2koRnVuY3Rpb24uY2FsbCxsKTpsLHkmJigoZy52aXJ0dWFsfHwoZy52aXJ0dWFsPXt9KSlbc109bCx0JmEuUiYmeCYmIXhbc10mJnUoeCxzLGwpKSl9O2EuRj0xLGEuRz0yLGEuUz00LGEuUD04LGEuQj0xNixhLlc9MzIsYS5VPTY0LGEuUj0xMjgsdC5leHBvcnRzPWF9LDY3MTg6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCJlNTNkXCIpLG89bihcIjU4NGFcIiksaT1uKFwiYjhlM1wiKSx1PW4oXCJjY2I5XCIpLGM9bihcImQ5ZjZcIikuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9by5TeW1ib2x8fChvLlN5bWJvbD1pP3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIGV8fGMoZSx0LHt2YWx1ZTp1LmYodCl9KX19LFwiNjdiYlwiOmZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9bihcImY5MjFcIil9LDY4MjE6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCI2MjZhXCIpLG89bihcImJlMTNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByKG8odCkpfX0sXCI2OWE4XCI6ZnVuY3Rpb24odCxlKXt2YXIgbj17fS5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbi5jYWxsKHQsZSl9fSxcIjY5ZDNcIjpmdW5jdGlvbih0LGUsbil7bihcIjY3MThcIikoXCJhc3luY0l0ZXJhdG9yXCIpfSxcIjZhOTlcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImQzZjRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIG4sbztpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQudG9TdHJpbmcpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2Yobj10LnZhbHVlT2YpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoIWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG49dC50b1N0cmluZykmJiFyKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxcIjZhYmZcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImU2ZjNcIiksbz1uKFwiMTY5MVwiKS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtlLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxcIjZiNGNcIjpmdW5jdGlvbih0LGUpe3ZhciBuPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gbi5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sXCI2YzFjXCI6ZnVuY3Rpb24odCxlLG4pe24oXCJjMzY3XCIpO2Zvcih2YXIgcj1uKFwiZTUzZFwiKSxvPW4oXCIzNWU4XCIpLGk9bihcIjQ4MWJcIiksdT1uKFwiNTE2OFwiKShcInRvU3RyaW5nVGFnXCIpLGM9XCJDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LERPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCxTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCxUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdFwiLnNwbGl0KFwiLFwiKSxmPTA7ZjxjLmxlbmd0aDtmKyspe3ZhciBhPWNbZl0scz1yW2FdLHA9cyYmcy5wcm90b3R5cGU7cCYmIXBbdV0mJm8ocCx1LGEpLGlbYV09aS5BcnJheX19LFwiNzFjMVwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiM2EzOFwiKSxvPW4oXCIyNWViXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXt2YXIgaSx1LGM9U3RyaW5nKG8oZSkpLGY9cihuKSxhPWMubGVuZ3RoO3JldHVybiBmPDB8fGY+PWE/dD9cIlwiOnZvaWQgMDooaT1jLmNoYXJDb2RlQXQoZiksaTw1NTI5Nnx8aT41NjMxOXx8ZisxPT09YXx8KHU9Yy5jaGFyQ29kZUF0KGYrMSkpPDU2MzIwfHx1PjU3MzQzP3Q/Yy5jaGFyQXQoZik6aTp0P2Muc2xpY2UoZixmKzIpOnUtNTYzMjArKGktNTUyOTY8PDEwKSs2NTUzNil9fX0sXCI3NjVkXCI6ZnVuY3Rpb24odCxlLG4pe24oXCI2NzE4XCIpKFwib2JzZXJ2YWJsZVwiKX0sNzcyNjpmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPW4pfSxcIjc3ZjFcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjQ1ODhcIiksbz1NYXRoLm1heCxpPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiB0PXIodCksdDwwP28odCtlLDApOmkodCxlKX19LFwiNzk0YlwiOmZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9IW4oXCI4ZTYwXCIpJiYhbihcIjI5NGNcIikoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4oXCIxZWM5XCIpKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LFwiNzlhYVwiOmZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sXCI3OWU1XCI6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKGUpe3JldHVybiEwfX19LFwiN2U5MFwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiZDlmNlwiKSxvPW4oXCJlNGFlXCIpLGk9bihcImMzYTFcIik7dC5leHBvcnRzPW4oXCI4ZTYwXCIpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsZSl7byh0KTt2YXIgbix1PWkoZSksYz11Lmxlbmd0aCxmPTA7d2hpbGUoYz5mKXIuZih0LG49dVtmKytdLGVbbl0pO3JldHVybiB0fX0sODM3ODpmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNi45XCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9bil9LDg0MzY6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxcIjg2Y2NcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImNiN2NcIiksbz1uKFwiYzY5YVwiKSxpPW4oXCI2YTk5XCIpLHU9T2JqZWN0LmRlZmluZVByb3BlcnR5O2UuZj1uKFwiOWUxZVwiKT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24odCxlLG4pe2lmKHIodCksZT1pKGUsITApLHIobiksbyl0cnl7cmV0dXJuIHUodCxlLG4pfWNhdGNoKGMpe31pZihcImdldFwiaW4gbnx8XCJzZXRcImluIG4pdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIG4mJih0W2VdPW4udmFsdWUpLHR9fSxcIjhiOTdcIjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImQzZjRcIiksbz1uKFwiY2I3Y1wiKSxpPWZ1bmN0aW9uKHQsZSl7aWYobyh0KSwhcihlKSYmbnVsbCE9PWUpdGhyb3cgVHlwZUVycm9yKGUrXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpfTt0LmV4cG9ydHM9e3NldDpPYmplY3Quc2V0UHJvdG90eXBlT2Z8fChcIl9fcHJvdG9fX1wiaW57fT9mdW5jdGlvbih0LGUscil7dHJ5e3I9bihcIjliNDNcIikoRnVuY3Rpb24uY2FsbCxuKFwiMTFlOVwiKS5mKE9iamVjdC5wcm90b3R5cGUsXCJfX3Byb3RvX19cIikuc2V0LDIpLHIodCxbXSksZT0hKHQgaW5zdGFuY2VvZiBBcnJheSl9Y2F0Y2gobyl7ZT0hMH1yZXR1cm4gZnVuY3Rpb24odCxuKXtyZXR1cm4gaSh0LG4pLGU/dC5fX3Byb3RvX189bjpyKHQsbiksdH19KHt9LCExKTp2b2lkIDApLGNoZWNrOml9fSxcIjhlNjBcIjpmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPSFuKFwiMjk0Y1wiKShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sXCI4ZjYwXCI6ZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oXCJhMTU5XCIpLG89bihcImFlYmRcIiksaT1uKFwiNDVmMlwiKSx1PXt9O24oXCIzNWU4XCIpKHUsbihcIjUxNjhcIikoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZT1yKHUse25leHQ6bygxLG4pfSksaSh0LGUrXCIgSXRlcmF0b3JcIil9fSw5MDAzOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiNmI0Y1wiKTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1yKHQpfX0sOTA5MzpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImNlMTBcIiksbz1uKFwiZTExZVwiKS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtlLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSw5MTM4OmZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9bihcIjM1ZThcIil9LFwiOWFhOVwiOmZ1bmN0aW9uKHQsZSl7ZS5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LFwiOWI0M1wiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiZDhlOFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKHIodCksdm9pZCAwPT09ZSlyZXR1cm4gdDtzd2l0Y2gobil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKGUsbil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24obixyKXtyZXR1cm4gdC5jYWxsKGUsbixyKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsbyl7cmV0dXJuIHQuY2FsbChlLG4scixvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoZSxhcmd1bWVudHMpfX19LFwiOWRlZlwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiNDU4OFwiKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28ocih0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sXCI5ZTFlXCI6ZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz0hbihcIjc5ZTVcIikoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGExNTk6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCJlNGFlXCIpLG89bihcIjdlOTBcIiksaT1uKFwiMTY5MVwiKSx1PW4oXCI1NTU5XCIpKFwiSUVfUFJPVE9cIiksYz1mdW5jdGlvbigpe30sZj1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxlPW4oXCIxZWM5XCIpKFwiaWZyYW1lXCIpLHI9aS5sZW5ndGgsbz1cIjxcIix1PVwiPlwiO2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixuKFwiMzJmY1wiKS5hcHBlbmRDaGlsZChlKSxlLnNyYz1cImphdmFzY3JpcHQ6XCIsdD1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQsdC5vcGVuKCksdC53cml0ZShvK1wic2NyaXB0XCIrdStcImRvY3VtZW50LkY9T2JqZWN0XCIrbytcIi9zY3JpcHRcIit1KSx0LmNsb3NlKCksYT10LkY7d2hpbGUoci0tKWRlbGV0ZSBhW2ZdW2lbcl1dO3JldHVybiBhKCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LGUpe3ZhciBuO3JldHVybiBudWxsIT09dD8oY1tmXT1yKHQpLG49bmV3IGMsY1tmXT1udWxsLG5bdV09dCk6bj1hKCksdm9pZCAwPT09ZT9uOm8obixlKX19LGFhNzc6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCI1Y2ExXCIpLG89bihcImJlMTNcIiksaT1uKFwiNzllNVwiKSx1PW4oXCJmZGVmXCIpLGM9XCJbXCIrdStcIl1cIixmPVwi4oCLwoVcIixhPVJlZ0V4cChcIl5cIitjK2MrXCIqXCIpLHM9UmVnRXhwKGMrYytcIiokXCIpLHA9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXt9LGM9aShmdW5jdGlvbigpe3JldHVybiEhdVt0XSgpfHxmW3RdKCkhPWZ9KSxhPW9bdF09Yz9lKGwpOnVbdF07biYmKG9bbl09YSkscihyLlArci5GKmMsXCJTdHJpbmdcIixvKX0sbD1wLnRyaW09ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD1TdHJpbmcobyh0KSksMSZlJiYodD10LnJlcGxhY2UoYSxcIlwiKSksMiZlJiYodD10LnJlcGxhY2UocyxcIlwiKSksdH07dC5leHBvcnRzPXB9LGFlYmQ6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6ZX19fSxiNDQ3OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiM2EzOFwiKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28ocih0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sYjhlMzpmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz0hMH0sYmUxMzpmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sYmYwYjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjM1NWRcIiksbz1uKFwiYWViZFwiKSxpPW4oXCIzNmMzXCIpLHU9bihcIjFiYzNcIiksYz1uKFwiMDdlM1wiKSxmPW4oXCI3OTRiXCIpLGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtlLmY9bihcIjhlNjBcIik/YTpmdW5jdGlvbih0LGUpe2lmKHQ9aSh0KSxlPXUoZSwhMCksZil0cnl7cmV0dXJuIGEodCxlKX1jYXRjaChuKXt9aWYoYyh0LGUpKXJldHVybiBvKCFyLmYuY2FsbCh0LGUpLHRbZV0pfX0sYzIwNzpmdW5jdGlvbih0LGUpe30sYzM2NjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjY4MjFcIiksbz1uKFwiOWRlZlwiKSxpPW4oXCI3N2YxXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuLHUpe3ZhciBjLGY9cihlKSxhPW8oZi5sZW5ndGgpLHM9aSh1LGEpO2lmKHQmJm4hPW4pe3doaWxlKGE+cylpZihjPWZbcysrXSxjIT1jKXJldHVybiEwfWVsc2UgZm9yKDthPnM7cysrKWlmKCh0fHxzIGluIGYpJiZmW3NdPT09bilyZXR1cm4gdHx8c3x8MDtyZXR1cm4hdCYmLTF9fX0sYzM2NzpmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bihcIjg0MzZcIiksbz1uKFwiNTBlZFwiKSxpPW4oXCI0ODFiXCIpLHU9bihcIjM2YzNcIik7dC5leHBvcnRzPW4oXCIzMGYxXCIpKEFycmF5LFwiQXJyYXlcIixmdW5jdGlvbih0LGUpe3RoaXMuX3Q9dSh0KSx0aGlzLl9pPTAsdGhpcy5faz1lfSxmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3QsZT10aGlzLl9rLG49dGhpcy5faSsrO3JldHVybiF0fHxuPj10Lmxlbmd0aD8odGhpcy5fdD12b2lkIDAsbygxKSk6bygwLFwia2V5c1wiPT1lP246XCJ2YWx1ZXNcIj09ZT90W25dOltuLHRbbl1dKX0sXCJ2YWx1ZXNcIiksaS5Bcmd1bWVudHM9aS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxjM2ExOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiZTZmM1wiKSxvPW4oXCIxNjkxXCIpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGM1ZjY6ZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oXCI3NzI2XCIpLG89bihcIjY5YThcIiksaT1uKFwiMmQ5NVwiKSx1PW4oXCI1ZGJjXCIpLGM9bihcIjZhOTlcIiksZj1uKFwiNzllNVwiKSxhPW4oXCI5MDkzXCIpLmYscz1uKFwiMTFlOVwiKS5mLHA9bihcIjg2Y2NcIikuZixsPW4oXCJhYTc3XCIpLnRyaW0sZD1cIk51bWJlclwiLHY9cltkXSxoPXYseT12LnByb3RvdHlwZSxiPWkobihcIjJhZWJcIikoeSkpPT1kLG09XCJ0cmltXCJpbiBTdHJpbmcucHJvdG90eXBlLGc9ZnVuY3Rpb24odCl7dmFyIGU9Yyh0LCExKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5sZW5ndGg+Mil7ZT1tP2UudHJpbSgpOmwoZSwzKTt2YXIgbixyLG8saT1lLmNoYXJDb2RlQXQoMCk7aWYoNDM9PT1pfHw0NT09PWkpe2lmKG49ZS5jaGFyQ29kZUF0KDIpLDg4PT09bnx8MTIwPT09bilyZXR1cm4gTmFOfWVsc2UgaWYoNDg9PT1pKXtzd2l0Y2goZS5jaGFyQ29kZUF0KDEpKXtjYXNlIDY2OmNhc2UgOTg6cj0yLG89NDk7YnJlYWs7Y2FzZSA3OTpjYXNlIDExMTpyPTgsbz01NTticmVhaztkZWZhdWx0OnJldHVybitlfWZvcih2YXIgdSxmPWUuc2xpY2UoMiksYT0wLHM9Zi5sZW5ndGg7YTxzO2ErKylpZih1PWYuY2hhckNvZGVBdChhKSx1PDQ4fHx1Pm8pcmV0dXJuIE5hTjtyZXR1cm4gcGFyc2VJbnQoZixyKX19cmV0dXJuK2V9O2lmKCF2KFwiIDBvMVwiKXx8IXYoXCIwYjFcIil8fHYoXCIrMHgxXCIpKXt2PWZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8MT8wOnQsbj10aGlzO3JldHVybiBuIGluc3RhbmNlb2YgdiYmKGI/ZihmdW5jdGlvbigpe3kudmFsdWVPZi5jYWxsKG4pfSk6aShuKSE9ZCk/dShuZXcgaChnKGUpKSxuLHYpOmcoZSl9O2Zvcih2YXIgeCx3PW4oXCI5ZTFlXCIpP2EoaCk6XCJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlclwiLnNwbGl0KFwiLFwiKSxPPTA7dy5sZW5ndGg+TztPKyspbyhoLHg9d1tPXSkmJiFvKHYseCkmJnAodix4LHMoaCx4KSk7di5wcm90b3R5cGU9eSx5LmNvbnN0cnVjdG9yPXYsbihcIjJhYmFcIikocixkLHYpfX0sYzY5YTpmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPSFuKFwiOWUxZVwiKSYmIW4oXCI3OWU1XCIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuKFwiMjMwZVwiKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxjYTVhOmZ1bmN0aW9uKHQsZSl7dmFyIG49MCxyPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrbityKS50b1N0cmluZygzNikpfX0sY2I3YzpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcImQzZjRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKCFyKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhbiBvYmplY3QhXCIpO3JldHVybiB0fX0sY2NiOTpmdW5jdGlvbih0LGUsbil7ZS5mPW4oXCI1MTY4XCIpfSxjZTEwOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiNjlhOFwiKSxvPW4oXCI2ODIxXCIpLGk9bihcImMzNjZcIikoITEpLHU9bihcIjYxM2JcIikoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbixjPW8odCksZj0wLGE9W107Zm9yKG4gaW4gYyluIT11JiZyKGMsbikmJmEucHVzaChuKTt3aGlsZShlLmxlbmd0aD5mKXIoYyxuPWVbZisrXSkmJih+aShhLG4pfHxhLnB1c2gobikpO3JldHVybiBhfX0sZDNmNDpmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIHR9fSxkODY0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiNzlhYVwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKHIodCksdm9pZCAwPT09ZSlyZXR1cm4gdDtzd2l0Y2gobil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKGUsbil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24obixyKXtyZXR1cm4gdC5jYWxsKGUsbixyKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsbyl7cmV0dXJuIHQuY2FsbChlLG4scixvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoZSxhcmd1bWVudHMpfX19LGQ4ZDY6ZnVuY3Rpb24odCxlLG4pe24oXCIxNjU0XCIpLG4oXCI2YzFjXCIpLHQuZXhwb3J0cz1uKFwiY2NiOVwiKS5mKFwiaXRlcmF0b3JcIil9LGQ4ZTg6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIHR9fSxkOWY2OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiZTRhZVwiKSxvPW4oXCI3OTRiXCIpLGk9bihcIjFiYzNcIiksdT1PYmplY3QuZGVmaW5lUHJvcGVydHk7ZS5mPW4oXCI4ZTYwXCIpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbih0LGUsbil7aWYocih0KSxlPWkoZSwhMCkscihuKSxvKXRyeXtyZXR1cm4gdSh0LGUsbil9Y2F0Y2goYyl7fWlmKFwiZ2V0XCJpbiBufHxcInNldFwiaW4gbil0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gbiYmKHRbZV09bi52YWx1ZSksdH19LGRiZGI6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCI1ODRhXCIpLG89bihcImU1M2RcIiksaT1cIl9fY29yZS1qc19zaGFyZWRfX1wiLHU9b1tpXXx8KG9baV09e30pOyh0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdVt0XXx8KHVbdF09dm9pZCAwIT09ZT9lOnt9KX0pKFwidmVyc2lvbnNcIixbXSkucHVzaCh7dmVyc2lvbjpyLnZlcnNpb24sbW9kZTpuKFwiYjhlM1wiKT9cInB1cmVcIjpcImdsb2JhbFwiLGNvcHlyaWdodDpcIsKpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSlcIn0pfSxlMTFlOmZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSxlNGFlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiZjc3MlwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxlNTNkOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9bil9LGU2ZjM6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oXCIwN2UzXCIpLG89bihcIjM2YzNcIiksaT1uKFwiNWI0ZVwiKSghMSksdT1uKFwiNTU1OVwiKShcIklFX1BST1RPXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBuLGM9byh0KSxmPTAsYT1bXTtmb3IobiBpbiBjKW4hPXUmJnIoYyxuKSYmYS5wdXNoKG4pO3doaWxlKGUubGVuZ3RoPmYpcihjLG49ZVtmKytdKSYmKH5pKGEsbil8fGEucHVzaChuKSk7cmV0dXJuIGF9fSxlYmZkOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKFwiNjJhMFwiKShcIm1ldGFcIiksbz1uKFwiZjc3MlwiKSxpPW4oXCIwN2UzXCIpLHU9bihcImQ5ZjZcIikuZixjPTAsZj1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFuKFwiMjk0Y1wiKShmdW5jdGlvbigpe3JldHVybiBmKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSkscz1mdW5jdGlvbih0KXt1KHQscix7dmFsdWU6e2k6XCJPXCIrICsrYyx3Ont9fX0pfSxwPWZ1bmN0aW9uKHQsZSl7aWYoIW8odCkpcmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDooXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJTXCI6XCJQXCIpK3Q7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuXCJGXCI7aWYoIWUpcmV0dXJuXCJFXCI7cyh0KX1yZXR1cm4gdFtyXS5pfSxsPWZ1bmN0aW9uKHQsZSl7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuITA7aWYoIWUpcmV0dXJuITE7cyh0KX1yZXR1cm4gdFtyXS53fSxkPWZ1bmN0aW9uKHQpe3JldHVybiBhJiZ2Lk5FRUQmJmYodCkmJiFpKHQscikmJnModCksdH0sdj10LmV4cG9ydHM9e0tFWTpyLE5FRUQ6ITEsZmFzdEtleTpwLGdldFdlYWs6bCxvbkZyZWV6ZTpkfX0sZjZmZDpmdW5jdGlvbih0LGUpeyhmdW5jdGlvbih0KXt2YXIgZT1cImN1cnJlbnRTY3JpcHRcIixuPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7ZSBpbiB0fHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtnZXQ6ZnVuY3Rpb24oKXt0cnl7dGhyb3cgbmV3IEVycm9yfWNhdGNoKHIpe3ZhciB0LGU9KC8uKmF0IFteXFwoXSpcXCgoLiopOi4rOi4rXFwpJC9naS5leGVjKHIuc3RhY2spfHxbITFdKVsxXTtmb3IodCBpbiBuKWlmKG5bdF0uc3JjPT1lfHxcImludGVyYWN0aXZlXCI9PW5bdF0ucmVhZHlTdGF0ZSlyZXR1cm4gblt0XTtyZXR1cm4gbnVsbH19fSl9KShkb2N1bWVudCl9LGY3NzI6ZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09PXR5cGVvZiB0fX0sZjkyMTpmdW5jdGlvbih0LGUsbil7bihcIjAxNGJcIiksbihcImMyMDdcIiksbihcIjY5ZDNcIiksbihcIjc2NWRcIiksdC5leHBvcnRzPW4oXCI1ODRhXCIpLlN5bWJvbH0sZmE1YjpmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPW4oXCI1NTM3XCIpKFwibmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZ1wiLEZ1bmN0aW9uLnRvU3RyaW5nKX0sZmFiMjpmdW5jdGlvbih0LGUsbil7dmFyIHI9bihcIjc3MjZcIikuZG9jdW1lbnQ7dC5leHBvcnRzPXImJnIuZG9jdW1lbnRFbGVtZW50fSxmYjE1OmZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcjsobi5yKGUpLFwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93KSYmKG4oXCJmNmZkXCIpLChyPXdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0KSYmKHI9ci5zcmMubWF0Y2goLyguK1xcLylbXi9dK1xcLmpzKFxcPy4qKT8kLykpJiYobi5wPXJbMV0pKTt2YXIgbz1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LiRjcmVhdGVFbGVtZW50LG49dC5fc2VsZi5fY3x8ZTtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcImRyb3Bkb3duXCIsY2xhc3M6e2Ryb3B1cDp0LnRvcH0sb246e21vdXNlbGVhdmU6dC5tb3VzZUxlYXZlLG1vdXNlb3Zlcjp0Lm1vdXNlT3Zlcixtb3VzZWVudGVyOnQubW91c2VFbnRlcixjbGljazp0LnRvZ2dsZU1lbnV9fSxbdC5fdChcImRlZmF1bHRcIiksbihcInRyYW5zaXRpb25cIix7YXR0cnM6e25hbWU6dC50cmFuc2l0aW9ufX0sW24oXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOnQudmFsdWUsZXhwcmVzc2lvbjpcInZhbHVlXCJ9XSxyZWY6XCJkcm9wZG93blwiLHN0YXRpY0NsYXNzOlwiZHJvcGRvd24tbWVudSBzaG93XCIsY2xhc3M6e1wiZHJvcGRvd24tbWVudS1yaWdodFwiOnQucmlnaHR9LHN0eWxlOnQuc3R5bGVzLG9uOnttb3VzZWxlYXZlOnQuc3RhcnRUaW1lcixtb3VzZWVudGVyOnQuc3RvcFRpbWVyLGNsaWNrOmZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCl9fX0sW3QuX3QoXCJkcm9wZG93blwiKV0sMildKV0sMil9LGk9W10sdT1uKFwiNWQ1OFwiKSxjPW4ubih1KSxmPW4oXCI2N2JiXCIpLGE9bi5uKGYpO2Z1bmN0aW9uIHModCl7cmV0dXJuIHM9XCJmdW5jdGlvblwiPT09dHlwZW9mIGEuYSYmXCJzeW1ib2xcIj09PXR5cGVvZiBjLmE/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuYSYmdC5jb25zdHJ1Y3Rvcj09PWEuYSYmdCE9PWEuYS5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0scyh0KX1mdW5jdGlvbiBwKHQpe3JldHVybiBwPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLmEmJlwic3ltYm9sXCI9PT1zKGMuYSk/ZnVuY3Rpb24odCl7cmV0dXJuIHModCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5hJiZ0LmNvbnN0cnVjdG9yPT09YS5hJiZ0IT09YS5hLnByb3RvdHlwZT9cInN5bWJvbFwiOnModCl9LHAodCl9bihcImM1ZjZcIik7dmFyIGw9e3Byb3BzOnt2YWx1ZTpCb29sZWFuLHJpZ2h0OkJvb2xlYW4saG92ZXI6Qm9vbGVhbixob3Zlcl90aW1lOnt0eXBlOk51bWJlcixkZWZhdWx0OjEwMH0saG92ZXJfdGltZW91dDp7dHlwZTpOdW1iZXIsZGVmYXVsdDo1MDB9LHN0eWxlczp7dHlwZTpPYmplY3QsZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybnt9fX0saW50ZXJhY3RpdmU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSx0cmFuc2l0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LGNsb3NlT25DbGlja091dHNpZGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntob3ZlcmluZzohMSx0b3A6ITF9fSxkZXN0cm95ZWQ6ZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xvc2VNZW51KX0sbWV0aG9kczp7bW91c2VFbnRlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5zdG9wVGltZXIoKSx0aGlzLmhvdmVyJiZ0aGlzLmhvdmVyX3RpbWU+MCYmIXRoaXMudmFsdWUmJih0aGlzLmhvdmVyT3BlblRpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LiRlbWl0KFwiaW5wdXRcIiwhMCksdC5ob3ZlcmluZz0hMCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5ob3ZlcmluZz0hMX0sdC5ob3Zlcl90aW1lb3V0KX0sdGhpcy5ob3Zlcl90aW1lKSksdGhpcy5ob3ZlciYmIXRoaXMudmFsdWUmJjA9PT10aGlzLmhvdmVyX3RpbWUmJih0aGlzLmhvdmVyaW5nPSEwLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmhvdmVyaW5nPSExfSx0aGlzLmhvdmVyX3RpbWVvdXQpLHRoaXMuJGVtaXQoXCJpbnB1dFwiLCEwKSl9LG1vdXNlTGVhdmU6ZnVuY3Rpb24oKXt0aGlzLmhvdmVyVGltZXJ8fHRoaXMuc3RhcnRUaW1lcigpLHRoaXMuaG92ZXJfdGltZT4wJiZ0aGlzLmhvdmVyJiZjbGVhclRpbWVvdXQodGhpcy5ob3Zlck9wZW5UaW1lcil9LG1vdXNlT3ZlcjpmdW5jdGlvbigpe3RoaXMuc3RvcFRpbWVyKCl9LGNsb3NlTWVudTpmdW5jdGlvbih0KXt0JiZ0aGlzLiRlbC5jb250YWlucyh0LnRhcmdldCl8fHRoaXMudmFsdWUmJnRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSYmdGhpcy4kZW1pdChcImlucHV0XCIsITEpfSx0b2dnbGVNZW51OmZ1bmN0aW9uKCl7dGhpcy5ob3ZlcmluZ3x8dGhpcy52YWx1ZSYmdGhpcy5ob3Zlcnx8dGhpcy4kZW1pdChcImlucHV0XCIsIXRoaXMudmFsdWUpfSxzdG9wVGltZXI6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5ob3ZlclRpbWVyKSx0aGlzLmhvdmVyVGltZXI9bnVsbH0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe3RoaXMuaW50ZXJhY3RpdmV8fCh0aGlzLmhvdmVyVGltZXI9c2V0VGltZW91dCh0aGlzLmNsb3NlTWVudSx0aGlzLmhvdmVyX3RpbWVvdXQpKX19LHdhdGNoOnt2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKHQpe3ZhciBuPXRoaXM7dGhpcy50b3A9ITEsdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKXt2YXIgdD1uLiRyZWZzLmRyb3Bkb3duLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHI9d2luZG93LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O2UudG9wPXQuYm90dG9tPnImJnQudG9wPj10LmhlaWdodH0pfX0saW50ZXJhY3RpdmU6e2hhbmRsZXI6ZnVuY3Rpb24odCl7XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT09dHlwZW9mIGRvY3VtZW50P1widW5kZWZpbmVkXCI6cChkb2N1bWVudCkpJiYodD9kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xvc2VNZW51KTpkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xvc2VNZW51KSl9LGltbWVkaWF0ZTohMH19fSxkPWw7ZnVuY3Rpb24gdih0LGUsbixyLG8saSx1LGMpe3ZhciBmLGE9XCJmdW5jdGlvblwiPT09dHlwZW9mIHQ/dC5vcHRpb25zOnQ7aWYoZSYmKGEucmVuZGVyPWUsYS5zdGF0aWNSZW5kZXJGbnM9bixhLl9jb21waWxlZD0hMCksciYmKGEuZnVuY3Rpb25hbD0hMCksaSYmKGEuX3Njb3BlSWQ9XCJkYXRhLXYtXCIraSksdT8oZj1mdW5jdGlvbih0KXt0PXR8fHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fHx0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuJHZub2RlJiZ0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCx0fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fCh0PV9fVlVFX1NTUl9DT05URVhUX18pLG8mJm8uY2FsbCh0aGlzLHQpLHQmJnQuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQodSl9LGEuX3NzclJlZ2lzdGVyPWYpOm8mJihmPWM/ZnVuY3Rpb24oKXtvLmNhbGwodGhpcyx0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpfTpvKSxmKWlmKGEuZnVuY3Rpb25hbCl7YS5faW5qZWN0U3R5bGVzPWY7dmFyIHM9YS5yZW5kZXI7YS5yZW5kZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZi5jYWxsKGUpLHModCxlKX19ZWxzZXt2YXIgcD1hLmJlZm9yZUNyZWF0ZTthLmJlZm9yZUNyZWF0ZT1wP1tdLmNvbmNhdChwLGYpOltmXX1yZXR1cm57ZXhwb3J0czp0LG9wdGlvbnM6YX19dmFyIGg9dihkLG8saSwhMSxudWxsLG51bGwsbnVsbCkseT1oLmV4cG9ydHMsYj1mdW5jdGlvbih0KXt0LmNvbXBvbmVudChcIkRyb3Bkb3duTWVudVwiLHkpfTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmd2luZG93LlZ1ZSYmYih3aW5kb3cuVnVlKTtlW1wiZGVmYXVsdFwiXT15fSxmZGVmOmZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPVwiXFx0XFxuXFx2XFxmXFxyIMKg4ZqA4aCO4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCJ9fSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1kcm9wZG93bi1tZW51LnVtZC5taW4uanMubWFwIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXYgOmNsYXNzPVwie1xyXG5cdFx0J3dyYXAnOiB0cnVlLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXItcGFnZSc6IHRydWUsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzJzogdHJ1ZSxcclxuXHR9XCI+XHJcblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyBfXyggJ0pldEZvcm1CdWlsZGVyIFBheXBhbCBSZWN1cnJpbmcgUGF5bWVudHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvaDE+XHJcblx0XHQ8RW50cmllc1RhYmxlXHJcblx0XHRcdDplbnRyaWVzLWxpc3Q9XCJsaXN0XCJcclxuXHRcdFx0OmNvbHVtbnM9XCJjb2x1bW5zRnJvbVN0b3JlXCJcclxuXHRcdFx0OmNvbHVtbnMtY29tcG9uZW50cz1cImNvbHVtbnNDb21wb25lbnRzXCJcclxuXHRcdC8+XHJcblx0XHQ8Y3gtdnVpLXBvcHVwXHJcblx0XHRcdHYtbW9kZWw9XCJpc1Nob3dQb3B1cFwiXHJcblx0XHRcdGJvZHktd2lkdGg9XCI2MHZ3XCJcclxuXHRcdFx0OmZvb3Rlcj1cImZhbHNlXCJcclxuXHRcdFx0QG9uLWNhbmNlbD1cImNsb3NlUG9wdXBcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2NvbnRlbnQ+XHJcblx0XHRcdFx0PGgzPnt7IF9fKCAnSXNzdWUgUmVmdW5kJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L2gzPlxyXG5cdFx0XHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0XHRcdDpsYWJlbD1cImN1cnJlbnRQYXlsb2FkLmNvbnRhY3RfbmFtZS5sYWJlbFwiXHJcblx0XHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0XHRcdDp2YWx1ZT1cImN1cnJlbnQuc3Vic2NyaWJlci52YWx1ZS5uYW1lLmdpdmVuX25hbWUgKyAnICcgKyBjdXJyZW50LnN1YnNjcmliZXIudmFsdWUubmFtZS5zdXJuYW1lXCJcclxuXHRcdFx0XHRcdHNpemU9XCJmdWxsd2lkdGhcIlxyXG5cdFx0XHRcdFx0ZGlzYWJsZWRcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0XHRcdDpsYWJlbD1cImN1cnJlbnRQYXlsb2FkLmNvbnRhY3RfZW1haWwubGFiZWxcIlxyXG5cdFx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0XHQ6dmFsdWU9XCJjdXJyZW50LnN1YnNjcmliZXIudmFsdWUuZW1haWxfYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcclxuXHRcdFx0XHRcdGRpc2FibGVkXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdFx0XHQ6bGFiZWw9XCJjdXJyZW50UGF5bG9hZC5hbW91bnQubGFiZWxcIlxyXG5cdFx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0XHQ6dmFsdWU9XCJjdXJyZW50Lmdyb3NzLnZhbHVlXCJcclxuXHRcdFx0XHRcdHNpemU9XCJmdWxsd2lkdGhcIlxyXG5cdFx0XHRcdFx0ZGlzYWJsZWRcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0XHRcdDpsYWJlbD1cImN1cnJlbnRQYXlsb2FkLmludm9pY2VfaWQubGFiZWxcIlxyXG5cdFx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwiY3VycmVudFBheWxvYWQuaW52b2ljZV9pZC52YWx1ZVwiXHJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0XHRcdDpsYWJlbD1cImN1cnJlbnRQYXlsb2FkLm5vdGVfdG9fcGF5ZXIubGFiZWxcIlxyXG5cdFx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwiY3VycmVudFBheWxvYWQubm90ZV90b19wYXllci52YWx1ZVwiXHJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC9jeC12dWktcG9wdXA+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvYWRtaW4vZGVmYXVsdC5zY3NzJztcclxuaW1wb3J0ICogYXMgc3Vic2NyaWJlciBmcm9tICcuLi8uLi9wYXlwYWwvc3Vic2NyaWJlcic7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vcGF5cGFsL2FjdGlvbnMnO1xyXG5cclxuVnVlLmNvbmZpZy5kZXZ0b29scyA9IHRydWU7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7IEdldEluY29taW5nLCBpMThuIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XHJcbmNvbnN0IHsgRW50cmllc1RhYmxlLCBEZXRhaWxzVGFibGVXaXRoU3RvcmUgfSA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBjb2x1bW5zQ29tcG9uZW50cyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5wYXlwYWwucmVjdXJyaW5nLXBheW1lbnRzLmNvbHVtbnMnLCBbXHJcblx0c3Vic2NyaWJlcixcclxuXHRhY3Rpb25zLFxyXG5dICk7XHJcblxyXG53aW5kb3cuamZiRXZlbnRCdXMgPSB3aW5kb3cuamZiRXZlbnRCdXMgfHwgbmV3IFZ1ZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdqZmItcGF5cGFsLXJlY3VycmluZy1wYXltZW50cycsXHJcblx0Y29tcG9uZW50czogeyBEZXRhaWxzVGFibGVXaXRoU3RvcmUsIEVudHJpZXNUYWJsZSB9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsaXN0OiBbXSxcclxuXHRcdFx0Y3VycmVudDoge30sXHJcblx0XHRcdGN1cnJlbnRQYXlsb2FkOiB7fSxcclxuXHRcdFx0c2V0dGluZ3M6IHt9LFxyXG5cdFx0XHRhY3Rpb25zOiB7fSxcclxuXHRcdFx0Y29sdW1uc0NvbXBvbmVudHMsXHJcblx0XHRcdGlzU2hvd1BvcHVwOiBmYWxzZSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRtaXhpbnM6IFsgR2V0SW5jb21pbmcsIGkxOG4gXSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0Y29uc3QgeyBsaXN0ID0gW10sIGNvbHVtbnMgPSB7fSwgYWN0aW9ucyA9IHt9IH0gPSB0aGlzLmdldEluY29taW5nKCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGxpc3QgKSApO1xyXG5cdFx0dGhpcy5hY3Rpb25zID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKSApO1xyXG5cclxuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3NldENvbHVtbnMnLCBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggY29sdW1ucyApICkgKTtcclxuXHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdjbGljay1yZWZ1bmQnLCB0aGlzLnJlZnVuZC5iaW5kKCB0aGlzICkgKTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRjb2x1bW5zRnJvbVN0b3JlKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDb2x1bW5zO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHJlZnVuZCggcGF5bG9hZCwgZW50cnkgKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudCA9IGVudHJ5O1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRQYXlsb2FkID0gcGF5bG9hZDtcclxuXHJcblx0XHRcdHRoaXMub3BlblBvcHVwKCk7XHJcblx0XHR9LFxyXG5cdFx0b3BlblBvcHVwKCkge1xyXG5cdFx0XHR0aGlzLmlzU2hvd1BvcHVwID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRjbG9zZVBvcHVwKCkge1xyXG5cdFx0XHR0aGlzLmlzU2hvd1BvcHVwID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY3VycmVudCA9IHt9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHJcbi5jeC12dWUtbGlzdC10YWJsZSB7XHJcblxyXG5cdC5saXN0LXRhYmxlLWl0ZW1fX2NlbGwge1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQuY2VsbC0tZGF0ZSB7XHJcblx0XHR3aWR0aDogMjAlO1xyXG5cdH1cclxuXHJcblx0LmNlbGwtLXN0YXR1cyB7XHJcblx0XHR3aWR0aDogMjAlO1xyXG5cdH1cclxuXHJcblx0LmNlbGwtLXN1YnNjcmliZXIge1xyXG5cdFx0d2lkdGg6IDIwJTtcclxuXHR9XHJcblxyXG5cdC5jZWxsLS1ncm9zcyB7XHJcblx0XHR3aWR0aDogMjAlO1xyXG5cdH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHQ8RHJvcGRvd25NZW51XHJcblx0XHR2LW1vZGVsPVwic2hvd0Ryb3Bkb3duXCJcclxuXHRcdDppbnRlcmFjdGl2ZT1cInRydWVcIlxyXG5cdD5cclxuXHRcdDxzcGFuXHJcblx0XHRcdGNsYXNzPVwiZGFzaGljb25zIGRhc2hpY29ucy1lbGxpcHNpc1wiXHJcblx0XHQ+PC9zcGFuPlxyXG5cdFx0PHRlbXBsYXRlICNkcm9wZG93bj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1kcm9wZG93blwiPlxyXG5cdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1kcm9wZG93bi1pdGVtXCJcclxuXHRcdFx0XHRcdGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG5cdFx0XHRcdFx0di1mb3I9XCIoIGFjdGlvbiwgYWN0aW9uSUQgKSBpbiBwYXJzZWRKc29uXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cInJ1biggYWN0aW9uSUQgKVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e3sgYWN0aW9uLmxhYmVsIH19XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC9Ecm9wZG93bk1lbnU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJ0Bpbm5vbG9naWNhL3Z1ZS1kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IFBhcnNlSW5jb21pbmdWYWx1ZU1peGluIGZyb20gJy4uL1BhcnNlSW5jb21pbmdWYWx1ZU1peGluJztcclxuXHJcbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2FjdGlvbnMtLWl0ZW0nLFxyXG5cdHByb3BzOiBbICd2YWx1ZScsICdmdWxsLWVudHJ5JyBdLFxyXG5cdGNvbXBvbmVudHM6IHsgRHJvcGRvd25NZW51IH0sXHJcblx0bWl4aW5zOiBbIFBhcnNlSW5jb21pbmdWYWx1ZU1peGluIF0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNob3dEcm9wZG93bjogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0cnVuKCBhY3Rpb25JRCApIHtcclxuXHRcdFx0amZiRXZlbnRCdXMuJGVtaXQoXHJcblx0XHRcdFx0YGNsaWNrLSR7IGFjdGlvbklEIH1gLFxyXG5cdFx0XHRcdHRoaXMucGFyc2VkSnNvblsgYWN0aW9uSUQgXT8ucGF5bG9hZCB8fCB7fSxcclxuXHRcdFx0XHR0aGlzLmZ1bGxFbnRyeSB8fCB7fSxcclxuXHRcdFx0KTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHJcbi5qZmItZHJvcGRvd24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDAuNmVtIDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMS4yZW07XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHJcblx0Ji1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cGFkZGluZzogMC41ZW0gMC4zZW07XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdFx0Jjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcblx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PHNwYW4+e3sgcGFyc2VkSnNvbi5uYW1lLmdpdmVuX25hbWUgKyAnICcgKyBwYXJzZWRKc29uLm5hbWUuc3VybmFtZSB9fTwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBQYXJzZUluY29taW5nVmFsdWVNaXhpbiBmcm9tICcuLi9QYXJzZUluY29taW5nVmFsdWVNaXhpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3N1YnNjcmliZXItLWl0ZW0nLFxyXG5cdG1peGluczogWyBQYXJzZUluY29taW5nVmFsdWVNaXhpbiBdXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IFsgJ3ZhbHVlJywgJ2Z1bGwtZW50cnknIF0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBhcnNlZEpzb246IHt9XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMucGFyc2VkSnNvbiA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLnZhbHVlICkgKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQWN0aW9uc0l0ZW0gZnJvbSAnLi9BY3Rpb25zSXRlbSc7XHJcblxyXG5jb25zdCBpdGVtID0gQWN0aW9uc0l0ZW07XHJcblxyXG5leHBvcnQgeyBpdGVtIH07IiwiaW1wb3J0IFN1YnNjcmliZXJJbmZvIGZyb20gJy4vU3Vic2NyaWJlckluZm8nO1xyXG5cclxuY29uc3QgaXRlbSA9IFN1YnNjcmliZXJJbmZvO1xyXG5cclxuZXhwb3J0IHsgaXRlbSB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmpldC1mb3JtLWJ1aWxkZXItcGFnZSBwLmZiLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL3Njc3MvYWRtaW4vZGVmYXVsdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNDO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5qZXQtZm9ybS1idWlsZGVyLXBhZ2Uge1xcclxcblxcdHAuZmItZGVzY3JpcHRpb24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTNweDtcXHJcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXHJcXG5cXHRcXHRtYXJnaW46IDAgMCAxLjVyZW0gMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jeC12dWUtbGlzdC10YWJsZSAubGlzdC10YWJsZS1pdGVtX19jZWxsIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY3gtdnVlLWxpc3QtdGFibGUgLmNlbGwtLWRhdGUge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5jZWxsLS1zdGF0dXMge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5jZWxsLS1zdWJzY3JpYmVyIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tZ3Jvc3Mge1xcbiAgd2lkdGg6IDIwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1yZWN1cnJpbmctcGF5bWVudHMvUmVjdXJyaW5nUGF5bWVudHMudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9SZWN1cnJpbmdQYXltZW50cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0lDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQ2pJRjtBRG9JQztFQUNDLFVBQUE7QUNsSUY7QURxSUM7RUFDQyxVQUFBO0FDbklGO0FEc0lDO0VBQ0MsVUFBQTtBQ3BJRjtBRHVJQztFQUNDLFVBQUE7QUNySUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuXFxyXFxuLmN4LXZ1ZS1saXN0LXRhYmxlIHtcXHJcXG5cXHJcXG5cXHQubGlzdC10YWJsZS1pdGVtX19jZWxsIHtcXHJcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jZWxsLS1kYXRlIHtcXHJcXG5cXHRcXHR3aWR0aDogMjAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY2VsbC0tc3RhdHVzIHtcXHJcXG5cXHRcXHR3aWR0aDogMjAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY2VsbC0tc3Vic2NyaWJlciB7XFxyXFxuXFx0XFx0d2lkdGg6IDIwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNlbGwtLWdyb3NzIHtcXHJcXG5cXHRcXHR3aWR0aDogMjAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIuY3gtdnVlLWxpc3QtdGFibGUgLmxpc3QtdGFibGUtaXRlbV9fY2VsbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5jZWxsLS1kYXRlIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tc3RhdHVzIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tc3Vic2NyaWJlciB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4uY3gtdnVlLWxpc3QtdGFibGUgLmNlbGwtLWdyb3NzIHtcXG4gIHdpZHRoOiAyMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qZmItZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAuNmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5qZmItZHJvcGRvd24taXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNWVtIDAuM2VtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uamZiLWRyb3Bkb3duLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuLmpmYi1kcm9wZG93bi1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYXlwYWwvYWN0aW9ucy9BY3Rpb25zSXRlbS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL0FjdGlvbnNJdGVtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFxREE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNwREQ7QURzREM7RUFDQyxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ3BERjtBRHNERTtFQUNDLHlCQUFBO0FDcERIO0FEdURFO0VBQ0MsNkJBQUE7QUNyREhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuXFxyXFxuLmpmYi1kcm9wZG93biB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0cGFkZGluZzogMC42ZW0gMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcblxcclxcblxcdCYtaXRlbSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0cGFkZGluZzogMC41ZW0gMC4zZW07XFxyXFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6bm90KDpmaXJzdC1jaGlsZCkge1xcclxcblxcdFxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiLFwiLmpmYi1kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMC42ZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG59XFxuLmpmYi1kcm9wZG93bi1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41ZW0gMC4zZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qZmItZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbn1cXG4uamZiLWRyb3Bkb3duLWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWY1ZjU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWN1cnJpbmdQYXltZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTJmNmIyNjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVjdXJyaW5nUGF5bWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWN1cnJpbmdQYXltZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUmVjdXJyaW5nUGF5bWVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5ob21lLmNvbVxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzEyZjZiMjYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzEyZjZiMjYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzEyZjZiMjYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWN1cnJpbmdQYXltZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTJmNmIyNjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTJmNmIyNjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzL1JlY3VycmluZ1BheW1lbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWN0aW9uc0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzZjBmZmIwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FjdGlvbnNJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWN0aW9uc0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FjdGlvbnNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuaG9tZS5jb21cXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyM2YwZmZiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyM2YwZmZiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyM2YwZmZiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWN0aW9uc0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzZjBmZmIwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIzZjBmZmIwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYXlwYWwvYWN0aW9ucy9BY3Rpb25zSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1YnNjcmliZXJJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOTY4ZjFlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1YnNjcmliZXJJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuaG9tZS5jb21cXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhOTY4ZjFlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhOTY4ZjFlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhOTY4ZjFlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3Vic2NyaWJlckluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE5NjhmMWUyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E5NjhmMWUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYXlwYWwvc3Vic2NyaWJlci9TdWJzY3JpYmVySW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVjdXJyaW5nUGF5bWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVjdXJyaW5nUGF5bWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGlvbnNJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGlvbnNJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIHdyYXA6IHRydWUsXG4gICAgICAgIFwiamV0LWZvcm0tYnVpbGRlci1wYWdlXCI6IHRydWUsXG4gICAgICAgIFwiamV0LWZvcm0tYnVpbGRlci1wYWdlLS1wYXlwYWwtcmVjdXJyaW5nLXBheW1lbnRzXCI6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImNzLXZ1aS10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgIF92bS5fXyhcbiAgICAgICAgICAgICAgXCJKZXRGb3JtQnVpbGRlciBQYXlwYWwgUmVjdXJyaW5nIFBheW1lbnRzXCIsXG4gICAgICAgICAgICAgIFwiamV0LWZvcm0tYnVpbGRlclwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJFbnRyaWVzVGFibGVcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiZW50cmllcy1saXN0XCI6IF92bS5saXN0LFxuICAgICAgICAgIGNvbHVtbnM6IF92bS5jb2x1bW5zRnJvbVN0b3JlLFxuICAgICAgICAgIFwiY29sdW1ucy1jb21wb25lbnRzXCI6IF92bS5jb2x1bW5zQ29tcG9uZW50cyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLXBvcHVwXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJib2R5LXdpZHRoXCI6IFwiNjB2d1wiLCBmb290ZXI6IGZhbHNlIH0sXG4gICAgICAgIG9uOiB7IFwib24tY2FuY2VsXCI6IF92bS5jbG9zZVBvcHVwIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oXCJJc3N1ZSBSZWZ1bmRcIiwgXCJqZXQtZm9ybS1idWlsZGVyXCIpKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmN1cnJlbnRQYXlsb2FkLmNvbnRhY3RfbmFtZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudC5zdWJzY3JpYmVyLnZhbHVlLm5hbWUuZ2l2ZW5fbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50LnN1YnNjcmliZXIudmFsdWUubmFtZS5zdXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmN1cnJlbnRQYXlsb2FkLmNvbnRhY3RfZW1haWwubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50LnN1YnNjcmliZXIudmFsdWUuZW1haWxfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS5jdXJyZW50UGF5bG9hZC5hbW91bnQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50Lmdyb3NzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmN1cnJlbnRQYXlsb2FkLmludm9pY2VfaWQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYXlsb2FkLmludm9pY2VfaWQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmN1cnJlbnRQYXlsb2FkLmludm9pY2VfaWQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRQYXlsb2FkLmludm9pY2VfaWQudmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmN1cnJlbnRQYXlsb2FkLm5vdGVfdG9fcGF5ZXIubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYXlsb2FkLm5vdGVfdG9fcGF5ZXIudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmN1cnJlbnRQYXlsb2FkLm5vdGVfdG9fcGF5ZXIsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRQYXlsb2FkLm5vdGVfdG9fcGF5ZXIudmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmlzU2hvd1BvcHVwLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICBfdm0uaXNTaG93UG9wdXAgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNTaG93UG9wdXBcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJEcm9wZG93bk1lbnVcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBpbnRlcmFjdGl2ZTogdHJ1ZSB9LFxuICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiZHJvcGRvd25cIixcbiAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1kcm9wZG93blwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJzZWRKc29uLCBmdW5jdGlvbiAoYWN0aW9uLCBhY3Rpb25JRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJ1bihhY3Rpb25JRClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGFjdGlvbi5sYWJlbCkgKyBcIlxcblxcdFxcdFxcdFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0pLFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS5zaG93RHJvcGRvd24sXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgX3ZtLnNob3dEcm9wZG93biA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInNob3dEcm9wZG93blwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkYXNoaWNvbnMgZGFzaGljb25zLWVsbGlwc2lzXCIgfSldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF92bS5fdihcbiAgICAgIF92bS5fcyhfdm0ucGFyc2VkSnNvbi5uYW1lLmdpdmVuX25hbWUgKyBcIiBcIiArIF92bS5wYXJzZWRKc29uLm5hbWUuc3VybmFtZSlcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdC5zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM0NjhiOTdlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZWZhdWx0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdC5zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVjdXJyaW5nUGF5bWVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMTcxNDhjNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlY3VycmluZ1BheW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlY3VycmluZ1BheW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY3Rpb25zSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImE4ZGNlZGY0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aW9uc0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aW9uc0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBSZWN1cnJpbmdQYXltZW50cyBmcm9tICcuL1JlY3VycmluZ1BheW1lbnRzJztcclxuXHJcblZ1ZS51c2UoIFZ1ZXggKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcblx0c3RvcmU6IG5ldyBWdWV4LlN0b3JlKCB7XHJcblx0XHRzdGF0ZToge1xyXG5cdFx0XHRjb2x1bW5zOiB7fSxcclxuXHRcdH0sXHJcblx0XHRnZXR0ZXJzOiB7XHJcblx0XHRcdGlzQ2hlY2tlZDogc3RhdGUgPT4gaWQgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBzdGF0ZS5jaGVja2VkLmluY2x1ZGVzKCBpZCApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDdXJyZW50OiBzdGF0ZSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRQb3B1cERhdGE7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENvbHVtbnM6IHN0YXRlID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGUuY29sdW1ucztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG11dGF0aW9uczoge1xyXG5cdFx0XHRzZXRDb2x1bW5zKCBzdGF0ZSwgY29sdW1ucyApIHtcclxuXHRcdFx0XHRzdGF0ZS5jb2x1bW5zID0gY29sdW1ucztcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Q3VycmVudCggc3RhdGUsIGN1cnJlbnQgKSB7XHJcblx0XHRcdFx0c3RhdGUuY3VycmVudFBvcHVwRGF0YSA9IGN1cnJlbnQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsZWFyQ3VycmVudCggc3RhdGUgKSB7XHJcblx0XHRcdFx0c3RhdGUuY3VycmVudFBvcHVwRGF0YSA9IHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZGRUb1N0b3JlKCBzdGF0ZSwgeyBpZCB9ICkge1xyXG5cdFx0XHRcdHN0YXRlLmlkTGlzdC5wdXNoKCBpZCApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZGRDaGVja2VkKCBzdGF0ZSwgeyBpZCB9ICkge1xyXG5cdFx0XHRcdHN0YXRlLmNoZWNrZWQucHVzaCggaWQgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVtb3ZlQWxsKCBzdGF0ZSApIHtcclxuXHRcdFx0XHRzdGF0ZS5jaGVja2VkID0gW107XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjdGl2ZUFsbCggc3RhdGUgKSB7XHJcblx0XHRcdFx0c3RhdGUuY2hlY2tlZCA9IFsgLi4uc3RhdGUuaWRMaXN0IF07XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlbW92ZUNoZWNrZWQoIHN0YXRlLCB7IGlkIH0gKSB7XHJcblx0XHRcdFx0c3RhdGUuY2hlY2tlZCA9IHN0YXRlLmNoZWNrZWQuZmlsdGVyKCBjaGVja2VkID0+IChcclxuXHRcdFx0XHRcdGNoZWNrZWQgIT09IGlkXHJcblx0XHRcdFx0KSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGFjdGlvbnM6IHtcclxuXHRcdFx0Y2hhbmdlQ2hlY2tlZCggeyBjb21taXQgfSwgeyBpZCwgYWN0aXZlIH0gKSB7XHJcblx0XHRcdFx0aWYgKCBhY3RpdmUgKSB7XHJcblx0XHRcdFx0XHRjb21taXQoICdhZGRDaGVja2VkJywgeyBpZCB9ICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbW1pdCggJ3JlbW92ZUNoZWNrZWQnLCB7IGlkIH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0gKSxcclxufTtcclxuXHJcbmNvbnN0IHsgcmVuZGVyQ3VycmVudFBhZ2UgfSA9IHdpbmRvdy5KZXRGQkFjdGlvbnM7XHJcblxyXG5yZW5kZXJDdXJyZW50UGFnZSggUmVjdXJyaW5nUGF5bWVudHMsIG9wdGlvbnMgKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9