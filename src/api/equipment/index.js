import request from "@/utils/request";


export const equipment = () =>
  request({
    url: `/api/custom/equipment`,
    method: "get",
  });