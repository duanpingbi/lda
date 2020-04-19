const Segment = require('segment');
const segment = new Segment();
module.exports = function spitWord(content) {
    segment.useDefault();
    segment.use('ChsNameOptimizer');
    segment.loadStopwordDict('stopword.txt');
    let result = segment.doSegment(content, {
        //去除标点符号
        stripPunctuation: true,
        stripStopword: true
    });
    let article = '';
    for (let i = 0; i < result.length; i++) {
        article += result[i].w + '  ';
    }
    return article;
}