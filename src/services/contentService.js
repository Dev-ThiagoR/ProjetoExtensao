import axios from 'axios';
const API_URL = 'http://localhost:5000/api/content';

export const fetchContent = () => {
  return axios.get(API_URL);
};