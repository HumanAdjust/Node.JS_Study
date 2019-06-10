function add(a, b, callback){
    setTimeout(()=>{
        callback(a+b);
    }, 1000);
}

console.log('before');
add(1, 2, function(result){
    console.log(result);
})
console.log('after');

// var callback = function (result) {
//     console.log(result);
// });

// callback();