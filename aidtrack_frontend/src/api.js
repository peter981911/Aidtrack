import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
});

// Request Interceptor to add JWT token
API.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('aidtrack_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Add Bearer token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;
