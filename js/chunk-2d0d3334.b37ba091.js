(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3334"],{"5c6f":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-autocomplete",{staticClass:"field--limited-width",attrs:{rules:e.rules,items:e.items,loading:e.loading,"item-text":e.field.list.text,"item-value":e.field.list.value,"search-input":e.search,label:e.field.text,disabled:e.field.disabled,"menu-props":"bottom","item-disabled":"itemDisabled","hide-details":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){return e.onChange()}},scopedSlots:e._u([e.listRefreshable?{key:"append-outer",fn:function(){return[i("v-icon",{attrs:{color:"blue"},on:{click:function(t){return e.refreshList(e.field.url)}}},[e._v("\n      refresh\n    ")])]},proxy:!0}:null],null,!0),model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})},l=[],n=i("2b0e"),a={name:"SelectField",props:{value:{},rules:{type:Array,default:()=>[]},field:{type:Object}},data:()=>({selection:void 0,items:[],search:"",oldSearch:"",loading:!1,searchActive:!0}),computed:{listRefreshable(){return!this.field.async&&void 0!==this.field.url}},methods:{onChange(){this.$emit("input",this.selection)},refreshList(e){let t;this.searchActive=!1,this.loading=!0;const i=void 0===this.field.required||this.field.required;n["a"].http.get(e).then(e=>{const s=e.body;if(t=s.map(e=>{const t=e;if("undefined"!==typeof this.field.list.activeColumn&&(t.itemDisabled=0===e[this.field.list.activeColumn]),"undefined"!==typeof this.field.list.complexName){const i=this.field.list.complexName.map(t=>{const i=t.split(".").reduce((e,t)=>e[t]||"",e);return i});t.complexName=i.join(", ")}return t}),i)this.items=t;else{const e={};e[this.field.list.value]="",e[this.field.list.text]="-",this.items=[e,...t]}this.loading=!1,this.searchActive=!0})}},mounted(){this.field.url?(this.items=[],this.field.async?this.loading=!1:this.refreshList(this.field.url)):this.items=this.field.list.data},watch:{value:{immediate:!0,handler(e){this.selection=e}},search:{handler(e){setTimeout(()=>{if(this.field.async&&this.searchActive&&this.search===e){const t=`${this.field.url}/phrase/${e}`;this.refreshList(t)}},500)}}}},d=a,c=i("2877"),r=i("6544"),o=i.n(r),h=i("c6a6"),u=i("132d"),f=Object(c["a"])(d,s,l,!1,null,null,null);t["default"]=f.exports;o()(f,{VAutocomplete:h["a"],VIcon:u["a"]})}}]);
//# sourceMappingURL=chunk-2d0d3334.b37ba091.js.map