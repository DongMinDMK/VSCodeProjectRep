function abc(){

}


function abc(x,y){

}

function abc(x,y){
    return z;
}

function add(x,y){
    return x+y;
}

function min(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}

function div(x,y){
    return x/y;
}

function cal(a,b, func){
    const res = func(a,b);
    return res;
}


let result = cal(10, 20, add);

console.log("연산 결과 : " + result);


function cal2(){
    return function(x,y){return x+y};
}

const rem = cal2();


result = rem(80, 13);
console.log(`리턴의 결과 : ${result}`);


function abc(x,y){
    return x+y;
}


const cal3 = function(x,y){return x+y};

const abc2 = (x,y)=>{
    return x+y;
}

console.log(`애로우 함수 호출 결과 : ${abc2(10, 20)}` );

const abc3 = ()=>{
    return 100;
}


const abc4 = x =>{
    return 100;
}

console.log(`애로우 함수 호출 결과2 : ${abc4(10)}` );

console.log("-------------------------------------");

const fun1 = () =>{
    console.log("fun1 = () => {} 매개변수 없고 리턴값 없는 함수");
}

fun1();

// 매개변수(전달인수) 있고 리턴값이 없는 함수
const fun2 = (x,y) =>{
    console.log(`fun2 = (x,y) => {} 매개변수-전달인수(${x}, ${y}) 있고 리턴값 없는 함수`);
}

fun2(30, 40);

// 매개변수 있고 리턴값이 있는 함수

const fun3 = (x,y) =>{
    console.log(`fun2 = (x,y) => {return ??} 매개변수-전달인수(${x}, ${y}) 있고 리턴값 있는 함수`);
    return x+y;
}

let res3 = fun3(10, 20);


console.log(`func3의 결과는 ` + res3);