var fs = require('fs');
var path = require('path');

//1번
fs.writeFile('./practice.txt', 'This file is a practice file.', function(err){
    if(err){
        console.log('fs write error.', err);
    }else{
        fs.readFile('./practice.txt', 'utf8', function(err, data){
            if(err){
                console.log('fs read error.', err);
            }else{
                console.log(data);
            }
        })
    }
})

//2번
var suffix = fs.readdir('./', function (err, files) {
    for (var i = 0; i < files.length; i++) {
        if (path.extname(files[i]) == '.txt') {
            console.log(path.basename(files[i], '.txt'));
        }
    }
});

