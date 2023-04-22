import request from "@/utils/request";

export const monitorList = () =>
  request({
    url: "/api/monitor/info",
    method: "get",
  });

export const monitorStatus = () =>
  request({
    url: "/api/monitor/status",
    method: "get",
  });

export const alarm = () =>
  request({
    url: "/api/custom/monitor",
    method: "get",
  });

