import axios from "axios";
// import { storageService } from "./local-storage";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//we intercept every requests
// axiosInstance.interceptors.request.use(
//   async function (config) {
//     const token = "12345678"; //storageService.getToken();
//     config.headers["x-access-token"] = token;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// we intercept every response
// axiosInstance.interceptors.response.use(
//   async function (config) {
//     return config;
//   },
//   (error) => {
//     //check for authentication or anything like that
//     return Promise.reject(error);
//   }
// );
