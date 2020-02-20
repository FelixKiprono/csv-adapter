(function(t){function a(a){for(var e,c,n=a[0],r=a[1],o=a[2],f=0,d=[];f<n.length;f++)c=n[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(a);while(d.length)d.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],e=!0,n=1;n<s.length;n++){var r=s[n];0!==i[r]&&(e=!1)}e&&(l.splice(a--,1),t=c(c.s=s[0]))}return t}var e={},i={app:0},l=[];function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=e,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(s,e,function(a){return t[a]}.bind(null,e));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var u=r;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0563":function(t,a,s){"use strict";var e=s("b513"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=s("8c4f"),l=s("5f5b"),c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Header")],1)},n=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Csv adapter")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",active:""}},[t._v("Convert")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/account"}},[t._v("Account")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Help")])],1)])])],1)]),s("router-view")],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],u={name:"header",data:function(){return{}}},f=u,d=(s("8baf"),s("2877")),p=Object(d["a"])(f,r,o,!1,null,null,null),v=p.exports,m={name:"app",components:{Header:v}},C=m,h=Object(d["a"])(C,c,n,!1,null,null,null),b=h.exports,_=(s("3d20"),s("ab8b"),s("2dd8"),s("bc3a")),g=s.n(_),y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"card border-0 shadow my-5"},[s("div",{staticClass:"card-body p-5"},[s("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("Nb: Please convert your file to csv first before uploading")]),s("div",{staticClass:"dropfile"},[s("input",{ref:"file",staticClass:"fileinput",attrs:{type:"file"},on:{change:t.onChange}}),s("h2",{staticClass:"inputtext"},[t._v("Drop csv file here")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[t._v(" Target Type "),s("b-form-select",{attrs:{placeholder:"Target type",options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[t._v(" -- Please select an target type -- ")])],1),s("div",{staticClass:"col-sm-4"},[t._v(" Your table name "),s("b-form-input",{attrs:{placeholder:"tablename"},model:{value:t.tablename,callback:function(a){t.tablename=a},expression:"tablename"}})],1),s("div",{staticClass:"col-sm-4"},[t._v(" Enter column names and press enter "),s("b-form-tags",{staticClass:"mb-3",attrs:{"input-id":"tags-basic",separator:" ,;",placeholder:"add column name","tag-variant":"primary"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),s("div",{staticClass:"col-sm-4"},[s("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(a){return t.uploadFile()}}},[t._v("Convert File")])],1)]),s("div",[s("br"),s("b-form-textarea",{staticStyle:{"font-family":"monospace"},attrs:{id:"textarea-rows",placeholder:"Converted output",rows:"8"},model:{value:t.convertedData,callback:function(a){t.convertedData=a},expression:"convertedData"}}),s("div",{staticClass:"mt-3"},[s("b-button-group",{attrs:{size:"sm"}},[s("b-button",[t._v("Copy")]),s("b-button",{on:{click:function(a){return t.clear()}}},[t._v("Clear")])],1)],1)],1)],1)])]),s("Footer")],1)},x=[],k=(s("4160"),s("159b"),function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)}),w=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"py-4 bg-light text-black-50",attrs:{id:"sticky-footer"}},[s("div",{staticClass:"container text-center"},[s("small",[t._v("Copyright ©2020 Csvadapter ")])])])])}],E={name:"footer",data:function(){return{}}},O=E,$=(s("760c"),Object(d["a"])(O,k,w,!1,null,null,null)),P=$.exports,S={name:"spreadsheet",components:{Footer:P},data:function(){return{http:"https://api.csvadapter.com/",file:"",selected:"SQL",options:["SQL","MySQL","MsSQL","PostgreSQL","SQLite"],convertedData:"",name:"SQL and MySQL",tablename:"",columns:"",value:[]}},methods:{clear:function(){this.convertedData=""},onChange:function(t){var a=t.target.files[0];this.file=a},uploadFile:function(){var t=this;if(""!==this.file){var a="";if(null!=this.value){var s=0;this.value.forEach((function(e){s++,a+=e,s<t.value.length&&(a+=",")}))}else a="";this.columns=a;var e=new FormData;e.append("file",this.file),e.append("type",this.selected),e.append("table",this.tablename),e.append("columns",this.columns),this.$http.post(this.http,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){t.convertedData=a.data})).catch((function(t){window.console.log(t)}))}else alert("You cannot convert empty file ")}}},A=S,j=(s("726e"),Object(d["a"])(A,y,x,!1,null,null,null)),T=j.exports,F=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),s("Footer")],1)},L=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"pricing py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-5 mb-lg-0"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title text-muted text-uppercase text-center"},[t._v("Basic")]),s("h6",{staticClass:"card-price text-center"},[t._v("$0"),s("span",{staticClass:"period"},[t._v("/Forever")])]),s("hr"),s("ul",{staticClass:"fa-ul"},[s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Ads present ")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Only Convert csv file to sql")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Limited sessions per day")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Limited upload size")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Personal and small scale use")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")])]),s("a",{staticClass:"btn btn-block btn-success text-uppercase",attrs:{href:"#"}},[t._v("Available")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card mb-5 mb-lg-0"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title text-muted text-uppercase text-center"},[t._v("Plus")]),s("h6",{staticClass:"card-price text-center"},[t._v("$15"),s("span",{staticClass:"period"},[t._v("/month")])]),s("hr"),s("ul",{staticClass:"fa-ul"},[s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("No Ads")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Convert to more formats")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Choos the type of Query")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Unlimited sessions")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Unlimited table rows")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Unlimited uploads size")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Monthly payment cancel anytime")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-times"})]),t._v("-")])]),s("a",{staticClass:"btn btn-block btn-success text-uppercase",attrs:{href:"#"}},[t._v("Comming Soon")])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title text-muted text-uppercase text-center"},[t._v("Pro")]),s("h6",{staticClass:"card-price text-center"},[t._v("$100"),s("span",{staticClass:"period"},[t._v("/yearly")])]),s("hr"),s("ul",{staticClass:"fa-ul"},[s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("No Ads")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Choos the type of Query")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Unlimited sessions")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Unlimited table rows")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Unlimited uploads size")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Commercial large scale use")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Save your data online")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Annual payment cancel anytime")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("Dedicated Support")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v("API Access")])]),s("a",{staticClass:"btn btn-block btn-success text-uppercase",attrs:{href:"#"}},[t._v("Comming Soon")])])])])])])])}],M={name:"pricing",components:{Footer:P},data:function(){return{}}},D=M,Q=(s("0563"),Object(d["a"])(D,F,L,!1,null,null,null)),H=Q.exports,Y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container login-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 login-form-1"},[s("h3",[t._v("Login")]),s("form",[t._m(0),t._m(1),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{variant:"primary"}},[t._v("Login")])],1),t._m(2)])]),s("div",{staticClass:"col-md-6 login-form-2"},[s("h3",[t._v("Create Account")]),s("form",[t._m(3),t._m(4),t._m(5),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{variant:"success"}},[t._v("Create")])],1),s("div",{staticClass:"form-group"})])])])])])},U=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Your Email *",value:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Your Password *",value:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("a",{staticClass:"ForgetPwd",attrs:{href:"#"}},[t._v("Forget Password?")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Your Email",value:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Your Email",value:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Your Password *",value:""}})])}],z={name:"account",components:{},data:function(){return{}}},N=z,q=(s("80d7"),Object(d["a"])(N,Y,U,!1,null,null,null)),R=q.exports,I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Header"),t._m(0),s("Footer")],1)},J=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header bg-default text-black"},[s("i",{staticClass:"fa fa-envelope"}),t._v(" Message us. ")]),s("div",{staticClass:"card-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Name")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"name","aria-describedby":"emailHelp",placeholder:"Enter name",required:""}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email address")]),s("input",{staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",required:""}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"message"}},[t._v("Message")]),s("textarea",{staticClass:"form-control",attrs:{id:"message",rows:"5",required:""}})]),s("div",{staticClass:"mx-auto"},[s("button",{staticClass:"btn btn-primary text-right",attrs:{type:"submit"}},[t._v("Send")])])])])])]),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"card bg-light mb-3"},[s("div",{staticClass:"card-header bg-default text-black"},[s("i",{staticClass:"fa fa-phone"}),t._v(" Contacts")]),s("div",{staticClass:"card-body"},[s("p",[t._v("You can also reach us via these channels")]),s("p",[t._v("Facebook "),s("a",{attrs:{href:""}},[t._v("csvadapter")])]),s("p",[t._v("Twitter "),s("a",{attrs:{href:""}},[t._v("@csvadapter")])]),s("p",[t._v("Email "),s("a",{attrs:{href:""}},[t._v("csvadapter@gmail.com")])])])])])])])}],X={name:"about",components:{Footer:P},data:function(){return{}}},B=X,G=(s("b8ab"),Object(d["a"])(B,I,J,!1,null,null,null)),K=G.exports;e["default"].use(g.a),g.a.defaults.headers.common["Access-Control-Allow-Origin"]=!0,g.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",g.a.defaults.headers.common["Access-Control-Allow-Methods"]="GET,PUT,POST,DELETE,OPTIONS",g.a.defaults.headers.common["Access-Control-Allow-Headers"]="Content-type,Accept,X-Access-Token,X-Key",e["default"].prototype.$http=g.a,e["default"].use(i["a"]),e["default"].use(l["a"]),e["default"].config.productionTip=!1;var W=[{path:"/",component:T},{path:"/about",component:K},{path:"/pricing",component:H},{path:"/account",component:R}],V=new i["a"]({routes:W});new e["default"]({router:V,render:function(t){return t(b)}}).$mount("#app")},"5f49":function(t,a,s){},6860:function(t,a,s){},"726e":function(t,a,s){"use strict";var e=s("5f49"),i=s.n(e);i.a},"760c":function(t,a,s){"use strict";var e=s("c3f5"),i=s.n(e);i.a},"80d7":function(t,a,s){"use strict";var e=s("90d3"),i=s.n(e);i.a},"8baf":function(t,a,s){"use strict";var e=s("6860"),i=s.n(e);i.a},"90d3":function(t,a,s){},"98e0":function(t,a,s){},b513:function(t,a,s){},b8ab:function(t,a,s){"use strict";var e=s("98e0"),i=s.n(e);i.a},c3f5:function(t,a,s){}});
//# sourceMappingURL=app.ed875f18.js.map