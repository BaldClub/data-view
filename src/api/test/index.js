import request from '@/utils/request'

// 获取后端数据
export function getData1() {
  return request({
    url: '/koi/chart/getData1',
    method: 'get'
  })
}