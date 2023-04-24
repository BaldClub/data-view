import request from "@/utils/request";


export const production = () =>
  request({
    url: `/api/custom/production`,
    method: "get",
  });