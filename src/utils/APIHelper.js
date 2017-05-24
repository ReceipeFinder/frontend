import axios from 'axios'
const API_BASE = `http://${location.host}`;

export default {
  get: (url, body) => {
    return axios.get(`${API_BASE}${url}`, {body})
  },
  
  post(url, body) {
    return axios.post(`${API_BASE}${url}`, {body});
  },
  
  remove(url, body) {
    return axios.delete(`${API_BASE}${url}`, {body});
  }
}
