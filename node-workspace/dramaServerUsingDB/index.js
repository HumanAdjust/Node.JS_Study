var express = require('express');
var sqlite3 = require('sqlite3');
var logger = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();
var db = new sqlite3.Database('dramaList.db');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));   // 로그 남기기
app.use(express.static('public'));    // 정적 파일 처리
app.use(express.urlencoded({extended: true}));  // body에 담긴 데이터 파싱

app.set('view engine', 'pug');  //템플릿 엔진 세팅
app.set('views', './views');    //pug 파일이 저장된 디렉토리

app.get('/', function(req, res){
    // 데이터베이스에서 드라마 목록을 가져와서 dramaList.pug와 렌더링하여 서비스
    db.all(`SELECT * FROM dramaTable`,
        function(err, rows){
            if(err){
                console.log(err.message);
            }else{
                res.render('dramaList', {title: 'Dongyun', list: rows});
            }
        }
    );
});

app.post('/', function(req, res){
    if(req.body.title && req.body.actor){
        db.run(`INSERT INTO dramaTable(title, actor) VALUES($title, $actor)`,
        {$title: req.body.title, $actor: req.body.actor},
        function(err){
            if(err){
                console.log(err.message);
            }else{
                console.log('data inserted')
            }
        }
        )
    }
    res.redirect('/');
});

app.put('/', function(req, res){
    if(req.body.title && req.body.newTitle && req.body.newActor){
        db.run(`UPDATE dramaTable SET title = $newTitle, actor = $newActor WHERE title = $title`,
            {$title: req.body.title, $newTitle: req.body.newTitle, $newActor: req.body.newActor},
            function(err){
                if(err){
                    console.log(err.message);
                }else{
                    console.log('data updated');
                }
            }
        )
    }
    res.redirect('/');
});

app.delete('/', function (req, res) {
    if (req.body.title) {
        db.run(`DELETE FROM dramaTable WHERE title = $title`,
            { $title: req.body.title },
            function (err) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log('data deleted');
                }
            }
        )
    }
    res.redirect('/');
});

app.listen(8080, function(){
    console.log('8080 포트에서 대기 중');
});