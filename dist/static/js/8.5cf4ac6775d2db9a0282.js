webpackJsonp([8,17],{328:function(t,s,a){a(390);var i=a(59)(a(359),a(412),"data-v-48db9b74",null);t.exports=i.exports},341:function(t,s,a){"use strict";function i(t){return{idCard:t.Idcard,cardName:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,totalAmount:t.Totalamount,endDate:v()(t.Enddate).format("YYYY年MM月DD日"),startDate:v()(t.Startdate).format("YYYY年MM月DD日")}}var _=a(0),v=a.n(_);s.a=i},359:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(60),_=a.n(i),v=a(214),u=a.n(v),e=a(33),n=a(341),r=a(61);s.default={beforeRouteEnter:function(t,s,i){e.a.get().then(function(t){return t.json()}).then(function(t){i(function(s){t.data.content&&(s.contractInfo=u()({},a.i(n.a)(t.data.content)))})})},computed:_()({},a.i(r.b)(["user"]),{serviceCharge:function(){var t=this.user.integraluserlevel;return t.Creditmoney+t.Managemoney},virtualMoney:function(){var t=this.user.integraluserlevel;return t.Limit-t.Creditmoney-t.Managemoney},bankCardShort:function(){return this.contractInfo.bankCard?this.contractInfo.bankCard.slice(-4):""}}),data:function(){return{contractInfo:{}}}}},376:function(t,s,a){s=t.exports=a(324)(),s.push([t.i,".ui-container[data-v-48db9b74]{font-size:14px}table[data-v-48db9b74]{table-layout:fixed;width:100%;word-wrap:break-word;word-break:break-all;margin-bottom:10px}td[data-v-48db9b74]{text-align:left!important;padding:5px}td.title-td[data-v-48db9b74]{width:4em}.ui-whitespace[data-v-48db9b74]{padding:20px 15px;box-sizing:border-box}p[data-v-48db9b74]{text-align:left;width:100%;padding-bottom:5px}",""])},390:function(t,s,a){var i=a(376);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(325)("26420556",i,!0)},412:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"ui-container ui-center ui-whitespace"},[a("p",{staticClass:"ui-txt-justify"},[t._v("第一部分、借款、服务信息及相关明细")]),t._v(" "),a("table",{staticClass:"ui-table ui-border-tb"},[a("tbody",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("tr",[a("td",[t._v("姓名")]),t._v(" "),a("td",[t._v(t._s(t.user.UserinfoValLogin.Name))]),t._v(" "),a("td",[t._v("身份证号")]),t._v(" "),a("td",[t._v(t._s(t.user.UserinfoValLogin.Idcard))])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("tr",[a("td",[t._v("综合服务费")]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t._f("fbCurrency")(t.serviceCharge,"￥","元")))])]),t._v(" "),t._m(6),t._v(" "),a("tr",[a("td",[t._v("借款本金")]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v(t._s(t._f("fbCurrency")(t.user.integraluserlevel.Limit,"￥","元")))])]),t._v(" "),t._m(7),t._v(" "),a("tr",[a("td",[t._v("借款出借日")]),t._v(" "),a("td",[t._v(t._s(t.contractInfo.startDate))]),t._v(" "),a("td",[t._v("借款到期日")]),t._v(" "),a("td",[t._v(t._s(t.contractInfo.endDate))])]),t._v(" "),a("tr",[a("td",[t._v("起息日")]),t._v(" "),a("td",[t._v(t._s(t.contractInfo.startDate))]),t._v(" "),a("td",[t._v("还款方式")]),t._v(" "),a("td",[t._v("从"+t._s(t.contractInfo.bank)+"（"+t._s(t.bankCardShort)+"）自动扣款")])]),t._v(" "),t._m(8),t._v(" "),a("tr",[a("td",[t._v("还款日")]),t._v(" "),a("td",[t._v(t._s(t.contractInfo.endDate))]),t._v(" "),a("td",[t._v("还款金额")]),t._v(" "),a("td",[t._v("应还款"+t._s(t._f("fbCurrency")(t.user.integraluserlevel.Limit,"￥","元")))])])])]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第二部分、本服务协议相关具体条款")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第1条、名词定义")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("除非上下文另有解释，下列用语具有以下含义：")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("1.1 本协议：指本《借款及服务协议》第一部分、第二部分及所有附件中的任何条款、明细和信息。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("1.2 出借人：指本协议第一部分中列明的出借人，为符合中华人民共和国法律具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的自然人。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("1.3 借款人：指本协议第一部分中列明的借款人，为符合中华人民共和国法律具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的自然人。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("1.4 服务方：指本协议第一部分中列明的服务方公司")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("1.5 支付机构：指本协议各方之间，作为中介机构提供资金转移服务的银行或第三方支付结算机构。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("1.6 本协议项下出借人、借款人、服务方、支付机构单独称“一方”，合称“各方”。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第2条、关于各方的权利、义务")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1 关于出借人、借款人（合称“双方”）的权利义务")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.1 双方已认真阅读且理解本协议所有内容，并自愿按本协议的相关约定履行各自的权利义务。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.2 出借人向借款人成功出借资金时，本协议生效。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.3 双方有义务按服务方要求提供真实、准确，完整的个人信息（包括但不限于电子邮箱、手机号码等），因双方操作不当或填写信息有误造成的法律后果及经济损失均由其个人承担。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.4 双方同意由服务方指定的支付机构进行借款的支付及还款操作，借款人在此不可核销的同意服务方直接从借款人借款本金中扣除相应金额，用以支付第一部分所列明的服务费用。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.5 自本协议成立之日起，至所有本息、第一部分列明的各项费用及违约金（如有）全部清偿前，双方本人、家庭联系人、居住地址、联系方式、账户信息如出现变更的，应在变更之日起3个自然日内向服务方提供变更后的最新信息，若因任何一方未能及时提供最新信息或提供虚假信息而导致其自身或任何其他第三方损失，均由该未及时提供信息一方承担。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.6 就借款人提供的个人信息，及服务方通过合法渠道获取的与其相关的个人信息，服务方有权为本协议目的自行管理使用。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.7 成功借款后，服务方依据出借人的委托要求借款人按本协议约定进行还款时，借款人有义务无条件及时按照服务方要求进行还款，并想服务方提供协助。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.1.8 借款人同意，若逾期超过60日未能全额归还借款的，服务方有权利代理出借人通过包括但不限于网络、报刊、电视、征信系统等方式向任何第三方披露借款人逾期还款实事。且借款人特别确认届时服务方可同时披露借款人所提供的或服务方自行获取的借款人的个人信息。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.2 关于服务方的义务")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.2.1 服务方按照本协议约定，恪尽职守，以诚实、信用、谨慎、有效的管理为借款人及出借人提供服务。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.2.2 服务方对借款人和出借人的个人信息以及服务相关的其他信息依法保密。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("2.2.3 出借人在此委托服务方，服务方接受出借人的委托代理出借人根据本协议进行借款回收的管理服务。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第3条、关于各方的承诺及保证")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("3.1 出借人、借款人在此各自确认为具有完全民事行为权利能力和完全民事行为能力的自然人。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("3.2 出借人保证其出借资金来源均合法。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("3.3 借款人保证其向出借人及服务方所提供的信息都是真实有效的。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第4条、关于违约责任")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.1 若借款人未能按照本协议约定足额还款的，须按照下列计算方式，向出借人支付逾期违约金：")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("逾期违约金＝借款金额*1%/天*逾期天数")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.2 若借款人没有足额偿还本息的，所偿还之金额应按照违约金、利息、本金顺序偿还。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.3 若擅自更改借款用途，提供虚假资料或者故意隐瞒重要事实，则出借人有权通过服务方提前终止本协议并要求借款人提前归还本金，并要求借款人支付借款本金总额15%的违约金。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.4 借款人违反本协议之约定，未经出借人同意，擅自转让本协议借款债务的，借款人应向出借人支付借款本金总额15%的违约金。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.5 发生以下一项或几项情形时，均视为借款人违约的：")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（1）借款人违反其在本协议中的任何承诺或保证内容；")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（2）借款人的任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履行能力的不利事件，且未及时对各方进行书面通知或不能及时提供有效补救措施的。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（3）借款人的财务状况出现实质性影响其履约能力的不利变化，且未及时对各方进行书面通知或不能及时提供有效补救措施的")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.6 出借人合理判断借款人发生或可能发生违约时，授权服务方采取如下一项或几项措施：")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（1）立即暂缓、取消发放全部或部分借款。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（2）宣布已发放的借款提前到期，要求借款人应立即偿还所有应付款项。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（3）解除本协议")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("（4）采取法律、法规以及本协议约定的其救济措施。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("4.7 因借款人违约导致服务方损失的，须由借款人赔偿。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第5条、相关文件")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("5.1各方确认并同意服务方提供的与本协议有关的书面文件或电子信息作为本协议的组成部分。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第6条、关于债权转让")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("6.1 出借人将本协议项下债权转让给第三人的，由出借人委托服务方向借款人在服务方的账户发送债权转让通知书，该通知发送至服务方的借款人账户时视为通知已经送达。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("6.2 在出借人转让债权后，借款人须对新债权人继续履行本协议下其对出借人的所有义务，不得以未接到债权转让通知为由拒绝履行还款义务。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第7条、关于法律适用及管辖")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("7.1 适用法律。本协议的全部事项，包括但不限于本协议的效力、解释、履行以及争议的解决均受到中国法律管辖：本协议项下任一条款如与中国法律中的强制性规范相抵触，应在该等强制性规范所不禁止的最大限度内进行解释和执行，且任何该等与强制性规范相抵触的约定不应影响本协议其他条款的效力。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("7.2 争议管辖。各方一致同意，如发生争议，不论争议金额大小，均提交北京仲裁委员会适用北京仲裁委员会仲裁规则项下的简易程序进行仲裁。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("7.3 在仲裁期间，本协议中不涉及争议的条款仍须履行，各方均不得以解决争议为由拒不履行其在本协议项下的任何义务。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("第8条、关于其他")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("8.1 本协议项下的附件属于本协议不可分割的组成部分。本协议任何条款的标题仅系为方便援引和阅读而设置，不得被用于解释本协议任何条款的依据。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("8.2 本协议经出借人和借款人在网络平台上以线上点击确认的方式订立，本协议各方委托服务方保管所有与本协议有关的书面文件或电子信息。")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("借款人（盖章或签名）：")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"}),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("出借人（盖章或签名）： ")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"}),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("服务方（盖章）： ")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"},[t._v("代表人（签名）：")]),t._v(" "),a("p",{staticClass:"ui-txt-justify"})])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{staticClass:"title-td"},[t._v("姓名")]),t._v(" "),a("td",[t._v("杨爱军")]),t._v(" "),a("td",{staticClass:"title-td"},[t._v("身份证号")]),t._v(" "),a("td",[t._v("11022419630805246X")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{attrs:{colspan:"4"}},[t._v("出借人")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{staticClass:"title-td"},[t._v("姓名")]),t._v(" "),a("td",[t._v("杨爱军")]),t._v(" "),a("td",{staticClass:"title-td"},[t._v("身份证号")]),t._v(" "),a("td",[t._v("11022419630805246X")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{attrs:{colspan:"4"}},[t._v("借款人")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{attrs:{colspan:"4"}},[t._v("服务方及收取费用明细")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",[t._v("服务方")]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("北京小崔时代信息服务有限公司")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{attrs:{colspan:"4"}},[t._v("借款明细")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",[t._v("借款年利率")]),t._v(" "),a("td",[t._v("0%")]),t._v(" "),a("td",[t._v("每日利息")]),t._v(" "),a("td",[t._v("￥0")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{attrs:{colspan:"4"}},[t._v("还款计划")])])}]}}});