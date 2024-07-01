// 12_Promise01.js

// 함수와 비슷한 기능을 갖고 있는 "객체"
// 객체 내의 익명함수 하나를 품고 있고,
// 익명함수를 실행하고 결과를 보관하고 있다가,
// 결과가 필요할 때 함수실행결과를 전달 받아 사용할 수 있게 해주는 구조의 객체
// 비동기식 실행입니다.

// promise 객체의 전달인수 없는 선언문
// const pm = new Promise(/* 익명함수 */);
// promise 객체는 생성자의 전달인수로 현재 promise 객체의 기능을 갖는 익명함수를 전달하여야 생성됩니다.

const pm = new Promise((resolve, reject) => {

});

let func = (resolve, reject) => {};

const pm1 = new Promise(func);

// -------------------------------------------------------------------------------------------------

// 매개변수 resolve, reject 에는  함수가 전달되서 resolve(), reject() 형식으로 함수가 호출되는 명령이 작성됩니다.

const pm2 = new Promise((resolve, reject)=>{
    resolve(); // 또는 reject();
});

// resolve 와 reject 변수에 전달되는 함수는 promise 객체가 자체적으로 전달해줍니다.

// -------------------------------------------------------------------------------------------------

// 익명함수 안에서 promise에 부여된 임무를 위한 코드들이 실행되면서 같이 resolve(), reject() 가 선택실행됩니다.
// 보통 익명함수의 소정목적의 내용들이 실행된 후 결과에 따라 resolve()와 reject() 둘 중에 하나를 선택실행합니다.

const pm3 = new Promise((resolve, reject) =>{
    if(/*조건*/ true){
        resolve();
    }else{
        reject();
    }
});

// -------------------------------------------------------------------------------------------------
// resolve() 와 reject() 함수를 호출할 때, 이 프로미스객체를 사용할 지점에 전달인수를 전달 할 수 있습니다.

const pm4 = new Promise((resolve, reject) =>{
    if(/*조건*/ true){
        resolve("성공");
    }else{
        reject("실패");
    }
});

// 위에 넣은 전달인수는 반드시 String 데이터 이어야 하는 것은 아닙니다. 어떤 유형의 데이터가 전달될 수 있습니다.
// 주로 promise 결과를 사용할 곳에서 유용하게 사용할 데이터를 전달합니다.
// String, Number, 배열, 객체 등 모두 전달이 가능합니다.

// promise 객체의 실행결과 활용(결과를 품고 있는 객체를 필요에 의해 필요한 때에 별도 활용할 수 있습니다.)
// pm4.then();
// pm4.catch();
// pm4.then().catch();

pm3
.then(() => {})
.catch(() => {});

pm4
.then((message) => {
    console.log(message);
})
.catch((message) => {console.log(message);})

let condition = true;

const pm5 = new Promise((resolve, reject)=>{
    if(condition){
        resolve("condition 값은 true 입니다.");
    }else{
        reject("condition 값은 false 입니다.");
    }
});

pm5
.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})
.finally(()=>{
    console.log("promise 가 종료되었습니다.");
});

console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓");
console.log("다른명령 or 딴짓"); //promise 는 비동기식 이기 때문에  console.log("다른명령 or 딴짓"); 이것이 먼저 실행될수도있다. 
console.log("프로그램이 종료되었습니다.");