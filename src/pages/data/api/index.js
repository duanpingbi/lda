const axios = require('axios');
const getArticle = () => {
   return axios.get('/data/get-data');
}

module.exports = {
    getArticle
}