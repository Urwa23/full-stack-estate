import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://full-stack-estate-1-ohb3.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;