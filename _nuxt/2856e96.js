(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{621:function(e,t,n){"use strict";n.r(t);var r=n(619),o=n(267),l=n(438),c=n(408),d=n(439),v=n(618),_=n(127),f=n(189),h=n(81),m=n(617),w=n(400),I=(n(38),n(10),n(61),n(36)),P=(n(112),n(51),n(5),n(82),{data:function(){return{apis:[],url:"",selectedAPI:null,show:!1,count:null,rawUrl:"https://raw.githubusercontent.com/t-huyeng/geoportal-openapis/main/"}},methods:{update:function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.show=!1,!e.selectedAPI){t.next=8;break}return e.url=e.rawUrl+e.selectedAPI.url,n=e.selectedAPI.rawOpenAPI,e.selectedAPI.page=n.slice(0,n.lastIndexOf("/")),t.next=7,e.$nextTick();case 7:e.show=!0;case 8:case"end":return t.stop()}}),t)})))()}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://t-huyeng.github.io/geoportal-openapis/geoportal_he.json");case 2:return n=t.sent,t.next=5,n.json();case 5:data=t.sent,e.count=data.length,console.log(data.length),e.apis=data;case 9:case"end":return t.stop()}}),t)})))()}))}),A=P,x=n(97),component=Object(x.a)(A,(function(){var e=this,t=e._self._c;return t("div",[t(l.a,{staticClass:"mx-auto mb-4",attrs:{"max-width":"700",outlined:""}},[t(_.a,{attrs:{"three-line":""}},[t(h.a,[t("div",{staticClass:"text-overline mb-4"},[e._v("\n          Offene Geodaten des Landes Hessen\n        ")]),e._v(" "),t(h.c,{staticClass:"text-h5 mb-1"},[e._v("\n          Geoportal Hessen\n        ")]),e._v(" "),t(h.b,[e._v("Sammlung der vom Geoportal Hessen zur Verfügung gestellen OpenAPI\n          Dokumentationen.\n        ")])],1),e._v(" "),t(f.a,{staticClass:"geoportal-he",attrs:{tile:"",size:"80"}},[e._v("geoportal."),t("br"),e._v("hessen.de\n      ")])],1),e._v(" "),t(c.a,[t(o.a,{attrs:{outlined:"",rounded:"",text:"",href:"https://www.geoportal.hessen.de/",target:"_blank"}},[e._v("\n        Homepage\n      ")]),e._v(" "),t(w.a),e._v(" "),e.count?t(d.a,{staticClass:"geoportal-he"},[e._v(e._s(e.count)+" APIs")]):e._e()],1)],1),e._v(" "),t(m.a,{attrs:{align:"center",justify:"center"}},[t(v.a,{attrs:{md:"8",sm:"10",xs:"12"}},[t(r.a,{attrs:{"return-object":"",items:e.apis,"item-text":function(e){return e.name+" ("+e.id+")"},"menu-props":"closeOnContentClick",clearable:"",chips:"",label:"Please select an API"},on:{change:function(t){return e.update()}},model:{value:e.selectedAPI,callback:function(t){e.selectedAPI=t},expression:"selectedAPI"}})],1)],1),e._v(" "),e.selectedAPI?[t(l.a,{attrs:{flat:""}},[t("div",[t("h3",[e.selectedAPI.office?t("span",[e._v(e._s(e.selectedAPI.office)+":")]):e._e(),e._v("\n          "+e._s(e.selectedAPI.name)+"\n        ")]),e._v(" "),t("p",[e._v(e._s(e.selectedAPI.description))]),e._v(" "),t(c.a,[e.selectedAPI.rawOpenAPI?t(o.a,{attrs:{elevation:"2",outlined:"",href:e.selectedAPI.rawOpenAPI,target:"_blank"}},[e._v("\n            Offizielle OpenAPI")]):e._e(),e._v(" "),e.selectedAPI.page?t(o.a,{attrs:{elevation:"2",outlined:"",href:e.selectedAPI.page,target:"_blank"}},[e._v("\n            Homepage")]):e._e()],1)],1)])]:e._e(),e._v(" "),e.show?t("Swagger-Ui",{attrs:{url:e.url}}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports}}]);