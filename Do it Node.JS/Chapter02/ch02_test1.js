var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

console.log('현재 실행한 파일의 이름입니다: %s', __filename);

console.log('현재 실행한 파일의 경로입니다: %s', __dirname);

//sefira라는 객체를 만들어 속성으로는 비나와 데이터 말소를 추가합니다.
var sefira = {name:"비나", age:"[Data Erasured]"};

//객체 안에 있는 모든 속성을 출력합니다.
console.dir(sefira);