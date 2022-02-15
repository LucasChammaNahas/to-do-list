import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 50000,
  headers: {},
});

export default api;
