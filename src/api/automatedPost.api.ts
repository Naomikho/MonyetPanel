import httpClient from './httpClient.js';

const END_POINT = '/automated-post';


const getAutomatedPosts = () => httpClient.get(END_POINT);

const createdAutomatedPost = (automatedPost: object) => httpClient.post(END_POINT, automatedPost);

const updateAutomatedPost = (automatedPost: object, id: number) => httpClient.post(`${END_POINT}/${id}`, automatedPost);

const deleteAutomatedPost = (id: number) => httpClient.delete(`${END_POINT}/${id}`);

const togglePostEnabled = (id: number) => httpClient.get(`${END_POINT}/${id}/enable`); 

export {
    getAutomatedPosts,
    createdAutomatedPost,
    updateAutomatedPost,
    deleteAutomatedPost,
    togglePostEnabled
}