// 文章请求模块
import request from '@/utils/request'

// 请求获取文章列表数据
export const getArticles = params => {
    if (params.id === 0) {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/top'
        })
    } else if (params.id === 1) {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/shehui'
        })
    } else if (params.id === 2) {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/guonei'
        })
    } else if (params.id === 3) {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/guoji'
        })
    } else if (params.id === 4) {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/yule'
        })
    } else if (params.id === 5) {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/tiyu'
        })
    } else {
        return request({
            method: 'GET',
            url: 'http://127.0.0.1:3001/keji'
        })
    }

}