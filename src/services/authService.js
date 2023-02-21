import axios from 'axios';

export function authLogin({username, password}) {    
    return axios.post('http://localhost:8080/user/login', { username, password });
}