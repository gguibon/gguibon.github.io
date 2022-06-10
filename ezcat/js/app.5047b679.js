(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,i=1;i<o.length;i++){var s=o[i];0!==n[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},i={1:0},n={1:0},a=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"8e251b4b",3:"5d562b74",4:"8ff5bd36",5:"899a59af",6:"c3859caf",7:"adea7461"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={2:1,3:1,4:1,5:1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=new Promise((function(t,o){for(var r="css/"+({}[e]||e)+"."+{2:"55bd0821",3:"ea23a85b",4:"95fb01fc",5:"7de741d0",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",n=l.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===n))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],d=u.getAttribute("data-href");if(d===r||d===n)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var r=t&&t.target&&t.target.src||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],c.parentNode.removeChild(c),o(a)},c.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(c)})).then((function(){i[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var m=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(c);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",m.name="ChunkLoadError",m.type=r,m.request=i,o[1](m)}n[e]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var c=d;a.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);o("5319"),o("7d6e"),o("e54f"),o("573e"),o("62f2"),o("7e6d");var r=o("2b0e"),i=o("1f91"),n=o("42d2"),a=o("b05d"),s=o("2a19");r["a"].use(a["a"],{config:{},lang:i["a"],iconSet:n["a"],plugins:{Notify:s["a"]}});var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},u=[],d=o("517f"),m={name:"App",mounted(){this.loadChats()},methods:{loadChats(){this.$store.dispatch("setChats",d)}}},c=m,b=o("2877"),p=Object(b["a"])(c,l,u,!1,null,null,null),g=p.exports,h=o("4360"),f=o("8c4f");o("ddb0");const v=[{path:"/",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"78a7")),name:"home"},{path:"/hub",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"aeba")),name:"hub"},{path:"/chat/:chatid",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"ab55")),props:!0,name:"chat"},{path:"/settings",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"b41f")),name:"settings"}]},{path:"*",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"e51e"))}];var x=v;r["a"].use(f["a"]);var W=function(){const e=new f["a"]({scrollBehavior:()=>({x:0,y:0}),routes:x,mode:"hash",base:""});return e},L=async function(){const e="function"===typeof h["a"]?await Object(h["a"])({Vue:r["a"]}):h["a"],t="function"===typeof W?await W({Vue:r["a"],store:e}):W;e.$router=t;const o={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:o,store:e,router:t}},y=o("8847"),S=o("bc3a"),P=o.n(S);r["a"].prototype.$axios=P.a;const q="";async function M(){const{app:e,store:t,router:o}=await L();let i=!1;const n=e=>{i=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),s=[y["a"],void 0];for(let u=0;!1===i&&u<s.length;u++)if("function"===typeof s[u])try{await s[u]({app:e,router:o,store:t,Vue:r["a"],ssrContext:null,redirect:n,urlPath:a,publicPath:q})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==i&&new r["a"](e)}M()},4360:function(e,t,o){"use strict";o("ddb0"),o("498a"),o("5319");var r=o("2b0e"),i=o("2f62");o("2a19"),o("8847");r["a"].use(i["a"]),t["a"]=new i["a"].Store({state:{user:{as_json:null,auth_provider:null,created_date:null,family_name:null,first_name:null,get_id:null,get_or_create:null,id:null,is_active:!1,is_anonymous:!0,is_authenticated:!1,last_seen:null,make_unique_nickname:null,make_valid_nickname:null,picture_url:null,query:null,query_class:null,super_admin:!1,username:null},chats:null,defaultAuthorIcon:{default:"account_circle"},defaultAuthorColors:["blue","cyan","purple"],config:{authorColorMap:{operator:"purple",customer:"cyan",alert:"black"},authorIconMap:{operator:"verified",customer:"account_circle",alert:"feedback"},msgLabels:{emotion:{title:"Emotion",description:"Main emotion for this message.",mandatory:!0,type:"chip",values:["Surprise","Amusement","Satisfaction","Relief","Neutral","Fear","Sadness","Disappointment","Anger","Frustration"]},intent:{title:"intent",description:"intent values",mandatory:!0,type:"chip",values:["Purchase","Downgrade","Unsubscribe","Demo Request"]}},chatLabels:{problemStatus:{title:"Pick an overall problem status for this chat",description:"Status of the problem at the end of the conversation.",mandatory:!0,type:"listselect",values:["Aborted","Solved","To be tested","Out-of-scope","No Solution"]},customerSentiment:{title:"Pick the customer satisfaction",description:"Estimated satisfaction of the customer at the end of conversation.",mandatory:!0,type:"radiobtn",values:[{label:"-3",value:"-3"},{label:"-2",value:"-2"},{label:"-1",value:"-1"},{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}]},emergency:{title:"Emergency context?",description:"Specifies if this conversation seems to be made in an emergency context.",mandatory:!0,type:"boolean",values:null}}},todoMode:!1},mutations:{set_chats(e,t){e.chats=t},update_chat(e,t){e.chats[t.id]=t},toggle_todo(e){e.todoMode=!e.todoMode},update_config(e,t){e.config=t}},actions:{setChats({commit:e},t){e("set_chats",t)},setChatsFromWhatsapp({commit:e,getters:t},o){o=o.split("\n");var r=[],i=new Set;for(const g of o)if(""!=g){var n=g.split(" - ")[0];if(g.split(" - ")[1].includes(":")){var a=g.split(" - ")[1].split(": ")[0],s=g.split(" - ")[1].split(": ")[1],l=s.split(" ").length,u={};u[t.firstMsgLabel.key]=null,r.push({time:n,text:s,author:a,nbWords:l,labels:u}),i.add(a)}}var d=Array.from(i).join(" & "),m={id:d,done:!1,datetime:"unk",duration:"unk",messages:r,labels:{},nbMessages:r.length,nbMessagesPerSpeakingSlot:null,nbWords:null,realDuration:"unk",speakingSlots:[]};for(var c of t.getChatLabelNames)m["labels"][c]=null;l=0;for(var b in r)l+=b.nbWords;m["nbWords"]=l,m["wordsPerMessage"]=m.nbWords/m.messages.length;var p={};p[d]=m,e("set_chats",p)},setChatsFromTelegram({commit:e,getters:t},o){for(var r=new DOMParser,i=r.parseFromString(o,"text/html"),n=document.evaluate("//div[contains(@class,'message') and not(contains(@class,'service'))]",i,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),a=[],s=0;s<n.snapshotLength;s++)a.push(n.snapshotItem(s).textContent.trim());var l={author:null,time:null,text:null},u=[],d=new Set;for(var m of a){m=m.replace(/\s\s+/g,"\n").split("\n");var c={};2==m.length?c={time:m[0],author:l["author"],text:m.slice(1).join(" ")}:("In reply to this message"==m[3]&&m.splice(3,1),c={time:m[1],author:m[2],text:m.slice(3).join(" ")},l=c);var b={};b[t.firstMsgLabel.key]=null,u.push({time:c["time"],text:c["text"],author:c["author"],nbWords:c["text"].split(" ").length,labels:b}),d.add(c["author"])}var p=Array.from(d).join(" & "),g={id:p,done:!1,datetime:"unk",duration:"unk",messages:u,labels:{},nbMessages:u.length,nbMessagesPerSpeakingSlot:null,nbWords:null,realDuration:"unk",speakingSlots:[]};for(var h of t.getChatLabelNames)g["labels"][h]=null;var f=0;for(var v in u)f+=v.nbWords;g["nbWords"]=f,g["wordsPerMessage"]=g.nbWords/g.messages.length;var x={};x[p]=g,e("set_chats",x)},updateChat({commit:e},t){e("update_chat",t)},toggleTodo({commit:e}){e("toggle_todo")},updateConfig({commit:e},t){e("update_config",t)}},getters:{getChats:e=>e.chats,getConfig:e=>e.config,getMsgLabels:e=>e.config.msgLabels,getChatLabels:e=>e.config.chatLabels,getTodoMode:e=>e.todoMode,firstMsgLabel:e=>{var t=Object.entries(e.config.msgLabels)[0],o={key:t[0],item:t[1]};return o},getChatLabelNames:e=>{var t=[];for(var o in e.config.chatLabels)t.push(o);return t},getMandatoryChatLabelNames:e=>{var t=[];for(var o in e.config.chatLabels)1==e.config.chatLabels[o].mandatory&&t.push(o);return t},getAuthorsIcons:e=>e.config.hasOwnProperty("authorIconMap")?e.config.authorIconMap:e.defaultAuthorIcon,getAuthorsColors:e=>e.config.hasOwnProperty("authorColorMap")?e.config.authorColorMap:e.defaultAuthorColors}})},"517f":function(e){e.exports=JSON.parse('{"81880244":{"datetime":"19/01/2019 23:52","duration":"09:04","labels":{"problemStatus":"Solved","customerSentiment":"1","emergency":false},"id":"81880244","done":true,"messages":[{"author":"customer","labels":{"emotion":["Neutral"]},"nbWords":1,"text":"hi ","time":"23:52"},{"author":"operator","labels":{"emotion":["Neutral"]},"nbWords":13,"text":"Good evening and welcome the customer service. How can I help you?","time":"23:52"},{"author":"operator","labels":{"emotion":["Neutral"]},"nbWords":5,"text":"Are you still there? ","time":"23:52"},{"author":"customer","labels":{"emotion":["Neutral"]},"nbWords":1,"text":"yes","time":"23:53"},{"author":"customer","labels":{"emotion":["Frustration"]},"nbWords":19,"text":"i can\'t book my ticket. doesn\'t work!","time":"23:54"},{"author":"customer","labels":{"emotion":["Neutral"]},"nbWords":19,"text":"can you do smth about it?","time":"23:54"},{"author":"operator","labels":{"emotion":["Neutral"]},"nbWords":19,"text":"Please give me more details on your problem.","time":"23:54"},{"author":"customer","labels":{"emotion":["Neutral"]},"nbWords":19,"text":"when I try to book my ticket, it freezes and keep loading","time":"23:54"},{"author":"customer","labels":{"emotion":["Frustration"]},"nbWords":19,"text":"it\'s not the first time!!","time":"23:54"},{"author":"customer","labels":{"emotion":["Neutral"]},"nbWords":19,"text":"is it a browser issue?","time":"23:54"},{"author":"customer","labels":{"emotion":["Neutral"]},"nbWords":19,"text":"nevermind I found the problem","time":"23:54"},{"author":"alert","labels":{"emotion":["Neutral"]},"nbWords":9,"text":"The operator just closed the chat window.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880245":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880245","done":true,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880246":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880246","done":true,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880247":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880247","done":false,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880248":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880248","done":false,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880249":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880249","done":false,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880250":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880250","done":false,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2},"81880251":{"datetime":"19/01/2019 23:52","duration":"09:04","problemStatus":null,"customerSentiment":null,"emergency":false,"id":"81880251","done":false,"messages":[{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"bonsoir ","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":13,"text":"Bonsoir et bienvenue sur Le T’Chat, en quoi puis-je vous être utile ?","time":"23:52"},{"author":"operator","labels":{"emotion":null},"nbWords":5,"text":"Êtes-vous toujours en ligne ? ","time":"23:52"},{"author":"customer","labels":{"emotion":null},"nbWords":1,"text":"oui","time":"23:53"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"operator","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"customer","labels":{"emotion":null},"nbWords":19,"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","time":"23:54"},{"author":"alert","labels":{"emotion":null},"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}],"nbMessages":20,"nbMessagesPerSpeakingSlot":1.8181818181818181,"nbWords":144,"operator":{"id":"225937","name":"NOM Prenom","pseudo":"Pseudo123"},"realDuration":"0:09:00","speakingSlots":[[],[],[],[],[],[],[],[{"author":"alert","emotion":null,"nbWords":9,"text":"Le Conseiller vient de fermer la fenêtre de dialogue.","time":"00:01"}]],"wordsPerMessage":7.2}}')},"7e6d":function(e,t,o){},8847:function(e,t,o){"use strict";var r=o("2b0e"),i=o("a925"),n={failed:"Action failed",success:"Action was successful"},a={"en-us":n};r["a"].use(i["a"]);const s=new i["a"]({locale:"en-us",fallbackLocale:"en-us",messages:a});t["a"]=({app:e})=>{e.i18n=s}}});