webpackJsonp([13],{378:function(e,n,s){s(470);var t=s(8)(s(411),s(452),null,null);t.options.__file="/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/Message.vue",t.esModule&&Object.keys(t.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions."),e.exports=t.exports},411:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{message:{title:"自动还款提醒",id:1,unRead:!0,date:new Date,content:"这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容"}}}}},427:function(e,n,s){n=e.exports=s(14)(),n.push([e.i,".message{padding:10px 10px 0}.message h3{font-size:16px;margin:5px 0;font-weight:400}.message small{display:block;font-size:13px;color:#888;margin-bottom:10px}.message .content{line-height:1.8em;padding-top:10px;color:#888;font-size:14px}.message .content:last-child{background-image:linear-gradient(0deg,#d9d9d9,#d9d9d9 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:top}","",{version:3,sources:["/Users/luxueyan/mine/github/fn-h5-frontend/src/views/account/Message.vue"],names:[],mappings:"AACA,SACE,mBAAqB,CACtB,AACD,YACI,eAAgB,AAChB,aAAc,AACd,eAAoB,CACvB,AACD,eACI,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,kBAAoB,CACvB,AACD,kBACI,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,cAAgB,CACnB,AACD,6BACM,yEAA+E,AAC/E,yBAA0B,AAC1B,4BAA6B,AAC7B,uBAAyB,CAC9B",file:"Message.vue",sourcesContent:["\n.message {\n  padding: 10px 10px 0;\n}\n.message h3 {\n    font-size: 16px;\n    margin: 5px 0;\n    font-weight: normal;\n}\n.message small {\n    display: block;\n    font-size: 13px;\n    color: #888;\n    margin-bottom: 10px;\n}\n.message .content {\n    line-height: 1.8em;\n    padding-top: 10px;\n    color: #888;\n    font-size: 14px;\n}\n.message .content:last-child {\n      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n      background-position: top;\n}\n"],sourceRoot:""}])},452:function(e,n,s){e.exports={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"message"},[s("h3",[e._v(e._s(e.message.title))]),s("small",[e._v(e._s(e._f("moment")(e.message.date,"YYYY-MM-DD HH:mm:ss")))]),s("div",{staticClass:"content"},[e._v(e._s(e.message.content))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},470:function(e,n,s){var t=s(427);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s(26)("721e4d10",t,!1)}});