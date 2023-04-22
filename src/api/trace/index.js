import request from "@/utils/request";

export const scan = () =>
  request({
    url: "/api/trace/scan",
    method: "get",
  });

export const scanTrend = () =>
  request({
    url: "/api/trace/scanTrend",
    method: "get",
  });

export const saleTrend = () =>
  request({
    url: "/api/trace/saleTrend",
    method: "get",
  });

