var maths = require('./2115-2');
const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', function (input) {
    console.log((maths.abs(input)));
})