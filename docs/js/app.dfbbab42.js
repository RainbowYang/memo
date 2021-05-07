(function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],b=0,d=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2824:function(e,t,n){"use strict";n("b28f")},"2c61":function(e,t,n){"use strict";n.r(t),t["default"]={en:e=>{const{normalize:t}=e;return t(["English"])},"zh-cn":e=>{const{normalize:t}=e;return t(["简体中文"])},"Progress Manager":e=>{const{normalize:t}=e;return t(["进度管理"])},Nothing:e=>{const{normalize:t}=e;return t(["啥也没有"])},book:e=>{const{normalize:t}=e;return t(["图书"])},movie:e=>{const{normalize:t}=e;return t(["电影"])},"to read":e=>{const{normalize:t}=e;return t(["想读"])},reading:e=>{const{normalize:t}=e;return t(["正在读"])},"has read":e=>{const{normalize:t}=e;return t(["已读完"])},"to watch":e=>{const{normalize:t}=e;return t(["想看"])},watching:e=>{const{normalize:t}=e;return t(["正在看"])},"has watched":e=>{const{normalize:t}=e;return t(["已看完"])},Author:e=>{const{normalize:t}=e;return t(["创作者"])},Progress:e=>{const{normalize:t}=e;return t(["进度"])},Link:e=>{const{normalize:t}=e;return t(["相关链接"])},Unknown:e=>{const{normalize:t}=e;return t(["未知"])},Edit:e=>{const{normalize:t}=e;return t(["编辑"])},New:e=>{const{normalize:t}=e;return t(["添加"])},Delete:e=>{const{normalize:t}=e;return t(["删除"])},"Ask For Delete":e=>{const{normalize:t}=e;return t(["确定删除吗？"])},AddSth:e=>{const{normalize:t}=e;return t(["你可以在这里添加"])},State:e=>{const{normalize:t}=e;return t(["状态"])},Title:e=>{const{normalize:t}=e;return t(["名称"])},Save:e=>{const{normalize:t}=e;return t(["保存"])},Cancel:e=>{const{normalize:t}=e;return t(["取消"])},localeTitle:e=>{const{normalize:t,interpolate:n,list:r}=e;return t(["《",n(r(0)),"》"])},tips:e=>{const{normalize:t}=e;return t(["所有数据都是本地存储"])},message:e=>{const{normalize:t}=e;return t(["你好 i18n !!"])}}},"3f2b":function(e,t,n){},"49f8":function(e,t,n){var r={"./en.json":"edd4","./zh-cn.json":"2c61"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("3fd4"),c=(n("7dd6"),{id:"app"});function a(e,t,n,o,a,i){var l=Object(r["N"])("Header"),u=Object(r["N"])("Content"),s=Object(r["N"])("Footer");return Object(r["E"])(),Object(r["j"])("div",c,[Object(r["n"])(l),Object(r["n"])(u),Object(r["n"])(s)])}var i=Object(r["gb"])("data-v-e0fb4b3c");Object(r["H"])("data-v-e0fb4b3c");var l={id:"title"},u=Object(r["n"])("i",{class:"el-icon-info"},null,-1);Object(r["F"])();var s=i((function(e,t,n,o,c,a){var s=Object(r["N"])("el-tooltip"),b=Object(r["N"])("LocaleChanger"),d=Object(r["N"])("el-header");return Object(r["E"])(),Object(r["j"])(d,{id:"header"},{default:i((function(){return[Object(r["n"])("div",l,[Object(r["n"])("span",null,Object(r["R"])(e.$t("Progress Manager")),1),Object(r["n"])(s,{class:"item",effect:"dark",content:e.$t("tips"),placement:"bottom-start"},{default:i((function(){return[u]})),_:1},8,["content"])]),Object(r["n"])(b)]})),_:1})})),b=Object(r["gb"])("data-v-07f04dd3");Object(r["H"])("data-v-07f04dd3");var d={class:"locale-changer"};Object(r["F"])();var m=b((function(e,t,n,o,c,a){var i=Object(r["N"])("el-option"),l=Object(r["N"])("el-select");return Object(r["E"])(),Object(r["j"])("div",d,[Object(r["n"])(l,{modelValue:e.$i18n.locale,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.$i18n.locale=t}),onChange:t[2]||(t[2]=function(e){return a.change()})},{default:b((function(){return[(Object(r["E"])(!0),Object(r["j"])(r["b"],null,Object(r["L"])(c.langs,(function(t,n){return Object(r["E"])(),Object(r["j"])(i,{key:"Lang".concat(n),value:t,label:e.$t(t)},{default:b((function(){return[Object(r["m"])(Object(r["R"])(e.$t(t)),1)]})),_:2},1032,["value","label"])})),128))]})),_:1},8,["modelValue"])])})),f={name:"LocaleChanger",data:function(){return{langs:["zh-cn","en"]}},created:function(){this.$i18n.locale=localStorage.getItem("locale")||"en"},methods:{change:function(){localStorage.setItem("locale",this.$i18n.locale)}}};n("b338");f.render=m,f.__scopeId="data-v-07f04dd3";var j=f,O={name:"Header",components:{LocaleChanger:j}};n("2824");O.render=s,O.__scopeId="data-v-e0fb4b3c";var p=O,h=Object(r["gb"])("data-v-7c3131f8");Object(r["H"])("data-v-7c3131f8");var v=Object(r["m"])("@Rainbow Yang");Object(r["F"])();var g=h((function(e,t,n,o,c,a){var i=Object(r["N"])("el-link"),l=Object(r["N"])("el-footer");return Object(r["E"])(),Object(r["j"])(l,{id:"footer"},{default:h((function(){return[Object(r["n"])(i,{type:"primary",href:"https://github.com/RainbowYang",target:"_blank"},{default:h((function(){return[v]})),_:1})]})),_:1})})),y={name:"Footer"};n("faf3");y.render=g,y.__scopeId="data-v-7c3131f8";var z=y,_=Object(r["gb"])("data-v-1d1e84f5"),k=_((function(e,t,n,o,c,a){var i=Object(r["N"])("el-tag"),l=Object(r["N"])("Item"),u=Object(r["N"])("el-collapse-item"),s=Object(r["N"])("el-empty"),b=Object(r["N"])("el-collapse"),d=Object(r["N"])("el-input"),m=Object(r["N"])("el-tab-pane"),f=Object(r["N"])("el-tabs"),j=Object(r["N"])("el-main");return Object(r["E"])(),Object(r["j"])(j,{id:"main"},{default:_((function(){return[Object(r["n"])(f,{modelValue:c.activeType,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.activeType=e}),"tab-position":"left"},{default:_((function(){return[(Object(r["E"])(!0),Object(r["j"])(r["b"],null,Object(r["L"])(c.types,(function(n){return Object(r["E"])(),Object(r["j"])(m,{label:e.$t(n),name:n,key:n},{default:_((function(){return[Object(r["n"])(f,{modelValue:c.activeState,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.activeState=e}),type:"border-card"},{default:_((function(){return[(Object(r["E"])(!0),Object(r["j"])(r["b"],null,Object(r["L"])(c.allStates[n],(function(n,o){return Object(r["E"])(),Object(r["j"])(m,{label:e.$t(n),name:o+"",key:n},{default:_((function(){return[Object(r["n"])(b,{accordion:"",style:{"min-height":"300px"}},{default:_((function(){return[(Object(r["E"])(!0),Object(r["j"])(r["b"],null,Object(r["L"])(a.filterItems,(function(t){return Object(r["E"])(),Object(r["j"])(u,{key:t.title},{title:_((function(){return[Object(r["n"])(i,{class:a.typedIcon},{default:_((function(){return[Object(r["n"])("span",{innerHTML:e.$t("localeTitle",[t.title])},null,8,["innerHTML"])]})),_:2},1032,["class"])]})),default:_((function(){return[Object(r["n"])(l,{item:t},null,8,["item"])]})),_:2},1024)})),128)),a.filterItems.length?Object(r["k"])("",!0):(Object(r["E"])(),Object(r["j"])(s,{key:0,description:e.$t("Nothing")},null,8,["description"]))]})),_:1}),Object(r["n"])(d,{modelValue:c.inputTitle,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.inputTitle=e}),placeholder:e.$t("AddSth"),onChange:t[2]||(t[2]=function(e){a.addItem(a.inputItem),c.inputTitle=""})},null,8,["modelValue","placeholder"])]})),_:2},1032,["label","name"])})),128))]})),_:2},1032,["modelValue"])]})),_:2},1032,["label","name"])})),128))]})),_:1},8,["modelValue"])]})),_:1})})),I=n("5530"),N=n("2909"),w=(n("4de4"),n("99af"),n("ac1f"),n("1276"),Object(r["gb"])("data-v-701a542c"));Object(r["H"])("data-v-701a542c");var E={id:"operation"},V=Object(r["n"])("i",{class:"el-icon-user"},null,-1),S={key:0,id:"authors"},$=Object(r["n"])("i",{class:"el-icon-location-outline"},null,-1),R=Object(r["n"])("i",{class:"el-icon-link"},null,-1);Object(r["F"])();var L=w((function(e,t,n,o,c,a){var i=Object(r["N"])("ItemEditor"),l=Object(r["N"])("ItemRemover"),u=Object(r["N"])("el-tag"),s=Object(r["N"])("el-descriptions-item"),b=Object(r["N"])("el-progress"),d=Object(r["N"])("el-link"),m=Object(r["N"])("el-descriptions"),f=Object(r["N"])("el-card");return Object(r["E"])(),Object(r["j"])(f,{shadow:"hover"},{header:w((function(){return[Object(r["n"])("div",E,[Object(r["n"])(i,{originItem:n.item,style:{display:"inline-block"}},null,8,["originItem"]),Object(r["n"])(l,{item:n.item,onRemove:t[1]||(t[1]=function(e){return a.remove(n.item)})},null,8,["item"])])]})),default:w((function(){return[Object(r["n"])(m,{column:1,border:""},{default:w((function(){return[Object(r["n"])(s,null,{label:w((function(){return[V,Object(r["m"])(" "+Object(r["R"])(e.$t("Author")),1)]})),default:w((function(){return[n.item.author?(Object(r["E"])(),Object(r["j"])("div",S,[(Object(r["E"])(!0),Object(r["j"])(r["b"],null,Object(r["L"])(n.item.author.split(","),(function(e){return Object(r["E"])(),Object(r["j"])(u,{key:e,type:"success"},{default:w((function(){return[Object(r["m"])(Object(r["R"])(e),1)]})),_:2},1024)})),128))])):(Object(r["E"])(),Object(r["j"])(u,{key:1,type:"info"},{default:w((function(){return[Object(r["m"])(Object(r["R"])(e.$t("Unknown")),1)]})),_:1}))]})),_:1}),Object(r["n"])(s,null,{label:w((function(){return[$,Object(r["m"])(" "+Object(r["R"])(e.$t("Progress")),1)]})),default:w((function(){return[Object(r["n"])(b,{"stroke-width":24,percentage:a.progressPercentage},null,8,["percentage"])]})),_:1}),Object(r["n"])(s,null,{label:w((function(){return[R,Object(r["m"])(" "+Object(r["R"])(e.$t("Link")),1)]})),default:w((function(){return[n.item.URL?(Object(r["E"])(),Object(r["j"])(d,{key:0,href:n.item.URL,type:"primary"},{default:w((function(){return[Object(r["m"])(Object(r["R"])(n.item.URL),1)]})),_:1},8,["href"])):(Object(r["E"])(),Object(r["j"])(u,{key:1,type:"info"},{default:w((function(){return[Object(r["m"])(Object(r["R"])(e.$t("Unknown")),1)]})),_:1}))]})),_:1})]})),_:1})]})),_:1})})),T=Object(r["gb"])("data-v-f132fcce"),U=T((function(e,t,n,o,c,a){var i=Object(r["N"])("el-button"),l=Object(r["N"])("el-input"),u=Object(r["N"])("el-form-item"),s=Object(r["N"])("el-option"),b=Object(r["N"])("el-select"),d=Object(r["N"])("el-slider"),m=Object(r["N"])("el-form"),f=Object(r["N"])("el-dialog");return Object(r["E"])(),Object(r["j"])("div",null,[Object(r["n"])(i,{onClick:t[1]||(t[1]=function(e){return c.dialogVisible=!0}),type:"success",size:"mini",icon:"el-icon-edit",plain:""},{default:T((function(){return[Object(r["m"])(Object(r["R"])(e.$t("Edit")),1)]})),_:1}),Object(r["n"])(f,{title:e.$t("Edit"),modelValue:c.dialogVisible,"onUpdate:modelValue":t[9]||(t[9]=function(e){return c.dialogVisible=e})},{default:T((function(){return[Object(r["n"])(m,{ref:"form",model:c.item,"label-width":"80px"},{default:T((function(){return[Object(r["n"])(u,{label:e.$t("Title")},{default:T((function(){return[Object(r["n"])(l,{modelValue:c.item.title,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.item.title=e})},null,8,["modelValue"])]})),_:1},8,["label"]),Object(r["n"])(u,{label:e.$t("Author")},{default:T((function(){return[Object(r["n"])(l,{modelValue:c.item.author,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.item.author=e})},null,8,["modelValue"])]})),_:1},8,["label"]),Object(r["n"])(u,{label:e.$t("State")},{default:T((function(){return[Object(r["n"])(b,{modelValue:c.item.state,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.item.state=e}),placeholder:"请选择"},{default:T((function(){return[(Object(r["E"])(!0),Object(r["j"])(r["b"],null,Object(r["L"])(a.currentStates,(function(t,n){return Object(r["E"])(),Object(r["j"])(s,{label:e.$t(t),value:n+"",key:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["label"]),Object(r["n"])(u,{label:e.$t("Progress")},{default:T((function(){return[Object(r["n"])(d,{modelValue:c.item.progress,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.item.progress=e})},null,8,["modelValue"])]})),_:1},8,["label"]),Object(r["n"])(u,{label:e.$t("Link")},{default:T((function(){return[Object(r["n"])(l,{modelValue:c.item.URL,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.item.URL=e})},null,8,["modelValue"])]})),_:1},8,["label"]),Object(r["n"])(u,null,{default:T((function(){return[Object(r["n"])(i,{type:"primary",onClick:t[7]||(t[7]=function(e){return a.save()})},{default:T((function(){return[Object(r["m"])(Object(r["R"])(e.$t("Save")),1)]})),_:1}),Object(r["n"])(i,{onClick:t[8]||(t[8]=function(e){return a.hide()})},{default:T((function(){return[Object(r["m"])(Object(r["R"])(e.$t("Cancel")),1)]})),_:1})]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["title","modelValue"])])})),P={name:"ItemEditor",props:["originItem"],inject:["currentStates","editItem"],emits:["hide"],data:function(){return{item:Object(I["a"])({},this.originItem),dialogVisible:!1}},watch:{item:function(){var e;(e=console).log.apply(e,arguments)}},methods:{save:function(){this.editItem(this.originItem,this.item),this.hide()},hide:function(){this.dialogVisible=!1}}};P.render=U,P.__scopeId="data-v-f132fcce";var C=P,A=Object(r["gb"])("data-v-6eda19ac"),M=A((function(e,t,n,o,c,a){var i=Object(r["N"])("el-button"),l=Object(r["N"])("el-popconfirm");return Object(r["E"])(),Object(r["j"])(l,{title:e.$t("Ask For Delete"),onConfirm:t[1]||(t[1]=function(t){return e.$emit("remove")})},{reference:A((function(){return[Object(r["n"])(i,{plain:"",type:"danger",size:"mini",icon:"el-icon-delete"},{default:A((function(){return[Object(r["m"])(Object(r["R"])(e.$t("Delete")),1)]})),_:1})]})),_:1},8,["title"])})),F={name:"ItemRemover",emits:["remove"]};F.render=M,F.__scopeId="data-v-6eda19ac";var H=F,D={name:"Item",props:["item"],inject:["removeItem"],components:{ItemEditor:C,ItemRemover:H},data:function(){return{dialogVisible:!1}},computed:{progressPercentage:function(){return this.item.progress||("2"===this.item.state?100:0)}},methods:{remove:function(){this.removeItem(this.item)}}};n("5899");D.render=L,D.__scopeId="data-v-701a542c";var x=D,J={name:"Content",components:{Item:x},data:function(){return{inputTitle:"",types:["book","movie"],allStates:{book:["to read","reading","has read"],movie:["to watch","watching","has watched"]},activeType:"book",activeState:"1",items:[]}},created:function(){this.items=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]},watch:{items:function(e){localStorage.setItem("items",JSON.stringify(e))}},computed:{inputItem:function(){return{title:this.inputTitle,state:this.activeState,type:this.activeType}},typedIcon:function(){switch(this.activeType){case"book":return"el-icon-notebook-2";case"movie":return"el-icon-video-camera";default:return""}},filterItems:function(){var e=this;return this.items.filter((function(t){var n=t.type,r=t.state;return n===e.activeType&&r===e.activeState}))}},methods:{addItem:function(e){this.items=[].concat(Object(N["a"])(this.items),[Object(I["a"])(Object(I["a"])({},e),{},{time:Date.now()})])},removeItem:function(e){var t=e.time;this.items=this.items.filter((function(e){return e.time!==t}))},editItem:function(e,t){this.removeItem(e),this.addItem(Object(I["a"])(Object(I["a"])({},e),t))}},provide:function(){return{currentStates:this.allStates[this.activeType],addItem:this.addItem,editItem:this.editItem,removeItem:this.removeItem}}};n("ad83");J.render=k,J.__scopeId="data-v-1d1e84f5";var W=J,Y={name:"app",components:{Header:p,Footer:z,Content:W}};n("bfaa");Y.render=a;var B=Y,Z=(n("159b"),n("d3b7"),n("ddb0"),n("466d"),n("47e2"));function q(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n).default}})),t}var G=Object(Z["a"])({locale:"zh-cn",fallbackLocale:"en",messages:q()}),K=Object(r["i"])(B).use(G);K.use(o["a"]),K.mount("#app")},5899:function(e,t,n){"use strict";n("f5e7")},"5a63":function(e,t,n){},9961:function(e,t,n){},ad83:function(e,t,n){"use strict";n("3f2b")},b28f:function(e,t,n){},b338:function(e,t,n){"use strict";n("5a63")},b6d7:function(e,t,n){},bfaa:function(e,t,n){"use strict";n("9961")},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={en:e=>{const{normalize:t}=e;return t(["English"])},"zh-cn":e=>{const{normalize:t}=e;return t(["简体中文"])},"Progress Manager":e=>{const{normalize:t}=e;return t(["Progress Manager"])},book:e=>{const{normalize:t}=e;return t(["Books"])},movie:e=>{const{normalize:t}=e;return t(["Movies"])},"to read":e=>{const{normalize:t}=e;return t(["To Read"])},reading:e=>{const{normalize:t}=e;return t(["Reading"])},"has read":e=>{const{normalize:t}=e;return t(["Has Read"])},"to watch":e=>{const{normalize:t}=e;return t(["To Watch"])},watching:e=>{const{normalize:t}=e;return t(["Watching"])},"has watched":e=>{const{normalize:t}=e;return t(["Has Watched"])},Author:e=>{const{normalize:t}=e;return t(["Author"])},Progress:e=>{const{normalize:t}=e;return t(["Progress"])},Link:e=>{const{normalize:t}=e;return t(["Link"])},Unknown:e=>{const{normalize:t}=e;return t(["Unknown"])},Edit:e=>{const{normalize:t}=e;return t(["Edit"])},New:e=>{const{normalize:t}=e;return t(["New"])},Delete:e=>{const{normalize:t}=e;return t(["Delete"])},"Ask For Delete":e=>{const{normalize:t}=e;return t(["Are you sure?"])},AddSth:e=>{const{normalize:t}=e;return t(["Add something new here"])},Save:e=>{const{normalize:t}=e;return t(["Save"])},Cancel:e=>{const{normalize:t}=e;return t(["Cancel"])},localeTitle:e=>{const{normalize:t,interpolate:n,list:r}=e;return t(["  <i>",n(r(0)),"</i>"])},tips:e=>{const{normalize:t}=e;return t(["All data is stored locally"])},message:e=>{const{normalize:t}=e;return t(["hello i18n !!"])}}},f5e7:function(e,t,n){},faf3:function(e,t,n){"use strict";n("b6d7")}});
//# sourceMappingURL=app.dfbbab42.js.map