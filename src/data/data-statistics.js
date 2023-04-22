import { yearList, monthList } from "./data";

export const dataList = [
  {
    name: "光照",
    num: 16,
  },
  {
    name: "CO2",
    num: 10,
  },
  {
    name: "温度",
    num: 15,
  },
  {
    name: "湿度",
    num: 10,
  },
  {
    name: "设备",
    num: 10,
  },
  {
    name: "产量",
    num: 16,
  },
  {
    name: "价格",
    num: 10,
  },
  {
    name: "政策",
    num: 4,
  },
  {
    name: "PH值",
    num: 10,
  },
];

// 工厂产值/利润对比
export const left1 = {
  // 产值
  outputValue: [32.6, 20.0, 6.4, 3.3],
  // 利润
  data: [48.7, 18.8, 6.0, 3.1],
  // 月份
  monthList,
};

// 工厂设备数量
export const left2 = {
  // 年份
  yearList,
  // 设备数量
  deviceList: [55, 130, 144, 150, 180],
};

// 数据资源
export const left3 = {
  // 数据资源数据 单位（GB）
  dataResource: {
    光照: [6, 8, 9, 33, 20],
    CO3: [3, 4, 2, 5, 2],
    温度: [4, 5, 3, 6, 23],
    湿度: [5, 6, 4, 7, 2],
    设备: [6, 7, 5, 8, 25],
    价格: [6, 7, 5, 8, 9],
    产量: [7, 8, 6, 9, 6],
    政策: [8, 9, 7, 10, 7],
    PH值: [12, 13, 11, 14, 1],
  },
  // 年份日期
  yearList,
};

// 工厂资金投入
export const right1 = {
  data: [150, 230, 224, 218, 135],
  yearList,
};

// 产品质量投诉
export const right2 = {
  data: [120, 200, 150, 80, 70, 110, 130, 13, 130, 130, 130, 130],
  monthList,
};

// 预警报警次数
export const right3 = {
  data: [120, 200, 150, 80, 70, 110, 130, 13, 130, 130, 130, 130],
  monthList,
};
