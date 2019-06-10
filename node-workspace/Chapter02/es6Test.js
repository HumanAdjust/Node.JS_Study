// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // console.log('after loop i is', i);

// b = 5;
// var b;
// console.log(b);

// const c = 3;

// const str1 = 'hello';
// const str2 = 'world';
// const str3 = 2019;

// console.log(str1 + ' ' + str2 + ' ' + str3);
// console.log(`${str1} 
//     ${str2} 
//         ${str3}`);

var a, b, rest;
[a, b, , , rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`a = ${a}, 
b = ${b},
rest = ${rest}`);

({a, b} = {a: 10, b: 20});
console.log(`a = ${a},
b = ${b}`);

