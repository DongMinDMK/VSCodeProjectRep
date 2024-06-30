const z = 10;
console.log("z : " + z);

console.log("-------------------------------------------");

const obj = {kor:98, eng:89, math:90};
console.log(obj);

obj.kor = 70;
obj.eng = 80;
obj.math = 99; // 되는 이유는 참조주소값은 동일한데 그 안의 값을 변경하는 것이기 때문에 값이 변경이 가능하다.
console.log(obj);