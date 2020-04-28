const mongoose = require('../index');
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: String,
    nUrl: String,
    content: String,
});

const articleModel = mongoose.model('article', articleSchema, 'article');

module.exports = articleModel;