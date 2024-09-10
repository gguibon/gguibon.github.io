(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"4ab4":function(t,a,e){"use strict";e("b38f")},"78a7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page-container",[a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md full-width"},[a("q-card",{attrs:{flat:""}},[a("q-card-section",[a("div",{staticClass:"text-center"},[a("img",{staticClass:"brandinglogo",attrs:{alt:"EZCAT",src:"img/ezcat_logo.png"}})])]),a("q-card-section",[a("div",{staticClass:"text-center text-bold text-blue-grey-8 text-h4"},[t._v("EZCAT: an Easy Conversation Annotation Tool")])]),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{id:"start",rounded:"",to:"/hub",color:"positive","no-caps":""}},[t._v("START")])],1)],1),a("q-space"),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary",outline:"","text-color":"white",label:"Used by"}}),t._v(" EZCAT is used by:\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tIf you are using EZCAT and want to appear in the following list, just "),a("q-btn",{attrs:{dense:"",color:"primary",label:"send me an email"},on:{click:function(a){return t.clipboard(t.email)}}}),t._v(" with one sentence about your usage!\n\t\t\t\t\t\t\t\t")],1)]),a("q-card-section",{staticClass:"row wrap q-gutter-xs",attrs:{horizontal:""}},[a("div",{staticClass:"col hoverlight"},[a("a",{attrs:{href:"https://warwick.ac.uk/",target:"_blank"}},[a("img",{staticStyle:{"max-width":"35%"},attrs:{src:"img/warwick_logo.png"}})])]),a("div",{staticClass:"col hoverlight"},[a("a",{attrs:{href:"https://ieeexplore.ieee.org/abstract/document/10488271",target:"_blank"}},[t._v("Mingi Shin et al., 2024"),a("img",{staticStyle:{"max-width":"30%"},attrs:{src:"img/KAIST_logo.png"}})])])])],1)],1)],1)],1),a("q-card",{attrs:{flat:""}},[a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col full-width",attrs:{flat:""}},[a("q-card-section",[a("div",{staticClass:"text-h4 text-blue-grey-10 text-bold"},[t._v("\n\t\t\t\t\t\t\t\tHow to use?\n\t\t\t\t\t\t\t")])])],1)],1),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary","text-color":"white",label:"Step 1"}}),t._v(" Import Whatsapp or Telegram conversations.\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tOr use our JSON data format.\n\t\t\t\t\t\t\t\t")])]),a("q-card-section",[a("div",{staticClass:"text-justify text-body1"},[t._v("\n\t\t\t\t\t\t\t\t\tEZCAT can handle conversations from instant messaging applications. The data will be formatted into our JSON representation.\n\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"text-justify text-h6"},[t._v("\n\t\t\t\t\t\t\t\t\tTry our different dummy files for starter: \n\t\t\t\t\t\t\t\t")])]),a("q-card-actions",[a("q-btn",{attrs:{color:"positive",icon:"whatsapp",href:"https://github.com/gguibon/ezcat/tree/main/public/dummy_files/dummy_whatsapp_export.txt",target:"_blank"}}),a("q-btn",{attrs:{color:"blue",icon:"telegram",href:"https://github.com/gguibon/ezcat/tree/main/public/dummy_files/dummy_telegram_export.html",target:"_blank"}}),a("q-btn",{attrs:{icon:"data_object",href:"https://github.com/gguibon/ezcat/tree/main/public/dummy_files/dummy_chats.json",target:"_blank"}})],1)],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col col-md-5"},[a("q-img",{staticClass:"rounded-borders",attrs:{src:"img/ezcat_upload.png","spinner-color":"primary",fit:"contain"}})],1)],1)],1)],1),a("q-space"),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary","text-color":"white",label:"Step 2"}}),t._v(" Configure the labels.\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tBy considering message-level labels and conversation-level labels.\n\t\t\t\t\t\t\t\t")])]),a("q-card-section",[a("div",{staticClass:"text-justify text-body1"},[t._v('\n\t\t\t\t\t\t\t\t\tTwo fields are considered: "msgLabels" for message-level labels and "chatLabels" for conversation-level labels.\n\t\t\t\t\t\t\t\t\tJust add one or several keys which contain the following fields: "title", "description", "mandatory", "type", "values".\n\t\t\t\t\t\t\t\t\t'),a("codemirror",{attrs:{options:t.cmOption},model:{value:t.jsonexample,callback:function(a){t.jsonexample=a},expression:"jsonexample"}})],1)])],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col col-md-5"},[a("q-img",{staticClass:"rounded-borders",attrs:{src:"img/ezcat_settings_mobile.png","spinner-color":"primary",ratio:16/9,fit:"contain"}})],1)],1)],1)],1),a("q-space"),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary","text-color":"white",label:"Step 3"}}),t._v(" Annotate.\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tAnnotate your conversations message per message, then for the whole conversation.\n\t\t\t\t\t\t\t\t")])]),a("q-card-section",[a("div",{staticClass:"text-justify text-body1"},[t._v("\n\t\t\t\t\t\t\t\t\tYou can only consider message-level annotation or conversation-level labels, and even constrain a specific order.\n\t\t\t\t\t\t\t\t\tAuthors' colors and icons can be customized to ease message sender recognition.\n\t\t\t\t\t\t\t\t")]),a("q-img",{staticClass:"rounded-borders lt-md",attrs:{src:"img/ezcat1.1.0_annotation_mobile.png","spinner-color":"primary",ratio:16/9,fit:"contain"}})],1)],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col col-md-5 gt-sm"},[a("q-img",{staticClass:"rounded-borders",attrs:{src:"img/ezcat1.1.0_annotation_mobile.png","spinner-color":"primary",ratio:16/9,fit:"contain"}})],1)],1)],1)],1),a("q-space"),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary","text-color":"white",label:"Step 4"}}),t._v(" Export the corpus.\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tThe corpus will be save as a JSON file.\n\t\t\t\t\t\t\t\t")])]),a("q-card-section",[a("div",{staticClass:"text-justify text-body1"},[t._v("\n\t\t\t\t\t\t\t\t\tYou can import the exported JSON file later on, to continue the annotation process. \n\t\t\t\t\t\t\t\t")])])],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col col-md-5"})],1)],1)],1),a("q-space"),a("q-space"),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary",outline:"","text-color":"white",label:"Cite us"}}),t._v(" Cite our work.\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tIf you find this tool useful, please cite our work\n\t\t\t\t\t\t\t\t")])]),a("q-card-section",[a("div",{staticClass:"text-justify text-body1"},[a("q-btn",{attrs:{color:"accent",label:"Copy to clipboard"},on:{click:function(a){return t.clipboard(t.bibtex)}}})],1)]),a("q-input",{staticClass:"lt-md",attrs:{color:"teal",filled:"",label:"Bibtex",autogrow:"",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}]),model:{value:t.bibtex,callback:function(a){t.bibtex=a},expression:"bibtex"}})],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col col-md-5 gt-sm"},[a("q-input",{attrs:{color:"teal",filled:"",label:"Bibtex",autogrow:"",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}]),model:{value:t.bibtex,callback:function(a){t.bibtex=a},expression:"bibtex"}})],1)],1)],1)],1),a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col bg-white2 full-width",attrs:{flat:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-12 col-md-6",attrs:{vertical:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-blue-grey-10 text-bold"},[a("q-chip",{attrs:{color:"primary",outline:"","text-color":"white",label:"Optional"}}),t._v(" Give us your feedbacks.\n\t\t\t\t\t\t\t\t")],1),a("div",{staticClass:"text-subtitle2"},[t._v("\n\t\t\t\t\t\t\t\t\tThe feedback form is available right \n\t\t\t\t\t\t\t\t\t"),a("q-btn",{attrs:{flat:"",dense:"",label:"here",color:"primary",icon:"comment","aria-label":"Feedback",href:"https://forms.gle/nwmkqGTmQgsBhScv8",target:"_blank"}},[a("q-tooltip",{attrs:{delay:200}},[t._v("Feedback")])],1),t._v(".\n\t\t\t\t\t\t\t\t")],1)]),a("q-card-section",[a("div",{staticClass:"text-justify text-body1"},[t._v("\n\t\t\t\t\t\t\t\t\tEZCAT does not access any server. Hence, this form is the only way for us to gather some feedbacks.\n\t\t\t\t\t\t\t\t")]),a("iframe",{staticClass:"lt-md",attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSfhy2nv4RW6P8MlXW78tTby9QLy8wsOs9dEaRjqWKqZZq9jZg/viewform?embedded=true",width:"100%",height:"320",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("Feedback Form")])])],1),a("div",{staticClass:"col"}),a("div",{staticClass:"col col-md-5 gt-sm"},[a("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSfhy2nv4RW6P8MlXW78tTby9QLy8wsOs9dEaRjqWKqZZq9jZg/viewform?embedded=true",width:"100%",height:"340",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("Feedback Form")])])],1)],1)],1)],1),a("q-space"),a("q-card",{attrs:{flat:""}},[a("q-card-section",{staticClass:"row"},[a("q-card",{staticClass:"col full-width",attrs:{flat:""}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-blue-grey-10 text-bold"},[a("span",{staticClass:"text-h4"},[t._v("Authors: ")]),a("a",{attrs:{href:"https://gguibon.github.io/",target:"_blank"}},[t._v("Gaël Guibon")]),t._v(", "),a("a",{attrs:{href:"https://www.linkedin.com/in/luce-lefeuvre-b1753020?originalSubdomain=fr",target:"_blank"}},[t._v("Luce Lefeuvre")]),t._v(", "),a("a",{attrs:{href:"https://www.telecom-paris.fr/matthieu-labeau",target:"_blank"}},[t._v("Matthieu Labeau")]),t._v(", "),a("a",{attrs:{href:"https://clavel.wp.imt.fr/",taget:"_blank"}},[t._v("Chloé Clavel")])])])],1)],1),a("q-card-section",{staticClass:"row wrap"},[a("q-card",{staticClass:"col",attrs:{flat:""}},[a("q-card-section",{staticClass:"row wrap q-gutter-xs",attrs:{horizontal:""}},[a("div",{staticClass:"col hoverlight"},[a("a",{attrs:{href:"https://www.sncf.com/en/innovation-development/innovation-research",target:"_blank"}},[a("img",{staticStyle:{"max-width":"35%"},attrs:{src:"img/sncf_logo.svg"}})])]),a("div",{staticClass:"col text-h5 text-blue-grey-10 text-bold hoverlight"},[a("a",{attrs:{href:"https://www.telecom-paris.fr/en/home",target:"_blank"}},[a("img",{staticStyle:{"max-width":"35%"},attrs:{src:"img/telecomparis_logo.svg"}})])]),a("div",{staticClass:"col text-h5 text-blue-grey-10 text-bold"},[a("img",{staticStyle:{"max-width":"60%"},attrs:{src:"img/oui_logo.png"}})]),a("div",{staticClass:"col text-subtitle2"},[a("a",{attrs:{href:"https://datascienceandai.wp.imt.fr/en/home-2/",taget:"_blank"}},[t._v("DSAIDIS Chair")])]),a("div",{staticClass:"col text-subtitle2 hoverlight"},[a("a",{attrs:{href:"https://anr.fr/Project-ANR-17-CE33-0003",taget:"_blank"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:"img/anr-logo-2021.png"}})])])])],1)],1),a("q-card-section",{staticClass:"row"})],1)],1)])],1)},i=[],o=e("8f94"),r=(e("db91"),e("a7be"),e("01cb"),e("cdde")),l={name:"HomePage",components:{codemirror:o["codemirror"]},data(){return{jsonexample:JSON.stringify({yourlabelname:{title:"mysuperlabel",description:"this label does this",mandatory:!0,type:"listselect",values:["value1","value2","valueN"]}},null,1),cmOption:{tabSize:1,styleActiveLine:!1,lineNumbers:!1,lineWrapping:!0,line:!1,mode:"python",theme:"eclipse"},email:"gael.guibon@gmail.com",bibtex:'\n@inproceedings{guibon-2022-ezcat,\n    title = "EZCAT: an Easy Conversation Annotation Tool",\n    author = {Guibon, Ga{"e}l  and\n      Labeau, Matthieu  and\n      Lefeuvre, Luce  and\n      Clavel, Chlo{\'e}},\n    booktitle = "Proceedings of the 13th Language Resources and Evaluation Conference",\n    month = june,\n    year = "2022",\n    address = "Marseille, France",\n    publisher = "European Language Resources Association",\n    abstract = "Users generate content constantly, leading to new data requiring annotation. Among this data, textual conversations are created every day and come with some specificities: they are mostly private through instant messaging applications, requiring the conversational context to be labeled. These specificities led to several annotation tools dedicated to conversation, and mostly dedicated to dialogue tasks, requiring complex annotation schemata, not always customizable and not taking into account conversation-level labels. In this paper, we present EZCAT, an easy-to-use interface to annotate conversations in a two-level configurable schema, leveraging message-level labels and conversation-level labels at once. Our interface is characterized by the voluntary absence of a server and accounts management, enhancing its availability to anyone, and the control over data, which is crucial to confidential conversations. We also present our first usage of EZCAT along with our annotation schema we used to annotate confidential customer service conversations. EZCAT is freely available at https://gguibon.github.io/ezcat",\n    language = "English",\n}\n'}},methods:{onFileLoaded(){this.$emit("file-loaded")},clipboard(t){Object(r["a"])(t).then((()=>{this.$q.notify({message:"Copied to clipboard",color:"positive",position:"top-right"})})).catch((()=>{this.$q.notify({message:"Failed to copy to clipboard",color:"negative",position:"top-right"})}))}}},c=l,n=(e("4ab4"),e("2877")),d=e("09e3"),b=e("9989"),h=e("f09f"),u=e("a370"),m=e("4b7e"),g=e("9c40"),p=e("2c91"),v=e("b047"),f=e("068f"),C=e("27f9"),x=e("0016"),y=e("05c0"),q=e("eebe"),w=e.n(q),_=Object(n["a"])(c,s,i,!1,null,"6ef182dc",null);a["default"]=_.exports;w()(_,"components",{QPageContainer:d["a"],QPage:b["a"],QCard:h["a"],QCardSection:u["a"],QCardActions:m["a"],QBtn:g["a"],QSpace:p["a"],QChip:v["a"],QImg:f["a"],QInput:C["a"],QIcon:x["a"],QTooltip:y["a"]})},b38f:function(t,a,e){}}]);