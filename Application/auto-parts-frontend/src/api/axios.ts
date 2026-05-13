import axios from 'axios';
import Constants from 'expo-constants';

const api = axios.create({
  baseURL: Constants?.expoConfig?.extra?.API_URL ?? 'http://localhost:8000',
});

export default api;
