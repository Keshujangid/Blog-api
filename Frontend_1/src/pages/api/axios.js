import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vercel.com/keshutechies-projects/blog-api', // Adjust baseURL as needed
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});



export default api;
