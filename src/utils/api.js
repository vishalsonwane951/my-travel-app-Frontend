import axios from "axios";
const API_URL = import.meta.env.VITE_axios_URL;

// const api = axios.create({
//   baseURL: "http://localhost:4000/api", // or your deployed URL
//   withCredentials: true,
// });

const api = axios.create({
   baseURL: "https://my-travel-app-backend-6.onrender.com/api" || 'http://localhost:5000/api',      // use Vite proxy
  withCredentials: true, // send cookies/JWT
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // attach token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
