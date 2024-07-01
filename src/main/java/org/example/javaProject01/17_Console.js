const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};

console.log("평범한 로그입니다. 쉼표를 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean, obj);

// 출력할 내용이 평범한 텍스트일지라도 그것이 에러 메시지라면 console.error() 에 담아 출력합니다.
console.error("에러 메시지는 console.error에 담아주세요.");

// console.table() 안의 객체 모양의 데이터들을 테이블 형태로 출력합니다.
console.table([{name:"dmk", birth:1998}, {name:"홍길동", birth:1990}]);

// console.dir() : 객체 내의 또 다른 객체 등을 표현할 때 많이 사용합니다.
console.dir(obj, {colors: true, depth: 2});
console.dir(obj, {colors: true, depth: 1});
// colors : 자료 표현 색 지정 유무, depth : 표현하고자 하는 깊이
console.log();