import request from "@/utils/request";

export const park = () => (
    request({
        url: '/api/homepage/park',
        method: 'get',
    })
)

export const device = () => (
    request({
        url: '/api/homepage/device',
        method: 'get',
    })
)

export const strains = () => (
    request({
        url: '/api/homepage/strains',
        method: 'get',
    })
)