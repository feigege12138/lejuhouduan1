import request from '@/api/myRequest'

export function loginApi(data) {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'POST',
    data
  })
}
