import { config } from "./global";

const handleSearchList = (query, id, pageNumber, pageSize) => {
  let res;
  if (query) {
    res = `?${id ? `id=${id}` : ""}  ${
      pageNumber ? `&PageNumber=${pageNumber}` : ""
    }${pageSize ? `&PageSize=${pageSize}` : ""}`;
  } else {
    res = "";
  }
  return res;
};

export default {
  login: (body) => {
    return config.post("api/User/Login", body);
  },

  //##########  ADVERTISE START ###############
  advertiseAdvanceSearch: (query) => {
    return config.get(
      `Api/Advertisement/AdvancedSearch${query ? `?${query}` : ""}`
    );
  },

  getAdvertiseList: (query) => {
    return config.get(`Api/Advertisement/Get${query ? `?${query}` : ""}`);
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
    return config.delete(`Api/Advertisement/Delete?id=${id}`);
  },
  uploadImageAdd: (id, body) => {
    return config.post(`Api/Image/${id}/Add`, body);
  },
  deleteImage: (id, image) => {
    return config.delete(`Api/Image/${id}/Delete?images=${image}`);
  },
};
