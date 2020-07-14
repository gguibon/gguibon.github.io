(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1f5a":function(t,e,a){},"9e72":function(t,e,a){"use strict";var o=a("1f5a"),s=a.n(o);s.a},aeba:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md block"},[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2"},[a("q-toolbar-title",[t._v("Chats ")]),a("q-linear-progress",{staticStyle:{"max-width":"25vw"},attrs:{stripe:"",rounded:"",size:"20px",value:t.progress,color:"positive"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:t.progressLabel}})],1)]),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:"",icon:"edit","no-caps":"",color:"primary"},on:{click:function(e){return t.scrollToUnlabelled()}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:"",icon:"cloud_upload",color:"accent"},on:{click:function(e){t.uploadDial=!0}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:"",icon:"save",color:"secondary"},on:{click:function(e){return t.saveFile()}}})],1),a("q-virtual-scroll",{ref:"virtualListRef",staticClass:"virtualscroll",attrs:{items:Object.entries(t.$store.getters.getChats)},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item,s=e.index;return[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(e){return t.enterChat(o[1])}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:null==o[1].emotion?"grey":"positive","text-color":"white",icon:null==o[1].emotion?"":"done"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(o[1].id))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("Datetime: "),a("span",{staticClass:"text-bold"},[t._v(t._s(o[1].datetime))])]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("Real Duration: "),a("span",{staticClass:"text-bold"},[t._v(t._s(o[1].realDuration))])]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("Speaking Slots: "),a("span",{staticClass:"text-bold"},[t._v(t._s(o[1].speakingSlots.length))])])],1)],1)]}}])})],1),a("q-dialog",{attrs:{maximized:t.maximizedUploadToggle,"transition-show":"fade","transition-hide":"fade"},model:{value:t.uploadDial,callback:function(e){t.uploadDial=e},expression:"uploadDial"}},[a("q-card",{staticStyle:{"max-width":"100vw"}},[a("q-bar",[a("q-space"),a("q-btn",{attrs:{dense:"",flat:"",icon:"minimize",disable:!t.maximizedUploadToggle},on:{click:function(e){t.maximizedUploadToggle=!1}}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square",disable:t.maximizedUploadToggle},on:{click:function(e){t.maximizedUploadToggle=!0}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}})],1),a("q-card-section",[a("div",{staticClass:"text-h6 text-blue-grey-8"},[t._v("Select a JSON file to continue tagging")])]),a("q-card-section",[a("q-file",{staticStyle:{"max-width":"200px"},attrs:{id:"filepicker","bottom-slots":"",label:"Load JSON",accept:".json, text/json",counter:"","use-chips":"",outlined:""},on:{input:function(e){return t.loadFile()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){e.stopPropagation(),t.upload=null}}})]},proxy:!0}]),model:{value:t.upload,callback:function(e){t.upload=e},expression:"upload"}})],1)],1)],1)],1)},s=[],i=(a("4fad"),a("ddb0"),a("2b3d"),a("4360")),l={data(){return{upload:null,uploadDial:!1,maximizedUploadToggle:!1}},computed:{progress(){var t=0;for(let[e,a]of Object.entries(this.$store.getters.getChats))null!=a.emotion&&t++;return t/Object.entries(this.$store.getters.getChats).length},progressLabel(){var t=0;for(let[e,a]of Object.entries(this.$store.getters.getChats))null!=a.emotion&&t++;return`${t} / ${Object.entries(this.$store.getters.getChats).length} ( ${Math.round(t/Object.entries(this.$store.getters.getChats).length)}%) `}},methods:{enterChat(t){this.$router.push({name:"chat",params:{chatid:t.id,chat:t}})},saveFile(){const t=JSON.stringify(this.$store.getters.getChats),e=new Blob([t],{type:"text/plain"}),a=document.createEvent("MouseEvents"),o=document.createElement("a");o.download="chats"+Date.now()+".json",o.href=window.URL.createObjectURL(e),o.dataset.downloadurl=["text/json",o.download,o.href].join(":"),a.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(a)},loadFile(){var t=new FileReader;t.onload=function(t){i["a"].dispatch("setChats",JSON.parse(t.target.result))},t.readAsText(this.upload),this.$q.notify({message:"data loaded",position:"top-right",color:"positive"})},scrollToUnlabelled(){var t=0;for(const[e,a]of Object.entries(this.$store.getters.getChats)){if(null==a.emotion){this.$refs.virtualListRef.scrollTo(t);break}t++}}}},n=l,r=(a("9e72"),a("2877")),c=a("9989"),d=a("65c6"),p=a("6ac5"),u=a("6b1d"),m=a("58a81"),f=a("9c40"),g=a("a12b"),b=a("66e5"),h=a("4074"),v=a("cb32"),q=a("0170"),x=a("24e8"),C=a("f09f"),w=a("d847"),k=a("2c91"),_=a("a370"),y=a("7d53"),Q=a("0016"),S=a("714f"),$=a("7f67"),j=a("eebe"),O=a.n(j),T=Object(r["a"])(n,o,s,!1,null,"29bf02aa",null);e["default"]=T.exports;O()(T,"components",{QPage:c["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QLinearProgress:u["a"],QBadge:m["a"],QBtn:f["a"],QVirtualScroll:g["a"],QItem:b["a"],QItemSection:h["a"],QAvatar:v["a"],QItemLabel:q["a"],QDialog:x["a"],QCard:C["a"],QBar:w["a"],QSpace:k["a"],QCardSection:_["a"],QFile:y["a"],QIcon:Q["a"]}),O()(T,"directives",{Ripple:S["a"],ClosePopup:$["a"]})}}]);