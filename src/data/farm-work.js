// 年份列表
export const yearList = ["2019", "2020", "2021", "2022", "2023"];

// 月份列表
let monthList = [...Array(new Date().getMonth() + 1).keys()].map(
  (num) => `${num + 1} 月`
);

// 原材料入库统计
export const left1 = {
  monthList,
  materialIn: [
    {
      name: "木屑",
      data: [10, 14, 15, 8],
    },
    {
      name: "石膏",
      data: [6, 8, 7, 5],
    },
    {
      name: "玉米面",
      data: [8, 8, 7, 3],
    },
  ],
};

// 原材料出库统计
export const left2 = {
  monthList,
  materialOut: [
    {
      name: "木屑",
      data: [9, 13, 14, 6],
    },
    {
      name: "石膏",
      data: [5, 7, 8, 3],
    },
    {
      name: "玉米面",
      data: [5, 8, 6, 2],
    },
  ],
};

// 能源消耗统计
export const left3 = {
  monthList,
  energy: [
    {
      name: "水",
      data: [2.3, 2.9, 2.1, 1.6],
    },
    {
      name: "电",
      data: [2.3, 3.0, 1.3, 1.8],
    },
    {
      name: "煤",
      data: [2.6, 3.2, 2.0, 1.9],
    },
  ],
};

export const right1 = {
  monthList,
  data: [
    [2354, 2503, 920, 805],
    [2554, 2303, 870, 670],
  ],
};

// 农事统计
export const right2 = {
  monthList,
  framWorkData: [
    {
      name: "采摘",
      data: [63, 72, 30, 25],
    },
    {
      name: "病虫害防治",
      data: [12, 11, 3, 5],
    },
    {
      name: "菌包上下架",
      data: [20, 23, 8, 7],
    },
  ],
};

// 预警报警
export const right3 = {
  dataList: [
    {
      type: "原材料",
      detail: "木屑仓库不足",
      time: "2023/3/10 13:34:45",
    },
    {
      type: "药品",
      detail: "杀虫药不足",
      time: "2023/3/10 13:34:45",
    },
    {
      type: "农事",
      detail: "及时采摘菇房",
      time: "2023/3/10 13:34:45",
    },
  ],
};
