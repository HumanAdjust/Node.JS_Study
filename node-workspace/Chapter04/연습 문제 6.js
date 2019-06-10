// querystring으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');
// var count = 0;

// var server = http.createServer(function(req, res){
//   const parsedURL = url.parse(req.url);  // <1> url을 parsing하여 객체로 저장한다.
//   console.log('parsedURL.query : ', parsedURL.query);
//   const query = querystring.parse(parsedURL.query);  // <2> parsedURL을 parsing하여 querystring을 추출한 객체를 저장한다.
//   console.log('query : ', query);

//   // start와 end에 합계를 구할 범위를 저장한다.
//   let start = parseInt(query.start);
//   let end = parseInt(query.end);  // <3> query.end를 정수로 parsing한다.
//   console.log(`start : ${start}, end : ${end}`);

//   for(var i=start; i<=end; i++){
//     count += i;
//   }

//   if( !start || !end){
//     res.statusCode = 404;
//     res.end('Wrong Parameter');
//   }else{
//     res.end(`<h1>sum = ${count}</h1>`);
//   }
// }).listen(8060, function(){
//   console.log('8060 포트에서 대기중');
// });

//1. post 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
  if(req.method.toLocaleLowerCase() === 'post'){
    var body = '';
    req.on('data', function(chunk){
      body += chunk;
    });

    req.on('end', function(){
      var data = querystring.parse(body);
      let start = parseInt(data.start);
      let end = parseInt(data.end);
      console.log(`start : ${start}, end : ${end}`);

      if (!start || !end) {
        res.statusCode = 404;
        res.end('Wrong Parameter');
      } else {
        var sum = 0;
        for (var i = start; i <= end; i++) {
          sum += i;
        }
        res.end(`<h1>sum = ${sum}</h1>`);
      }
      res.writeHead(302, { 'Location': '/' });
      res.end();
    });
  }  
}).listen(8060, function () {
  console.log('8060 포트에서 대기중');
});