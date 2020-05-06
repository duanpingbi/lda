const mongoose = require('../index');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    pwd: String,
    phone: String,
});

const MyModel = mongoose.model('user', userSchema, 'user');

module.exports = MyModel;
