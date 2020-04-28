const fs = require('fs');
const url = require('url');
const cherrio = require('cheerio');
const { spitWord, spitWordCount } = require('./spitWord');
const Mongodb = require('../db/db');
const articleModel = require('../db/schema/article');
const result = [];
async function spider(sUrl) {
    let urlObj = url.parse(sUrl);
    let http = urlObj.protocol === 'http:' ?
        require('http')
        : require('https');
    let req = await http.request({
        'hostname': urlObj.hostname,
        'path': urlObj.path
    }, res => {
        let str = '';
        res.on('data', buffer => {
            str += buffer;
        });
        res.on('end', () => {
            $ = cherrio.load(str);
            $('.ct_t_01 a').each(async function () {
                // console.log($(this).attr('href'),$(this).text());
                await getNews($(this).text(), $(this).attr('href'));
            })
            console.log($('.ct_t_01 a').length);

        });
        res.on('error', () => {
            console.log('404');
        })
    });

    req.end();
    return result;
}

async function getNews(title, nUrl) {
    const paper = {
        title,
        nUrl
    }
    // console.log(title, nUrl);
    let urlObj = url.parse(nUrl);
    let http = urlObj.protocol === 'http:' ?
        require('http')
        : require('https');
    let req = await http.request({
        'hostname': urlObj.hostname,
        'path': urlObj.path
    }, res => {
        let str = '';
        let data = '';
        res.on('data', buffer => {
            str += buffer;
        });
        res.on('end', () => {
            $ = cherrio.load(str);
            $('.article').each(function () {
                let text = spitWord($(this).text());
                let count = spitWordCount($(this).text());
                    data += text;
                paper.content = count;
                result.push(paper);
                // fs.writeFileSync(`../acticles/${title}.txt`, article);
                // console.log(text);
                fs.appendFileSync('../public/download/download.txt', '\n' + text + '\n');
            });
            // console.log('result', result);
        });
        res.on('error', () => {
            console.log('404');
        })
    });
    req.end();
}

// module.exports = function () {
spider('https://news.sina.com.cn/');
setTimeout(async () => {
    console.log('result', result);
    for (let i = 0; i < result.length; i++) {
        console
        await Mongodb.save(articleModel, result[i]);
    }
}, 4000)
// }