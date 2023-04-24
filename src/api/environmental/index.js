import request from "@/utils/request";


export const environmental = () =>
  request({
    url: `/api/custom/environmental`,
    method: "get",
  });