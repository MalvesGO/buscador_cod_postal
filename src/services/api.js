import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.duminio.com/ptcp/v2/ptapi6200626fe0d294.53444955/',
});

export default api;