(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24ba76b4"],{"0806":function(e,A,t){"use strict";t("2d5b")},"1b62":function(e,A,t){"use strict";var r=t("2f4d");A["a"]={data:function(){return{token:"",rules:{name:[{required:!0,message:"请输入物流单号",trigger:"blur"}],region:[{required:!0,message:"请选择物流公司",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},logistics:[{name:"顺丰"},{name:"圆通"},{name:"韵达"},{name:"中通"},{name:"京东"},{name:"邮政"},{name:"申通"},{name:"德邦"}],loading:!1,page:1,num:10,header:"",total:1,currentPage:1,action:"/lejuAdmin/material/uploadFileOssSave",status:[{name:"待付款",id:0},{name:"代发货",id:1},{name:"已发货",id:2},{name:"已完成",id:3},{name:"已关闭",id:4},{name:"无效订单",id:5}],payType:[{name:"未支付",id:0},{name:"支付宝",id:1},{name:"微信",id:2}],orderType:[{name:"正常订单",id:0},{name:"秒杀订单",id:1}]}},created:function(){},computed:{headers:function(){var e=Object(r["b"])();return this.header=e,{token:e}}},methods:{}}},"1c84":function(e,A,t){"use strict";t.r(A);var r=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",{staticStyle:{padding:"30px","background-color":"#f0f2f5"}},[t("el-card",{staticClass:"box-card",attrs:{shadow:"nerve"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("条件查询")])]),t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"small"}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"订单编号"}},[t("el-input",{model:{value:e.form.orderSn,callback:function(A){e.$set(e.form,"orderSn",A)},expression:"form.orderSn"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"订单类型",size:"small"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.orderType,callback:function(A){e.$set(e.form,"orderType",A)},expression:"form.orderType "}},e._l(e.orderType,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"支付方式",size:"small"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.payType,callback:function(A){e.$set(e.form,"payType",A)},expression:"form.payType"}},e._l(e.payType,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"订单状态",size:"small"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(A){e.$set(e.form,"status",A)},expression:"form.status "}},e._l(e.status,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),t("el-col",{attrs:{span:10,push:18}},[t("el-form-item",{staticStyle:{"margin-top":"30px"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(A){return e.search(0)}}},[e._v("搜索")]),t("el-button",{on:{click:function(A){return e.search(1)}}},[e._v("重置")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.orderList,border:""}},[t("el-table-column",{attrs:{fixed:"",label:"#",type:"index",width:"50",align:"center"}}),t("el-table-column",{attrs:{prop:"orderSn",label:"订单编号",width:"240",align:"center"}}),t("el-table-column",{attrs:{prop:"payType",label:"支付方式",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(A){return[t("div",{directives:[{name:"show",rawName:"v-show",value:0==A.row.payType,expression:"scope.row.payType==0"}],staticStyle:{"border-radius":"5px",margin:"0 auto","font-size":"12px","background-color":"#909399","border-color":"#909399",color:"#fff",width:"60px","line-height":"30px","text-alert":"center"}},[e._v(" 未支付")]),t("div",{directives:[{name:"show",rawName:"v-show",value:1==A.row.payType,expression:"scope.row.payType==1"}],staticStyle:{margin:"0 auto",width:"50px",height:"40px"}},[t("img",{staticStyle:{width:"50px",height:"40px"},attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd-image.i4.cn%2Fimage%2Ficon%2F2020%2F03%2F26%2F14%2F333206289%2Fz1585204561832_963622.jpg&refer=http%3A%2F%2Fd-image.i4.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618128460&t=251c88f267fae8671a6ee239c17aa6ee",alt:""}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:2==A.row.payType,expression:"scope.row.payType==2"}],staticStyle:{margin:"0 auto",width:"50px",height:"40px"}},[t("img",{staticStyle:{width:"50px",height:"40px"},attrs:{src:"data:image/jpeg;base64,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",alt:""}})])]}}])}),t("el-table-column",{attrs:{label:"订单状态",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(A){return[t("div",{staticClass:"t",class:0==A.row.status?"t0":1==A.row.status?"t1":2==A.row.status?"t2":3==A.row.status?"t3":4==A.row.status?"t4":"t5"},[e._v(" "+e._s(0==A.row.status?"待付款":1==A.row.status?"代发货":2==A.row.status?"已发货":3==A.row.status?"已完成":4==A.row.status?"已关闭":"无效订单")+" ")])]}}])}),t("el-table-column",{attrs:{prop:"createTime",label:"添加时间",width:"240",align:"center"}}),t("el-table-column",{attrs:{prop:"memberUsername",label:"用户账号",width:"200",align:"center"}}),t("el-table-column",{attrs:{label:"订单类型",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(A){return[t("div",{staticClass:"c",class:null==A.row.orderType?"a":"b"},[e._v(e._s(0==A.row.orderType?"正常订单":"秒杀订单"))])]}}])}),t("el-table-column",{attrs:{prop:"zip",label:"备注",width:"200",align:"center"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(A){return[t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.orderInfo(A.row)}}},[e._v("查看订单")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[10,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("div",{staticStyle:{height:"30px",width:"10px"}})],1)},a=[],n=t("1b62"),o=t("3a10"),i={mixins:[n["a"]],data:function(){return{form:{},orderList:[],currentPage4:1}},methods:{getOrderTable:function(){var e=this;this.loading=!0,o["a"].findOrdersByPage(this.page,this.num,this.form).then((function(A){e.orderList=A.data.rows,e.total=A.data.total,e.loading=!1}))},search:function(e){0==e||(this.form={},console.log("重置")),this.getOrderTable()},orderInfo:function(e){this.$router.push({name:"orderInfo",query:{id:e.id}}),console.log(e)},handleSizeChange:function(e){this.num=e,this.getOrderTable()},handleCurrentChange:function(e){this.page=e,this.getOrderTable()}},created:function(){this.getOrderTable()}},s=i,l=(t("0806"),t("2877")),c=Object(l["a"])(s,r,a,!1,null,null,null);A["default"]=c.exports},"2d5b":function(e,A,t){},"3a10":function(e,A,t){"use strict";t("99af");var r=t("9c66");function a(e,A,t){return Object(r["a"])({url:"/lejuAdmin/order/findOrdersByPage/".concat(e,"/").concat(A),method:"POST",data:t})}function n(e){return Object(r["a"])({url:"/lejuAdmin/order/orderDetail/".concat(e),method:"GET"})}function o(e){return Object(r["a"])({url:"/lejuAdmin/order/sendDone",method:"POST",data:e})}function i(e){return Object(r["a"])({url:"/lejuAdmin/order/finishOrder/".concat(e),method:"POST"})}function s(e){return Object(r["a"])({url:"/lejuAdmin/order/receiveProductsForce/".concat(e),method:"POST"})}function l(e,A,t){return Object(r["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(e,"/").concat(A),method:"POST",data:t})}function c(e){return Object(r["a"])({url:"/lejuAdmin/orderReturn/".concat(e),method:"GET"})}function u(e,A){return Object(r["a"])({url:"/lejuAdmin/orderReturn/receiveProduct/".concat(e),method:"POST",data:A})}function d(e,A){return Object(r["a"])({url:"/lejuAdmin/orderReturn/agreeApply/".concat(e),method:"POST",data:A})}function M(e,A){return Object(r["a"])({url:"/lejuAdmin/orderReturn/rejectApply/".concat(e),method:"POST",data:A})}function D(){return Object(r["a"])({url:"/lejuAdmin/companyAddress/addressList",method:"GET"})}function m(e){return Object(r["a"])({url:"/lejuAdmin/companyAddress/setReceiveOne",method:"POST",data:e})}function p(e){return Object(r["a"])({url:"/lejuAdmin/companyAddress/setSendOne",method:"POST",data:e})}function g(e){return Object(r["a"])({url:"/lejuAdmin/companyAddress/".concat(e),method:"DELETE"})}function h(e){return Object(r["a"])({url:"/lejuAdmin/companyAddress/save",method:"POST",data:e})}function f(e){return Object(r["a"])({url:"/lejuAdmin/companyAddress/update",method:"POST",data:e})}A["a"]={findOrdersByPage:a,orderDetail:n,sendDone:o,finishOrder:i,receiveProductsForce:s,findReturnApply:l,orderReturn:c,receiveProduct:u,agreeApply:d,rejectApply:M,addressList:D,setReceiveOne:m,setSendOne:p,companyAddress:g,save:h,update:f}},"9c66":function(e,A,t){"use strict";t("d3b7");var r=t("bc3a"),a=t.n(r),n=t("5c96"),o=t("2f4d"),i=a.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});i.interceptors.request.use((function(e){var A=Object(o["b"])();return A&&(e.headers["token"]=Object(o["b"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),i.interceptors.response.use((function(e){var A=e.data;return A}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),A["a"]=i}}]);