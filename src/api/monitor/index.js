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

