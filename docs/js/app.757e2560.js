(function(e){function n(n){for(var o,a,c=n[0],u=n[1],l=n[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"605140a8"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var l=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,t[1](l)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var f=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"28d6":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],a=(t("5c0b"),t("2877")),c={},u=Object(a["a"])(c,r,i,!1,null,null,null),l=u.exports,s=t("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var f=t("8c4f"),p=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),o("HelloWorld",{attrs:{msg:"网站建设中"}})],1)},d=[],v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))])])},b=[],g={name:"HelloWorld",props:{msg:String}},m=g,h=(t("67eb"),Object(a["a"])(m,v,b,!1,null,"7809147a",null)),y=h.exports,w={name:"Home",components:{HelloWorld:y}},_=w,j=Object(a["a"])(_,p,d,!1,null,null,null),O=j.exports;o["a"].use(f["a"]);var k=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],x=new f["a"]({mode:"history",base:"/",routes:k}),P=x;o["a"].config.productionTip=!1,new o["a"]({router:P,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("9c0c"),r=t.n(o);r.a},"67eb":function(e,n,t){"use strict";var o=t("28d6"),r=t.n(o);r.a},"9c0c":function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.00b7efe9.png"}});
//# sourceMappingURL=app.757e2560.js.map