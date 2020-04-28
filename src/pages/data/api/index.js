const axios = require('axios');
const getArticle = () => {
   return axios.get('/data/get-data');
}
const getArticleById = (id) => {
    return axios.get('/data/get-detail',{
        params:{
            id
        }
    });
 }
 const delArticleById = (id) => {
    return axios.get('/data/del',{
        params:{
            id
        }
    });
 }
module.exports = {
    getArticle,
    getArticleById,
    delArticleById
}