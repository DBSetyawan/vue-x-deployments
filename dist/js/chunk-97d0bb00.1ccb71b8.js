(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97d0bb00"],{2492:function(e,t,s){"use strict";var i=s("2f62");t["a"]={props:["itemsViewConfig","tableFields","deleteMode","customButtons","itemElements","editButton","meta","primaryKey","activeColumnName","createMode","editMode","mainFilter","fieldFilters","exportButton","refreshButton","selectManyMode","updateManyMode","removeManyMode"],data(){return{selected:[]}},computed:{...Object(i["e"])("app",["page"]),...Object(i["e"])("crud",["prefix","path","currentItemIndex","currentItemId"]),...Object(i["c"])("crud",["itemsList"]),selectedIds(){return this.selected.map(e=>e.meta.id)},items(){return this.itemsList(this.tableFields,this.meta,this.primaryKey,this.customButtons,this.activeColumnName)},excelName(){return this.$t(`global.routes.${this.page}`)}},methods:{...Object(i["d"])("crud",["showItemDetailsDialog","setCurrentItem","resetItems","resetItem","editItemDialog","createItemDialog","multipleEditDialog","setItemElementsInfo","editItemElementsDialog","setSelectedIds"]),...Object(i["b"])("crud",["getItem","updateItem","storeItem","deleteItem","getItemElements","mulitipleItemsUpdate","mulitipleItemsDelete","getItemDetails","runItemsViewRefreshing"]),...Object(i["b"])(["openAlertBox"]),refreshItemsView(){this.runItemsViewRefreshing()},edit(e){this.beforeGetItem(e),this.getItem([e]).then(()=>{this.editItemDialog(e)})},create(){this.resetItem(),this.createItemDialog()},suspend(e){const t={};t[this.activeColumnName]=0,this.updateItem([e,t,this.$t("global.alerts.suspended"),this.$t("global.alerts.suspendError")])},restore(e){const t={};t[this.activeColumnName]=1,this.updateItem([e,t,this.$t("global.alerts.restored"),this.$t("global.alerts.restoreError")])},destroy(e){confirm(this.$t("global.alerts.confirm"))&&this.deleteItem([e,this.$t("global.alerts.deleted"),this.$t("global.alerts.deleteError")])},checkSelected(){return 0===this.selected.length?(this.openAlertBox(["alertError",this.$t("global.datatable.noItemsSelected")]),!1):!!confirm(this.$t("global.datatable.confirm"))},editSelected(){if(0===this.selected.length)return this.openAlertBox(["alertError",this.$t("global.datatable.noItemsSelected")]),!1;this.setSelectedIds(this.selected),this.resetItem(),this.multipleEditDialog()},suspendSelected(){this.checkSelected()&&this.mulitipleItemsUpdate([{ids:this.selectedIds,request:{active:0}},this.$t("global.alerts.suspended"),this.$t("global.alerts.suspendError")])},restoreSelected(){this.checkSelected()&&this.mulitipleItemsUpdate([{ids:this.selectedIds,request:{active:1}},this.$t("global.alerts.restored"),this.$t("global.alerts.restoreError")])},destroySelected(){this.checkSelected()&&this.mulitipleItemsDelete([{ids:this.selectedIds},this.$t("global.alerts.deleted"),this.$t("global.alerts.deleteError")])},custom(e,t){const s=this.getItemIndex(t.meta.id);this.$parent.custom(e,t,s)},editItemElements(e,t){const s=this.itemElements[e];this.setItemElementsInfo([t,s]),this.getItemElements()}}}},ae88:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{attrs:{flat:""}},[s("controls",{attrs:{"create-mode":e.createMode,"edit-mode":e.editMode,"delete-mode":e.deleteMode,"select-many-mode":e.selectManyMode,"update-many-mode":e.updateManyMode,"remove-many-mode":e.removeManyMode,"main-filter":e.mainFilter,"field-filters":e.fieldFilters,"refresh-button":e.refreshButton,"export-button":e.exportButton,"excel-loading":e.excelLoading,initialSearch:e.search,initialSelectedStatuses:e.selectedStatuses,initialColumnFilters:e.columnFilters},on:{create:e.create,editSelected:e.editSelected,suspendSelected:e.suspendSelected,restoreSelected:e.restoreSelected,destroySelected:e.destroySelected,refreshItemsView:e.refreshItemsView,updateColumnFilterMode:e.updateColumnFilterMode,updateColumnFilterValue:e.updateColumnFilterValue,updateSearch:e.updateSearch,updateSelectedStatuses:e.updateSelectedStatuses,clearFilters:e.clearFilters,exportToExcel:e.exportToExcel}}),s("v-data-table",{attrs:{"show-select":e.selectManyMode,options:e.pagination,headers:e.headers,items:e.filteredItems,"item-key":"meta.id","no-results-text":e.$t("global.datatable.noMatchingResults"),"no-data-text":e.$t("global.datatable.noDataAvailable"),"footer-props":e.footerProps,"items-per-page":20,loading:e.loading,light:"","multi-sort":"",dense:""},on:{"update:options":function(t){e.pagination=t}},scopedSlots:e._u([e._l(e.headers,(function(t,i){return{key:"item."+t.value,fn:function(l){var a=l.item;return[s("span",{key:i},["actions"===t.value?s("list-item-actions",{attrs:{item:a,"edit-button":e.editButton,"custom-buttons":e.customButtons,"delete-mode":e.deleteMode,"item-elements":e.itemElements,"edit-mode":e.editMode,"select-many-mode":e.selectManyMode},on:{edit:e.edit,custom:e.custom,suspend:e.suspend,restore:e.restore,destroy:e.destroy,editItemElements:e.editItemElements,doubleClick:e.resolveRowDoubleClick}}):s("span",[e._t("field:"+t.value,[s("list-item-field",{attrs:{value:a[t.value],"text-mode":e.textMode(a,t.value)}})],{value:a[t.value],item:a})],2)],1)]}}})),{key:"footer.page-text",fn:function(t){var i=t.pageStart,l=t.pageStop,a=t.itemsLength;return[s("table-footer",{attrs:{pagination:e.pagination,"page-start":i,"page-stop":l,"items-length":a},on:{setPage:e.setPage}})]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},l=[],a=s("2f62"),o=s("2492"),r=s("4cfd"),d=s("8cd2"),n=s("e19b"),m=s("f1ad"),c=s("5a8b"),u=s("4c4d"),h={name:"CrudTableClientMode",mixins:[o["a"],r["a"],d["a"],n["a"],m["a"],c["a"]],components:{Controls:u["a"]},data(){return{}},computed:{...Object(a["e"])("crud",["loading","detailsDialog","isItemsViewRefreshed"]),totalItems(){return this.filteredItems.length}},methods:{...Object(a["b"])("crud",["getItems"]),moveDetailsItem(e,t){this.pagination.page=e;const s=(e-1)*this.pagination.itemsPerPage+t,i=this.filteredItems[s].meta.id;this.setCurrentItem({id:i,index:t}),this.getItemDetails([i]).then(e=>{this.showItemDetailsDialog()})}},created(){this.resetItems(),this.getItems()},watch:{detailsDialog(e){e||this.getItems()},isItemsViewRefreshed(e){e&&this.getItems()}}},p=h,I=s("2877"),g=s("6544"),b=s.n(g),f=s("b0af"),v=s("8fea"),S=Object(I["a"])(p,i,l,!1,null,null,null);t["default"]=S.exports;b()(S,{VCard:f["a"],VDataTable:v["a"]})},e19b:function(e,t,s){"use strict";var i=s("2f62");t["a"]={computed:{...Object(i["e"])("crud",["nextItem","moveItemRun","moveItemDirection"])},methods:{...Object(i["d"])("crud",["setCurrentItem","moveItem"]),beforeGetItem(e){const t=this.getItemIndex(e);this.setCurrentItem({id:e,index:t})},resolveRowDoubleClick(e,t){if(this.editMode){let s=!1;for(const e of this.customButtons)if("goToItem"===e.name){s=!0;break}s?this.custom("goToItem",e,t):this.edit(e.meta.id,t)}}},watch:{moveItemRun(e){if(e){const{moveItemDirection:e}=this;let t=this.currentItemIndex,{page:s}=this.pagination;const{itemsPerPage:i}=this.pagination,{totalItems:l}=this;let a=!0;"previous"===e?t>0?t-=1:s>1?(s-=1,t=i-1):a=!1:"next"===e&&(t<i-1&&(s-1)*i+t+1<l?t+=1:s<Math.ceil(l/i)?(s+=1,t=0):a=!1),a&&this.moveDetailsItem(s,t),this.moveItem(["",!1])}}}}}}]);
//# sourceMappingURL=chunk-97d0bb00.1ccb71b8.js.map