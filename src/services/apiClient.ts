// ============================================================
// Axios Instance — single source of truth for all HTTP calls
// TODO: Replace VITE_API_BASE_URL with production API URL
// ============================================================
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor — attach auth token when available
apiClient.interceptors.request.use(
  (config) => {
    // TODO: Replace with real auth token retrieval
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — centralised error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Add global error toast / redirect on 401
    console.error("API Error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
