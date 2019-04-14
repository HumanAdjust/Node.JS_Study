//argv: argv는 프로세스를 실행할 때 전달 되는 정보임.
//process 객체는 프로그램을 실행했을 때 만들어 지는 프로세스의 정보를 다루는 객체임.

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if (process.argv.length > 2){
    console.log('세번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item, index){
    console.log(index + ' : ', item);
});
