import { config } from "./global";

export default {
  login: (body) => {
    return config.post("api/User/Login", body);
  },

  //##########  ADVERTISE START ###############
  advertiseAdvanceSearch: () => {
    return config.get("Api/Advertisement/AdvancedSearch");
  },
  getAdvertiseList: () => {
    return config.get("Api/Advertisement/Get");
  },
  insertAdvertise: (body) => {
    return config.post("Api/Advertisement/Insert", body);
  },
  updateAdvertise: (id, body) => {
    return config.put(`Api/Advertisement/${id}/Update`, body);
  },
  insertImageAdvertise: (id, body) => {
    return config.post(`Api/Image/${id}/Insert`, body);
  },
  removeAdvertise: (id) => {
    return config.post("Api/Advertisement/Delete", { id: id });
  },
};
