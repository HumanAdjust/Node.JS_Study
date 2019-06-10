var http = require('http');

// 1. http server 구동 방식 1
// var server = http.createServer();

// server.on('request', function(request, response){
//     response.write('Welcome');
//     response.end(' to my server');
// });

// server.on('listening', function(){
//     console.log('8060 포트에서 대기중');
// });

// server.listen(8060);

//2. http server 구동방법 2
// var server = http.createServer(function(req, res){
//     res.write('Welcome');
//     res.end(' to my server');
// }).listen(8060, function(){
//     console.log('8060 포트에서 대기중');
// });

// //2. request 살펴보기
// var server = http.createServer(function (req, res) {
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
//     res.end("Hello");
// }).listen(8060, function () {
//     console.log('8060 포트에서 대기중');
// });

// //3. request, response 메세지 살펴보기
// var server = http.createServer(function(req, res){
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);

//     res.statusCode = 200;
//     res.statusMessage = 'Okey';
//     res.setHeader('Content-Type', 'text/html');
//     res.writeHead(200, 'okok', {'Content-Type': 'text/plain', 'myName': 'dongyun'});
//     res.end('<h1>Hello World</h1>');
// }).listen(8010, function(){
//     console.log('8010 포트에서 대기중');
// });

// //4. html 코드를 응답으로 보내기
// var server = http.createServer(function(req, res){
//     res.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>
//     <h1>안녕하세요.</h1>
//     <img src="http://www.itworld.co.kr/sites/default/files/image/2018/03/windows-10-s-splash-100720578-large.jpg" alt="Windows">
// </body>
// </html>`)
// }).listen(8010, function(){
//     console.log('8080 포트에서 대기중');
// });

//5. 파일을 응답으로 보내기
var fs = require('fs');
var server = http.createServer(function(req, res){
    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log(err);
            return;
        }
        res.end(data);
    });
}).listen(8010, function(){
    console.log('8010 포트에서 대기중');
});

