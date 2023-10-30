import axios from "axios";
import Cookies from "js-cookie";

export const udata = Cookies.get("usertoken");
export const config = axios.create({
  baseURL: "http://api2.talaremelk.ir/",
  headers: {
    Authorization: udata,
  },
});
config.interceptors.request.use(
  (res) => {
    const token = config.udata;
    if (token) {
      res.headers.Authorization = token;
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);


