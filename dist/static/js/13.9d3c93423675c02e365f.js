webpackJsonp([13],{333:function(t,e,s){s(399);var i=s(61)(s(367),s(422),null,null);t.exports=i.exports},367:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(62),n=s.n(i),o=s(63),r=s(13);e.default={computed:n()({},s.i(o.b)(["user"])),methods:n()({},s.i(o.c)(["updateStateCode"]),{getMoney:function(){this.updateStateCode(r.b.DEBT_SETTELED),this.$router.push({name:"borrowerInfo"})}})}},384:function(t,e,s){e=t.exports=s(331)(),e.push([t.i,"",""])},399:function(t,e,s){var i=s(384);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(332)("38225f3a",i,!0)},422:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"authorized-tip single-page-tip"},[s("div",{staticClass:"logo"},[s("i",{staticClass:"iconfont ui-icon-success"}),s("h3",[t._v("欢迎您，特权用户"),s("em",[t._v(t._s(t.user.userCall))])])]),s("article",[s("p",[t._v("您已获得"),s("em",[t._v(t._s(t._f("fbCurrency")(t.user.integraluserlevel.Limit,"","元")))]),t._v("速贷特权")]),s("p",[t._v("点击下一步，立刻领取")])]),s("div",{staticClass:"footer"},[s("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"},on:{click:function(e){t.getMoney()}}},[t._v("立刻领取")])],1)])},staticRenderFns:[]}}});