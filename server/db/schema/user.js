const mongoose = require('../index');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    pwd: String
});

const MyModel = mongoose.model('user', userSchema, 'user');

module.exports = MyModel;
