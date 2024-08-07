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








// api.interceptors.request.use((config) => {
//     if (config.method === 'POST') {
//         const token = getToken();
//         console.log('Token', token);
//         if (token) {
//             config.headers['x-auth-token'] = token;
//         }
//     }
//     return config;
// });


if (typeof window !== 'undefined') {
    api.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
            config.headers['x-auth-token'] = token;
        }
        return config;
    });
}

// { "email": "testuser@example.com", "password": "password123" }

export default api;
