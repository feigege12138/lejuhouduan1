import request from '../myRequest'

//-----------------------------------------------------用户管理
function findUsersByPage(start, limit) {
  return request({
    url: `/admin/sysAuth/user/findUsersByPage/${start}/${limit}`,
    method: 'POST'
  })
}

function removeUser(id) {
  return request({
    url: `/admin/sysAuth/user/removeUser/${id}`,
    method: 'DELETE'
  })
}
function saveUserRoles(data) {
  return request({
    url: `/admin/sysAuth/user/saveUserRoles`,
    method: 'POST',
    data
  })
}
function updateUserRoles(data) {
  return request({
    url: `/admin/sysAuth/user/updateUserRoles`,
    method: 'PUT',
    data
  })
}

 
 
//---------------------------------------------角色管理
function findRolesByPage(start,limit) {
  return request({
    url: `/admin/sysAuth/role/findRolesByPage/${start}/${limit}`,
    method: 'GET',
  })
}
function removeRole(id) {
  return request({
    url: `/admin/sysAuth/role/removeRole/${id}`,
    method: 'DELETE',
  })
}
 

//-----------------------------------------------资源管理
function findAllPermissions() {
  return request({
    url: `/admin/sysAuth/permission/findAllPermissions`,
    method: 'GET',
  })
}
 


export default {
  findUsersByPage,
  removeUser,
  saveUserRoles,
  updateUserRoles,
  findRolesByPage,
  removeRole,
  findAllPermissions
}
