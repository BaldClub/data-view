import request from '@/utils/request';

export const farmWork = () =>
    request({
        url: `/api/custom/farm-work`,
        method: 'get',
    });
