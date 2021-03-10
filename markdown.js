const reg = /<<<\s(.[a-zA-Z/]+.js)/gi;
const fs = require('fs');

const path = {
    array: 'docs/array/README.md',
    bom: 'docs/bom/README.md',
    cookie: 'docs/cookie/README.md',
    date: 'docs/date/README.md',
    dom: 'docs/dom/README.md',
    number: 'docs/number/README.md',
}

let markdown = '';

Object.keys(path).forEach(element => {
    console.log(path[element]);
    let src = path[element];
    let = fs.readFileSync(src).toString();
    const input = fs.readFileSync(src).toString();
    const output = input.replace(reg, (data, url) => {
        const code = fs.readFileSync(url).toString();
        return '```js\n' + code + '```';
    })
    markdown += output;
});
fs.writeFileSync('./DETAIL.md', markdown);
