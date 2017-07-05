webpackJsonp([3],{372:function(e,t,n){n(474);var o=n(8)(n(407),n(456),"data-v-66d2fb3a",null);o.options.__file="/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/Login.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},388:function(e,t,n){"use strict";var o=n(70),s=n.n(o),r=s.a.Validator;t.a={methods:{Validator:r,validate:r.value,getFieldState:function(e){return this.validation.hasError(e)?"error":this.validation.isPassed(e)?"success":""},showFieldError:function(e,t){var n=e.target;n.classList.contains("mintui-field-error")&&n.parentNode.classList.contains("mint-field-state")&&this.$toast(this.validation.firstError(t),"error")}}}},393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{start:function(){var e=this;this.handle=setInterval(function(){e.second>0?e.second-=1:e.end()},1e3)},end:function(){clearInterval(this.handle),this.second=59,this.$emit("countdown-over")}},data:function(){return{handle:null,second:59}}}},399:function(e,t,n){e.exports=n.p+"static/img/logo.jpg"},400:function(e,t,n){var o=n(8)(n(393),n(402),null,null);o.options.__file="/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/components/FbCountdown.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] FbCountdown.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},402:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("small",[e._v(e._s(e.second)+" 秒后重发")])},staticRenderFns:[]},e.exports.render._withStripped=!0},407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(43),s=n.n(o),r=n(400),i=n.n(r),u=n(388),a=n(15),d=n(44),c=n(16);t.default={components:{FbCountdown:i.a},mixins:[u.a],validators:{"user.phone":function(e){return this.validate(e).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"user.code":function(e){return this.validate(e).required("请输入验证码").digit("请正确输入验证码").length(6,"请正确输入验证码")}},beforeRouteEnter:function(e,t,n){e.query.accesstoken?(e.query.accesstoken,c.a.dispatch("updateToken",e.query.accesstoken),c.a.dispatch("getUser").then(function(t){n({name:e.query.to||"authorizedTip"})})):n()},mounted:function(){this.redirect=this.$route.query.redirect,this.$route.query.openid&&(this.user.openid=this.$route.query.openid),this.user.phone=this.$store.getters.user.phone||""},methods:s()({},n.i(d.a)(["login","getMsgCode","getUser","updateToken"]),{submit:function(){var e=this;this.$validate().then(function(t){t?e.login(e.user).then(function(t){e.$router.push({name:e.redirect||"authorizedTip"})}):e.$toast(e.validation.firstError(),"error")})},toGetMsgCode:function(){var e=this;this.$validate("user.phone").then(function(t){t?e.getMsgCode(e.user.phone).then(function(t){t.ret===a.a.OK&&(e.countdownVisible=!0,e.$refs.fnCountdown.start())}):e.$toast(e.validation.firstError("user.phone"),"error")})},onCountdownOver:function(){this.countdownVisible=!1}}),data:function(){return{redirect:null,countdownVisible:!1,user:{UserinfoValLogin:{},integraluserlevel:{},phone:"",code:""}}}}},431:function(e,t,n){t=e.exports=n(14)(),t.push([e.i,".logo[data-v-66d2fb3a]{background:#fff}","",{version:3,sources:["/Users/luxueyan/mine/github/hummingbird-h5-frontend/src/views/Login.vue"],names:[],mappings:"AACA,uBACE,eAAkB,CACnB",file:"Login.vue",sourcesContent:["\n.logo[data-v-66d2fb3a] {\n  background: white;\n}\n"],sourceRoot:""}])},456:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("form",{staticClass:"login-form",on:{submit:function(t){t.preventDefault(),e.submit()}}},[n("div",{staticClass:"fields"},[n("mt-field",{attrs:{label:"",placeholder:"请输入手机号",state:e.getFieldState("user.phone")},nativeOn:{click:function(t){e.showFieldError(t,"user.phone")}},model:{value:e.user.phone,callback:function(t){e.user.phone=t},expression:"user.phone"}}),n("mt-field",{attrs:{label:"",placeholder:"请输入验证码",state:e.getFieldState("user.code")},nativeOn:{click:function(t){e.showFieldError(t,"user.code")}},model:{value:e.user.code,callback:function(t){e.user.code=t},expression:"user.code"}},[n("mt-button",{attrs:{type:"default",disabled:e.countdownVisible},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.toGetMsgCode()}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.countdownVisible,expression:"!countdownVisible"}]},[e._v("发送验证码")]),n("fb-countdown",{directives:[{name:"show",rawName:"v-show",value:e.countdownVisible,expression:"countdownVisible"}],ref:"fnCountdown",on:{"countdown-over":function(t){e.onCountdownOver()}}})],1)],1)],1),n("div",{staticClass:"form-buttons"},[n("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[e._v("登录")])],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:n(399)}}),o("small",[e._v("免审核借款1000元")])])}]},e.exports.render._withStripped=!0},474:function(e,t,n){var o=n(431);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(26)("2eb42ffc",o,!1)}});