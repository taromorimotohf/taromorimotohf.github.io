webpackJsonp([1],{114:function(t,n,e){"use strict";var s=e(115),a=e(123),i=e(276);n.a={name:"app",data:function(){return{menuIsOpen:!1,currentPage:"HomePage"}},components:{HomePage:s.a,MenuPage:i.a,DetailPage:a.a}}},115:function(t,n,e){"use strict";function s(t){e(254)}var a=e(116),i=e(273),r=e(58),o=s,c=r(a.a,i.a,!1,o,"data-v-67e6441b",null);n.a=c.exports},116:function(t,n,e){"use strict";var s=e(117),a=e.n(s);e(48);n.a={name:"HomePage",data:function(){return{msg:"Welcome",posts:[]}},methods:{goTo:function(t){var n=window.open(t,"_blank");n.opener=null,n.location=t}},created:function(){var t=this;a.a.get("https://code.hot-factory.jp/lunch/wp-json/wp/v2/store/?per_page=100").then(function(n){t.posts=n.data}).catch(function(t){console.error(t)})}}},123:function(t,n,e){"use strict";function s(t){e(274)}var a=e(124),i=e(275),r=e(58),o=s,c=r(a.a,i.a,!1,o,"data-v-0a4229ac",null);n.a=c.exports},124:function(t,n,e){"use strict";var s=e(117),a=e.n(s);e(48);n.a={name:"DetailPage",data:function(){return{msg:"Welcome",posts:[]}},methods:{},created:function(){var t=this;a.a.get("https://code.hot-factory.jp/lunch/wp-json/wp/v2/store/"+this.$route.query.id).then(function(n){t.posts=n.data,console.log(t.posts)}).catch(function(t){console.error(t)}),console.log(this.$route.query.id)}}},125:function(t,n,e){"use strict";n.a={name:"menu",data:function(){return{essentialLinks:[{label:"HomePage",link:"HomePage",icon:"fa-book"},{label:"DetailPage",link:"DetailPage",icon:"fa-book"},{label:"SignUp",link:"SignUp",icon:"fa-book"},{label:"EditUserData",link:"EditUserData",icon:"fa-book"}]}},methods:{onClick:function(t){this.$emit("pageName",t)}}}},126:function(t,n,e){"use strict";var s=e(48),a=e(281),i=e(115),r=e(123);e(126);s.a.use(a.a),n.a=new a.a({routes:[{path:"/",name:"HomePage",component:i.a},{path:"/detail",name:"DetailPage",component:r.a}]})},127:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(128),a=e.n(s),i=e(134),r=(e.n(i),e(136)),o=(e.n(r),e(137)),c=(e.n(o),e(48)),l=e(140),u=e(186),v=e(252),d=e(126);c.a.config.productionTip=!1,c.a.use(l.a),a()(u).forEach(function(t){return c.a.component(t.name,t)}),new c.a({el:"#app",template:"<App/>",router:d.a,components:{App:v.a}})},134:function(t,n){},136:function(t,n){},137:function(t,n){},186:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(187);e.d(n,"VOnsCard",function(){return s.a});var a=e(206);e.d(n,"VOnsCol",function(){return a.a});var i=e(208);e.d(n,"VOnsIcon",function(){return i.a});var r=e(210);e.d(n,"VOnsLazyRepeat",function(){return r.a});var o=e(213);e.d(n,"VOnsList",function(){return o.a});var c=e(215);e.d(n,"VOnsListHeader",function(){return c.a});var l=e(217);e.d(n,"VOnsListItem",function(){return l.a});var u=e(219);e.d(n,"VOnsListTitle",function(){return u.a});var v=e(221);e.d(n,"VOnsPage",function(){return v.a});var d=e(232);e.d(n,"VOnsRow",function(){return d.a});var f=e(234);e.d(n,"VOnsSplitter",function(){return f.a});var p=e(242);e.d(n,"VOnsSplitterContent",function(){return p.a});var _=e(244);e.d(n,"VOnsSplitterMask",function(){return _.a});var m=e(246);e.d(n,"VOnsSplitterSide",function(){return m.a});var h=e(249);e.d(n,"VOnsToolbar",function(){return h.a});var g=e(250);e.d(n,"VOnsToolbarButton",function(){return g.a})},252:function(t,n,e){"use strict";function s(t){e(253)}var a=e(114),i=e(280),r=e(58),o=s,c=r(a.a,i.a,!1,o,null,null);n.a=c.exports},253:function(t,n){},254:function(t,n){},273:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-ons-page",[e("v-ons-toolbar",[e("div",{staticClass:"center"},[t._v("ランチPWAテスト ")])]),t._v(" "),e("v-ons-list",t._l(t.posts,function(n){return e("v-ons-list-item",{key:n.id},[e("div",{staticClass:"left"},[e("router-link",{attrs:{to:{path:"detail",query:{id:n.id}}}},[e("img",{staticClass:"list-item__thumbnail",attrs:{src:n.acf.imagefield.url}})])],1),t._v(" "),e("div",{staticClass:"center"},[e("span",{staticClass:"list-item__title"},[e("router-link",{attrs:{to:{path:"detail",query:{id:n.id}}}},[t._v(t._s(n.title.rendered)+" ")])],1),t._v(" "),e("span",{staticClass:"list-item__subtitle"},[e("router-link",{attrs:{to:{path:"detail",query:{id:n.id}}}},[t._v(t._s(n.acf.access.address))])],1)])])}))],1)},a=[],i={render:s,staticRenderFns:a};n.a=i},274:function(t,n){},275:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-ons-page",[e("v-ons-toolbar",[e("div",{staticClass:"left"},[e("router-link",{attrs:{to:"/"}},[t._v("Back")])],1),t._v(" "),e("div",{staticClass:"center"},[t._v(" "+t._s(this.posts.title.rendered)+" ")])]),t._v(" "),e("v-ons-card",[e("img",{staticStyle:{width:"100%"},attrs:{src:this.posts.acf.imagefield.url,alt:"Onsen UI"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("\n         "+t._s(this.posts.title.rendered)+" \n      ")]),t._v(" "),e("div",{staticClass:"content"},[e("v-ons-list",[e("v-ons-list-header",[t._v("Detail")]),t._v(" "),e("v-ons-list-item",[e("div",{staticClass:"left"},[t._v("住所")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(this.posts.acf.access.address))])]),t._v(" "),e("v-ons-list-item",[e("div",{staticClass:"left"},[t._v("TEL")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(this.posts.acf.tel))])]),t._v(" "),e("v-ons-list-item",[e("div",{staticClass:"left"},[t._v("休日")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(this.posts.acf.holiday))])]),t._v(" "),e("v-ons-list-item",[e("div",{staticClass:"left"},[t._v("営業時間")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(this.posts.acf.start_time)+"〜"+t._s(this.posts.acf.end_time))])])],1)],1)])],1)},a=[],i={render:s,staticRenderFns:a};n.a=i},276:function(t,n,e){"use strict";function s(t){e(277)}var a=e(125),i=e(278),r=e(58),o=s,c=r(a.a,i.a,!1,o,"data-v-6efa6620",null);n.a=c.exports},277:function(t,n){},278:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-ons-page",[s("v-ons-toolbar",{attrs:{modifier:"transparent"}}),t._v(" "),s("div",{staticClass:"header"},[s("img",{attrs:{src:e(279)}})]),t._v(" "),s("v-ons-list-title",[t._v("Onsen UI Essential Links")]),t._v(" "),s("v-ons-list",t._l(t.essentialLinks,function(n){return s("v-ons-list-item",{key:n.link,attrs:{modifier:"chevron"},on:{click:function(e){t.onClick(n.link)},toggleMenu:function(n){t.menuIsOpen=!t.menuIsOpen}}},[s("div",{staticClass:"left"},[s("v-ons-icon",{attrs:{"fixed-width":"",icon:n.icon}})],1),t._v(" "),s("div",{staticClass:"center"},[t._v(t._s(n.label))])])}))],1)},a=[],i={render:s,staticRenderFns:a};n.a=i},279:function(t,n,e){t.exports=e.p+"static/img/onsenui-logo.94ee79b.png"},280:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-ons-page",{attrs:{id:"app"}},[e("div",{staticClass:"content"},[e("router-view")],1)])},a=[],i={render:s,staticRenderFns:a};n.a=i}},[127]);
//# sourceMappingURL=app.be667caf61e8d1b0c59f.js.map