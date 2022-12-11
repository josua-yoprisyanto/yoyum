import axios from "axios";
import { getToken } from "../utils/getToken";

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_API_URL });
const token = getToken();

API.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});

export const login = ({ email, password }) =>
  API.post(`http://localhost:5000/api/admin/auth/login`, { email, password });

export const getMe = () => API.get("/api/admin/auth/me");
