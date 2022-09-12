import axios from "axios";
import {deleteAuthSession, getSession} from './Session';


const BASE_URL = "https://notes-api.dicoding.dev/v1";
const axioscall = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const axiosauth = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    
    },
    validateStatus:  (status) => {
      if (status === 401) {
          deleteAuthSession() 
         
      }
      return status >= 200 && status < 300

    },
  });
  axiosauth.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${getSession("token")}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );
export {axioscall, axiosauth}