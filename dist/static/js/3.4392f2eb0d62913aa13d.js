webpackJsonp([3,17],{329:function(e,t,n){n(395);var o=n(59)(n(361),n(416),"data-v-66d2fb3a",null);e.exports=o.exports},342:function(e,t,n){"use strict";var o=n(62),s=n.n(o),i=s.a.Validator;t.a={methods:{Validator:i,validate:i.value,getFieldState:function(e){return this.validation.hasError(e)?"error":this.validation.isPassed(e)?"success":""},showFieldError:function(e,t){var n=e.target;n.classList.contains("mintui-field-error")&&n.parentNode.classList.contains("mint-field-state")&&this.$root.toast(this.validation.firstError(t),"error")}}}},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{start:function(){var e=this;this.handle=setInterval(function(){e.second>0?e.second-=1:e.end()},1e3)},end:function(){clearInterval(this.handle),this.second=59,this.$emit("countdown-over")}},data:function(){return{handle:null,second:59}}}},353:function(e,t,n){e.exports=n.p+"static/img/logo.9d5ffe3.jpg"},354:function(e,t,n){var o=n(59)(n(347),n(356),null,null);e.exports=o.exports},356:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("small",[e._v(e._s(e.second)+" 秒后重发")])},staticRenderFns:[]}},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(60),s=n.n(o),i=n(354),r=n.n(i),a=n(342),u=n(13),c=n(61),l=n(24);t.default={components:{FbCountdown:r.a},mixins:[a.a],validators:{"user.phone":function(e){return this.validate(e).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"user.code":function(e){return this.validate(e).required("请输入验证码").digit("请正确输入验证码").length(6,"请正确输入验证码")}},beforeRouteEnter:function(e,t,n){e.query.accesstoken?(e.query.accesstoken,l.a.dispatch("updateToken",e.query.accesstoken),n({name:"authorizedTip"})):n()},mounted:function(){this.$route.query.openid&&(this.user.openid=this.$route.query.openid),this.user.phone=this.$store.getters.user.phone||""},methods:s()({},n.i(c.a)(["login","getMsgCode","getUser","updateToken"]),{submit:function(){var e=this;this.$validate().then(function(t){t?e.login(e.user).then(function(t){e.$router.push({name:"authorizedTip"})}):e.$root.toast(e.validation.firstError(),"error")})},toGetMsgCode:function(){var e=this;this.$validate("user.phone").then(function(t){t?e.getMsgCode(e.user.phone).then(function(t){t.ret===u.a.OK&&(e.countdownVisible=!0,e.$refs.fnCountdown.start())}):e.$root.toast(e.validation.firstError("user.phone"),"error")})},onCountdownOver:function(){this.countdownVisible=!1}}),data:function(){return{countdownVisible:!1,user:{UserinfoValLogin:{},integraluserlevel:{},phone:"",code:""}}}}},381:function(e,t,n){t=e.exports=n(324)(),t.push([e.i,".logo[data-v-66d2fb3a]{background:#fff}",""])},395:function(e,t,n){var o=n(381);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(325)("0d554c54",o,!0)},416:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("form",{staticClass:"login-form",on:{submit:function(t){t.preventDefault(),e.submit()}}},[n("div",{staticClass:"fields"},[n("mt-field",{attrs:{label:"",placeholder:"请输入手机号",state:e.getFieldState("user.phone")},nativeOn:{click:function(t){e.showFieldError(t,"user.phone")}},model:{value:e.user.phone,callback:function(t){e.user.phone=t},expression:"user.phone"}}),n("mt-field",{attrs:{label:"",placeholder:"请输入验证码",state:e.getFieldState("user.code")},nativeOn:{click:function(t){e.showFieldError(t,"user.code")}},model:{value:e.user.code,callback:function(t){e.user.code=t},expression:"user.code"}},[n("mt-button",{attrs:{type:"default",disabled:e.countdownVisible},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.toGetMsgCode()}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.countdownVisible,expression:"!countdownVisible"}]},[e._v("发送验证码")]),n("fb-countdown",{directives:[{name:"show",rawName:"v-show",value:e.countdownVisible,expression:"countdownVisible"}],ref:"fnCountdown",on:{"countdown-over":function(t){e.onCountdownOver()}}})],1)],1)],1),n("div",{staticClass:"form-buttons"},[n("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[e._v("登录")])],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:n(353)}}),o("small",[e._v("免审核借款1000元")])])}]}}});