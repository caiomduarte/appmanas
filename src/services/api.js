import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.3.26/apicodes/'
});

export default api; 
