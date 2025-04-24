import axios from "axios";
import ENV from "../config/env.configuration.1.0.0.js";

const apiClient = axios.create({
    baseURL: ENV.API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});

export default apiClient;