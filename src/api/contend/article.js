import request from '@/api/myRequest'

function findArticles(start, limit, data) {
  return request({
    url: `/lejuAdmin/productArticle/findArticles/${start}/${limit}`,
    method: 'POST',
    data
  })
}

function delArticlesApi(id) {
  return request({
    url: `/lejuAdmin/productArticle/del/${id}`,
    method: 'DELETE'
  })
}

function addArticle(data) {
  return request({
    url: `/lejuAdmin/productArticle/addArticle`,
    method: 'POST',
    data
  })
}

function changeShowStatus(data) {
  return request({
    url: `/lejuAdmin/productArticle/changeShowStatus`,
    method: 'POST',
    data
  })
}
//获取文章内容
function productArticle(id) {
  return request({
    url: `/lejuAdmin/productArticle/productArticle/${id} `,
    method: 'GET'
  })
}
//更新文章
function updateArticle(data) {
  return request({
    url: `/lejuAdmin/productArticle/updateArticle `,
    method: 'POST',
    data
  })
}
//获取素材列表

function findMaterialByPage(start,limit,data) {
  return request({
    url: `/lejuAdmin/material/findMaterialByPage/${start}/${limit}`,
    method: 'GET',
    data
  })
}

//删除素材列表
function delMaterial(id) {
  return request({
    url: `/lejuAdmin/material/delMaterial/${id}`,
    method: 'DELETE',
  })
}







export default {
  findArticles,
  delArticlesApi,
  addArticle,
  changeShowStatus,
  productArticle,
  updateArticle,
  findMaterialByPage,
  delMaterial
}
