(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27749a0c"],{"0593":function(e,t,r){"use strict";r("ea9a")},"22a2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"30px","background-color":"#f0f2f5"}},[r("el-card",{attrs:{shadow:"nerve"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("div",{staticStyle:{display:"flex"}},[r("h4",[e._v("订单信息:")]),r("div",{staticClass:"t",class:0==e.form.status?"t0":1==e.form.status?"t1":2==e.form.status?"t2":"t3"},[e._v(" "+e._s(0==e.form.status?"待处理":1==e.form.status?"退货中":2==e.form.status?"已完成":"已拒绝")+" ")])])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"top"},[e._v("订单："+e._s(e.form.orderSn))])]),r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.goOrderInfo(e.id)}}},[e._v("查看订单")])],1),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"top"},[e._v("退单人姓名："+e._s(e.form.returnName))])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"top"},[e._v("退单理由："+e._s(e.form.reason))])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"top"},[e._v("退单描述："+e._s(e.form.description))])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"top"},[e._v("退单时间："+e._s(e.form.createTime))])]),r("el-col",{attrs:{span:24}},[r("div",[e._v("退单图片：")]),r("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.proofPics,alt:""}})])],1),r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:24}},[r("h4",[e._v("退货商品")])]),r("el-table",{attrs:{data:e.arr,border:""}},[r("el-table-column",{attrs:{prop:"date",label:"商品图片",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.row.productPic,fit:"fill",lazy:!0}})]}}])}),r("el-table-column",{attrs:{prop:"productBrand",width:"140",label:"商品描述",align:"center"}}),r("el-table-column",{attrs:{prop:"productPrice",label:"商品价格",align:"center"}}),r("el-table-column",{attrs:{label:"商品属性",align:"center"}},[e._l(e.attribute,(function(t,a){return r("div",{key:a},[e._v(" "+e._s(t.key)+":"+e._s(t.value)+" ")])}))],2),r("el-table-column",{attrs:{prop:"productCount",label:"商品数量",align:"center"}}),r("el-table-column",{attrs:{prop:"returnAmount",label:"总价格",width:"80",align:"center"}})],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:24}},[r("h4",[e._v("用户信息：")])]),r("el-col",{attrs:{span:12}},[r("span",[e._v("联系人：")]),r("span",[e._v(e._s(e.form.returnName))])]),r("el-col",{attrs:{span:12}},[r("span",[e._v("联系电话：")]),r("span",[e._v(e._s(e.form.returnPhone))])])],1),r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:24}},[r("h4",[e._v("费用信息：")])]),r("el-col",{attrs:{span:12}},[r("span",[e._v("退单金额：")]),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.form.returnAmount))])]),r("el-col",{attrs:{span:12}},[r("span",[e._v("运费金额：")]),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.form.returnAmount))])])],1),e.status>=2?r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:24}},[r("h4",[e._v("处理结果：")])]),r("el-col",{attrs:{span:8}},[r("span",[e._v("处理人：")]),r("span",[e._v(e._s(e.form.handleMan))])]),r("el-col",{attrs:{span:8}},[r("span",[e._v("处理备注：")]),r("span",[e._v(e._s(e.form.handleNote))])]),r("el-col",{attrs:{span:8}},[r("span",[e._v("处理时间：")]),r("span",[e._v(e._s(e.form.handleTime))])])],1):e._e(),2==e.status?r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:24}},[r("h4",[e._v("收货信息：")])]),r("el-col",{attrs:{span:8}},[r("span",[e._v("退单收货人：")]),r("span",[e._v(e._s(e.form.receiveMan))])]),r("el-col",{attrs:{span:8}},[r("span",[e._v("退单收货备注：")]),r("span",[e._v(e._s(e.form.receiveNote))])]),r("el-col",{attrs:{span:8}},[r("span",[e._v("退单收货时间：")]),r("span",[e._v(e._s(e.form.receiveTime))])])],1):e._e(),1==e.status?r("el-form",{ref:"form",attrs:{size:"small",model:e.forms,"label-width":"80px"}},[r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"收货人"}},[r("el-input",{model:{value:e.forms.receiveMan,callback:function(t){e.$set(e.forms,"receiveMan",t)},expression:"forms.receiveMan"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"收货备注"}},[r("el-input",{model:{value:e.forms.receiveNote,callback:function(t){e.$set(e.forms,"receiveNote",t)},expression:"forms.receiveNote"}})],1)],1),r("div",{staticStyle:{margin:"0 auto"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.ok()}}},[e._v("确定收货")])],1)],1)],1):e._e(),0==e.status?r("el-form",{ref:"form",attrs:{size:"small",model:e.forms,"label-width":"80px"}},[r("el-row",{attrs:{gutter:20}},[r("el-divider"),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"退款金额"}},[r("el-input",{model:{value:e.forms.returnAmount,callback:function(t){e.$set(e.forms,"returnAmount",t)},expression:"forms.returnAmount"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"处理人"}},[r("el-input",{model:{value:e.forms.handleMan,callback:function(t){e.$set(e.forms,"handleMan",t)},expression:"forms.handleMan"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"拒绝理由"}},[r("el-input",{model:{value:e.forms.handleNote,callback:function(t){e.$set(e.forms,"handleNote",t)},expression:"forms.handleNote"}})],1)],1),r("div",{staticStyle:{margin:"0 auto"}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.agreeOrRefuse(1)}}},[e._v("同意退货")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.agreeOrRefuse(2)}}},[e._v("拒绝退货")])],1)],1)],1):e._e()],1)],1)},s=[],n=r("5530"),o=r("3a10"),l={data:function(){return{id:"",arr:[],form:{},forms:{},attribute:[],status:""}},created:function(){this.getInfo()},methods:{ok:function(){var e=this;this.forms.id=this.id,o["a"].receiveProduct(this.id,Object(n["a"])({},this.forms)).then((function(t){console.log(t),e.getInfo()}))},agreeOrRefuse:function(e){var t=this;this.forms.id=this.id,1==e?o["a"].agreeApply(this.id,Object(n["a"])({},this.forms)).then((function(e){console.log(e),e.success?(t.$message.success("同意退货"),t.getInfo()):t.$message.success("失败")})):o["a"].rejectApply(this.id,Object(n["a"])({},this.forms)).then((function(e){console.log(e),e.success?(t.$message.success("同意退货"),t.getInfo()):t.$message.success("失败")}))},goOrderInfo:function(e){this.$router.push({name:"orderInfo",query:{id:this.form.orderId}})},getInfo:function(){var e=this;this.id=this.$route.query.id,o["a"].orderReturn(this.id).then((function(t){console.log(t),e.form=t.data.orderReturnApply,e.arr=[t.data.orderReturnApply],e.attribute=JSON.parse(t.data.orderReturnApply.productAttr),e.status=t.data.orderReturnApply.status}))}},beforeCreate:function(){}},c=l,i=(r("0593"),r("2877")),u=Object(i["a"])(c,a,s,!1,null,null,null);t["default"]=u.exports},"3a10":function(e,t,r){"use strict";r("99af");var a=r("9c66");function s(e,t,r){return Object(a["a"])({url:"/lejuAdmin/order/findOrdersByPage/".concat(e,"/").concat(t),method:"POST",data:r})}function n(e){return Object(a["a"])({url:"/lejuAdmin/order/orderDetail/".concat(e),method:"GET"})}function o(e){return Object(a["a"])({url:"/lejuAdmin/order/sendDone",method:"POST",data:e})}function l(e){return Object(a["a"])({url:"/lejuAdmin/order/finishOrder/".concat(e),method:"POST"})}function c(e){return Object(a["a"])({url:"/lejuAdmin/order/receiveProductsForce/".concat(e),method:"POST"})}function i(e,t,r){return Object(a["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(e,"/").concat(t),method:"POST",data:r})}function u(e){return Object(a["a"])({url:"/lejuAdmin/orderReturn/".concat(e),method:"GET"})}function d(e,t){return Object(a["a"])({url:"/lejuAdmin/orderReturn/receiveProduct/".concat(e),method:"POST",data:t})}function m(e,t){return Object(a["a"])({url:"/lejuAdmin/orderReturn/agreeApply/".concat(e),method:"POST",data:t})}function p(e,t){return Object(a["a"])({url:"/lejuAdmin/orderReturn/rejectApply/".concat(e),method:"POST",data:t})}function f(){return Object(a["a"])({url:"/lejuAdmin/companyAddress/addressList",method:"GET"})}function v(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/setReceiveOne",method:"POST",data:e})}function h(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/setSendOne",method:"POST",data:e})}function b(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/".concat(e),method:"DELETE"})}function _(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/save",method:"POST",data:e})}function g(e){return Object(a["a"])({url:"/lejuAdmin/companyAddress/update",method:"POST",data:e})}t["a"]={findOrdersByPage:s,orderDetail:n,sendDone:o,finishOrder:l,receiveProductsForce:c,findReturnApply:i,orderReturn:u,receiveProduct:d,agreeApply:m,rejectApply:p,addressList:f,setReceiveOne:v,setSendOne:h,companyAddress:b,save:_,update:g}},"9c66":function(e,t,r){"use strict";r("d3b7");var a=r("bc3a"),s=r.n(a),n=r("5c96"),o=r("2f4d"),l=s.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});l.interceptors.request.use((function(e){var t=Object(o["b"])();return t&&(e.headers["token"]=Object(o["b"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=l},ea9a:function(e,t,r){}}]);