let arr1 = [1,2,3,4];

// 배열의 복사

let arr2 = arr1;

console.log("참조값의 복사 - 복사전");
console.log(arr1);
console.log(arr2);

console.log("-----------");

console.log("참조값의 복사 - 복사후"); //주소값이 동일하고 객체이름만 달라지는 것이기에 만약 arr1의 값 하나를 변경하면 같은 주소에 있는 arr2도 똑같이 값이 변경된 상태로 보여진다.

arr1[0]= 100;
console.log(arr1); //[100,2,3,4]
console.log(arr2); //[100,2,3,4]


console.log("배열요소의 복사 - 복사 전");
console.log(arr1);
console.log(arr2);

let arr3 = [... arr1]; // 배열요소의 복사(다른 주소값으로 다른 배열 선언)

arr1[1] = 200;

console.log("배열요소의 복사 - 복사 후"); //그렇기에 값이 달라짐
console.log(arr1); //[100,200,3,4]
console.log(arr3); //[100,2,3,4]

console.log("-----------");

console.log("배열요소의 복사 - 복사와 동시에 요소 추가 ");

let arr4 = [...arr1, 5]; // 복사와 동시에 요소 추가
console.log(arr4); //[100, 200, 3, 4, 5]

console.log("두 배열의 병합 ");

let arr5 = [...arr1, ...arr3]; //현재 arr1은 [100,200,3,4] arr3은 [100,2,3,4]
console.log(arr5);
