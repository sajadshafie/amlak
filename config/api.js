import { config } from "./global";

export default {
  login: (body) => {
    return config.post("api/User/Login", body);
  },
};
