import httpClient from './httpClient.js';

const END_POINT = '/community';


const getCommunities = () => httpClient.get(END_POINT);

export {
    getCommunities
}