// var http = require('http');
// var fs = require('fs');

// //1. 정적 파일 요청 처리: fs.readFile() 사용
// var server = http.createServer(function(req, res){
//     console.log(req.url);
//     if(req.url === '/'){
//         res.setHeader('Content-Type', 'text/html');
//         fs.readFile('./index.html', function(err, data){
//             if(err) throw err;
//             res.end(data);
//         });
//     }else if(req.url === '/iu.jpg'){
//         res.setHeader('Content-Type', 'image/png');
//         fs.readFile('./iu.jpg', function (err, data) {
//             if (err) throw err;
//             res.end(data);
//         });
//     } else if (req.url === '/music.mp3') {
//         res.setHeader('Content-Type', 'audio/mpeg');
//         fs.readFile('./music.mp3', function (err, data) {
//             if (err) throw err;
//             res.end(data);
//         });
//     } else if (req.url === '/streaming.mp4') {
//         res.setHeader('Content-Type', 'video/mp4');
//         fs.readFile('./streaming.mp4', function (err, data) {
//             if (err) throw err;
//             res.end(data);
//         });
//     }else if(req.url === 'favicon.ico'){}




// }).listen(8060, function(){
//     console.log('8060 포트에서 대기 중');
// });

//2. 정적 파일 요청 처리 : 스트림 활용
var http = require('http');
var fs = require('fs');

//1. 정적 파일 요청 처리: fs.readFile() 사용
// var server = http.createServer(function (req, res) {
//     console.log('req.url: ', req.url);
//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         fs.createReadStream('./index.html').pipe(res);
//     } else if (req.url === '/iu.png') {
//         res.setHeader('Content-Type', 'image/png');
//         fs.createReadStream('./iu.png').pipe(res);
//     } else if (req.url === '/music.mp3') {
//         res.setHeader('Content-Type', 'audio/mpeg');
//         fs.createReadStream('./music.mp3').pipe(res);
//     } else if (req.url === '/streaming.mp4') {
//         res.setHeader('Content-Type', 'video/mp4');
//         fs.createReadStream('./streaming.mp4').pipe(res);
//     } else if (req.url === 'favicon.ico') { }

// }).listen(8060, function () {
//     console.log('8060 포트에서 대기 중');
// });

// process.on('uncaughtException', (err)=>{
//     console.log('request error');
// });

//3. 정적 파일 요청 처리 : path, myMIME 활용
// var path = require('path');
// var myMIME = require('./myMIME');

// var server = http.createServer(function(req, res){
//     console.log('req.url : '), req.url;

//     if(req.url === '/favicon.ico'){
//         res.end();
//         return;
//     }else if(req.url === '/'){
//         req.url = '/index.html';
//     }

//     //파일의 확장자를 알아낸 후, 알맞은 MIME Type으로 서비스한다.
//     var filePath = __dirname + req.url;
//     var extension = path.extname(filePath).substring(1);
//     console.log(extension);
//     console.log(myMIME[extension]);
//     var MimeType = myMIME[extension];

//     fs.readFile(fileName, function(err, data){
//         if(err){
//             console.log(err);
//             return;
//         }
//         res.writeHead(200, {'Content-Type': MimeType});
//         res.end(data);
//     });
// });


//stream 방식 서비스
// fs.open(filePath, 'r', function(err){
//     if(err){
//         res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
//         res.end(`<h1>file open 에러 발생</h1>
//                   <p>${err.message}</p>`);
//         return;
//     }else{
//         res.writeHead(200, {'Content-Type': MimeType});
//         fs.createReadStream(filePath).pipe(res);
//     }
// })
// }).listen(8060, ()=>{
//     console.log('8080 포트에서 대기중');
// });

//4. 정적 파일 요청 처리 : 서드파티 mime 모듈 활용
var mime = require('mime');

var server = http.createServer(function (req, res) {
    console.log('req.url : '), req.url;

    if (req.url === '/favicon.ico') {
        res.end();
        return;
    } else if (req.url === '/') {
        req.url = '/index.html';
    }

    //파일의 확장자를 알아낸 후, 알맞은 MIME Type으로 서비스한다.
    var filePath = __dirname + req.url;
    // var extension = path.extname(filePath).substring(1);
    // console.log(extension);
    // console.log(myMIME[extension]);
    var MimeType = mime.getType(filePath);
    console.log(MimeType);

    fs.open(filePath, 'r', function (err) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`<h1>file open 에러 발생</h1>
                  <p>${err.message}</p>`);
            return;
        } else {
            res.writeHead(200, { 'Content-Type': MimeType });
            fs.createReadStream(filePath).pipe(res);
        }
    })
}).listen(8060, () => {
    console.log('8080 포트에서 대기중');
});