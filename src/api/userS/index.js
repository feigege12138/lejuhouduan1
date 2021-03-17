import request from '@/api/myRequest'

function findUserList (start,limit){
  return request({
    url:`/lejuAdmin/member/findMembersByPage/${start}/${limit}`,
    method:'GET'
  })
}

export default {
  findUserList
}