var fs = require('fs');

//1. 동기식 파일 읽기
try{
    var data = fs.readFileSync('./write.txt', 'utf8');
    console.log(data);
} catch (error){
    console.log('fs.readFile Error', error);
}


//2. 비동기식 파일 읽기
// fs.readFile('./write.txt', 'utf8', function(err, data){
//     if(err){
//         console.log('fs.readFile Error');
//     }else{
//         console.log(data);
//     }
// });

//3. 동기식 파일 쓰기
fs.writeFileSync('./write.txt', 'Hello World~ ^^');

//4. 비동기식 파일 쓰기
// fs.writeFile('./write.txt', 'Ad officia amet dolor cillum proident sit ad ea adipisicing duis voluptate eiusmod.', function(err){
//     if (err) {
//         console.log('fs.readFile Error'); 
//     } else{
//         fs.readFile('./write.txt', 'utf8', function (err, data) {
//             if (err) {
//                 console.log('fs.readFile Error');
//             } else {
//                 console.log(data);
//             }
//         });
//     } 
// });

// //5. 파일에 내용 추가하기
// fs.appendFile('./write.txt', '\nGSM', (err)=>console.log(err));

// //6. 파일 존재 여부 확인
// fs.access('./write.txt', fs.F_OK | fs.R_OK, function(err) {
//         console.log(err);
// });

// //7. 디렉토리 생성
// fs.mkdir('./testDir', function(err){

// });

// //8. 디렉토리 읽기
// fs.readdir('./', function(err, files){
//     console.log(files);
// });