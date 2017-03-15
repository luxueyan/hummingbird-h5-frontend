webpackJsonp([3,17],{334:function(e,t,a){a(377);var n=a(57)(a(354),a(399),null,null);e.exports=n.exports},341:function(e,t,a){"use strict";var n=a(60),r=a.n(n),o=r.a.Validator;t.a={methods:{Validator:o,validate:o.value,getFieldState:function(e){return this.validation.hasError(e)?"error":this.validation.isPassed(e)?"success":""},showFieldError:function(e,t){var a=e.target;a.classList.contains("mintui-field-error")&&a.parentNode.classList.contains("mint-field-state")&&this.$root.toast(this.validation.firstError(t),"error")}}}},342:function(e,t,a){"use strict";function n(e){return{idCard:e.Idcard,cardName:e.Cardname,bankCard:e.Bankcard,bankPhone:e.Bankphone,bank:e.Bankname,loanAmount:e.Loanamount,totalAmount:e.Totalamount,endDate:o()(e.Enddate).format("YYYY-MM-DD")}}var r=a(0),o=a.n(r);t.a=n},354:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(61),r=a.n(n),o=a(58),i=a.n(o),l=a(214),s=a.n(l),d=a(341),u=a(33),c=a(12),m=a(62),f=a(342),v=a(59);a.n(v);t.default={mixins:[d.a],beforeRouteEnter:function(e,t,n){u.f.get().then(function(e){return e.json()}).then(function(e){n(function(t){e.data.content&&(t.contractInfoHasHistory=!0,s()(t.model,a.i(f.a)(e.data.content)),t.bankCardForShow=t.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},watch:{bankCardForShow:function(){this.model.bankCard=this.bankCardForShow=this.bankCardForShow.replace(/\s/g,""),this.bankCardForShow=this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g,"$& ")}},validators:{"model.idCard":function(e){return this.validate(e).required("请输入身份证号").length(18,"请正确输入18位身份证").custom(function(){if(!a.i(m.c)(e))return"请正确输入二代18位身份证"})},"model.bankCard":function(e){return this.validate(e).required("请输入银行卡号").custom(function(){if(!a.i(m.b)(e))return"请正确输入16-19位银行卡号"})},"model.bankPhone":function(e){return this.validate(e).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"model.bank":function(e){return this.validate(e).required()}},methods:i()({},a.i(v.mapMutations)(["updateStateCode"]),{showServiceChargeTip:function(){var e=this.user.integraluserlevel,t=e.Creditmoney,a=e.Managemoney;this.$root.MessageBox("服务费包含","\n        <table>\n          <tr><th>审核费用：</th><td>"+t+"元</td></tr>\n          <tr><th>账户管理费：</th><td>"+a+"元</td></tr>\n        </table>")},getBank:function(){var e=this;this.validation.isPassed("model.bankCard")&&u.a.get({bankCard:this.model.bankCard}).then(function(e){return e.json()}).then(function(t){e.model.bank=t.data.bank,e.bankCardNotSupported=t.ret===c.a.BANK_CARD_NOT_SUPPORTED})},submit:function(){var e=this;return this.bankCardNotSupported?void this.$root.toast("抱歉，您选择的银行卡不支持！","error"):void this.$validate().then(function(t){t?u.i.get(e.model).then(function(e){return e.json}).then(function(t){t.ret===c.a.OK&&e.updateStateCode(c.b.CONTRACT_INFO_FILLED)}):e.$root.toast(e.validation.firstError(),"error")})},goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})}}),computed:i()({},a.i(v.mapGetters)(["stateCode"]),{borrowDuration:function(){return 14},serviceCharge:function(){var e=this.user.integraluserlevel,t=e.Creditmoney,a=e.Managemoney;return t+a},virtualMoney:function(){var e=this.user.integraluserlevel,t=e.Limit,a=e.Creditmoney,n=e.Managemoney;return t-a-n}}),data:function(){var e=JSON.parse(r()(this.$store.getters.user));return{contractInfoHasHistory:!1,bankCardNotSupported:!1,countdownVisible:!1,bankCardForShow:"",model:{name:e.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:e}}}},363:function(e,t,a){t=e.exports=a(324)(),t.push([e.i,"\n.loan-agreement {\n  margin-top: 5px;\n}\n","",{version:3,sources:["/./src/views/borrow/BorrowerInfo.vue"],names:[],mappings:";AACA;EACE,gBAAgB;CACjB",file:"BorrowerInfo.vue",sourcesContent:["\n.loan-agreement {\n  margin-top: 5px;\n}\n"],sourceRoot:"webpack://"}])},377:function(e,t,a){var n=a(363);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(325)("6300b257",n,!0)},399:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"borrow-info"},[a("form",{staticClass:"borrow-form",on:{submit:function(t){t.preventDefault(),e.submit()}}},[a("div",{staticClass:"fields-header"},[e._v("借款方案"),a("small",{staticClass:"fr loan-agreement"},[e._v("查看"),a("router-link",{attrs:{to:{name:"loanAgreement"}}},[e._v("《借款服务协议》")])],1)]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"借款金额",value:e._f("fbCurrency")(e.user.integraluserlevel.Limit,"","元")}}),a("mt-cell",{attrs:{title:"借款天数",value:e._f("fbAppend")(e.borrowDuration,"天")}}),a("mt-cell",{attrs:{value:e._f("fbCurrency")(e.serviceCharge,"","元")}},[a("span",{slot:"title"},[e._v("服务费"),a("i",{staticClass:"iconfont ui-icon-info",on:{click:e.showServiceChargeTip}})])]),a("mt-cell",{attrs:{title:"实际到账",value:e._f("fbCurrency")(e.virtualMoney,"","元")}})],1),a("div",{staticClass:"fields-header"},[e._v("账户信息"),e.contractInfoHasHistory?e._e():a("small",[a("i",{staticClass:"iconfont ui-icon-warn"}),e._v("请填写您的真实信息，否则会影响借款。")])]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"姓名",value:e._f("fbFalse")(e.user.UserinfoValLogin.Name)}}),a("mt-cell",{attrs:{title:"登录手机号",value:e.user.UserinfoValLogin.Userphone}}),e.contractInfoHasHistory?e._e():[a("mt-field",{directives:[{name:"model",rawName:"v-model",value:e.model.idCard,expression:"model.idCard"}],attrs:{label:"身份证号",placeholder:"请输入身份证号",state:e.getFieldState("model.idCard")},domProps:{value:e.model.idCard},on:{input:function(t){e.model.idCard=t}},nativeOn:{click:function(t){e.showFieldError(t,"model.idCard")}}}),a("mt-field",{directives:[{name:"mt-field-blur",rawName:"v-mt-field-blur",value:{blur:e.getBank},expression:"{blur:getBank}"},{name:"model",rawName:"v-model",value:e.bankCardForShow,expression:"bankCardForShow"}],attrs:{label:"银行卡号",placeholder:"请输入银行卡号",state:e.getFieldState("model.bankCard")},domProps:{value:e.bankCardForShow},on:{input:function(t){e.bankCardForShow=t}},nativeOn:{click:function(t){e.showFieldError(t,"model.bankCard")}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.bankCard,expression:"model.bankCard"}],attrs:{type:"hidden"},domProps:{value:e._s(e.model.bankCard)},on:{input:function(t){t.target.composing||(e.model.bankCard=t.target.value)}}}),a("mt-cell",{attrs:{title:"开户行",value:e._f("fbFalse")(e.model.bank)}}),a("mt-field",{directives:[{name:"model",rawName:"v-model",value:e.model.bankPhone,expression:"model.bankPhone"}],attrs:{label:"银行预留手机号",placeholder:"请输入银行预留手机号",state:e.getFieldState("model.bankPhone")},domProps:{value:e.model.bankPhone},on:{input:function(t){e.model.bankPhone=t}},nativeOn:{click:function(t){e.showFieldError(t,"model.bankPhone")}}})],e.contractInfoHasHistory?[a("mt-cell",{attrs:{title:"身份证号",value:e.model.idCard}}),a("mt-cell",{attrs:{title:"银行卡号","is-link":"is-link"},nativeOn:{click:function(t){e.goChangeBankCard()}}},[a("span",[e._v(e._s(e.bankCardForShow))])]),a("mt-cell",{attrs:{title:"开户行",value:e._f("fbFalse")(e.model.bank)}}),a("mt-cell",{attrs:{title:"银行预留手机号",value:e.model.bankPhone}})]:e._e()],2),a("div",{staticClass:"form-buttons"},[a("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[e._v("立即提款")])],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=3.c37a726adfc4e5cd07cd.js.map