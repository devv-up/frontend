import axios from "axios";

const service = axios.create({
  // Have to change baseURL -> API URL
  baseURL: "http://localhost:8080/data",
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    // Add access-token header before request is sent
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
