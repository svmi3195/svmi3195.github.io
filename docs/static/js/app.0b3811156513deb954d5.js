webpackJsonp([0],{"Ch+i":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("svmi3195")]),this._v(" "),e("div",[e("router-link",{attrs:{to:"/"}},[this._v("Home")]),this._v(" "),e("router-link",{attrs:{to:"projects"}},[this._v("Projects")]),this._v(" "),e("router-link",{attrs:{to:"contacts"}},[this._v("Contacts")])],1)])},staticRenderFns:[]};var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[this._v("\r\n  (c) svmi3195, 2018"),e("br"),this._v("\r\n  This site was made using "),e("em",[e("a",{attrs:{href:"https://vuejs.org"}},[this._v("vue.js")])]),this._v(".\r\n")])}]};var i={name:"App",components:{appHeader:n("VU/8")({},s,!1,function(t){n("Ch+i")},"data-v-1cc1501a",null).exports,appFooter:n("VU/8")({},o,!1,function(t){n("gCrf")},"data-v-d197a6fe",null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("main",[e("router-view")],1),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var c=n("VU/8")(i,a,!1,function(t){n("QIEo")},null,null).exports,u=n("/ocq"),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",[n("h2",[t._v(" "+t._s(t.name)+" ")]),t._v(" "),n("p",{staticClass:"description"},[t._v(" "+t._s(t.description)+" ")])]),t._v(" "),n("p",t._l(t.used,function(e){return n("span",{key:e},[t._v("\r\n    "+t._s(e))])}))])},staticRenderFns:[]};var p=n("VU/8")({props:["name","description","used"]},d,!1,function(t){n("pma4")},"data-v-f831bd24",null).exports,l={components:{appCard:p},data:function(){return{project:null,projectsAll:this.$store.getters.projectsAll}},methods:{showRandom:function(){this.project=this.projectsAll[Math.floor(Math.random()*this.projectsAll.length)]}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("button",{on:{click:t.showRandom}},[t._v("Random project")]),t._v(" "),n("div",{staticClass:"cardsWrapper"},[t.project?n("app-card",{attrs:{name:t.project.name,description:t.project.description,used:t.project.used}}):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("p",[this._v("Hi here.")]),this._v(" "),e("p",[this._v("This site is dedicated to showcase various projects I coded. Some were made for personal use, some as exercise, some for enterntainment. You can browse them at projects section. Or press the button below to get a random one.")]),this._v(" "),e("p",[this._v("In case you want to contact me or look at my profiles at different sites, head to contacts section.")])])}]};var m=n("VU/8")(l,h,!1,function(t){n("roF0")},"data-v-29a0738e",null).exports,v={components:{appCard:p},computed:{projects:function(){return this.$store.getters.projectsSorted}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"cardsWrapper"},this._l(this.projects,function(t){return e("app-card",{key:t.id,attrs:{name:t.name,description:t.description,used:t.used}})}))])},staticRenderFns:[]};var _=n("VU/8")(v,f,!1,function(t){n("usTi")},"data-v-08b25e8b",null).exports,j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(this.contacts,function(e){return n("li",{key:e.name},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])}))])},staticRenderFns:[]};var b=n("VU/8")({computed:{contacts:function(){return this.$store.getters.contactsAll}}},j,!1,function(t){n("Z067")},"data-v-748cf984",null).exports;r.a.use(u.a);var g=new u.a({routes:[{path:"/",name:"Home",component:m},{path:"/projects",name:"Projects",component:_},{path:"/contacts",name:"Contacts",component:b}]}),w=n("NYxO");r.a.use(w.a);var k=new w.a.Store({state:{projects:[{id:3,name:"Random name generator",description:"Random name generator based on letters frequency",used:["jQuery","Zurb Foundation"],github:"",live:""},{id:1,name:"Restaurants Reviews",description:"Project made during Udacity Mobile Web Specialist course",used:["Flexbox","Service worker","IndexedDB","Background sync"],github:"",live:""},{id:2,name:"Bears 15 Cards",description:"Flashcards application made in collaboration with two other coders",used:["Flexbox","Vue.js","Vuex","MongoDb"],github:"",live:""},{id:4,name:"Game of Life",description:"Implementation of Conway's Game of Life",used:["HTML5 canvas","vanilla JS"],github:"",live:""}],contacts:[{name:"Github",link:"https://github.com/svmi3195"},{name:"LinkedIn",link:"https://www.linkedin.com/in/svmi-02004019/"},{name:"Medium",link:"https://medium.com/@svmi3195"}]},getters:{projectsAll:function(t){return t.projects},projectsSorted:function(t){return t.projects.sort(function(t,e){return t.id-e.id})},contactsAll:function(t){return t.contacts}}});r.a.config.productionTip=!1,new r.a({el:"#app",router:g,store:k,render:function(t){return t(c)}})},QIEo:function(t,e){},Z067:function(t,e){},gCrf:function(t,e){},pma4:function(t,e){},roF0:function(t,e){},usTi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0b3811156513deb954d5.js.map