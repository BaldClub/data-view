import request from "@/utils/request";

export const signin = (data) => {
  return request({
    url: "/api/signin",
    method: "post",
    data,
  });
};

export const signup = (data) => {
  return request({
    url: "/api/signup",
    method: "post",
    data,
  });
};
