(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{3109:function(t,e,a){},"70b4":function(t,e,a){"use strict";a("3109")},aeba:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md block"},[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2"},[a("q-toolbar-title",[t._v("Conversations")]),a("q-linear-progress",{staticStyle:{"max-width":"25vw"},attrs:{stripe:"",rounded:"",size:"20px",value:t.progress,color:"positive"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:t.progressLabel}})],1),a("q-tooltip",{attrs:{delay:200}},[t._v("The annotation progress")])],1),a("q-toggle",{staticClass:"q-ml-sm",attrs:{dense:"",color:"yellow",icon:"filter_list","keep-color":""},on:{input:function(e){t.todo=t.toggleTodoMode()}},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}},[a("q-tooltip",{attrs:{delay:200}},[t._v("Toggle to only show conversations that require annotation")])],1),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:"",icon:"edit","no-caps":"",color:"secondary"},on:{click:function(e){return t.scrollToUnlabelled()}}},[a("q-tooltip",{attrs:{delay:200}},[t._v("Scroll to first conversation without annotation (please prefer the toggle method)")])],1),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:"",icon:"cloud_upload",color:"accent"},on:{click:function(e){t.uploadDial=!0}}},[a("q-tooltip",{attrs:{delay:200}},[t._v("Upload a JSON file to resume your work.")])],1),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:"",icon:"save",color:"positive"},on:{click:function(e){return t.saveFile()}}},[a("q-tooltip",{attrs:{delay:200}},[t._v("Save your modification by downloading the current version of the JSON content")])],1)],1),a("q-virtual-scroll",{ref:"virtualListRef",staticClass:"virtualscroll",attrs:{items:t.chatList},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item,s=e.index;return[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,staticClass:"q-my-sm",attrs:{clickable:""},on:{click:function(e){return t.enterChat(o[1])}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:0==o[1].done?"grey":"positive","text-color":"white",icon:0==o[1].done?"":"done"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(o[1].id))]),a("q-item-label",{directives:[{name:"show",rawName:"v-show",value:"unk"!=o[1].datetime,expression:"item[1].datetime != 'unk'"}],attrs:{caption:"",lines:"1"}},[t._v("Datetime: "),a("span",{staticClass:"text-bold"},[t._v(t._s(o[1].datetime))])]),a("q-item-label",{directives:[{name:"show",rawName:"v-show",value:"unk"!=o[1].realDuration,expression:"item[1].realDuration != 'unk'"}],attrs:{caption:"",lines:"1"}},[t._v("Real Duration: "),a("span",{staticClass:"text-bold"},[t._v(t._s(o[1].realDuration))])])],1)],1)]}}])})],1),a("q-dialog",{attrs:{maximized:t.maximizedUploadToggle,"transition-show":"fade","transition-hide":"fade"},model:{value:t.uploadDial,callback:function(e){t.uploadDial=e},expression:"uploadDial"}},[a("q-card",{staticStyle:{"max-width":"100vw"}},[a("q-bar",{staticClass:"bg-primary text-white"},[a("q-space"),a("q-btn",{attrs:{dense:"",flat:"",icon:"minimize",disable:!t.maximizedUploadToggle},on:{click:function(e){t.maximizedUploadToggle=!1}}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square",disable:t.maximizedUploadToggle},on:{click:function(e){t.maximizedUploadToggle=!0}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}})],1),a("q-card-section",[a("div",{staticClass:"text-h6 text-blue-grey-8"},[t._v("Select a file to upload and the corresponding format")])]),a("q-card-section",[a("q-card-section",[a("div",{staticClass:"text-h8 text-blue-grey-8"},[t._v("File format:")])]),a("q-btn-toggle",{attrs:{"toggle-color":"primary",options:[{value:"json",slot:"json"},{value:"whatsapp",slot:"whatsapp"},{value:"telegram",slot:"telegram"}]},scopedSlots:t._u([{key:"json",fn:function(){return[a("div",{staticClass:"row items-center no-wrap"},[a("div",{staticClass:"text-center"},[t._v("\n\t\t\t\t\t\tJSON\n\t\t\t\t\t\t")]),a("q-icon",{attrs:{right:"",name:"data_object"}})],1)]},proxy:!0},{key:"whatsapp",fn:function(){return[a("div",{staticClass:"row items-center no-wrap"},[a("div",{staticClass:"text-center"},[t._v("\n\t\t\t\t\t\tWhatsapp\n\t\t\t\t\t\t")]),a("q-icon",{staticClass:"text-green",attrs:{right:"",name:"whatsapp"}})],1)]},proxy:!0},{key:"telegram",fn:function(){return[a("div",{staticClass:"row items-center no-wrap"},[a("div",{staticClass:"text-center"},[t._v("\n\t\t\t\t\t\tTelegram\n\t\t\t\t\t\t")]),a("q-icon",{staticClass:"text-blue",attrs:{right:"",name:"telegram"}})],1)]},proxy:!0}]),model:{value:t.uploadMode,callback:function(e){t.uploadMode=e},expression:"uploadMode"}})],1),a("q-card-section",[a("q-file",{staticStyle:{"max-width":"200px"},attrs:{id:"filepicker","bottom-slots":"",label:"Click or drop",accept:t.fileFormats[t.uploadMode],counter:"","use-chips":"",outlined:""},on:{input:function(e){return t.loadFile()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){e.stopPropagation(),t.upload=null}}})]},proxy:!0}]),model:{value:t.upload,callback:function(e){t.upload=e},expression:"upload"}})],1)],1)],1)],1)},s=[],i=(a("ddb0"),a("e9c4"),a("2b3d"),a("9861"),a("4360")),r={data(){return{upload:null,uploadDial:!1,maximizedUploadToggle:!1,uploadMode:"json",todo:this.$store.getters.getTodoMode,fileFormats:{json:".json, text/json",whatsapp:".txt, text",telegram:".html, text/html"}}},computed:{tagged(){var t=0;for(let[e,a]of Object.entries(this.$store.getters.getChats))0!=a.done&&t++;return t},progress(){var t=0;for(let[e,a]of Object.entries(this.$store.getters.getChats))0!=a.done&&t++;return t/Object.entries(this.$store.getters.getChats).length},progressLabel(){var t=0;for(let[e,a]of Object.entries(this.$store.getters.getChats))0!=a.done&&t++;return`${t} / ${Object.entries(this.$store.getters.getChats).length} ( ${Math.round(t/Object.entries(this.$store.getters.getChats).length*100)}%) `},chatList(){if(0==this.todo)return Object.entries(this.$store.getters.getChats);{let t={};for(let[e,a]of Object.entries(this.$store.getters.getChats))a.hasOwnProperty("done")&&0==a.done&&(t[e]=a);return Object.entries(t)}}},mounted(){},methods:{enterChat(t){this.$router.push({name:"chat",params:{chatid:t.id,chat:t}})},saveFile(){const t=JSON.stringify(this.$store.getters.getChats),e=new Blob([t],{type:"text/plain"}),a=document.createEvent("MouseEvents"),o=document.createElement("a");o.download="chats"+Date.now()+"_"+this.tagged+".json",o.href=window.URL.createObjectURL(e),o.dataset.downloadurl=["text/json",o.download,o.href].join(":"),a.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(a)},loadFile(){if("whatsapp"==this.uploadMode){var t=new FileReader;t.onload=function(t){i["a"].dispatch("setChatsFromWhatsapp",t.target.result)},t.readAsText(this.upload)}else if("telegram"==this.uploadMode);else{t=new FileReader;t.onload=function(t){i["a"].dispatch("setChats",JSON.parse(t.target.result))},t.readAsText(this.upload)}this.$q.notify({message:"data loaded",position:"top-right",color:"positive"}),this.uploadDial=!1},scrollToUnlabelled(){var t=0;for(const[e,a]of Object.entries(this.$store.getters.getChats)){if(0==a.done){this.$refs.virtualListRef.scrollTo(t);break}t++}},toggleTodoMode(){return this.$store.commit("toggle_todo"),this.$store.getters.getTodoMode}}},l=r,n=(a("70b4"),a("2877")),c=a("9989"),d=a("65c6"),p=a("6ac5"),u=a("6b1d"),g=a("58a81"),m=a("05c0"),h=a("9564"),f=a("9c40"),v=a("a12b"),b=a("66e5"),w=a("4074"),x=a("cb32"),q=a("0170"),C=a("24e8"),y=a("f09f"),k=a("d847"),_=a("2c91"),T=a("a370"),j=a("6a67"),Q=a("0016"),$=a("7d53"),O=a("714f"),S=a("7f67"),D=a("eebe"),M=a.n(D),F=Object(n["a"])(l,o,s,!1,null,"15abd406",null);e["default"]=F.exports;M()(F,"components",{QPage:c["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QLinearProgress:u["a"],QBadge:g["a"],QTooltip:m["a"],QToggle:h["a"],QBtn:f["a"],QVirtualScroll:v["a"],QItem:b["a"],QItemSection:w["a"],QAvatar:x["a"],QItemLabel:q["a"],QDialog:C["a"],QCard:y["a"],QBar:k["a"],QSpace:_["a"],QCardSection:T["a"],QBtnToggle:j["a"],QIcon:Q["a"],QFile:$["a"]}),M()(F,"directives",{Ripple:O["a"],ClosePopup:S["a"]})}}]);