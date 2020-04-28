class Mongodb {
    constructor() {

    }
    // 查询全部
    query(MyModel,param = {}) {
        return new Promise((resolve, reject) => {
            MyModel.find(param, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    // 根据id查询
    queryById(MyModel,param) {
        return new Promise((resolve, reject) => {
            MyModel.findOne(param, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    // 保存
    save(MyModel,obj) {
        const m = new MyModel(obj)
        return new Promise((resolve, reject) => {
            m.save((err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    remove(MyModel,param) {
        return new Promise((resolve,reject) => {
            MyModel.remove(param,(err,res)=>{
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = new Mongodb()