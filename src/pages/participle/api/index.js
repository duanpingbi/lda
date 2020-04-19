const axios = require('axios');

const getSpitRes = (param) => {
    return axios.post('/participle/spit', param);
}

module.exports = {
    getSpitRes
}