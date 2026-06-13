import axios from "axios";
import router from "./Router";

const API_BASE_URL = import.meta.env.APP_URL;
const REQUEST_TIMEOUT = 10000;
const ACCESS_TOKEN = "auth_token";
const LOGIN_ROUTE = "/login";

const apiClient = axios.create({
    BASE_URL: `${API_BASE_URL ?? ""}/api`,
    timeout: REQUEST_TIMEOUT,
});

//request
apiClient.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (token) {
            request.headers = request.headers || {};
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    },
    (error) => {
        return Promise.reject(error);
    },
);

//response
apiClient.interceptors.request.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;

        switch (status) {
            case 401:
                localStorage.removeItem(ACCESS_TOKEN);
                router.navigate(LOGIN_ROUTE);

                break;

            case 403:
                console.error("forbidden access");

                break;

            case 404:
                console.error(" Not found");

                break;

            default:
                console.error("Network error, please check your connection");
                break;
        }
    },
);

export default apiClient;
