(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52f68d98"],{"49ba":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",staticStyle:{padding:"30px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.addList()}}},[t._v("新增")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{label:"序号",data:t.adList,border:""}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"序号"}}),a("el-table-column",{attrs:{label:"广告图片",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{width:"100px",height:"100px"}},[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.pic,alt:""}})])]}}])}),a("el-table-column",{attrs:{label:"时间",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("开始时间"+t._s(e.row.createTime))]),a("div",[t._v("结束时间"+t._s(e.row.modifyTime))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"广告名称",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"clickCount",label:"点击数",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"clickCount",label:"下单数",width:"120",align:"center"}}),a("el-table-column",{attrs:{label:"轮播位置",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0==e.row.type?"首页轮播":"其他")+" ")]}}])}),a("el-table-column",{attrs:{prop:"url",label:"链接位置",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"note",label:"备注",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"zip",label:"上下线状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0==e.row.status?"下线":"上线")+" ")]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.remove(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"广告详情",visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-card",[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",rules:t.rules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"广告名称",prop:"name"}},[a("el-input",{attrs:{size:"small"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{attrs:{size:"small"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort "}})],1),a("el-form-item",{attrs:{label:"链接"}},[a("el-input",{attrs:{size:"small"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url "}})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("开始时间")]),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime "}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{size:"small"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1),a("el-form-item",{attrs:{label:"产品数量"}},[a("el-input",{attrs:{size:"small"}})],1),a("el-form-item",{attrs:{label:"轮播位置"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type "}},[a("el-option",{attrs:{label:"首页轮播",value:1}}),a("el-option",{attrs:{label:"其他",value:0}})],1)],1),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("结束时间")]),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.endTime,callback:function(e){t.$set(t.form,"endTime",e)},expression:"form.endTime  "}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/lejuAdmin/material/uploadFileOssSave","show-file-list":!1,"on-success":t.handleAvatarSuccess,headers:t.headers}},[t.imageUrl?a("img",{staticClass:"avatar",staticStyle:{width:"200px",height:"200px"},attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addForm()}}},[t._v("确 定")])],1)],1)],1)},i=[],s=a("5530"),n=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("688c")),r=a("2f4d"),o={data:function(){return{imageUrl:"",rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}]},adList:[],loading:!1,dialogVisible:!1,form:{clickCount:"",startTime:"",endTime:"",id:"",modifyTime:"",name:"",note:"",orderCount:"",pic:"",productId:"",sort:"",status:"",type:"",url:""},num:!1}},computed:{headers:function(){var t=Object(r["b"])();return{token:t}}},created:function(){this.getList()},methods:{handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw),console.log(t),this.form.pic=t.data.material.ossUrl},handleClick:function(t){this.num=!1,this.dialogVisible=!this.dialogVisible,this.form=t},addForm:function(){var t=this;this.num?this.$refs.form.validate((function(e){if(!e)return!1;n["a"].addAds(Object(s["a"])({},t.form)).then((function(e){e.success&&t.$message.success("提交成功")})),t.form={},t.getList(),t.dialogVisible=!t.dialogVisible})):this.$refs.form.validate((function(e){if(!e)return!1;n["a"].updateAds(Object(s["a"])({},t.form)).then((function(e){e.message&&(t.$message.success("编辑成功"),t.getList())})),t.form={},t.dialogVisible=!t.dialogVisible}))},addList:function(){this.dialogVisible=!this.dialogVisible,this.num=!0},getList:function(){var t=this;this.loading=!0,n["a"].adsList().then((function(e){t.adList=e.data.items,t.loading=!1}))},remove:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n["a"].delAds(t).then((function(t){e.$message.success("删除成功"),e.getList()}))})).catch((function(){e.$message("取消删除")}))}}},c=o,d=(a("96f6"),a("2877")),u=Object(d["a"])(c,l,i,!1,null,null,null);e["default"]=u.exports},"688c":function(t,e,a){"use strict";a("99af");var l=a("9c66");function i(){return Object(l["a"])({url:"/lejuAdmin/advertise/adsList",method:"GET"})}function s(t){return Object(l["a"])({url:"/lejuAdmin/advertise/delAds/".concat(t),method:"DELETE"})}function n(t){return Object(l["a"])({url:"/lejuAdmin/advertise/addAds",method:"POST",data:t})}function r(t){return Object(l["a"])({url:" /lejuAdmin/advertise/updateAds",method:"POST",data:t})}function o(){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/findAllRecommends",method:"GET"})}function c(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/delRecommend/".concat(t),method:"DELETE"})}function d(t,e,a){return Object(l["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"POST",data:a})}function u(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/addRecommend",method:"POST",data:t})}e["a"]={adsList:i,delAds:s,findAllRecommends:o,delRecommend:c,productsByPage:d,addAds:n,updateAds:r,addRecommend:u}},"96f6":function(t,e,a){"use strict";a("a208")},"9c66":function(t,e,a){"use strict";a("d3b7");var l=a("bc3a"),i=a.n(l),s=a("5c96"),n=a("2f4d"),r=i.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});r.interceptors.request.use((function(t){var e=Object(n["b"])();return e&&(t.headers["token"]=Object(n["b"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),r.interceptors.response.use((function(t){var e=t.data;return e}),(function(t){return console.log("err"+t),Object(s["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=r},a208:function(t,e,a){}}]);