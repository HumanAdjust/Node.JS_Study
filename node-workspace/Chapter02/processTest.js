process.on('exit', function () {
    console.log('end');
});

// process.exit();

// for (var i = 0; i < 3; i++) {
// console.log('hi');
// }

function add(a, b){
    return(a+b);
}

console.log(add(parseInt(process.argv[2]), parseInt(process.argv[3])));

for(var i=0; i<4; i++)
    console.log(process.argv[i]);