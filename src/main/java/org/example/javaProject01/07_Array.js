let array = [273, "string", true, function(){}, {}, [150,170]];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[5][0]);
console.log(array[5][1]);
console.log(array);

console.log("-----------------------------");

let a = array[5];

let array2 = array; // 주소값이 복사되는 것이기에 같은 배열을 쓰는 것임. 새로 배열을 만드는 것이 아님.

console.log(array2);

var arr = ['a', 'b', 'c'];

for(let k in arr){
    console.log(`인덱스 ${k} 번지의 값 : ${arr[k]}`);
}

// 배열의 내용을 볼 수 있는 방법 #3(많이 사용함)
// arr.map(); // ()안의 익명함수를 하나 넣을껀데 그 익명함수를 배열의 요소들을 대상으로 한번씩 실행
// arr.map(function(){}); // 익명함수가 배열의 요소갯수만큼 여러번 실행. 마치 반복실행처럼

console.log("-----------------------------");

arr.map(function(val, idx){
     console.log(`인덱스 ${idx} 번지의 값 : ${val}`);
});

console.log("-----------------------------");
console.log("애로우 함수 이용");
arr.map((val, idx) => {
    console.log(`인덱스 ${idx} 번지의 값 : ${val}`);  
});

// 배열의 내용을 볼 수 있는 방법 #5
// (반복 실행문에서 k를 선언하면 배열의 인덱스를 받아오는데 여기서 v 와 of 를 사용하면 배열의 값을 직접 받아올수있다.)

console.log("-----------------------------");

for(let v of arr){
    console.log(`arr 배열의 값 : ${v}`);
}

// 배열의 내용을 볼 수 있는 방법 #6
// of 를 String 자료에 적용한 경우

for(const value of "ABC"){ // "A", "B", "C" 가 각각 value 에 전달됩니다.
    console.log(`값 : ${value}`);
}
