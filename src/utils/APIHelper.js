import axios from 'axios'
const API_BASE = `http://${location.host}`;

export default {
  get: (url) => {
    return axios.get(`${API_BASE}${url}`)
  },
  
  post(url, body) {
    return axios.post(`${API_BASE}${url}`, body);
  }
}
