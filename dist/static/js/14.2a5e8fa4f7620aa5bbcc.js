webpackJsonp([14],{347:function(t,a,e){var n=e(61)(e(378),e(431),null,null);t.exports=n.exports},349:function(t,a,e){"use strict";function n(t){return{idCard:t.Idcard,cardName:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,totalAmount:t.Totalamount,endDate:o()(t.Enddate).format("YYYY年MM月DD日"),startDateTs:t.Startdate,startDate:o()(t.Startdate).format("YYYY年MM月DD日")}}a.a=n;var r=e(0),o=e.n(r)},354:function(t,a,e){"use strict";var n=e(62),r=e.n(n),o=e(33),s=e(13),l=e(63);a.a={methods:r()({},e.i(l.c)(["updateStateCode"]),{repay:function(){var t=this;o.g.get().then(function(t){return t.json()}).then(function(a){a.ret===s.a.OK&&(t.updateStateCode(s.b.REPAYING),t.$router.push({name:"repaying"}))})}})}},378:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(65),r=e.n(n),o=e(62),s=e.n(o),l=e(222),i=e.n(l),c=e(33),d=e(354),u=e(63),m=e(349),f=e(0),C=e.n(f);a.default={mixins:[d.a],beforeRouteEnter:function(t,a,n){c.a.get().then(function(t){return t.json()}).then(function(t){n(function(a){t.data.content&&(i()(a.model,e.i(m.a)(t.data.content)),a.bankCardForShow=a.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},methods:{goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})},repayConfirm:function(){var t=this;new Date-C()(this.model.startDateTs).toDate()<=864e5?this.$msgBox.confirm("确认提交还款?").then(function(a){"confirm"===a&&t.repay()}).catch(function(){}):this.repay()}},computed:s()({},e.i(u.b)(["stateCode"])),data:function(){var t=JSON.parse(r()(this.$store.getters.user));return{bankCardForShow:"",model:{name:t.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:t}}}},431:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"borrow-info"},[e("div",{staticClass:"form"},[e("div",{staticClass:"fields-header"},[t._v("借款方案"),e("small",{staticClass:"fr loan-agreement"},[t._v("查看"),e("router-link",{attrs:{to:{name:"loanAgreement"}}},[t._v("《借款服务协议》")])],1)]),e("div",{staticClass:"fields"},[e("mt-cell",{attrs:{title:"借款金额",value:t._f("fbCurrency")(t.model.loanAmount,"","元")}}),e("mt-cell",{attrs:{title:"应还日期",value:t._f("fbFalse")(t.model.endDate)}}),e("mt-cell",{attrs:{title:"应还金额",value:t._f("fbCurrency")(t.model.totalAmount,"","元")}})],1),e("div",{staticClass:"fields-header"},[t._v("账户信息")]),e("div",{staticClass:"fields"},[e("mt-cell",{attrs:{title:"姓名",value:t._f("fbFalse")(t.user.UserinfoValLogin.Name)}}),e("mt-cell",{attrs:{title:"身份证号",value:t.model.idCard}}),e("mt-cell",{attrs:{title:"银行卡号"}},[e("span",[t._v(t._s(t.bankCardForShow))])]),e("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),e("mt-cell",{attrs:{title:"银行预留手机号",value:t.model.bankPhone}}),e("mt-cell",{nativeOn:{click:function(a){t.goChangeBankCard()}}},[e("a",{staticClass:"small"},[t._v("变更银行卡")])])],1),e("div",{staticClass:"form-buttons fixed"},[e("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"},on:{click:function(a){t.repayConfirm()}}},[t._v("立即还款")])],1)])])},staticRenderFns:[]}}});