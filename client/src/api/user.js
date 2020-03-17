import request from '../utils/request'
const user = {
  login(data) {
    return request({
      url: '/api/login',
      method: 'post',
      data
    })
  }
}
export default user