webpackJsonp([6],{"4JGu":function(e,n,t){"use strict";t.d(n,"a",function(){return f});var a=t("Dd8w"),o=t.n(a),i=t("Xxa5"),r=t.n(i),s=t("exGp"),c=t.n(s),u=t("oiih"),d=t("NYxO"),l=t("3dbI"),p=t("M4fF"),h=(t.n(p),[{name:"农业",icon:"nongye"},{name:"中国银行",icon:"zhongguo"},{name:"兴业",icon:"nongye"},{name:"工商",icon:"gongshang"},{name:"建设",icon:"jianshen"},{name:"交通",icon:"jiaotong"},{name:"北京",icon:"beijing"},{name:"民生银行",icon:"minsheng"},{name:"光大",icon:"guangda"},{name:"上海",icon:"shanghai"},{name:"中信",icon:"zhongxin"},{name:"浙商",icon:"zheshang"},{name:"邮政",icon:"youzhengchuxu"},{name:"华夏",icon:"huaxia"},{name:"渤海",icon:"bohai"},{name:"平安",icon:"pingan"},{name:"恒丰",icon:"hengfeng"},{name:"浦发",icon:"pufa"},{name:"招商",icon:"zhaoshang"},{name:"广发",icon:"guangfa"}]),f={methods:{getBankIcon:function(e){var n=t.i(p.find)(h,function(n){return~e.indexOf(n.name)});return(n?n.icon:"")+"yinhang"},showSupportBanks:function(){var e=this;return c()(r.a.mark(function n(){var t,a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.$store.getters.supportBankCards,!t.length){n.next=5;break}e.$msgBox("支持银行列表：",t.join("、")),n.next=10;break;case 5:return n.next=7,l.e.get().then(function(e){return e.json()});case 7:a=n.sent,e.$store.commit("updateSupportBankCards",a.data),e.$msgBox("支持银行列表：",a.data.join("、"));case 10:case"end":return n.stop()}},n,e)}))()}}};n.b={methods:o()({},t.i(d.a)(["getMsgCode"]),f.methods,{getBank:function(){var e=this;return c()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.validation.isPassed("model.bankCard")&&setTimeout(c()(r.a.mark(function n(){var t;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.f.get({cardNo:e.model.bankCard}).then(function(e){return e.json()});case 2:t=n.sent,t.code===u.a.OK?(e.model.bankName=t.data.bankName,e.model.bankCode=t.data.bankCode):(e.model.bankName="自动生成",e.model.bankCode=""),e.bankCardNotSupported=t.code===u.a.BANK_CARD_NOT_SUPPORTED,e.$validate("model.bankCard");case 6:case"end":return n.stop()}},n,e)})),100);case 1:case"end":return n.stop()}},n,e)}))()},toGetMsgCode:function(){var e=this;return c()(r.a.mark(function n(){var a,o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$validate(e.validatePhoneModel);case 2:if(!(a=n.sent)){n.next=10;break}return n.next=6,e.getMsgCode({phone:t.i(p.get)(e,e.validatePhoneModel),label:e.$route.meta.captchaSendType||""});case 6:o=n.sent,o.code===u.a.OK&&(e.countdownVisible=!0,e.$refs.fnCountdown.start()),n.next=11;break;case 10:e.$toast(e.validation.firstError(e.validatePhoneModel),"error");case 11:case"end":return n.stop()}},n,e)}))()},onCountdownOver:function(){this.countdownVisible=!1}}),watch:{bankCardForShow:function(){this.model.bankCard=this.bankCardForShow=this.bankCardForShow.replace(/\s/g,""),this.bankCardForShow=this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g,"$& ")},"model.bankCard":function(){this.bankCardNotSupported=!1}},data:function(){return{bankCardForShow:"",bankCardNotSupported:!1,validatePhoneModel:"user.phone",countdownVisible:!1}}}},"8jC1":function(e,n,t){var a=t("97Vw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("470e79fc",a,!0)},"97Vw":function(e,n,t){n=e.exports=t("FZ+f")(),n.push([e.i,".login input::-moz-placeholder{font-size:17px!important}.login input:-ms-input-placeholder{font-size:17px!important}.login input::-webkit-input-placeholder{font-size:17px!important}.login .mint-cell-title{width:30px!important}.login .mint-cell-title .iconfont{color:#c0cad8;font-size:20px}.login .mint-cell{min-height:60px}.login .mint-cell:first-child .mint-cell-wrapper{background-image:none}.login .mint-cell:last-child{background-image:linear-gradient(0deg,#d9d9d9,#d9d9d9 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}.login .mint-button{height:50px;font-size:17px}.login .mint-field-core{font-size:17px}.login .mint-field-other .mint-button{height:35px;width:85px;margin-left:3px;font-size:12px}.login .form-buttons{padding:10px 0}.login .login-form{padding:37px 25px 0}.login .mint-cell-wrapper{padding:0;font-size:17px}.login .form-buttons{margin-top:37px}.login .note-line{color:#666;font-size:14px;padding:20px 0}.login .logo{background:#fff;text-align:center;padding:10px}.login .logo img{max-width:50%;max-width:30vh}.login .logo small{display:block}",""])},FTgb:function(e,n,t){t("8jC1");var a=t("VU/8")(t("zx+b"),t("QEuU"),null,null);e.exports=a.exports},QEuU:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"login"},[t("form",{staticClass:"login-form",on:{submit:function(n){n.preventDefault(),e.submit()}}},[t("div",{staticClass:"fields"},[t("fb-field",{attrs:{label:"手机号",placeholder:"请输入您的手机号",state:e.getFieldState("user.phone")},nativeOn:{click:function(n){e.showFieldError(n,"user.phone")}},model:{value:e.user.phone,callback:function(n){e.user.phone=n},expression:"user.phone"}},[t("span",{slot:"label"},[t("i",{staticClass:"iconfont icon-user-solid2"})])]),t("fb-field",{attrs:{label:"手机号",placeholder:"请输入验证码",state:e.getFieldState("user.captcha")},nativeOn:{click:function(n){e.showFieldError(n,"user.captcha")}},model:{value:e.user.captcha,callback:function(n){e.user.captcha=n},expression:"user.captcha"}},[t("span",{slot:"label"},[t("i",{staticClass:"iconfont icon-verification"})]),t("mt-button",{attrs:{type:"default",disabled:e.countdownVisible},on:{click:function(n){n.stopPropagation(),n.preventDefault(),e.toGetMsgCode()}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!e.countdownVisible,expression:"!countdownVisible"}]},[e._v("获取验证码")]),t("fb-countdown",{directives:[{name:"show",rawName:"v-show",value:e.countdownVisible,expression:"countdownVisible"}],ref:"fnCountdown",on:{"countdown-over":function(n){e.onCountdownOver()}}})],1)],1)],1),t("div",{staticClass:"form-buttons"},[t("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[e._v("立即登录")]),t("div",{staticClass:"note-line"},[t("fb-checkbox",{attrs:{value:!1,state:e.getFieldState("agreement")},model:{value:e.agreement,callback:function(n){e.agreement=n},expression:"agreement"}},[t("span",{staticClass:"pl10"},[e._v("我已阅读并同意")]),t("router-link",{attrs:{to:{name:"registerAgreement",params:{transitionName:"slideRightFade"}}}},[e._v("《注册与服务合同》")])],1)],1)],1)])])},staticRenderFns:[]}},nWjG:function(e,n,t){"use strict";var a=t("IXCS"),o=t.n(a),i=o.a.Validator;n.a={methods:{Validator:i,validate:i.value,getFieldState:function(e){return this.validation.hasError(e)?"error":this.validation.isPassed(e)?"success":""},showFieldError:function(e,n){var t=e.target;t.classList.contains("mintui-field-error")&&t.parentNode.classList.contains("mint-field-state")&&this.$toast(this.validation.firstError(n),"error")}}}},"zx+b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("Dd8w"),o=t.n(a),i=t("Xxa5"),r=t.n(i),s=t("exGp"),c=t.n(s),u=t("nWjG"),d=t("4JGu"),l=t("oiih"),p=t("NYxO"),h=t("VuIw"),f=t("IcnI");n.default={mixins:[d.b,u.a],validators:{agreement:function(e){var n=this;return this.validate(e).custom(function(){if(!n.agreement)return"请阅读并同意《注册与服务合同》"})},"user.phone":function(e){return this.validate(e).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"user.captcha":function(e){return this.validate(e).required("请输入验证码").digit("请正确输入验证码").length(6,"请正确输入验证码")}},beforeRouteEnter:function(e,n,t){var a=this;return c()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.query.accesstoken){n.next=8;break}return e.query.accesstoken,f.a.dispatch("updateToken",e.query.accesstoken),n.next=5,f.a.dispatch("getUser");case 5:t({name:e.query.to||"authorizedTip"}),n.next=9;break;case 8:t();case 9:case"end":return n.stop()}},n,a)}))()},mounted:function(){this.redirect=decodeURIComponent(this.$route.query.redirect||""),this.user.phone=this.$store.getters.user.phone||t.i(h.a)(l.d)||""},methods:o()({},t.i(p.a)(["login","getUser","updateToken"]),{submit:function(){var e=this;return c()(r.a.mark(function n(){var t,a,o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$validate();case 2:if(!(t=n.sent)){n.next=10;break}return n.next=6,e.login(e.user);case 6:a=n.sent,a.code===l.a.OK&&(e.isWeixin()&&!a.user.openId?(o=location.href.replace(/(https?:\/\/[^\/]+)\/?.*/,"$1")+e.redirect,location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx05a218ccf353acb5&redirect_uri="+encodeURIComponent(o)+"&response_type=code&scope=snsapi_base&#wechat_redirect"):e.$router.push({path:e.redirect||"/"})),n.next=11;break;case 10:e.$toast(e.validation.firstError(),"error");case 11:case"end":return n.stop()}},n,e)}))()}}),data:function(){return{redirect:null,agreement:!1,user:{phone:"",captcha:""}}}}}});