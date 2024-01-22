import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
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
    console.log(res);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
config.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);
    return response;
  },
  function (error) {
    toast.error(error.response.data.errorDescription);
    return Promise.reject(error);
  }
);
export const imageURL = "http://cdn.talaremelk.ir/Images/";
