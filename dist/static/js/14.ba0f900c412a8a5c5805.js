webpackJsonp([14],{351:function(t,e,a){var n=a(61)(a(383),a(445),null,null);t.exports=n.exports},353:function(t,e,a){"use strict";function n(t){return{idCard:t.Idcard,cardName:t.Cardname,name:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,principal:t.Limit,totalAmount:t.Totalamount,creditMoney:t.Creditmoney,manageMoney:t.Managemoney,endDate:o()(t.Enddate).format("YYYY年MM月DD日"),startDateTs:t.Startdate,startDate:o()(t.Startdate).format("YYYY年MM月DD日")}}e.a=n;var r=a(0),o=a.n(r)},358:function(t,e,a){"use strict";var n=a(62),r=a.n(n),o=a(33),s=a(13),i=a(63);e.a={methods:r()({},a.i(i.c)(["updateStateCode"]),{repay:function(){var t=this;o.g.get().then(function(t){return t.json()}).then(function(e){e.ret===s.a.OK&&(t.updateStateCode(s.b.REPAYING),t.$router.push({name:"repaying"}))})}})}},383:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(66),r=a.n(n),o=a(62),s=a.n(o),i=a(225),l=a.n(i),d=a(33),c=a(358),u=a(63),m=a(353),f=a(0),C=a.n(f);e.default={mixins:[c.a],beforeRouteEnter:function(t,e,n){d.a.get().then(function(t){return t.json()}).then(function(t){n(function(e){t.data.content&&(l()(e.model,a.i(m.a)(t.data.content)),e.bankCardForShow=e.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},methods:{goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})},repayConfirm:function(){var t=this;new Date-C()(this.model.startDateTs).toDate()<=864e5?this.$msgBox.confirm("确认提交还款?").then(function(e){"confirm"===e&&t.repay()}).catch(function(){}):this.repay()}},computed:s()({},a.i(u.b)(["stateCode"])),data:function(){var t=JSON.parse(r()(this.$store.getters.user));return{bankCardForShow:"",model:{name:t.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:t}}}},445:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borrow-info"},[a("div",{staticClass:"form"},[a("div",{staticClass:"fields-header"},[t._v("借款方案"),a("small",{staticClass:"fr loan-agreement"},[t._v("查看"),a("router-link",{attrs:{to:{name:"loanAgreement"}}},[t._v("《借款服务协议》")])],1)]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"借款金额",value:t._f("fbCurrency")(t.model.loanAmount,"","元")}}),a("mt-cell",{attrs:{title:"应还日期",value:t._f("fbFalse")(t.model.endDate)}}),a("mt-cell",{attrs:{title:"应还金额",value:t._f("fbCurrency")(t.model.totalAmount,"","元")}})],1),a("div",{staticClass:"fields-header"},[t._v("账户信息")]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"姓名",value:t._f("fbFalse")(t.user.UserinfoValLogin.Name)}}),a("mt-cell",{attrs:{title:"身份证号",value:t.model.idCard}}),a("mt-cell",{attrs:{title:"银行卡号"}},[a("span",[t._v(t._s(t.bankCardForShow))])]),a("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),a("mt-cell",{attrs:{title:"银行预留手机号",value:t.model.bankPhone}}),a("mt-cell",{nativeOn:{click:function(e){t.goChangeBankCard()}}},[a("a",{staticClass:"small"},[t._v("变更银行卡")])])],1),a("div",{staticClass:"form-buttons fixed"},[a("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"},on:{click:function(e){t.repayConfirm()}}},[t._v("立即还款")])],1)])])},staticRenderFns:[]}}});