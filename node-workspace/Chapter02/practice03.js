//1번 문제
function addSync(a, b) {
    console.log(a+b);
}
setTimeout(addSync, 1000, 1, 2);

//2번 문제
function addAsync(a, b, callback){
    // callback(a+b);
    // setTimeout(callback, 100, a+b);
    require('fs').readFile('./test.txt', 'utf8', function(err, data){
        console.log(data)
    });
}

setTimeout(addAsync, 1000, 1, 2, result=>console.log(result));

addAsync(1, 2, function(result){

    console.log(result);
});

//3번 문제
var sync1 = function (param) { return param * 2; }
var sync2 = function (param) { return param * 3; }
var sync3 = function (param) { return param * 4; }

console.log(sync3(sync2(sync1(1))));

var async1 = function(param, callback){ callback(param * 2);}
var async2 = function (param, callback) { callback(param * 3); }
var async3 = function (param, callback) { callback(param * 4); }

async1(1, function(result1){
    async2(result1, function(result2){
        require('fs').readFile('./readme.txt', 'utf8', function(err, data){
            console.log(data);
        });
        async3(result2, function(result3){
            console.log(result3);
        });
    });
});

// console.log('before');
// addAsync(1, 2, function(result){
//     console.log(result);
// });
// console.log('later');