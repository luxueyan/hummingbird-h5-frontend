webpackJsonp([0],{346:function(t,e,n){n(408);var a=n(61)(n(378),n(433),null,null);t.exports=a.exports},353:function(t,e,n){"use strict";function a(t){return{idCard:t.Idcard,cardName:t.Cardname,name:t.Cardname,bankCard:t.Bankcard,bankPhone:t.Bankphone,bank:t.Bankname,loanAmount:t.Loanamount,principal:t.Limit,totalAmount:t.Totalamount,creditMoney:t.Creditmoney,manageMoney:t.Managemoney,endDate:o()(t.Enddate).format("YYYY年MM月DD日"),startDateTs:t.Startdate,startDate:o()(t.Startdate).format("YYYY年MM月DD日")}}e.a=a;var i=n(0),o=n.n(i)},354:function(t,e,n){"use strict";var a=n(65),i=n.n(a),o=i.a.Validator;e.a={methods:{Validator:o,validate:o.value,getFieldState:function(t){return this.validation.hasError(t)?"error":this.validation.isPassed(t)?"success":""},showFieldError:function(t,e){var n=t.target;n.classList.contains("mintui-field-error")&&n.parentNode.classList.contains("mint-field-state")&&this.$toast(this.validation.firstError(e),"error")}}}},355:function(t,e,n){"use strict";e.a={bind:function(t,e,n){var a=function(e){n.context&&!t.contains(e.target)&&n.context[t["@@clickoutsideContext"].methodName]()};t["@@clickoutsideContext"]={documentHandler:a,methodName:e.expression,arg:e.arg||"click"},document.addEventListener(t["@@clickoutsideContext"].arg,a)},update:function(t,e){t["@@clickoutsideContext"].methodName=e.expression},unbind:function(t){document.removeEventListener(t["@@clickoutsideContext"].arg,t["@@clickoutsideContext"].documentHandler)},install:function(t){t.directive("clickoutside",{bind:this.bind,unbind:this.unbind})}}},357:function(t,e,n){"use strict";e.a={methods:{showSupportBanks:function(){this.$msgBox("支持银行列表：","农业银行、中国银行、工商银行、建设银行、交通银行、兴业银行、中信银行、光大银行、上海银行")}}}},360:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(361),o=n.n(i),r=n(226),s=n.n(r),l=n(35),c=(n.n(l),n(36)),d=n.n(c),u=n(71),m=(n.n(u),n(72)),f=n.n(m),b=n(355);e.default={name:"fb-field",components:(a={},s()(a,f.a.name,f.a),s()(a,d.a.name,d.a),a),data:function(){return{active:!1,currentValue:this.value}},directives:{Clickoutside:b.a},props:{type:{type:String,default:"text"},rows:String,label:String,placeholder:String,readonly:Boolean,disabled:Boolean,disableClear:Boolean,state:{type:String,default:"default"},value:{},attr:Object},methods:{doCloseActive:function(){this.active=!1},handleInput:function(t){this.currentValue=t.target.value},handleClear:function(){this.disabled||this.readonly||(this.currentValue="")}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t)},attr:{immediate:!0,handler:function(t){var e=this;this.$nextTick(function(){[e.$refs.input,e.$refs.textarea].forEach(function(e){e&&t&&o()(t).map(function(n){return e.setAttribute(n,t[n])})})})}}}}},361:function(t,e,n){t.exports={default:n(362),__esModule:!0}},362:function(t,e,n){n(364),t.exports=n(6).Object.keys},363:function(t,e,n){var a=n(23),i=n(6),o=n(34);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],r={};r[t]=e(n),a(a.S+a.F*o(function(){n(1)}),"Object",r)}},364:function(t,e,n){var a=n(64),i=n(67);n(363)("keys",function(){return function(t){return i(a(t))}})},367:function(t,e,n){var a=n(61)(n(360),n(369),null,null);t.exports=a.exports},369:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-cell",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.doCloseActive,expression:"doCloseActive"}],staticClass:"mint-field",class:[{"is-textarea":"textarea"===t.type,"is-nolabel":!t.label}],attrs:{title:t.label}},[n("template",{slot:"title"},[t._t("label")],2),t._v(" "),"textarea"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"textarea",staticClass:"mint-field-core",attrs:{placeholder:t.placeholder,rows:t.rows,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.currentValue},on:{change:function(e){t.$emit("change",t.currentValue)},input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):n("input",{ref:"input",staticClass:"mint-field-core",attrs:{placeholder:t.placeholder,number:"number"===t.type,type:t.type,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.currentValue},on:{change:function(e){t.$emit("change",t.currentValue)},focus:function(e){t.active=!0},input:t.handleInput}}),t._v(" "),t.disableClear?t._e():n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue&&"textarea"!==t.type&&t.active,expression:"currentValue && type !== 'textarea' && active"}],staticClass:"mint-field-clear",on:{click:t.handleClear}},[n("i",{staticClass:"mintui mintui-field-error"})]),t._v(" "),t.state?n("span",{staticClass:"mint-field-state",class:["is-"+t.state]},[n("i",{staticClass:"mintui",class:["mintui-field-"+t.state]})]):t._e(),t._v(" "),n("div",{staticClass:"mint-field-other"},[t._t("default")],2)],2)},staticRenderFns:[]}},371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Math.random().toString(32).slice(2);e.default={props:{msgboxClass:"",title:""},methods:{open:function(t){var e=this;this.visible=!0;var n=document.createElement("div");n.addEventListener("touchstart",function(t){return t.stopPropagation(),t.preventDefault(),!1}),n.classList.add("v-modal","fb-model-"+a),n.style.zIndex=2e3,this.style.zIndex=2001,document.body.appendChild(n),this.$nextTick(function(){e.transitionVisible=!0}),t&&this.$on("msgbox-close",t)},close:function(t){var e=this;this.transitionVisible=!1,this.$nextTick(function(){var n=document.querySelector(".fb-model-"+a);n&&document.body.removeChild(n),e.$emit("msgbox-close",t),setTimeout(function(){e.visible=!1},300)})}},data:function(){return{visible:!1,transitionVisible:!1,style:{position:"absolute",zIndex:2001}}}}},378:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(66),i=n.n(a),o=n(386),r=n.n(o),s=n(62),l=n.n(s),c=n(225),d=n.n(c),u=n(354),m=n(357),f=n(33),b=n(13),v=n(68),h=n(353),p=n(63),g=n(367),x=n.n(g),y=n(0),C=n.n(y),k=n(7),_=(n.n(k),n(5)),w=n.n(_),S=n(430),D=n.n(S);e.default={mixins:[u.a,m.a],components:{FbField:x.a,FbMsgbox:D.a},beforeRouteEnter:function(t,e,a){f.a.get().then(function(t){return t.json()}).then(function(t){a(function(e){t.data.content&&(e.contractInfoHasHistory=!0,d()(e.model,n.i(k.pick)(n.i(h.a)(t.data.content),["name","idCard","bankCard","bank","bankPhone"])),e.bankCardForShow=e.model.bankCard.replace(/\d{4}(?=(\d{1,4}))/g,"$& "))})})},mounted:function(){var t=this;this._vocationJudge([+C()("2017-09-17 00:00:00").toDate(),+C()("2017-09-24 23:59:59")])&&(this.repayDate=C()(this.now).add(this.user.product.Length,"days").format("MM月DD日"),this.vocationRepayDate=this._vocationRepayDateGet(),this.$refs.vocationMsgbox.open(function(e){"cancel"===e&&(t.borrowOption="vocation",t.vocationRepayDays=t._vocationRepayDaysGet())}))},watch:{bankCardForShow:function(){this.model.bankCard=this.bankCardForShow=this.bankCardForShow.replace(/\s/g,""),this.bankCardForShow=this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g,"$& ")}},validators:{"model.idCard":function(t){return this.validate(t).required("请输入身份证号").length(18,"请正确输入18位身份证").custom(function(){if(!n.i(v.c)(t))return"请正确输入二代18位身份证"})},"model.bankCard":function(t){return this.validate(t).required("请输入银行卡号").custom(function(){if(!n.i(v.b)(t))return"请正确输入16-19位银行卡号"})},"model.bankPhone":function(t){return this.validate(t).required("请输入手机号").digit("请正确输入手机号").regex("^1[3-9]\\d{9}$","请正确输入手机号")},"model.bank":function(t){return this.validate(t).required()}},methods:l()({},n.i(p.c)(["updateStateCode"]),{showServiceChargeTip:function(){this.$msgBox("服务费包含",'\n        <table>\n          <tr><th>审核费用：</th><td style="text-align:left;">'+w.a.filter("fbCurrency")(this.creditMoney,"","元")+'</td></tr>\n          <tr><th>账户管理费：</th><td style="text-align:left;">'+w.a.filter("fbCurrency")(this.manageMoney,"","元")+"</td></tr>\n        </table>")},getBank:function(){var t=this;this.validation.isPassed("model.bankCard")&&f.b.get({bankCard:this.model.bankCard}).then(function(t){return t.json()}).then(function(e){t.model.bank=e.data.bank,t.bankCardNotSupported=e.ret===b.a.BANK_CARD_NOT_SUPPORTED})},_vocationJudge:function(t){return k.inRange.apply(void 0,[+this.now].concat(r()(t)))},_vocationRepayDateGet:function(){return{"0917":"10月10日","0918":"10月11日","0919":"10月12日","0920":"10月13日","0921":"10月17日","0922":"10月18日","0923":"10月19日","0924":"10月20日"}[C()(this.now).format("MMDD")]||""},_vocationRepayDaysGet:function(){return{"10月10日":23,"10月11日":23,"10月12日":23,"10月13日":23,"10月17日":26,"10月18日":26,"10月19日":26,"10月20日":26}[this.vocationRepayDate]||0},submit:function(){var t=this;if(this.bankCardNotSupported)return void this.$toast("抱歉，您选择的银行卡不支持！","error");this.$validate().then(function(e){e?("vocation"===t.borrowOption&&(t.model.agreementDays=t.vocationRepayDays),f.k.save(t.model).then(function(t){return t.json()}).then(function(e){e.ret===b.a.OK&&(t.updateStateCode(b.b.CONTRACT_INFO_FILLED),t.$router.push({name:"signature"}))})):t.$toast(t.validation.firstError(),"error")})},goChangeBankCard:function(){this.$router.push({name:"changeBankCardStep1"})}}),computed:l()({},n.i(p.b)(["stateCode","now"]),{creditMoney:function(){var t=this.user.integraluserlevel.Creditmoney;return"vocation"===this.borrowOption?t/this.user.product.Length*this.vocationRepayDays*.7:t},manageMoney:function(){var t=this.user.integraluserlevel.Managemoney;return"vocation"===this.borrowOption?t/this.user.product.Length*this.vocationRepayDays*.7:t},serviceCharge:function(){return this.creditMoney+this.manageMoney},virtualMoney:function(){return this.user.integraluserlevel.Limit-this.creditMoney-this.manageMoney}}),data:function(){var t=JSON.parse(i()(this.$store.getters.user));return{contractInfoHasHistory:!1,bankCardNotSupported:!1,countdownVisible:!1,bankCardForShow:"",borrowOption:"normal",repayDate:"",vocationRepayDate:"",vocationRepayDays:t.product.Length,model:{name:t.UserinfoValLogin.Name,idCard:null,bankCard:null,bank:"",bankPhone:null},user:t}}}},385:function(t,e,n){t.exports={default:n(387),__esModule:!0}},386:function(t,e,n){"use strict";e.__esModule=!0;var a=n(385),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},387:function(t,e,n){n(231),n(389),t.exports=n(6).Array.from},388:function(t,e,n){"use strict";var a=n(14),i=n(69);t.exports=function(t,e,n){e in t?a.f(t,e,i(0,n)):t[e]=n}},389:function(t,e,n){"use strict";var a=n(24),i=n(23),o=n(64),r=n(228),s=n(227),l=n(70),c=n(388),d=n(230);i(i.S+i.F*!n(229)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,u,m=o(t),f="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,h=void 0!==v,p=0,g=d(m);if(h&&(v=a(v,b>2?arguments[2]:void 0,2)),void 0==g||f==Array&&s(g))for(e=l(m.length),n=new f(e);e>p;p++)c(n,p,h?v(m[p],p):m[p]);else for(u=g.call(m),n=new f;!(i=u.next()).done;p++)c(n,p,h?r(u,v,[i.value,p],!0):i.value);return n.length=p,n}})},392:function(t,e,n){e=t.exports=n(335)(),e.push([t.i,'.shiyi-option-msgbox h3,.shiyi-option-msgbox h4{font-weight:400;font-size:16px}.shiyi-option-msgbox .mint-msgbox-btns{height:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.shiyi-option-msgbox .mint-msgbox-btn{line-height:1em;padding:12px 0}.shiyi-option-msgbox .mint-msgbox-cancel,.shiyi-option-msgbox .mint-msgbox-confirm{border-right:0;width:100%;color:#18b4ed}.shiyi-option-msgbox .mint-msgbox-cancel small,.shiyi-option-msgbox .mint-msgbox-confirm small{color:#18b4ed}.shiyi-option-msgbox .mint-msgbox-cancel{border-bottom:1px solid #d9d9d9}.borrow-info .icon-sale7{color:#f44336;font-size:12px;display:inline-block;padding:1px 5px;border:1px solid #f44336;border-radius:4px}.borrow-info .icon-sale7:before{border:1px solid #f44336}.borrow-info .icon-sale7:after{font-size:12px;content:"7\\6298"}.borrow-info .loan-agreement{margin-top:5px}.borrow-info small.note{display:block;padding:10px;color:#888;line-height:1.8em}',""])},396:function(t,e,n){e=t.exports=n(335)(),e.push([t.i,".msgbox-enter{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7)}.msgbox-leave-to{opacity:0;-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9)}.mint-msgbox .mint-msgbox-btns{text-align:center}",""])},408:function(t,e,n){var a=n(392);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(336)("4e52e93d",a,!0)},412:function(t,e,n){var a=n(396);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(336)("6490af0a",a,!0)},430:function(t,e,n){n(412);var a=n(61)(n(371),n(437),null,null);t.exports=a.exports},433:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"borrow-info"},[n("form",{staticClass:"borrow-form",on:{submit:function(e){e.preventDefault(),t.submit()}}},[n("div",{staticClass:"fields-header"},[t._v("借款方案")]),n("div",{staticClass:"fields"},[n("mt-cell",{attrs:{title:"借款金额",value:t._f("fbCurrency")(t.user.integraluserlevel.Limit,"","元")}}),n("mt-cell",{attrs:{title:"借款天数",value:t._f("fbAppend")(t.vocationRepayDays,"天")}}),n("mt-cell",{attrs:{value:t._f("fbCurrency")(t.serviceCharge,"","元")}},[n("span",{slot:"title"},[t._v("服务费"),n("i",{staticClass:"iconfont ui-icon-info",on:{click:t.showServiceChargeTip}}),n("span",{directives:[{name:"show",rawName:"v-show",value:"vocation"===t.borrowOption,expression:"borrowOption === 'vocation'"}],staticClass:"icon-sale7"})])]),n("mt-cell",{attrs:{title:"实际到账",value:t._f("fbCurrency")(t.virtualMoney,"","元")}})],1),n("div",{staticClass:"fields-header"},[t._v("账户信息"),t.contractInfoHasHistory?t._e():n("small",[n("i",{staticClass:"iconfont ui-icon-warn"}),t._v("请填写您的真实信息，否则会影响借款。")])]),n("div",{staticClass:"fields"},[n("mt-cell",{attrs:{title:"姓名",value:t._f("fbFalse")(t.user.UserinfoValLogin.Name)}}),t.contractInfoHasHistory?t._e():[n("mt-field",{attrs:{label:"身份证号",placeholder:"请输入身份证号",state:t.getFieldState("model.idCard")},nativeOn:{click:function(e){t.showFieldError(e,"model.idCard")}},model:{value:t.model.idCard,callback:function(e){t.model.idCard=e},expression:"model.idCard"}}),n("fb-field",{directives:[{name:"mt-field-blur",rawName:"v-mt-field-blur",value:{blur:t.getBank},expression:"{blur:getBank}"}],attrs:{label:"银行卡号",placeholder:"请输入银行卡号",state:t.getFieldState("model.bankCard")},nativeOn:{click:function(e){t.showFieldError(e,"model.bankCard")}},model:{value:t.bankCardForShow,callback:function(e){t.bankCardForShow=e},expression:"bankCardForShow"}},[n("span",{slot:"label"},[t._v("银行卡号"),n("i",{staticClass:"iconfont ui-icon-info",on:{click:function(e){t.showSupportBanks()}}})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.bankCard,expression:"model.bankCard"}],attrs:{type:"hidden"},domProps:{value:t.model.bankCard},on:{input:function(e){e.target.composing||(t.model.bankCard=e.target.value)}}}),n("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),n("mt-field",{attrs:{label:"银行预留手机号",placeholder:"请输入银行预留手机号",state:t.getFieldState("model.bankPhone")},nativeOn:{click:function(e){t.showFieldError(e,"model.bankPhone")}},model:{value:t.model.bankPhone,callback:function(e){t.model.bankPhone=e},expression:"model.bankPhone"}})],t.contractInfoHasHistory?[n("mt-cell",{attrs:{title:"身份证号",value:t.model.idCard}}),n("mt-cell",{attrs:{title:"银行卡号"}},[n("span",[t._v(t._s(t.bankCardForShow))])]),n("mt-cell",{attrs:{title:"开户行",value:t._f("fbFalse")(t.model.bank)}}),n("mt-cell",{attrs:{title:"银行预留手机号",value:t.model.bankPhone}}),n("mt-cell",{nativeOn:{click:function(e){t.goChangeBankCard()}}},[n("a",{staticClass:"small"},[t._v("变更银行卡")])])]:t._e()],2),n("div",{staticClass:"form-buttons fixed"},[n("mt-button",{staticClass:"mint-button-block",attrs:{type:"primary",size:"large"}},[t._v("立即提款")])],1)]),n("fb-msgbox",{ref:"vocationMsgbox",attrs:{title:"十一期间放款安排","msgbox-class":"shiyi-option-msgbox"}},[n("div",{staticStyle:{"text-align":"left"}},[n("p",[t._v("您的借款的应还款日是"+t._s(t.repayDate)+"。")]),n("p",[t._v("由于三方支付十一休息，我们在10月1日～8日无法按时放款。")]),n("h4",{staticStyle:{margin:"10px 0 -10px"}},[t._v("您可以：")])]),n("div",{slot:"cancelButtonContent"},[n("h3",[t._v("延长期限，在"+t._s(t.vocationRepayDate)+"还款")]),n("small",[t._v("（享费率7折优惠）")])]),n("div",{slot:"confirmButtonContent"},[n("h3",[t._v("仍然在"+t._s(t.repayDate)+"还款")])])])],1)},staticRenderFns:[]}},437:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"mint-msgbox-wrapper",class:t.msgboxClass,style:t.style},[n("transition",{attrs:{name:"msgbox"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.transitionVisible,expression:"transitionVisible"}],staticClass:"mint-msgbox"},[n("div",{staticClass:"mint-msgbox-header"},[n("div",{staticClass:"mint-msgbox-title"},[t._t("title",[t._v(t._s(t.title))])],2)]),n("div",{staticClass:"mint-msgbox-content"},[n("div",{staticClass:"mint-msgbox-message"},[t._t("default")],2)]),n("div",{staticClass:"mint-msgbox-btns"},[n("div",{staticClass:"mint-msgbox-btn mint-msgbox-cancel",on:{click:function(e){t.close("cancel")}}},[t._t("cancelButtonContent",[t._v("取消")])],2),n("div",{staticClass:"mint-msgbox-btn mint-msgbox-confirm",on:{click:function(e){t.close("confirm")}}},[t._t("confirmButtonContent",[t._v("确定")])],2)])])])],1)},staticRenderFns:[]}}});