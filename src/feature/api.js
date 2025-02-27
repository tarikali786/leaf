import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url, config) => {
  const response = await axiosInstance.get(url, config || null);
  return response.data;
};

export const post = async (url, data, config) => {
  const response = await axiosInstance.post(url, data, config || null);
  return response.data;
};

export const patch = async (url, data, config) => {
  const response = await axiosInstance.patch(url, data, config || null);
  return response;
};

export const remove = async (url, config) => {
  const response = await axiosInstance.delete(url, config || null);
  return response.data;
};
