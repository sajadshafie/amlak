import axios from "axios";
import Cookies from "js-cookie";

export const udata = Cookies.get("usertoken");
export const imageURL = "http://cdn.talaremelk.ir/Images/";
export const config = axios.create({
  baseURL: "/",
  headers: {
    Authorization: udata,
    "Cache-Control": "no-cache",
  },
});
config.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
