import axios from "axios";
import router from "./Router";

const APP_URL = import.meta.env.VITE_APP_URL;
const REQUEST_TIMEOUT = 10000;
const ACCESS_TOKEN = "auth_token";
const LOGIN_ROUTE = "/login";

const apiClient = axios.create({
    baseURL: `${APP_URL ?? ""}`,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
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
apiClient.interceptors.response.use(
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
        return Promise.reject(error);
    },
);

export default apiClient;
