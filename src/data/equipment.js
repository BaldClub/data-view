import { yearList } from "./data";

export const dataList = [
  {
    name: "摄像头",
    num: 15,
  },
  {
    name: "透传",
    num: 10,
  },
  {
    name: "气象站",
    num: 5,
  },
  {
    name: "灭菌锅",
    num: 2,
  },
  {
    name: "传感器",
    num: 40,
  },
  {
    name: "其他",
    num: 28,
  },
];

// 设备总数
export const left1 = {
  yearList,
  data: [40, 68, 70, 79, 80, 81],
};

// 设备总价
export const left2 = {
  yearList,
  data: [30, 42, 50, 62, 65],
};

// 设备状态
export const left3 = {
  data: [
    { name: "正常", value: 92 },
    { name: "故障", value: 5 },
    { name: "报废", value: 3 },
  ],
};

// 设备使用时长排名
export const right1 = {
  data: [
    {
      name: "传感器8",
      value: 812,
    },
    {
      name: "气象站1",
      value: 758,
    },
    {
      name: "传感器2",
      value: 703,
    },
    {
      name: "传感器21",
      value: 681,
    },
    {
      name: "透传9",
      value: 732,
    },
  ],
};

// 设备构成
export const right2 = {
  data: [
    { name: "特殊设备", value: 10 },
    { name: "重点设备", value: 30 },
    { name: "专用设备", value: 20 },
    { name: "一般设备", value: 40 },
  ],
};

// 预警报警
export const right3 = {
  dataList: [
    {
      id: "1633225138344296442",
      location: "菇房1",
      detail: "掉线",
      time: "2023/3/10 13:34:45",
    },
    {
      id: "1633225138344296448",
      location: "菇房2",
      detail: "故障",
      time: "2023/3/10 14:24:25",
    },
    {
      id: "1633225138344296432",
      location: "菇房3",
      detail: "故障",
      time: "2023/3/09 8:24:43",
    },
  ],
};
