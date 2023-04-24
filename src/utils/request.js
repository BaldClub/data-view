import axios from "axios"

const request = axios.create({
  baseURL: 'http://192.168.10.2:8080',
  timeout: 6000
})

// request interceptor
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default request