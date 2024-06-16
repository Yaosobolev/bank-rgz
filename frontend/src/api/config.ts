import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

export const instance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});
