import httpClient from './httpClient.js';

const END_POINT = '/login';


const login = (username: string, password: string) => httpClient.post(END_POINT, { username, password });

export {
    login
}