(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{451:function(t,e,n){"use strict";var o=n(6),r=n(452);o({target:"String",proto:!0,forced:n(453)("link")},{link:function(t){return r(this,"a","href",t)}})},452:function(t,e,n){var o=n(3),r=n(22),c=n(12),l=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=c(r(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(c(o),l,"&quot;")+'"'),v+">"+f+"</"+e+">"}},453:function(t,e,n){var o=n(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},468:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(9),n(34),n(40),n(67),n(451),n(48),n(30),{created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,menu;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector("button.mobile-menu-button"),menu=document.querySelector(".mobile-menu"),n.addEventListener("click",(function(){menu.classList.toggle("hidden")})),t.listMenu.forEach((function(e,n){return e.link.includes("#")?t.listMenu[n].offset=document.querySelector(e.link).offsetTop-100:""})),t.navigate(null),window.addEventListener("scroll",t.onScroll,!0);case 6:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll,!0)},methods:{toggleDarkLight:function(){var t=document.querySelector(".js-change-theme");console.log(localStorage.getItem("isDark")),[1,"1"].includes(localStorage.getItem("isDark"))?(console.log("masuk sini0"),t.innerHTML="☀️",localStorage.setItem("isDark",1),document.documentElement.classList.add("dark")):(console.log("masuk sini1"),t.innerHTML="🌙",localStorage.setItem("isDark",0),document.documentElement.classList.remove("dark"))},onScroll:function(t){var e=this;this.windowTop=window.top.scrollY;var n="",o=0;this.listMenu.forEach((function(t,e){window.top.scrollY>=t.offset&&t.link.includes("#")&&(n=t.link,o=e)})),this.listMenu.forEach((function(t,n){return e.listMenu[n].active=!1})),this.listMenu[o].active=!0,window.history.pushState(null,null,n)},coba:function(){},checkActive:function(param){var t="py-4 px-2 text-gray-500 dark:text-white font-semibold hover:text-green-500 transition duration-300";return param.active&&(t="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"),t},checkActiveMobile:function(param){var t="block dark:text-white text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300";return param.active&&(t="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"),t},navigate:function(param){var t=this;this.listMenu.forEach((function(e,n){return t.listMenu[n].active=!1})),this.listMenu[this.listMenu.map((function(t){return t.link})).indexOf("#about")].active=!0;var e=this.listMenu.map((function(t){return t.link})).indexOf(document.location.hash);e>-1&&(this.listMenu.forEach((function(e,n){return t.listMenu[n].active=!1})),this.listMenu[e].active=!0)}},data:function(){return{windowTop:0,listMenu:[{link:"#about",capt:"About",active:!0,offset:0},{link:"#education",capt:"Education",active:!1,offset:0},{link:"#experience",capt:"Experience",active:!1,offset:0},{link:"#skills",capt:"Skills",active:!1,offset:0},{link:"#projects",capt:"Projects",active:!1,offset:0},{link:"#contact",capt:"Contact",active:!1,offset:0}]}},watch:{}}),c=n(52),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"bg-white dark:bg-slate-900 shadow-lg fixed w-full z-10 top-0 dark:shadow-green-800/80"},[n("div",{staticClass:"max-w-6xl mx-auto px-4"},[n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"flex space-x-0"},[t._m(0),t._v(" "),n("div",{staticClass:"hidden md:flex items-center space-x-1 dark:text-white"},[n("NuxtLink",{staticClass:"py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),t._l(t.listMenu,(function(e,o){return n("NuxtLink",{key:o,class:t.checkActive(e),attrs:{to:e.link},nativeOn:{click:function(n){return t.navigate(e)}}},[t._v(t._s(e.capt))])}))],2)]),t._v(" "),n("div",{staticClass:"hidden md:flex items-center space-x-3 "},[n("button",{staticClass:"js-change-theme focus:outline-none mr-2 mt-2",on:{click:function(e){return t.$store.dispatch("ModuleStyle/toogleBtn")}}},[t._v("\n              "+t._s(t.$store.state.ModuleStyle.iconBtn)+"\n            ")])]),t._v(" "),n("div",{staticClass:"md:hidden flex items-center"},[n("button",{staticClass:"outline-none mobile-menu-button"},[n("svg",{staticClass:" w-6 h-6 text-gray-500 hover:text-green-500 ",attrs:{"x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])])])]),t._v(" "),n("div",{staticClass:"hidden mobile-menu"},[n("ul",{},[n("NuxtLink",{class:t.checkActiveMobile({active:!1}),attrs:{to:"/"}},[t._v("Home")]),t._v(" "),t._l(t.listMenu,(function(e,o){return n("li",{key:o},[n("NuxtLink",{class:t.checkActiveMobile(e),attrs:{to:e.link},nativeOn:{click:function(n){return t.navigate(e)}}},[t._v(t._s(e.capt))])],1)}))],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"flex items-center py-4 px-2 invisible",attrs:{href:"#"}},[n("img",{staticClass:"h-8 w-8 mr-2",attrs:{src:"#",alt:"Logo"}}),t._v(" "),n("span",{staticClass:"font-semibold text-gray-500 text-lg"},[t._v("AIRGG")])])])}],!1,null,null,null);e.default=component.exports}}]);