(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-591beca1"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"5f1a":function(t,e,a){"use strict";a("d435")},"841c":function(t,e,a){"use strict";var l=a("d784"),s=a("825a"),n=a("1d80"),o=a("129f"),r=a("14c3");l("search",1,(function(t,e,a){return[function(e){var a=n(this),l=void 0==e?void 0:e[t];return void 0!==l?l.call(e,a):new RegExp(e)[t](String(a))},function(t){var l=a(e,t,this);if(l.done)return l.value;var n=s(t),i=String(this),c=n.lastIndex;o(c,0)||(n.lastIndex=0);var u=r(n,i);return o(n.lastIndex,c)||(n.lastIndex=c),null===u?-1:u.index}]}))},"9c66":function(t,e,a){"use strict";a("d3b7");var l=a("bc3a"),s=a.n(l),n=a("5c96"),o=a("2f4d"),r=s.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});r.interceptors.request.use((function(t){var e=Object(o["b"])();return e&&(t.headers["token"]=Object(o["b"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),r.interceptors.response.use((function(t){var e=t.data;return e}),(function(t){return console.log("err"+t),Object(n["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=r},a760:function(t,e,a){"use strict";a("99af");var l=a("9c66");function s(t,e,a){return Object(l["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"POST",data:a})}function n(t){return Object(l["a"])({url:"/lejuAdmin/product/switchNewStatus",method:"POST",data:t})}function o(t){return Object(l["a"])({url:"/lejuAdmin/product/switchRecommandStatus\n    ",method:"POST",data:t})}function r(t){return Object(l["a"])({url:"/lejuAdmin/product/switchVerifyStatus\n    ",method:"POST",data:t})}function i(t){return Object(l["a"])({url:"/lejuAdmin/product/switchPublishStatus\n    ",method:"POST",data:t})}function c(t){return Object(l["a"])({url:"/lejuAdmin/product/del/".concat(t),method:"DELETE"})}function u(t){return Object(l["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(t),method:"GET"})}function d(t){return Object(l["a"])({url:"/lejuAdmin/product/updateProductAndSkus",method:"POST",data:t})}function p(t){return Object(l["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"POST",data:t})}function f(t){return Object(l["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"POST",data:t})}function h(t,e){return Object(l["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(t,"/").concat(e),method:"GET"})}function m(t){return Object(l["a"])({url:"/lejuAdmin/brand/delBrand/".concat(t),method:"DELETE"})}function b(t){return Object(l["a"])({url:"/lejuAdmin/brand/addBrand",method:"POST",data:t})}function v(t){return Object(l["a"])({url:"/lejuAdmin/brand/updateBrand",method:"POST",data:t})}function g(){return Object(l["a"])({url:"/lejuAdmin/category/getAllCategory",method:"GET"})}e["a"]={productsByPage:s,switchNewStatus:n,switchRecommandStatus:o,switchVerifyStatus:r,switchPublishStatus:i,del:c,dproductSkusDetailel:u,addProductAndSkus:f,updateProductAndSkus:d,findAllBrand:h,switchShowStatus:p,delBrand:m,addBrand:b,updateBrand:v,getAllCategory:g}},d435:function(t,e,a){},dfda:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-card",{staticClass:"box-card",attrs:{"body-style":"padding:0px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"商品介绍",name:"1"}},[a("div",[t._v("商品管理模块可以对客户端的商品进行增删改查等相关操作,来控制客户端商品的列表展示和商品详情")])])],1)],1),a("div",{staticClass:"main-c",staticStyle:{padding:"30px","background-color":"#f0f2f5"}},[a("el-card",{staticClass:"box-card",attrs:{"body-style":"padding:0px",shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-collapse",{model:{value:t.activeNamesInfo,callback:function(e){t.activeNamesInfo=e},expression:"activeNamesInfo"}},[a("el-collapse-item",{attrs:{title:"条件查询",name:"1"}},[a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.search}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"商品名称",size:"mini"}},[a("el-input",{attrs:{placeholder:"商品名称/模糊查询"},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"商品货号",size:"mini"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:t.search.id,callback:function(e){t.$set(t.search,"id",e)},expression:"search.id"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"品牌",size:"mini"}},[a("el-select",{attrs:{placeholder:"品牌"},model:{value:t.search.brandId,callback:function(e){t.$set(t.search,"brandId",e)},expression:"search.brandId  "}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"上架状态",size:"mini"}},[a("el-select",{attrs:{placeholder:"上架状态"},model:{value:t.search.publishStatus,callback:function(e){t.$set(t.search,"publishStatus",e)},expression:"search.publishStatus"}},[a("el-option",{attrs:{label:"未上架",value:"0"}}),a("el-option",{attrs:{label:"上架",value:"1"}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"审核状态",size:"mini"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.search.verifyStatus,callback:function(e){t.$set(t.search,"verifyStatus",e)},expression:"search.verifyStatus"}},[a("el-option",{attrs:{label:"未审核",value:"0"}}),a("el-option",{attrs:{label:"审核",value:"1"}})],1)],1)],1),a("el-col",{attrs:{span:18}},[a("el-form-item",{staticStyle:{"margin-left":"80%"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.Reset()}}},[t._v("重置")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.searchs()}}},[t._v("搜索")])],1)],1)],1)],1)],1)])],1)],1),a("div",{staticClass:"line"}),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.goAddGoods()}}},[t._v("新增")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.excel()}}},[t._v("导出商品列表excel文件")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableList,border:""}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"#",width:"40"}}),a("el-table-column",{attrs:{prop:"date",label:"商品图片",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[""==e.row.pic?a("div",{staticStyle:{width:"100px",height:"100px"}}):t._e(),a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.pic,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"name",label:"商品名称",width:"240",align:"center"}}),a("el-table-column",{attrs:{label:"商品价格",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("原价:"+t._s(e.row.originalPrice))]),a("div",[t._v("促销价格:"+t._s(e.row.price))])]}}])}),a("el-table-column",{attrs:{prop:"productCategoryName",label:"商品类别",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"标签",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-switch",{attrs:{"inactive-text":"最新","active-value":1,"inactive-value":0},on:{change:function(a){return t.newStatus(e.row)}},model:{value:e.row.newStatus,callback:function(a){t.$set(e.row,"newStatus",a)},expression:"scope.row.newStatus"}})],1),a("div",[a("el-switch",{attrs:{"inactive-text":"推荐","active-value":1,"inactive-value":0},on:{change:function(a){return t.recommendStatus(e.row)}},model:{value:e.row.recommendStatus,callback:function(a){t.$set(e.row,"recommendStatus",a)},expression:"scope.row.recommendStatus"}})],1)]}}])}),a("el-table-column",{attrs:{prop:"address",label:"标签2",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-switch",{attrs:{"inactive-text":"发布","active-value":1,"inactive-value":0},on:{change:function(a){return t.publishStatus(e.row)}},model:{value:e.row.publishStatus,callback:function(a){t.$set(e.row,"publishStatus",a)},expression:"scope.row.publishStatus"}})],1),a("div",[a("el-switch",{attrs:{"inactive-text":"审核","active-value":1,"inactive-value":0},on:{change:function(a){return t.verifyStatus(e.row)}},model:{value:e.row.verifyStatus,callback:function(a){t.$set(e.row,"verifyStatus",a)},expression:"scope.row.verifyStatus"}})],1)]}}])}),a("el-table-column",{attrs:{label:"sku",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.getSku(e.row.id)}}},[t._v("编辑sku")])],1)]}}])}),a("el-table-column",{attrs:{prop:"weight",label:"重量",width:"240",align:"center"}}),a("el-table-column",{attrs:{prop:"sort",label:"排序",width:"240",align:"center"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.edit(e.row.id)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.del(e.row)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.currentPage4,"page-sizes":[10,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1),a("sku",{ref:"getSku"})],1)],1)},s=[],n=(a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("841c"),a("ac1f"),a("a760")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"sku列表",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("新增")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.skuTable,border:""}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"#",width:"60",align:"center"}}),a("el-table-column",{attrs:{prop:"color",label:"颜色",width:"100"}}),a("el-table-column",{attrs:{prop:"size",label:"规格",width:"100"}}),a("el-table-column",{attrs:{label:"图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.pic,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"province",label:"库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"库存",size:"small"},model:{value:e.row.stock,callback:function(a){t.$set(e.row,"stock",a)},expression:"scope.row.stock"}})]}}])}),a("el-table-column",{attrs:{prop:"city",label:"预警库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"预警库存",size:"small"},model:{value:e.row.lowStock,callback:function(a){t.$set(e.row,"lowStock",a)},expression:"scope.row.lowStock"}})]}}])}),a("el-table-column",{attrs:{prop:"address",label:"锁定库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"锁定库存",size:"small"},model:{value:e.row.lockStock,callback:function(a){t.$set(e.row,"lockStock",a)},expression:"scope.row.lockStock"}})]}}])}),a("el-table-column",{attrs:{prop:"zip",label:"sku编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"自定义sku编码",size:"small"},model:{value:e.row.skuCode,callback:function(a){t.$set(e.row,"skuCode",a)},expression:"scope.row.skuCode"}})]}}])}),a("el-table-column",{attrs:{prop:"zip",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:e.row.price,callback:function(a){t.$set(e.row,"price",a)},expression:"scope.row.price"}})]}}])}),a("el-table-column",{attrs:{prop:"zip",label:"销量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:e.row.sale,callback:function(a){t.$set(e.row,"sale",a)},expression:"scope.row.sale"}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],i={data:function(){return{dialogVisible:!1,skuTable:[],spData:[]}},methods:{skuShow:function(t){this.dialogVisible=!0,console.log(t),this.skuTable=t;for(var e=0;e<=t.length-1;e++)console.log(JSON.parse(t[e].spData))}}},c=i,u=a("2877"),d=Object(u["a"])(c,o,r,!1,null,null,null),p=d.exports,f={data:function(){return{options:[{value:"1349640102272376833",label:"樱花哦"},{value:"1328964991345328130",label:"家乐名品(JLVP)"},{value:"1350061996314271745",label:"剑圣"},{value:"1364542551600779265",label:"TankMan"},{value:"1328990701308968962",label:"雷士照明"},{value:"1328988221644832769",label:"东易日盛"}],search:{},loading:!1,activeNames:["0"],activeNamesInfo:["0"],tableList:[],page:1,num:10,total:1,currentPage4:1}},components:{sku:p},methods:{excel:function(){var t=this;Promise.all([a.e("chunk-e2403282"),a.e("chunk-f2c374ea"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(e){var a=["商品名称","商品价格","商品类别","重量","排序"],l=["brandName","price","keywords","weight","sort"];console.log(t.tableList);var s=t.filterData(l);console.log(s),e.export_json_to_excel({header:a,data:s,filename:"excel-list",autoWidth:!0,bookType:"xlsx"})}))},filterData:function(t){var e=this.tableList.map((function(e){return t.map((function(t){return e[t]}))}));return e},getSku:function(t){var e=this;console.log(t),n["a"].dproductSkusDetailel(t).then((function(t){e.$refs.getSku.skuShow(t.data.skus)}))},goAddGoods:function(){this.$router.push({name:"addGoods",query:{id:1}})},searchs:function(){console.log(this.search),this.getGoodsList()},Reset:function(){this.search={},this.getGoodsList()},getGoodsList:function(){var t=this;this.loading=!0,n["a"].productsByPage(this.page,this.num,this.search).then((function(e){console.log(e),t.tableList=e.data.rows,t.loading=!1,t.total=e.data.total}))},handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.num=t,this.getGoodsList()},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.page=t,this.getGoodsList()},newStatus:function(t){var e=this,a=t.id,l=t.newStatus;console.log(t),n["a"].switchNewStatus({productId:a,status:l}).then((function(t){t.success?e.$message.success("修改状态成功"):e.$message.error("修改状态失败")}))},recommendStatus:function(t){var e=this,a=t.id,l=t.newStatus;console.log(t),n["a"].switchRecommandStatus({productId:a,status:l}).then((function(t){t.success?e.$message.success("修改状态成功"):e.$message.error("修改状态失败")}))},publishStatus:function(t){var e=this,a=t.id,l=t.newStatus;console.log(t),n["a"].switchPublishStatus({productId:a,status:l}).then((function(t){t.success?e.$message.success("修改状态成功"):e.$message.error("修改状态失败")}))},verifyStatus:function(t){var e=this,a=t.id,l=t.newStatus;console.log(t),n["a"].switchVerifyStatus({productId:a,status:l}).then((function(t){t.success?e.$message.success("修改状态成功"):e.$message.error("修改状态失败")}))},edit:function(t){this.$router.push({name:"editGoods",query:{id:t}})},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n["a"].del(t.id).then((function(t){e.$message.success("删除成功"),e.getGoodsList()}))})).catch((function(){e.$message.info("已取消删除")}))}},created:function(){this.getGoodsList()}},h=f,m=(a("5f1a"),Object(u["a"])(h,l,s,!1,null,null,null));e["default"]=m.exports}}]);