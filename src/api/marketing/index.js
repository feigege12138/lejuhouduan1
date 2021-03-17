     import request from '../myRequest'
     // 营销管理

// 广告

function adsList (){
  return request({
    url:'/lejuAdmin/advertise/adsList',
    method:'GET'
  })
}
//删除光浩
function delAds (adsId){
  return request({
    url:`/lejuAdmin/advertise/delAds/${adsId}`,
    method:'DELETE'
  })
}
//添加广告data

function addAds (data){
  return request({
    url:`/lejuAdmin/advertise/addAds`,
    method:'POST',
    data
  })
}
//修改广告


function updateAds (data){
  return request({
    url:` /lejuAdmin/advertise/updateAds`,
    method:'POST',
    data
  })
}

 





// 活动

// 获取活动列表
function findAllRecommends (){
  return request({
    url:`/lejuAdmin/homeRecommend/findAllRecommends`,
    method:'GET'
  })
}
//删除活动列表

function delRecommend (recommendId){
  return request({
    url:`/lejuAdmin/homeRecommend/delRecommend/${recommendId}`,
    method:'DELETE'
  })
}
//添加限时活动列表
function productsByPage (start,limit,data){
  return request({
    url:`/lejuAdmin/product/productsByPage/${start}/${limit}`,
    method:'POST',
    data
  })
}
//添加显示活动
function addRecommend (data){
  return request({
    url:`/lejuAdmin/homeRecommend/addRecommend`,
    method:'POST',
    data
  })
}




export default {
  adsList,
  delAds,
  findAllRecommends,
  delRecommend,
  productsByPage,
  addAds,
  updateAds,
  addRecommend

  
}