(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f13916"],{"03ed":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{width:"500px",height:"100px",margin:"0 auto","margin-top":"30px"}},[a("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"步骤 1"}}),a("el-step",{attrs:{title:"步骤 2"}}),a("el-step",{attrs:{title:"步骤 3"}})],1)],1),1==t.active?a("div",{staticClass:"step1 step"},[a("el-form",{staticClass:"demo-form-inline",attrs:{model:t.form,"label-position":"right","label-width":"100px"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("基本信息")])]),a("el-row",{staticClass:"pdi",attrs:{gutter:50}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{model:{value:t.form.product.name,callback:function(e){t.$set(t.form.product,"name",e)},expression:"form.product.name"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品编码"}},[a("el-input",{model:{value:t.form.product.productSn,callback:function(e){t.$set(t.form.product,"productSn",e)},expression:"form.product.productSn"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品分类"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.product.productCategoryName,callback:function(e){t.$set(t.form.product,"productCategoryName",e)},expression:"form.product.productCategoryName"}},[a("el-option",{attrs:{label:"创意",value:"shanghai"}}),a("el-option",{attrs:{label:"风格",value:"beijing"}}),a("el-option",{attrs:{label:"饰品",value:"beijing"}}),a("el-option",{attrs:{label:"灯具",value:"beijing"}})],1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品品牌"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.product.brandName,callback:function(e){t.$set(t.form.product,"brandName",e)},expression:"form.product.brandName"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"商品描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.product.description,callback:function(e){t.$set(t.form.product,"description",e)},expression:"form.product.description"}})],1)],1)],1),a("div",{staticClass:"clearfix"},[a("span",{on:{click:function(e){return t.ceshi()}}},[t._v("商品属性")])]),a("el-row",{staticClass:"pdi",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品原价"}},[a("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:t.form.product.price,callback:function(e){t.$set(t.form.product,"price",e)},expression:"form.product.price"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"促销类型 ",disabled:!0},model:{value:t.form.product.promotionType,callback:function(e){t.$set(t.form.product,"promotionType",e)},expression:"form.product.promotionType "}},[a("el-option",{attrs:{label:"区域一",value:"0"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"活动价格"}},[a("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:t.form.product.promotionPrice,callback:function(e){t.$set(t.form.product,"promotionPrice",e)},expression:"form.product.promotionPrice "}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"重量(kg)"}},[a("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:t.form.product.weight,callback:function(e){t.$set(t.form.product,"weight",e)},expression:"form.product.weight"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"审核状态"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.product.verifyStatus,callback:function(e){t.$set(t.form.product,"verifyStatus",e)},expression:"form.product.verifyStatus"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否上架"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.product.publishStatus,callback:function(e){t.$set(t.form.product,"publishStatus",e)},expression:"form.product.publishStatus"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"缩略图"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.headers,action:"/lejuAdmin/material/uploadFileOssSave","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.imageUrl?a("img",{staticClass:"avatar",staticStyle:{width:"200px",height:"200px"},attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus el-icon-pluss avatar-uploader-icon"})])],1)],1)],1),a("div",{staticClass:"clearfix"},[a("span",[t._v("商品属性")])]),a("el-row",{staticClass:"pdi",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"推荐状态"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.product.recommendStatus,callback:function(e){t.$set(t.form.product,"recommendStatus",e)},expression:"form.product.recommendStatus "}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"新品状态"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.product.newStatus,callback:function(e){t.$set(t.form.product,"newStatus",e)},expression:"form.product.newStatus "}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"预告状态"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.product.previewStatus,callback:function(e){t.$set(t.form.product,"previewStatus",e)},expression:"form.product.previewStatus "}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"搜索关键词："}},[a("el-input",{model:{value:t.form.product.keywords,callback:function(e){t.$set(t.form.product,"keywords",e)},expression:"form.product.keywords"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"库存预警"}},[a("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:t.form.product.lowStock,callback:function(e){t.$set(t.form.product,"lowStock",e)},expression:"form.product.lowStock"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品排序"}},[a("el-input-number",{attrs:{step:1,"step-strictly":"",size:"large"},model:{value:t.form.product.sort,callback:function(e){t.$set(t.form.product,"sort",e)},expression:"form.product.sort"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"产品服务"}},[a("el-checkbox-group",{on:{change:function(e){return t.byValue()}},model:{value:t.Checkbox,callback:function(e){t.Checkbox=e},expression:"Checkbox "}},[a("el-checkbox",{attrs:{label:"1",name:"type"}},[t._v("无忧退换")]),a("el-checkbox",{attrs:{label:"2",name:"type"}},[t._v("急速退款")]),a("el-checkbox",{attrs:{label:"3",name:"type"}},[t._v("免费包邮")])],1)],1)],1)],1)],1)],1)],1):t._e(),2==t.active?a("div",{staticClass:"step2 step"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("商品sku信息")]),a("el-form",{staticStyle:{"margin-top":"50px",padding:"20px"},attrs:{"label-width":"80px",model:t.form}},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{model:{value:t.form.product.detailTitle,callback:function(e){t.$set(t.form.product,"detailTitle",e)},expression:"form.product.detailTitle"}})],1)],1),a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"副标题"}},[a("el-input",{model:{value:t.form.product.detailTitle,callback:function(e){t.$set(t.form.product,"detailTitle",e)},expression:"form.product.detailTitle"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"活动形式"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/lejuAdmin/material/uploadFileOssSave","show-file-list":!1,headers:t.headers,"on-success":t.handleSku}},[t.imageUrl?a("img",{staticClass:"avatar",staticStyle:{width:"200px",height:"200px"},attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon el-icon-pluss"})])],1)],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.colorArr[0],expression:"colorArr[0]"}],attrs:{label:"颜色："}},t._l(t.colorArr,(function(e){return a("el-col",{key:e,attrs:{span:2}},[t._v(" "+t._s(e)+" ")])})),1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.sizeArr[0],expression:"sizeArr[0]"}],attrs:{label:"规格："}},t._l(t.sizeArr,(function(e){return a("el-col",{key:e,attrs:{span:2}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"sku设置"}},[a("el-select",{attrs:{placeholder:"产品颜色"},on:{input:function(e){return t.pushColor()}},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},[a("el-option",{attrs:{label:"珍珠白",value:"珍珠白"}}),a("el-option",{attrs:{label:"火焰红",value:"火焰红"}}),a("el-option",{attrs:{label:"玫瑰金",value:"玫瑰金"}}),a("el-option",{attrs:{label:"土豪金",value:"土豪金"}}),a("el-option",{attrs:{label:"原谅绿",value:"原谅绿"}})],1)],1)],1),a("el-col",{attrs:{span:8,pull:2}},[a("el-form-item",[a("el-select",{attrs:{placeholder:"产品规格"},on:{input:function(e){return t.pushSize()}},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[a("el-option",{attrs:{label:"64g",value:"64g"}}),a("el-option",{attrs:{label:"128g",value:"128g"}}),a("el-option",{attrs:{label:"256g",value:"256g"}}),a("el-option",{attrs:{label:"512g",value:"512g"}}),a("el-option",{attrs:{label:"1t",value:"1t"}})],1)],1)],1),a("el-col",{attrs:{span:6,pull:2}},[a("el-button",{on:{click:t.createSku}},[t._v("生成sku列表")]),a("el-button",{on:{click:t.aa}},[t._v("新增sku")])],1),a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.form.pmsSkuStockList,border:""}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"#",width:"60",align:"center"}}),a("el-table-column",{attrs:{label:"图片",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/lejuAdmin/material/uploadFileOssSave",headers:t.headers,"show-file-list":!1,"on-success":t.handleSku}},[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.pic,alt:""}})])]}}],null,!1,581231791)}),a("el-table-column",{attrs:{prop:"size",label:"规格",width:"100"}}),a("el-table-column",{attrs:{prop:"color",label:"颜色",width:"100"}}),a("el-table-column",{attrs:{prop:"province",label:"库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"库存",size:"small"},model:{value:e.row.stock,callback:function(a){t.$set(e.row,"stock",a)},expression:"scope.row.stock"}})]}}],null,!1,1071197639)}),a("el-table-column",{attrs:{prop:"city",label:"预警库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"预警库存",size:"small"},model:{value:e.row.lowStock,callback:function(a){t.$set(e.row,"lowStock",a)},expression:"scope.row.lowStock"}})]}}],null,!1,3108570673)}),a("el-table-column",{attrs:{prop:"address",label:"锁定库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"锁定库存",size:"small"},model:{value:e.row.lockStock,callback:function(a){t.$set(e.row,"lockStock",a)},expression:"scope.row.lockStock"}})]}}],null,!1,2222380215)}),a("el-table-column",{attrs:{prop:"zip",label:"sku编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"自定义sku编码",size:"small"},model:{value:e.row.skuCode,callback:function(a){t.$set(e.row,"skuCode",a)},expression:"scope.row.skuCode"}})]}}],null,!1,4289281199)}),a("el-table-column",{attrs:{prop:"zip",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:e.row.price,callback:function(a){t.$set(e.row,"price",a)},expression:"scope.row.price"}})]}}],null,!1,1398720476)}),a("el-table-column",{attrs:{prop:"zip",label:"销量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"small"},model:{value:e.row.sale,callback:function(a){t.$set(e.row,"sale",a)},expression:"scope.row.sale"}})]}}],null,!1,3923125834)}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}],null,!1,1514531892)})],1)],1)],1)],1)],1)])],1):t._e(),3==t.active?a("div",{staticClass:"step3 step"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("详情描述")])]),a("div",{staticClass:"fu"},[a("Tinymce",{ref:"tin"})],1)])],1):t._e(),a("div",{staticStyle:{width:"200px",margin:"0 auto","margin-bottom":"100px"}},[a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:!(t.active>=2),type:"primary"},on:{click:t.lastStep}},[t._v("上一步 ")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.ceshiLoading,expression:"ceshiLoading"}],staticStyle:{"margin-top":"12px"},attrs:{"element-loading-text":"正在提交",type:"primary"},on:{click:t.ceshi}},[t._v(" "+t._s(3==t.active?"提交":"下一步"))])],1)])},r=[],l=a("2909");a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}a("2b3d"),a("13d5"),a("159b"),a("99af"),a("25f0");var c=a("a760"),i=a("8256"),n=a("2f4d"),u={data:function(){return{color:"",colorArr:[],size:"",sizeArr:[],skuArr:[],imageUrls:"",form:{pmsSkuStockList:[{}],product:{serviceIds:""}},imageUrl:"",imageUrs:"",skuImg:"",id:{},active:1,actives:!1,goodsInfo:{},Checkbox:[],skuName:[],ceshiLoading:!1}},components:{Tinymce:i["a"]},computed:{headers:function(){var t=Object(n["b"])();return{token:t}}},created:function(){1==this.$route.query.id||this.getcontent()},methods:{aa:function(){console.log(this.skuArr)},handleSku:function(t,e){this.skuImg=URL.createObjectURL(e.raw)},tinImage:function(t){},pushColor:function(){this.colorArr.push(this.color),console.log(this.colorArr),console.log(this.colorArr)},pushSize:function(){this.sizeArr.push(this.size),console.log(this.sizeArr)},createSku:function(){var t=[this.colorArr,this.sizeArr],e=t.reduce((function(t,e){var a=[];return t.forEach((function(t){return[e.forEach((function(e){"object"===s(t)?a.push([].concat(Object(l["a"])(t),[e])):a.push([t,e])}))]})),a}));return console.log("lastArr==",e),this.filetersSkuArr(e),e},filetersSkuArr:function(t){var e=this;t.forEach((function(t){console.log("item==",t);var a={lowStock:"",pic:"",price:"",stock:"",color:t[0],size:t[1]};e.skuArr.push(a),console.log(e.skuArr),e.form.pmsSkuStockList=e.skuArr,console.log(e.form)}))},uniq:function(t){for(var e=[],a=0;a<t.length;a++)-1==e.indexOf(t[a])&&e.push(t[a]);return e},getcontent:function(){var t=this,e=this.$route.query.id;c["a"].dproductSkusDetailel(e).then((function(e){console.log(e);var a=e.data,o=a.product,r=a.skus;t.form.product=o,console.log(t.form.product),t.imageUrl=o.pic,t.form.pmsSkuStockList=r,console.log(r);var l=[];r.forEach((function(t){var e=JSON.parse(t.spData);l.push(e)})),console.log(l),t.skuName=l}))},byValue:function(){var t=this.Checkbox.toString();console.log(t),this.form.product.serviceIds=t},ceshi:function(){var t=this;1==this.$route.query.id?3==this.active?(this.form.product.pic=this.imageUrl,console.log(this.form),this.ceshiLoading=!0,c["a"].addProductAndSkus(this.form).then((function(e){console.log(e),e.success?(t.ceshiLoading=!1,t.$message.success("新增成功"),t.$router.push({name:"goodsList"})):t.$message.success("失败"),console.log(t.form)}))):2==this.active?(this.form.pmsSkuStockList=this.skuArr,this.active++):this.active++:3==this.active?(c["a"].updateProductAndSkus,this.$message.success("编辑成功")):this.active++},handleAvatarSuccess:function(t,e){this.imageUrl=t.data.material.ossUrl,console.log(this.imageUrl),console.log(t)},handleAvatarSuccesss:function(t,e){this.imageUrls=URL.createObjectURL(e.raw)},next:function(){this.active<=2?(this.active++,console.log(this.active)):(this.actives=!this.actives,this.$message.success("提交成功"))},lastStep:function(){this.active--}}},d=u,p=(a("36d9"),a("2877")),m=Object(p["a"])(d,o,r,!1,null,null,null);e["default"]=m.exports},"13d5":function(t,e,a){"use strict";var o=a("23e7"),r=a("d58f").left,l=a("a640"),s=a("ae40"),c=l("reduce"),i=s("reduce",{1:0});o({target:"Array",proto:!0,forced:!c||!i},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2480:function(t,e,a){},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var o=a("6b75");function r(t){if(Array.isArray(t))return Object(o["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=a("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){return r(t)||l(t)||Object(s["a"])(t)||c()}},"36d9":function(t,e,a){"use strict";a("2480")},a760:function(t,e,a){"use strict";a("99af");var o=a("9c66");function r(t,e,a){return Object(o["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"POST",data:a})}function l(t){return Object(o["a"])({url:"/lejuAdmin/product/switchNewStatus",method:"POST",data:t})}function s(t){return Object(o["a"])({url:"/lejuAdmin/product/switchRecommandStatus\n    ",method:"POST",data:t})}function c(t){return Object(o["a"])({url:"/lejuAdmin/product/switchVerifyStatus\n    ",method:"POST",data:t})}function i(t){return Object(o["a"])({url:"/lejuAdmin/product/switchPublishStatus\n    ",method:"POST",data:t})}function n(t){return Object(o["a"])({url:"/lejuAdmin/product/del/".concat(t),method:"DELETE"})}function u(t){return Object(o["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(t),method:"GET"})}function d(t){return Object(o["a"])({url:"/lejuAdmin/product/updateProductAndSkus",method:"POST",data:t})}function p(t){return Object(o["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"POST",data:t})}function m(t){return Object(o["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"POST",data:t})}function f(t,e){return Object(o["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(t,"/").concat(e),method:"GET"})}function h(t){return Object(o["a"])({url:"/lejuAdmin/brand/delBrand/".concat(t),method:"DELETE"})}function b(t){return Object(o["a"])({url:"/lejuAdmin/brand/addBrand",method:"POST",data:t})}function v(t){return Object(o["a"])({url:"/lejuAdmin/brand/updateBrand",method:"POST",data:t})}function k(){return Object(o["a"])({url:"/lejuAdmin/category/getAllCategory",method:"GET"})}e["a"]={productsByPage:r,switchNewStatus:l,switchRecommandStatus:s,switchVerifyStatus:c,switchPublishStatus:i,del:n,dproductSkusDetailel:u,addProductAndSkus:m,updateProductAndSkus:d,findAllBrand:f,switchShowStatus:p,delBrand:h,addBrand:b,updateBrand:v,getAllCategory:k}},d58f:function(t,e,a){var o=a("1c0b"),r=a("7b0b"),l=a("44ad"),s=a("50c4"),c=function(t){return function(e,a,c,i){o(a);var n=r(e),u=l(n),d=s(n.length),p=t?d-1:0,m=t?-1:1;if(c<2)while(1){if(p in u){i=u[p],p+=m;break}if(p+=m,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=m)p in u&&(i=a(i,u[p],p,n));return i}};t.exports={left:c(!1),right:c(!0)}}}]);