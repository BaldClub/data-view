import { ms } from "./data";

// 菇房区实时环境数据
export const left1 = {
  data: [
    {
      name: "空气温度",
      value: "21 ℃",
    },
    {
      name: "空气湿度",
      value: "65 %",
    },
    {
      name: "光照",
      value: "1250 Lux",
    },
    {
      name: "CO2浓度",
      value: "890 ppm",
    },
    {
      name: "CO浓度",
      value: "100 ppm",
    },
    {
      name: "菌包PH值",
      value: "0",
    },
  ],
};

// 接种区实时环境数据
export const left2 = {
  data: [
    {
      name: "空气温度",
      value: "19 ℃",
    },
    {
      name: "空气湿度",
      value: "58 %",
    },
    {
      name: "光照",
      value: "1510 Lux",
    },
    {
      name: "CO2浓度",
      value: "870 ppm",
    },
    {
      name: "CO浓度",
      value: "98 ppm",
    },
  ],
};

// 灭菌强冷区实时环境数据
export const left3 = {
  data: [
    {
      name: "空气温度",
      value: "23 ℃",
    },
    {
      name: "空气湿度",
      value: "52 %",
    },
    {
      name: "光照",
      value: "970 Lux",
    },
    {
      name: "CO2浓度",
      value: "650 ppm",
    },
    {
      name: "CO浓度",
      value: "46 ppm",
    },
  ],
};

// 拌料袋装区实时环境数据
export const left4 = {
  ms,
  data: [
    {
      name: "空气温度",
      value: "22.0 ℃",
      random: [22.1, 1, 1, "℃"],
    },
    {
      name: "空气湿度",
      value: "57 %",
      random: [57, 5, 0, "%"],
    },
    {
      name: "光照",
      value: "1020 Lux",
    },
    {
      name: "CO2浓度",
      value: "750 ppm",
    },
    {
      name: "CO浓度",
      value: "86 ppm",
    },
  ],
};

// 设备监控开关
export const right1 = {
  dataList: [
    {
      icon: "/icon/icon_lighting.png",
      name: "照明",
      status: true,
    },
    {
      icon: "/icon/icon_irrigation.png",
      name: "喷灌",
      status: true,
    },
    {
      icon: "/icon/icon_water_curtain.png",
      name: "水帘",
      status: true,
    },
    {
      icon: "/icon/icon_fan.png",
      name: "风机",
      status: true,
    },
    {
      icon: "/icon/icon_top_open_windows.png",
      name: "顶开窗",
      status: true,
    },
    {
      icon: "/icon/icon_side_open_windows.png",
      name: "侧开窗",
      status: true,
    },
    {
      icon: "/icon/icon_shading.png",
      name: "遮阳",
      status: true,
    },
  ],
};

// 农事调控开关
export const right2 = {
  dataList: [
    {
      icon: "/icon/icon_fan.png",
      name: "拌料",
      status: true,
    },
    {
      icon: "/icon/icon_top_open_windows.png",
      name: "装袋",
      status: true,
    },
    {
      icon: "/icon/icon_side_open_windows.png",
      name: "灭菌",
      status: true,
    },
    {
      icon: "/icon/icon_shading.png",
      name: "强冷",
      status: true,
    },
    {
      icon: "/icon/icon_lighting.png",
      name: "采摘",
      status: true,
    },
    {
      icon: "/icon/icon_irrigation.png",
      name: "病虫害防治",
      status: true,
    },
    {
      icon: "/icon/icon_water_curtain.png",
      name: "菌包上下架",
      status: true,
    },
  ],
};

// 预警报警
export const right3 = {
  dataList: [
    {
      type: "参数超标",
      time: "2023/3/10 13:34:45",
    },
    {
      type: "采摘",
      time: "2023/3/10 13:34:45",
    },
    {
      type: "参数超标",
      time: "2023/3/10 13:34:45",
    },
    {
      type: "参数超标",
      time: "2023/3/10 13:34:45",
    },
  ],
};
