import request from '@/utils/request';

export const dataStatistics = () =>
    request({
        url: `/api/custom/data-statistics`,
        method: 'get',
    });
