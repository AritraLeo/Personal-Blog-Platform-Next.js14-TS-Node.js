// utils/api.ts
import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// api.interceptors.request.use((config) => {
//     const token = getToken();
//     if (token) {
//         config.headers['x-auth-token'] = token;
//     }
//     return config;
// });

api.interceptors.request.use((config) => {
    if (config.method === 'post') {
        const token = getToken();
        if (token) {
            config.headers['x-auth-token'] = token;
        }
    }
    return config;
});


export default api;
