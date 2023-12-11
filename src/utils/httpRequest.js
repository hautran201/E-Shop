import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
});

export default httpRequest;
