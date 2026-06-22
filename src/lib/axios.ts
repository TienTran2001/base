import axios, { AxiosError } from "axios";
import { getPublicApiV1Base } from "@/lib/api-url";

const axiosInstance = axios.create({
  baseURL: getPublicApiV1Base(),
  timeout: 30000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (globalThis.window !== undefined) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (globalThis.window !== undefined) {
        localStorage.removeItem("token");
        globalThis.window.location.href = "/auth/signin";
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
