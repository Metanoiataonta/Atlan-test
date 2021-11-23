!function(){"use strict";var t,e={1454:function(t,e,n){var o=n(7740),r=n(7382),i={name:"TitleDoc",data:function(){return{}},computed:{document:function(){return this.$store.getters.getDocStatus}}},a=n(810),c={name:"ControlDocument",computed:{disabled:function(){return!this.$store.state.doc.controlEnabled}},methods:{deleteDocument:function(){this.$store.commit("toggleModal")},saveDocument:function(){this.$store.commit("toggleControl"),this.$store.commit("dataComparison")}}},s={name:"DocumentHeader",components:{"title-cmp":(0,a.Z)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",{staticClass:"title__heading"},[this._v("\n    Document #"+this._s(this.document.id)+"\n  ")]),this._v(" "),e("p",{staticClass:"title__status"},[this._v("\n    Status: "+this._s(this.document.status)+"\n  ")])])}),[],!1,null,"1e506a24",null).exports,"control-document-cmp":(0,a.Z)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control-document"},[e("button",{staticClass:"control-document__button",attrs:{disabled:this.disabled},on:{click:this.saveDocument}},[this._v("\n    Save\n  ")]),this._v(" "),e("button",{staticClass:"control-document__button",attrs:{disabled:this.disabled},on:{click:this.deleteDocument}},[this._v("\n    Delete\n  ")])])}),[],!1,null,"502ff44c",null).exports}},l=(0,a.Z)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("title-cmp"),this._v(" "),e("control-document-cmp")],1)}),[],!1,null,"5e58b760",null).exports,u={name:"MainNested",props:{item:{type:Object,default:function(){}},itemID:{type:Number,default:NaN}},emits:["delete"],data:function(){return{errorObj:{title:!1,price:!1},errorText:{title:"Enter anything other than a space",price:'The price is not correct. There should be no more than 2 decimal places. Example "12.34"'}}},computed:{itemWithoutID:function(){var t=this,e=Object.keys(this.item),n={};return(e=e.filter((function(t){return"id"!==t}))).forEach((function(e){return n[e]=t.item[e]})),n}},mounted:function(){this.checkValue(this.item.title,/\S/i,"title"),this.checkValue(this.item.price,/^\d+\.?\d{0,2}$/i,"price")},methods:{deleteNested:function(){this.$store.state.doc.doc.nested.length>0&&this.$store.commit("deleteDocData",this.itemID)},checkValue:function(t,e,n){this.errorObj[n]=!e.test(t)},onChange:function(t){var e=t.target;switch(e.name){case"title":this.checkValue(e.value,/\S/i,"title");break;case"price":this.checkValue(e.value,/^\d+\.?\d{0,2}$/i,"price")}this.showError||this.$store.commit("setDocData",{id:this.itemID,prop:e.name,value:"title"===e.name?e.value:Number(e.value)})}}};function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var f={name:"MainDocument",components:{"nested-cmp":(0,a.Z)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nested"},[t._l(t.itemWithoutID,(function(e,o){return n("label",{key:o,staticClass:"nested__label"},[t._v("\n    "+t._s(o)+" "),t.errorObj[o]?n("span",[t._v(" "+t._s(t.errorText[o]))]):t._e(),t._v(" "),n("input","checkbox"==("title"===o||"price"===o?"text":"number")?{directives:[{name:"model",rawName:"v-model",value:t.itemWithoutID[o],expression:"itemWithoutID[name]"}],staticClass:"nested__input",class:t.errorObj[o]?"nested__input_error":"",attrs:{name:o,type:"checkbox"},domProps:{checked:Array.isArray(t.itemWithoutID[o])?t._i(t.itemWithoutID[o],null)>-1:t.itemWithoutID[o]},on:{input:t.onChange,change:function(e){var n=t.itemWithoutID[o],r=e.target,i=!!r.checked;if(Array.isArray(n)){var a=t._i(n,null);r.checked?a<0&&t.$set(t.itemWithoutID,o,n.concat([null])):a>-1&&t.$set(t.itemWithoutID,o,n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.itemWithoutID,o,i)}}}:"radio"==("title"===o||"price"===o?"text":"number")?{directives:[{name:"model",rawName:"v-model",value:t.itemWithoutID[o],expression:"itemWithoutID[name]"}],staticClass:"nested__input",class:t.errorObj[o]?"nested__input_error":"",attrs:{name:o,type:"radio"},domProps:{checked:t._q(t.itemWithoutID[o],null)},on:{input:t.onChange,change:function(e){return t.$set(t.itemWithoutID,o,null)}}}:{directives:[{name:"model",rawName:"v-model",value:t.itemWithoutID[o],expression:"itemWithoutID[name]"}],staticClass:"nested__input",class:t.errorObj[o]?"nested__input_error":"",attrs:{name:o,type:"title"===o||"price"===o?"text":"number"},domProps:{value:t.itemWithoutID[o]},on:{input:[function(e){e.target.composing||t.$set(t.itemWithoutID,o,e.target.value)},t.onChange]}})])})),t._v(" "),n("button",{staticClass:"nested__close",on:{click:function(e){return t.deleteNested(t.itemID)}}},[n("svg",{attrs:{id:"Layer_1",height:"512px",fill:"white",version:"1.1",viewBox:"0 0 512 512",width:"512px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("path",{attrs:{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"}})])])],2)}),[],!1,null,"f6a691b6",null).exports},data:function(){return{}},computed:{nested:function(){return this.$store.getters.getDocData("nested")},totalPrice:function(){var t=this.nested.map((function(t){return parseFloat(t.price)}));return[].concat(d(t),[0]).reduce((function(t,e){return t+e})).toFixed(2)}},methods:{addNewNested:function(){this.$store.commit("addNewNested")}}},h=(0,a.Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"main-document",attrs:{name:"main"}},[n("div",{staticClass:"main-document__total-price"},[t._v("\n    Total price: "+t._s(t.totalPrice)+"\n  ")]),t._v(" "),n("div",{staticClass:"main-document__list"},t._l(t.nested,(function(t,e){return n("nested-cmp",{key:t.id,attrs:{item:t,"item-i-d":e}})})),1),t._v(" "),n("button",{staticClass:"main-document__add-new",on:{click:t.addNewNested}},[t._v("\n    Add new\n  ")])])}),[],!1,null,"03287618",null).exports,p={name:"TableItem",props:{prop:{type:[String,Number,Boolean],default:void 0},itemKey:{type:String,default:void 0},checked:{type:Boolean,default:!1}},computed:{},mounted:function(){},methods:{checkChange:function(t){t.target.checked,this.$store.commit("checkBox",this.prop)}}};function b(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={name:"TableDocument",components:{"table-item-cmp":(0,a.Z)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"id"!==t.itemKey&&"check"!==t.itemKey?n("div",{staticClass:"table__item"},[t._v("\n  "+t._s("start"===t.itemKey?new Date(1e3*t.prop).toDateString():t.prop)+"\n  "),"period"===t.itemKey?n("input",{attrs:{type:"checkbox",name:t.itemKey},domProps:{checked:t.checked},on:{change:t.checkChange}}):t._e()]):t._e()}),[],!1,null,"74d1c23d",null).exports},data:function(){return{columns:["Period","Foo","Bar","Start"],sortKey:"Period",sortDirection:"consistent",sortedTable:this.$store.state.doc.doc.table,lastTarget:void 0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({endTime:function(){var t=new Date(1e3*(Math.max.apply(Math,b(this.table.map((function(t){return t.start}))).concat([0]))+1));return t=new Date(t.setMonth(t.getMonth()+1)).toDateString()}},(0,r.rn)({table:function(t){return t.doc.doc.table}})),mounted:function(){this.lastTarget=document.querySelector(".table__sort-bottom"),this.lastTarget.classList.toggle("table__button_active")},methods:{sortBy:function(t,e,n){var o=this;this.lastTarget&&this.lastTarget.classList.toggle("table__button_active"),t.target.classList.toggle("table__button_active");var r=!(e===this.sortKey&&n===this.sortDirection);if(this.lastTarget=t.target,r){this.sortKey=e,this.sortDirection=n;var i=this.table.map((function(t,n){return{i:n,value:t[e.toLowerCase()]}}));i=i.sort((function(t,e){return t.value>e.value?1:t.value<e.value?-1:0})),"inverted"===n&&i.reverse(),this.sortedTable=i.map((function(t){return o.table[t.i]}))}}}},D={name:"DocumentTabs",components:{"main-document-cmp":h,"table-document-cmp":(0,a.Z)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"table",attrs:{name:"table"}},[n("div",{staticClass:"table__end"},[t._v("\n    End: "+t._s(t.endTime)+"\n  ")]),t._v(" "),n("div",{staticClass:"table__grid"},[t._l(t.columns,(function(e){return n("div",{key:e,staticClass:"table__item"},[t._v("\n      "+t._s(e)+"\n      "),n("div",{staticClass:"table__sort"},[n("button",{staticClass:"table__sort-top",on:{click:function(n){return t.sortBy(n,e,"inverted")}}}),t._v(" "),n("button",{staticClass:"table__sort-bottom",on:{click:function(n){return t.sortBy(n,e,"consistent")}}})])])})),t._v(" "),t._l(t.sortedTable,(function(e,o){return t._l(e,(function(t,r){return n("table-item-cmp",{key:r+o,attrs:{prop:t,"item-key":r,checked:"period"===r?e.check:void 0}})}))}))],2)])}),[],!1,null,"7a69891a",null).exports},data:function(){return{tabs:["Main","Table"],currentTab:"Main"}},mounted:function(){this.$refs.Main[0].classList.toggle("tabs_active")},methods:{openTab:function(t,e){var n=this;this.currentTab=e;var o=t.target.classList;!o.contains("tabs_active")&&o.toggle("tabs_active"),this.tabs.forEach((function(t){if(t!==e){var o=n.$refs[t][0].classList;n.$refs,n.$refs[t],o.contains("tabs_active")&&o.toggle("tabs_active")}}))}}},w={name:"ModalComponent",computed:{disabled:function(){return!this.$store.state.doc.controlEnabled}},methods:{closeModal:function(){this.$store.commit("toggleModal")},deleteDocument:function(){this.$store.commit("toggleControl"),this.$store.commit("deleteDocument")}}},k={name:"DocumentEditor",components:{"header-cmp":l,"tabs-cmp":(0,a.Z)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("div",{staticClass:"tabs__selectors"},t._l(t.tabs,(function(e){return n("button",{key:e,ref:e,refInFor:!0,staticClass:"tabs__button",on:{click:function(n){return t.openTab(n,e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("main-document-cmp",{directives:[{name:"show",rawName:"v-show",value:"Main"===t.currentTab,expression:"currentTab === 'Main'"}]}),t._v(" "),n("table-document-cmp",{directives:[{name:"show",rawName:"v-show",value:"Table"===t.currentTab,expression:"currentTab === 'Table'"}]})],1)}),[],!1,null,"1820a9a3",null).exports,"modal-cmp":(0,a.Z)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal.apply(null,arguments)}}},[n("div",{ref:"modalWrapper",staticClass:"modal__wrapper"},[n("div",{staticClass:"modal__text"},[t._v("\n      Are you sure?\n    ")]),t._v(" "),n("div",{staticClass:"modal__control"},[n("button",{staticClass:"modal__button modal__button_yes",attrs:{disabled:t.disabled},on:{click:t.deleteDocument}},[t._v("\n        yes\n      ")]),t._v(" "),n("button",{staticClass:"modal__button",attrs:{disabled:t.disabled},on:{click:t.closeModal}},[t._v("\n        no\n      ")])])])])}),[],!1,null,"ef799a54",null).exports},computed:{showModal:function(){return this.$store.state.doc.showModal}},mounted:function(){document.title="Document #"+this.$store.state.doc.doc.id},methods:{dataComparison:function(){}}},C=(0,a.Z)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"document-editor"},[e("form",{staticClass:"document-editor__wrapper container",attrs:{name:"document"},on:{submit:function(t){t.preventDefault()}}},[e("header-cmp"),this._v(" "),e("tabs-cmp"),this._v(" "),this.showModal?e("modal-cmp"):this._e()],1)])}),[],!1,null,"7d075eda",null).exports;function x(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var E={id:100,status:"Ok",nested:[{id:1,title:"Nested 1",price:100.11,foo:10},{id:2,title:"Nested 2",price:200.22,foo:100,bar:200,baz:300},{id:3,title:"Nested 3",price:0}],table:[{id:91,period:1,foo:19.01,bar:"A",start:1631e6,check:!1},{id:12,period:2,foo:18.02,bar:"H",start:1632e6,check:!0},{id:83,period:3,foo:17.03,bar:"C",start:1633e6,check:!1},{id:24,period:4,foo:16.04,bar:"F",start:1634e6,check:!0},{id:75,period:5,foo:15.05,bar:"E",start:1635e6,check:!1},{id:36,period:6,foo:14.06,bar:"D",start:1636e6,check:!1},{id:67,period:7,foo:13.07,bar:"G",start:1637e6,check:!1},{id:48,period:8,foo:12.08,bar:"B",start:1638e6,check:!1},{id:59,period:9,foo:11.09,bar:"I",start:1639e6,check:!1}]},I={state:{doc:E,docBackUp:JSON.parse(JSON.stringify(E)),controlEnabled:!0,showModal:!1,maxNestedID:void 0},getters:{getDocStatus:function(t){return{id:t.doc.id,status:t.doc.status}},getDocData:function(t){return function(e){return t.doc[e]}}},mutations:{toggleControl:function(t){t.controlEnabled=!t.controlEnabled},toggleModal:function(t){t.controlEnabled&&(t.showModal=!t.showModal)},setDocData:function(t,e){t.doc.nested[e.id][e.prop]=e.value,t.doc.nested[e.id][e.prop]=e.value},deleteDocData:function(t,e){t.doc.nested.splice(e,1)},addNewNested:function(t){t.maxNestedID||(t.maxNestedID=Math.max.apply(Math,x(t.doc.nested.map((function(t){return t.id}))).concat([0]))+1),t.doc.nested.push({id:t.maxNestedID,title:"Nested ".concat(t.maxNestedID),price:0}),t.maxNestedID++},checkBox:function(t,e){var n=t.doc.table.findIndex((function(t){return t.period===e}));t.doc.table[n].check=!t.doc.table[n].check},dataComparison:function(t){t.changes=void 0;var e=t.doc,n=t.docBackUp;t.changes={table:function(t,e){var n=[];t.sort((function(t,e){return t.period-e.period})),e.sort((function(t,e){return t.period-e.period}));for(var o=0;o<t.length;o++)t[o].check!==e[o].check&&n.push({id:t[o].id,check:t[o].check});return n}(e.table,n.table),nested:function(t,e){var n=x(t),o=x(e),r=[],i=[];o.forEach((function(t){var e=n.findIndex((function(e){return e.id===t.id}));if(-1!==e){for(var o in t)t[o]!==n[e][o]&&(r[t.id-1]||(r[t.id-1]={}),r[t.id-1][o]=n[e][o]);i.push(e)}else r[t.id-1]={id:t.id,deleted:!0}}));for(var a=0;a<n.length;a++){i.includes(a)||(r[n[a].id-1]=n[a])}return console.log(i),r}(e.nested,n.nested)},console.log(t),fetch("https://my-json-server.typicode.com/Metanoiataonta/Atlan-test/doc",{method:"POST",body:JSON.stringify(t.changes)}).then((function(e){return t.doc.status=e.status,t.controlEnabled=!t.controlEnabled,e.json()})).catch((function(){console.error("didnt"),t.controlEnabled=!t.controlEnabled})).then((function(t){return console.log(t)}))},deleteDocument:function(t){fetch("https://my-json-server.typicode.com/Metanoiataonta/Atlan-test/doc",{method:"DELETE"}).then((function(e){return t.doc.status=e.status,t.controlEnabled=!t.controlEnabled,e.json()})).then((function(t){return console.log(t)})).catch((function(){console.error("didnt"),t.controlEnabled=!t.controlEnabled}))}}};o.Z.use(r.ZP);var $=new r.ZP.Store({state:{},mutations:{},getters:{},modules:{doc:I}});o.Z.use(r.ZP),new o.Z({el:"#App",components:{"document-editor-cmp":C},data:function(){return{}},store:$,template:"<document-editor-cmp></document-editor-cmp>"}),window.addEventListener("message",(function(t){t.data&&"string"==typeof t.data&&t.data.match(/webpackHotUpdate/)&&(console.log("hot reload happened"),console.clear())}))}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=function(e,n,r,i){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],i=t[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,a=n[0],c=n[1],s=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(e&&e(n);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[a[l]]=0;return o.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.O(void 0,[403],(function(){return o(1202)}));var r=o.O(void 0,[403],(function(){return o(1454)}));r=o.O(r)}();
//# sourceMappingURL=main.0c67028d33ff9cb804f0.js.map