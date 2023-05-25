import { ms } from './data';

// 气候统计
export const conter_two = {
    indicator: [
        { text: '晴天', max: 100 },
        { text: '多云', max: 100 },
        { text: '阴天', max: 100 },
        { text: '小雨', max: 100 },
        { text: '中雨', max: 100 },
        { text: '大雨', max: 100 },
        { text: '雪', max: 100 },
    ],
    data: [
        {
            name: '天气',
            value: [70, 90, 67, 32, 23, 30, 30],
        },
    ],
};

// 气象站参数
export const left1 = {
    ms,
    data: [
        {
            name: '空气温度',
            value: '17.4 ℃',
            random: [17.4, 2, 1, '℃'],
        },
        {
            name: '空气湿度',
            value: '49 %',
            random: [49, 5, 0, '%'],
        },
        {
            name: '光照',
            value: '1540 Lux',
        },
        {
            name: '雨量',
            value: '7.3 mm/h',
        },
        {
            name: '风向',
            value: '西南',
        },
        {
            name: '风速',
            value: '2.2 m/s',
        },
    ],
};

// 气象站数据趋势
export const left2 = {};

// 菌包参数趋势
export const left3 = {};

// 菇房环境数据
export const right1 = {
    ms,
    data: [
        {
            name: '空气温度',
            value: '22.4 ℃',
            random: [22.4, 2, 1, '℃'],
        },
        {
            name: '空气湿度',
            value: '65 %',
            random: [65, 5, 0, '%'],
        },
        {
            name: '光照',
            value: '1020 Lux',
        },
        {
            name: 'CO2浓度',
            value: '1230 ppm',
        },
        {
            name: 'CO浓度',
            value: '18 ppm',
        },
        {
            name: '菌包PH值',
            value: '5.6',
        },
    ],
};

// 菇房环境数据趋势
export const right2 = {};

// 预警报警
export const right3 = {
    dataList: [
        {
            id: 1,
            type: '参数超标',
            time: '2023/3/10 13:34:45',
        },
        {
            id: 2,
            type: '采摘',
            time: '2023/3/10 13:34:45',
        },
        {
            id: 3,
            type: '参数超标',
            time: '2023/3/10 13:34:45',
        },
        {
            id: 4,
            type: '参数超标',
            time: '2023/3/10 13:34:45',
        },
    ],
};
