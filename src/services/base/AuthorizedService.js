import axios from "axios";
import env from "react-dotenv";

const baseURL = "http://localhost:9999";

class AuthorizedService {
  constructor() {
    this.http = axios.create({
      baseURL,
    });
    this.public = axios.create({
      baseURL,
    });
    this.http.interceptors.request.use((config) => {
      const newConfig = { ...config };
      const token = JSON.parse(window.localStorage.getItem("token"));
      newConfig.headers.Authorization = `Bearer ${token}`;
      return newConfig;
    });
    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (
          error?.response?.status === 401 &&
          error?.response?.data.message?.includes("Unauthenticated")
        ) {
          window.localStorage.setItem("token", null);
        }
        return Promise.reject(error);
      }
    );
  }
}
export default AuthorizedService;