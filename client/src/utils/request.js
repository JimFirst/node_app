import axios from 'axios'
import { Message } from 'element-ui'
const server = axios.create({
  // baseUrl: '',
  timeout: 5000
})
// 请求拦截器
server.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
server.interceptors.response.use(res => {
  if (res.data.code !== 1) {
    Message.error(res.data.msg)
  }
  return res.data
})
export default server