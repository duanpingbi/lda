!function(t){function e(e){for(var n,j,l=e[0],u=e[1],o=e[2],c=0,f=[];c<l.length;c++)j=l[c],Object.prototype.hasOwnProperty.call(r,j)&&r[j]&&f.push(r[j][0]),r[j]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(i&&i(e);f.length;)f.shift()();return a.push.apply(a,o||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,l=1;l<s.length;l++){var u=s[l];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=j(j.s=s[0]))}return t}var n={},r={2:0,3:0},a=[];function j(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,j),s.l=!0,s.exports}j.m=t,j.c=n,j.d=function(t,e,s){j.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},j.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},j.t=function(t,e){if(1&e&&(t=j(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(j.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)j.d(s,n,function(e){return t[e]}.bind(null,n));return s},j.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return j.d(e,"a",e),e},j.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},j.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var i=u;a.push([573,0]),s()}({196:function(t,e,s){var n={"./af":37,"./af.js":37,"./ar":38,"./ar-dz":39,"./ar-dz.js":39,"./ar-kw":40,"./ar-kw.js":40,"./ar-ly":41,"./ar-ly.js":41,"./ar-ma":42,"./ar-ma.js":42,"./ar-sa":43,"./ar-sa.js":43,"./ar-tn":44,"./ar-tn.js":44,"./ar.js":38,"./az":45,"./az.js":45,"./be":46,"./be.js":46,"./bg":47,"./bg.js":47,"./bm":48,"./bm.js":48,"./bn":49,"./bn.js":49,"./bo":50,"./bo.js":50,"./br":51,"./br.js":51,"./bs":52,"./bs.js":52,"./ca":53,"./ca.js":53,"./cs":54,"./cs.js":54,"./cv":55,"./cv.js":55,"./cy":56,"./cy.js":56,"./da":57,"./da.js":57,"./de":58,"./de-at":59,"./de-at.js":59,"./de-ch":60,"./de-ch.js":60,"./de.js":58,"./dv":61,"./dv.js":61,"./el":62,"./el.js":62,"./en-SG":63,"./en-SG.js":63,"./en-au":64,"./en-au.js":64,"./en-ca":65,"./en-ca.js":65,"./en-gb":66,"./en-gb.js":66,"./en-ie":67,"./en-ie.js":67,"./en-il":68,"./en-il.js":68,"./en-nz":69,"./en-nz.js":69,"./eo":70,"./eo.js":70,"./es":71,"./es-do":72,"./es-do.js":72,"./es-us":73,"./es-us.js":73,"./es.js":71,"./et":74,"./et.js":74,"./eu":75,"./eu.js":75,"./fa":76,"./fa.js":76,"./fi":77,"./fi.js":77,"./fo":78,"./fo.js":78,"./fr":79,"./fr-ca":80,"./fr-ca.js":80,"./fr-ch":81,"./fr-ch.js":81,"./fr.js":79,"./fy":82,"./fy.js":82,"./ga":83,"./ga.js":83,"./gd":84,"./gd.js":84,"./gl":85,"./gl.js":85,"./gom-latn":86,"./gom-latn.js":86,"./gu":87,"./gu.js":87,"./he":88,"./he.js":88,"./hi":89,"./hi.js":89,"./hr":90,"./hr.js":90,"./hu":91,"./hu.js":91,"./hy-am":92,"./hy-am.js":92,"./id":93,"./id.js":93,"./is":94,"./is.js":94,"./it":95,"./it-ch":96,"./it-ch.js":96,"./it.js":95,"./ja":97,"./ja.js":97,"./jv":98,"./jv.js":98,"./ka":99,"./ka.js":99,"./kk":100,"./kk.js":100,"./km":101,"./km.js":101,"./kn":102,"./kn.js":102,"./ko":103,"./ko.js":103,"./ku":104,"./ku.js":104,"./ky":105,"./ky.js":105,"./lb":106,"./lb.js":106,"./lo":107,"./lo.js":107,"./lt":108,"./lt.js":108,"./lv":109,"./lv.js":109,"./me":110,"./me.js":110,"./mi":111,"./mi.js":111,"./mk":112,"./mk.js":112,"./ml":113,"./ml.js":113,"./mn":114,"./mn.js":114,"./mr":115,"./mr.js":115,"./ms":116,"./ms-my":117,"./ms-my.js":117,"./ms.js":116,"./mt":118,"./mt.js":118,"./my":119,"./my.js":119,"./nb":120,"./nb.js":120,"./ne":121,"./ne.js":121,"./nl":122,"./nl-be":123,"./nl-be.js":123,"./nl.js":122,"./nn":124,"./nn.js":124,"./pa-in":125,"./pa-in.js":125,"./pl":126,"./pl.js":126,"./pt":127,"./pt-br":128,"./pt-br.js":128,"./pt.js":127,"./ro":129,"./ro.js":129,"./ru":130,"./ru.js":130,"./sd":131,"./sd.js":131,"./se":132,"./se.js":132,"./si":133,"./si.js":133,"./sk":134,"./sk.js":134,"./sl":135,"./sl.js":135,"./sq":136,"./sq.js":136,"./sr":137,"./sr-cyrl":138,"./sr-cyrl.js":138,"./sr.js":137,"./ss":139,"./ss.js":139,"./sv":140,"./sv.js":140,"./sw":141,"./sw.js":141,"./ta":142,"./ta.js":142,"./te":143,"./te.js":143,"./tet":144,"./tet.js":144,"./tg":145,"./tg.js":145,"./th":146,"./th.js":146,"./tl-ph":147,"./tl-ph.js":147,"./tlh":148,"./tlh.js":148,"./tr":149,"./tr.js":149,"./tzl":150,"./tzl.js":150,"./tzm":151,"./tzm-latn":152,"./tzm-latn.js":152,"./tzm.js":151,"./ug-cn":153,"./ug-cn.js":153,"./uk":154,"./uk.js":154,"./ur":155,"./ur.js":155,"./uz":156,"./uz-latn":157,"./uz-latn.js":157,"./uz.js":156,"./vi":158,"./vi.js":158,"./x-pseudo":159,"./x-pseudo.js":159,"./yo":160,"./yo.js":160,"./zh-cn":161,"./zh-cn.js":161,"./zh-hk":162,"./zh-hk.js":162,"./zh-tw":163,"./zh-tw.js":163};function r(t){var e=a(t);return s(e)}function a(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id=196},237:function(t,e,s){"use strict";var n=s(238);t.exports={getArticle:function(){return n.get("/data/get-data")}}},573:function(t,e,s){"use strict";var n=j(s(0)),r=j(s(6)),a=j(s(574));function j(t){return t&&t.__esModule?t:{default:t}}s(190),r.default.render(n.default.createElement(a.default,null),document.getElementById("app"))},574:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(s(171)),r=c(s(10)),a=c(s(13)),j=c(s(9)),l=c(s(11)),u=c(s(0));s(575);var o=c(s(237)),i=s(205);function c(t){return t&&t.__esModule?t:{default:t}}var f=[{title:"title",dataIndex:"title",key:"title"},{title:"content",dataIndex:"content",key:"content"},{title:"url",dataIndex:"url",key:"url"},{title:"Action",key:"action",render:function(){return u.default.createElement("span",null,u.default.createElement("a",{style:{marginRight:16}},"查看"),u.default.createElement("a",null,"删除"))}}],d=function(t){function e(t){(0,r.default)(this,e);var s=(0,j.default)(this,(e.__proto__||(0,n.default)(e)).call(this,t));return s.componentDidMount=function(){o.default.getArticle().then((function(t){var e=t.data;s.setState({data:e.data})})).catch((function(t){console.log(t)}))},s.state={data:[]},s}return(0,l.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){var t=this.state.data;return u.default.createElement("div",null,u.default.createElement(i.Table,{columns:f,dataSource:t}))}}]),e}(u.default.Component);e.default=d},575:function(t,e,s){var n=s(576);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(187)(n,r);n.locals&&(t.exports=n.locals)},576:function(t,e,s){(e=s(186)(!1)).push([t.i,"",""]),t.exports=e}});