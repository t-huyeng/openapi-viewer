(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{621:function(e,t,n){"use strict";n.r(t);var r=n(620),c=n(267),l=n(439),o=n(407),d=n(440),v=n(619),_=n(163),h=n(127),f=n(189),m=n(81),P=n(618),w=n(400),x=(n(37),n(10),n(59),n(36)),A=(n(5),n(82),n(109),{data:function(){return{apis:[],url:"",selectedAPI:null,show:!1,count:null}},methods:{update:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.show=!1,!e.selectedAPI){t.next=6;break}return e.url=e.selectedAPI.rawOpenAPI,t.next=5,e.$nextTick();case 5:e.show=!0;case 6:case"end":return t.stop()}}),t)})))()}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.bund.dev/");case 2:return n=t.sent,t.next=5,n.json();case 5:data=t.sent,e.count=data.length,e.apis=data;case 8:case"end":return t.stop()}}),t)})))()}))}),I=A,k=n(92),component=Object(k.a)(I,(function(){var e=this,t=e._self._c;return t("div",[t(l.a,{staticClass:"mx-auto mb-4",attrs:{"max-width":"700",outlined:""}},[t(h.a,{attrs:{"three-line":""}},[t(m.a,[t("div",{staticClass:"text-overline mb-4"},[e._v("Bundesstelle für Open Data")]),e._v(" "),t(m.c,{staticClass:"text-h5 mb-1"},[e._v(" Bund DEV ")]),e._v(" "),t(m.b,[e._v("API-Portal des Bundes")])],1),e._v(" "),t(f.a,{attrs:{tile:"",size:"80"}},[t(_.a,{attrs:{"max-width":"80",src:"https://bund.dev/bundesapi.jpg"}})],1)],1),e._v(" "),t(o.a,[t(c.a,{attrs:{outlined:"",rounded:"",text:"",href:"https://bund.dev",target:"_blank"}},[e._v("\n        Homepage\n      ")]),e._v(" "),t(c.a,{attrs:{outlined:"",rounded:"",text:"",href:"https://github.com/bundesAPI",target:"_blank"}},[e._v("\n        GitHub\n      ")]),e._v(" "),t(w.a),e._v(" "),e.count?t(d.a,[e._v(e._s(e.count)+" APIs")]):e._e()],1)],1),e._v(" "),t(P.a,{attrs:{align:"center",justify:"center"}},[t(v.a,{attrs:{md:"8",sm:"10",xs:"12"}},[t(r.a,{attrs:{"return-object":"",items:e.apis,"item-text":"name","menu-props":"closeOnContentClick",clearable:"",chips:"",label:"Please select an API"},on:{change:function(t){return e.update()}},model:{value:e.selectedAPI,callback:function(t){e.selectedAPI=t},expression:"selectedAPI"}})],1)],1),e._v(" "),e.selectedAPI?[t(l.a,{attrs:{flat:""}},[t("div",[t("h3",[e.selectedAPI.office?t("span",[e._v(e._s(e.selectedAPI.office)+":")]):e._e(),e._v("\n          "+e._s(e.selectedAPI.name)+"\n        ")]),e._v(" "),t("p",[e._v(e._s(e.selectedAPI.description))]),e._v(" "),t(o.a,[e.selectedAPI.githubURL?t(c.a,{attrs:{elevation:"2",outlined:"",href:e.selectedAPI.githubURL,target:"_blank"}},[e._v("\n            GitHub")]):e._e()],1)],1)])]:e._e(),e._v(" "),e.show?t("Swagger-Ui",{attrs:{url:e.url}}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports}}]);