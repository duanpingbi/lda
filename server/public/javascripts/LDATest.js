const lda = require('./lda');
const fs = require('fs');

function LDA() {
    let data = fs.readFileSync('../acticles/1.txt');
    // console.log(data.toString());
    let text = '问  台湾地区  领导人 台湾  是  中国  不可分割  一部分  一个  中国  原则  是  国际社会  普遍  共识  责任编辑  赵明 ';
    let result = lda(text, 10, 5);
    console.log(result);
}

LDA();