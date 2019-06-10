//1번
// function add(a, b){
//     return a+b;
// }

// console.log('before');
// console.log(add(3, 5))
// console.log('after');

function addAsync(a, b, callback) {
    callback(a+b);
    setTimeout(callback, 100, a+b);
    require('fs').readFile('./test.txt', 'utf8', function (err, data) {
        console.log(data)
    });
}

setTimeout(addAsync, 1000, 1, 2, result => console.log(result));

addAsync(1, 2, function (result) {

    console.log(result);
});