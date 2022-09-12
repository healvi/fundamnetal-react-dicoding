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

const token = getSession('token')
const axiosauth = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization : `Bearer ${token}`
    },
    validateStatus:  (status) => {
      if (status === 401) {
          // deleteAuthSession() // default
          // window.location.reload()
      }
      return status >= 200 && status < 300

    },
  });

export {axioscall, axiosauth}