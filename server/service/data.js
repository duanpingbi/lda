const getData = function () {
    return {
        code: 200,
        data: [
            {
                title: 'test1',
                content: 'test1 data',
                url: 'http://baidu.com'
            },
            {
                title: 'test2',
                content: 'test2 data',
                url: 'http://baidu.com'
            }
        ]
    }
}

module.exports = {
    getData
}