webpackJsonp([0,18],{335:function(t,e,a){a(390);var n=a(59)(a(366),a(413),"data-v-255f9644",null);t.exports=n.exports},342:function(t,e,a){"use strict";function n(t){return{idCard:t.Idcard,cardName:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,totalAmount:t.Totalamount,endDate:i()(t.Enddate).format("YYYY年MM月DD日"),startDate:i()(t.Startdate).format("YYYY年MM月DD日")}}var r=a(0),i=a.n(r);e.a=n},343:function(t,e,a){"use strict";var n=a(62),r=a.n(n),i=r.a.Validator;e.a={methods:{Validator:i,validate:i.value,getFieldState:function(t){return this.validation.hasError(t)?"error":this.validation.isPassed(t)?"success":""},showFieldError:function(t,e){var a=t.target;a.classList.contains("mintui-field-error")&&a.parentNode.classList.contains("mint-field-state")&&this.$root.toast(this.validation.firstError(e),"error")}}}},344:function(t,e,a){"use strict";var n="@@clickoutsideContext";e.a={bind:function(t,e,a){var r=function(e){a.context&&!t.contains(e.target)&&a.context[t[n].methodName]()};t[n]={documentHandler:r,methodName:e.expression,arg:e.arg||"click"},document.addEventListener(t[n].arg,r)},update:function(t,e){t[n].methodName=e.expression},unbind:function(t){document.removeEventListener(t[n].arg,t[n].documentHandler)},install:function(t){t.directive("clickoutside",{bind:this.bind,unbind:this.unbind})}}},346:function(t,e,a){"use strict";e.a={methods:{showSupportBanks:function(){this.$root.MessageBox("支持银行列表：","农业银行、中国银行、工商银行、建设银行、交通银行、兴业银行、中信银行、平安银行、光大银行、上海银行")}}}},349:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=a(350),i=a.n(r),o=a(215),l=a.n(o),s=a(35),d=(a.n(s),a(36)),c=a.n(d),u=a(67),f=(a.n(u),a(68)),m=a.n(f),h=a(344);e.default={name:"fb-field",components:(n={},l()(n,m.a.name,m.a),l()(n,c.a.name,c.a),n),data:function(){return{active:!1,currentValue:this.value}},directives:{Clickoutside:h.a},props:{type:{type:String,default:"text"},rows:String,label:String,placeholder:String,readonly:Boolean,disabled:Boolean,disableClear:Boolean,state:{type:String,default:"default"},value:{},attr:Object},methods:{doCloseActive:function(){this.active=!1},handleInput:function(t){this.currentValue=t.target.value},handleClear:function(){this.disabled||this.readonly||(this.currentValue="")}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t)},attr:{immediate:!0,handler:function(t){var e=this;this.$nextTick(function(){[e.$refs.input,e.$refs.textarea].forEach(function(e){e&&t&&i()(t).map(function(a){return e.setAttribute(a,t[a])})})})}}}}},350:function(t,e,a){t.exports={default:a(351),__esModule:!0}},351:function(t,e,a){a(353),t.exports=a(6).Object.keys},352:function(t,e,a){var n=a(23),r=a(6),i=a(34);t.exports=function(t,e){var a=(r.Object||{})[t]||Object[t],o={};o[t]=e(a),n(n.S+n.F*i(function(){a(1)}),"Object",o)}},353:function(t,e,a){var n=a(65),r=a(64);a(352)("keys",function(){return function(t){return r(n(t))}})},356:function(t,e,a){var n=a(59)(a(349),a(358),null,null);t.exports=n.exports},358:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mt-cell",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.doCloseActive,expression:"doCloseActive"}],staticClass:"mint-field",class:[{"is-textarea":"textarea"===t.type,"is-nolabel":!t.label}],attrs:{title:t.label}},[a("template",{slot:"title"},[t._t("label")],2),t._v(" "),"textarea"===t.type?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"textarea",staticClass:"mint-field-core",attrs:{placeholder:t.placeholder,rows:t.rows,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.currentValue},on:{change:function(e){t.$emit("change",t.currentValue)},input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):a("input",{ref:"input",staticClass:"mint-field-core",attrs:{placeholder:t.placeholder,number:"number"===t.type,type:t.type,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.currentValue},on:{change:function(e){t.$emit("change",t.currentValue)},focus:function(e){t.active=!0},input:t.handleInput}}),t._v(" "),t.disableClear?t._e():a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue&&"textarea"!==t.type&&t.active,expression:"currentValue && type !== 'textarea' && active"}],staticClass:"mint-field-clear",on:{click:t.handleClear}},[a("i",{staticClass:"mintui mintui-field-error"})]),t._v(" "),t.state?a("span",{staticClass:"mint-field-state",class:["is-"+t.state]},[a("i",{staticClass:"mintui",class:["mintui-field-"+t.state]})]):t._e(),t._v(" "),a("div",{staticClass:"mint-field-other"},[t._t("default")],2)],2)},staticRenderFns:[]}},366:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(63),r=a.n(n),i=a(60),o=a.n(i),l=a(214),s=a.n(l),d=a(343),c=a(346),u=a(33),f=a(13),m=a(66),h=a(342),v=a(61),b=a(356),p=a.n(b),C=a(0),k=a.n(C);e.default={mixins:[d.a,c.a],components:{FbField:p.a},beforeRouteEnter:function(t,e,n){u.a.get().then(function(t){return t.json()}).then(function(t){n(function(e){t.data.content&&(e.contractInfoHasHistory=!0,s()(e.model,a.i(h.a)(t.data.content)),e.bankCardForShow=e.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},watch:{bankCardForShow:function(){this.model.bankCard=this.bankCardForShow=this.bankCardForShow.replace(/\s/g,""),this.bankCardForShow=this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g,"$& ")}},validators:{"model.idCard":function(t){return this.validate(t).required("请输入身份证号").length(18,"请正确输入18位身份证").custom(function(){if(!a.i(m.c)(t))return"请正确输入二代18位身份证"})},"model.bankCard":function(t){return this.validate(t).required("请输入银行卡号").custom(function(){if(!a.i(m.b)(t))return"请正确输入16-19位银行卡号"})},"model.bankPhone":function(t){return this.validate(t).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"model.bank":function(t){return this.validate(t).required()}},methods:o()({},a.i(v.c)(["updateStateCode"]),{showServiceChargeTip:function(){var t=this.user.integraluserlevel,e=t.Creditmoney,a=t.Managemoney;this.$root.MessageBox("服务费包含","\n        <table>\n          <tr><th>审核费用：</th><td>"+e+"元</td></tr>\n          <tr><th>账户管理费：</th><td>"+a+"元</td></tr>\n        </table>")},getBank:function(){var t=this;this.validation.isPassed("model.bankCard")&&u.b.get({bankCard:this.model.bankCard}).then(function(t){return t.json()}).then(function(e){t.model.bank=e.data.bank,t.bankCardNotSupported=e.ret===f.a.BANK_CARD_NOT_SUPPORTED})},submit:function(){var t=this;if(this.bankCardNotSupported)return void this.$root.toast("抱歉，您选择的银行卡不支持！","error");this.$validate().then(function(e){e?u.j.get(t.model).then(function(t){return t.json()}).then(function(e){e.ret===f.a.OK&&(t.updateStateCode(f.b.CONTRACT_INFO_FILLED),t.$router.push({name:"signature"}))}):t.$root.toast(t.validation.firstError(),"error")})},goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})}}),computed:o()({},a.i(v.b)(["stateCode"]),{serviceCharge:function(){var t=this.user.integraluserlevel;return t.Creditmoney+t.Managemoney},virtualMoney:function(){var t=this.user.integraluserlevel;return t.Limit-t.Creditmoney-t.Managemoney}}),data:function(){var t=JSON.parse(r()(this.$store.getters.user));return{qmNoteVisible:+k()().toDate()<=+new Date("2017-04-05 12:00:00"),contractInfoHasHistory:!1,bankCardNotSupported:!1,countdownVisible:!1,bankCardForShow:"",model:{name:t.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:t}}}},375:function(t,e,a){e=t.exports=a(324)(),e.push([t.i,".loan-agreement[data-v-255f9644]{margin-top:5px}small.note[data-v-255f9644]{display:block;padding:10px;color:#888;line-height:1.8em}",""])},390:function(t,e,a){var n=a(375);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(325)("c97fc45c",n,!0)},413:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"borrow-info"},[a("form",{staticClass:"borrow-form",on:{submit:function(e){e.preventDefault(),t.submit()}}},[a("div",{staticClass:"fields-header"},[t._v("借款方案")]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"借款金额",value:t._f("fbCurrency")(t.user.integraluserlevel.Limit,"","元")}}),a("mt-cell",{attrs:{title:"借款天数",value:t._f("fbAppend")(t.user.product.Length,"天")}}),a("mt-cell",{attrs:{value:t._f("fbCurrency")(t.serviceCharge,"","元")}},[a("span",{slot:"title"},[t._v("服务费"),a("i",{staticClass:"iconfont ui-icon-info",on:{click:t.showServiceChargeTip}})])]),a("mt-cell",{attrs:{title:"实际到账",value:t._f("fbCurrency")(t.virtualMoney,"","元")}})],1),a("div",{staticClass:"fields-header"},[t._v("账户信息"),t.contractInfoHasHistory?t._e():a("small",[a("i",{staticClass:"iconfont ui-icon-warn"}),t._v("请填写您的真实信息，否则会影响借款。")])]),a("div",{staticClass:"fields"},[a("mt-cell",{attrs:{title:"姓名",value:t._f("fbFalse")(t.user.UserinfoValLogin.Name)}}),t.contractInfoHasHistory?t._e():[a("mt-field",{attrs:{label:"身份证号",placeholder:"请输入身份证号",state:t.getFieldState("model.idCard")},nativeOn:{click:function(e){t.showFieldError(e,"model.idCard")}},model:{value:t.model.idCard,callback:function(e){t.model.idCard=e},expression:"model.idCard"}}),a("fb-field",{directives:[{name:"mt-field-blur",rawName:"v-mt-field-blur",value:{blur:t.getBank},expression:"{blur:getBank}"}],attrs:{label:"银行卡号",placeholder:"请输入银行卡号",state:t.getFieldState("model.bankCard")},nativeOn:{click:function(e){t.showFieldError(e,"model.bankCard")}},model:{value:t.bankCardForShow,callback:function(e){t.bankCardForShow=e},expression:"bankCardForShow"}},[a("span",{slot:"label"},[t._v("银行卡号"),a("i",{staticClass:"iconfont ui-icon-info",on:{click:function(e){t.showSupportBanks()}}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.bankCard,expression:"model.bankCard"}],attrs:{type:"hidden"},domProps:{value:t.model.bankCard},on:{input:function(e){e.target.composing||(t.model.bankCard=e.target.value)}}}),a("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),a("mt-field",{attrs:{label:"银行预留手机号",placeholder:"请输入银行预留手机号",state:t.getFieldState("model.bankPhone")},nativeOn:{click:function(e){t.showFieldError(e,"model.bankPhone")}},model:{value:t.model.bankPhone,callback:function(e){t.model.bankPhone=e},expression:"model.bankPhone"}})],t.contractInfoHasHistory?[a("mt-cell",{attrs:{title:"身份证号",value:t.model.idCard}}),a("mt-cell",{attrs:{title:"银行卡号"}},[a("span",[t._v(t._s(t.bankCardForShow))])]),a("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),a("mt-cell",{attrs:{title:"银行预留手机号",value:t.model.bankPhone}}),a("mt-cell",{nativeOn:{click:function(e){t.goChangeBankCard()}}},[a("a",{staticClass:"small"},[t._v("变更银行卡")])])]:t._e()],2),a("div",{staticClass:"form-buttons fixed"},[a("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[t._v("立即提款")])],1)])])},staticRenderFns:[]}}});