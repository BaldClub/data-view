/**
 * 菇房环境参数
 */
export const mushroomRoom = [
    {
        name: '空气温度',
        value: '22.4 ℃'
    },
    {
        name: '空气湿度',
        value: '65 %'
    },
    {
        name: '光照',
        value: '1020 Lux'
    },
    {
        name: 'CO2浓度',
        value: '1230 ppm'
    },
    {
        name: 'CO浓度',
        value: '18 ppm'
    },
    {
        name: '菌包PH值',
        value: '5.6'
    }
]

/**
 * 食用菌产量统计
 */
export const dataResource = {
    "平菇": [12, 15, 19, 33, 8],
    "黑木耳": [11, 14, 18, 23, 5],
    "香菇": [9, 15, 19, 24, 6],
    "金针菇": [8, 16, 20, 26, 3],
    "茶树菇": [10, 17, 21, 28, 7],
    "杏鲍菇": [7, 17, 22, 28, 5],
}

/**
 * 设备监控开关
 */
export const equipmentList = [
    {
        icon: '/icon/icon_lighting.png',
        name: '照明',
        status: true
    },
    {
        icon: '/icon/icon_irrigation.png',
        name: '喷灌',
        status: true
    },
    {
        icon: '/icon/icon_water_curtain.png',
        name: '水帘',
        status: true
    },
    {
        icon: '/icon/icon_fan.png',
        name: '风机',
        status: true
    },
    {
        icon: '/icon/icon_top_open_windows.png',
        name: '顶开窗',
        status: true
    },
    {
        icon: '/icon/icon_side_open_windows.png',
        name: '侧开窗',
        status: true
    },
    {
        icon: '/icon/icon_shading.png',
        name: '遮阳',
        status: true
    },
]

/**
 * 农事调控开关
 */
export const farmingList = [
    {
        icon: '/icon/icon_lighting.png',
        name: '采摘',
        status: true
    },
    {
        icon: '/icon/icon_irrigation.png',
        name: '病虫害防治',
        status: true
    },
    {
        icon: '/icon/icon_water_curtain.png',
        name: '菌包上下架',
        status: true
    },
]