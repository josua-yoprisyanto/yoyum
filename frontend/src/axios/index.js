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

//admin
export const loginAdmin = ({ email, password }) =>
  API.post(`/api/admin/auth/login`, { email, password }); //done

export const createStand = ({ formData }) =>
  API.post("/api/admin/stand/create", formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

export const fetchStand = ({ reqBody }) =>
  API.get("/api/admin/stand/", reqBody); //done

export const fetchOneStand = ({ id }) => API.get(`/api/admin/stand/${id}`);

export const deleteStand = ({ id }) => API.delete(`/api/admin/stand/${id}`); //done

export const changeStandActiveStatus = ({ id, active }) =>
  API.put(`/api/admin/stand/active/${id}`, {
    active: active,
  });

//seller
export const loginSeller = ({ email, password }) =>
  API.post(`/api/seller/auth/login`, { email, password }); //done

export const updateSeller = ({ reqBody }) =>
  API.put("/api/seller/auth/", reqBody);

export const createStandMenu = ({ formData }) =>
  API.post(`/api/seller/menu/create`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

export const fetchStandMenu = () => API.get("/api/seller/menu/");

export const updateStandMenu = ({ formData, id }) =>
  API.put(`/api/seller/menu/${id}`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

export const deleteStandmenu = ({ id }) => API.delete(`/api/seller/menu/${id}`);

export const standDetail = () => API.get("api/seller/stand/"); //done

// customer
export const getStandMenuItem = ({ id, itemName }) =>
  API.get(`/api/user/menu/${id}`, {
    params: {
      ...(itemName ? { itemName: itemName } : {}),
    },
  }); // done

export const getCustomerStand = () => API.get("/api/user/stand"); //done
