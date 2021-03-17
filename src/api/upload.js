import request from './myRequest'


export function uploadimg(data) {
  return request({
    url: '/lejuAdmin/material/uploadFileOss',
    method: 'POST',
    data
  })
}
export default {uploadimg}