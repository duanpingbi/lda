'use strict';
const path = require('path');
const glob = require('fast-glob');
const ENTRY_PATH = path.resolve(__dirname, '../src/pages');
exports.getEntries = function () {
    let entryFiles = glob.sync(['**/index.js'], {
        cwd: ENTRY_PATH
    });
    const map = {};
    entryFiles.forEach((filePath) => {
        let key = filePath.replace('/index.js', '');
        map[key] = path.resolve(ENTRY_PATH, filePath);
    });
    return map;
}