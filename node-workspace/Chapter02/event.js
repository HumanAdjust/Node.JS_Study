process.addListener('exit', function(){
    console.log('process.addListener');
});

process.on('exit', function () {
    console.log('process.on');
});

process.once('exit', function () {
    console.log('process.once');
});

process.emit('exit');