webpackJsonp([3],{"3aVt":function(t,e,n){t.exports=n.p+"static/img/next.6bcd571.png"},"8je6":function(t,e,n){var i=n("SJQT");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("6612dd46",i,!0)},BIrB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),o=n.n(i),a=n("Xxa5"),r=n.n(a),l=n("exGp"),s=n.n(l),c=n("lXIR"),u=n("3dbI"),d=n("NYxO"),p=n("oiih");e.default={mounted:function(){var t=this;c.a.init("panel",{name:this.user.name}).setCallback(function(){var e=s()(r.a.mark(function e(n,i){var o,a,l=i.pngData;return i.pointsData,r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("cancel"!==n){e.next=8;break}return e.next=3,u.h.get({contractId:t.user.currentOngoingContract.id}).then(function(t){return t.json()});case 3:return o=e.sent,o.code===p.a.OK&&(t.updateStateCode(p.b.DEBT_SETTELED),t.$router.push({name:"borrowerInfo"})),e.abrupt("return");case 8:if("agreement"!==n){e.next=12;break}t.$router.push({name:"loanAgreement"}),e.next=20;break;case 12:if("signdone"!==n){e.next=20;break}if(l){e.next=16;break}return t.$toast("请手写您的姓名："+t.user.name,"error"),e.abrupt("return");case 16:return e.next=18,u.i.save({contractId:t.user.currentOngoingContract.id,sign:l}).then(function(t){return t.json()});case 18:a=e.sent,a.code===p.a.OK&&(t.updateStateCode(p.b.LOANING),t.$router.push({name:"loaning"}));case 20:case"end":return e.stop()}},e,t)}));return function(t,n){return e.apply(this,arguments)}}())},methods:o()({},n.i(d.c)(["updateStateCode"])),computed:o()({},n.i(d.b)(["user"])),data:function(){return{panelStyle:{height:window.innerHeight+"px"}}}}},"G/6j":function(t,e,n){n("8je6");var i=n("VU/8")(n("BIrB"),n("eFNg"),null,null);t.exports=i.exports},MHzY:function(t,e,n){t.exports=n.p+"static/img/previous.09e1c5a.png"},SHXz:function(t,e,n){t.exports=n.p+"static/img/stroke.f0ebe60.png"},SJQT:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,'.writingDiv{position:relative;width:100%;height:100%;color:#333;font-size:15px}.writingDiv .bottomBar,.writingDiv .topBar{position:absolute;height:50px;background:snow;left:0;right:0}.writingDiv .topBar{display:-webkit-flex;display:-ms-flexbox;display:flex;top:40px;z-index:99;padding:0 20px;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.writingDiv .topBar label{-webkit-flex:1;-ms-flex:1;flex:1;text-align:left;line-height:50px}.writingDiv .bottomBar{height:45px;bottom:0;width:100%;clear:both}.writingDiv .paperCanvas{position:absolute;left:0;bottom:45px;top:90px;background-color:#efeff4;width:100%}.writingDiv .ePaperCanvas{height:100%;width:100%;margin:0;padding:0;display:block}.writingDiv .textButton{padding:0 10px;height:28px;line-height:27px;color:#3586ff;font-size:13px;background:transparent;display:inline-block;border:0;text-align:center;position:relative;margin-left:10px}.writingDiv .textButton:after{content:"";position:absolute;left:0;top:0;width:200%;height:200%;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);border:1px solid #3586ff}.writingDiv .textButton_Done{height:45px;line-height:45px;background:#4790fe;border-radius:2px;width:256px;position:absolute;border:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:#fff;bottom:55px}.writingDiv .bottomCol{display:block;float:left;width:20%;height:28px;margin-top:7px}.writingDiv .bottomButton{background:transparent;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;width:28px;height:28px;display:block;background-size:28px;border:none;margin:auto;top:10px;left:0;right:0;bottom:0}.writingDiv .redo{background:url('+n("3aVt")+") no-repeat;background-size:28px;border:none;top:10px}.writingDiv .redo:active{background:url("+n("Zgkk")+") no-repeat;background-size:28px}.writingDiv .undo{background:url("+n("MHzY")+") no-repeat;background-size:28px}.writingDiv .undo:active{background:url("+n("xPd5")+") no-repeat;background-size:28px}.writingDiv .clear{background:url("+n("L5fL")+") no-repeat;background-size:28px;top:10px}.writingDiv .color{background:url("+n("yeCG")+") no-repeat;background-size:28px}.writingDiv .stroke{background:url("+n("SHXz")+") no-repeat;background-size:28px}.writingDiv .palette{border-bottom:1px solid #82593e;margin:auto;position:absolute;bottom:44px;width:100%;list-style:none;padding:0;display:none;z-index:20;background:#fff;left:0}.writingDiv .palette li{float:left;line-height:44px;font-size:.75em;padding:0;color:#fff;width:20%;text-align:center;display:inline}.writingDiv .penSize{border-bottom:1px solid #82593e;margin:auto;position:absolute;bottom:44px;width:100%;list-style:none;background:#fff;z-index:20;display:none;padding:0;left:0}.writingDiv .penSize li{float:left;font-size:.6em;width:20%}.writingDiv .penSize li input{float:left;margin-top:16px}#panel{top:0;left:0;right:0;bottom:0;position:absolute;z-index:0;background-color:#fff}#panel .ePaperCanvas{height:100%;width:100%;margin:0;padding:0;display:block}",""])},Zgkk:function(t,e,n){t.exports=n.p+"static/img/next_press.a3d9787.png"},eFNg:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:t.panelStyle,attrs:{id:"panel"}})},staticRenderFns:[]}},lXIR:function(module,__webpack_exports__,__webpack_require__){"use strict";function getVersion(){return"3.0.0.3"}function setCurrentLanguageType(t){var e=["Cancel","Done"],n=["取消","完成"],i=["Green","Yellow","Blue","Black","Red"],o=["绿色","黄色","蓝色","黑色","红色"],a=["綠色","黃色","藍色","黑色","紅色"],r=["Ultra Thick","Thick","Mid","Thin","Ultra Thin"],l=["特粗","粗"," 中 "," 细 ","特细"],s=["0.9em","0.9em","0.9em","0.9em","0.9em"],c=["1em","1em","1em","1em","1em"],u=document.getElementById("writingDiv").querySelectorAll("input"),d=document.getElementById("palette").children,p=document.getElementById("penSize").children;if("en"===t){for(t=0;2>t;t++)u[t].value=e[t];for(e=d.length,l=document.body.clientWidth,t=0;t<e;t++)d[t].innerHTML=i[t],320>=l&&(d[t].style.fontSize="0.7em");for(i=p.length,t=0;t<i;t++)d=p[t].childElementCount,3==d?(p[t].children[1].style.fontSize=s[t],p[t].children[2].style.fontSize=s[t],0==t?(p[t].children[1].innerHTML="Ultra",p[t].children[2].innerHTML="Thick"):4==t&&(p[t].children[1].innerHTML="Ultra",p[t].children[2].innerHTML="Thin")):2==d&&(p[t].children[1].style.fontSize=s[t],p[t].children[1].innerHTML=r[t])}else if("zh-Hans"===t){for(t=0;2>t;t++)u[t].value=n[t];for(e=d.length,t=0;t<e;t++)d[t].innerHTML=o[t];for(i=p.length,t=0;t<i;t++)d=p[t].childElementCount,3==d?(p[t].children[1].style.fontSize=c[t],p[t].children[2].style.fontSize=c[t],0==t?(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="粗"):4==t&&(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="细")):2==d&&(p[t].children[1].style.fontSize=c[t],p[t].children[1].innerHTML=l[t])}else if("zh-Hant"===t){for(t=0;2>t;t++)u[t].value=n[t];for(e=d.length,t=0;t<e;t++)d[t].innerHTML=a[t];for(i=p.length,t=0;t<i;t++)d=p[t].childElementCount,3==d?(p[t].children[1].style.fontSize=c[t],p[t].children[2].style.fontSize=c[t],0==t?(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="粗"):4==t&&(p[t].children[1].innerHTML="特",p[t].children[2].innerHTML="細")):2==d&&(p[t].children[1].style.fontSize=c[t],p[t].children[1].innerHTML=l[t])}}function init(t){var e=document.getElementById("writingDiv"),n=e.querySelectorAll("input"),i=document.getElementById("palette"),o=document.getElementById("penSize"),a=0,r=0;t.doneButton=e.querySelector(".textButton_Done"),t.checkAgreementButton=e.querySelector(".textButton_Check_Agreement"),t.undo=n[0],t.redo=n[1],t.clear=n[2],t.color=n[3],t.stoke=n[4],t.checkAgreementButton.onmousedown=function(){t.I(t.checkAgreementButton.getAttribute("action")||null,{})},t.doneButton.onmousedown=function(){var e;if(0>=t.b.length)e=null;else{for(t.c=[-1,-1,-1,-1],e=0;e<t.b.length;e++)for(var n=0;n<t.b[e].points.length;n++){var i=t.b[e].points[n],o=t,a=i.x,i=i.y,r=0>a-16?0:a-16,l=0>i-16?0:i-16;o.c[0]=0>o.c[0]?r:o.c[0],o.c[0]=o.c[0]>r?r:o.c[0],o.c[1]=o.c[1]<a+16?a+16:o.c[1],o.c[2]=0>o.c[2]?l:o.c[2],o.c[2]=o.c[2]>l?l:o.c[2],o.c[3]=o.c[3]<i+16?i+16:o.c[3]}e=t.canvas.getContext("2d").getImageData(t.c[0],t.c[2],t.c[1]-t.c[0],t.c[3]-t.c[2]),n=document.createElement("CANVAS"),o=n.getContext("2d"),n.height=e.height,n.width=e.width,o.putImageData(e,0,0),e=n.toDataURL("image/png")}for(n='{"version":"'+getVersion()+'","strokes":[',a=0;a<t.b.length;a++){for(0!=a&&(n+=","),n+='{"time":'+t.b[a].time+",",n+='"color":"'+t.b[a].color+'",',n+='"penSize":"'+t.b[a].penSize+'",',n+='"points":[',i=0;i<t.b[a].points.length;i++)o=t.b[a].points[i],0!=i&&(n+=","),n+='{"x":'+Math.round(100*o.x)/100+',"y":'+Math.round(100*o.y)/100+',"t":'+(o.t||0)+"}";n+="]}"}t.I("signdone",{pngData:e,pointsData:n+"]}"})},t.undo.onmousedown=function(){if("edit"===t.status)if(t.u&&t.u.length)t.b=t.u,t.u=null,y(t);else if(t.b.length){var e=t.b.pop();t.B.push([e]),y(t)}},t.redo.onmousedown=function(){"edit"===t.status&&t.B.length&&(t.b=t.b.concat(t.B.pop()),y(t))},t.clear.onmousedown=function(){B(t)},t.color.onmousedown=function(){a?(a=r=0,o.style.display="none",i.style.display="none"):(a=1,i.style.display="inline",r=0,o.style.display="none")},t.stoke.onmousedown=function(){r?(a=r=0,o.style.display="none"):(r=1,o.style.display="inline",a=0),i.style.display="none"},i.onclick=function(e){e=e.target,"LI"==e.tagName&&(t.color=e.getAttribute("value"),a=r=0,o.style.display="none",i.style.display="none")},o.onclick=function(e){e=e.target,"DIV"==e.tagName&&(t.h=parseInt(e.getAttribute("value")),a=r=0,o.style.display="none",i.style.display="none")}}function EPaper(t,e){if(t.nodeType)this.canvas=t;else{if("string"!=typeof t)return;this.canvas=document.getElementById(t)}var n=document.getElementById(e),i=n.offsetHeight;this.canvas.width=n.offsetWidth,this.canvas.height=i-44-45,E(this),this.b=[],this.B=[],init(this)}function E(t){if(t.canvas.getContext){t.a=t.canvas.getContext("2d"),t.a.strokeStyle=t.color,t.a.fillStyle=t.color,F(t.canvas,"selectstart",function(){return!1});var e=function e(n){if("edit"===t.status){var i,o;if("touchstart"==n.type){if(2<=n.touches.length)return;i=n.touches[0].pageX,o=n.touches[0].pageY,G(t.canvas,"mousedown",e)}else i=n.pageX,o=n.pageY;t.m=t.canvas.getBoundingClientRect(),t.m={left:t.m.left+(window.scrollX||window.pageXOffset),top:t.m.top+(window.scrollY||window.pageYOffset)},i-=t.m.left,o-=t.m.top,t.j={time:new Date,points:[{x:i,y:o,La:0}],color:t.color,penSize:t.h},H(t,i,o,n.type),n.preventDefault()}};F(t.canvas,"touchstart",e),F(t.canvas,"mousedown",e)}}function H(t,e,n,i){window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty(),t.a.save(),t.a.moveTo(e,n),t.g=null,t.o=null,t.f=[],t.D=0,t.i=t.h/2*(t.width/320),t.s&&(G(document,"mousemove",t.s),G(document,"touchmove",t.s),G(document,"mouseup",t.v),G(document,"touchend",t.v)),t.s=function(e){if("edit"===t.status){var n,i;if("touchmove"==e.type){if(2<=e.touches.length)return;n=e.touches[0].pageX,i=e.touches[0].pageY}else n=e.pageX,i=e.pageY;n-=t.m.left,i-=t.m.top,t.j.points.push({x:n,y:i,t:new Date-t.j.time}),I(t,n,i),e.preventDefault()}},t.v=function(){"edit"===t.status&&(J(t),t.b.length?t.j.time-=t.M:(t.M=t.j.time,t.j.time=t.j.time.getTime()),t.b.push(t.j),t.u=null,t.B=[],t.j=null)},"touchstart"==i?(F(document,"touchmove",t.s),F(document,"touchend",t.v)):(F(document,"mousemove",t.s),F(document,"mouseup",t.v)),t.g=null,I(t,e,n)}function I(t,e,n){var i,o;t.f.length&&(i=t.f[t.f.length-1],0==(o=Math.sqrt((i.x-e)*(i.x-e)+(i.y-n)*(i.y-n))))||(navigator.userAgent.match(/ OS (\d+).*? Mac OS/)&&!t.D&&2==t.f.length&&4*i<t.f[1].w&&(t.f[0].x-=2/3*(t.f[0].x-t.f[1].x),t.f[0].y-=2/3*(t.f[0].y-t.f[1].y),t.f[1].w/=2/3*t.f[1].w),i={x:e,y:n,w:o},t.f.push(i),3<=t.f.length&&(i=t.f.shift(),K(t,i)))}function K(t,e,n){var i=e.x,o=e.y,a=e.w;if(!t.g||0!==a){if(t.G=t.f.length?t.f[0]:null,a){t.a.moveTo(t.g.x,t.g.y);var r;!t.D&&t.G&&a>3*t.G.w&&(a/=4,r=1),t.D=1;var l=t.width/320*t.h;if(n||(n=a<.003125*t.width?1.625*l:a<.00625*t.width?1.375*l:a<.009375*t.width?1.25*l:a<.015625*t.width?1.125*l:a<.021875*t.width?l:a<.028125*t.width?.875*l:a<.034375*t.width?.75*l:a<.046875*t.width?.625*l:a<.0625*t.width?.5*l:.375*l),t.F=n,r)for(r=1;3>=r;r++)L(t,i+r/3*(t.g.x-i),o+r/3*(t.g.y-o),a)}L(t,i,o,a),t.g=e}}function J(t){G(document,"mousemove",t.s),G(document,"touchmove",t.s),G(document,"mouseup",t.v),G(document,"touchend",t.v),--t.a.i;for(var e;t.f.length;)e=t.f.shift(),K(t,e,t.width/320*t.h/8)}function B(t){"edit"===t.status&&(t.g=null,t.c=[-1,-1,-1,-1],t.b.length&&(t.u=t.b),t.b=[],t.a.beginPath(),t.a.clearRect(0,0,t.canvas.width,t.canvas.height),t.a.closePath())}function M(t){function e(){n.color=i,n.h=o,n.l>=n.b.length?n.status=n.H:(clearTimeout(n.A),n.A=setTimeout(function(){M(n)},300))}var n=t,i=t.color,o=t.h,a=t.b[t.l];if(a&&"play"==t.status){t.color=a.color,t.h=a.penSize,H(t,a.points[0].x,a.points[0].y),1==a.points.length&&(J(n),e());var r,l=1,s=0;r=a.points[l],function(){r&&(I(n,r.x,r.y),l>=a.points.length-1&&(J(n),e()),l++,r=a.points[l])&&(clearTimeout(n.A),n.A=setTimeout(arguments.callee,r.t-s),s=r.t)}(),t.l++}}function y(t){function e(){n.color=i,n.h=o,n.l>=n.b.length&&(n.status="edit")}var n=t,i=t.color,o=t.h;t.a.clearRect(0,0,t.canvas.width,t.canvas.height),t.a.beginPath(),t.l=0;for(var a=t.b[t.l];a;){t.color=a.color,t.h=a.penSize,H(t,a.points[0].x,a.points[0].y),1==a.points.length&&(J(t),e());for(var r=1,l=1;r<a.points.length;r++){var s=a.points[l];l++,I(t,s.x,s.y),l>=a.points.length&&(J(t),e())}t.l++,a=t.b[t.l]}}function L(t,e,n,i){var o={x:e,y:n},a=8,r=t.i;if(t.a.fillStyle=t.color,t.a.strokeStyle=t.color,t.g){if(1<(a=Math.floor(Math.abs(i)/(t.i/3))))for(r=t.i,i=0;i<a;i++)r-=(r-t.F)/(8<a?a:8);else Math.abs(t.i-t.F)>t.width/320*t.h*.025&&(r=t.i-(t.i-t.F)/8);if(e=null,0<t.f.length){e=t.g,n=t.f[0];var a=t.J,l=n.x-e.x,s=n.y-e.y,c=N(e,o),u=N(o,n),d=c+u;e=0==c||0==u||(o.x-e.x)/(o.y-e.y)==(o.x-n.x)/(o.y-n.y)?null:[{x:o.x-l*a*c/d,y:o.y-s*a*c/d},{x:o.x+l*a*u/d,y:o.y+s*a*u/d}]}if(n=[t.g],(t.o||e)&&i>2*r){for(a=e?e[0]:o,t.o=null==t.o?t.g:t.o,l=t.g,s=t.o,i/=2*r,c=[],u=0;u<i;u++){var p,h,g,f,m,v,b,y,d=(u+1)/(i+1);g=3*(s.x-l.x),h=3*(a.x-s.x)-g,p=o.x-l.x-g-h,v=3*(s.y-l.y),m=3*(a.y-s.y)-v,f=o.y-l.y-v-m,b=d*d,y=b*d,c.push({x:p*y+h*b+g*d+l.x,y:f*y+m*b+v*d+l.y})}n=n.concat(c)}for(n.push(o),o=n,n=t.i,a=r,u=n,l=1;l<o.length;l++)s=(a-n)/(o.length-1)+u,i=t,v=o[l-1],c=o[l],d=s,f=u*Math.sin(Math.atan((c.y-v.y)/(c.x-v.x))),b=u*Math.cos(Math.atan((c.y-v.y)/(c.x-v.x))),m=d*Math.sin(Math.atan((c.y-v.y)/(c.x-v.x))),g=d*Math.cos(Math.atan((c.y-v.y)/(c.x-v.x))),p=v.x+f,h=v.y-b,f=v.x-f,v=v.y+b,b=c.x+m,y=c.y-g,m=c.x-m,g=c.y+g,i.a.beginPath(),i.a.moveTo(p,h),i.a.lineTo(b,y),i.a.lineTo(m,g),i.a.lineTo(f,v),i.a.lineTo(p,h),i.a.fill(),i.a.closePath(),i.a.lineWidth=u,i.a.beginPath(),i.a.arc(c.x,c.y,d,0,2*Math.PI),i.a.fill(),i.a.closePath(),u=s;t.a.lineWidth=t.i=r,!e||1>=e.length?t.o=null:t.o=e[1]}else t.a.beginPath(),t.a.fillStyle=t.color,t.a.arc(e,n,t.i,0,2*Math.PI),t.a.fill(),t.a.closePath()}function N(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function F(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function G(t,e,n){t.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener(e,n,!1)}EPaper.init=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return document.getElementById(t).innerHTML="<div id='writingDiv' class='writingDiv'>\n                                            <div class='topBar'>\n                                              <label>请在下方手写您的姓名</label>\n                                              <button class='textButton textButton_Check_Agreement' action=\"agreement\">查看合同</button>\n                                            </div>\n                                            <div class='paperCanvas'>\n                                              <canvas id='ePaperCanvas' height='100%' width='100%' class='ePaperCanvas'></canvas>\n                                            </div>\n                                            <button class=\"textButton_Done\">完成</button>\n                                            <div class='bottomBar'>\n                                              <div class='bottomCol'><input class='bottomButton undo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton redo' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton clear' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton color' type='button'/></div>\n                                              <div class='bottomCol'><input class='bottomButton stroke' type='button'/></div>\n                                            </div>\n                                            <ol class='palette' id='palette'>\n                                              <li value='rgba(111,138,37,1)' style='background:rgb(111,138,37)'>绿色</li>\n                                              <li value='rgba(255,198,2,1)' style='background:rgb(255,198,2)'>黄色</li>\n                                              <li value='rgba(51,111,172,1)' style='background:rgb(51,111,172)'>蓝色</li>\n                                              <li value='rgba(0,0,0,1)' style='background:rgb(0,0,0)'>黑色</li>\n                                              <li value='rgba(255,0,0,1)' style='background:rgb(255,0,0)'>红色</li>\n                                            </ol>\n                                            <ol class='penSize' id='penSize'>\n                                              <li><input type='radio' name='fSize' value='18'/><div value='18'>特</div><div>粗</div></li>\n                                              <li><input type='radio' name='fSize' value='12'/><div style='margin-top:14px;' value='12'>粗</div></li>\n                                              <li><input type='radio' name='fSize' value='8' checked/><div style='margin-top:14px;' value='8'>中</div></li>\n                                              <li><input type='radio' name='fSize' value='6'/><div style='margin-top:14px;' value='6'>细</div></li>\n                                              <li><input type='radio' name='fSize' value='3'/><div value='3'>特</div><div>细</div></li>\n                                            </ol>\n                                          </div>",new EPaper("ePaperCanvas",t)};var r=EPaper.prototype;r.i=1,r.color="rgba(0,0,0,1)",r.h=8,r.width=320,r.j=null,r.u=null,r.status="edit",r.c=[-1,-1,-1,-1],r.J=.4,r.playWithJsonN=function(a){if(a=eval("("+a+")").strokes,!(0>=a.length)){B(this);for(var d=[],b=0;b<a.length;b++){for(var c=[],f=0;f<a[b].points.length;f++)c.push({x:a[b].points[f].x,y:a[b].points[f].y,t:a[b].points[f].t});d.push({time:a[b].time,points:c,color:a[b].color,penSize:a[b].penSize})}this.b=d,0!=this.b.length&&("play"==this.status?(this.status=this.H,clearTimeout(this.A),y(this)):(this.H=this.status,this.status="play",this.a.clearRect(0,0,this.canvas.width,this.canvas.height),this.a.beginPath(),this.l=0,M(this)))}},r.setCallback=function(t){"function"==typeof t&&(this.I=t)},__webpack_exports__.a=EPaper},xPd5:function(t,e,n){t.exports=n.p+"static/img/previous_press.dc3dfae.png"},yeCG:function(t,e,n){t.exports=n.p+"static/img/color.e631e6c.png"}});