import request from '@/api/myRequest'



// 订单列表
function findOrdersByPage ( start,limit,data){
  return request({
    url:`/lejuAdmin/order/findOrdersByPage/${start}/${limit}`,
    method:'POST',
    data
  })
}

//订单明细
function orderDetail (orderId){
  return request({
    url:`/lejuAdmin/order/orderDetail/${orderId}`,
    method:'GET',
  })
}
//确认发货
function sendDone (data){
  return request({
    url:`/lejuAdmin/order/sendDone`,
    method:'POST',
    data
  })
}
//关闭订单
function finishOrder (orderId){
  return request({
    url:`/lejuAdmin/order/finishOrder/${orderId}`,
    method:'POST'
    
  })
}
//强制确定收货

function receiveProductsForce (orderId){
  return request({
    url:`/lejuAdmin/order/receiveProductsForce/${orderId}`,
    method:'POST'
    
  })
}



//------------------------------------------------------------------------>退单列表
 
function findReturnApply (start,limit,data){
  return request({
    url:`/lejuAdmin/orderReturn/findReturnApply/${start}/${limit}`,
    method:'POST',
    data
    
  })
}
//退单详情
function orderReturn (id){
  return request({
    url:`/lejuAdmin/orderReturn/${id}`,
    method:'GET',

  })
}
//收到退货
function receiveProduct (id,data){
  return request({
    url:`/lejuAdmin/orderReturn/receiveProduct/${id}`,
    method:'POST',
    data

  })
}
//同意退货
function agreeApply (id,data){
  return request({
    url:`/lejuAdmin/orderReturn/agreeApply/${id}`,
    method:'POST',
    data
    
  })
}
function rejectApply (id,data){
  return request({
    url:`/lejuAdmin/orderReturn/rejectApply/${id}`,
    method:'POST',
    data
    
  })
}
// ---------------------------------------------------------------地址
function addressList (){
  return request({
    url:`/lejuAdmin/companyAddress/addressList`,
    method:'GET'
    
  })
}
//--------------默认收货状态
function setReceiveOne (data){
  return request({
    url:`/lejuAdmin/companyAddress/setReceiveOne`,
    method:'POST',
    data
    
  })
}

function setSendOne (data){
  return request({
    url:`/lejuAdmin/companyAddress/setSendOne`,
    method:'POST',
    data
    
  })
}

//删除
function companyAddress (id){
  return request({
    url:`/lejuAdmin/companyAddress/${id}`,
    method:'DELETE'
    
  })
}
//新增地址
function save (data){
  return request({
    url:`/lejuAdmin/companyAddress/save`,
    method:'POST',
    data
    
  })
}
 
//编辑地址

function update (data){
  return request({
    url:`/lejuAdmin/companyAddress/update`,
    method:'POST',
    data
    
  })
}

 





export default {
  findOrdersByPage,
  orderDetail,
  sendDone,
  finishOrder,
  receiveProductsForce,
  // ----------------------------------------------------------------退单
  findReturnApply,
  orderReturn,
  receiveProduct,
  agreeApply,
  rejectApply,
  //---------------------------------------------------地址
  addressList,
  setReceiveOne,
  setSendOne,
  companyAddress,
  save,
  update
  
}
 