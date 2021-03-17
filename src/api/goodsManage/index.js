import request from '@/api/myRequest'


// 分页查询商品列表
function productsByPage(start, limit, data) {
  return request({
    url: `/lejuAdmin/product/productsByPage/${start}/${limit}`,
    method: 'POST',
    data
  })
}
//修改更新状态

function switchNewStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchNewStatus`,
    method: 'POST',
    data
  })
}
//推荐状态
function switchRecommandStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchRecommandStatus
    `,
    method: 'POST',
    data
  })
}
//修改审核状态
function switchVerifyStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchVerifyStatus
    `,
    method: 'POST',
    data
  })
}
//修改发布状态

function switchPublishStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchPublishStatus
    `,
    method: 'POST',
    data
  })
}
//删除

function del(productId) {
  return request({
    url: `/lejuAdmin/product/del/${productId}`,
    method: 'DELETE',

  })
}


//编辑商品详情

function dproductSkusDetailel(productId) {
  return request({
    url: `/lejuAdmin/product/productSkusDetail/${productId}`,
    method: 'GET',

  })
}
//更新商品信息

function updateProductAndSkus(data) {
  return request({
    url: `/lejuAdmin/product/updateProductAndSkus`,
    method: 'POST',
    data

  })
}

 

//是否展示
function switchShowStatus(data) {
  return request({
    url: `/lejuAdmin/brand/switchShowStatus`,
    method: 'POST',
    data

  })
}


 //新增商品
 function addProductAndSkus(data) {
  return request({
    url: `/lejuAdmin/product/addProductAndSkus`,
    method: 'POST',
    data

  })
}








// 品牌管理接口----------------------------------------------------------------------------------》

// 品牌列表
function findAllBrand(start,limit) {
  return request({
    url: `/lejuAdmin/brand/findBrandByPage/${start}/${limit}`,
    method: 'GET',

  })
}
//删除
function delBrand(id) {
  return request({
    url: `/lejuAdmin/brand/delBrand/${id}`,
    method: 'DELETE',

  })
}
//添加品牌
function addBrand(data) {
  return request({
    url: `/lejuAdmin/brand/addBrand`,
    method: 'POST',
    data

  })
}
//编辑品牌
function updateBrand(data) {
  return request({
    url: `/lejuAdmin/brand/updateBrand`,
    method: 'POST',
    data

  })
}




// 商品分类接口=----------------------------------------------------------------------------------》
function getAllCategory() {
  return request({
    url: `/lejuAdmin/category/getAllCategory`,
    method: 'GET',

  })
}


 

 

export default {
  productsByPage,
  switchNewStatus,
  switchRecommandStatus,
  switchVerifyStatus,
  switchPublishStatus,
  del,
  dproductSkusDetailel,
  addProductAndSkus,
  updateProductAndSkus,
  // 品牌管理接口---------------------------------------------------------------------》
  findAllBrand,
  switchShowStatus,
  delBrand,
  addBrand,
  updateBrand,
  //分类管理接口-------------------------------------》
  getAllCategory
}
