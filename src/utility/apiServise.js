import axios from "axios";

export default class API {
  constructor(options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
    });
    this.axiosInstance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  get(endPoint, body) {
    return this.httpRequest("GET", endPoint, body);
  }

  create(endPoint, body) {
    return this.httpRequest("POST", endPoint, body);
  }

  updtae(endPoint, body) {
    return this.httpRequest("PUT", endPoint, body);
  }

  delete(endPoint, body) {
    return this.httpRequest("DELETE", endPoint, body);
  }

  async httpRequest(method, url, params, header = null) {
    return new Promise((resolve, reject) => {
      let options;
      if (method === "GET") {
        options = {
          url: url,
          headers: header
            ? header
            : {
                "Content-Type": "application/json",
              },
          method: method,
        };
      } else {
        options = {
          url: url,
          headers: header
            ? header
            : {
                "Content-Type": "application/json",
              },
          method: method,
          data: params,
        };
      }

      this.axiosInstance
        .request(options)
        .then((response) => {
          resolve({
            status: response.status,
            ...response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
