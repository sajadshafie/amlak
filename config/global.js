import axios from "axios";
import Cookies from "js-cookie";
export const udata = Cookies.get("usertoken");
export const config = axios.create({
  baseURL: "/",
  headers: {
    "Cache-Control": "no-Cache",
  },
});
config.interceptors.request.use(
  (res) => {
    res.headers.Authorization = Cookies.get("usertoken");
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const imageURL = "http://cdn.talaremelk.ir/Images/";
