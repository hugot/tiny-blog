webpackJsonp([0],[,,function(e,t,n){"use strict";var o=n(1),s=n(17),r=n(13),i=n.n(r);o.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Welcome",component:i.a}]})},function(e,t,n){function o(e){n(10)}var s=n(0)(n(6),n(15),o,"data-v-4866abf7",null);e.exports=s.exports},function(e,t,n){"use strict";function o(e,t,n){var o=new XMLHttpRequest;o.open(e,t,!0),o.onreadystatechange=function(){if(4===this.readyState)return 200!==this.status?void console.log("response geeft errorcode"+this.status):void n(this.responseText)},o.send()}function s(e){o("GET","/api/"+e,function(e){return JSON.parse(e)})}function r(){return console.log("getposts called"),s("posts")}t.a=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(3),r=n.n(s),i=n(2);o.a.config.productionTip=!1,document.documentElement.style="margin: 0; padding: 0; height: 100%; width: 100%",document.body.style="margin: 0; padding: 0; height: 100%; width: 100%",new o.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{title:"$~Welcome_"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);t.default={name:"posts",data:function(){return{posts:n.i(o.a)()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),s=n.n(o);t.default={name:"Welcome",components:{posts:s.a},data:function(){return{message:{title:"welcome",text:"Welcome to my humble blog"}}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function o(e){n(11)}var s=n(0)(n(7),n(16),o,null,null);e.exports=s.exports},function(e,t,n){function o(e){n(9)}var s=n(0)(n(8),n(14),o,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"welcome"}},[n("section",{attrs:{id:"welcome-message"}},[n("header",[n("h2",[e._v(e._s(e.message.title))])]),e._v(" "),n("p",[e._v(e._s(e.message.text))])]),e._v(" "),n("posts")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("h1",[e._v(e._s(e.title))])]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"posts"}},[n("ul",e._l(e.posts,function(t){return n("li",[e._v("\n      "+e._s(t.title)+" "),n("br"),e._v("\n      "+e._s(t.content)+"\n    ")])}))])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.67a87a32aea49c8c73ab.js.map