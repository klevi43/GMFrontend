import axios from "axios";

// import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Read the XSRF-TOKEN cookie
//     const csrfToken = Cookies.get("XSRF-TOKEN");
//     console.log(csrfToken);
//     // If the CSRF token exists and it's a non-GET request, add the header
//     if (csrfToken && config.method !== "get" && config.method !== "GET") {
//       config.headers["X-XSRF-TOKEN"] = csrfToken;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
