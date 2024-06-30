var fv = function(){
    console.log("변수에 함수를 저장했어요. 변수를 호출합니다.");
}

fv();

console.log("------------------------------------");

console.log("문자 -> 숫자 : " + (Number("12345") + 123));
console.log("숫자 -> 문자 : " + (String("12.123") + 123));

console.log("------------------------------------");

console.log("Boolean(0) : " + Boolean(0)); // false
console.log("Boolean('0') : " + Boolean('0')); // true
console.log("Boolean('') : " + Boolean('')); // false
console.log("Boolean('false') : " + Boolean('false')); // true
console.log("Boolean(null) : " + Boolean(null)); // false
console.log("Boolean(undefined) : " + Boolean(undefined)); // false

// Template String
const num1 = 1;
const num2 = 2;
const result = 3;
const string1 = num1 + " 더하기 " + num2 + " 는 " + result + "입니다.";
console.log("+ 기호로 이어붙인 결과 : " + string1);

let string2 = `${num1} 더하기 ${num2} 는 ${result} 입니다.`;

console.log('Template String 구성의 결과 : ' + string2);

const num5 = 2000;
const num6 = 3;

const text = `${num5} 원짜리 ${num6} 개를 의 총 가격은 ${num5*num6}원 입니다.`;

console.log(text);


