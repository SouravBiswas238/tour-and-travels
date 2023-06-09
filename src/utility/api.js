import API from "./apiServise";

const baseURL = "http://localhost:5000";

const Api = new API({
  baseURL: baseURL,
});

export default Api;
