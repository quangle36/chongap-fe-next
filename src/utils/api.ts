import { BASE_URL, setupInterceptorsTo } from './interceptors';
import axios from 'axios';

const api = setupInterceptorsTo(
  axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

export default api;
