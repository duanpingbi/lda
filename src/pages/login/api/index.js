const axios = require('axios');

const queryUserInfo = (param) => {
   return axios.post('/login/query',param);
}
const registerInfo = (param) => {
    return axios.post('/register/query',param);
 }
module.exports = {
    queryUserInfo,
    registerInfo
}