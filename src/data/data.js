// 年份列表
export const yearList = ["2019", "2020", "2021", "2022", "2023"];

// 月份列表
export const monthList = [...Array(new Date().getMonth() + 1).keys()].map(
  (num) => `${num + 1} 月`
);
