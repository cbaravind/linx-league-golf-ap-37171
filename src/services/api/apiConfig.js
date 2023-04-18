import axios from 'axios';

const BASE_URL = 'https://your-app-backend.botics.co'; // your app back-end url

export const apiConfig = axios.create({
  baseURL: BASE_URL,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});
