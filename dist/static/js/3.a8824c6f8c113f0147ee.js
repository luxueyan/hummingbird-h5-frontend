webpackJsonp([3,17],{334:function(t,e,a){a(378);var n=a(57)(a(355),a(400),null,null);t.exports=n.exports},341:function(t,e,a){"use strict";function n(t){return{idCard:t.Idcard,cardName:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,totalAmount:t.Totalamount,endDate:o()(t.Enddate).format("YYYY年MM月DD日"),startDate:o()(t.Startdate).format("YYYY年MM月DD日")}}var r=a(0),o=a.n(r);e.a=n},342:function(t,e,a){"use strict";var n=a(60),r=a.n(n),o=r.a.Validator;e.a={methods:{Validator:o,validate:o.value,getFieldState:function(t){return this.validation.hasError(t)?"error":this.validation.isPassed(t)?"success":""},showFieldError:function(t,e){var a=t.target;a.classList.contains("mintui-field-error")&&a.parentNode.classList.contains("mint-field-state")&&this.$root.toast(this.validation.firstError(e),"error")}}}},355:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(61),r=a.n(n),o=a(58),i=a.n(o),l=a(214),s=a.n(l),d=a(342),u=a(33),c=a(12),m=a(62),f=a(341),h=a(59);e.default={mixins:[d.a],beforeRouteEnter:function(t,e,n){u.f.get().then(function(t){return t.json()}).then(function(t){n(function(e){t.data.content&&(e.contractInfoHasHistory=!0,s()(e.model,a.i(f.a)(t.data.content)),e.bankCardForShow=e.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},watch:{bankCardForShow:function(){this.model.bankCard=this.bankCardForShow=this.bankCardForShow.replace(/\s/g,""),this.bankCardForShow=this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g,"$& ")}},validators:{"model.idCard":function(t){return this.validate(t).required("请输入身份证号").length(18,"请正确输入18位身份证").custom(function(){if(!a.i(m.c)(t))return"请正确输入二代18位身份证"})},"model.bankCard":function(t){return this.validate(t).required("请输入银行卡号").custom(function(){if(!a.i(m.b)(t))return"请正确输入16-19位银行卡号"})},"model.bankPhone":function(t){return this.validate(t).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"model.bank":function(t){return this.validate(t).required()}},methods:i()({},a.i(h.c)(["updateStateCode"]),{showServiceChargeTip:function(){var t=this.user.integraluserlevel,e=t.Creditmoney,a=t.Managemoney;this.$root.MessageBox("服务费包含","\n        <table>\n          <tr><th>审核费用：</th><td>"+e+"元</td></tr>\n          <tr><th>账户管理费：</th><td>"+a+"元</td></tr>\n        </table>")},getBank:function(){var t=this;this.validation.isPassed("model.bankCard")&&u.a.get({bankCard:this.model.bankCard}).then(function(t){return t.json()}).then(function(e){t.model.bank=e.data.bank,t.bankCardNotSupported=e.ret===c.a.BANK_CARD_NOT_SUPPORTED})},submit:function(){var t=this;if(this.bankCardNotSupported)return void this.$root.toast("抱歉，您选择的银行卡不支持！","error");this.$validate().then(function(e){e?u.i.get(t.model).then(function(t){return t.json()}).then(function(e){console.log(e),e.ret===c.a.OK&&(t.updateStateCode(c.b.CONTRACT_INFO_FILLED),t.$router.push({name:"signature"}))}):t.$root.toast(t.validation.firstError(),"error")})},goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})}}),computed:i()({},a.i(h.b)(["stateCode"]),{borrowDuration:function(){return 14},serviceCharge:function(){var t=this.user.integraluserlevel;return t.Creditmoney+t.Managemoney},virtualMoney:function(){var t=this.user.integraluserlevel;return t.Limit-t.Creditmoney-t.Managemoney}}),data:function(){var t=JSON.parse(r()(this.$store.getters.user));return{contractInfoHasHistory:!1,bankCardNotSupported:!1,countdownVisible:!1,bankCardForShow:"",model:{name:t.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:t}}}},364:function(t,e,a){e=t.exports=a(324)(),e.push([t.i,".loan-agreement{margin-top:5px}",""])},378:function(t,e,a){var n=a(364);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(325)("4e52e93d",n,!0)},400:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borrow-info"},[a("form",{staticClass:"borrow-form",on:{submit:function(e){e.preventDefault(),t.submit()}}},[a("div",{staticClass:"fields-header"},[t._v("借款方案"),a("small",{staticClass:"fr loan-agreement"},[t._v("查看"),a("router-link",{attrs:{to:{name:"loanAgreement"}}},[t._v("《借款服务协议》")])],1)]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"借款金额",value:t._f("fbCurrency")(t.user.integraluserlevel.Limit,"","元")}}),a("mt-cell",{attrs:{title:"借款天数",value:t._f("fbAppend")(t.borrowDuration,"天")}}),a("mt-cell",{attrs:{value:t._f("fbCurrency")(t.serviceCharge,"","元")}},[a("span",{slot:"title"},[t._v("服务费"),a("i",{staticClass:"iconfont ui-icon-info",on:{click:t.showServiceChargeTip}})])]),a("mt-cell",{attrs:{title:"实际到账",value:t._f("fbCurrency")(t.virtualMoney,"","元")}})],1),a("div",{staticClass:"fields-header"},[t._v("账户信息"),t.contractInfoHasHistory?t._e():a("small",[a("i",{staticClass:"iconfont ui-icon-warn"}),t._v("请填写您的真实信息，否则会影响借款。")])]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"姓名",value:t._f("fbFalse")(t.user.UserinfoValLogin.Name)}}),a("mt-cell",{attrs:{title:"登录手机号",value:t.user.UserinfoValLogin.Userphone}}),t.contractInfoHasHistory?t._e():[a("mt-field",{attrs:{label:"身份证号",placeholder:"请输入身份证号",state:t.getFieldState("model.idCard")},nativeOn:{click:function(e){t.showFieldError(e,"model.idCard")}},model:{value:t.model.idCard,callback:function(e){t.model.idCard=e},expression:"model.idCard"}}),a("mt-field",{directives:[{name:"mt-field-blur",rawName:"v-mt-field-blur",value:{blur:t.getBank},expression:"{blur:getBank}"}],attrs:{label:"银行卡号",placeholder:"请输入银行卡号",state:t.getFieldState("model.bankCard")},nativeOn:{click:function(e){t.showFieldError(e,"model.bankCard")}},model:{value:t.bankCardForShow,callback:function(e){t.bankCardForShow=e},expression:"bankCardForShow"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.bankCard,expression:"model.bankCard"}],attrs:{type:"hidden"},domProps:{value:t.model.bankCard},on:{input:function(e){e.target.composing||(t.model.bankCard=e.target.value)}}}),a("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),a("mt-field",{attrs:{label:"银行预留手机号",placeholder:"请输入银行预留手机号",state:t.getFieldState("model.bankPhone")},nativeOn:{click:function(e){t.showFieldError(e,"model.bankPhone")}},model:{value:t.model.bankPhone,callback:function(e){t.model.bankPhone=e},expression:"model.bankPhone"}})],t.contractInfoHasHistory?[a("mt-cell",{attrs:{title:"身份证号",value:t.model.idCard}}),a("mt-cell",{attrs:{title:"银行卡号","is-link":"is-link"},nativeOn:{click:function(e){t.goChangeBankCard()}}},[a("span",[t._v(t._s(t.bankCardForShow))])]),a("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),a("mt-cell",{attrs:{title:"银行预留手机号",value:t.model.bankPhone}})]:t._e()],2),a("div",{staticClass:"form-buttons"},[a("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[t._v("立即提款")])],1)])])},staticRenderFns:[]}}});