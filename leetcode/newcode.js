const readline = require('readline');


// 返回字符串最后一个单词的长度
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const tokens = line.split(' ');
    const len = tokens.length;
    console.log(tokens[len - 1].length);
});