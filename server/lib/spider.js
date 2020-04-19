const fs = require('fs');
const url = require('url');
const cherrio = require('cheerio');
const spitWord = require('./spitWord');

function spider(sUrl) {
    let urlObj = url.parse(sUrl);
    let http = urlObj.protocol === 'http:' ?
        require('http')
        : require('https');
    let req = http.request({
        'hostname': urlObj.hostname,
        'path': urlObj.path
    }, res => {
        let str = '';
        res.on('data', buffer => {
            str += buffer;
        });
        res.on('end', () => {
            $ = cherrio.load(str);
            $('.ct_t_01 a').each(function () {
                // console.log($(this).attr('href'),$(this).text());
                getNews($(this).text(), $(this).attr('href'));
            })
            console.log($('.ct_t_01 a').length);
        });
        res.on('error', () => {
            console.log('404');
        })
    });
    req.end();
}

async function getNews(title, nUrl) {
    console.log(title, nUrl);
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
                let article = spitWord($(this).text());
                data += article;
                // fs.writeFileSync(`../acticles/${title}.txt`, article);
                fs.appendFileSync('../acticles/1.txt', '\n' + article + '\n');
            });
            // let result = lda(data, 10, 5);
        });
        res.on('error', () => {
            console.log('404');
        })
    });
    req.end();
}

spider('https://news.sina.com.cn/');