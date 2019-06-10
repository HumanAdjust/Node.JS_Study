const fs = require('fs');

//1. read stream
// 1-1 flowing mode.
// const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 8});

// const data = [];

// readStream.on('data', function(chunk){
//    data.push(chunk); 
//    console.log('chunk: ', chunk, chunk.length);
// });

// readStream.on('end', function(){
//     console.log('end: ', Buffer.concat(data).toString('utf8'));
// });

//1-2 paused mode
// const writeStream = fs.createWriteStream('./write.txt');

// process.stdin.on('readable', function(){
//     let chunk;
//     console.log('새로운 데이터 도착');
//     while((chunk = process.stdin.read()) !== null){
//         writeStream.write(chunk);
//         if(chunk.toString() === 'exit\r\n')
//             break;
//     }
// });

//2. write stream
const writeStream = fs.createWriteStream('./write2.txt');

writeStream.on('finish', function(){
    console.log('파일 스트림 쓰기 완료');
});

writeStream.write('지금은\n');
writeStream.write('7교시\n');
writeStream.write('TMI');
writeStream.end();

//3. pipe
const rs = fs.createReadStream('./write2.txt');
const ws = fs.createWriteStream('./write3.txt');
rs.pipe(ws);