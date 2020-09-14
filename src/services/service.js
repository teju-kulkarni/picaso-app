import axios from "axios";
import NProgress from "nprogress";

const apiClient = axios.create({
  baseURL: `https://picsum.photos`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// NProgress using axios interceptors
apiClient.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

apiClient.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default {
  getCards(limit, page) {
    return apiClient.get("/v2/list/?limit=" + limit + "&page=" + page);
  },
  getCardById(id) {
    return apiClient.get("/id/" + id + "/info");
  },
};
