const mongoose = require('./index');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    pwd: Number
});

const MyModel = mongoose.model('user', userSchema, 'user');


class Mongodb {
    constructor() {

    }
    // 查询
    query(param = {}) {
        return new Promise((resolve, reject) => {
            MyModel.find(param, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    // 保存
    save(obj) {
        const m = new MyModel(obj)
        return new Promise((resolve, reject) => {
            m.save((err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
                console.log(res)
            })
        })

    }
}
module.exports = new Mongodb()