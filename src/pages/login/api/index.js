const axios = require('axios');

const queryUserInfo = (param) => {
   return axios.post('/login/query',param);
}
module.exports = {
    queryUserInfo
}